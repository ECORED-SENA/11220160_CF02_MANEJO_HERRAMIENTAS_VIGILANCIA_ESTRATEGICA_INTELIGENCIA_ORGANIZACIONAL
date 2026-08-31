<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 1
        h1 Ejecución de búsquedas y recuperación de información
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Tras definir la planeación y los ecosistemas de búsqueda, el ciclo avanza hacia la recuperación de información. El aprendiz transforma necesidades estratégicas en comandos lógicos para obtener literatura científica, técnica y comercial pertinente.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Diseño de ecuaciones de búsqueda: traducción de conceptos técnicos
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El diseño de ecuaciones de búsqueda transforma las necesidades estratégicas en cadenas lógicas que indican a la base de datos qué términos recuperar, dónde localizarlos y cómo relacionarlos. El proceso parte de las palabras clave definidas previamente en la Ficha de Registro del Proyecto. Los pasos para el diseño inicial de la ecuación son:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Extraer las palabras clave
                p.mb-0 Se retoman de la Ficha de Registro del Proyecto las palabras clave relacionadas con el Factor Crítico de Vigilancia y el objetivo de búsqueda.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img4.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Traducir los conceptos
                p.mb-0 Las palabras clave se convierten en términos técnicos utilizados en la literatura científica, tecnológica o comercial.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar variantes
                p.mb-0 Cada concepto se amplía mediante sinónimos, acrónimos, siglas, traducciones y variantes ortográficas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img5.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img6.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Construir la matriz de términos
                p.mb-0 Las variantes identificadas se organizan en una estructura que servirá como base para formular la ecuación de búsqueda.
      .row.justify-content-center.mb-5
        .col-xl-8
          .box___style_2(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La matriz integra las variantes necesarias para ampliar y precisar la recuperación.
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Sinónimos
                  p Son palabras diferentes que representan un mismo concepto. Su incorporación evita que la búsqueda excluya documentos relevantes. Algunos ejemplos son:
                  p.mb-0 #[b Ejemplo:] competitividad, productividad, eficiencia y desempeño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acrónimos y siglas
                  p Son formas abreviadas utilizadas frecuentemente en la literatura científica y tecnológica. Deben incluirse junto con su denominación completa. A continuación, se presentan algunos ejemplos:
                  p.mb-0 #[b Ejemplos:]
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Sistema de Gestión de Contenidos (CMS). 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Interfaz de Programación de Aplicaciones (API). 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Planificación de Recursos Empresariales (ERP).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Traducciones
                  p Permiten recuperar documentos publicados en otros idiomas, especialmente en inglés, por su predominio en la producción científica y tecnológica. Seguidamente, se presentan algunos ejemplos:
                  p.mb-0 #[b Ejemplo:] comercio electrónico y #[i e-commerce].
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Variantes ortográficas
                  p Corresponden a diferencias de escritura asociadas con las variedades de una lengua. Algunos ejemplos son:
                  p.mb-0 #[b Ejemplo:] #[i optimization] en inglés estadounidense y #[i optimisation] en inglés británico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Matriz de términos
                  p.mb-0 Organiza las variantes de cada concepto antes de formular la ecuación de búsqueda. A continuación, se presenta un ejemplo:
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Tabla 1.
                    span Matriz de términos
                  .tabla-a(data-aos="zoom-in")
                    table
                      caption Tabla que presenta un ejemplo de matriz de términos
                      thead
                        tr
                          th.ajuste-border-tabla.texto-left Concepto principal
                          th.ajuste-border-tabla.texto-left Sinónimos
                          th.ajuste-border-tabla.texto-left Siglas
                          th.texto-left Traducciones o variantes
                      tbody
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold Comercio electrónico
                          td.ajuste-border-tabla.texto-left Tienda virtual, venta en línea
                          td.ajuste-border-tabla.texto-left -
                          td.texto-left #[i E-commerce, online retail]
                        tr
                          td.ajuste-border-tabla.texto-left.text-weight-bold Seguridad informática
                          td.ajuste-border-tabla.texto-left Ciberseguridad, protección digital
                          td.ajuste-border-tabla.texto-left -
                          td.texto-left #[i Cybersecurity, information security]
                        tr.ajuste-color-tabla
                          td.ajuste-border-tabla.texto-left.text-weight-bold Sistema de gestión de contenidos
                          td.ajuste-border-tabla.texto-left Gestor de contenidos
                          td.ajuste-border-tabla.texto-left CMS
                          td.texto-left #[i Content Management System]
      p.mb-0 El diseño de ecuaciones de búsqueda comienza con las palabras clave de la Ficha de Registro del Proyecto y se fortalece mediante una matriz de términos exhaustiva, capaz de reducir sesgos y aumentar la pertinencia de los resultados.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Operadores booleanos, comandos de truncamiento y uso de comillas
      p.mb-5 Las palabras clave se relacionan mediante operadores booleanos, basados en el álgebra de George Boole. Estos conectores deben escribirse en mayúsculas sostenidas para orientar al algoritmo de búsqueda. A continuación, se describen los elementos que estructuran una ecuación de búsqueda:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img12.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Operador AND (Intersección)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Exige que todos los términos conectados estén presentes simultáneamente en el mismo documento. Se utiliza para reducir y especificar la búsqueda. Si se busca innovación AND sostenibilidad, el algoritmo descartará cualquier texto que mencione solo uno de los dos términos. 
            .row(titulo="Operador OR (Unión)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica que al menos uno de los términos debe aparecer en el documento. Se utiliza para agrupar sinónimos y ampliar la búsqueda. Al ingresar competitividad OR productividad, el sistema recuperará documentos que contengan el primer término, el segundo, o ambos.
            .row(titulo="Operador NOT / AND NOT (Exclusión)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Elimina documentos que contengan un término específico. Es vital para eliminar ruido informático o polisemia. Sí se investiga la construcción de muros con adobe; pero la base de datos arroja resultados sobre el #[i software] Adobe, la ecuación debe ajustarse a adobe NOT #[i software].
      p.mb-5 Para otorgar mayor flexibilidad y precisión a las ecuaciones, se emplean los siguientes comandos de sintaxis avanzada:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Ejemplo de búsqueda empleando operadores, uso de comillas y paréntesis
          figure(data-aos="zoom-in").mb-5
            img(src='@/assets/curso/temas/t1/img13.png', alt='La figura representa una búsqueda especializada en un repositorio digital, mediante operadores booleanos, comillas y paréntesis. Estos elementos permiten relacionar términos, conservar frases exactas, agrupar conceptos y recuperar documentos pertinentes para procesos de vigilancia estratégica e investigación.').m-auto
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Comandos de truncamiento o comodines").ajuste-cajaAcordion.ajuste-vineta
              p Los comandos de truncamiento recuperan diferentes variaciones de una palabra. El asterisco sustituye una cadena de caracteres. A continuación, se presenta un ejemplo:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search
                  | #[b sostenibil*:] puede recuperar sostenible, sostenibilidad y sostenibles.
              p El signo de interrogación suele sustituir un solo carácter. Posteriormente, se presenta un ejemplo:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-search
                  | #[b wom?n:] puede recuperar #[i woman] y #[i women], según las reglas de la base de datos.
            .row(titulo="Uso de comillas").ajuste-cajaAcordion.ajuste-vineta
              p Las comillas obligan a recuperar una frase exacta y conservan el orden de las palabras. Ejemplo: “comercio electrónico”.
              p.mb-3 Sin comillas, ambos términos podrían aparecer separados dentro del documento. Con comillas, la base de datos recupera la expresión completa.
            .row(titulo="Anidamiento con paréntesis").ajuste-cajaAcordion.ajuste-vineta
              p Los paréntesis agrupan términos y establecen el orden de las operaciones lógicas dentro de la ecuación. 
              p #[b Ejemplo:] (“comercio electrónico” OR “#[i e-commerce]”) AND (seguridad OR ciberseguridad).
              .box___style_3.mb-3
                p.mb-0 El primer grupo reúne expresiones equivalentes y el segundo incorpora términos relacionados con la seguridad.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Una ecuación mal estructurada puede generar resultados irrelevantes. El siguiente video aborda operadores booleanos, comodines, comillas y paréntesis para formular búsquedas especializadas. Ingrese al recurso y construya una ecuación aplicada a una necesidad organizacional.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/HVl7CPGT9Qg" title="Buscar con precisión: operadores y sintaxis para ecuaciones de búsqueda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video Video. Buscar con precisión: operadores y sintaxis para ecuaciones de búsqueda
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Transición de búsquedas generales a búsquedas especializadas
      p.mb-5 La recuperación de información avanza desde búsquedas exploratorias en fuentes generales hacia bases de datos especializadas que concentran evidencia técnica, científica y jurídica verificable. La transición se desarrolla mediante una secuencia de profundización y selección de fuentes.
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Ejecutar búsquedas generales
                p.mb-0 El investigador formula ecuaciones exploratorias en metabuscadores y fuentes de la web superficial para identificar autores principales, empresas líderes y patentes base.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img15.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img16.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Extraer la información semilla
                p.mb-0 Los primeros resultados permiten seleccionar autores, documentos, empresas o patentes que sirven como punto de partida para continuar la búsqueda.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Transitar hacia fuentes especializadas
                p La búsqueda se traslada a bases de datos cerradas o de alto rigor, según la necesidad de información:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Instituto de Ingenieros Eléctricos y Electrónicos #[i Xplore] (IEEE #[i Xplore]): ingeniería. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | #[i Scopus]: revisiones sistemáticas. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Organización Mundial de la Propiedad Intelectual (WIPO): patentes.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img17.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img18.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Ajustar las ecuaciones
                p.mb-0 En las bases de datos especializadas, las ecuaciones adquieren mayor complejidad mediante lenguajes controlados y tesauros propios de cada plataforma.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Recuperar evidencia verificable
                p.mb-0 La búsqueda especializada permite separar la evidencia técnica y científica de las opiniones comerciales presentes en la red pública.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img19.png', alt='' style="width: 300px").m-auto
      p.mb-0 La transición progresiva fortalece la calidad de los hallazgos y concentra el análisis en fuentes pertinentes, especializadas y verificables.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Aplicación de criterios estrictos de filtrado de información
      p.mb-5 Aun aplicando operadores booleanos perfectos, una ecuación puede arrojar miles de resultados. Para reducir la captura a un volumen manejable y pertinente, se debe dominar la aplicación de criterios de filtrado mediante campos de metadatos. Los principales campos y filtros aplicados en la recuperación especializada son:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="TI (Título - <i>Title</i>)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 TI (Título - #[i Title])
              p.mb-0 Obliga a que la palabra clave aparezca en el título del artículo.
        .py-3.py-md-4(titulo="AB (Resumen <i>Abstract</i>)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 AB (Resumen #[i Abstract])
              p.mb-0 Limita la búsqueda al resumen. Si la tecnología buscada es verdaderamente el foco del documento, se mencionará en el resumen.
        .py-3.py-md-4(titulo="AU (Autor - <i>Author</i>)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 AU (Autor - #[i Author])
              p.mb-0 El campo #[b Autor (AU)] permite rastrear la producción académica o científica de una persona investigadora reconocida o vinculada con el tema de interés.
        .py-3.py-md-4(titulo="IN (Inventor)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img23.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 IN (Inventor)
              p.mb-0 El campo #[b Inventor (IN)] facilita la recuperación de patentes asociadas con una persona inventora, una empresa competidora o un desarrollo tecnológico específico.
        .py-3.py-md-4(titulo="Fecha de publicación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img24.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Fecha de publicación
              p El filtro por fecha restringe los resultados a un periodo determinado. Su aplicación permite recuperar información actual y relacionada con el estado del arte. A continuación, se presenta un ejemplo:
              p.mb-0 #[b Ejemplo:] publicaciones comprendidas entre 2023 y 2026.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La combinación de campos de metadatos y filtros de fecha permite obtener un volumen manejable de información pertinente, actualizada y directamente relacionada con la necesidad de vigilancia estratégica. 
      p.mb-5 El siguiente caso integra la traducción, construcción, especialización y filtrado de una búsqueda:
      .box___style_4
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            h5 Caso de uso aplicado al sector productivo: #[i E-commerce] Central Ferretera
            p Para contextualizar la aplicación técnica de estos saberes de proceso, se presenta el caso de #[b Central Ferretera], empresa que desarrolla un proyecto de transformación digital basado en una plataforma de comercio electrónico integrada con WordPress y el complemento WooCommerce.
            .box___style_1.color___1(data-aos="fade-right")
              p.mb-0 El equipo de vigilancia debe determinar cómo garantizar que esta arquitectura de código abierto sea segura para las transacciones financieras y mantenga tiempos de carga adecuados frente a un inventario ferretero amplio. Para ello, el aprendiz, en el rol de vigía, ejecuta búsquedas especializadas orientadas a identificar soluciones arquitectónicas confiables y excluir artículos de blogs genéricos o tutoriales de baja calidad.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t1/img25.png', alt='' style="width: 500px").m-auto
        ol.lista-ol--cuadro.mb-3
          li
            .lista-ol--cuadro__vineta
              span 1
            | 
            p.mb-0 #[b Traducción de conceptos y sinonimia:] el equipo identifica las variables clave tales como la plataforma (WordPress, WooCommerce), la necesidad de protección (#[i Security, Vulnerability, Cybersecurity]) y el rendimiento (#[i Performance, Caching, Optimization]). Se decide ejecutar la búsqueda en inglés, ya que la documentación técnica más avanzada en desarrollo web se encuentra en este idioma.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | 
            p.mb-0 #[b Construcción de la ecuación con operadores lógicos:] el aprendiz estructura la siguiente ecuación anidada para ingresarla en bases de datos de literatura técnica e ingeniería de software:
        h5.fit___h5_box ("WordPress" AND "WooCommerce") AND (#[i securit* OR vulnerabilit*] OR "#[i cyber attack]") AND (optimiz* OR performanc* OR cach*)
        ul.fa-ul.estilo___ul_1.mb-3
          li.mb-0
            span.fa-li
              i.fas.fa-search
            | Uso de comillas: asegura que el buscador no separe términos compuestos como "#[i cyber attack]".
          li.mb-0
            span.fa-li
              i.fas.fa-search
            | Uso de truncamiento: el término #[b #[i securit*]] capturará #[i security], #[i securities]; #[b #[i cach*]] capturará #[i cache], #[i caching].
          li.mb-0
            span.fa-li
              i.fas.fa-search
            | Uso de paréntesis: agrupa lógicamente la plataforma, la seguridad y el rendimiento, obligando al operador AND a cruzar las tres dimensiones.
        ol.lista-ol--cuadro.mb-5
          li 
            .lista-ol--cuadro__vineta
              span 3
            | 
            p.mb-0 #[b Transición a búsquedas especializadas y filtrado estricto:] en lugar de ingresar esta ecuación en un buscador convencional, el aprendiz la ejecuta en Google Scholar y bases de datos universitarias, aplicando filtros de metadatos estrictos: limita los resultados a documentos publicados entre #[b 2024] y #[b 2026], y exige que las palabras clave aparezcan únicamente en el #[b Título (TI)] o el #[b Resumen (AB)].  
        .row.justify-content-center.align-items-center.mb-0
          .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t1/img26.png', alt='' style="width: 500px").m-auto
          .col-xl
            .box___style_1.color___1.fit___box_1(data-aos="fade-left")
              h5 Resultado estratégico:
              p La ecuación matemática filtra millones de páginas web y entrega exactamente 14 artículos técnicos (papers y reportes de ciberseguridad). Entre estos hallazgos, el equipo identifica literatura verificada sobre las vulnerabilidades específicas de ciertas pasarelas de pago al integrarse con WooCommerce y los mejores protocolos de mitigación de ataques de denegación de servicio (DDoS) para WordPress.
              p.mb-0 Esta información técnica, extraída gracias a una ecuación robusta, evita que Central Ferretera instale extensiones o plugins obsoletos, garantizando que el despliegue del proyecto tecnológico se realice bajo estándares de seguridad informática de clase mundial.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
