# Momento linear e colisões

# Momento 

Chamamos **momento** $(\overrightarrow{p})$ a grandeza associada ao movimento de um corpo, dependente de sua massa e velocidade. Originalmente, ao definí-la, Newton a chamou de "quantidade de movimento". 

Chamada **momento linear** quando considerada em apenas uma única dimensão, como escalar, a grandeza do momento pode ser compreendida como a "inércia" da mudança de movimento de um corpo. Essa "dificuldade" é classicamente ilustrada pelo exemplo do automóvel e do carrinho de bebê — é infinitamente mais fácil parar um carrinho de bebê com as mãos do que o automóvel. 

# Impulso

O **impulso** $(\overrightarrow{I})$ é a grandeza oriunda duma força e de seu tempo de atuação sobre um corpo. O impulso de uma força mede a variação do momento deste corpo sob a atuação daquela força, com esta conclusão sendo chamada **Teorema Impulso-Momento** ou, simplesmente, **Teorema do Impulso**. 

$$ 
I = \int_{t_1}^{t_2} F(t) \, dt = \Delta p
$$

# A Terceira Lei de Newton e a Conservação do Momento

A **Terceira Lei de Newton**, comumente conhecida pela denominação **Lei da Ação e Reação**, também pode ser chamada pela alcunha de **Lei da Conservação do Momento** por razões já previamente demonstradas <a href="/books/higher_education/physics/physics_one/newtons_laws.html">aqui</a>. 

Entretanto, é importante deixar claro que a conclusão enunciada pela Lei vale apenas para **sistemas fechados**, isto é, sistemas físicos sem interação com forças externas ao sistema estudado. De fato, além dessa condição, é necessário que a massa permaneça constante ao longo do tempo. 

Podemos também escrever que, dado um sistema fechado com $n$ partículas, a soma de todos os seus momentos é constante, ou seja: 

$$
\sum_{j = 1}^N p_j = k, k \in \R
$$

Por fim, talvez seja necessário um pequeno lembrete:

<aside>
Chamamos <i>sistema físico</i> a coleção de corpos que estão sob o nosso interesse. Por exemplo, ao estudarmos a colisão de dois carros, o nosso sistema é composto pelos dois carros. 
</aside>

## Colisões

Podemos classificar as colisões entre corpos em **perfeitamente elásticas**, **perfeitamente inelásticas** ou ainda, simplesmente, **inelásticas**. 

Nas colisões inelásticas, as mais comuns, temos a dissipação de energia cinética no sistema ao compararmos o antes e o depois das colisões. Um exemplo desta categoria seria o quicar deu uma bola no chão sucessivas vezes. É visível que a cada quicar, a bola sobe cada vez menos. 

![Fotografia estroboscópica de uma bola de basquete quicando no chão. Perceba que as alturas máximas ficam cada vez menores.](images/momentum_collisions/momentum_collisions_ball_bounce.jpg)

<i>Fotografia estroboscópica de uma bola de basquete quicando no chão. Perceba que as alturas máximas ficam cada vez menores. CC-BY-SA via <a href="https://commons.wikimedia.org/wiki/File:Bouncing_ball_strobe_edit.jpg">Wikimedia Commons</a></i>.

Nas colisões perfeitamente elásticas, além da conservação do momento, temos a conservação perfeita da energia cinética. Nas colisões perfeitamente inelásticas, o máximo possível de energia cinética é perdido, preservando a conservação do momento. 

### Em mais de uma dimensão

---

As colisões também podem ser analizadas em mais de uma dimensão. Um caso interessante para começar esta observação seria de uma colisão perfeitamente elástica. De cara, é perceptível a utilidade de traçar um vetor $r_{12}$ entre os dois corpos, e analisar suas trajetórias pós-colisão em termos de <b>ângulos de espalhamento</b>. 

![Diagrama de colisão bidimensional](images/momentum_collisions/2d_collisions.png)

<i>Diagrama de colisão bidimensional. Perceba que os vetores de velocidade (e portanto, de momento) dos dois corpos fazem um ângulo relativo ao eixo horizontal. Esses ângulos são os ângulos de espalhamento.</i>

<aside>

Uma outra informação de utilidade é que mudar o referencial do problema de forma que uma das partículas esteja em repouso pode grandemente simplificar o problema. 

</aside>

No caso perfeitamente elástico — com conservação total tanto do momento como da energia cinética — é possível escrever as seguintes expressões: 

$$ 
\begin{align*}
    \vec{p_{1i}} &= \vec{p_{1f}} + \vec{p_{2f}} \\\\
    \dfrac{p_{1i}^2}{2m_1} &= \dfrac{p_{1f}^2}{2m_1} + \dfrac{p_{2f}^2}{2m_2}
\end{align*}
$$

Reorganizando a segunda equação, concluímos que

$$
p_{2f}^2 = \dfrac{m_2}{m_1}(p_{1i}^2 - p_{1f}^2)
$$

e, a partir da primeira, é possível escrever:

$$
\vec{p_{2f}} = \vec{p_{1i}} - \vec{p_{1f}}
$$

A partir desta equação , sem recorrer à trigonometria, é possível calcular o quadrado do momento final da partícula 2 (a que sofreu a colisão): 

$$
\begin{align*}
    p_{2f}^2 &= (\vec{p_{1i}} - \vec{p_{1f}}) \cdot (\vec{p_{1i}} - \vec{p_{1f}}) \\\\
    &= p_{1i}^2 + p_{1f}^2 - 2 \vec{p_{1i}} \cdot \vec{p_{1f}} \\\\
    &= p_{1i}^2 + p_{1f}^2 - 2 p_{1i}p_{1f} \cdot \cos{\theta_1}
\end{align*}
$$

Onde $\theta_1$ é o ângulo de espalhamento do corpo 1 (que colidiu com o corpo inicialmente em repouso). 

Igualando a expressão anterior com a produzida pela reorganização da equação de conservação da energia cinética, além de definir $\lambda = \dfrac{m_2}{m_1}$, escrevemos: 

$$
\lambda p_{1i}^2 - \lambda p_{1f}^2 = p_{1i}^2 + p_{1f}^2 - 2p_{1i}p_{1f} \cdot \cos{\theta_1}
$$

Reorganizando os termos, obtemos uma equação do segundo grau cuja incógnita é $p_{1f}$: 

$$
(1 + \lambda) p_{1f}^2 - (2p_{1i} \cos{\theta_1}) p_{1f} + (1-\lambda)p_{1i}^2 = 0 
$$

Portanto, 

$$
p_{1f} = \left(\dfrac{p_{1i}}{1 + \lambda}\right)(\cos{\theta_1} \pm \sqrt{\cos^2{\theta_1} + \lambda^2 - 1})
$$

A partir de $\lambda$, é possível explorar os possíveis cenários de colisão entre os corpos. 
Por exemplo, quando $m_1 \gt m_2 \Rightarrow \lambda \lt 1$, podemos perceber que, como o momento deve ser um número real, $\cos{\theta_1}^2 - 1 + \lambda^2 \ge 0$.

Logo, $\cos{\theta_1}^2 - 1 + \lambda^2 \iff -\sin{\theta_1}^2 + \lambda^2 \ge 0$ e $\sin{\theta_1} \le \lambda = \sin{\theta_{\text{max}}}$. Ou seja, caso a partícula que esteja efetuando a colisão tenha uma massa maior que a partícula "alvo", seu ângulo de deflexão é limitado dentro de um intervalo. 

E no caso contrário? Se a massa do corpo alvo for maior que a massa do corpo de colisão, $\lambda \gt 1$ e portanto qualquer $\theta_1$ resulta num valor válido para o momento do corpo 1. Em outras palavras, se a partícula incidente for mais leve, qualquer ângulo de deflexão é possível. 

O que podemos explorar sobre colisões inelásticas? Um exemplo bem interessante pode ser encarar o problema de tentar formar uma reação em cadeia em átomos de $\text{U}_{235}$ a partir da colisão de um nêutron com um único átomo. 
Qual é o problema aqui? Um nêutron precisa estar em baixa velocidade para poder ser capturado pelo núcleo do átomo, possuindo uma energia de $\approx 1 \text{ eV}$, entretanto, os nêutrons liberados por um núcleo fissionados estão em velocidade (e energia) ordens de magnitude maior, por volta de $\approx 1 \text{ MeV}$.

Uma maneira de reduzir a velocidade dessas partículas é efetuar colisões de forma que a energia cinética seja dissipada: o melhor material para isso encontrado até o momento é o grafite, $\text{C}_{12}$. Melhor não em sentido de eficácia, pois após uma única colisão o nêutron continua com muita velocidade, porém o carbono é abundante na natureza, talvez um dos mais abundantes.

Esta é a origem de grafite num reator nuclear: sua presença no reator desacelera os nêutrons e estimula uma reação em cadeia, com o calor gerado sendo utilizado para ferver a água no interior, produzindo vapor que será utilizado para rotacionar uma turbina.

As hastes de <b>controle</b>, por sua vez, geralmente feitas de boro ou outro elemento, como háfnio, funcionam pois estes elementos são excelentes capturadores de nêutrons, conseguindo absorvê-los mesmo em altas energias, diminuindo a quantidade de elétrons no núcleo do reator e permitindo que a reação em cadeia decaia exponencialmente. 

![Diagrama reator nuclear](https://upload.wikimedia.org/wikipedia/commons/a/a7/Nuclear_Reactor_Uranium_Pile_%2830502443888%29.jpg)

<i>Acima: diagrama ilustrando um reator nuclear com hastes de controle de boro e grafite como "moderador" dos nêutrons. Domínio público, via <a href="https://commons.wikimedia.org/wiki/File:Nuclear_Reactor_Uranium_Pile_(30502443888).jpg">Wikimedia Commons</a>.</i>