angular.module('weather.controllers', ['weather.services'])
.controller('WeatherCtrl', function($scope, havadurumu, $state) {
  $scope.cities = {
    1: "ADANA",2: "ADIYAMAN", 3: "AFYONKARAHİSAR",4: "AĞRI",68: "AKSARAY",5: "AMASYA",6: "ANKARA",7: "ANTALYA",75: "ARDAHAN",8: "ARTVİN",9: "AYDIN",
    10: "BALIKESİR",74: "BARTIN",72: "BATMAN",69: "BAYBURT",11: "BİLECİK",12: "BİNGÖL",13: "BİTLİS",14: "BOLU",15: "BURDUR",16: "BURSA",17: "ÇANAKKALE",18: "ÇANKIRI",
    19: "ÇORUM",20: "DENİZLİ",21: "DİYARBAKIR",81: "DÜZCE",22: "EDİRNE",23: "ELAZIĞ",24: "ERZİNCAN",25: "ERZURUM",26: "ESKİŞEHİR",27: "GAZİANTEP",
    28: "GİRESUN",29: "GÜMÜŞHANE",30: "HAKKARİ",31: "HATAY",76: "IĞDIR",32: "ISPARTA",34: "İSTANBUL",35: "İZMİR",46: "KAHRAMANMARAŞ",78: "KARABÜK",70: "KARAMAN",
    36: "KARS",37: "KASTAMONU",38: "KAYSERİ",71: "KIRIKKALE",39: "KIRKLARELİ",40: "KIRŞEHİR",79: "KİLİS",41: "KOCAELİ",42: "KONYA",43: "KÜTAHYA",44: "MALATYA",
    45: "MANİSA",47: "MARDİN",33: "MERSİN",48: "MUĞLA",49: "MUŞ",50: "NEVŞEHİR",51: "NİĞDE",52: "ORDU",80: "OSMANİYE",53: "RİZE",54: "SAKARYA",55: "SAMSUN",56: "SİİRT",57: "SİNOP",
    58: "SİVAS",63: "ŞANLIURFA",73: "ŞIRNAK",59: "TEKİRDAĞ",60: "TOKAT",61: "TRABZON",62: "TUNCELİ",64: "UŞAK",65: "VAN",77: "YALOVA",66: "YOZGAT",67: "ZONGULDAK"
  }

  $scope.citychange = function(selectedCity){
    havadurumu.ne($scope.cities[selectedCity]).then(function(data){
      $scope.havanedurumda = data
      $state.go("app.weather")
    })
  }

  $scope.tiklandi = function(cityname){
    havadurumu.ne(cityname).then(function(data){
      $scope.havanedurumda = data
      $state.go("app.weather")
    })
  }
})
