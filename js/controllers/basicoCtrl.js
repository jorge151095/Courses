app.factory('datos', function() {
  return {
    data: {}
  };
});

app.controller("basicoCtrl",["$scope","$location","$anchorScroll","$sce","datos",function($scope,$location,$anchorScroll,$sce,datos) {
  $anchorScroll();
  $scope.ir = function(tema){
    datos.data = tema;
    $location.path('/temaBasico').replace();
  };

  $scope.sigTema = function(){
    $scope.tema = $scope.temas[$scope.tema.id+1];
    $anchorScroll();
    $location.path('/temaBasico').replace();
  };
  $scope.antTema = function(){
    $scope.tema = $scope.temas[$scope.tema.id-1];
    $anchorScroll();
    $location.path('/temaBasico').replace();
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
        'titulo':"¿Qué hay que proteger? ",
        'descripcion': "Introducción a la seguridad informática, sus amenazas y las medidas de seguridad indispensables.",
        'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=gQrBlLZqMt0"),
        'contenido': "Es evidente la necesidad de proteger la información.<br>Pero es muy difícil concretar qué es lo que hay que proteger, dado que el concepto de información es, en sí mismo, poco claro.",
        'subtemas':[
            {
              'subtitulo': "¿Qué es la seguridad informática? ",
              'subcontenido':"Seguridad: Característica de cualquier sistema (informático o no) que nos indica que ese sistema está libre de todo peligro, daño o riesgo.<br>Información: Todo mensaje (conjunto de datos) que al receptor le interese, le entienda o lo ignore antes de recibirlo.<br>Seguridad Informática: El conjunto de normas, mecanismos, herramientas, procedimientos y recursos orientados a brindar protección a la información resguardando sus 		disponibilidad, integridad y confidencialidad.<br>"
            },
            {
              'subtitulo': "Principales amenazas de seguridad informática.",
              'subcontenido':"<ul><li>Virus</li><li>Spam</li><li>Phishing</li><li>Ransomware</li><li>Keyloggers</li><li>Spyware</li></ul>"
            },
            {
              'subtitulo': "Medidas indispensables para tu seguridad informática",
              'subcontenido':"<ul><li>Contraseñas.</li><li>Verificación en dos pasos.</li><li>Configura la seguridad de tu router.</li><li>Sistema operativo actualizado.</li><li>Antivirus instalado.</li><li>Revisa la privacidad en Redes Sociales.</li><li>Compras online en plataformas seguras.</li></ul>"
            }
        ],
        'relacionados':[
          {'url': "Seguridad Informática Conceptos generales.<br>Luis Alonso Romero<br>Catedrático de Ciencia de la Computación e Inteligencia Artificial.<br>Universidad de Salamanca"},
          {'url': "<a href='http://www.blog.andaluciaesdigital.es/guia-de-seguridad-informatica/#Principales_amenazas_de_seguridad_informatica'>Principales amenazas de seguridad informatica</a>"},
          {'url': "<a href='http://www.blog.andaluciaesdigital.es/guia-de-seguridad-informatica/#8_medidas_indispensables_para_tu_seguridad_informatica'>8 medidas indispensables para tu seguridad informática</a>"}
        ]
    },
    {
      'id':1,
        'titulo':"Conceptos de seguridad informática. ",
        'descripcion': "Nos será primero de suma utilidad saber precisamente a qué nos estamos refiriendo con seguridad.",
        'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=4RLCzcPPXYs"),
        'contenido': "Desde hace poco más de dos décadas, muchas personas han creado sus propias significaciones para explicar la idea del tema, intentando ser lo más acertadas posible.<br><center>LA SEGURIDAD TIENE ACEPCIONES DEPENDIENDO DEL CONTEXTO PARTICULAR DE USO</center><br>",
        'subtemas':[
            {
              'subtitulo': "Defensa en profundidad",
              'subcontenido':"Trata de coordinar las acciones que contengan los atentados contra la seguridad, al menor costo, mediante la gestión de los riesgos, un sistema de informes, la planificación de las reacciones y la mejora continua gracias a la experiencia adquirida"
            },
            {
              'subtitulo': "Seguridad de la información",
              'subcontenido':"Disciplina que tiene por objeto preservar la confidencialidad, integridad y disponibilidad de la información"
            },
            {
              'subtitulo': "Principios de seguridad ",
              'subcontenido':"<ul><li>Principio de menor privilegio.</li><li>Seguridad no equivale a oscuridad.</li><li>Principio del eslabón más débil.</li><li>Defensa en profundidad.</li><li>Punto de control centralizado.</li><li>Seguridad en caso de fallo</li><li>Participación universal</li><li>Principio de simplicidad</li></ul>"
            }
        ],
        'relacionados':[
          {'url': "Seguridad Informática Conceptos generales.<br>Luis Alonso Romero<br>Catedrático de Ciencia de la Computación e Inteligencia Artificial.<br>Universidad de Salamanca"},
          {'url': "Ethical Hacking 2.0<br>Implementación de un sistema para la gestión de la seguridad<br>Héctor Jara y Federico G. Pacheco"}
        ]
    },
    {
      'id':2,
      'titulo':"Criterios o servicios de seguridad.",
      'descripcion': "El ITSEC (Information Technology Security Evaluation Criteria) define los siguientes criterios de seguridad.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=3Rg-n6UuF7w"),
      'contenido': "El ITSEC (Information Technology Security Evaluation Criteria) define los siguientes criterios de seguridad:",
      'subtemas':[
          {
            'subtitulo': "Secreto o confidencialidad.",
            'subcontenido':"La información debe estar disponible solamente para aquellos usuarios autorizados a usarla."
          },
          {
            'subtitulo': "Integridad.",
            'subcontenido':"La información no se puede falsear."
          },
          {
            'subtitulo': "Accesibilidad o disponibilidad.",
            'subcontenido':"¿Quién y cuándo puede acceder a la información?"
          },
          {
            'subtitulo': "Autenticidad.",
            'subcontenido':"Asegurar el origen y el destino de la información."
          },
          {
            'subtitulo': "No repudio.",
            'subcontenido':"Cualquier entidad que envía o recibe datos no puede alegar desconocer el hecho."
          },
          {
            'subtitulo': "Consistencia.",
            'subcontenido':"Asegurar que el sistema se comporta como se supone."
          },
          {
            'subtitulo': "Aislamiento.",
            'subcontenido':"Impedir que personas no autorizadas entren en el sistema."
          },
          {
            'subtitulo': "Auditoría.",
            'subcontenido':"Capacidad de determinar qué acciones o procesos se han llevado a cabo en el sistema."
          },
          {
            'subtitulo': "Prevención.",
            'subcontenido':"Los usuarios deben saber que sus actividades quedan registradas."
          },
          {
            'subtitulo': "Información.",
            'subcontenido':"Posibilidad de detectar comportamientos sospechosos."
          }
      ],
      'relacionados':[
        {'url': "Seguridad Informática Conceptos generales.<br>Luis Alonso Romero<br>Catedrático de Ciencia de la Computación e Inteligencia Artificial.<br>Universidad de Salamanca"}
      ]
    },
    {
      'id':3,
      'titulo':"Seguridad en internet ",
      'descripcion': "Para pensar en una navegación segura, lo primero por tener en cuenta es el cuidado de la información personal del propio usuario.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=kUeppDBSehY"),
      'contenido': "Para pensar en una navegación segura, lo primero por tener en cuenta es el cuidado de la información personal del propio usuario. Con el fin de no ser blanco de ningún tipo de ataque,hay que ser lo más anónimo posible.",
      'subtemas':[
          {
            'subtitulo': "Los navegadores.",
            'subcontenido':"Desde todo tipo de dispositivos (ordenadores, tabletas y smartphones) accedemos a la red en busca de información, entretenimiento y otros servicios.<br>Para ello, la herramienta fundamental es el navegador."
          },
          {
            'subtitulo': "Privacidad en navegadores web.",
            'subcontenido':"Los navegadores incorporan muchas funciones para hacernos la vida más fácil. Sin embargo, en ocasiones esto puede suponer un verdadero riesgo para nuestra privacidad.<br>Para limitar los riesgos de privacidad, podemos utilizar las pestañas de navegación privada que existen en los principales navegadores."
          },
          {
            'subtitulo': "Cortafuegos (Firewall)",
            'subcontenido':"El firewall (también llamado en castellano cortafuegos) establece una barrera entre el equipo e Internet.<br>Impide que exista un tráfico de datos desde nuestro equipo y hacia él, si el usuario no lo ha pedido explícitamente. "
          }
      ],
      'relacionados':[
        {'url': "Seguridad PC desde Cero<br>Alexis Buergos"},
        {'url': "<a href='https://www.osi.es/es/navegadores'>Navegadores</a>"}
      ]
    },
    {
      'id':4,
      'titulo':"Virus vs Antivirus",
      'descripcion': "Los virus son la más antigua de las amenazas informáticas.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/watch?v=ZwTt-QkbH68&t"),
      'contenido': "Un virus es un programa que puede reproducirse en forma automática haciendo copias de sí mismo.",
      'subtemas':[
          {
            'subtitulo': "El virus en acción.",
            'subcontenido':"Los virus son aplicaciones informáticas programadas por usuarios especializados que tienen algún interés particular, por la cual los clasificaremos en dos grandes grupos: residentes y no residentes.<br><ul><li>Virus no residentes.</li><li>Virus residentes.</li></ul>"
          },
          {
            'subtitulo': "La prevención – Antivirus.",
            'subcontenido':"Las fallas de seguridad inherentes al modo de funcionamiento de Windows pueden solucionarse instalando actualizaciones de seguridad."
          }
      ],
      'relacionados':[
        {'url': "Seguridad PC desde Cero<br>Alexis Buergos"}
      ]
    }
  ];


}]);
