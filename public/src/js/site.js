
const API_KEY = 'AIzaSyDWSkiwe3Ub6KSRSHhtwlG_M8D3-ldlEnU';

let btnGetUserLocation = document.getElementById("btnUserLocationData");


btnGetUserLocation.addEventListener('click',function(){

  let termToSearch = document.getElementById('termSearch').value

  if('geolocation' in navigator) {

    console.log("geolocation is supported..")

    navigator.geolocation.getCurrentPosition(function(position){
      let longitude = position.coords.longitude
      let latitude = position.coords.latitude
      console.log(position.coords.longitude)

      // console.log('https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword='+termToSearch+'&inputtype=textquery&fields=photo,formatted_address,name,type&location='+latitude+','+longitude+'&key='+API_KEY)
    
      console.log('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+latitude+','+longitude+'&radius=1500&keyword='+termToSearch+'&key='+API_KEY)


    })

  }


})
