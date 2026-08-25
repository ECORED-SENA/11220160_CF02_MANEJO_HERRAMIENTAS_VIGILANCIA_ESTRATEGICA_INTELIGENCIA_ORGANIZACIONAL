<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 3
        h1 Análisis, gestión del conocimiento y toma de decisiones
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 En esta fase, el aprendiz analiza los hallazgos validados, integra el conocimiento a la memoria corporativa y formula recomendaciones estratégicas que generen valor y reduzcan el riesgo en la toma de decisiones gerenciales.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Transformación de resultados técnicos en información estratégica
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La transformación estratégica integra los análisis cuantitativo y cualitativo para interpretar la información validada y establecer sus implicaciones organizacionales. Ambos enfoques se desarrollan en la siguiente sección.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img22.png" style="max-width: 60px").m-auto
        .col
          h3 Análisis cuantitativo
      p.mb-5 El análisis cuantitativo se fundamenta en la medición estadística, la minería de datos y la proyección de tendencias para determinar la magnitud y evolución de los fenómenos estudiados. En vigilancia tecnológica, este análisis se desarrolla mediante los siguientes elementos:
      .bg___carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Medición estadística
                  p.mb-0.text-center Permite cuantificar los cambios identificados y comparar el comportamiento de variables durante un periodo determinado.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Minería de datos
                  p.mb-0.text-center Facilita la identificación de patrones, relaciones y tendencias en grandes volúmenes de información científica, tecnológica o comercial.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Indicadores bibliométricos
                  p.mb-0.text-center Analizan la producción documental mediante variables como el número de publicaciones, autores, instituciones, países y citaciones.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Indicadores cienciométricos
                  p.mb-0.text-center Permiten estudiar la evolución de campos científicos y tecnológicos, así como reconocer áreas emergentes, consolidadas o en disminución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Proyección de tendencias
                  p.mb-0.text-center Emplea datos históricos para identificar posibles comportamientos futuros y anticipar cambios relevantes para la organización.
          p.mb-5 La evolución de los registros tecnológicos permite identificar señales de crecimiento, madurez u obsolescencia. A continuación, se presenta un ejemplo:
          .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img5.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo:
              br
              p.mb-0 Una disminución sostenida del 40 % en el registro de patentes durante varios años puede indicar que una tecnología se encuentra en una fase de obsolescencia o madurez avanzada. Esta evidencia permite advertir que una nueva inversión podría representar un riesgo financiero para la organización (OMPI, 2022).
      p.mb-5 El análisis cuantitativo aporta evidencias medibles sobre la evolución de una tecnología, un mercado o una tendencia, pero requiere interpretación contextual para explicar sus causas y consecuencias.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img22.png" style="max-width: 60px").m-auto
        .col
          h3 Análisis cualitativo
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El análisis cualitativo interpreta el contexto, las causas y las consecuencias de los cambios identificados, considerando su posible impacto en la organización y el entorno. Para interpretar los hallazgos, este enfoque considera las siguientes dimensiones de análisis:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img6.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Contexto socioeconómico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Considera las condiciones económicas, sociales y culturales que pueden favorecer o limitar la adopción de una tecnología, estrategia o modelo empresarial.
            .row(titulo="Dinámica competitiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Analiza el comportamiento de los competidores, sus capacidades, decisiones y respuestas frente a los cambios del mercado.
            .row(titulo="Cambios normativos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Interpreta leyes, regulaciones y políticas públicas que pueden modificar la viabilidad de una alternativa estratégica.
            .row(titulo="Capacidades organizacionales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Valora si la organización dispone de infraestructura, presupuesto, talento humano y condiciones internas para responder a los hallazgos.
            .row(titulo="Escenarios futuros").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Examina situaciones posibles y sus consecuencias para anticipar riesgos, oportunidades y alternativas de actuación.
      p.mb-5.text-center La interpretación cualitativa puede apoyarse en técnicas prospectivas que facilitan la construcción de escenarios y el análisis experto:
      .row.justify-content-center.mb-5
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___style_6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img7.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Análisis de escenarios
              p.mb-0.text-center Formula futuros posibles a partir de variables críticas, incertidumbres y cambios del entorno.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___style_6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t3/img7.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Matriz de impactos cruzados
              p.mb-0.text-center Relaciona diferentes acontecimientos para establecer cómo la ocurrencia de uno puede influir sobre los demás.
        .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___style_6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img7.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Paneles de expertos
              p.mb-0.text-center Reúnen conocimientos especializados para valorar la pertinencia, viabilidad y posible impacto de los hallazgos.
        .col-xl-3.col-md-9(data-aos="zoom-in")
          .box___style_6.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t3/img7.svg', alt="" style="max-width: 90px").m-auto
              h4.text-center Método Delphi
              p.mb-0.text-center Recopila y contrasta las opiniones de expertos mediante consultas sucesivas orientadas a alcanzar niveles de consenso.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img8.png', alt='' style="width: 500px").m-auto
        .col-xl
          p Para la aplicación del tema abordado, se presenta el siguiente análisis aplicado:
          .box___style_1.color___2.fit___box_1(data-aos="fade-left")
            h5 Aplicación del análisis
            p El análisis cualitativo permite responder interrogantes como:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-search
                | ¿Cómo afectará una nueva regulación tributaria a la cadena de suministro? 
              li.mb-0
                span.fa-li
                  i.fas.fa-search
                | ¿Qué resistencia cultural puede presentarse ante la implementación de un nuevo programa informático? 
              li.mb-0
                span.fa-li
                  i.fas.fa-search
                | ¿Qué condiciones internas podrían limitar la adopción de una tecnología?
      p.mb-5 El análisis cualitativo permite comprender por qué ocurre un fenómeno, cómo se relaciona con el entorno y cuáles podrían ser sus efectos para la organización.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img22.png" style="max-width: 60px").m-auto
        .col
          h3 Integración de los enfoques
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img9.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La articulación de los análisis cuantitativo y cualitativo transforma los resultados técnicos en inteligencia accionable, entendida como conocimiento específico, oportuno y analíticamente sólido para fundamentar acciones corporativas inmediatas (Naciones Unidas, 2021).
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Gestión del conocimiento organizacional: lecciones aprendidas y difusión de resultados
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La gestión del conocimiento permite identificar, capturar, almacenar y compartir los aprendizajes generados durante los procesos y proyectos organizacionales, evitando que permanezcan únicamente en la experiencia individual (Cubillo, 1999). De esta manera, conserva la experiencia institucional y facilita su aprovechamiento mediante los siguientes elementos:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img10.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Gestión del conocimiento
                  p Comprende los procesos institucionales orientados a conservar y distribuir el capital intelectual generado durante el desarrollo de las funciones y los proyectos organizacionales.
                  p.mb-0 Cuando este conocimiento permanece únicamente en la mente del analista o del experto técnico, la organización puede enfrentar amnesia corporativa ante la rotación del personal.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Lecciones aprendidas
                  p Las lecciones aprendidas registran de manera crítica:
                  ul.fa-ul.estilo___ul.mb-3
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Las estrategias que funcionaron.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Las estrategias que presentaron dificultades.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Las causas de los resultados. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Los aprendizajes que deben conservarse. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Las acciones que conviene repetir, ajustar o evitar. 
                  p.mb-0 Por ejemplo, documentar la incompatibilidad de una herramienta con los servidores institucionales convierte la experiencia en conocimiento explícito útil para futuros equipos.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Difusión de resultados
                  p El conocimiento validado debe distribuirse mediante productos adaptados al perfil y a las necesidades de sus destinatarios.
                  p Los principales productos son:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Boletines de inteligencia: resúmenes periódicos con tendencias, alertas y movimientos de la competencia. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Cuadros de mando: indicadores y métricas actualizadas para apoyar el seguimiento de variables estratégicas. 
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Informes estratégicos de vigilancia: documentos de mayor profundidad dirigidos a la dirección.
      p.mb-5 El siguiente pódcast aborda las lecciones aprendidas, la memoria corporativa y la difusión de resultados. Se propone su reproducción para identificar cómo se conserva el conocimiento y relacionar cada producto de inteligencia con sus destinatarios.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img13.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="El conocimiento que permanece: lecciones aprendidas y memoria organizacional"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img14.png" style="max-width: 510px").m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Generación de recomendaciones estratégicas para la toma de decisiones
      p.mb-5 Las recomendaciones estratégicas transforman los hallazgos en acciones viables y sustentadas para fortalecer la toma de decisiones. Su formulación aplica el modelo de identificación de brechas y propuesta de valor, compuesto por tres elementos:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img15.png", alt="" style="width: 500px").m-auto
        .col-xl
          LineaTiempoD.color-primario(data-aos="zoom-in")
            .row.align-items-center(numero="1" titulo="Definir la brecha")
              .col-md-12.mb-4.mb-md-0
                p.mb-0 Contrasta el estado del arte con la situación organizacional para identificar brechas frente a los líderes del sector. Por ejemplo, estos automatizan el 80 % de la atención al cliente, mientras la empresa conserva procesos manuales.
            .row.align-items-center(numero="2" titulo="Proponer una acción estructurada")
              .col-md-12.mb-4.mb-md-0
                p La recomendación debe indicar de manera clara qué acción debe ejecutar la organización. Debe ser:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Específica 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Técnicamente viable 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Coherente con la capacidad financiera 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Compatible con el talento humano disponible 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Alineada con los parámetros definidos durante la planeación.
            .row.align-items-center(numero="3" titulo="Sustentar la ventaja competitiva")
              .col-md-12.mb-4.mb-md-0
                p La propuesta debe explicar cómo la acción recomendada generará valor para la organización. La sustentación puede relacionarse con:
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Mejora del posicionamiento 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Reducción de costos 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Optimización de procesos 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Mitigación de riesgos 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Cumplimiento normativo 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-search
                    | Retorno de la Inversión (ROI)
      p.mb-5 La recomendación estratégica debe superar la descripción del problema y plantear una acción sustentada en evidencias, capacidades organizacionales y beneficios verificables.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img22.png" style="max-width: 60px").m-auto
        .col
          h3 Presentación del resumen ejecutivo
      p.mb-5 El entregable final aplica la técnica de la pirámide invertida, que organiza la información desde los aspectos más relevantes hasta los elementos complementarios. Su estructura comprende los siguientes pasos:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Recomendación central
                p.mb-0 Presenta de manera inmediata qué acción debe ejecutar la organización. Facilita a la gerencia decisiones y agilidad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img16.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img17.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Evidencias clave
                p.mb-0 Expone los datos, hallazgos y resultados que justifican la recomendación. Son evidencias con sustento.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Análisis de riesgos y oportunidades
                p.mb-0 Explica las consecuencias de actuar o no actuar frente a la situación identificada. 
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img18.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img19.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Siguientes pasos
                p.mb-0 Define las acciones requeridas para implementar, controlar y evaluar la recomendación. Es el llamado a la acción.
      p.mb-5 La siguiente figura presenta un ejemplo gráfico para la elaboración de un resumen ejecutivo mediante la técnica de la pirámide invertida.
      .row.justify-content-center.mb-0
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 3.
            span Elaboración de resúmenes ejecutivos
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t3/img20.png', alt='La figura representa la estructura de un resumen ejecutivo mediante la técnica de la pirámide invertida. Prioriza la recomendación central, seguida de las evidencias, el análisis de riesgos y oportunidades, y los pasos de acción para facilitar decisiones gerenciales ágiles.').m-auto
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Caso de uso aplicado: #[i E-commerce] Central Ferretera
      .box___style_5.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Para anclar estos saberes en un entorno productivo real, se presenta la etapa conclusiva del proyecto de #[b Central Ferretera]. Recordemos que la empresa se encuentra desarrollando una plataforma de comercio electrónico bajo la arquitectura WordPress y WooCommerce. En las unidades previas, el equipo ejecutó ecuaciones de búsqueda especializadas y validó, mediante el cruce de datos, múltiples herramientas de optimización, seguridad y pasarelas de pago. Ahora, el aprendiz a cargo debe transformar esos datos en decisiones estratégicas.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img21.png', alt='' style="width: 500px").m-auto
      p.mb-5 El caso integra el análisis, la gestión del conocimiento y la formulación de la recomendación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img22.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Transformación de resultados (análisis)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El equipo somete las fichas de caracterización al análisis final. A nivel #[b cuantitativo], revisan las métricas de carga (rendimiento) extraídas de estudios técnicos sobre servidores. Descubren que los sitios web de ferreterías que demoran más de 3 segundos en cargar pierden el 53% de las ventas móviles. A nivel #[b cualitativo], analizan la normativa de la DIAN respecto a la facturación electrónica y las políticas de retención de datos en Colombia, concluyendo que la seguridad de los datos financieros de los clientes es el riesgo reputacional más crítico del proyecto.
            .row(titulo="Gestión del conocimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Para evitar la amnesia corporativa, el equipo redacta un documento de #[b Lecciones Aprendidas] que se aloja en el repositorio institucional. La regla principal establecida dicta: "Queda estrictamente prohibido en la organización la instalación de '#[i plugins]' de WooCommerce que no hayan recibido actualizaciones de seguridad en los últimos 6 meses, independientemente de su popularidad". Esta directriz asegura que cualquier futuro desarrollador contratado mantenga la integridad del código fuente.
            .row(titulo="Recomendaciones y toma de decisiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El rol de analista de inteligencia, redacta el #[b Informe estratégico] dirigido a la gerencia de Central Ferretera.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p En lugar de explicar la programación de las herramientas, emite la siguiente recomendación accionable:
          .box___style_1.fit___box_1(data-aos="fade-right")
            p #[b Recomendación estratégica:] "Con base en el análisis del entorno digital y la normativa tributaria vigente, se recomienda autorizar el despliegue de la tienda virtual Central Ferretera bajo el ecosistema WooCommerce, condicionado a dos factores críticos:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-search
                | La contratación de un servidor de tipo VPS (Virtual Private Server) con configuración de caché a nivel de servidor (Redis), para garantizar tiempos de carga inferiores a 2.5 segundos, mitigando la tasa de abandono de carritos.
              li.mb-0
                span.fa-li
                  i.fas.fa-search
                | La integración exclusiva de la pasarela de pagos nacional evaluada, ya que es la única que certifica la generación automática del XML para la DIAN. La ejecución de esta arquitectura incrementará el costo inicial de infraestructura en un 12 %, pero evitará sanciones fiscales y proyecta una recuperación de la inversión (ROI) durante los primeros 8 meses de operación ininterrumpida."
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img23.png', alt='' style="width: 500px").m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Respaldada por un proceso riguroso de vigilancia e inteligencia organizacional, la gerencia aprueba el proyecto. El caso evidencia cómo los hallazgos técnicos se convierten en recomendaciones sustentadas que reducen la incertidumbre y favorecen una ventaja competitiva sostenible y rentable.

</template>

<script>
import audio1 from '@/assets/curso/temas/t3/audios/Conocimiento_Permanece_Lecciones_Aprendidas_Memoria_Organizacional.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
