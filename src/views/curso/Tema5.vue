<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Tasa de interés y tasa de cambio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-11
      .p-4.p-md-5
        p.mb-4 En el análisis del entorno económico, comprender el funcionamiento de las tasas de interés y la tasa de cambio es fundamental, puesto que ambas variables influyen directamente sobre las decisiones de consumo, ahorro, inversión y comercio exterior. Estas tasas representan el costo del dinero y el valor relativo de una moneda frente a otra, y se considera evaluar el comportamiento de la economía nacional en un contexto globalizado.

        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tasa de interés
                p.mb-0 Es una herramienta clave de la política monetaria y refleja el precio del dinero en el tiempo. Afecta tanto a los consumidores como a las empresas, porque determinan el costo del financiamiento y el rendimiento del ahorro. 
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema5/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tasa de cambio
                p.mb-0 Muestra cuantas unidades de moneda nacional se requieren para adquirir una unidad de moneda extranjera. Su variación tiene un impacto directo sobre las exportaciones, las importaciones, la inflación y la competitividad de un país.
         
    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Definición, tipos y función de la tasa de interés en la economía

    p.mb-4 La tasa de interés es un elemento clave en la dinámica financiera de personas, empresas y gobiernos, pues regula el acceso al dinero y condiciona decisiones de consumo, ahorro e inversión.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Definición, tipos y función de la tasa de interés en la economía
            p.mb-4(data-aos="fade-right") En el PDF <b>Definición tipos y función</b>, se analizan sus distintas formas, su impacto sobre la actividad económica y su papel como herramienta de política monetaria. Este recurso permite comprender cómo las tasas influyen tanto en los mercados como en la vida cotidiana, facilitando una gestión financiera más informada y estratégica.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Definición, tipos y función de la tasa de interés en la economía.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema5/3.png', alt='')
    
    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Factores que influyen en la determinación de la tasa de cambio

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto.order-2
            img(src="@/assets/curso/tema5/4.svg", style="max-width: 190px").mx-auto
          .col-lg.order-1
            p.mb-0 La tasa de cambio, entendida como el valor de una moneda frente a otra, no es un valor estático, sino que varía constantemente debido a múltiples factores económicos, financieros y políticos. En economías abiertas como la colombiana, esta variable es clave para el comercio internacional, la inversión extranjera, la inflación y la estabilidad macroeconómica.
    
    p.mb-4 A continuación, se presentarán algunos de los factores que influyen en la determinación de la tasa de cambio:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-7
              h5 La oferta y demanda de divisas
              p Uno de los factores principales que afectan la tasa de cambio es la oferta y demanda de divisas. Cuando un país exporta más bienes y servicios que los que importa, genera una mayor entrada de divisas, lo que tiende a fortalecer la moneda local (revaluación). Por el contrario, si las importaciones superan a las exportaciones, se incrementa la demanda de divisas, generando presión sobre la moneda nacional y provocando su depreciación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/6.png")
            .col-lg-7
              h5 Nivel de tasas de interés
              p Cuando un país ofrece tasas de interés relativamente altas frente a otras economías, atrae inversión extranjera en busca de mayores rendimientos, lo que genera un aumento en la entrada de capitales y una apreciación en la moneda local. En cambio, tasas de interés bajas pueden provocar salidas de capital, debilitando la moneda. Este factor está estrechamente relacionado con el banco central y las expectativas sobre la inflación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema5/7.png")
            .col-lg-7
              h5 Confianza de los inversionistas y la estabilidad política y económica
              p La confianza de los inversionistas, y la estabilidad política y económica también influyen directamente en la tasa de cambio. Un entorno estable promueve la inversión extranjera y el fortalecimiento de la moneda local. En cambio, situaciones de incertidumbre política, altos niveles de endeudamiento o pérdida de credibilidad institucional generan fuga de capitales y presión sobre la moneda nacional. Por eso, la percepción del riesgo del país es un indicador que los mercados monitorean con atención.

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
  name: 'Tema5',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
