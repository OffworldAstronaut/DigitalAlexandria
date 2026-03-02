# Vetores 

# Definição e representação

--- 

Chamamos <b>vetores</b> os objetos matemáticos que possuem um módulo (magnitude) e uma orientação. No campo da Física, algumas grandezas são descritas como <i>vetoriais</i>, possuindo direção e magnitude e descritas utilizando estes objetos. Como exemplo, podemos citar entes físicos como força e momento. Estas grandezas contrastam com as chamadas <b>escalares</b>, descritas por números reais ("escalares"). Dentre estas últimas, podemos citar como exemplo a temperatura ou a energia cinética de um corpo. 

São chamados <b>vetores unitários</b> ou <b>versores</b> os vetores que possuem magnitude ("tamanho") exatamente uma unidade, comumente sendo escolhidos para formar um sistema de coordenadas. No espaço usual, chamamos o sistema de coordenadas de <b>dextrogiro</b>, pois, após a mudança de posição de algum dos vetores, a posição relativa aos outros deve permanecer igual. 

Os versores padrão do espaço tridimensional são $\hat{i}$, $\hat{j}$ e $\hat{k}$, ortogonais entre si. Quando escrevemos versores, eles possuem um circunflexo, geralmente, para diferenciá-los de outros vetores. 

![](https://upload.wikimedia.org/wikipedia/commons/0/0c/Euclidean_vector_space_R3.png)

<i>Espaço tridimensional representado. Nesta ilustração, os versores são nomeados por letras "j" com índices numéricos.</i>

Os vetores podem ser representados de forma geométrica ou algébrica de acordo com um sistema de coordenadas (matematicamente conhecido por "base") e, a partir dessas representações, podem passar por operações matemáticas. 

Ao representarmos os vetores, fazemos o uso dos chamados <b>componentes</b>, projeções destes vetores num determinado eixo. Escrever um vetor como uma soma de seus componentes é realizar a decomposição deste vetor. Notavelmente, no espaço tridimensional, podemos representar um vetor como a soma de seus vetores componentes ou pela combinação de sua magnitude com seus ângulos em relação aos eixos das coordenadas. 

![](https://upload.wikimedia.org/wikipedia/commons/8/85/Vector_decomposition_2d.svg)

<i>Ilustração da soma e da decomposição de vetores em seus componentes base. CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Vector_decomposition_2d.svg" target="_blank">Wikimedia Commons</a>.</i>


<aside>

Este livro possui o objetivo de ser um resumo adequado para a disciplina de Física 1, dispensando muito da profundidade e rigorosidade matemática em favor de algo mais simples e especializado. Algo mais aprofundado será escrito na parte matemática (nos tópicos sobre Geometria Analítica e Álgebra Linear).

</aside>

# Operações 

## Multiplicação por escalar 

Um vetor pode ser multiplicado por um escalar, produzindo um novo vetor. Enquanto algebricamente suas coordenadas sejam multiplicadas por este número, graficamente o vetor é "esticado" ou "comprimido" de acordo.

<aside>

As coordenadas de um vetor são chamadas também "componentes" ou "componentes escalares". Podemos representar um vetor com suas coordenadas sendo entradas de uma matriz coluna.

</aside>

Por exemplo, $5\vec{v}$ produz um vetor $\vec{u}$ com o quíntuplo da magnitude de $\vec{v}$. Em coordenadas, teríamos algo como: 

$$
5
\begin{bmatrix}
    u_1 \\ u_2 
\end{bmatrix}
=
\begin{bmatrix}
    5u_1 \\ 5u_2
\end{bmatrix}
=
\begin{bmatrix}
    v_1 \\ v_2
\end{bmatrix}
$$

## Soma de vetores 

Podemos somar dois vetores geometricamente transladando um vetor de forma que seu início sobreponha-se com a ponta de outro. Traçando um novo vetor que una a origem de um dos vetores com a ponta de outro, construímos seu <b>vetor resultante</b> por meio da <b>regra do paralelogramo</b>.

![](https://upload.wikimedia.org/wikipedia/commons/a/a6/Vector_add_scale.svg)

<i>Ilustração da regra do paralelogramo ao somar dois vetores. Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Vector_add_scale.svg" target="_blank">Wikimedia Commons</a></i>

Para somar dois vetores algebricamente, podemos somar suas coordenadas, produzindo uma nova matriz. 

Por exemplo, dado os vetores 

$$
\begin{align*}
\vec{a} &=

\begin{bmatrix}
2 \\ 5     
\end{bmatrix}

\\

\vec{b} &= 

\begin{bmatrix}
    4 \\ 5
\end{bmatrix}

\end{align*}
$$ 

Sua soma pode ser escrita como: 

$$ 
\begin{align*}
\vec{a} + \vec{b} &=

\begin{bmatrix}
    2 + 4 \\ 5 + 5 
\end{bmatrix}
\\
&= 

\begin{bmatrix}
    6 \\ 10 
\end{bmatrix}
    
\end{align*}
$$

Considerando os versores do espaço tridimensional, poderíamos escrever a soma desta maneira, também: 

$$
\begin{align*}
\vec{a} + \vec{b} &= 2\hat{i} + 5\hat{j} + 4 \hat{i} + 5 \hat{j}\\
&= (2 + 4)\hat{i} + (5 + 5)\hat{j} \\ 
&= 6\hat{i} + 10\hat{j}
\end{align*}
$$

## Produto escalar 

O <b>produto escalar</b>, também chamado <b>produto ponto</b> ou <b>produto interno</b> é uma operação especial definida entre dois vetores definida da seguinte maneira: 

$$ 
\vec{a} \cdot \vec{b} = ||a||\cdot ||b|| \cdot \cos{\theta}
$$

Com $||a||$ e $||b||$ sendo as magnitudes de cada vetor e $\cos{\theta}$ o ângulo formado entre os dois vetores considerados.

O produto interno também é comutativo, isto é, $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$. Além disso, esta operação pode ser escrita como a soma do produto coordenada a coordenada dos vetores. Em notação de somatório, podemos escrever: 

$$
\vec{a} \cdot \vec{b} = \langle \vec{a}, \vec{b} \rangle = \sum_{i=1}^{N}a_ib_i = a_1b_1 + a_2b_2 + ... + a_nb_n
$$

Como propriedade notável, o produto escalar nos fornece a componente de um dado vetor $\vec{a}$ na direção de um vetor $\vec{b}$ por meio da equação $a_b = \vec{a} \cdot \hat{b}$, onde $\hat{b}$ é o vetor unitário na direção do vetor $\vec{b}$, isto é, $\dfrac{\vec{b}}{||b||}$. 

![](https://upload.wikimedia.org/wikipedia/commons/3/3e/Dot_Product.svg)

<i>Ilustração da projeção escalar entre dois vetores. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Dot_Product.svg">Wikimedia Commons</a>.</i>

## Produto vetorial

Por sua vez, o produto vetorial é uma outra operação especial, também definida entre dois vetores. Diferencia-se do produto escalar por gerar outro vetor, com este perpendicular aos dois vetores originais. Denotado por $\vec{a} \times \vec{b}$, lê-se "$\vec{a}$ vetor $\vec{b}$" ou "$\vec{a}$ externo $\vec{b}$", diferenciando-se do produto escalar, geralmente lido como "interno". 

O vetor gerado pelo produto vetorial possui orientação determinada pela <a href="https://pt.wikipedia.org/wiki/Regra_de_Fleming" target="_blank">regra da mão direita</a>, por uma conveniência para evitar trabalho desnecessário em relação aos vetores base do espaço escolhido. A magnitude do vetor gerado é $M = ||a|| \cdot ||b|| \cdot \sin{\phi}$, com $\phi$ correspondendo ao menor ângulo entre os vetores $\vec{a}$ e $\vec{b}$. 

Vale lembrar que, por consequência das definições do produto vetorial, e do espaço euclideano, o produto vetorial não é comutativo. Entretanto, vale a identidade $\vec{b} \times \vec{a} = -(\vec{a} \times \vec{b})$. 

![](https://upload.wikimedia.org/wikipedia/commons/b/b0/Cross_product_vector.svg)

<i>Ilustração do produto vetorial, Domínio Público, via <a href="https://commons.wikimedia.org/wiki/File:Cross_product_vector.svg" target="_blank">Wikimedia Commons</a>.</i>