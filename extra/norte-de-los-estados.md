---
layout: extra
title: "Trecho de \"Norte de los estados\" (1531)"
lang:   "pt-br"
---

{% for page in site.posts %}
  {% if page.url contains "casa-de-ferreiro" %}
 <small>(veja o post o qual esse extra complementa, '[{{page.title}}]({{ page.url }})')</small>
  {% endif %}
{% endfor %}

--- 

Copiado visualmente do <a href="http://www.bibliotecavirtualdeandalucia.es/catalogo/es/catalogo_imagenes/grupo.cmd?path=86513">PDF
do arquivo digital</a> (119 MB) na Biblioteca Virtual de Andalucía, um edição de
1541 do original "<i lang="es">Norte de los estados</i>" (<a
href="https://pt.wikipedia.org/wiki/Sevilha">Sevilha</a>, 1531) por <a
href="https://pt.wikipedia.org/wiki/Francisco_de_Osuna">Francisco de Osuna</a>.
Também é possível acessar, no Google Books, a <a
href="https://books.google.com.br/books?id=1ANRAAAAcAAJ">edição de 1550</a> (em
cores!). Por fim, também incluí as páginas em que o trecho abaixo está contido
em um <a href="/extra/norte-de-los-estados-122-123.pdf">PDF separado</a>
(947&nbsp;KB).

Para os não familiarizados com textos antigos, existem dois caracteres
a serem explicados: o <a href="https://en.wikipedia.org/wiki/R_rotunda">R
rotunda</a> (ꝛ) e o <a href="https://pt.wikipedia.org/wiki/S_longo">S longo</a>
(ſ), variantes estilísticas equivalentes ao R e ao S, respectivamente.

Para referência, o trecho abaixo começa na antepenúltima linha da primeira
página em que aparece, e termina na 13ª linha da segunda página em que aparece.
No PDF da Biblioteca de Andalucía, se encontra nas páginas 122–123.

--- 

## Original
<div id="compare-original"></div>
<script>
  const compare_original = document.getElementById("compare-original");
  const values = [
    [ 20.1, 0.9, 1.4, 6.3, "1" ],
    [ 26.3, 0.9, 1.4, 3.2, "2" ],
    [ 0, 2, 1.4, 29.5, "2" ],
    [ 0, 3.2, 1.4, 21.4, "2" ],
    [ 21.8, 3.2, 1.4, 7.8, "3" ],
    [ 0, 4.4, 1.4, 21, "3" ],
    [ 21.3, 4.4, 1.4, 8.3, "4" ],
    [ 0, 5.7, 1.4, 11.5, "4" ],
    [ 11.7, 5.7, 1.4, 15.8, "5" ],
    [ 27.8, 5.7, 1.4, 1.4, "6" ],
    [ 0, 6.7, 1.4, 15.5, "6" ],
    [ 16, 6.7, 1.4, 13.2, "7" ],
    [ 0, 7.7, 1.4, 8.6, "7" ],
    [ 9, 7.7, 1.4, 20.6, "8" ],
    [ 0, 8.8, 1.4, 6.6, "8" ],
    [ 7, 8.8, 1.4, 21.5, "9" ],
    [ 28.7, 8.9, 1.4, 1, "10" ],
    [ 0, 9.9, 1.4, 18.5, "10" ],
    [ 19.1, 9.9, 1.4, 10.5, "11" ],
    [ 0, 10.9, 1.4, 10, "11" ],
    [ 10.3, 11, 1.4, 19.3, "12" ],
    [ 0, 12.1, 1.4, 11.5, "12" ],
    [ 11.9, 12.1, 1.4, 8.4, "13" ],
    [ 20.6, 12.2, 1.2, 9.1, "14" ],
    [ 0, 13.3, 1.2, 3.3, "14" ],
    [ 3.7, 13.3, 1.2, 21.7, "15" ],
    [ 25.7, 13.3, 1.2, 3.4, "16" ],
    [ 0, 14.35, 1.3, 19, "16" ],
    [ 19.4, 14.35, 1.3, 10.2, "17" ],
    [ 0, 15.4, 1.3, 6, "17" ],
    [ 6.3, 15.4, 1.3, 23.3, "18" ],
    [ 0, 16.5, 1.3, 10.55, "18" ],
    [ 10.8, 16.5, 1.3, 10, "19" ],
    [ 21, 16.5, 1.3, 8.6, "20" ],
    [ 0, 17.6, 1.3, 11.6, "20" ]
  ]
  for(let i = 0, l = values.length; i - l; i++) {
    const div = document.createElement("div");
    const v = values[i];
    div.style.transform = `translate(${v[0]}rem, ${v[1]}rem)`;
    div.style.height = `${v[2]}rem`;
    div.style.width = `${v[3]}rem`;
    div.dataset.line = v[4];
    compare_original.appendChild(div);
  }
</script>
<style>
#compare-original {
  position: relative;
  height: 20rem;
  width: 30rem;
  margin: auto;
  background-image: url(/extra/norte-de-los-estados-122-123.png);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
#compare-original > div {
  position: absolute;
  top: 0;
  left: 0;
  mix-blend-mode: multiply;
  background-color: yellow;
  opacity: 0.2;
  visibility: hidden;
}
#compare-original[data-line="1"] > div[data-line="1"],
#compare-original[data-line="2"] > div[data-line="2"],
#compare-original[data-line="3"] > div[data-line="3"],
#compare-original[data-line="4"] > div[data-line="4"],
#compare-original[data-line="5"] > div[data-line="5"],
#compare-original[data-line="6"] > div[data-line="6"],
#compare-original[data-line="7"] > div[data-line="7"],
#compare-original[data-line="8"] > div[data-line="8"],
#compare-original[data-line="9"] > div[data-line="9"],
#compare-original[data-line="10"] > div[data-line="10"],
#compare-original[data-line="11"] > div[data-line="11"],
#compare-original[data-line="12"] > div[data-line="12"],
#compare-original[data-line="13"] > div[data-line="13"],
#compare-original[data-line="14"] > div[data-line="14"],
#compare-original[data-line="15"] > div[data-line="15"],
#compare-original[data-line="16"] > div[data-line="16"],
#compare-original[data-line="17"] > div[data-line="17"],
#compare-original[data-line="18"] > div[data-line="18"],
#compare-original[data-line="19"] > div[data-line="19"],
#compare-original[data-line="20"] > div[data-line="20"] {
  visibility: visible;
}

#original-text, #translated-text {
  font-weight: 500;
  text-align: justify;
}
#original-text i, #translated-text i {
  border-radius: 2px;
  font-style: normal;
  font-weight: normal;
}
#original-text i:hover, #translated-text i:hover {
  background-color: rgba(255,255,0,.2);
  color: #000;
}
#original-text[data-special="true"] > p:last-of-type {
  display: none;
}
#original-text:not([data-special="true"]) > p:first-of-type {
  display: none;
}
</style>
<blockquote id="original-text">
  <p>
    <i lang="es">(Villa ſeñoꝛ.)</i>
    <i lang="es">Aun que el impoꝛtuno diſcipulo es algunas vezes enojoſo a ſu
      maeſtro deſpues ninguno es mas loado que el mas impoꝛtuno</i> :
    <i lang="es">y poꝛque yo ſe que mi maeſtro no es como los embidioſos
      ſacerdotes</i> /
    <i lang="es">que ni ellos reſciben el ſacramento de buena gana</i> /
    <i lang="es">ni querrian que otros coꝛrieſſen tras el</i> /
    <i lang="es">penſando que les a de ſaber como a ellos</i> /
    <i lang="es">o que lo reſciben poꝛ ganancia humana como a ellos</i> /
    <i lang="es">o que lo reſcibe poꝛ ganancia humana como ellos o ſin
      devocion</i> /
    <i lang="es">ca en caſa del herrero falta las mas vezes cuchillo</i> :
    <i lang="es">y los poꝛteros que tienen las llaves del caſtillo</i> :
    <i lang="es">entran menos vezes a los palacios que eſtan dentro</i> :
    <i lang="es">aſſi que muchos ſacerdotes pienſo que ay en quien el uſo cauſa
      menoſpꝛecio</i> :
    <i lang="es">poꝛ ſer muy tibios</i> :
    <i lang="es">y poꝛ ſu mal ſacan el ageno</i> :
    <i lang="es">y eſtoꝛuan alos pequeñuelos que no vayan a Chꝛiſto</i> :
    <i lang="es">retrayendo los hombꝛes delos ſacrificios del ſeñoꝛ</i> :
    <i lang="es">y pues vueſtra caridad no es deſtos</i> :
    <i lang="es">con mucha ſeguridad le pido eſte conſejo enel qual a de hazer
      una de dos coſas</i>:
    <i lang="es">que o me diga ſu pareſcer</i> /
    <i lang="es">o el de otros que mas le agrade em eſte negocio.</i>
  </p>
  <p>
    <i lang="es">(Villa señor.)</i>
    <i lang="es">Aunque el importuno discipulo es algunas vezes enojoso a su
      maestro despues ninguno es mas loado que el mas importuno</i> :
    <i lang="es">y porque yo se que mi maestro no es como los envidiosos
      sacerdotes</i> /
    <i lang="es">que ni ellos reciben el sacramento de buena gana</i> /
    <i lang="es">ni querrían que otros corriessen tras el</i> /
    <i lang="es">pensando que les a de saber como a ellos</i> /
    <i lang="es">o que lo reciben por ganancia humana cómo a ellos</i> /
    <i lang="es">o que lo reciben por ganancia humana cómo ellos o sin
      devocion</i> /
    <i lang="es">ca en casa del herrero falta las más veces cuchillo</i> :
    <i lang="es">y los porteros que tienen las llaves del castillo</i> :
    <i lang="es">entran menos veces a los palacios que están dentro</i> :
    <i lang="es">así que muchos sacerdotes pienso que hay en quien el uso causa
      menosprecio</i> :
    <i lang="es">por ser muy tibios</i> :
    <i lang="es">y por su mal sacan el ajeno</i> :
    <i lang="es">y estoruan a los pequeñuelos que no vayan a Cristo</i> :
    <i lang="es">retrayendo los hombres de los sacrificios del señor</i> :
    <i lang="es">y pues vuestra caridad no es destos</i> :
    <i lang="es">con mucha seguridad le pido este consejo enel qual a de hazer
      una de dos cosas</i>:
    <i lang="es">que o me diga su parecer</i> /
    <i lang="es">o el de otros que más le agrade en este negocio.</i>
  </p>
</blockquote>
<label style="user-select:none">
  <input id="special-chars" type="checkbox">
  Mostrar cópia exata (com R rotunda (ꝛ) e S longo (ſ))
</label>

<script>
  const i_hover_events = (e,i) => {
  e.onmouseenter = () => { compare_original.dataset.line = i+1; };
  e.onmouseleave = () => { compare_original.dataset.line = "nada"; };
};
const i_special = [...document.querySelectorAll("#original-text > p:first-of-type i[lang='es']")];
const i_regular = [...document.querySelectorAll("#original-text > p:last-of-type i[lang='es']")];
i_special.forEach(i_hover_events);
i_regular.forEach(i_hover_events);

const original_text = document.getElementById("original-text");
document.getElementById("special-chars").onchange = (e) => {
  original_text.dataset.special = e.target.checked;
};
</script>

--- 

## Traduzido

Importante lembrar que eu **não falo espanhol**. A tradução é uma mistura de
portunhol com Google Tradutor. Se <em>você</em> fala espanhol e acha que tem uma
tradução melhor para esse texto, não hesite em me enviar um email (<a
href="mailto:o@amendo.im">o@amendo.im</a>).

<blockquote id="translated-text">
  <p>
    <i>(Senhor Villa)</i>
    <i>Embora o discípulo importuno às vezes seja irritante para seu mestre,
      depois ninguém é mais elogiado do que o mais importuno</i> :
    <i>e porque sei que meu mestre não é como os sacerdotes invejosos</i> /
    <i>que nem mesmo eles recebem o sacramento de boa vontade</i> /
    <i>nem gostariam que outros corressem atrás deles</i> /
    <i>pensando que ele saberá como eles(?)</i> /
    <i>ou que o recebam para ganho humano como eles(?)</i> /
    <i>ou que o recebam para ganho humano como eles ou sem devoção(?)</i> /
    <i>[ca](?) na casa do ferreiro a faca muitas vezes está faltando</i> :
    <i>e os porteiros que têm as chaves do castelo</i> :
    <i>menos vezes entram nos palácios que estão dentro</i> :
    <i>tantos sacerdotes, penso que existe em quem o uso causa desprezo</i> :
    <i>por ser muito pouco zelosos</i> :
    <i>e por seu mal eles tomam o estranho</i> :
    <i>e [estoruan](?) os pequeninos que não vão a Cristo</i> :
    <i>retirando os homens dos sacrifícios do senhor</i> :
    <i>e pois sua caridade não é [destos](?)</i> :
    <i>com muita certeza lhe peço esse conselho [enel](?) qual há de fazer uma
      de duas coisas</i>:
    <i>que o me diga sua opinião</i> /
    <i>ou a de outros que mais lhe agradem neste negócio.</i>
  </p>
</blockquote>