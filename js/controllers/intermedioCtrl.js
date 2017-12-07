app.factory('datos', function() {
  return {
    data: {}
  };
});

app.controller("intermedioCtrl",["$scope","$location","$anchorScroll","$sce","datos",function($scope,$location,$anchorScroll,$sce,datos) {
  $anchorScroll();
  $scope.ir = function(tema){
    datos.data = tema;
    $location.path('/temaIntermedio').replace();
  };

  $scope.sigTema = function(){
    $scope.tema = $scope.temas[$scope.tema.id+1];
    $anchorScroll();
    $location.path('/temaIntermedio').replace();
  };
  $scope.antTema = function(){
    $scope.tema = $scope.temas[$scope.tema.id-1];
    $anchorScroll();
    $location.path('/temaIntermedio').replace();
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
        'titulo':"Las buenas prácticas que no siempre se cumplen.",
        'descripcion': "Es sabido que seguir metodologías y buenas prácticas respecto de la seguridad da buenos resultados.",
        'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
        'contenido': "Es sabido que seguir metodologías y buenas prácticas respecto de la seguridad da buenos resultados.<br>Sin embargo, también es una realidad que éstas no siempre se cumplen en las organizaciones.<br>A continuación, daremos un vistazo a vuelo de pájaro por algunas de las buenas prácticas,que ofrecen como valor agregado la posibilidad de reducir naturalmente la superficie de ataque en los sistemas.<br>",
        'subtemas':[
            {
              'subtitulo': "La administración segura.",
              'subcontenido':"Uno de los puntos principales es utilizar solamente el usuario administrador cuando sea estrictamente necesario.<br>"
            },
            {
              'subtitulo': "Menor privilegio.",
              'subcontenido':"Este principio nos dice que para poder realizar sus tareas,un usuario solamente debe tener los privilegios mínimos necesarios para dicha tarea y el acceso a los recursos indispensables, no más."
            },
            {
              'subtitulo': "Control de cambios.",
              'subcontenido':"Busca resguardar el modelo de seguridad de una organización de la implementación de modificaciones."
            },
            {
              'subtitulo': "Control de integridad.",
              'subcontenido':"Esto implica obtener una pequeña firma o resumen de cada archivo, que lo represente unívocamente. "
            },
            {
              'subtitulo': "Políticas de cuentas.",
              'subcontenido':"Contemplan la definición de los usuarios, los recursos a los que tendrán acceso,y una política de contraseñas acorde a los tiempos que corren."
            },
            {
              'subtitulo': "Registros y Logs.",
              'subcontenido':"Los registros y logsde auditoría son una parte fundamental de todo esquema de seguridad."
            }
        ],
        'relacionados':[
          {'url': "Hacking desde Cero<br>Conozca sus vulnerabilidades y proteja su información<br>Daniel Benchimol"}
        ]
    },
    {
      'id':1,
        'titulo':"Software gratuito y software libre.",
        'descripcion': "Son muchos los programas que instalan consigo adware,y sobre ellos cabe hacer algunos comentarios.",
        'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
        'contenido': "El software cuya descarga es gratuita no siempre es libre,y,en muchos casos,el hecho de que no le sea cobrado al usuario no supone que no tenga costo.<br>Si vamos a utilizar software gratuito, resulta fundamental que nos informemos sobre las condiciones en las que se distribuye el producto<br>Una aplicación libre o de código abierto, en cambio, está sustentada por un marco filosófico que le impediría incluir adware u otras amenazas.<br>",
        'subtemas':[
            {
              'subtitulo': "",
              'subcontenido':""
            }
        ],
        'relacionados':[
          {'url': "Seguridad PC desde Cero <br> Alexis Burgos"}
        ]
    },
    {
      'id':2,
      'titulo':"Los protagonistas.",
      'descripcion': "Algunos términos han sido muy mencionados y manipulados en los últimos tiempos.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "Algunos términos han sido muy mencionados y manipulados en los últimos tiempos, muchas veces, en forma malintencionada o sin comprender el concepto subyacente.",
      'subtemas':[
          {
            'subtitulo': "Hackers",
            'subcontenido':"La palabra hacker es un neologismo, que en informática se utiliza para referirse a un gran experto en algún área de dominio."
          },
          {
            'subtitulo': "Crackers.",
            'subcontenido':"Se trata de alguien que viola la seguridad de un sistema de forma similar a un hacker, solo que lo hace de modo ilegal y con diferentes fines.."
          },
          {
            'subtitulo': "Otros personajes.",
            'subcontenido':"<ul><li>Newbie</li><li>Lammers</li><li>phreaker</li></ul>"
          }
      ],
      'relacionados':[
        {'url': "HACKING 2.0<br>IMPLEMENTACION DE UN SISTEMA PARA LA GESTION DE LA SEGURIDAD<br>HECTOR JARA Y FEDERICO G. PACHECO"}
      ]
    },
    {
      'id':3,
      'titulo':"Tu identidad digital.",
      'descripcion': "Cuando navegas por Internet, vas dejando información sobre ti mismo en diferentes sitios que indica a otras personas cómo eres, que opiniones tienes, gustos... Todo forma parte de tu identidad.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "Se conoce como identidad digital a toda la información que hay publicada en Internet sobre una determinada persona.",
      'subtemas':[
          {
            'subtitulo': "Los navegadores.",
            'subcontenido':"Desde todo tipo de dispositivos (ordenadores, tabletas y smartphones) accedemos a la red en busca de información, entretenimiento y otros servicios.<br>Para ello, la herramienta fundamental es el navegador."
          },
          {
            'subtitulo': "Riesgos de no proteger la privacidad.",
            'subcontenido':"Es importante conocer los riesgos de hacer públicos ciertos datos:<br><ul><li>Datos personales.</li><li>Correo electrónico.</li><li>Datos bancarios.</li><li>Ubicación geográfica.</li><li>Fotografías y vídeos.</li></ul>"
          },
          {
            'subtitulo': "Dónde y cómo no acceder a datos privados",
            'subcontenido':"Además, lugares como aeropuertos, bibliotecas, universidades, hoteles, etc.<br>Ofrecen wifi abiertas o públicas a las que nos podemos conectar nosotros y otras muchas personas a las que no conocemos..<br>"
          }
      ],
      'relacionados':[
        {'url': "<a href='https://www.osi.es/es/actualidad/blog'>Instituto nacional de ciberseguridad - Oficina de seguridad del internauta</a>"}
      ]
    },
    {
      'id':4,
      'titulo':"Gestión de contraseñas.",
      'descripcion': "Las contraseñas son las llaves que dan acceso a nuestros servicios y por ende a nuestra información personal por lo que si alguien las consigue puede comprometer nuestra privacidad, pudiendo entre otras cosas.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "Para evitar riesgos derivados de una mala gestión de las contraseñas, te facilitamos unos consejos muy fáciles de aplicar:<br><ul><li>No compartas tus contraseñas.</li><li>Utiliza alguna regla mnemotécnica.</li><li>No utilices la misma contraseña.</li><li>Cuidado con las preguntas de seguridad.</li></ul>",
      'subtemas':[
          {
            'subtitulo': "Contraseñas robustas.",
            'subcontenido':"Debemos asegurarnos que la contraseña tenga una:<br><ul><li>Longitud mínima de ocho caracteres.</li><li>Combina mayúsculas y minúsculas, números y símbolos.</li></ul>"
          },
          {
            'subtitulo': "No reutilizar contraseñas.",
            'subcontenido':"Para facilitar la tarea, podemos utilizar algunas sencillas reglas:<br><ul><li>Cambiar las vocales por números.</li><li>Utilizar claves basadas en un mismo patrón.</li></ul>"
          }
      ],
      'relacionados':[
        {'url': "<a href='https://www.osi.es/es/actualidad/blog'>Instituto nacional de ciberseguridad - Oficina de seguridad del internauta</a>"}
      ]
    },
    {
      'id':5,
      'titulo':"Amenazas o ataques.",
      'descripcion': "Axioma de seguridad: No existe ningún sistema absolutamente seguro.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "Pueden provenir de personas (hackers, crackers), de programas, de sucesos naturales.<br>Equivalen a los factores que se aprovechan de las debilidades del sistema.<br>",
      'subtemas':[
          {
            'subtitulo': "Ataques al sistema operativo.",
            'subcontenido':"Los ataques al sistema operativo incluyen las implementaciones que este realiza de las distintas tecnologías, lo cual puede incluir librerías (que deberíamos llamar bibliotecas, en rigor de verdad)."
          },
          {
            'subtitulo': "Ataques a las aplicaciones.",
            'subcontenido':"Para los ataques a las aplicaciones  se tendrá en cuenta la masividad de uso."
          },
          {
            'subtitulo': "Errores en configuraciones.",
            'subcontenido':"El caso de las configuraciones, ya sean del sistema operativo o de las aplicaciones, también constituye un punto sensible, dado que por más seguro que sea un software, una mala configuración puede tornarlo tan maleable como un papel."
          }
      ],
      'relacionados':[
        {'url': "Seguridad Informática Conceptos generales.<br>Luis Alonso Romero<br>Catedrático de Ciencia de la Computación e Inteligencia Artificial.<br>Universidad de Salamanca"},
        {'url': "ETHICAL HACKING 2.0<br>IMPLEMENTACION DE UN SISTEMA PARA LA GESTION DE LA SEGURIDAD<br>HECTOR JARA y FEDERICO G. PACHECO"}
      ]
    },
    {
      'id':6,
      'titulo':"Protección contra adware, spyware y malware.",
      'descripcion': "Algunas veces, las amenazas tecnológicas suelen camuflarse en aplicaciones que proveen servicios personalizados para el cibernauta.",
      'fuente' : $sce.trustAsResourceUrl("https://www.youtube.com/embed/9jJ5J6rJutg"),
      'contenido': "Los adware y spyware son amenazas de este tipo, que roban datos personales del usuario para luego revenderlos a quienes le enviarán a éste publicidad con un perfil específico.",
      'subtemas':[
          {
            'subtitulo': "Adware y spyware en funcionamiento.",
            'subcontenido':"La idea central del spyware es ayudar a focalizar promociones de ventas, al utilizar la información provista por la amenaza para individualizar el material.<br>Mientras el spyware se encarga de clasificar los hábitos de consumo del usuario, el adware le acerca a éste los productos que probablemente quiera comprar."
          },
          {
            'subtitulo': "Diferencias entre Adware, Spyware y virus.",
            'subcontenido':"Los adware y spyware no pueden ser considerados un tipo de virus.<br>Mientras un virus es un pequeñísimo programa,o unas líneas de código adosadas a otro programa, y que puede reproducirse, lejos de eso,este tipo de amenaza (adware y spyware) tiene otro fin muy específico, ligado al lucro y la creación de nuevos mercados."
          }
      ],
      'relacionados':[
        {'url': "Segirudad PC desde Cero<br>Proteja su PC contra todas las amenazas de la Web<br>Alexis Burgos"}
      ]
    }

  ];


}]);
