<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span 2
        h1 Procesamiento, validación y almacenamiento de datos
      .box___style_5.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.fit___box_container
            p.mb-0 Tras recuperar información en bases de datos especializadas, el aprendiz transforma los datos dispersos en información estructurada mediante procesamiento, validación experta y almacenamiento documental, garantizando conocimiento confiable y accesible para la organización.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img1.png', alt='' style="width: 500px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Procesamiento de la información: cruces estratégicos y fichas de caracterización
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El procesamiento limpia, normaliza y estructura los datos para facilitar su análisis. Luego, la información se registra en una ficha y los hallazgos se relacionan mediante cruces estratégicos (Malaver Rodríguez & Vargas Pérez, 2007). El proceso se desarrolla de la siguiente manera:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Limpiar la información")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img2.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Limpiar la información
              p.mb-0 Se revisan los documentos recuperados para eliminar registros duplicados, datos incompletos y resultados que no responden a la necesidad de vigilancia.
        .py-3.py-md-4(titulo="Normalizar los datos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Normalizar los datos
              p.mb-0 La información procedente de patentes, artículos científicos e informes se organiza bajo criterios comunes que facilitan su comparación directa (Malaver Rodríguez & Vargas Pérez, 2007).
        .py-3.py-md-4(titulo="Estructurar los hallazgos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estructurar los hallazgos
              p.mb-0 Los datos relevantes se registran de manera sistemática mediante la Ficha de Caracterización de Información Estratégica.
        .py-3.py-md-4(titulo="Preparar el análisis")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Preparar el análisis
              p.mb-0 La información estructurada facilita la validación experta y la realización de cruces entre variables tecnológicas, normativas y comerciales.
      p.mb-5 La Ficha de Caracterización de Información Estratégica se organiza en las siguientes secciones:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Información general del proyecto
                  p Esta sección relaciona el hallazgo con el proyecto de vigilancia y registra:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Nombre del proyecto o Factor Crítico de Vigilancia (FCV).
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      |  Identificador del documento.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      |  Fecha de caracterización.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      |  Analista o vigía responsable.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      |  Dimensión de vigilancia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Metadatos de origen
                  p Documenta la fuente exacta del hallazgo para garantizar su recuperación y verificabilidad:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Base de datos de procedencia.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Título original.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Autor o inventor.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Institución o empresa.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Año de publicación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Identificador de Objeto Digital (DOI) o dirección electrónica estable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Núcleo tecnológico o comercial
                  p.mb-0 Descripción técnica del hallazgo sin ambigüedades.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nivel de madurez tecnológica (TRL - #[i Technology readiness level])
                  p.mb-0 Indicador que señala si el hallazgo es una idea conceptual, un prototipo de laboratorio o una tecnología lista para comercialización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Validación y contextualización experta
                  p Esta sección permite valorar la pertinencia del hallazgo para la organización mediante:
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Contextualización local.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Impacto potencial o riesgos.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Veredicto del experto.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Nombre del experto validador.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_2(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img7.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 La ficha normaliza los hallazgos, documenta su procedencia y reúne la información necesaria para su posterior análisis y validación experta.
      .call___to_action.mb-5(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Ficha de caracterización de información estratégica
            p.mb-0 Se invita a leer el documento, donde se reconoce su estructura e identifica los campos requeridos para registrar, contextualizar y validar los hallazgos.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexo_01_Ficha_Caracterizacion_Informacion_Estrategica.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download
      p.mb-5 Una vez caracterizada la información, los cruces estratégicos relacionan hallazgos de distintas tipologías de vigilancia para identificar patrones, riesgos, oportunidades e inconsistencias en tres dimensiones:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img12.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Dimensión tecnológica").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Incluye innovaciones, patentes, materiales, procesos y desarrollos que pueden generar nuevas capacidades para la organización.
            .row(titulo="Dimensión normativa o del entorno").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprende leyes, regulaciones, políticas públicas y requisitos que pueden favorecer, limitar o impedir la implementación de una tecnología.
            .row(titulo="Dimensión de mercado o competitiva").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Integra información sobre demanda, clientes, exportaciones, tendencias y comportamiento de los competidores.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_1(data-aos="fade-right").mb-3
            p El cruce estratégico supera el análisis descriptivo porque interpreta cada hallazgo en relación con otros factores del entorno. Esta lógica de pensamiento sistémico permite identificar relaciones que no serían evidentes al analizar los datos de manera aislada. Finalmente, se obtiene el resultado del cruce:
            h5 Resultado del cruce
            p.mb-0 La triangulación de las dimensiones permite identificar inconsistencias, oportunidades emergentes, riesgos latentes, alertas tempranas y escenarios para la toma de decisiones.
          p.mb-0 El valor del cruce estratégico no se concentra en cada dato aislado, sino en la relación entre variables que inicialmente parecen independientes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 500px").m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Validación de información: categorización, contextualización y análisis experto
      p.mb-5 La validación determina la calidad, pertinencia y aplicabilidad de la información antes de incorporarla al análisis estratégico y a la toma de decisiones organizacionales. El proceso comprende tres subprocesos que depuran y adaptan los hallazgos a las necesidades de la organización:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img14.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Categorización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en agrupar la información estructurada en clústeres o ejes temáticos según las necesidades de la empresa (ej. categorizar por "#[i Hardware]", "#[i Software]", "Logística" o "Normativa"). Esto facilita la distribución de la carga de lectura hacia los diferentes departamentos de la organización.
            .row(titulo="Contextualización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La contextualización adapta la información global a las condiciones reales de la organización y determina si cuenta con infraestructura, presupuesto y talento humano suficientes para implementar el hallazgo.
            .row(titulo="Validación experta").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La validación experta evalúa la viabilidad técnica y financiera de los hallazgos mediante conocimiento especializado. La información con fallas metodológicas, altos costos o baja aplicabilidad se descarta antes del informe final, #[b contribuyendo a reducir la sobrecarga informativa] de la alta gerencia.
      p.mb-5 La validación convierte los datos en información confiable, conocimiento aplicable e inteligencia útil. La pirámide informacional representa esta evolución según la cantidad, calidad y valor estratégico:
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_1(data-aos="flip-up").mb-3
            h5 ¿Qué es la pirámide informacional?
            p.mb-0 La pirámide informacional organiza el proceso desde los datos abundantes hasta la inteligencia estratégica. A medida que disminuye la cantidad de información, aumenta su calidad mediante selección, contextualización, interpretación y validación, hasta convertirse en conocimiento útil para la toma de decisiones (SENA, 2020).
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 2.
            span Pirámide informacional (SENA, 2020)
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t2/img15.png', alt='La imagen muestra la "Pirámide Informacional" del SENA. Consiste en una pirámide dividida horizontalmente en cuatro niveles jerárquicos: desde la base ancha hacia el vértice superior están Datos (azul), Información (verde azulado), Conocimiento (verde claro) e Inteligencia (amarillo). A la izquierda, una flecha vertical ascendente indica el incremento de la Calidad, mientras que en la base, una flecha horizontal señala que la Cantidad disminuye a medida que se asciende en la pirámide.').m-auto
      p.mb-0 El proceso de validación contribuye a reducir la sobrecarga informativa y asegura que únicamente los hallazgos pertinentes avancen hacia la generación de inteligencia organizacional.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Almacenamiento de la información: repositorios y gestión documental
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img14.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El almacenamiento #[b contribuye a preservar y organizar la información y el conocimiento generado] y evita que permanezca disperso en correos personales o carpetas locales, donde puede perderse o resultar difícil de recuperar. La gestión documental estratégica se apoya en tres elementos que garantizan la organización y recuperación de la información:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Repositorios organizacionales
                  p Son sistemas centralizados donde se almacena el conocimiento depurado y validado por la organización.
                  p.mb-0 Su implementación evita que la información dependa de archivos personales y facilita su consulta por parte de las personas autorizadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Taxonomía corporativa
                  p Corresponde a un sistema de clasificación jerárquico y estandarizado que organiza los documentos según criterios definidos por la empresa.
                  p.mb-0 Esta estructura permite localizar con rapidez un documento específico dentro del repositorio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Metadatos de recuperación
                  p Son descriptores asignados a cada documento para facilitar su búsqueda posterior. Pueden incluir:
                  .row.align-items-center
                    .col-xl-6.mb-4.mb-lg-0
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-search
                          | Año.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-search
                          | Área responsable.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-search
                          | Tecnología.
                    .col-xl-6
                      ul.fa-ul.estilo___ul.mb-0
                        li.mb-0
                          span.fa-li
                            i.fas.fa-search
                          | Nivel de confidencialidad.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-search
                          | Estado de validación.
                        li.mb-0
                          span.fa-li
                            i.fas.fa-search
                          | Proyecto relacionado.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img18.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 El uso de repositorios, taxonomías y metadatos fortalece la memoria corporativa, facilita la actualización de proyectos y reduce la pérdida de tiempo y recursos en búsquedas repetidas.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Fundamentos de la gestión documental y el ciclo de vida de la información
      p.mb-5 La gestión documental permite administrar, organizar, conservar y recuperar la información institucional durante todo su ciclo de vida, mediante prácticas archivísticas seguras y eficientes (SENA, 2024). Los conceptos básicos permiten comprender cómo se administra la información dentro de la organización:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img19.jpg', alt="" ).m-auto
              h4.text-center Gestión documental
              .box___card_sinbordes_p
                p.mb-0 Es el conjunto de actividades administrativas y técnicas orientadas a planificar, manejar y organizar la documentación desde su origen hasta su disposición final, con el propósito de facilitar su uso y conservación.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img20.jpg', alt="" ).m-auto
              h4.text-center Archivo de gestión
              .box___card_sinbordes_p
                p.mb-0 Comprende toda la documentación que se encuentra en continua utilización y consulta administrativa. Es el lugar donde los documentos permanecen mientras son objeto de consulta y trámite administrativo.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img21.jpg', alt="" ).m-auto
              h4.text-center Mensaje de datos
              .box___card_sinbordes_p
                p.mb-0  Es la información que se genera, envía, recibe o almacena a través de medios electrónicos u ópticos (como correos electrónicos o plataformas institucionales).
      p.mb-5 Estos conceptos permiten establecer cómo se produce, consulta, organiza y conserva la documentación institucional.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img22.png" style="max-width: 60px").m-auto
        .col
          h3 Ciclo de vida del documento
      p.mb-5 Los documentos siguen una secuencia organizada desde su creación hasta su disposición final, con el fin de garantizar trazabilidad, conservación y acceso. El ciclo documental se desarrolla mediante las siguientes etapas:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img23.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Planeación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Creación de planes técnicos para gestionar el documento durante todo su ciclo, garantizando el cumplimiento normativo.
            .row(titulo="Producción documental").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Generación del documento aplicando formatos normalizados, evaluando si debe nacer como documento físico o electrónico y registrándolo en el sistema.
            .row(titulo="Gestión y trámite").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Flujo de circulación del documento para resolver asuntos administrativos, verificando tiempos de respuesta y trazabilidad.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Organización (clasificación y ordenación)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Fase donde se declara el documento en el sistema, conformando expedientes íntegros y auténticos de acuerdo con los procedimientos establecidos.
            .row(titulo="Transferencias documentales").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El proceso controlado en el que un documento pasa de un archivo de gestión al archivo central o histórico cuando ya no se consulta frecuentemente.
            .row(titulo="Disposición final (Valoración)").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Determinación del destino final del documento (eliminación segura, conservación temporal o conservación permanente) según sus valores primarios y secundarios. 
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img24.png", alt="" style="width: 300px").m-auto
      p.mb-5 El cumplimiento de estas etapas garantiza que los documentos permanezcan organizados, disponibles y protegidos durante el tiempo requerido.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img22.png" style="max-width: 60px").m-auto
        .col
          h3 Repositorio organizacional y prácticas de conservación
      p.mb-5 La gestión de documentos electrónicos requiere sistemas especializados que garanticen su almacenamiento, conservación, consulta y disposición final. Los principales elementos de esta gestión se desarrollan a continuación:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA)")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img25.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA)
              p El Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA) permite conformar, administrar y preservar el patrimonio documental digital de la organización. Este facilita:
              .row.align-items-center
                .col-xl-6.mb-4.mb-lg-0
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Producción documental.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Distribución.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Consulta.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Retención.
                .col-xl-6
                  ul.fa-ul.estilo___ul.mb-0
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Almacenamiento.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Preservación.
                    li.mb-0
                      span.fa-li
                        i.fas.fa-search
                      | Disposición final.
        .py-3.py-md-4(titulo="Expedientes documentales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Expedientes documentales
              p.mb-0 Los expedientes pueden ser físicos, electrónicos o híbridos. Todos deben organizarse con criterios técnicos que garanticen integridad, autenticidad y trazabilidad.
        .py-3.py-md-4(titulo="Conservación documental")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Conservación documental
              p.mb-0 La conservación asegura que la información institucional permanezca disponible, protegida y recuperable durante el tiempo definido por la organización.
        .py-3.py-md-4(titulo="Repositorio institucional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Repositorio institucional
              p.mb-0 Centraliza los documentos y #[b contribuye a reducir la dispersión] de la información y el conocimiento permanezca disperso en correos personales, carpetas locales o archivos sin clasificación.
      p.mb-5 Los sistemas de gestión documental fortalecen la memoria corporativa y aseguran la continuidad de los procesos institucionales.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t2/img22.png" style="max-width: 60px").m-auto
        .col
          h3 Caso aplicado: #[i E-Commerce] Centrat Ferretera
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La empresa #[b Centrat Ferretera], cuyo objetivo es el desarrollo de un portal de comercio electrónico. Tras la decisión de la gerencia de no utilizar arquitecturas a la medida basadas en JavaScript puro desde cero, sino apoyarse exclusivamente en el ecosistema #[b WordPress] y #[b WooCommerce], el equipo de inteligencia ejecutó sus búsquedas. Ahora, deben procesar, validar y almacenar los hallazgos.
      p.mb-5 El caso integra las etapas estudiadas mediante la siguiente secuencia:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Procesamiento y cruces estratégicos
                p.mb-0 El aprendiz registra en fichas dos pasarelas de pago y compara sus requisitos técnicos con la normativa aplicable de la DIAN. El análisis descarta la opción internacional porque no genera el archivo XML exigido para la facturación electrónica en Colombia.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img29.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img30.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Contextualización y validación experta
                p.mb-0 El director de Tecnología valida las herramientas de optimización para WooCommerce según el inventario de más de 10.000 referencias. Descarta las que consumen demasiada memoria RAM y selecciona soluciones adecuadas para entornos empresariales de gran escala.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Almacenamiento y repositorio documental
                p.mb-0 El aprendiz reúne las fichas de caracterización, los manuales de seguridad de WordPress y la normativa de la DIAN. Luego, codifica y almacena el paquete documental en el repositorio institucional bajo la taxonomía documental definida para el proyecto” o “de acuerdo con la taxonomía establecida para el repositorio institucional”.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img31.png', alt='' style="width: 300px").m-auto
      p.mb-0 El caso evidencia que la gestión documental preserva la trazabilidad técnica, protege el conocimiento organizacional y favorece la continuidad de los proyectos.

</template>

<script>
export default {
  name: 'Tema2',
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
