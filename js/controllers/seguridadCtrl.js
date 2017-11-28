app.controller('seguridadCtrl',function($scope){  
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
    
        $scope.is1 = [
            { name: '1.1 Las buenas prácticas que no siempre se cumplen', url: '' }
        ];
        $scope.is2 = [
            { name: '2.1 Los protagonistas (Hacker, Cracker, entre otros)', url: '' },
            { name: '2.2 Fuentes confiables', url: '' }
        ];
        $scope.is3 = [
            { name: '3.1 Tipos de vulnerabilidad', url: '' },
            { name: '3.2 Medidas preventivas', url: '' }
        ];
        $scope.is4 = [
            { name: '4.1 Ataques activos', url: '' },
            { name: '4.2 Ataques pasivos', url: '' }
        ];
        $scope.is5 = [
            { name: '5.1 Adware y spyware en funcionamiento', url: '' },
            { name: '5.2 Diferencias entre adware, spywate y virus', url: '' },
            { name: '5.3 Limpiar y proteger el equipo', url: '' }
        ];
        
        $scope.is6 = [
            { name: '6.1 Prinicipo de menor privilegio', url: '' },
            { name: '6.2 Oscuridad no equivalente a seguridad', url: '' },
            { name: '6.3 Principio del eslabón más débil', url: '' },
            { name: '6.4 Defensa en profundidad', url: '' },
            { name: '6.5 Punto de control centralizado', url: '' },
            { name: '6.6 Seguridad en caso de fallo', url: '' },
            { name: '6.7 Partición universal', url: '' },
            { name: '6.8 Principio de simplicidad', url: '' }
        ];

        $scope.as1 = [
            { name: '1.1 Anatomía de un ataque', url: '' },
            { name: '1.2 La seguridad en las empresas', url: '' }
        ];
        $scope.as2 = [
            { name: '2.1 ¿Cómo se relaciona Ingeniería social con seguridad informática?', url: '' },
            { name: '2.2 Phising', url: '' },
            { name: '2.3 Baiting', url: '' },
            { name: '2.4 Vishing', url: '' }
        ];
        $scope.as3 = [
            { name: '3.1 Windows vs Linux', url: '' },
            { name: '3.2 Un sistema operativo seguro', url: '' },
            { name: '3.3 Consejos para sistemas Windows', url: '' },
            { name: '3.4 Consejos para sistemas Unix', url: '' }
        ];
        $scope.as4 = [
            { name: '4.1 Protección imprescindible', url: '' },
            { name: '4.2 Windows Firewall', url: '' },
            { name: '4.3 Excepciones', url: '' }
        ];
        $scope.as5 = [
            { name: '5.1 Los problemas de las contraseñas', url: '' },
            { name: '5.2 Configuración básica', url: '' }
        ];
        $scope.as6 = [
            { name: '6.1 La privacidad', url: '' },
            { name: '6.2 Datos personales', url: '' },
            { name: '6.3 Encriptación', url: '' },
            { name: '6.4 ¿Qué es una cookie?', url: '' }
        ];
        $scope.as7 = [
            { name: '7.1 El autoconocimiento', url: '' },
            { name: '7.2 Amenazas y vulnerabilidades', url: '' },
            { name: '7.3 Implementación de controles', url: '' },
            { name: '7.4 Políticas y otros documentos', url: '' },
            { name: '7.4 Responsabilidades', url: '' }
        ];

  $scope.guia = function(){ $scope.section = "Guias"}
  $scope.siguiente = function(){  }

});
