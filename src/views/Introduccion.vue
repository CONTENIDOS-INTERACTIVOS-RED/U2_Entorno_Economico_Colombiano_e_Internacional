<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          p.mb-0 En esta unidad se aborda el estudio de las variables y agregados económicos más representativos para comprender el funcionamiento de la economía, a nivel nacional e internacional. Se analizan indicadores como el Producto Interno Bruto (PIB), la inflación, el desempleo, la tasa de interés y la tasa de cambio, así como los instrumentos de la política económica y el papel de los organismos internacionales y los acuerdos de libre comercio. Estos conceptos permiten interpretar el comportamiento económico de un país, para evaluar su desempeño y comprender las decisiones de política económica adoptadas por los gobiernos.
        p(data-aos="fade-left") Al finalizar esta unidad, se espera que el estudiante pueda identificar y explicar los principales agregados macroeconómicos, analizar su impacto en la economía nacional y global, y reconocer el papel que cumplen las instituciones y acuerdos internacionales en la dinámica económica. De este modo, se fortalece la capacidad de tomar decisiones informadas en contextos económicos reales.
    
    .bg-full-width.bg-color-13
      .p-4.p-md-5
        .bg-color-14.p-4.mb-5(data-aos="fade-left")
          p.mb-0 La temática tratada en esta unidad, resulta fundamental para quienes deseen desempeñarse en áreas relacionadas con la administración, contabilidad, negocios internacionales, economía o finanzas, dado que proporciona herramientas claves para interpretar los datos macroeconómicos y sus implicaciones en diversos sectores. Asimismo, permite comprender cómo fenómenos como la inflación o el desempleo, pueden influir en el bienestar de la población y las estrategias de los agentes económicos.
        p.mb-4 La unidad está organizada en 8 temas que se desarrollan de forma progresiva: 

        .bg-full-width.bg-fondo-5
          .px-4.px-md-5.pb-md-3
            .row.justify-content-center
              .col-lg-8.mb-3.mb-lg-0.order-lg-2
                SlyderF(columnas="col-12 col-lg-6")
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/3.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center Producto Interno Bruto (PIB)
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/4.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center Inflación
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/5.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center Desempleo
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/6.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center Política económica
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/7.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center Tasas de interés y de cambio
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/8.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center Organismos económicos internacionales
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/9.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center Acuerdos de libre comercio
                  div(data-aos="zoom-in-up")
                    .custom-image-card-2.h-100
                      img.custom-image-card__image(src="@/assets/curso/intro/10.png" alt="")
                      .custom-image-card__text.p-4
                        h4.mb-2.text-center El impacto de los acuerdos de libre comercio en el desarrollo nacional.     
              .col-lg-4.order-lg-1
                figure
                  img(src='@/assets/curso/intro/2.png', alt='')
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Se espera una participación activa, responsable y reflexiva, por parte del estudiante, aprovechando el máximo de recursos disponibles. La comprensión de estos conceptos será esencial para avanzar en el estudio del entorno económico colombiano y global.

</template>
