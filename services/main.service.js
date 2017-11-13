(function() {
 'use strict';

    angular.module('mainServices', [])
    .factory('getData', function() {
          return { 
              getEmployees: function () {                                                        
                  return [{"firstName":"John","lastName":"Doe","age":"30","employer":"Google","joiningDate":"21-07-2017","location":"Texas","id":1},{"firstName":"Vito","lastName":"Corleone","age":"21","employer":"Tesla","joiningDate":"09-09-2007","location":"Dallas","id":2},{"firstName":"Indiana","lastName":"Jones","age":"65","employer":"Apple","joiningDate":"05-01-2008","location":"California","id":3},{"firstName":"Robin","lastName":"Hood","age":"34","employer":"Shell","joiningDate":"21-05-2009","location":"Alabama","id":4},{"firstName":"Ethan","lastName":"Hunt","age":"28","employer":"Exxon","joiningDate":"22-06-2010","location":"Missouri","id":5},{"firstName":"Forrest","lastName":"Gump","age":"49","employer":"Walmart Labs","joiningDate":"23-07-2011","location":"Utah","id":6},{"firstName":"Willy","lastName":"Wonka","age":"61","employer":"Wipro","joiningDate":"24-08-2012","location":"Florida","id":7},{"firstName":"Captain","lastName":"Quint","age":"18","employer":"CTS","joiningDate":"25-09-2013","location":"Mexico","id":8},{"firstName":"Rocky","lastName":"Balboa","age":"27","employer":"TCS","joiningDate":"26-10-2014","location":"Mumbai","id":9},{"firstName":"Tom","lastName":"Powers","age":"39","employer":"Zoho","joiningDate":"27-11-2015","location":"Bangalore","id":10},{"firstName":"Harry","lastName":"Potter","age":"40","employer":"Thoughtworks","joiningDate":"28-12-2016","location":"Delhi","id":11}];   
              }  
          }; 

    });

})();
