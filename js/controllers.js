'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('ListMovieCtrl', ['$scope', 'movieFactory', function($scope, movieFactory) {

  		$scope.countries = movieFactory.getCountries();

  		$scope.getMovies = function(codeCountry){
  			movieFactory.getMovies(codeCountry).then(
  				function(response){
  					var movieArray = response.data.movies;
  					console.log(JSON.stringify(movieArray));
  					$scope.movies = movieArray;
  				},
  				function(response){
  					//error message
  				}
  			)
  		};

  		$scope.getMovies('us');
  }]);
