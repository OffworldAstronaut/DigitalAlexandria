import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT = path.resolve(__dirname, "..");

const BOOKS = path.join(ROOT, "books");
const TEMPLATE = fs.readFileSync(
  path.join(ROOT, "templates", "book.html"),
  "utf8"
);
const OUT = path.join(ROOT, "public", "books");

function convertMathDelimiters(md) {
  md = md.replace(
    /\$\$([\s\S]+?)\$\$/g,
    (_, content) => `\\\\[${content}\\\\]`
  );

  md = md.replace(
    /(^|[^$])\$([^\n$]+?)\$/g,
    (_, before, content) => `${before}\\\\(${content}\\\\)`
  );

  return md;
}

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : path.join(dir, e.name)
    );
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dest, entry.name);

    entry.isDirectory() ? copyDir(s, d) : fs.copyFileSync(s, d);
  }
}

function extractTitleAndBody(markdown) {
  const lines = markdown.split("\n");

  if (lines.length > 0 && lines[0].startsWith("# ")) {
    const title = lines[0].replace(/^#\s+/, "").trim();
    const body = lines.slice(1).join("\n").trimStart();
    return { title, body };
  }

  return { title: null, body: markdown };
}

for (const file of walk(BOOKS)) {
  if (!file.endsWith(".md")) continue;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const { title: mdTitle, body } = extractTitleAndBody(content);
  const title = data.title ?? mdTitle ?? "Livro";

  const bodyWithConvertedMath = convertMathDelimiters(body);

  const html = marked.parse(bodyWithConvertedMath);

  const page = TEMPLATE.replace("{{CONTENT}}", html).replaceAll("{{TITLE}}", title);

  const outPath = file.replace(BOOKS, OUT).replace(".md", ".html");

  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, page);

  const srcImages = path.join(path.dirname(file), "images");
  const outImages = path.join(path.dirname(outPath), "images");

  copyDir(srcImages, outImages);

  console.log("Generated:", outPath);
}