@license AngularJS v1.3.15

angular
.module("listaTelefonica", [])
.controller("listaTelefonicaCtrl", function($scope){
     $scope.app = "Lista Telefonica";
     $scope.contatos = [
        {nome: "Groxo", telefone: "222222222"},
        {nome: "Matheus", telefone: "2222222"},
        {nome: "Luisa", telefone: "9999999"},
        {nome: "Leo", telefone: "222222222"}
     ];
     $scope.adicionarContato = function (contato){
        $scope.contatos.push(angular.copy(contato));
     };
});