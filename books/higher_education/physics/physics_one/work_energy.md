# Trabalho e Energia Cinética

# As origens do trabalho 

--- 

O que é **trabalho**? O conceito de trabalho na Física está intimamente ligado aos conceitos de **energia** e **força**, também. Para ilustrar a origem dessa curiosa grandeza, vamos imaginar uma situação simples: um bloquinho num plano inclinado. 

![Plano inclinado](images/work_energy_planoinclinado.jpeg)

*Acima podemos ver um plano inclinado utilizado em universidades do século XVIII (Imagem sob CC-BY-SA, via <a href="https://commons.wikimedia.org/wiki/File:Piano_inclinato_inv_1041_IF_21341.jpg">Wikimedia Commons</a>).*

Vamos imaginar que no sopé deste plano inclinado temos um bloquinho que é lançado por uma mola. Desconsiderando o atrito e todas as outras forças que não sejam a força peso, o bloquinho avança com uma velocidade inicial $\overrightarrow{v_o}$ que diminui ao longo do tempo. 

É possível ver que este corpo está em um movimento retilíneo uniformemente variado e, por isso, podemos utilizar as equações:

$$
\begin{align*}
x(t) &= x_0 + v_o \cdot t + \dfrac{at^2}{2} \\\\
v_f &= v_o + at
\end{align*}
$$

Deduzindo a Equação de Torricceli pela substituição da segunda equação na primeira e rearranjando os termos, chegamos em duas expressões bastante úteis. A primeira é o que chamamos de **constante do movimento**, uma quantidade que não varia ao longo do tempo de execução do movimento, que pode ser útil na resolução de alguns problemas. Já a segunda, mais interessante para nosso objetivo, é uma relação entre a variação da velocidade e a variação do espaço. 

$$
\dfrac{1}{2}(\Delta v)^2 = a \Delta x 
$$

Multiplicando por $m$ em ambos os lados, a massa do objeto, chegamos numa segunda relação. 

$$
\begin{align*}
ma \Delta x &= \dfrac{1}{2}m(\Delta v)^2 \\\\ 
F \Delta x &= \dfrac{1}{2}m(\Delta v)^2 \\\\ 
&= \boxed{\dfrac{1}{2}mv_f^2} - \dfrac{1}{2}mv_0^2 \\\\ 
\end{align*}
$$

Uma grandeza relacionada diretamente com a força aplicada sobre o objeto e seu deslocamento está ligada com a variação de uma quantidade nova que depende tanto da massa quanto do módulo de sua velocidade. Essa grandeza chama-se **trabalho de uma força**.

De fato, essa quantidade própria do movimento do corpo que é variada pelo trabalho é chamada **energia cinética** $(K)$, podendo ser também escrita em função do momento: $\dfrac{p^2}{2m}$.

Perceba que, ao montar um gráfico $P \times x$, essa grandeza corresponde à área sob a curva. Isso será de especial motivação para o teorema a seguir.

# Teorema Trabalho-Energia Cinética

--- 

O **teorema trabalho-energia cinética** declara que o trabalho realizado por uma força é a variação da energia cinética de um corpo, exatamente o que acabamos de vislumbrar, com um único diferencial: essa conclusão é válida para **qualquer força**, inclusive uma força variável, ao contrário do caso base que exploramos, com uma força constante no tempo. 

Supondo o trabalho $W$ de uma força $F$ como a seguinte integral, podemos desenvolvê-la para encontrar o resultado esperado. 

$$
\begin{align}
W &= \int_{x_1}^{x_2} F \ dx \\\\ 
&= \int_{x_1}^{x_2} m \dfrac{dv}{dt} \ dx \\\\
&= \int_{x_1}^{x_2} mv \dfrac{dv}{dx} \ dx \\\\
&= \int_{v_1}^{v_2} mv \ dv \\\\
&= \dfrac{1}{2}mv_2^2 -\dfrac{1}{2}mv_1^2
\end{align}
$$

Perceba que o passo $(2)$ foi possível por uma aplicação direta do princípio fundamental da dinâmica (2ª Lei de Newton) e a substituição da variável de integração (espaço para velocidade) foi indispensável. 

<aside>
Vale mencionar aqui que estas demonstrações podem ser feitas para duas ou três dimensões, mas este documento se atém a primeira dimensão por uma questão de simplicidade.
</aside>

Por fim, perceba que ao final chegamos numa expressão em que estamos **integrando o momento** ao longo da variação da velocidade. Esse fato levanta a denominação do Teorema como a "forma integral" da Segunda Lei de Newton.

## Potência

...

# Energia Potencial e a Conservação da Energia

...