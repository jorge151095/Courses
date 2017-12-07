app.factory('MyService', function() {
  return {
    data: {}
  };
});

app.controller('noticiasCtrl',function($scope,$location,MyService){

      $scope.goToNew = function(title,summary,image,date,content,link,audio){
      MyService.data.title = title;
      MyService.data.summary = summary;
      MyService.data.image = image;
      MyService.data.date = date;
      MyService.data.content = content;
      MyService.data.link = link;
      MyService.data.audio = audio;
      $location.path('/noticia').replace();
    };

    $scope.title = MyService.data.title;
    $scope.summary = MyService.data.summary;
    $scope.image = MyService.data.image;
    $scope.date = MyService.data.date;
    $scope.content = MyService.data.content;
    $scope.link = MyService.data.link;
    $scope.audio = MyService.data.audio;

    $scope.news = [
        {
          "title" : "Aunque desactives el GPS del móvil, Google conoce tu ubicación en cada momento",
          "summary" : "La compañía lleva recopilando datos de la localización de las personas con dispositivos Android desde principios de este año",
          "labels"  : "basico",
          "image" : "img/noticias/google.jpg",
          "date" : "21/11/2017 21:18h Fuente: abc.es",
          "content" : "<p class='newpaper'>Vivimos en la época de los datos, y en la sociedad hay una alarma general sobre el uso de las empresas con ellos. Hace poco, Facebook fue multada por la Agencia Española de Protección de Datos hace unos meses por su uso indebido. Ahora, la lupa está en otra de las grandes tecnológicas, Google, que lleva recopilando los datos de ubicación de los usuarios de móviles Android desde principios de año. No importa que el sistema de geolocalización del dispositivo esté activado o no, sólo con que el móvil esté encendido, Google conoce, más o menos, la ubicación exacta del usuario, según informan desde Quartz. <br> <br> ¿Y cómo lo consigue? Al parecer Google consigue la información a través de las antenas con las que los dispositivos se conectan. La ubicación no es exacta, pero sí muy aproximada, por lo que no sería muy difícil conocer la ubicación del usuarios triangulando las antenas a las que se conecta su móvil.<br><br>Según el medio, un portavoz de Google no ha tenido reparos en admitir esta práctica, aunque aseguran que la cesaran en breves. También revelan que no han utilizado estos datos registrados en ningún momento, sino que su objetivo ha sido mejorar la velocidad los envíos de los mensajes.<br><br>El verdadero problema estaría si estos datos llegaran a manos de terceros, aunque desde Google mantienen que estos están completamente encriptados y que son inaccesibles. A pesar de la versión de la compañía, estas prácticas no hacen sino reavivar las fobias de la sociedad con sus datos personales y la revelacón de su privacidad.</p>",
          "link": "http://www.abc.es/tecnologia/abci-aunque-desactives-movil-google-conoce-ubicacion-exacta-cada-momento-201711212118_noticia.html",
          "audio": "audio/GPS.mp3"
        },
        {
          "title" : "Vulnerabilidades y espionaje: la otra cara de los juguetes conectados",
          "summary" : "Alerta sobre posibles fallos de seguridad de estos aparentemente inocentes aparatos para niños que suelen requerir el uso de un móvil y que podrían hacer que cualquiera se comunicara con el menor",
          "labels"  : "basico",
          "image" : "img/noticias/toy.jpg",
          "date" : "28/11/2017 10:00h Fuente: abc.es",
          "content": "<p class='newpaper'>Los juguetes «inteligentes» suelen despertar el interés de todos, sobre todo, el de los niños actuales. Robots, humanoides, muñecos interactivos. Un sinfín de productos que se suman a los ya clásicos peluches o coches. Los hábitos de los pequeños han cambiado con el tiempo y la tecnología está cada vez más presente en sus vidas. Pero aquellos que requieren de conectividad a internet pueden conllevar ciertos riesgos si no se observan adecuadamente. <br><br>Como hiciera con anterioridad, la organización de consumidores británica Which? ha alertado de una serie de vulnerabiliades localizadas en algunos modelos de juguetes conectados y que podrían presentar un riesgo para la seguridad de los menores. Estos «agujeros de seguridad» provienen de la conectividad inalámbrica a través de Bluetooth o WiFi. La investigación ha descubierto que cualquier persona con conocimientos técnicos podría «comunicarse» con el usuario (un niño en este caso).<br><br>Los analistas han encontrado estas carencias técnicas en algunos juguetes de peluche de las marcas Furby, I-Que Intelligent Robot, Toy-fi Teddy y CloudPets. En cada uno de ellos, la conexión Bluetooth no contenía los estándares de de seguridad requeridos, lo que significa que durante las pruebas un cibercriminal no necesitaría de contraseña, código PIN ni ninguna otra autenticación para acceder a los datos que conectan al juguete con el dispositivo móvil.<br><br>¿Qué implica esto? Según las pruebas realizadas una persona puede conectarse a la red Bluetooth del juguete. «Nadie dejaría un niño pequeño con un smartphone sin supervisión», afirma en un comunicado el director de Productos y Servicios del Hogar de Which?, Alex Neill, pero insta a los padres a aplicar el «mismo nivel de cuidado» cuando le regalan a un niño un juguete conectado.<br><br>Las principales marcas han reaccionado. Así, la compañía de juegos Hasbro, creadora del Furby Connect, ha explicado que se toman las investigaciones sobre sus juguetes «muy en serio» y apunta a que las vulnerabilidades expuestas «únicamente pueden ser aprovechadas por alguien que esté muy cerca del juguete» y «tenga los conocimientos técnicos para rediseñar el 'firmware'». Por su parte, Vivid Toys, distribuidora del robot i-Que, también ha señalado que no se han denunciado usos perniciosos de su producto y que su juguete «cumple con las normativas británicas y europeas».</p>",
          "link": "http://www.abc.es/tecnologia/redes/abci-vulnerabilidades-y-espionaje-otra-cara-juguetes-conectados-201711160145_noticia.html",
          "audio": "audio/toys.mp3"
        },
        {
          "title" : "El coche autónomo: en el punto de mira de los ciberdelincuentes",
          "summary" : "Ya se han dado a conocer casos de personas que han conseguido acceder al control remoto de un vehículo equipado con sistemas de conectividad",
          "labels"  : "basico",
          "image" : "img/noticias/car.jpg",
          "date" : "27/11/2017 08:42h Fuente: abc.es",
          "content": "<p class='newpaper'>El año 2020 será clave para la implantación del coche totalmente conectado. Para esa fecha la implantación del sistema de comunicación 5G va a permitir la conectividad total con los vehículos y entre los propios vehículos, con el objetivo final del coche autónomo de nivel 5, es decir, capaz de circular sin necesidad de la intervención humana.<br><br>Uno de los grandes objetivos de la industria es acercarse lo más posible al objetivo de cero accidentes de tráfico. El vehículo sin conductor ayudará a eliminar el error humano, presente en el 90% de los accidentes, reducirá la siniestralidad y nos hará la vida a bordo más fácil. Sin duda, la conducción automatizada traerá muchas ventajas, pero para que podamos ir al volante de un coche sin conducir, es necesario mucho más que incorporar sistemas de asistencia a la conducción.<br><br>Y es que la ciberseguridad del coche autónomo preocupa, y mucho. Los ataques informáticos afectan al cine, a las productoras, a las grandes empresas... por lo que el mundo de la automoción no es ajeno a esta realidad. De hecho, ya se han dado a conocer casos de personas que han conseguido acceder al control remoto de un vehículo equipado con sistemas de conectividad.<br><br>La ciberseguridad del coche autónomo preocupa, y mucho<br><br>Los riesgos van desde el robo de contraseñas, la apertura y cierre remoto de puertas, la localización del coche y, en el peor de los casos, el control físico del coche. Asimismo, tal y como indica un estudio elaborado por la Federación Internacional del Automóvil (FIA) y adelantan desde el RACE, el posible pirateo del coche conectado está entre las preocupaciones de 9 de cada 10 españoles. Y no es para menos cuando un informe del FBI advertía que los coches autónomos podrían ser utilizados por delincuentes como armas letales y para casos de secuestro.</p>",
          "link":"http://www.abc.es/motor/reportajes/abci-coche-autonomo-punto-mira-hackers-201711241828_noticia.html",
          "audio": "audio/auto.mp3"
        },
        {
          "title" : "Tu ordenador puede estar enriqueciendo a alguien con bitcoins (y tú sin enterarte)",
          "summary" : "La minería ilegal de criptomonedas o «cryptojacking» se ha convertido en uno de los fenómenos más recientes y que pone en el punto de mira a usuarios pero también a empresas",
          "labels"  : "basico",
          "image" : "img/noticias/bitcoin.jpg",
          "date" : "03/12/2017 01:37h Fuente: abc.es",
          "content":"<p class='newpaper'>La lentitud de los ordenadores que utilizan los usuarios de manera privada (y personal) o en el trabajo tiene numerosos factores. Pero, una de ellas, puede estar originada por un motivo mucho más retorcido que un simple problema de capacidad de almacenamiento, caídas en las velocidades de conexión o el excesivo consumo de recursos. Sus equipos pueden estar siendo usados de manera remota para hacer «fabricar» criptomonedas y estar enriqueciendo a ciberdelincuentes sin saberlo.<br><br>Esta es otra de las tendencias en auge en materia de ciberactividad con las que tienen que lidiar los expertos de ciberseguridad. Debido al aumento del interés por cripto-activos digitales como Bitcoin, que se ha revalorizado en los últimos meses hasta superar la cifra de los 10.000 dólares de conversión, grupos profesionales y amateurs han encontrado una forma para aprovecharse de los equipos de otra gente para ganar dinero. Sí, dinero a costa tuya.<br><br></p><h4>Saber si eres víctima</h4><br><p class='newpaper'>Generalmente, los usuarios pueden seguir haciendo sus quehaceres diarios con el ordenador, aunque este esté siendo víctima de las garras del «cryptojacking». Sin embargo, los usuarios notarán que el equipo funciona más lento de lo habitual y que se están ejecutando tareas poco habituales. «Al final la minería de criptomonedas es un proceso muy intensivo en consumo de recursos de CPU», por lo cual al usuario del ordenador le queda poco espacio para desarrollar sus tareas.<br><br>Para poder ponerle solución, lo más eficaz es desde la prevención con un buen antivirus y buenas costumbres en internet como «no ir o navegar a páginas desconocidas o que no sepamos como se comportan», recalca en este aspecto Nieva. Ya que dependiendo del tipo de infección la manera en que se resuelva el problema será muy variable. Por ello, antes de ir a esas páginas, se debería desactivar la opción de javascript, opción que te permiten la mayoría de navegadores como Chrome y luego, si se cree necesario, activarlo de nuevo.</p>",
          "link":"http://www.abc.es/tecnologia/redes/abci-ordenador-puede-estar-enriqueciendo-alguien-bitcoins-y-sin-enterarte-201712030137_noticia.html#ns_campaign=mod-lo-mas&ns_mchannel=leido&ns_source=tecnologia&ns_linkname=noticia.foto.tecnologia&ns_fee=pos-1&vtm_loMas=si",
          "audio": "audio/bitCoin.mp3"
        },
        {
          "title" : "Droga, ovnis y delincuencia: la 'dark web' en español existe y así puedes colarte",
          "summary" : "Venta de contraseñas de Facebook y Gmail, creación de virus personalizados, destrucción integral de información de computadoras, en la web oscura puedes encontrar de todo. Y en español",
          "labels"  : "basico",
          "image" : "img/noticias/deepweb.jpg",
          "date" : "27/11/2017 17:00h Fuente: elconfidencial.com",
          "content":"<p class='newpaper'>¿Cómo imaginas la conocida como 'dark web', o web oscura? ¿Quizá... negra? Nada más lejos de la realidad. Son webs normales, solo que necesitas un navegador especial para verlas. Cada vez más españoles se adentran en ella y montan sus guaridas: chats y foros donde gritan lo que la ley mordaza no les deja, aprenden 'hacking', sacian sus desórdenes sexuales o acceden a productos y servicios ilegales en el mundo real.<br><br>Algunos llevan ya tiempo paseando por las llamadas 'redes oscuras', como Tor, Freenet, Invisible Internet Project, ZeroNet... Cada una tiene su propia zona de sitios webs, llamada web oscura. La de Tor es la más conocida, y allí los más veteranos construyen, poco a poco, la zona hispana, con chats, foros, bibliotecas o zonas de compraventa.<br><br>TortillaChat es el chat de la comunidad española que acaba de entrar en Tor: una web con una ventana donde cualquiera puede leer y escribir en un mosaico surrealista: 'Vendo droga', '¿Alguien de Colombia?', '¿Alguien sabe un 'link' pedo?'. También cumple la función de entrada a este mundo el foro HispaTorChan, el 4Chan de Tor en español, donde dicen: 'Está permitido todo', menos la pedofilia y las estafas.<br><br>En HispaTorChan leemos a un tal Arirang mostrando su oferta: contraseñas de Facebook y Gmail, creación de virus personalizados, destrucción integral de información de ordenadores, 'hacking' y 'cracking' efectivos, implante de archivos a distancia, modificación y robo de información empresarial y personal. 'Hace más de cinco años soy miembro de una organización discreta especializada en esta clase de trabajos. Ofrezco efectividad, discresión (sic) y puntualidad', afirma.<br><br>Junto a este anuncio, otro que pide información sobre ovnis, fotos pornográficas, un sesudo artículo —'¿Hay que defender la revolución bolivariana?'— y otro pidiendo que visiten una nueva red oscura llamada Alienet. Las zonas de 'hacking', pornografía, gore y servicios ocultos están entre las más visitadas.<br><br>Tanto quienes montan las webs como quienes las visitan, afirma el investigador, 'en la mayoría de los casos siguen la filosofía 'hacker'. Gonzalo los divide en dos grupos: 'Los curiosos, que consumen contenido esporádicamente o por primera vez, y los usuarios habituales, que saben moverse e incluso generan contenido en dichas redes'.<br><br>Estos exploradores recuerdan a los primeros habitantes de la World Wide Web, cuando los pocos sitios web existentes cabían en un breve listado y el 'hacking', la pornografía y lo políticamente incorrecto campaban a sus anchas. Desembarcar en este nuevo mundo de la web oscura es tan fácil como descargar el navegador Tor de nuestro idioma y sistema operativo</p>",
          "link": "https://www.elconfidencial.com/tecnologia/2017-09-27/dark-web-ciberseguridad-deep-web-hackers-tor_1448258/",
          "audio": "audio/DarkWeb.mp3"
        },
        {
          "title" : "Detectan fallo de seguridad en el nuevo sistema operativo de los Mac",
          "summary" : "Descubren que cualquier persona puede iniciar sesión sin necesidad de ingresar la contraseña.",
          "labels"  : "basico",
          "image" : "img/noticias/mac.jpg",
          "date" : " 29/11/2017 17:41h Fuente: eltiempo.com",
          "content": "<p class='newpaper'>Un grave fallo de seguridad en MacOS High Sierra, la más reciente versión del sistema operativo para computadores Mac, permite que cualquier persona pueda iniciar sesión sin necesidad de ingresar la contraseña, lo que puede dejar vulnerables los datos privados de los usuarios.<br>br>Según el desarrollador turco Lemi Orhan, quien descubrió el problema,  es posible ingresar la palabra 'root' en el nombre de usuario y dejar el espacio de la contraseña vacío. Después de hacer clic varias veces, el sistema permite el ingreso.<br>br>Mientras Apple publica una nueva versión del software o corrije el error, los usuarios pueden solucionar el problema asignando su propia contraseña a la cuenta raíz (root). Para ello, vaya a 'Preferencias del sistema', haga clic en 'Opciones de inicio de sesión' en el lado izquierdo del menú  y luego presione el botón ‘Unir al servidor de cuenta de red’. A continuación ingrese a ‘Abrir utilidad de directorio’ y luego en 'Editar' en la barra de menú de Mac para asignar una contraseña.<br>br>Una solicitud de contraseña que se autentica como 'root' con un campo de contraseña vacío sería un ojo negro para cualquier sistema operativo. Peor aún para el de una compañía consciente de la seguridad y la privacidad, como Apple', escribió Steve Troughton-Smith, un desarrollador de software Mac, en Twitter.<br>br>Pruebas de la falla indican que podría usarse para alterar la configuración del sistema de un usuario por lo que los cibercriminales tendrían la posibilidad de cambiar las preferencias clave de seguridad, habilitar o deshabilitar el firewall de una computadora o el cifrado de la unidad de almacenamiento.<br>br>El problema es considerado como uno de los peores fallos de seguridad de los Mac teniendo en cuenta la percepción de que el software de Apple es menos propenso a las infecciones de malware. La versión anterior del sistema operativo no pareció verse afectada por el error.</p>",
          "link":"http://www.eltiempo.com/tecnosfera/novedades-tecnologia/macos-high-sierra-fallo-de-seguridad-en-el-nuevo-sistema-operativo-de-los-mac-156580",
          "audio": "audio/macOS.mp3"
        }
      ];
});
