'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', []).
  value('version', '0.1').
  constant('APIKEY', '')
  .factory('movieFactory', ['$http','APIKEY',  function($http,APIKEY) {
  		var countries = [
  			{name: 'Germany', code:'de'},
  			{name: 'USA', code:'us'},
  			{name: 'UK', code:'uk'},
  			{name: 'France', code: 'fr'}
  		];
  		return {
  		getCountries: function(){
  			return countries;
  		},
  		getMovies: function(codeCountry){
  			var key = '';
  			return $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?limit=20&country='+codeCountry+'&callback=JSON_CALLBACK&apikey='+APIKEY);
  		}
  	}
  }]);
