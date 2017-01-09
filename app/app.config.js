var app = angular.module('InvoiceApp', ['ngRoute']);
 app.config( ['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/dashboard', {
        templateUrl: '/dashboard.html',
        controller: 'dashboardController'
      })
       .when('/invoice', {
        templateUrl: 'invoice.html'
      })
        .when('/orders', {
        templateUrl: 'orders.html'
      })
         .when('/messages', {
        templateUrl: 'messages.html'
      })
          .when('/documents', {
        templateUrl: 'documents.html'
      })
           .when('/settings', {
        templateUrl: 'settings.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


 app.controller('dashboardController', function($scope){
     $scope.dashboardArray = [];
     $scope.AddCustomer = function() {
            $scope.dashboardArray.push(
              {
                'country': $scope.country,
                'company': $scope.company
              });
                console.log($scope.dashboardArray);
        }
       });