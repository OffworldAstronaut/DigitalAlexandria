# Momento

# Definição

---

Podemos definir a “quantidade de movimento” intuitivamente como a “quantidade de movimentação” que um corpo tem, o “quão” ele quer continuar se movendo. Esse conceito está muito ligado com a Energia Cinética. 

É importante frisar que a quantidade de movimento (também chamada de **momento**) é uma grandeza abstrata, assim como energia, por isso, pode ser mais difícil de visualizá-la do que uma força, por exemplo. 

Podemos calcular o **momento** linear de um objeto por meio da fórmula 

$$
Q = m v
$$

Com $Q$ sendo o momento, $m$ a massa do corpo e $v$ sua velocidade. 

Além disso, é fácil ver que a variação do momento pode ser escrita como

$$
\Delta Q = Q_f - Q_i 
$$

E, no caso específico em que a massa é constante, temos que 

$$
\Delta Q = mv_f - mv_i = m(v_f - v_i) = m \Delta v
$$

## Momento e força

---

Por análise dimensional, podemos deduzir que a unidade do momento é de $\text{kg} \cdot \text{m}/\text{s}$. 

Essa análise é importante. Perceba a unidade do momento, e a unidade da **força**. Se dividirmos a unidade do momento por tempo novamente, teremos um $\text N$! 

Logo, a partir disso, podemos concluir que 

$$
F=\frac{\Delta Q}{\Delta t}
$$

Que é a **escrita original** da definição de força, feita por Newton em seu livro!

A magnitude de uma força é calculada pela **variação do momento no tempo**. 

# Impulso

---

O **impulso** é uma grandeza vetorial que mede a variação do momento de algum objeto, relacionando nesse processo a força aplicada, o tempo percorrido e a quantidade de movimento. 

Essa grandeza é calculada pela seguinte expressão: 

$$
I = F\Delta t
$$

Nos utilizando da análise dimensional, podemos ver que o impulso é medido em **Newton-segundos**: um impulso com um módulo de 1 Newton-segundo equivale a uma força de 1 newton aplicada durante 1 segundo.

## Teorema do Impulso

---

O Teorema do Impulso relaciona o impulso com a diferença de momento de um objeto, por meio da seguinte expressão abaixo.

$$
F\Delta t = \Delta Q=I
$$

Podemos encontrar essa expressão apenas multiplicando tambos os lados da definição de força apresentada acima por $\Delta t$. 

$$
F=\frac{\Delta Q}{\Delta t} \Rightarrow F \Delta t =\Delta Q \Rightarrow I = \Delta Q
$$

# Colisões

---

Colisões acontecem quando corpos se chocam, podendo ser de três tipos: **perfeitamente elásticas, parcialmente elásticas** ou **perfeitamente inelásticas**. 

## Colisões perfeitamente elásticas

---

Nessas colisões, toda a energia cinética, $K$, do sistema é conservada, ou seja, $\Delta K = 0$. 

Como toda a energia é conservada, podemos nos utilizar dessa propriedade para encontrar as velocidades de cada corpo após a colisão $(v_n)$, dadas as velocidades iniciais $(u_n)$ e suas massas $(m_n)$, pelas equações a seguir. 

$$
v_{1} = \frac{m_1-m_2}{m_1+m_2}u_1+\frac{2m_2}{m_1+m_2}u_2
$$

$$
v_2 = \frac{2m_1}{m_1+m_2}u_1+\frac{m_2-m_1}{m_1+m_2}u_2
$$

![Exemplo de uma colisão perfeitamente elástica entre massas iguais.](../images/momentum/colisao_elastica1.gif)

![Exemplo de uma colisão perfeitamente elástica entre duas massas diferentes.](../images/momentum/colisao_elastica2.gif)

*Acima: exemplos de colisões perfeitamente elásticas. GIFs retirados [daqui](https://en.wikipedia.org/wiki/Elastic_collision).*

## Colisões inelásticas

---

Nas colisões inelásticas, a energia cinética do sistema **não** é completamente conservada, sendo convertida em outras formas como **som e calor**, por exemplo. 

Quando uma colisão é **perfeitamente inelástica**, o máximo valor possível de energia cinética é perdido, “colando” os dois corpos num só, com ambos possuindo a mesma velocidade final.

![Exemplo de uma colisão perfeitamente inelástica entre duas massas iguais.](../images/momentum/colisao_inelastica.gif)

*Acima: exemplo de uma colisão perfeitamente inelástica. GIF retirado [daqui](https://en.wikipedia.org/wiki/Inelastic_collision).*

Podemos encontrar as velocidade final dos corpos por meio da expressão abaixo: 

$$
v = \frac{m_au_a + m_bu_b}{m_a+m_b}
$$

Para deduzir essa expressão, trabalhe com a **conservação do momento** (e o fato de que os corpos estão como um corpo só depois da colisão) e rearrange a expressão!

Você pode achar essa dedução <a href="/books/high_school/physics/physics1/collisions_study.pdf">neste PDF</a>!

### Coeficiente de restituição

---

Definido como sendo a razão entre as velocidades após a colisão e antes da colisão, o **coeficiente de restituição ($e$**) é expresso pela equação abaixo: 

$$
e=\frac{|v_1-v_2|}{|u_1 - u_2|} = \frac{|\Delta v|}{|\Delta u|}
$$

Por meio do coeficiente de restituição, é possível montar uma **expressão geral** que abarca todos os cenários de colisões unidimensionais: 

$$
v_1 = \frac{m_2e(u_2 - u_1) + m_1v_1 + m_2u_2}{m_1+m_2}
$$

$$
v_2=\frac{m_1e(u_1-u_2)+m_1u_1+m_2u_2}{m_1 + m_2}
$$

Quando $e=1$, temos uma colisão **perfeitamente elástica**; caso $e=0$, temos uma colisão **perfeitamente inelástica**.