app.factory('datos', function() {
  return {
    data: {}
  };
});

app.controller("avanzadoCtrl",["$scope","$location","$anchorScroll","$sce","datos",function($scope,$location,$anchorScroll,$sce,datos) {
  $anchorScroll();
  $scope.ir = function(tema){
    datos.data = tema;
    $location.path('/temaAvanzado').replace();
  };

  $scope.sigTema = function(){
    $scope.tema = $scope.temas[$scope.tema.id+1];
    $anchorScroll();
    $location.path('/temaAvanzado').replace();
  };
  $scope.antTema = function(){
    $scope.tema = $scope.temas[$scope.tema.id-1];
    $anchorScroll();
    $location.path('/temaAvanzado').replace();
  };

  $scope.isNext = function(){
    if ( ($scope.tema.id+1) < $scope.temas.length) {
      return true;
    }
    return false;
  };

  $scope.isPrevious = function(){
    if ($scope.tema.id <= 0) {
      return false;
    }
    return true;
  };

  $scope.tema = datos.data;
  $scope.temas = [
    {
        'id':0,
        'titulo':"Ingeniería social.",
        'descripcion': "La  mayoría  de  las  personas  tienen  la  idea  errónea  de que  los  ciberatacantes.",
        'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
        'contenido': "La mayoría de las personas tienen la idea errónea de que los ciberatacantes utilizan herramientas altamente avanzadas y técnicas para comprometer las computadoras o cuentas de los usuarios.<br>Esto no es cierto.<br>",
        'subtemas':[
            {
              'subtitulo': "¿Qué es la ingeniería social?.",
              'subcontenido':"La ingeniería social es un ataque psicológico a través del cual el delincuente te engaña para realizar algo que no deberías hacer.<br>"
            },
            {
              'subtitulo': "Detectar y detener ataques de ingeniería social.",
              'subcontenido':"Las pistas más comunes son:<br><ul><li>Alguien crea un tremendo sentido de urgencia, tratando de engañarte para que cometas un error.</li><li>Alguien te pregunta por información a la cual no deberían tener acceso o que ya debería saber.</li><li>Alguien te solicita tu contraseña.</li><li>Alguien te presiona para que evadas o ignores los procedimientos de seguridad.</li></ul>."
            },
            {
              'subtitulo': "Phishing.",
              'subcontenido':"El phishing es una técnica de ingeniería social utilizada por los delincuentes para obtener información confidencial como nombres de usuario, contraseñas y detalles de tarjetas de crédito haciéndose pasar por una comunicación confiable y legítima."
            },
            {
              'subtitulo': "Baiting.",
              'subcontenido':"Generalmente se utilizan pendrives con software malicioso, los que dejan en el escritorio de la víctima o en el camino que la misma realice.<br>Cuando la víctima encuentre dicho dispositivo y lo introduzca en su ordenador, el software se instalará y permitirá que el hacker obtenga todos los datos personales del usuario."
            },
            {
              'subtitulo': "Vishing.",
              'subcontenido':"Los cibercriminales utilizan un sistema de mensajes pregrabados o una persona que llama para solicitar, en muchos casos, información financiera personal."
            }
        ],
        'relacionados':[
          {'url': "<a href='https://securingthehuman.sans.org/newsletters/ouch/issues/OUCH-201701_sp.pdf'>OUCH!|Enero 2017</a>"},
          {'url': "<a href='http://www.segu-info.com.ar/malware/phishing.htm'>Phishing</a>"},
          {'url': "<a href='http://www.redusers.com/noticias/ingenieria-social-cuales-son-los-tipos-de-ataque/'>Baiting</a>"},
          {'url': "<a href='https://ingenieriasocialsigloxxi.wordpress.com/2009/11/03/vishing/'>Vishing</a>"}
        ]
    },
    {
      'id':1,
        'titulo':"Sistemas operativos.",
        'descripcion': "Los sistemas operativos representan un alto valor, tanto para las organizaciones como para sus posibles atacantes.",
        'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
        'contenido': "En al actualidad, existen varios tipos de sistemas operativos, para diferentes propósitos, aunque podemos afirmar que la mayoría de las instalaciones de empresas pertenecen a dos grupos: Windows y Linux.<br>",
        'subtemas':[
            {
              'subtitulo': "Windows V.S Linux.",
              'subcontenido':"Un tema que se viene discutiendo hace años y que incluso llego a conocerse como la guerra santa del mundo informático.<br>Nos referimos a la rivalidad de los sistemas operativos de Microsoft, que son los mas utilizados en el mundo, y los UNIX, que se dicen que son los mas seguros."
            },
            {
              'subtitulo': "Consejos para sistemas Windows.",
              'subcontenido':"Este tipo de sistemas suele ser fácil de utilizar, pero no debejos dejar que esto nos lleve a subestimarlos.<br>En sus últimas versiones podemos apreciar que existe una gran cantidad de herramientas destinadas a aumentar la seguridad, muchas incluidas en la instalacion por defecto y otras que pueden descargarse desde el sitio web del fabricante."
            },
            {
              'subtitulo': "Consejos para sistemas UNIX",
              'subcontenido':"Estos sistemas cuentan con una gran reputación en lo que seguridad refiere.<br>Pero debemos tener en cuenta que la gran cantidad de ditribuciones UNIX que exiten hace que cada una se enfoque en distintos objetivos, por lo que no todas pueden poner tanto énfasis en la seguridad."
            }
        ],
        'relacionados':[
          {'url': "Seguridad Informatica por Fabian Portantier<br>Aprenda como implementar soluciones desde la vision del experto.<br>RedUsers."}
        ]
    },
    {
      'id':2,
      'titulo':"Fraude Electrónico.",
      'descripcion': "Lamentablemente, como todas las áreas de rápido crecimiento y pronunciado interés en la población en general, estamos propensos a ataques por parte de maleantes.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "Entre la principal información que buscan los maleantes se encuentran los números de tarjeta de crédito.<br>En segundo lugar, los maleantes buscan hacerse de la información que da acceso a los sistemas de banca electrónica.",
      'subtemas':[
          {
            'subtitulo': "Transferencias monetarias",
            'subcontenido':"El realizar tus compras por Internet puede llevarse a cabo de la manera estándar, sin embargo existe la posibilidad de hacer uso de los conocidos como Servicios de pago a terceros.<br>Estas empresas sirven de intermediario brindando varios servicios como son la transferencia de dinero entre cuentas, compras en línea, pago en subastas y donaciones altruistas."
          },
          {
            'subtitulo': "Pharming.",
            'subcontenido':"Suponga que un día como cualquier otro que se dispone a pagar una cuenta, usted teclea la dirección URL de su banco, y es direccionado a un sitio con una apariencia idéntica, pero en realidad es la página que un usurpador ha clonado para obtener su información."
          }
      ],
      'relacionados':[
        {'url': "DGTIC - REVISTA SEGURIDAD"}
      ]
    },
    {
      'id':3,
      'titulo':"La privacidad y datos personales.",
      'descripcion': "Para pensar en una navegación segura, lo primero por tener en cuenta es el cuidado de la información personal del propio usuario.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "La primera regla, y tal vez la más importante de todas, es dar información personal solo en aquellos casos donde esta entrega se justifique.<br>Los sitios más confiables tienen complicados sistemas de recupero de contraseñas.<br>Por último,es importante recordar que las computadoras de uso público son aquellas en las que hay que tener mayor cuidado.",
      'subtemas':[
          {
            'subtitulo': "Encriptación.",
            'subcontenido':"Al momento de cerrar una transacción electrónica y de brindar información crítica,como números de tarjeta de crédito o débito,es fundamental asegurarse de que el sitio con el que estamos tratando utilice la tecnología Secure Socket Layer o Secure Electronic Transaction.<br>Para saber si un sitio cuenta o no con estas tecnologías,existen dos indicadores visuales en la pantalla:<br><ul><li>Icono de un candado en la barra de estado del navegador</li><li>Encabezado https en la dirección del sitio web </li></ul>"
          },
          {
            'subtitulo': "¿Qué es una cookie? .",
            'subcontenido':"Una cookie es un archivo que los sitios web pueden crear en el equipo del visitante para guardar información personal que el usuario haya decidido compartir así como también datos sobre qué hizo en el sitio,qué links visitó,configuraciones personales y otra información.<br>Sin embargo, los sitios pueden utilizar la información recolectada en las cookies con fines comerciales o de otro tipo no deseados por el usuario."
          }
      ],
      'relacionados':[
        {'url': "Seguridad PC desde Cero<br>Alexis Buergos"}
      ]
    },
    {
      'id':4,
      'titulo':"Gestión de la seguridad.",
      'descripcion': "La gestion de la seguridad es un proceso amplio, que incluye tareas de distinta indole.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "La gestion de la seguridad es un proceso amplio, que incluye muchisimas tareas de distinta indole, como la dministracion de riesgos, el matenimiento de politicas, la clasificacion de la informacion y la capcitacion de lo mienmbros de la organizacion.",
      'subtemas':[
          {
            'subtitulo': "El autoconocimiento.",
            'subcontenido':"Antes de pensar siquiera en implementar medidas de seguridad, debemos tomar acciones para conocer a fondo nuestra infraestructura tecnológica."
          },
          {
            'subtitulo': "Amenazas y vulnerabilidades.",
            'subcontenido':"Cuando hablamos de gestión de seguridad, es muy frecuente el uso de ciertos términos:<br><ul><li>Vulnerabilidad.</li><li>Amenaza.</li><li>Exposición.</li><li>Riesgo.</li><li>Contramedida.</li></ul>"
          },
          {
            'subtitulo': "Implementación de controles.",
            'subcontenido':"Una ves identificados los riegos, debemos hacer algo con ellos:<br><ul><li>Mitigar.</li><li>Transferir.</li><li>Evadir.</li><li>Aceptar.</li></ul>"
          }
      ],
      'relacionados':[
        {'url': "Seguridad Informatica por Fabian Portantier<br>Aprenda como implementar soluciones desde la vision del experto.<br>RedUsers."}
      ]
    }
  ];


}]);
