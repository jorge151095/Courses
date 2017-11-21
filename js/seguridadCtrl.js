app.controller('seguridadCtrl',function($scope){
  $scope.topics = {};
  $scope.section = "Holas";
  
  $scope.topics = [
    {
      "title" : "Titulo A",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo B",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo C",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo A",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo C",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    },
    {
      "title" : "Titulo E",
      "summary" : "orem ipsum dolor sit amet, consectetur adipisicing elit. Expedita voluptatum ullam, possimus aliquam mollitia, inventore ipsam quaerat atque. Corporis, excepturi.",
      "labels"  : "basico"
    }
  ];

  $scope.bs1 = [
            { name: '1.1 ¿Qué es la seguridad informática?', url: '' },
            { name: '1.2 Principales amenazas de seguridad informática', url: '' },
            { name: '1.3 Medidas indispensables para tu seguridad informática', url: '' }
        ];
        $scope.bs2 = [
            { name: '2.1 Conceptos de seguridad informática', url: '' },
            { name: '2.2 Seguridad en la información', url: '' },
            { name: '2.3 Principios de seguridad', url: '' }
        ];
        $scope.bs3 = [
            { name: '3.1 Secreto de confidencialidad', url: '' },
            { name: '3.2 Integridad', url: '' },
            { name: '3.3 Accesibilidad o disponibilidad', url: '' },
            { name: '3.4 Autenticidad', url: '' },
            { name: '3.5 No repudio', url: '' },
            { name: '3.6 Consistencia', url: '' },
            { name: '3.7 Aislamiento', url: '' },
            { name: '3.8 Auditoria', url: '' },
            { name: '3.9 Prevención e información', url: '' }
        ];
        $scope.bs4 = [
            { name: '4.1 Como sentirse seguro al navegar', url: '' },
            { name: '4.2 Navegadores web', url: '' },
            { name: '4.3 Contrafuegos (Firewall)', url: '' },
            { name: '4.4 Correo electrónico', url: '' },
            { name: '4.5 Redes sociales', url: '' }
        ];
        $scope.bs5 = [
            { name: '5.1 El virus en acción', url: '' },
            { name: '5.2 ¿Qué tipo de virus existen?', url: '' },
            { name: '5.3 La prevención  antivirus', url: '' },
            { name: '5.4 El antivirus en acción', url: '' }
        ];

  $scope.guia = function(){ $scope.section = "Guias"}
  $scope.siguiente = function(){  }

});
