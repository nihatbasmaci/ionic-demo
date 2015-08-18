angular.module('weather.services', [])
.factory("havadurumu", function($q, $http){
  sorgula = function(cityname){
    var a = $q.defer();
    $http.get("http://api.openweathermap.org/data/2.5/weather?q="+
    cityname
    +",tr&lang=tr")
         .success(function(data){
           a.resolve(data)
         })
         .error(function(error){
            a.reject("Başarısız Api Çağrısı")
         })
         return a.promise;
  }

  return ({
    ne: sorgula
  })

})
