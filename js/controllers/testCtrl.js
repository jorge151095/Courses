app.factory('MyService', function() {
    return {
      data: {}
    };
});

app.controller('testCtrl',function($scope,$location,MyService){
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
        "oc" : "1"
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
        "o3" : "Obtener información",
        "oc" : "3"
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

        $scope.ac = MyService.data.ac;
        $scope.arrayfailaux = MyService.data.arrayfail;
        
        //Verify if array of order is not null
        if (MyService.data.arrayordernumber != null){
            $scope.arrayordernumber = MyService.data.arrayordernumber;
        }else{
            $scope.arrayordernumber = [];
        }

        //Select correct Answer
        if ($scope.ac == 10){
            $scope.imgr = "img/test/perfect.png";
            $scope.textresult = "Perfecto, eres todo un gurú en el área";
        } else if ($scope.ac > 6 && $scope.ac < 10){
            $scope.imgr = "img/test/medio.png";
            $scope.textresult = "En hora buena, has tenido un buen resultado, sigue perfeccionandote";
        } else {
            $scope.imgr = "img/test/reprobado.jpg";
            $scope.textresult = "Ups, te recomendamos darle un repaso a los temas";
        }

        $scope.resultall = []; //Array of results

        //Set array of results
        $scope.arrayordernumber.forEach(function(element) {
            //Find ANSWER TO QUESTION
            if ($scope.ub[element].oc == "1"){ respc = $scope.ub[element].o1;}
            else if ($scope.ub[element].oc == "2"){ respc = $scope.ub[element].o2;}
            else { respc = $scope.ub[element].o3;}

            //FIND ICON
            if ($scope.arrayfailaux.indexOf(element) == -1){
                url = "img/test/ok.png";
            } else {
                url = "img/test/cancelar.png";
            }

            obj = {"q":$scope.ub[element].q,"rc":respc,"icon":url};
            $scope.resultall.push(obj);
        });
        //console.log($scope.resultall);

        var randomFromListGenerator = function (list) {
            var position = 0;
        
            for (var i=0, l=list.length; i<l; i++) {
                var random = Math.floor((Math.random() * l));
                var aux = list[i];
                list[i] = list[random];
                list[random] = aux;
            }
        
            return function () {
                return list[position++ % list.length];
            }
        }
        
        var nextRandomFromList = randomFromListGenerator ([0,1,2,3,4,5,6,7,8,9]);

        //Cont
        $scope.result = -1;
        $scope.ac = 0; //OK
        $scope.er = -1; //Fail
        $scope.num = 0; //Number question
        $scope.arrayfail = []; //Array fails
        $scope.arrayordernumber = []; //Order of numbers

        //Function to new Question
        $scope.next = function(){
            if ($scope.oc == $scope.result){ //Question acert
                $scope.ac = $scope.ac + 1;
            }else{
                $scope.er = $scope.er + 1;
                if ($scope.er != 0)
                    $scope.arrayfail.push($scope.i);
                //console.log($scope.arrayfail);
            }
            //When number the cuestion is terminated
            if ($scope.num == 10){
                MyService.data.ac = $scope.ac;
                MyService.data.arrayfail = $scope.arrayfail;
                MyService.data.arrayordernumber = $scope.arrayordernumber;
                $location.path('/retroalimentacion').replace();
            }else{
                $scope.i = nextRandomFromList(); //get pos i
                $scope.arrayordernumber.push($scope.i);
                $scope.img = $scope.ub[$scope.i].img;
                $scope.q = $scope.ub[$scope.i].q;
                $scope.o1 = $scope.ub[$scope.i].o1;
                $scope.o2 = $scope.ub[$scope.i].o2;
                $scope.o3 = $scope.ub[$scope.i].o3;
                $scope.oc = $scope.ub[$scope.i].oc;
                $scope.num = $scope.num + 1;
            }
        };
        $scope.next();
    });
    