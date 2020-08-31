---
layout: post
lang:   "pt-br"
ref:    "nao-sei"
title:  "Sobre a extensão territorial de Muriqui"
#edit:   2020-04-15 22:22:00 -0300
excerpt: "Por ser somente um distrito, informação sobre Muriqui é muitas vezes escassa"
categories: [pesquisa]
---

Em todas as minhsa pesquisas, nunca consegui encontrar online **um** documento,
oficial ou não, que informasse a extensão territorial de Muriqui.

Sobre a extensão territorial do município de Mangaratiba, existem várias
referências, normalmente apontando para o censo do IBGE que o colocou como
ocupando 356,408&nbsp;km². Mas nunca há nada sobre seus distritos.

---

Inicialmente, decidi tentar calcular a extensão territorial utilizando
informações conhecidas.

De acordo com a [Sinopse por Setores](https://censo2010.ibge.gov.br/sinopseporsetores/?nivel=st)
do censo do IBGE de 2010, o distrito de (Vila) Muriqui possui uma população de
10,241 habitantes, com uma densidade demográfica de 269.31 habitantes/km².

Podemos realizar matemática simples para obter, a partir desses dados, uma
aproximação da extensão territorial de Muriqui, em km²:

<img alt="" src="/assets/img/numsei/equ-1.svg">

<img alt="" src="/assets/img/numsei/equ-2.svg">

<img alt="" src="/assets/img/numsei/equ-3.svg">

Isso nos dá um resultado de x = **38.0268092533&nbsp;km²**.

Portanto, minha **estimativa** grosseira inicial para a extensão territorial de
Muriqui era de aproximadamente 38 km².

Contudo, os dados de densidade demográfica possuem um pequeno asterisco que diz:
<q><b>Densidade demográfica preliminar</b></q>. Além disso, é sempre melhor ter
uma fonte direta da informação, e não calcular baseada em dados flutuantes e
provavelmente aproximados como densidade populacional.

Por ora, estava contente com meus resultados, então adicionei-os ao [artigo da
Wikipedia sobre Muriqui](https://en.wikipedia.org/wiki/Muriqui,_Mangaratiba) (em
inglês) que eu estava melhorando. Deixei de lado até que, um tempo depois,
percebi que o Google estava considerando a informação na Wikipedia como fato:

<figure>
  <img alt=""
   src="/assets/img/numsei/google.png">
  <figcaption>
    <em>
      Pesquisa no Google apresentando meu resultado impreciso como verdade
      (agosto/2020).
    </em>
  </figcaption>
</figure>

Isso é potencialmente um problema, pois meu resultado não era necessariamente
a extensão territorial correta de Muriqui. Portanto, resolvi tentar arranjar uma
resposta que, se não *mais precisa*, pelo menos seria oficial.

---

Utilizando o portal da Lei de Acesso à Informação, o [Sistema Eletrônico do
Serviço de Informação ao Cidadão](https://esic.cgu.gov.br/), fiz uma requisição
para o IBGE, perguntando se eles possuíam a informação da extensão territorial
de Muriqui.

Em apenas 5 dias, recebi a seguinte resposta:

<figure>
  <img alt="Transcrição da imagem disponível abaixo!"
   src="/assets/img/numsei/ibge-odt.png">
  <figcaption>
    <em>Resposta do IBGE, na íntegra, da forma que recebi.</em>
    <div class="sr-only">
<blockquote cite="IBGE">
<p>Prezado Sr. Matheus,</p>
<p>
  O IBGE se compromete apenas em divulgar as áreas dos entes federativos: União,
  Estados, Distrito Federal e Municípios.
</p>
<p>
  A partir do nível Município as leis de ordenamento territorial nem sempre têm
  descritivos e mapas precisos o suficiente para garantir o calculo e a
  divulgação da área de modo confiável.
</p>
<p>
  Para efeitos censitários e estatísticos, o IBGE interpreta a lei da melhor
  forma possível e aplica em nossa malha de setores censitários, mas não pode
  simplesmente divulgar esse dado, a não ser por uma consulta como esta e com
  estas restrições metodológicas. Ou seja, ao contrário das áreas de entes
  federativos, a área que aqui apresentamos não pode ser utilizada senão para
  fins puramente acadêmicos e censitários.
</p>
<p>
  Pela agregação dos setores censitários, o distrito de Muriqui tem 49Km,
  calculados na projeção ALBERS/Datum Sirgas2000 (eliminamos as casas decimais)
</p>
<p>
  Observação: graças à sua demanda identificamos um problema na grafia do nome
  do distrito, pois em nossos cadastros consta como "Vila Muriqui", com criação
  em 1836 por lei ordinária da Câmara, mas na Lei Orgânica do Município, de 1990
  e no Plano Diretor de 2017 identificamos que a grafia foi alterada para
  Muriqui.
</p>
<p>Agradecemos seu interesse por nossos produtos.</p>
</blockquote>
    </div>
  </figcaption>
</figure>

Em suma, o IBGE não possui essa informação – e nem precisaria possuir, pois
está fora do escopo de atividade do IBGE, que estuda do nível federal até o
nível municipal (e Muriqui é um distrido, subdivisão de um município).

Porém, eles foram capazes de me dar uma aproximação:

> Pela agregação dos setores censitários, o distrito de Muriqui tem 49Km,
calculados na projeção ALBERS/Datum Sirgas2000 (eliminamos as casas decimais).

Assumo que, por <q>49Km</q>, eles queiram dizer 49&nbsp;km². Minha estimativa
inicial tinha sido de 38&nbsp;km², ou seja, 11&nbsp;km² a menos do que o valor
estimado pelo IBGE.