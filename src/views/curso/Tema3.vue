<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Desempleo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El desempleo es uno de los problemas socioeconómicos más relevantes que enfrenta cualquier país, debido a que afecta no solo a los indicadores macroeconómicos, sino también al bienestar y estabilidad de la población. Se refiere a la situación en la que personas que están en edad y condiciones de trabajar no pueden encontrar un empleo, a pesar de estar disponibles y buscar activamente uno. Este fenómeno tiene implicaciones directas sobre la producción, el ingreso nacional, el consumo y la cohesión social.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La existencia de desempleo genera pérdidas económicas para los países, dado que se desaprovecha parte del capital humano disponible. Además, se asocia con problemas como el aumento de la pobreza, la desigualdad y la exclusión social. Una economía eficiente debe aspirar al pleno empleo, lo que implica utilizar todos sus recursos disponibles, incluyendo la fuerza laboral, de manera productiva.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Existen diferentes tipos de desempleo y diversas causas que lo provocan. Algunos están vinculados al ciclo económico, mientras que otros surgen por factores estructurales o fricciones propias del mercado laboral. Por esta razón, el desempleo no solo debe ser entendido como la falta de trabajo, sino como una manifestación de desequilibrios más profundo en la economía.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Definición y tipos de desempleo
    
    p El desempleo se define como la situación en la que una parte de la población económicamente activa, que está en condiciones y disposición de trabajar, no logra conseguir un empleo a pesar de buscarlo activamente. Es un indicador fundamental del desempeño de una economía, puesto que refleja la capacidad del sistema económico para generar puestos de trabajo. El desempleo no solo representa una pérdida de ingresos para las personas, sino también una reducción en la producción total del país.
    p.mb-4 Existen diversos tipos de desempleo, cada uno con causas y características específicas:

    .bg-full-width.bg-fondo-1.mb-5
      .px-4.px-md-5.pt-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/4.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="10%" y="32.5%" numero="+")
                h5 1. Desempleo friccional
                p Se produce cuando los trabajadores se encuentran en un proceso de transición entre un empleo y otro, o están buscando su primer trabajo. Este tipo de desempleo es temporal y común incluso en economías sanas. Por ejemplo, un recién graduado que busca una oportunidad laboral o un trabajador que deja su empleo para buscar otro mejor, entra en esta categoría.
    
              .bg-color-white.box-shadow.p-3(x="30.5%" y="18%" numero="+")
                h5 2. Desempleo estructural
                p El cual se origina por desajustes entre las habilidades que poseen los trabajadores y las que requieren las empresas. Este fenómeno suele estar vinculado a cambios tecnológicos, educativos o de organización industrial. Por ejemplo, un operario que pierde su empleo debido a la automatización de su área y no tiene capacitación en nuevas tecnologías puede tardar años en reubicarse laboralmente. Este tipo de desempleo es más complejo de resolver, porque requiere políticas de reconversión laboral y educación continua.
    
              .bg-color-white.box-shadow.p-3(x="69%" y="19%" numero="+")
                h5 3. Desempleo cíclico 
                p Está relacionado con las fases del ciclo económico. Aumenta en periodos de recesión cuando cae la demanda agregada y las empresas reducen su producción, lo que las obliga a despedir trabajadores. Por ejemplo, durante la crisis financiera mundial de 2008, muchas economías experimentaron un aumento significativo del desempleo debido a la caída del consumo y la inversión. Este tipo de desempleo suele reducirse cuando la economía se recupera, por medio de políticas fiscales y monetarias expansivas.
    
              .bg-color-white.box-shadow.p-3(x="89%" y="34%" numero="+")
                h5 4. Desempleo estacional
                p Ocurre en sectores donde la demanda laboral varía a lo largo del año. Actividades como la agricultura, el turismo o la construcción presentan periodos de alta y baja contratación. Por ejemplo, en zonas rurales, muchos trabajadores agrícolas solo tienen empleo durante la época de cosecha, quedando desempleados el resto del año. Este tipo de desempleo puede ser previsto y en algunos casos mitigado con programas temporales de empleo o seguros de desempleo.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-10.p-4.h-100(data-aos="fade-left")
          p.mb-0 Finalmente, es importante mencionar el concepto de subempleo o desempleo encubierto, que, aunque no forma parte de los tipos clásicos, representa una condición en la que las personas están ocupadas, pero en trabajos que no corresponden a su formación o habilidades, o con ingresos insuficientes. Por ejemplo, un ingeniero que trabaja como conductor de taxi debido a la falta de oportunidades en su campo profesional. Este fenómeno también refleja ineficiencias en el mercado laboral y puede coexistir con tasas bajas de desempleo abierto.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Causas del desempleo y su relación en el ciclo económico
    
    p El desempleo es un fenómeno complejo que puede tener diversas causas, muchas de las cuales están íntimamente ligadas a las dinámicas propias del ciclo económico. El ciclo económico se refiere a las fluctuaciones recurrentes en la actividad económica de un país, caracterizadas por fases de expansión, auge, recesión y recuperación. Estas fases determinan, en gran medida, el comportamiento del empleo, la producción, la inversión y el consumo en una economía (Burneo, 2016).

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fase de expansión
              p Durante la fase de expansión del ciclo económico, la producción aumenta, las empresas invierten más, se abren nuevas plazas laborales y el desempleo tiende a disminuir. Por ejemplo, cuando una economía crece gracias al aumento de las exportaciones, como ocurrió en Colombia con el auge de las materias primas en la primera década del siglo XXI, se genera empleo en sectores como transporte, minería y servicios.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fase de recesión
              p Durante la fase de recesión, la demanda de bienes y servicios cae, las empresas recortan gastos y personal, y el desempleo tiende a subir.
    
    p.mb-4 Entre las principales causas del desempleo se encuentran:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Disminución de la demanda agregada")
            p La disminución de la demanda agregada, especialmente durante las recesiones. Cuando los consumidores reducen su gasto debido a la incertidumbre económica o la pérdida de ingresos, las empresas venden menos, bajan su producción y despiden trabajadores. Por ejemplo, en una recesión causada por una crisis financiera, muchas empresas del sector construcción, automotriz y comercio cerraron o redujeron sus operaciones, generando desempleo masivo.
    
          .div(titulo="Rigidez del mercado laboral")
            p Otra causa relevante es la rigidez del mercado laboral, que impide ajustes rápidos entre oferta y demanda de trabajo. Legislaciones laborales muy estrictas, salarios mínimos altos en relación a la productividad o costos elevados para despedir empleados pueden disuadir a las empresas de contratar, especialmente en momentos de incertidumbre económica. Por ejemplo, si una empresa atraviesa una baja en ventas, pero despedir a sus empleados le implica altos costos legales, puede evitar contratar en el futuro aun si las ventas se recuperan, manteniendo altos niveles de desempleo estructural.
    
          .div(titulo="Transformación tecnológica")
            p También influye la transformación tecnológica y los cambios estructurales en la economía. Cuando nuevas tecnologías sustituyen la mano de obra o cuando las preferencias del consumidor cambian, algunos sectores pierden relevancia y otros crecen, pero no siempre al mismo ritmo. Así, trabajadores con ciertas habilidades pueden quedar desplazados. Un ejemplo es el cierre de agencias de viaje físicas frente al auge de las plataformas digitales; muchas personas que no lograron adaptarse a los nuevos sistemas quedaron desempleadas o subempleadas.
    
          .div(titulo="Expectativas negativas")
            p El desempleo también puede ser inducido por expectativas negativas. Si los consumidores y empresarios anticipan una caída en la economía, pueden reducir su consumo e inversión incluso antes de que ocurra una recesión, generando un efecto de autocumplimiento que eleva el desempleo. Este vínculo entre las expectativas y el ciclo económico es muy relevante para las políticas públicas, que deben enfocarse en generar confianza, estimular la demanda y fomentar la capacitación laboral como forma de mitigar los efectos negativos de las crisis económicas.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Desempleo#Tipos_y_definiciones" target="_blank" rel="noopener noreferrer") colaboradores de Wikipedia. (2025c, abril 12). Desempleo - Wikipedia, la enciclopedia libre.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=MW9Y5Pc_aC " target="_blank" rel="noopener noreferrer") Economía en Cuarentena. (2020a, 4 de mayo). Inflación: Causas y Desempleo vs. Inflación [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
