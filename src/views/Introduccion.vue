<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido(data-aos="flip-up")
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Tras consolidar los fundamentos teóricos y la planeación metodológica, este componente formativo aborda la ejecución operativa y analítica del ciclo de vigilancia e inteligencia organizacional. En esta etapa, el aprendiz aplica estrategias avanzadas de recuperación de información mediante ecuaciones de búsqueda, operadores booleanos, criterios de filtrado y técnicas de extracción estructurada. Estas herramientas permiten obtener datos pertinentes, confiables y con valor técnico y científico.
          .box___style_1(data-aos="fade-right")
            p.mb-0 La ejecución rigurosa de estas actividades contribuye a reducir la infoxicación y a fortalecer la calidad de los hallazgos. El propósito es disponer de información validada por expertos que facilite la interpretación de cambios tecnológicos, comerciales y competitivos. De esta manera, el procesamiento y análisis de la información estratégica favorecen la gestión del conocimiento organizacional y la formulación de recomendaciones que reduzcan la incertidumbre en la toma de decisiones gerenciales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img1.png', alt='' style="width: 500px").m-auto
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img2.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El material propone una ruta secuencial que inicia con búsquedas especializadas en bases de datos. Continúa con el cruce de variables, la documentación en fichas de caracterización, la validación de resultados y el almacenamiento de la información en repositorios institucionales para su consulta, actualización y aprovechamiento.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
