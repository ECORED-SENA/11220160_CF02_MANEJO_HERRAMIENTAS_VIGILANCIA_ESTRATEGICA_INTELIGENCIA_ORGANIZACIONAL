<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada por el componente formativo.
      .row.justify-content-center
        .col-lg-12.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="El esquema sintetiza la ejecución, el análisis y la gestión de la información estratégica mediante tres ejes articulados. El primero comprende la ejecución de búsquedas y la recuperación de información, desde el diseño de ecuaciones, operadores y sintaxis hasta las estrategias de búsqueda y los filtros de metadatos. El segundo aborda el procesamiento y la validación de los datos mediante fichas de caracterización, cruces estratégicos, categorización, contextualización, validación experta, repositorios y gestión documental. El tercero integra el análisis y la toma de decisiones, incluyendo la interpretación cuantitativa y cualitativa, la inteligencia accionable, las lecciones aprendidas, la difusión del conocimiento y la formulación de recomendaciones sustentadas en evidencias, propuestas de valor, retorno de inversión y técnicas de presentación ejecutiva.")
        .col-auto
          a.anexo(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
