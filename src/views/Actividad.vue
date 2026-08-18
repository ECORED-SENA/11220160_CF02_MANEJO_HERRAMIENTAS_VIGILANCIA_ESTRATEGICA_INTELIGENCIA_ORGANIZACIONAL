<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'El ciclo operativo de la inteligencia estratégica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> fortalecer las competencias técnicas del aprendiz en la ejecución de búsquedas especializadas, el procesamiento estructurado de datos y la gestión del conocimiento organizacional, permitiéndole transformar hallazgos técnicos en recomendaciones estratégicas que reduzcan la incertidumbre en la toma de decisiones corporativas.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la función principal del operador booleano AND en una ecuación de búsqueda?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Ampliar los resultados agrupando diferentes sinónimos para ampliar el rango de la búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Excluir automáticamente términos considerados irrelevantes para disminuir el ruido de los resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Buscar expresiones exactas dentro de documentos, aunque los términos aparezcan en contextos diferentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Buscar frases exactas dentro de un párrafo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué comando de sintaxis se debe usar para buscar una frase exactamente en el orden ingresado?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Paréntesis ( ).',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comillas (" ").',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Asterisco (*).',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Signo de interrogación (?).',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Al diseñar una ecuación, el uso del asterisco (*) al final de una raíz de palabra (ej. Optimiz*) permite:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Encontrar solo la palabra exacta dentro de la consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar un carácter central para restringir esta consulta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Traducir el término al inglés durante toda la búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Recuperar todas las terminaciones posibles de esa raíz',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la diferencia fundamental entre una bitácora de búsqueda y una ficha de caracterización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La ficha registra el "qué" se encontró, extrayendo metadatos críticos del hallazgo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La bitácora registra el “qué” se encontró y la ficha explica los métodos aplicados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La bitácora se destina a expertos, y la ficha únicamente a analistas principiantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Los instrumentos cumplen una función idéntica, son intercambiables sin diferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'El campo de metadatos "AB" en una base de datos especializada se utiliza para buscar la palabra clave en:',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El título del artículo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El nombre del inventor.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El resumen del documento.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La bibliografía final.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿En qué consiste la técnica de "cruces estratégicos"?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'En listar todos los documentos encontrados en orden alfabético y comparar conceptos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'En triangular datos de diferentes dimensiones (ej. técnica vs. normativa) para descubrir patrones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'En traducir los hallazgos de bases de datos internacionales para ampliar el espectro conceptual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'En eliminar documentos sin autor corporativo ni referencias institucionales consideradas vigentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            'Cuando un experto evalúa si la organización tiene la infraestructura y el talento para implementar un hallazgo, está realizando:',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contextualización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Categorización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Validación experta técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Análisis cuantitativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'El fenómeno de "amnesia corporativa" ocurre principalmente cuando:',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se usa <i>software</i> abierto para organizar la información corporativa empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El conocimiento no se almacena en repositorios organizacionales centralizados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Se realizan demasiadas búsquedas en bases de datos abiertas sin rigor científico ni técnico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La gerencia elimina el presupuesto asignado al proceso integral de vigilancia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué tipo de análisis se fundamenta en métricas bibliométricas y proyecciones de tendencias?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cualitativo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prospectivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Experto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cuantitativo.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: 'El concepto de "Inteligencia Accionable" se refiere a:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Conocimiento sólido que fundamenta una acción corporativa inmediata.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cualquier dato extraído de una base de datos científica sobre las mejores prácticas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un repositorio técnico para consulta de la dirección organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una lista de aprendizajes tomados de proyectos anteriores cerrados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué instrumento transforma el conocimiento tácito (experiencia personal) en conocimiento explícito?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ecuación de búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las lecciones aprendidas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El operador booleano OR.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los metabuscadores.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué indica el Nivel de Madurez Tecnológica (TRL) en una ficha de caracterización?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Si el hallazgo es un concepto, un prototipo o algo listo para comercializar.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El costo de la patente en el mercado, así como el tiempo probado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La cantidad de citas que tiene un artículo científico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El año de vencimiento de la protección legal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es la función del Sistema de Gestión de Documentos Electrónicos de Archivo (SGDEA)?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Salvaguardar y conformar el patrimonio documental digital de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El costo de la patente en el mercado y su posible valor de comercialización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El número de las citas de los artículo y su reconocimiento en el ámbito científico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Filtrar correos electrónicos personales de los empleados y el vencimiento del registro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'En el ciclo de vida del documento, la fase de "Disposición final" determina:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El formato en que nace el documento y demás fuentes de consulta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Si el documento se elimina o se conserva permanentemente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Quién es el autor del informe de inteligencia para acceso remoto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La clave de acceso al repositorio institucional para consulta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué producto de inteligencia es un resumen periódico dirigido a mandos medios sobre tendencias?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Informe Estratégico. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ficha de Registro de Proyecto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuadro de Mando Visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Boletín de Inteligencia (<i>Newsletter</i>).',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Caso: El equipo de Central Ferretera necesita investigar la seguridad en WooCommerce. Diseñan la ecuación: WordPress AND WooCommerce AND security. Al ejecutarla, obtienen 50.000 resultados, muchos de ellos blogs de opinión. ¿Qué ajuste técnico es más efectivo para elevar la precisión científica del hallazgo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aplicar filtros de metadatos para que los términos aparezcan solo en el Título (TI) o Resumen (AB).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Cambiar el operador AND por OR para recuperar más resultados generales y ampliar el volumen global.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Eliminar la palabra WordPress de la ecuación para concentrar la búsqueda únicamente en WooCommerce.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Usar un buscador comercial en lugar de bases especializadas para recuperar datos de acceso público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Caso: Una empresa de empaques descubre una patente de un biopolímero altamente resistente (vigilancia tecnológica). El mercado demanda empaques sostenibles (vigilancia comercial). Sin embargo, el analista detecta una nueva norma europea que exige una certificación de compostabilidad que este material no tiene. ¿Cuál es la conclusión lógica de este cruce estratégico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La viabilidad del proyecto es nula para ese mercado debido al riesgo normativo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La tecnología debe implementarse de inmediato por su alta resistencia e innovación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se debe ignorar la normativa europea y enfocarse solo en la tecnología.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El mercado comprará el producto aunque no cumpla la norma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Caso: Se identifica que el mejor <i>software</i> de logística del mundo requiere conexión 5G constante. La empresa opera en zonas rurales de Colombia con cobertura limitada. Desde la validación de información, ¿qué debe decidir el analista?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprar el <i>software</i> porque es el mejor calificado globalmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Esperar a que el gobierno instale 5G en todo el país antes de decidir.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Pedir al experto técnico que reprograme el <i>software</i> para que funcione sin internet.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Descartar el hallazgo por falta de contexto de aplicabilidad local.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Caso: Un analista de inteligencia experto renuncia repentinamente. El nuevo analista no encuentra información sobre por qué se eligió un proveedor específico hace un año. ¿Qué falla institucional se evidencia en este escenario?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Falta de una política de lecciones aprendidas y almacenamiento en repositorios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El analista anterior no era un experto calificado y debió realizar empalmes con nuevos funcionarios.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La empresa no utilizaba operadores booleanos en sus búsquedas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El nuevo analista no tiene suficiente experiencia en vigilancia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Caso: Un informe de vigilancia muestra que el registro de patentes de una tecnología de motores ha caído un 40% en tres años (análisis cuantitativo). El análisis cualitativo indica que las nuevas leyes favorecen los motores eléctricos. ¿Qué recomendación estratégica debería emitir el analista?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Invertir masivamente en la tecnología de motores tradicional porque hay menos competencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'No emitir ninguna recomendación hasta que las patentes lleguen a cero.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Advertir que la inversión en esa tecnología representa un riesgo financiero por su obsolescencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Sugerir que los datos cuantitativos no son confiables en tecnología.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
