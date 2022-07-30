
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $('header').addClass('sticky');
    } else {
      $('header').removeClass('sticky');
    }
  });
});
var app = angular.module('myApp', ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "index.html"
    })
    .when("/auctions", {
      templateUrl: "auction.html",
    })
    .when("/products", {
      templateUrl: "products.html",
    });
});
app.controller("myCtrl", function ($scope, $http) {
  function getData() {
    sessionStorage.clear();
    $http.get("productsDB.json").then((response) => {
      if (sessionStorage.getItem("seeProducts") == null) {
        sessionStorage.setItem("seeProducts", JSON.stringify(response.data.products));
        $scope.productsList = JSON.parse(sessionStorage.getItem("seeProducts"));
      } else {
        $scope.productsList = JSON.parse(sessionStorage.getItem("seeProducts"));
      }
    });
  };
  getData();
  $scope.upcomingFilter = () => {
    $scope.search = 'Upcoming';
  };
  $scope.liveFilter = () => {
    $scope.search = 'Live Action';
  };
  $scope.comFilter = () => {
    $scope.search = 'Completed';
  };
  $scope.sort = {};
    $scope.doSort = function (cot) {
        var sort = $scope.sort;
        if (sort.cot == cot) {
            sort.descending = !sort.descending;
        }
        else {
            sort.cot = cot;
            sort.descending = false;
        }
    }
});
