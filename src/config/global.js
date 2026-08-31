export default {
  global: {
    Name: 'Ejecución, análisis y gestión de la información estratégica',
    Description:
      'Este componente formativo fortalece las competencias técnicas del aprendiz para ejecutar procesos de vigilancia estratégica. Aborda la formulación de ecuaciones de búsqueda, el procesamiento de datos y la validación especializada de la información. Su propósito es transformar hallazgos en inteligencia organizacional y formular recomendaciones que respalden la gestión del conocimiento y la toma de decisiones gerenciales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Ejecución de búsquedas y recuperación de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Diseño de ecuaciones de búsqueda: traducción de conceptos técnicos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Operadores booleanos, comandos de truncamiento y uso de comillas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Transición de búsquedas generales a búsquedas especializadas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Aplicación de criterios estrictos de filtrado de información',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Procesamiento, validación y almacenamiento de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Procesamiento de la información: cruces estratégicos y fichas de caracterización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Validación de información: categorización, contextualización y análisis experto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Almacenamiento de la información: repositorios y gestión documental',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Fundamentos de la Gestión documental y el ciclo de vida de la información',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis, gestión del conocimiento y toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Transformación de resultados técnicos en información estratégica',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Gestión del conocimiento organizacional: lecciones aprendidas y difusión de resultados',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Generación de recomendaciones estratégicas para la toma de decisiones',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Caso de uso aplicado: <i>E-commerce</i> Central Ferretera',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/11220160_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Amnesia corporativa',
      significado:
        'fenómeno de pérdida de activos intangibles y conocimiento que ocurre cuando la información no se almacena en repositorios centrales o se pierde tras la rotación del personal.',
    },
    {
      termino: 'Análisis cualitativo',
      significado:
        'enfoque centrado en interpretar el porqué y el cómo de los cambios, utilizando herramientas de prospectiva como el Análisis de Escenarios o el Método Delphi.',
    },
    {
      termino: 'Análisis cuantitativo',
      significado:
        'método basado en la medición estadística y minería de datos que permite, por ejemplo, calcular la tasa de crecimiento de una tecnología mediante indicadores bibliométricos.',
    },
    {
      termino: 'Cruces estratégicos',
      significado:
        'técnica analítica que consiste en triangular datos de diferentes dimensiones (tecnológica, normativa y de mercado) para descubrir patrones, riesgos latentes u oportunidades.',
    },
    {
      termino: 'Ecuación de búsqueda',
      significado:
        'cadena lógica de caracteres que instruye a una base de datos sobre exactamente qué términos buscar, en qué campos y bajo qué relación jerárquica.',
    },
    {
      termino: 'Falsos positivos',
      significado:
        'resultados irrelevantes que arroja una búsqueda cuando se realiza de manera generalista (ej. en todo el texto completo) en lugar de usar campos específicos como título o resumen.',
    },
    {
      termino: 'Ficha de caracterización',
      significado:
        'instrumento metodológico que registra el "qué" se encontró, extrayendo metadatos críticos de cada hallazgo para su posterior normalización.',
    },
    {
      termino: 'Gestión documental',
      significado:
        'conjunto de actividades técnicas y administrativas orientadas a la planificación, manejo y organización de la documentación desde su origen hasta su destino final.',
    },
    {
      termino: 'Inteligencia accionable',
      significado:
        'conocimiento analíticamente sólido, específico y pertinente que permite fundamentar una acción corporativa inmediata.',
    },
    {
      termino: 'Lecciones aprendidas',
      significado:
        'instrumento que registra de manera crítica las estrategias que funcionaron o fallaron, transformando el conocimiento tácito en explícito.',
    },
    {
      termino: 'Metadatos',
      significado:
        'datos estructurados que describen el contenido de un documento (como TI - Título o AB - Resumen) y facilitan su filtrado y recuperación.',
    },
    {
      termino: 'Operadores booleanos',
      significado:
        'conectores lógicos (AND, OR, NOT) que permiten reducir, ampliar o excluir términos en una búsqueda basándose en la teoría de conjuntos.',
    },
    {
      termino: 'Repositorios organizacionales',
      significado:
        'sistemas de información centralizados donde se almacena el conocimiento depurado y validado bajo una taxonomía corporativa estandarizada.',
    },
    {
      termino: 'TRL (Nivel de Madurez)',
      significado:
        'indicador (<i>Technology Readiness Level</i>) que señala si un hallazgo técnico es una idea conceptual, un prototipo o una tecnología lista para el mercado.',
    },
    {
      termino: 'Truncamiento (o comodines)',
      significado:
        'comandos de sintaxis (como * o ?) que permiten recuperar todas las variaciones y terminaciones posibles de la raíz de una palabra.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cubillo, J. (1999). Cambio y continuidad en las organizaciones de gestión del conocimiento. CEPAL Repositorio digital de Naviones Unidas. Obtenido de ',
      link: 'https://repositorio.cepal.org/entities/publication/6c0e22b2-05fa-4e55-8863-2eb1a729bf0b ',
    },
    {
      referencia:
        'Malaver Rodríguez, F., & Vargas Pérez, M. (2007). Vigilancia tecnológica y competitividad sectorial: lecciones y resultados de cinco estudios. Bogotá: Pontificia Universidad Javeriana. doi:ISBN: 978-958-44-1156-3 ',
      link: '',
    },
    {
      referencia:
        'Naciones Unidas. (2021). Repositorio digital CEPAL. (t. y. Repositorio Digital: Innovación, Editor) Obtenido de omisión Económica para América Latina y el Caribe [CEPAL].: ',
      link: 'https://repositorio.cepal.org ',
    },
    {
      referencia:
        'OMPI. (2022). Organización Mundial de la Propiedad Intelectual [OMPI]. Obtenido de PATENTSCOPE y la búsqueda de información tecnológica para el análisis cuantitativo.: ',
      link: 'https://www.wipo.int/patentscope/es/ ',
    },
    {
      referencia:
        'Relacion entre teoria de conjuntos logica matematica y algebra booleana. (2005). Obtenido de Diaonia.com: ',
      link: 'https://diaonia.com/relacion-entre-teoria-de-conjuntos-logica-matematica-y-algebra-booleana/ ',
    },
    {
      referencia:
        'SENA. (2020). Instructivo metodológico vigilancia e inteligencia organizacional. Obtenido de Compromiso SENA. Dirección de planeación y direccionamiento corporativo: ',
      link: 'https://compromiso.sena.edu.co/mapa/descarga.php?id=2927 ',
    },
    {
      referencia:
        'SENA. (2024). Proceso Gestión Documental. Sistema Integrado de Gestión y Autocontrol, Bogotá. Obtenido de ',
      link: 'https://www.sena.edu.co/es-co/transparencia/Documents/programa_gestion_documental_v03.pdf ',
    },
    {
      referencia:
        'SENA. (2026). Sistema de prospectiva, vigilancia e inteligencia organizacional [PREVIOS]. Obtenido de ',
      link: 'http://senaprevios.com/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del ecosistema virtual de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
