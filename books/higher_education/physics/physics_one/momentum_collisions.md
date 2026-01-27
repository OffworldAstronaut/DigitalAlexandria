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