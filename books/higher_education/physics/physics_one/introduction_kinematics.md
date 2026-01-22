# Introdução à Cinemática

# Conceitos iniciais 

---

Chamamos **cinemática** a descrição física do movimento de um corpo ao longo do tempo. Os elementos básicos desta descrição são as grandezas de posição e tempo. 

Levando em conta que a grandeza de **velocidade (média)** é a proporção de espaço percorrido num dado tempo, também conhecida, a **velocidade instantânea** é o valor da função derivada da função deslocamento num dado instante temporal. 

De forma semelhante, a aceleração é o valor da segunda derivada da função deslocamento num dado ponto. De fato, a partir das operações de integração e derivação, podemos encontrar as equações de movimento para qualquer móvel. 

Uma aplicação notável desta última informação são os **Sistemas de Navegação Inercial** (*Inertial Navigation Systems*). Os SNIs são capazes de determinar a posição atual do veículo independentemente de informação externa, somente a partir do registro da aceleração sofrida pelo veículo ao longo do tempo e de uma posição inicial registrada na memória. São geralmente utilizados em aeronaves e espaçonaves, além de embarcações, como sistemas redundantes, caso a comunicação falhe.

# Vetores

---

O estudo e a utilização dos sistemas de coordenadas na Física surge da necessidade de representar posições (e movimentos) de objetos no espaço de forma precisa. Um componente essencial desses sistemas são seus elementos, os chamados **vetores**, que permitem a análise cinemática para movimentos em até três dimensões. 

Embora geralmente seja utilizado o sistema de coordenadas cartesianas e sua chamada **base canônica**, composta por três vetores unitários (”versores”) e perpendiculares entre si, outros sistemas de coordenadas, como os de coordenadas esféricas ou cilíndricas, podem ser utilizados a depender do problema a ser resolvido. 

Combinando os conceitos do Cálculo com os sistemas de coordenadas, é possível descrever movimentos no espaço tridimensional de forma completa. Para um ponto material, medimos sua posição em relação à origem por um vetor da forma: 

$$
\overrightarrow{r}(t) = x(t) \cdot \hat{i} + y(t) \cdot \hat{j} + z(t) \cdot \hat{k}
$$

Sua velocidade e aceleração podem ser obtida por meio da derivação das funções $x(t)$, $y(t)$ e $z(t)$.