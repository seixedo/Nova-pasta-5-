angular.module('starter')
    .controller('HomeController', function ($scope, ProdutosService) {
        ProdutosService.lista().then(function (dados) {
            $scope.bolos = dados;
        });


    });