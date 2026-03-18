# Introdução à Teoria dos Erros 

# A Teoria dos Erros e Medidas e sua importância para a ciência

---

O experimento é a base das ciências naturais e, em especial, a atividade central de toda a Física. Toda teoria física, por mais bem elaborada que seja, somente pode ser considerada válida se os experimentos concordam com ela.

Se os experimentos não podem ser adequadamente justificados pela teoria, ela é inadequada e deve ser adaptada ou substituída completamente. Como exemplo para esta prática científica, podemos citar os sucessivos modelos atômicos propostos deste o século XIX: Dalton, Rutherford, Bohr, Schrödinger... todos eles buscaram explicar teoricamente o que o experimento mostrava e seus predecessores falhavam. 

Entretanto, há algo inerente nos experimentos que precisa ser considerado para que estes mantenham sua utilidade: eles estão sujeitos a <b>erros</b>. Uma medida pode se tornar imprecisa por falha no instrumento, inexperiência do aplicador ou até mesmo por interferências externas fora do controle do cientista. Como então levar em conta estes ruídos no processo experimental? 

A <b>teoria dos erros e medidas</b> surge com esta proposta. 

# Medindo grandezas físicas 

--- 

Denominamos <b>grandeza</b> como toda propriedade mensurável de algo na realidade, seja o objeto considerado material ou matemático. Neste documento iremos tratar especialmente das <b>grandezas físicas</b> da realidade material. 

Ao medirmos grandezas com algum instrumento, estaremos sempre em alguma das três situações a seguir. 

## Grandeza de valor exato

Ao mensuramos uma grandeza cujo valor é exato, todas as diferenças que obtivermos do valor conhecido são denominadas <b>erros</b>, sendo matematicamente definidos como 

$$
E = |V_\text{real} - V_\text{medido}|
$$

Como exemplo podemos citar a soma dos ângulos internos de um triângulo. É conhecido que sua soma será 180 graus sempre, entretanto, ao medirmos, é possível registrar valores como $181.5°$ ou $179.6°$ — valores dotados de um erro, maior ou menor. 

## Grandeza com valor adotado como referência 

Ao mensuramos uma grandeza cujo valor não é exato, mas sim definido, todas as diferenças entre as medições e este valor definido são chamadas <b>desvios</b>. Como exemplo podemos citar o módulo da aceleração da gravidade ao nível do mar, $9,81 \text{ m/s}^2$: é possível que, ao medirmos, obtenhamos valores como $9,7$, $9,9$ ou $10,2$. Estas medições estão afetadas por desvios. 

Matematicamente, contabilizamos o desvio $d$ de uma medida por

$$
d = |V_\text{medido} - V_\text{adotado}|
$$

## Grandeza com valor desconhecido 

Ao medirmos repetidamente uma grandeza de valor desconhecido, observamos que as leituras raramente coincidem entre si. Esse espalhamento nos resultados é inevitável e constitui a manifestação prática da incerteza da medição. Suas origens são três: fatores instrumentais (a própria resolução do aparelho), fatores humanos (julgamento e reação do operador) e fatores ambientais (temperatura, vibração, pressão atmosférica).

### Algarismos significativos e o algarismo duvidoso

Toda medição produz dígitos que podem ser lidos com total segurança — os algarismos certos — e um último dígito, obtido por estimativa entre as menores divisões da escala, chamado algarismo duvidoso. O conjunto de algarismos certos mais o algarismo duvidoso forma os algarismos significativos da medida.

Por convenção, registra-se somente um algarismo duvidoso. Dígitos além desse ponto carecem de significado físico e não devem ser anotados. Assim, ao medir com uma régua milimetrada, que possui resolução de $1 \text{ mm}$, o operador lê os milímetros com certeza e estima décimos de milímetro — estes últimos são os algarismos duvidosos. 

É importante mencionar ainda que limitamos os algarismos significativos ao intervalo, da esquerda para a direita, a partir do primeiro algarismo diferente de zero. Por exemplo, no número $0.000023$, os algarismos significativos são $2$ e $3$. 

<b>Exemplo:</b> Uma experimento com uma régua milimetrada forneceu a leitura $12,34 \text{ cm}$. Os dígitos $1$, $2$ e $3$ estão certos, enquanto o $4$ é duvidoso. O resultado possui quatro algarismos significativos. 

A diferenciação de algarismos duvidoso e certos permite ainda a prática de arrendondamento: caso um algarismo duvidoso seja menor ou igual a cinco, retira-se os algarismos posteriores. Caso seja maior que cinco, além de retirar os algarismos posteriores, soma-se um. Por exemplo, $23,4575432 \rightarrow 23,46$. 

A motivação por trás do arrendondamento está em conservar apenas um algarismo duvidoso na medida, afinal, se não temos certeza de medição a partir de uma certa escala, não a teremos em escalas ainda menores e, portanto, não há utilidade em conservar mais que um algarismo duvidoso. 

### Repetição de medidas e a média aritmética 

Para minimizar a influência dos fatores aleatórios, a grandeza é medida $n$ vezes nas mesmas condições experimentais. O melhor estimador do valor verdadeiro é a média aritmética das $n$ leituras:

$$
\bar{x} = \dfrac{1}{n}\sum_{i=1}^{n}x_i = \dfrac{x_1 + x_2 + ... x_n}{n}
$$

A média é o valor mais provável para a grandeza, pois os erros aleatórios tendem a se cancelar mutuamente quando o número de medições é suficientemente grande.

### Incerteza e desvio médio absoluto 

A <b>incerteza</b> $\delta x$ quantifica o intervalo em torno da média dentro do qual se espera que o valor verdadeiro se encontre. Num tratamento introdutório, ela é estimada pelo desvio médio absoluto — a média dos afastamentos de cada medição em relação ao valor central:

$$
\delta x = \dfrac{1}{n}\sum_{i=1}^{n} |x_i - \bar{x}| 
$$

A incerteza não é uma imperfeição a ser eliminada, mas uma informação intrínseca ao resultado. Ignorá-la equivale a omitir parte do que o experimento comunicou. Possui origem instrumental (limitações do próprio instrumento de medida), humana (erros humanos) e ambiental (condições ambientais que afetam o instrumento). Embora possa ser reduzida, é impossível eliminá-la de fato.

### Notação do resultado experimental

O resultado de uma medição deve sempre ser expresso na forma:

$$
x = \bar{x} \pm \delta x \text{ [unidade]}
$$

A leitura correta dessa expressão é: "o valor da grandeza se encontra no intervalo $[\bar{x} - \delta x, \bar{x} + \delta x]$". Por consistência, a incerteza deve ser arrendonda para um único algarismo significativo, e o valor central deve ser expresso com a mesma casa decimal que a incerteza. 

<aside>

<b>Exemplo:</b> Cinco medições da largura de uma peça metálica forneceram (em mm): 24,3; 24,5; 24,4; 24,6; 24,4. 

$$
\bar{x} = \dfrac{24.3 + 24.5 + 24.4 + 24.6 + 24.4}{5} = 24.44 \approx 24.4 \text{ mm}
$$

$$
\delta x = \dfrac{|24.3 - 24.4| + |24.5 - 24.4| + ... + |24.4 - 24.4|}{5} = 0.08 \approx 0.1 \text{ mm}
$$

O valor mais provável da largura da peça, juntamente com sua incerteza de medição, é portanto:

$$
L = (24.4 \pm 0.1) \text{ mm}
$$

</aside>

Nem toda fonte de incerteza é reduzida pela repetição de medidas. Os <b>erros sistemáticos</b> — causados, por exemplo, por um instrumento descalibrado ou pela presença permanente de uma perturbação ambiental — deslocam todas as medições na mesma direção. Eles não se cancelam com a média e devem ser identificados e corrigidos por outros meios, como a calibração do instrumento com um padrão de referência. A repetição de medidas combate os erros aleatórios; a calibração combate os erros sistemáticos. 

# Referências 

---

1. IFAN HUGHES; HASE, T. P. A. Measurements and their uncertainties : a practical guide to modern error analysis. Oxford: New York, 2010.