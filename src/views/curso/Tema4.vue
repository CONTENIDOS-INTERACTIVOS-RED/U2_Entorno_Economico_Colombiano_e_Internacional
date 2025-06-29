<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Política económica'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          p.mb-0 La política económica es el conjunto de decisiones, estrategias y acciones implementadas por los gobiernos para influir en el comportamiento de la economía nacional. Su objetivo principal es garantizar el crecimiento económico sostenido, el control de la inflación, la reducción del desempleo, el equilibrio fiscal y la mejora del bienestar general de la población. Para ello, se vale de herramientas que permiten intervenir en distintos aspectos de la economía, como el consumo, la inversión, el gasto público, la tasa de interés, la oferta monetaria, entre otros factores claves (Burneo, K. 2016).
        p(data-aos="fade-left") Esta política se divide, principalmente, en dos grandes ramas: la política fiscal y la política monetaria. 
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Política fiscal   
              p.mb-0 Se encarga de las decisiones relacionadas con el gasto público y la recaudación de impuestos.

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Política monetaria
              p.mb-0 Regula la cantidad de dinero en circulación y las tasas de interés, a través del banco central.
      
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white Ambas herramientas son esenciales para enfrentar situaciones como recesiones, crisis inflacionarias o desequilibrios en la balanza de pagos (Cue Mancera, 2015).
    
    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.align-items-center.mb-5
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 190px").mx-auto
          .col-lg
            p En contextos como el colombiano, donde la economía enfrenta desafíos estructurales como la informalidad laboral, la baja productividad y la desigualdad, la política económica juega un papel crucial para promover el desarrollo sostenible. Las medidas adoptadas deben ser coherentes, oportunas y adaptadas a las condiciones internas y externas del país. Además, su formulación debe estar basada en el análisis de datos económicos confiables y en la comprensión de las dinámicas del mercado nacional e internacional.
            p Eggers, F. G. en su libro “Economía” nos da unos conceptos esenciales para el estudio de este tema los cuales son:
        
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/5.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Política (fiscal o monetaria) expansiva
                p.mb-0.text-center La que hace aumentar la demanda agregada.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/6.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Política (fiscal o monetaria) contractiva
                p.mb-0.text-center La que hace disminuir la demanda agregada.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema4/7.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Crisis fiscal
                p.mb-0.text-center Situación de carencia de recursos que obliga al Estado a reducir sus gastos y/o aumentar sus ingresos (pág. 178).


    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Política fiscal: ingresos, gastos y déficit público
    
    p.mb-4 Para conocer sobre el tema Política fiscal: ingresos, gastos y déficit público le invitamos a ver el siguiente vídeo: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Política monetaria: control de la oferta monetaria e instrumentos del banco central
    
    p.mb-4 La política monetaria es una herramienta clave para mantener la estabilidad económica y controlar la inflación mediante la regulación de la oferta monetaria.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Política monetaria: control de la oferta monetaria e instrumentos del banco central
            p.mb-4(data-aos="fade-right") En el PDF <b>Política monetaria</b>, se explican los principales mecanismos utilizados por los bancos centrales —como la tasa de interés, las operaciones de mercado abierto y el encaje bancario— y su impacto sobre el consumo, la inversión y los precios. Este documento proporciona fundamentos esenciales para comprender cómo se gestiona el dinero en una economía y cómo estas decisiones influyen directamente en el bienestar de la población.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Política monetaria: control de la oferta monetaria e instrumentos del banco central.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/8.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1665-952X2018000300070" target="_blank" rel="noopener noreferrer") Clavellina Miller, José Luis. (2018). Determinantes del tipo de cambio y su volatilidad. Economía UNAM, 15(45), 70-88.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PvU_s06x0Z4" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021, 12 de agosto). El sistema financiero y las tasas de interés [Vídeo]. YouTube.   

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema4',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
