# A Reta 

# A reta real

---

Os números reais, representados pelo símbolo de seu conjunto $(\mathbb{R})$, e seus subconjuntos, os dos números racionais (e naturais, e inteiros, ...) e irracionais podem ser representados por pontos numa reta. Nesta reta, o ponto de origem $(\text{O})$, cuja posição é escolhida arbitrariamente, é geralmente associado ao número zero. 

Por sua vez, são membros do conjunto dos números racionais $(\mathbb{Q})$ todo aquele que pode ser escrito por meio de uma razão $\dfrac{p}{q}$, com $p$ e $q$ sendo números inteiros e, especialmente, $q \neq 0$. Sinteticamente, por meio de notação matemática, é possível denotar o conjunto dos números racionais da seguinte maneira: 

$$ 
\mathbb{Q} = \{x: x = \dfrac{p}{q}, p, q \in \mathbb{Z} \text{ e } q \neq 0\}
$$

Uma construção geométrica interessante para os números racionais consiste em criar uma semirreta com origem no ponto $\text{O}$ da reta real de maneira que forme um ângulo agudo com esta. 
Ao traçar um segmento de reta que une o número $q$ a um determinado ponto $A$ na reta real, a reta paralela com origem em $p$ possui sua intersecção com a reta real no ponto $\dfrac{p}{q}$. 

São membros do conjunto dos números irracionais, denotado pelo símbolo $\mathbb{I}$, todos aqueles que não podem ser representados por uma razão entre dois números inteiros, conforme a definição de $\mathbb{Q}$. Entretanto, estes também podem ser representados na reta real por construções geométricas, por exemplo. 

Entre os números irracionais, a raíz quadrada de dois merece especial destaque pela sua simplicidade de construção e a prova de sua irracionalidade, que se originou na Grécia Antiga com o pensador pitagórico Hípaso, que foi afogado por seus pares após infringir a crença da seita que todo o Universo baseava-se em números racionais. 

Para conduzir o raciocínio que levou Hípaso à morte, vamos supor primeiramente que a raíz é irracional, isto é, que 

$$
\sqrt{2} = \dfrac{p}{q}
$$

com $p$ e $q$ primos entre si. 

Esta igualdade implica que $\dfrac{p^2}{q^2}=2 \Rightarrow 2q^2 = p^2$. Como $p^2$ é par, $p$ também é par. Escrevendo $p = 2k$, com $k \in \mathbb{Z}$: 

$$ 
(2k)^2 = 2q^2 \Rightarrow q^2 = 2k^2
$$

Pelo mesmo argumento, concluímos que $q$ também é par. Ora, a partir de uma suposição que assumimos como verdadeira, chegamos numa contradição em nossas próprias suposições — a raiz quadrada de dois ser racional implica simultaneamente em números que são e não são primos entre si. Dessa forma, nossa suposição não pode ser verdade, mostrando que a raiz quadrada de dois é na verdade irracional. 

Na reta real, dizemos que um número $a$ é menor que $b$ se este está à esquerda de $b$. Para indicar isto, utilizamos a notação $a < b$. Para indicar que $b$ é menor que $a$, escrevemos $b < a$. Similarmente, podemos escrever $a > b$ ou $b > a$. Se um número for maior (ou menor) ou o próprio número comparado, podemos escrever $a \ge b$ ou $a \le b$. 

Ainda há duas afirmações sustentadas por algumas proposições: entre dois números reais existem infinitos racionais e irracionais; há um número racional arbitrariamente próximo de um irracional. 

É visível que a reta real não possui "buracos" — todos os pontos são relacionados a um número real. 

<aside>

<b>Proposição 1.</b> Sejam $a, b \in \mathbb{R}$ com $a < b$. Entre $a$ e $b$ existem infinitos números racionais e irracionais. 

<i>Prova</i>: Existem números irracionais arbitrariamente pequenos. Seja então $s$ irracional e positivo tal que $s < b -a$. Seja $n$ o maior inteiro tal que $ns \le a$. Então, o número $(n + 1)
$ satisfaz a equação 

$$ 
a < (n+1)s < b
$$

pois, sendo $n$ o maior inteiro tal que $ns \le a$, segue-se que $a < (n+1)s$ e também que $(n + 1)s = ns + s < a + (b-a) = b$, porque $ns \le a$ e $s \lt b-a$, logo $a \lt (n+1)s \lt b$.

Portanto, o número irracional $(n+1)s$ está entre $a$ e $b$. Fazendo-se $(n+1)s = a_1$ e repetindo o processo, vamos encontrar $a_2 \in \mathbb{I}$ tal que $a_1 \lt a_2 \lt b$. É possível construir quantos números irracionais quisermos entre $a$ e $b$, portanto, há infinitos números irracionais. Este mesmo argumento para a infinidade dos números racionais pode ser realizado supondo $s$ racional. 

</aside>

<aside>

<b>Proposição 2.</b> Dado um número real $b$, existem próximos dele, arbitrariamente, números racionais e irracionais. 

<i>Prova</i>: Escolhemos $a \lt b$ com $a$ tão próximo de $b$ quanto desejarmos. Pela proposição 1, concluímos que entre $a$ e $b$ existem infinitos números racionais e irracionais. Estes números estão mais próximos de $b$ que o próprio $a$, portanto, arbitrariamente próximos de $b$. 

</aside>