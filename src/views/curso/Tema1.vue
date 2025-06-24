<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Producto Interno Bruto (PIB)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El Producto Interno Bruto (PIB) representa uno de los indicadores más utilizados a nivel mundial para medir el desempleo económico de un país. Ese concepto, fundamental en el análisis macroeconómico, permite cuantificar el valor total de los bienes y servicios finales, producidos por una nación, en un periodo determinado. Al comprender su cálculo, componentes y formas de medición, se facilita la interpretación de la evolución económica, la comparación entre países y el diseño de políticas públicas.
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto colombiano, el estudio del PIB resulta indispensable para entender la dinámica de crecimiento económico, identificar los sectores que impulsan la economía y analizar los efectos de fenómenos como las recesiones o las expansiones. Asimismo, la correcta interpretación de las cifras del PIB ayuda a evaluar el impacto de decisiones gubernamentales, de acuerdos comerciales y de la inversión pública y privada.
    
    .bg-full-width.bg-color-11
      .p-4.p-md-5
        .row.mb-5
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
          .col-lg-9
            p.mb-5(data-aos="fade-left") Este tema abordará los aspectos esenciales del producto interno bruto, incluyendo sus distimias formas de cálculo (PIB nominal y PIB real), los métodos de medición (producción y gasto e ingreso), así como la estructura sectorial que lo compone. También se examinarán los usos del PIB en la toma de decisiones económicas y sus limitaciones como indicador de bienestar.
        
            .bg-color-5.p-4(data-aos="fade-left")
              p.mb-0 Con este estudio se busca proporcionar al estudiante, una base sólida para el análisis económico nacional e internacional, desarrollando la capacidad de interpretar estadísticas macroeconómicas y aplicar los conocimientos adquiridos, a casos reales. Comprender el PIB no solo es clave para el análisis académico, sino también para tomar decisiones informadas en el ámbito profesional y ciudadano.

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Definición, tipos de PIB y métodos de cálculo 

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") El Producto Interno Bruto (PIB), es un indicador macroeconómico que refleja el valor monetario de todos los bienes y servicios finales producidos por una economía, en un periodo determinado, generalmente un trimestre o un año. Se considera uno de los instrumentos más importantes para medir el crecimiento económico de un país, puesto que permite observar la evolución de su actividad producida.
    
        .bg-color-10.p-4(data-aos="fade-left")
          p.mb-0 El PIB incluye únicamente la producción de bienes y servicios finales para evitar el doble conteo, excluyendo así los bienes intermedios utilizados en el proceso productivo. Además, se centra en la producción realizada dentro del territorio nacional, sin importar si los recursos utilizados son de origen nacional o extranjero. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Para Hernández Pérez, A. en su libro “Economía” el Producto Interno Bruto:")
            p “Es una medida alterna del Producto Nacional Bruto (PNB) que es la producción total obtenida con el trabajo o capital del país en cuestión, mientras que el PIB es el producto obtenido con el trabajo y capital ubicado dentro del país en cuestión. Por ejemplo, una porción del PIB estadounidense se produce en las plantas de Toyota, que son propiedad de las corporaciones japonesas que operan en los Estados Unidos. Los beneficios de esas plantas se incluyen en el PIB, pero no en el PNB estadounidense, porque Toyota es una compañía japonesa” (Pág. 77).
    
          .div(titulo="Cue Mancera, A. en su libro “Fundamentos de economía” define el PIB de la siguiente manera:")
            p “El PIB se define como la producción corriente de todos los bienes y servicios de uso final generados por los factores productivos residentes en un periodo dado. Se puede obtener su medida de forma equivalente por el lado del gasto, ingreso y producción. Con base en el PIB es posible determinar el ingreso y ahorro nacional de un país o región. El PIB es un indicador imperfecto del bienestar de una sociedad porque no contabiliza el ocio u otros factores que, a pesar de que no se venden o compran en el mercado, afectan el bienestar de los individuos” (Pág. 224).

    p.mb-4 Ahora bien, existen varios tipos de Producto Interno Bruto; entre los más importantes se destacan:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 PIB nominal
              p Este mide el valor de la producción a precios corrientes del periodo en cuestión, es decir, se ajustan con la inflación. Este tipo de PIB permite observar el crecimiento en términos monetarios, pero puede estar influenciado por cambios en los precios y no necesariamente por un aumento real en la producción.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 PIB real
              p Este se calcula a precios constantes, es decir, se elimina el efecto de la inflación. Este indicador es útil para analizar el crecimiento económico real, debido a que muestra si la economía está produciendo más bienes y servicios independientemente de las variaciones en los precios. 
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 PIB per cápita
              p Este es el resultado de dividir el PIB total de un país entre su población. Este dato ofrece una medida promedio de la producción por habitante y es útil para comparar niveles de desarrollo económico entre países o regiones.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/9.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Existen 3 métodos para poder calcular el PIB, los cuales son: por el lado del gasto, por el lado del ingreso y por el grado del producto.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Método del gasto")
            p Este método calcula el PIB, sumando el valor total del gasto en bienes y servicios finales, que realizan los diferentes sectores económicos en un país: los hogares, las empresas, el gobierno y el sector externo. Este método es el más utilizado a nivel internacional.
            p Fórmula del método del gasto:
            p PIB = C + I + G +(X - M)
            p Donde “C” es el consumo de los hogares, “I” es la inversión privada bruta interna (gasto de bienes de capital, construcción y variación de inventarios), el valor “G” hace referencia al gasto público de bienes y servicios, mientras que los valores (X-M) representa la balanza comercial, es decir, lo que se vende al exterior menos lo que se compra. Si las exportaciones superan las importaciones, se genera un superávit que suma al PIB; si ocurre lo contrario, resta.

    
          .div(titulo="Método de ingreso")
            p Este enfoque calcula el PIB a partir de todos los ingresos generados por la producción de bienes y servicios dentro de un país. Incluye salarios, rentas, intereses, beneficios empresariales y los impuestos indirectos netos de subsidios.
            p Cue Mancera, A. en su libro “Fundamentos de economía” explica lo siguiente sobre el método de ingreso: 
            p “La parte del ingreso está constituida por los ingresos que perciben el capital, trabajo y gobierno. Los ingresos de los trabajadores (RA) se integran por los sueldos y salarios, además de las contribuciones sociales recibidas de parte de los empleadores. El gobierno por su parte, percibe ingresos fiscales a través de los impuestos indirectos (T), que son impuestos a la producción, compra, venta o uso de bienes y servicios. Debido a que el gobierno realiza también transferencias vía subsidios (S), es necesario obtener los impuestos netos de subsidios para calcular el ingreso neto del gobierno. Finalmente, las empresas perciben utilidades, intereses, regalías, depreciaciones y remuneraciones. Los ingresos de las empresas en general se identifican dentro de un residual denominado Excedente Bruto de Operación (EBO); sin embargo, dicho residual también considera los pagos a la mano de obra no asalariada, por lo cual es un indicador sólo aproximado de los ingresos al capital.” (Pág. 232) 
            p Fórmula para el cálculo del PIB por el ingreso:
            p PIB = RA + (T - S) + EBO
            p El anterior texto señala que los ingresos provienen de 3 fuentes principales: los trabajadores, el gobierno y las empresas. Los trabajadores reciben sueldos, salarios y contribuciones sociales; el gobierno recauda impuestos indirectos, pero también entrega subsidios, por lo que se considera el saldo entre ambos (impuestos netos de subsidios); y las empresas obtienen ingresos como utilidades, intereses regalías y otros, que se agrupan en un concepto llamado excedente bruto de operación (EBO), el cual también incluye remuneraciones a trabajadores no asalariados, por lo que es una estimación aproximada del ingreso del capital.
    
          .div(titulo="Método del producto o del valor agregado")
            p También conocido como el enfoque del valor agregado, este método suma el valor que cada sector o industria añade al proceso productivo. Se calcula restando el valor de los bienes intermedios del valor de la producción total de cada empresa o sector.
            p Fórmula para el cálculo del PIB por el producto:
            p PIB = VBP - CI
            p El “VBP” es el valor de todos los bienes y servicios producidos en la economía y el “CI” es el consumo intermedio involucrado (insumos utilizados en la producción).


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Componentes del PIB: consumo, inversión, gasto público y exportaciones netas

    p.mb-4 Los componentes del Producto Interno Bruto (PIB) permiten entender cómo distintos actores económicos —hogares, empresas, gobierno y sector externo— impulsan la actividad económica a través del gasto.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Componentes del PIB: consumo, inversión, gasto público y exportaciones netas
            p.mb-4(data-aos="fade-right") En el PDF <b>Componentes del PIB</b>, se analizan de forma clara y práctica los elementos que conforman el PIB desde el enfoque del gasto, explicando su función, características y relevancia en el crecimiento económico. Este material facilita la comprensión del comportamiento macroeconómico mediante ejemplos y referencias clave que enriquecen el análisis.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Componentes del PIB: consumo, inversión, gasto público y exportaciones netas.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/11.png', alt='') 
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Importancia del PIB como indicador del crecimiento económico     

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-5.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El Producto Interno Bruto (PIB) como ya se ha dicho, es una de las herramientas más utilizadas para medir el crecimiento económico de un país. Su importancia radica en que permite cuantificar el valor monetario de todos los bienes y servicios producidos en un territorio durante un periodo determinado, generalmente un año o un trimestre. Esta medición proporciona una visión general del desempeño económico nacional, facilitando la comparación entre diferentes periodos y con otras economías a nivel mundial. 
        p(data-aos="fade-left") Un aumento en el PIB indica que una economía está creciendo, lo que generalmente se asocia con una mejora en el empleo, mayores ingresos y un mayor consumo. Por esta razón, el PIB es considerado un referente clave para las decisiones de política económica. 
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto.order-2
            img(src="@/assets/curso/tema1/14.svg", style="max-width: 190px").mx-auto
          .col-lg.order-1
            p.mb-0 Gobiernos, bancos centrales e inversionistas lo utilizan como base para formular políticas fiscales, monetarias y comerciales que buscan fomentar el desarrollo económico y mantener la estabilidad financiera (Eggers, 2018).
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Además, el PIB permite clasificar a los países, según su nivel de desarrollo económico. Las naciones con un PIB elevado suelen ser consideradas economías desarrolladas, mientras que aquellas con un PIB bajo son vistas como economías en vías de desarrollo. Esta clasificación, aunque simplificada, ayuda a identificar brechas económicas y orientar programas de cooperación internacional, inversión extranjera y políticas de desarrollo sostenible.
    
        .bg-color-10.p-5(data-aos="fade-left")
          p.mb-0 Sin embargo, aunque el PIB es un indicador valioso para medir el crecimiento, no lo es necesariamente para evaluar el bienestar de la población. Este indicador no considera factores como la distribución del ingreso, la calidad del medio ambiente o el acceso a servicios básicos. Es decir, una economía puede crecer en términos de PIB, pero al mismo tiempo experimentar aumentos en la desigualdad o deterioro en la calidad de vida, Por ello, se ha planteado la necesidad de complementar el análisis del PIB con otros indicadores sociales y ambientales.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white A pesar de estas limitaciones, el PIB continúa siendo un instrumento fundamental para entender la evolución económica de un país. Su capacidad para resumir en una sola cifra el comportamiento productivo de una economía lo convierte en un parámetro clave en los análisis macroeconómicos. Entender su comportamiento y sus implicaciones es esencial para quienes toman decisiones en ámbitos gubernamentales, empresariales y académicos.
        

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/pib-real.html" target="_blank" rel="noopener noreferrer") Gerencie.com. (2021, agosto 14). PIB real [Entrada de blog].

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/pib-nominal.html" target="_blank" rel="noopener noreferrer") Gerencie.com. (2022, febrero 14). PIB nominal [Entrada de blog].   

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=L9V31xaT_8I " target="_blank" rel="noopener noreferrer") ExplicaMell. (2020, 3 de septiembre). ¿Qué es el Producto Interno Bruto PIB? -Macroeconomía- [Video]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BYXbGkrGd-o" target="_blank" rel="noopener noreferrer") SoloPapelyBoli. (2017, 2 de julio). Diferencias entre PIB y PNB (Producto interior bruto y Producto nacional bruto) [Video]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bQqx9l3lok8 " target="_blank" rel="noopener noreferrer") Gutierrez, H. (2022, 26 de mayo). Los gastos públicos. Tipos y objetivos [Vídeo]. YouTube.  


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
