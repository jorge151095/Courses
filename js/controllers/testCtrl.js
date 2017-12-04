/*app.factory('MyService', function() {
    return {
      data: {}
    };
  });*/

app.controller('testCtrl',function($scope,$location,MyService){
        $scope.result = -1;
        $scope.j = 0;
        $scope.next = function(){
            if ($scope.oc == $scope.result)
                $scope.j = $scope.j + 1;
            var i = Math.floor((Math.random() * $scope.ub.length - 1) + 1);
            $scope.img = $scope.ub[i].img;
            $scope.q = $scope.ub[i].q;
            $scope.o1 = $scope.ub[i].o1;
            $scope.o2 = $scope.ub[i].o2;
            $scope.o3 = $scope.ub[i].o3;
            $scope.oc = $scope.ub[i].oc;
        };

        $scope.ub = [
        {
        "q" : "¿Qué es una red zombi",
        "id" : 1,
        "o1" : "Un tipo de conexión a Internet cuya principal característica es que por las noches permite una mayor velocidad de navegación.",
        "o2" : "Es una red privada de computadoras que está protegida frente a amenazas de Internet.",
        "o3" : "Es un conjunto de computadoras infectados por un mismo tipo de virus y que es controlado por un ciberdelincuente para llevar a cabo acciones maliciosas.",
        "oc" : "3"
        ,"img":"img/test/ub/redzombi.png"},
        {
        "q" : "¿Cómo se llama la persona que finge tener conocimientos que en verdad no posee?",
        "id" : 2,
        "o1" : "Lammer",
        "o2" : "Script kiddie",
        "o3" : "Newbie",
        "oc" : 1
        ,"img":"img/test/ub/lammer.jpg"},
        {
        "q" : "¿Existen los firewalls que actúan por hardware?",
        "id" : 3,
        "o1" : "No, solo existe el de Windows.",
        "o2" : "Sí, se utilizan en algunos entornos corporativos.",
        "o3" : "Sí, por ejemplo Comodo Security.",
        "oc" : "2"
        ,"img":"img/test/ub/firewall.png"},
        {
        "q" : "¿Los programas contienen adware?",
        "id" : 4,
        "o1" : "Todos los programas contienen adware.",
        "o2" : "Sí, especialmente los descargados de Internet.",
        "o3" : "Solo los de sistemas Linux.",
        "oc" : "2"
        ,"img":"img/test/ub/adware.jpg"},
        {
        "q" : "¿Es importante actualizar el antivirus?",
        "id" : 5,
        "o1" : "Siempre.",
        "o2" : "Solo si nuestro equipo se conecta a una red.",
        "o3" : "Depende de nuestra versión de Windows.",
        "oc" : "1"
        ,"img":"img/test/ub/antivirus.png"},
        {
        "q" : "¿Por qué es posible tener Internet, pero no poder actualizar el antivirus?",
        "id" : 6,
        "o1" : "Por un problema del servidor.",
        "o2" : "Por el fabricante del módem.",
        "o3" : "Porque compartimos Internet con otra computadora y lo hacemos mediante un servidor proxy.",
        "oc" : "3"
        ,"img":"img/test/ub/virusIn.jpg"},
        {
        "q" : "¿Cómo se llama el programa que envía publicidad no deseada?",
        "id" : 7,
        "o1" : "Virus",
        "o2" : "Spyware",
        "o3" : "Adware",
        "oc" : "3"
        ,"img":"img/test/ub/adware2.jpg"},
        {
        "q" : "¿Cuál es la finalidad de la amenaza llamada spyware?",
        "id" : 8,
        "o1" : "Acercar publicidad.",
        "o2" : "Ayudar a focalizar promociones de ventas.",
        "o3" : "Dañar el equipo.",
        "oc" : "2"
        ,"img":"img/test/ub/spy.jpg"},
        {
        "q" : "¿Qué significa WPA?",
        "id" : 9,
        "o1" : "Privacidad equivalente al cableado.",
        "o2" : "Acceso a WI-FI protegido.",
        "o3" : "Ethernet.",
        "oc" : "2"
        ,"img":"img/test/ub/wpa.jpg"},
        {
        "q" : "¿Podemos mantener los datos de inicio de sesión ocultos?",
        "id" : 10,
        "o1" : "No",
        "o2" : "Sí, con un firewall apropiado.",
        "o3" : "Sí, con la encriptación de datos.",
        "oc" : "3"
        ,"img":"img/test/ub/enc.jpg"}
        ];

        
        $scope.next();
    });
    