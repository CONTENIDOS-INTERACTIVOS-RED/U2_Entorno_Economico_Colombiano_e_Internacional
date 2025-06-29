<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'7. Acuerdos de libre comercio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema7/1.svg', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            h4 En un mundo cada vez más globalizado, los acuerdos de libre comercio (TLC) se han convertido en herramientas fundamentales para fomentar el intercambio de bienes, servicios e inversiones entre países.
            p.mb-0(data-aos="fade-up") Estos acuerdos buscan eliminar o reducir barreras arancelarias y no arancelarias con el fin de facilitar el acceso a mercados internacionales, incrementar la competitividad de las economías firmantes y generar nuevas oportunidades de desarrollo. Para naciones en vías de desarrollo como Colombia, los TLC representan una oportunidad estratégica para diversificar su economía, aumentar sus exportaciones y atraer inversión extranjera directa.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema7/2.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p.mb-0.text-white Colombia, en las últimas décadas, ha adoptado una política de apertura económica que le ha permitido firmar múltiples acuerdos comerciales con diferentes bloques y países. Estos tratados han buscado posicionar al país como un socio confiable y competitivo en el comercio internacional. Sin embargo, también han generado debates sobre sus efectos en sectores sensibles de la economía nacional, el empleo rural y la soberanía alimentaria.

    #t_7_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 7.1] Concepto y objetivos de los acuerdos de libre comercio
    
    p.mb-4 Los acuerdos de libre comercio son herramientas fundamentales para impulsar la integración económica entre países y fomentar el crecimiento comercial.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Concepto y objetivos de los acuerdos de libre comercio
            p.mb-4(data-aos="fade-right") En el PDF <b>Concepto y objetivos de los acuerdos de libre comercio</b>, se exploran las definiciones, beneficios y propósitos de estos tratados, destacando su papel en la eliminación de barreras comerciales, la atracción de inversión extranjera y la mejora de la competitividad. Este material ofrece una comprensión clara de cómo los TLC contribuyen al desarrollo económico y fortalecen las relaciones internacionales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Concepto y objetivos de los acuerdos de libre comercio.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema7/3.png', alt='')

    #t_7_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 7.2] Principales acuerdos firmados por Colombia y sus complicaciones económicas
    
    p.mb-4 Colombia ha adoptado una política de apertura económica mediante la firma de múltiples tratados de libre comercio (TLC) con diversos países y bloques económicos. Entre los acuerdos más significativos se encuentran los suscritos con Estados Unidos, la unión europea, Canadá, Chile, México y demás. Estos tratados buscan facilitar el acceso a mercados internacionales, promover la inversión extranjera y diversificar las exportaciones colombianas. Según el Ministerio de Comercio, Industria y Turismo Colombia cuenta con 18 acuerdos comerciales vigentes. Conozcamos algunos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema7/4.png")
            .col-lg-7
              h5 TLC con Estados Unidos
              p En vigor desde mayo del 2012, ha sido uno de los más relevantes para Colombia. Este acuerdo ha incrementado el comercio bilateral y ha mejorado la percepción internacional del país. Sin embargo, también ha generado controversias, especialmente en sectores como el agrícola, donde productos como el arroz, el maíz y la leche han enfrentado una competencia más intensa debido a las importaciones desde Estados Unidos. Además, se han presentado tensiones recientes, como la imposición de aranceles por parte del gobierno estadounidense, lo que ha puesto en entredicho la estabilidad del acuerdo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema7/5.png")
            .col-lg-7
              h5 TLC con la Unión Europea
              p Implementado en el 2013, ha permitido a Colombia acceder a un mercado amplio y diversificado. No obstante, algunos sectores industriales y agrícolas han expresado preocupaciones sobre la competencia con productos europeos, que en ocasiones cuentan con subsidios y estándares de calidad diferentes. Estas diferencias han generado desafíos para los productores colombianos, quienes deben adaptarse a las exigencias del mercado europeo para mantener su competitividad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema7/6.png")
            .col-lg-7
              h5 Alianza del Pacífico
              p Conformada por Colombia, Chile, México y Perú, representa un esfuerzo regional por integrar las economías y facilitar el comercio intrarregional. Si bien ha abierto oportunidades para las empresas colombianas, también ha expuesto a ciertos sectores a una competencia más intensa, especialmente aquellos que no han logrado modernizarse o adaptarse a las nuevas condiciones del mercado. Esto ha resaltado la necesidad de políticas públicas que apoyen la innovación y el fortalecimiento de las capacidades productivas nacionales.


    #t_7_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 7.3] Ventajas y desventajas del libre comercio en el contexto colombiano 
    
    p.mb-4 El análisis del libre comercio en Colombia permite entender los efectos positivos y negativos que este modelo genera sobre la economía nacional y sus sectores productivos.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Ventajas y desventajas del libre comercio en el contexto colombiano
            p.mb-4(data-aos="fade-right") En el PDF <b>Ventajas y desventajas del libre comercio en el contexto colombiano</b>, se presentan los beneficios en términos de acceso a mercados, inversión y competitividad, así como los desafíos asociados a la competencia externa y la vulnerabilidad de ciertos sectores locales. Este material invita a reflexionar de forma crítica sobre el impacto real de los tratados comerciales en el desarrollo del país.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Ventajas y desventajas del libre comercio en el contexto colombiano.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema7/7.png', alt='')

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Tratado_de_Libre_Comercio_entre_Colombia_y_Estados_Unidos#:~:text=Desde%20el%2015%20de%20mayo%20de%202012%20entr%C3%B3%20en%20vigencia,nacional%2C%20entre%20ellos%20las%20TIC." target="_blank" rel="noopener noreferrer") Colaboradores de Wikipedia. (2024, 13 abril). Tratado de Libre Comercio entre Colombia y Estados Unidos. Wikipedia, la Enciclopedia Libre.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=lc7dIF7hrCQ" target="_blank" rel="noopener noreferrer") Giraldo, C. (2013, 4 de julio). ¿ES BUENO o MALO PARA COLOMBIA LOS TLC TRATADOS DE LIBRE COMERCIO? [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema7',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes componentes no forma parte del Producto Interno Bruto (PIB)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Gasto público',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Inversión',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Exportaciones brutas',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Consumo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué tipo de inflación se caracteriza por aumentos de precios extremadamente altos en un corto período?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Inflación moderada',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Inflación estructural',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Hiperinflación',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Inflación importada',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es una de las funciones principales del Fondo Monetario Internacional (FMI)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Vigilar los acuerdos de libre comercio',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Emitir billetes para los países miembros',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Otorgar asistencia financiera a países con desequilibrios externos',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Regular el comercio agrícola internacional',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Cuál es una causa común del desempleo estructural?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Desajuste entre las habilidades de los trabajadores y las necesidades del mercado',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Baja rotación laboral',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Falta de vacaciones remuneradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Aumento de la demanda de bienes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes instrumentos pertenece a la política monetaria?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Política arancelaria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Tasa de interés de intervención',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Presupuesto de inversión pública',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Subsidios al consumo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
