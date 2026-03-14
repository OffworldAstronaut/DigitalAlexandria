# Forças e Leis de Newton

# Mecânica newtoniana

---

Antes do estudo de movimentos sistematizado por Isaac Newton, inglês do século XVII, vigorava na academia um amplo consentimento aos desenvolvimentos de Aristóteles, escritos na Antiguidade Clássica. Segundo a física aristotélica, 
o estado natural de todos os corpos era o repouso e, portanto, para manter algo em movimento era necessário uma força
atuante durante todo o movimento, caso contrário, o objeto desaceleraria até parar. 

A partir dos estudos de Galileu, que produziu conceitos como a relatividade galileana e o princípio da inércia 
(defendido pelo famosíssimo experimento do barco), Newton unificou o estudo dos movimentos celestes e terrestres num
único sistema em sua obra-prima <i>Princípios Matemáticos da Filosofia Natural</i>. Dos estudos do inglês, são amplamente
conhecidas as suas Leis da Mecânica. 

## Leis de Newton

Formuladas por Isaac Newton, as Leis de Newton inauguraram uma nova era no estudo da mecânica, constituindo as bases da chamada **Mecânica Clássica**, ou Mecânica Newtoniana. Newton foi a autoridade basilar em descrever a mecânica universal até o alvorecer do século XX, com a chegada da Mecânica Quântica. 

<aside>

**1ª Lei (Inércia)** — Todo corpo persiste em seu estado de repouso, ou de movimento retilíneo uniforme, a menos que seja compelido a modificar este estado pela ação de forças impressas sobre ele;

</aside>

<aside>

**2ª Lei (Princípio Fundamental da Dinâmica)** — A variação do **momento** é proporcional à força impressa e tem a direção da força aplicada. A "quantidade de movimento" (momento) de um corpo depende de sua massa e de sua velocidade. Mais sobre o momento pode ser visto <a href="/books/higher_education/physics/physics_one/momentum_collisions.html">aqui</a>.

$$
\begin{align*}
\vec{F} &= \dfrac{d}{dt} \vec{p} \\\\ 
\vec{p} &= m \cdot \vec{v} 
\end{align*}
$$

Considerando $m$, a massa inercial, que afere a resistência do corpo à variação de seu momento, como constante ao longo do tempo, deduzimos: 

$$
\begin{align*}
\vec{F} &= \dfrac{d}{dt}(m \cdot \vec{v}) \\\\ 
&= m \cdot \dfrac{d}{dt}\vec{v} \\\\ 
&= m\vec{a}
\end{align*}
$$

É importante salientar que $\vec{F}$ é a chamada "força resultante" impressa sobre um corpo, com este conceito sendo elucidado a partir do <b>princípio de superposição para forças</b>: somando-se todos os vetores das forças impressas sobre um corpo, o vetor produzido terá o mesmo módulo e orientação que uma única força agindo sobre aquele corpo, com esta única força denominada "resultante" ou "total". 

</aside>

<aside>

**3ª Lei (Lei da Conservação de Momento, “Ação e Reação”)** — Se dois corpos exercem forças um no outro, essas forças possuem a mesma magnitude mas direções opostas. 

Considerando $\vec{F_{12}}$ como a força exercida pelo corpo 1 no corpo 2, e $\vec{F_{21}}$ como a força exercida pelo corpo 2 no corpo 1, além de considerarmos os dois corpos como isolados, só interagindo entre si, mostramos que: 

$$
\begin{align*}
\vec{F_{12}} &= - \vec{F_{21}} \\\\ 
\dfrac{d}{dt} \vec{p_1} &= - \dfrac{d}{dt} \vec{p_2} \\\\ 
\dfrac{d}{dt} \vec{p_1} + \dfrac{d}{dt} \vec{p_2} &= 
\dfrac{d}{dt} (\vec{p_1} + \vec{p_2}) = 0 
\end{align*}
$$

Ou seja, nessas condições, o momento total do sistema é conservado. 

</aside>

## Forças e massas

O que é uma força? Feynman em sua <a target="_blank" href="https://www.feynmanlectures.caltech.edu/I_12.html">coleção de aulas</a> discorre um pouco sobre essa questão e a resposta dela é ligeiramente engraçada. Não temos uma definição perfeita nem de força, nem das leis de Newton, nem da mecânica. A ciência, por mais exata que ela pareça ser, é composta de diversas aproximações do mundo real. Entretanto, podemos designar uma definição para força, sim, que pode servir para uma ampla variedade de situações: uma força é um ente físico que provoca a mudança do estado de movimento de um corpo. 

Então, como poderíamos ver a massa de um corpo, perante o ponto de vista da mecânica? Talvez uma grandeza física que afere a inércia de um corpo, a sua dificuldade de mudar o seu estado de movimento? Pelo menos nesta edição da página, não trago muitas definições ao leitor, apenas questionamentos interessantes.

## A Gravitação Universal

A Lei da Gravitação Universal foi, sem dúvida, uma das grandes conquistas da vida acadêmica de Isaac Newton, unindo cientificamente a mecânica terrestre e a mecânica celeste, desde muito tempo separadas pela cosmologia aristotélica. 

Esse importante resultado pode ser derivado novamente por meio de álgebra, suas leis e algumas observações astronômicas. 

Para iniciar, imagine um corpo de massa $M$ na superfície terrestre, sujeito a uma aceleração $\vec{g}$. 

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
\vec{F} = -G \cdot \dfrac{M_1M_2}{|\vec{r_{12}}|} \cdot \hat{r_{12}}
$$

## Atrito

Chamamos <b>força de atrito</b> a força que se opõe ao movimento e é oriunda do contato entre duas superfícies. Esse 
atrito, de fato, é a soma vetorial entre as forças provenientes da interação entre os átomos dos corpos atritados, chamado
"solda fria". O fenômeno da solda fria ocorre quando dois materiais entram em contato e imediatamente unem-se num único corpo. 

A solda fria ocorre em maior escala, e mais facilmente, entre corpos metálicos polidos num vácuo, embora ainda ocorra em menor 
escala cotidianamente, em razão de impurezas e rugosidades presentes entre os materiais em contato. Essas atrações entre os átomos são geradas pelas <b>forças de Van der Waals</b>, forças eletrostáticas que, ao considerarmos milhões
de átomos próximos devido as rugosidades maiores ou menores dos materiais atritados, geram diferentes "dificuldades" de deslizamento de corpos em outros corpos. 

De fato, ao considerarmos um corpo sobre uma superfície sofrendo a atuação de uma força $\vec{F}$, a força de atrito gerada 
possui três características próprias: enquanto o corpo permanece em repouso, a decomposição da força atuante no eixo paralelo a orientação da superfície possui mesmo módulo e orientação oposta a força de atrito. Esta força de atrito enquanto o corpo permanece em repouso é chamada <b>força de atrito estático</b>, sendo seu módulo escrito por: 

$$
F_{\text{at}} = \mu_E N
$$

Com $\mu_E$ sendo o <b>coeficiente de atrito estático</b>, próprio do sistema em questão e detectado experimentalmente e $N$ o módulo da força normal que a superfície exerce sobre o corpo. 

Essa força de atrito estático possui um valor máximo, determinado pelo coeficiente $\mu_{EM}$, também único para cada sistema. Se o módulo da força exercida $\vec{F}$ for maior que a magnitude do atrito, o corpo começa a se mover, deslizando sobre a superfície sob o efeito do <b>atrito cinético</b>. O atrito cinético possui uma intensidade constante e mais branda que o atrito estático, dada por: 

$$
\vec{F_\text{ac}} = \mu_C N
$$

Com $\mu_C$ sendo seu coeficiente de atrito cinético. 

## Arrasto 

Chamamos <b>fluido</b>, de forma bem simples, toda substância capaz de escoar, como gases e líquidos. Ao considerarmos um corpo no interior de um fluido com uma certa velocidade relativa, uma força é exercida no móvel que, como a força de atrito, resiste ao movimento. Essa força é denominada <b>força de arrasto</b> ou apenas <b>arrasto</b>. 

![](https://upload.wikimedia.org/wikipedia/commons/c/c8/Flow_sphere.svg)

<i>Representação de uma esfera se movendo por um fluido com formação de turbulência na parte traseira. Imagem sob CC-BY-SA, via <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Flow_sphere.svg">Wikimedia Commons</a></i>

Fixando o material do fluido como o ar e o formato do corpo como algo redondo, além de sua velocidade como suficientemente alta para a produção de redemoinhos na parte traseira (turbulência), escrevemos a magnitude da força de arrasto $\vec{D}$ como

$$
D = \dfrac{1}{2}C\rho A v^2
$$

$C$ é, como o coeficiente de atrito, uma grandeza determinada experimentalmente chamada <b>coeficiente de arrasto</b>, enquanto $\rho$ ("rô") é a chamada <b>massa específica</b> do fluido (a razão entre sua massa e seu volume). Além disso, $A$ é a área da seção reta perpendicular do corpo em relação a velocidade $\vec{v}$, com $v$ sendo a velocidade escalar. 

<aside>

Há uma certa sutileza entre "densidade" e "massa específica". Enquanto a densidade considera um corpo por inteiro (incluindo outros materiais e espaços vazios), a massa específica considera apenas a substância pura. 

</aside>

Observando uma situação específica de queda livre no ar, um movimento vertical acelerado para baixo, torna-se possível introduzir o conceito de <b>velocidade terminal</b>. 

Chamamos <b>velocidade terminal</b> (geralmente denotada por $v_t$) a velocidade constante alcançada por um corpo em queda livre quando sua força de arrasto equilibra-se em módulo com a força gravitacional, produzindo uma força resultante nula. Pela segunda lei de Newton, é possível escrever $D - F_g = ma$ que, ao substituirmos e rearranjarmos alguns termos, chegamos na expressão 

$$ 
v_t = \sqrt{\dfrac{2F_g}{C\rho A}}
$$

![](https://upload.wikimedia.org/wikipedia/commons/4/48/Bad_Lieutenants_VFS_skydiving_team.jpg)

<i>A velocidade terminal é muito comum em situações como o skydiving, em que diferentes posições corporais podem aumentá-la ou diminui-la. Imagem sob domínio público, via <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Bad_Lieutenants_VFS_skydiving_team.jpg">Wikimedia Commons</a></i>

# Mudança de referencial

---

Dado que sempre descrevemos os movimentos com base em algum **referencial**, em algum **sistema de coordenadas**, <a target="_blank" href="kinematics.html">como exposto anteriormente</a>, é interessante analisar a possibilidade da chamada **mudança de referencial**, isto é, analisar os corpos sob o olhar de outros observadores.

Podemos considerar, como um caso ilustrativo, dois referenciais bidimensionais, $O$ e $O'$, e um corpo $P$. 

Pela imagem acima, podemos deduzir as seguintes relações: 

$$
\begin{align*} 
\vec{r}(t) &= \vec{R}(t) + \vec{r'}(t) \\\\ 
\vec{v}(t) &= \vec{V_R}(t) + \vec{V}'(t) \\\\ 
\vec{a}(t) &= \vec{a_R}(t) + \vec{a}'(t)
\end{align*}
$$

Ou seja, conhecendo informações entre os referenciais, é possível facilmente escrever um movimento em relação a outro referencial. A partir daqui, vale explorar com mais detalhes os conceitos de **referencias inerciais e não-inerciais**. 

## Referenciais inerciais e não-inerciais

---

Chamamos **referencial inercial** o referencial que, em relação a outro referencial, possui aceleração $\vec{a_R}(t)$ nula. Ou seja, ambos os referenciais estão em repouso em relação ao outro. Em referenciais inerciais, todas as leis de Newton são válidas, especialmente a primeira, sem a necessidade da introdução de forças fictícias. 

![](https://upload.wikimedia.org/wikipedia/commons/c/cb/Inertial_frames.svg)

<i>Os referenciais $S'$ e $S$ se movimentam um em relação ao outro com uma velocidade uniforme $\vec{v}$. Um é referencial inercial em relação a outro, com a trajetória de um movimento em relação a um referencial sendo idêntica se olhada do ponto de vista de outro referencial. Imagem sob CC-BY-SA, via <a target="_blank" href="https://commons.wikimedia.org/wiki/File:Inertial_frames.svg">Wikimedia Commons</a>.</i>

Do estudo de referenciais inerciais, pode-se tirar o chamado **Princípio da Relatividade Galileana**, chamado ainda de **Relatividade de Galileu**, que afirma a invariância das leis da mecânica para todos os observadores de referenciais inerciais, com uma consequência notável sendo a indistinguibilidade entre movimentos retilíneos uniformes e o repouso de corpos.

Pela Relatividade de Galileu é produzida a **transformação de Galileu**, que relaciona as grandezas do movimento realizado por um corpo em relação a dois referenciais inerciais. Valem os axiomas da física galileana-newtoniana: há um espaço e um tempo absolutos, únicos e uniformes para todos os observadores. A massa também não varia em relação aos observadores. 

A transformação de Galileu é a seguinte: 

$$
\vec{r} = \vec{r'} + \vec{V_R} \cdot t
$$

Ao se analisar outras forças, como por exemplo, a força elétrica, percebe-se que nem todas obedecem à Relatividade de Galileu, suscitando a necessidade de outro modelo físico para descrevê-las em diferentes referenciais. Notavelmente, no eletromagnetismo, é utilizada a Relatividade de Lorentz.

Por outro lado, os **referenciais não-inerciais** estão acelerando um em relação ao outro, levando a invalidade das Leis de Newton em sua forma padrão, a menos que sejam introduzidas forças fictícias.

Pelas Leis de Newton: 

$$
\begin{align*}
\vec{a} &= \vec{a'}+ \vec{A_R} \\\\ 
\vec{F} &= \vec{F'} + m \cdot \vec{A_R} \\\\ 
\vec{F'} &= \vec{F} -\boxed{m \cdot \vec{A_R}}
\end{align*}
$$

O termo destacado, que provoca a diferença entre a força experienciada pelo mesmo corpo em diferentes referenciais, é a consequência da aceleração $\vec{A_R}$. No mundo real, podemos citar como consequências o efeito Coriolis experimentado pelas massas de ar da nossa atmosfera e o “recuo” no interior de um foguete em propulsão. Nesta última situação, Einstein associou esse “recuo” provocado pelo referencial não-inercial à gravidade, levando ao nascimento da Relatividade Geral de Einstein. 

# Referências 

---

1. <i>Playlist</i> de Física 1 da USP formada por aulas do prof. Dr. Marcelo Martinelli (<a target="_blank" href="https://www.youtube.com/playlist?list=PLAudUnJeNg4vmlyuv__uBgdOkzw4VSrcJ">Acesse aqui</a>);
2. LING, S. J. et al. University physics. Houston, Texas: Openstax, Rice University, 2018. v. 1 (<a target="_blank" href="https://openstax.org/details/books/university-physics-volume-1">Acesse aqui</a>);
3. Feynman, Richard P., Matthew L. Sands, and Robert B. Leighton. 1989. The Feynman Lectures on Physics. Reading, Mass: Addison-Wesley. Chapter 12: Characteristics of Force (<a target="_blank" href="https://www.feynmanlectures.caltech.edu/I_12.html">Acesse aqui</a>)
4. HALLIDAY, D.; RESNICK, R.; WALKER, J. Fundamentos de física, v. 1: mecânica. 10. ed. Rio de Janeiro: LTC, 2016;