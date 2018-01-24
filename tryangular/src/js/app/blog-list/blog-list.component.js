'use strict';

angular.module('blogList').
    component('blogList', {
        templateUrl: 'templates/blog-list.html',
        controller: function($scope, $http){
            console.log("hello")
            $scope.title = "Hi, This is abhi"
            $scope.someClickTest = function() {
                console.log("clicked")
                $scope.title = 'clicked';
            }
            $scope.data = function() {
                $http({
                    method: 'get',
                    // url: 'http://api.worldbank.org/v2/datacatalog?format=json'
                    // url: 'http://api.worldbank.org/v2/countries/all/indicators/6.0.GDPpc_constant?date=2013&format=json'
                    // Life Expectancy
                    // url: 'http://api.worldbank.org/v2/countries/all/indicators/SP.DYN.LE00.IN?date=2013&per_page=1000&format=json' 
                    // GDP Per Capita
                    // url: 'http://api.worldbank.org/v2/countries/all/indicators/NY.GDP.PCAP.KN?date=2013&per_page=1000&format=json'
                    // Population
                    url: 'http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?date=2013&per_page=1000&format=json'
                    // Combined
                    // url: 'http://api.worldbank.org/v2/countries/all/indicators/SP.POP.TOTL?date=2013&per_page=1000&format=json'
                }).then(function successCallback(response){
                    // console.log("getAllCities response-----++", response);
                    console.log("success request")
                    $scope.data=response.data;  
                    console.log("data", $scope.data);

                },function errorCallback(response) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    console.log("error request")
                  });
            }
            $scope.data();

        }
    });
    // component('blogList');