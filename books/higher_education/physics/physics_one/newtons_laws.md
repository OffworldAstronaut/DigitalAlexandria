# Leis de Newton

# Mudança de referencial

---

Dado que sempre descrevemos os movimentos com base em algum **referencial**, em algum **sistema de coordenadas**, como exposto anteriormente, é interessante analisar a possibilidade da chamada **mudança de referencial**, isto é, analisar os corpos sob o olhar de outros observadores.

Podemos considerar, como um caso ilustrativo, dois referenciais bidimensionais, $O$ e $O'$, e um corpo $P$. 

Pela imagem acima, podemos deduzir as seguintes relações: 

$$
\begin{align*} 
\overrightarrow{r}(t) &= \overrightarrow{R}(t) + \overrightarrow{r'}(t) \\\\ 
\overrightarrow{v}(t) &= \overrightarrow{V_R}(t) + \overrightarrow{V}'(t) \\\\ 
\overrightarrow{a}(t) &= \overrightarrow{a_R}(t) + \overrightarrow{a}'(t)
\end{align*}
$$

Ou seja, conhecendo informações entre os referenciais, é possível facilmente escrever um movimento em relação a outro referencial. A partir daqui, vale explorar com mais detalhes os conceitos de **referencias inerciais e não-inerciais**. 

## Referenciais inerciais e não-inerciais

---

Chamamos **referencial inercial** o referencial que, em relação a outro referencial, possui aceleração $\overrightarrow{a_R}(t)$ nula. Ou seja, ambos os referenciais estão em repouso em relação ao outro. Em referenciais inerciais, todas as leis de Newton são válidas, especialmente a primeira. 

Do estudo de referenciais inerciais, pode-se tirar o chamado **Princípio da Relatividade Galileana**, chamado ainda de **Relatividade de Galileu**, que afirma a invariância das leis da mecânica para todos os observadores de referenciais inerciais, com uma consequência notável sendo a indistinguibilidade entre movimentos retilíneos uniformes e o repouso de corpos.

Pela Relatividade de Galileu é produzida a **transformação de Galileu**, que relaciona as grandezas do movimento realizado por um corpo em relação a dois referenciais inerciais. Valem os axiomas da física galileana-newtoniana: há um espaço e um tempo absolutos, únicos e uniformes para todos os observadores. A massa também não varia em relação aos observadores. 

A transformação de Galileu é a seguinte: 

$$
\overrightarrow{r} = \overrightarrow{r'} + \overrightarrow{V_R} \cdot t
$$

Ao se analisar outras forças, como por exemplo, a força elétrica, percebe-se que nem todas obedecem à Relatividade de Galileu, suscitando a necessidade de outro modelo físico para descrevê-las em diferentes referenciais. Notavelmente, no eletromagnetismo, é utilizada a Relatividade de Lorentz.

Por outro lado, os **referenciais não-inerciais** estão acelerando um em relação ao outro, levando a invalidade das Leis de Newton em sua forma padrão, a menos que sejam introduzidas forças fictícias.

Pelas Leis de Newton, detalhadas na próxima seção: 

$$
\begin{align*}
\overrightarrow{a} &= \overrightarrow{a'}+ \overrightarrow{A_R} \\\\ 
\overrightarrow{F} &= \overrightarrow{F'} + m \cdot \overrightarrow{A_R} \\\\ 
\overrightarrow{F'} &= \overrightarrow{F} -\boxed{m \cdot \overrightarrow{A_R}}
\end{align*}
$$

O termo destacado, que provoca a diferença entre a força experienciada pelo mesmo corpo em diferentes referenciais, é a consequência da aceleração $\overrightarrow{A_R}$. No mundo real, podemos citar como consequências o efeito Coriolis experimentado pelas massas de ar da nossa atmosfera e o “recuo” no interior de um foguete em propulsão. Nesta última situação, Einstein associou esse “recuo” provocado pelo referencial não-inercial à gravidade, levando ao nascimento da Relatividade Geral de Einstein. 

# Leis de Newton

---

Formuladas por Isaac Newton, as Leis de Newton inauguraram uma nova era no estudo da mecânica, constituindo as bases da chamada **Mecânica Clássica**, ou Mecânica Newtoniana. Newton foi a autoridade basilar em descrever a mecânica universal até o alvorecer do século XX, com a chegada da Mecânica Quântica. 

<aside>

**1ª Lei (Inércia)** — ****Todo corpo persiste em seu estado de repouso, ou de movimento retilíneo uniforme, a menos que seja compelido a modificar este estado pela ação de forças impressas sobre ele;

</aside>

<aside>

**2ª Lei (Princípio Fundamental da Dinâmica)** — ****A variação do momento é proporcional à força impressa e tem a direção da força aplicada. A quantidade de movimento é a medida do mesmo, que se origina conjuntamente da velocidade e da massa.

$$
\begin{align*}
\overrightarrow{F} &= \dfrac{d}{dt} \overrightarrow{p} \\\\ 
\overrightarrow{p} &= m \cdot \overrightarrow{v} 
\end{align*}
$$

Considerando $m$, a massa inercial, que afere a resistência do corpo à variação de seu momento, como constante ao longo do tempo, deduzimos: 

$$
\begin{align*}
\overrightarrow{F} &= \dfrac{d}{dt}(m \cdot \overrightarrow{v}) \\\\ 
&= m \cdot \dfrac{d}{dt}\overrightarrow{v} \\\\ 
&= m\overrightarrow{a}
\end{align*}
$$

</aside>

<aside>

**3ª Lei (Lei da Conservação de Momento, “Ação e Reação”)** — Se dois corpos exercem forças um no outro, essas forças possuem a mesma magnitude mas direções opostas. 

Considerando $\overrightarrow{F_{12}}$ como a força exercida pelo corpo 1 no corpo 2, e $\overrightarrow{F_{21}}$ como a força exercida pelo corpo 2 no corpo 1, além de considerarmos os dois corpos como isolados, só interagindo entre si, mostramos que: 

$$
\begin{align*}
\overrightarrow{F_{12}} &= - \overrightarrow{F_{21}} \\\\ 
\dfrac{d}{dt} \overrightarrow{p_1} &= - \dfrac{d}{dt} \overrightarrow{p_2} \\\\ 
\dfrac{d}{dt} \overrightarrow{p_1} + \dfrac{d}{dt} \overrightarrow{p_2} &= 
\dfrac{d}{dt} (\overrightarrow{p_1} + \overrightarrow{p_2}) = 0 
\end{align*}
$$

Ou seja, nessas condições, o momento total do sistema é conservado. 

</aside>

## A Gravitação Universal

---

A Lei da Gravitação Universal foi, sem dúvida, uma das grandes conquistas da vida acadêmica de Isaac Newton, unindo cientificamente a mecânica terrestre e a mecânica celeste, desde muito tempo separadas pela cosmologia aristotélica. 

Esse importante resultado pode ser derivado novamente por meio de álgebra, suas leis e algumas observações astronômicas. 

Para iniciar, imagine um corpo de massa $M$ na superfície terrestre, sujeito a uma aceleração $\overrightarrow{g}$. 

A Lua nos fornece a possibilidade de demonstrar a dimensão universal da força gravitacional, que é experienciada tanto na Terra como no céu. Sabendo-se o raio da Terra e a duração dos eclipses lunares, além da dimensão da lua (a partir dos eclipses solares), é possível deduzir o raio da orbita deste satélite, que assume o valor de $R_L = 3.8 \cdot 10^8 \text{ m}$. 

A partir desses dados, pode-se concluir que a aceleração centrípeta experienciada pela Lua em seu movimento circular uniforme ao redor da Terra é de $a_{cp} = 2.710^{-3} \text{m/s}^2$. 

Newton, em seus estudos, percebeu que $\dfrac{a_{cp}}{g} \approx \dfrac{1}{60^2} \approx \left(\dfrac{R_T}{R_L}\right)^2$ — com $R_T$ sendo o raio terrestre —, indicando uma aceleração gravitacional inversamente proporcional ao quadrado da distância, ou, de forma mais sucinta, que

$$
a_g \propto \dfrac{1}{d^2}
$$

O próximo passo é associar essa aceleração a sua respectiva força explicitamente. Supondo $F_{TM}$ e $F_{TL}$ como a força exercida pela Terra no objeto de massa $M$ e na Lua, respectivamente, podemos montar as seguintes equações: 

$$
\begin{align}
F_{TM} &= K_M \cdot \dfrac{M}{R_T^2} \\\\ 
F_{TL} &= K_L \cdot \dfrac{M_L}{R_L^2}
\end{align}
$$

Com $K_M$ e $K_L$ sendo constantes de proporcionalidade. 

Dessa forma, fica estabelecido que podemos utilizar dessa abordagem para encontrar uma lei para a força gravitacional entre dois corpos. Para o próximo passo, então, iremos analisar a Terra e a Lua, através da Terceira Lei de Newton. 

Como a Terra e a Lua são corpos isolados interagindo entre si, a força que os corpos exercem um sobre o outro, $F_{TL}$ e $F_{LT}$, são iguais em módulo e opostas em direção. $F_{LT}$ é a força que a **Lua exerce sobre a Terra**, enquanto $F_{TL}$ é a força que a **Terra exerce sobre a Lua**.

Escrevendo $F_{LT} = K_T \cdot \dfrac{M_T}{R_L^2}$ e levando em conta a relação entre as duas forças, podemos ver que $K_T \cdot M_T = K_L \cdot M_L$. Desta equação, podemos identificar uma relação de proporcionalidade direta entre as constantes e as massas dos corpos pacientes. De fato, por manipulação matemática, podemos trabalhar de trás para frente e explicitar uma constante $G$ que explicita essa relação. 

$$
\begin{align*}
K_T \cdot M_T &= K_L \cdot M_L \\\\ 
\dfrac{K_T}{M_L} &= \dfrac{K_L}{M_T} = G
\end{align*}
$$

Podemos justificar esta constante pela simetria das duas forças, que são iguais em módulo e dependentes do corpo paciente. Dessa forma, a força exercida pelo corpo não depende apenas do próprio corpo, mas também do corpo que está interagindo. 

Dessa última equação concluímos que $K_T = G \cdot M_L$  e $K_L = G \cdot M_T$. 

Ao substituir qualquer uma dessas expressões seja em $F_{LT}$ ou em $F_{TL}$, obtemos a conhecida expressão para a Lei da Gravitação Universal, com seu sinal negativo explicitando seu caráter atrativo e o vetor $r_{12}$ indicando a direção da força, que aponta para o centro dos corpos.

$$
\overrightarrow{F} = -G \cdot \dfrac{M_1M_2}{|\overrightarrow{r_{12}}|} \cdot \hat{r_{12}}
$$