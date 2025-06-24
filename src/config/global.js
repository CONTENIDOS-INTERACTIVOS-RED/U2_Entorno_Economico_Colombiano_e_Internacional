export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Variables y agregados económicos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producto Interno Bruto (PIB) ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Definición, tipos de PIB y métodos de cálculo     ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Componentes del PIB: consumo, inversión, gasto público y exportaciones netas',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Importancia del PIB como indicador del crecimiento económico     ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Inflación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Concepto y causas de la inflación: demanda, costos y expectativas ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de inflación: moderada, galopante e hiperinflación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Consecuencias de la inflación sobre la economía y la población',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desempleo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición y tipos de desempleo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Causas del desempleo y su relación en el ciclo económico',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Política económica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Política fiscal: ingresos, gastos y déficit público',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Política monetaria: control de la oferta monetaria e instrumentos del banco central',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Tasa de interés y tasa de cambio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo:
              'Definición, tipos y función de la tasa de interés en la economía',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Factores que influyen en la determinación de la tasa de cambio',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Organismos económicos internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Fondo Monetario Internacional y el Banco Mundial',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo:
              'Organización Mundial del Comercio (OMC) y su rol en la regulación del comercio internacional',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Acuerdos de libre comercio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Concepto y objetivos de los acuerdos de libre comercio',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo:
              'Principales acuerdos firmados por Colombia y sus complicaciones económicas',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo:
              'Ventajas y desventajas del libre comercio en el contexto colombiano ',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo:
          'Impacto de los acuerdos de libre comercio en la economía colombiana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '8.1',
            titulo: 'Principales TLC firmados por Colombia',
            hash: 't_8_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.2',
            titulo:
              'Efectos positivos del libre comercio: inversión y exportaciones',
            hash: 't_8_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '8.3',
            titulo:
              'Efectos negativos: competencia externa y sectores vulnerables',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Hernández Pérez, A. & Hernández Pérez, A. (2014). Economía: ( ed.). Editorial Digital UNID.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/41178?page=1',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39385?page=1',
    },
    {
      referencia:
        'Eggers, F. G. (2018). Economía: (ed.). Ituzaingó, Editorial Maipue. Recuperado de  ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/145751?page=94.',
    },
    {
      referencia:
        'Eggers, F. G. (2018). Economía: (ed.). Ituzaingó, Editorial Maipue. Recuperado de  ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/145751?page=94.',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria.   ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39385?page=1 ',
    },
    {
      referencia:
        'Eggers, F. G. (2018). Economía: (ed.). Ituzaingó, Editorial Maipue. Recuperado de ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/145751?page=94. ',
    },
    {
      referencia:
        'Burneo, K. (2016). Principios de economía: versión latinoamericana: (2 ed.). Ecoe Ediciones.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70446?page=1',
    },
    {
      referencia:
        'Burneo, K. (2016). Principios de economía: versión latinoamericana: (2 ed.). Ecoe Ediciones.   ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70446?page=1 ',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Fundamentos de economía: ( ed.). Grupo Editorial Patria.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39385?page=1',
    },
    {
      referencia:
        'Eggers, F. G. (2018). Economía: (ed.). Ituzaingó, Editorial Maipue. Recuperado de   ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/145751?page=94.',
    },
    {
      referencia:
        'Eggers, F. G. (2018). Economía: (ed.). Ituzaingó, Editorial Maipue. Recuperado de   ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/145751?page=94.',
    },
    {
      referencia:
        'Hernández Pérez, A. & Hernández Pérez, A. (2014). Economía: ( ed.). Editorial Digital UNID.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/41178?page=1',
    },
    {
      referencia:
        'Eggers, F. G. (2018). Economía: (ed.). Ituzaingó, Editorial Maipue. Recuperado de   ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/145751?page=94.',
    },
    {
      referencia:
        'Cue Mancera, A. (2015). Economía internacional: ( ed.). Grupo Editorial Patria.  ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/39382?page=1',
    },
    {
      referencia:
        'Vieira Posada, E. (Il.). (2014). El TLC Colombia Estados Unidos: una nueva relación para el siglo XXI: (1 ed.). Colegio de Estudios Superiores de Administración - CESA.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222450',
    },
    {
      referencia:
        'Vieira Posada, E. (Il.). (2014). El TLC Colombia Canadá: nuevo escenario para el comercio y la inversión: (1 ed.). Colegio de Estudios Superiores de Administración - CESA.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/222446',
    },
    {
      referencia:
        'López Montaño, C. (2009). ¿Cómo se negocia un TLC en Colombia?: (ed.). Red Colombia internacional.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/26691',
    },
    {
      referencia:
        ' Gómez Lee, M. I. (2009). Amenazas del TLC a la biodiversidad andina: (ed.). Red Oasis.   ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/22867',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdos de libre comercio',
      significado:
        'tratados entre dos o más países que buscan facilitar el intercambio de bienes y servicios mediante la reducción o eliminación de aranceles y otras barreras comerciales.',
    },
    {
      termino: 'Desempleo',
      significado:
        'situación en la que personas en edad y disposición de trabajar no encuentran empleo. Puede clasificarse como friccional, estructural o cíclico, dependiendo de su causa.',
    },
    {
      termino: 'Fondo Monetario Internacional (FMI)',
      significado:
        'organismo internacional que proporciona asistencia financiera y asesoramiento económico a los países miembros con el fin de estabilizar sus economías y promover el crecimiento.',
    },
    {
      termino: 'Inflación',
      significado:
        'aumento sostenido y generalizado del nivel de precios de bienes y servicios en una economía durante un periodo determinado, que reduce el poder adquisitivo de la moneda.',
    },
    {
      termino: 'Organización Mundial del Comercio (OMC)',
      significado:
        'institución internacional encargada de regular las normas del comercio entre países y de facilitar la solución de controversias comerciales.',
    },
    {
      termino: 'PIB (Producto Interno Bruto)',
      significado:
        'valor monetario total de todos los bienes y servicios finales producidos en un país durante un periodo determinado, utilizado como indicador del crecimiento económico.',
    },
    {
      termino: 'Política económica',
      significado:
        'conjunto de estrategias aplicadas por el gobierno para influir en el comportamiento de la economía, mediante instrumentos fiscales, monetarios y comerciales.',
    },
    {
      termino: 'Política fiscal',
      significado:
        'herramienta de la política económica que utiliza los ingresos (impuestos) y los gastos públicos para influir en la actividad económica de un país.',
    },
    {
      termino: 'Política monetaria',
      significado:
        'estrategia del banco central para controlar la oferta monetaria y las tasas de interés, con el objetivo de mantener la estabilidad económica y controlar la inflación.',
    },
    {
      termino: 'Tasa de cambio',
      significado:
        'precio de una moneda en términos de otra. Influye en el comercio exterior, la inversión internacional y el nivel de precios internos.',
    },
  ],
}
