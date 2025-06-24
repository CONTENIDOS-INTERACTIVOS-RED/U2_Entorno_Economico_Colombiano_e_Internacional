<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Inflación'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema2/1.svg', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up").text-white La inflación es uno de los fenómenos económicos más importantes y debatidos en el análisis macroeconómico. Se refiere al aumento generalizado y sostenido de los precios de los bienes y servicios en una economía durante un periodo determinado. Aunque un cierto nivel de inflación puede ser considerado normal en economías dinámicas, su exceso o descontrol puede afectar profundamente la estabilidad económica, el poder adquisitivo de la población y la distribución del ingreso. Comprender qué es la inflación, cuáles son sus causas, tipos y consecuencias permite interpretar de forma crítica los cambios en el entorno económico y las decisiones de política monetaria adoptadas por los gobiernos y bancos centrales.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto y causas de la inflación: demanda, costos y expectativas 
    
    p.mb-4 La comprensión de la inflación y sus causas es fundamental para analizar la estabilidad económica de un país y diseñar políticas que promuevan el bienestar social.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Concepto y causas de la inflación: demanda, costos y expectativas
            p.mb-4(data-aos="fade-right") En el PDF <b>Concepto y causas de la inflación</b>, se examinan las distintas formas en que este fenómeno se manifiesta y se mide, destacando cómo la interacción entre consumo, producción y expectativas puede generar presiones inflacionarias. Este documento ofrece un enfoque integral que facilita la interpretación de uno de los indicadores económicos más relevantes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto y causas de la inflación: demanda, costos y expectativas.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/2.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tipos de inflación: moderada, galopante e hiperinflación 
    
    p.mb-4 La inflación, además de tener diversas causas, puede clasificarse, según su intensidad o ritmo de crecimiento. Esta clasificación permite evaluar la gravedad del fenómeno y determinar las medidas necesarias para controlarlo. Existen tres tipos principales de inflación los cuales son: moderada, la galopante y la hiperinflación. Cada una presenta características distintas y tiene consecuencias específicas sobre la economía y el bienestar de la población.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Inflación moderada")
            p Es aquella que se mantiene en niveles bajos y relativamente estables, por lo general entre el 1 % y el 10 % anual. Este tipo de inflación se considera manejable e incluso normal en una economía en crecimiento. De hecho, muchos bancos centrales tienen como meta una inflación controlada de entre el 2 % y el 4 %, puesto que una ligera inflación incentiva el consumo y la inversión. Por ejemplo, si una economía presenta una inflación anual del 3 %, los consumidores pueden preferir gastar en lugar de ahorrar, estimulando así la actividad económica. La inflación moderada permite ajustes de precios relativos sin generar distorsiones graves.
    
          .div(titulo="Inflación galopante")
            p Ocurre cuando los precios aumentan a tasas de dos o tres dígitos anuales, es decir, entre el 20 % y el 100 % o más. Este tipo de inflación comienza a generar serias dificultades económicas, como pérdida de poder adquisitivo, incertidumbre en la inversión, distorsión en los precios y problemas en la planificación financiera. Un ejemplo histórico se dio en Argentina durante la década de 1980, cuando la inflación galopante superó el 200 % anual, generando desconfianza en la moneda local y empobreciendo rápidamente a la clase media. Este tipo de inflación obliga a las personas a cambiar sus patrones de consumo y ahorro, muchas veces refugiándose en monedas extranjeras o bienes duraderos.
    
          .div(titulo="Hiperinflación")
            p La forma más extrema del fenómeno inflacionario es la <b>Hiperinflación</b>, que se presenta cuando los precios suben de manera descontrolada, superando el 1.000 % anual. Este tipo de inflación destruye completamente el valor del dinero, provocando una crisis económica, social y política. En contextos de hiperinflación, los precios pueden duplicarse cada poco día, lo que imposibilita la planificación financiera incluso a corto plazo. Uno de los casos más conocidos es el de Venezuela en los últimos años, donde el Fondo Monetario Internacional reportó tasas anuales de inflación superiores al 1.000.000 % en 2018. La gente recurría al trueque o al uso de monedas extranjeras como el dólar para realizar sus transacciones cotidianas.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white La hiperinflación generalmente es causada por un descontrol en la emisión de dinero por parte del banco central, muchas veces para financiar déficits fiscales crecientes sin respaldo en producción. A medida que la gente pierde confianza en la moneda nacional, la demanda de bienes y servicios se dispara por miedo a que el dinero pierda aún más valor, lo que acelera aún más el aumento de precios. 
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-10.p-4.h-100(data-aos="fade-left")
          p.mb-0 Frente a estos tres tipos de inflación, las medidas de política económica varían. Mientras que una inflación moderada puede ser controlada con ajustes en la tasa de interés o la oferta monetaria, la inflación galopante y la hiperinflación requieren intervenciones más profundas, como reformas fiscales, control del gasto público, estabilización monetaria e incluso sustitución de la moneda nacional. Un ejemplo de ello fue el “Plan Real” en Brasil en 1994, que logró detener una hiperinflación mediante un cambio de moneda y disciplina fiscal.
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Consecuencias de la inflación sobre la economía y la población
    
    p.mb-4 La inflación no solo afecta el valor del dinero, sino que también genera una serie de consecuencias económicas y sociales que impactan el bienestar general de la población.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Consecuencias de la inflación sobre la economía y la población 
            p.mb-4(data-aos="fade-right") En el PDF <b>Consecuencias de la inflación sobre la economía y la población</b>, se analizan los efectos que este fenómeno tiene sobre el poder adquisitivo, la inversión, el ahorro, el empleo y la estabilidad macroeconómica. Este documento ofrece una visión integral para comprender por qué controlar la inflación es esencial para garantizar el desarrollo y la equidad social.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Consecuencias de la inflación sobre la economía y la población .
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Inflaci%C3%B3n " target="_blank" rel="noopener noreferrer") colaboradores de Wikipedia. (2025a, marzo 12). Inflación - Wikipedia, la enciclopedia libre. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=zRLo6UQ7JwE" target="_blank" rel="noopener noreferrer") Te lo explico En un minuto. (2021, 28 de junio). 92.- ¿Qué es la inflación? - ¡Te lo Explico en Un Minuto! [Vídeo]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=m3tJMq51x4g " target="_blank" rel="noopener noreferrer") Experiummarkets - Inversiones y Finanzas. (2018, 7 de junio). ¿QUE ES LA INFLACIÓN? y Que es la HIPERINFLACIÓN, el Impuesto de los Pobres [Vídeo]. YouTube. 

 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
