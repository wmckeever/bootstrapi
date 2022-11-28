//*<--------------- Dog Image Generator API --------------->*//
//*<------------------------------------------------------>*//

// API url - https://dog.ceo/api/breeds/image/random
//*<--------------- Query Selectors --------------->*//
let img = document.querySelector('#dogImages');
let button = document.querySelector('.btn');



//*<--------------- Dog API Code --------------->*//

fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
        //console.log(response.json());
              return response.json()
    })
    .then(function(data){
       
        img.src = data.message;
    })

button.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data);
    console.log(data.message); 
    img.src = data.message
  })
});


//*<--------------- Dog Image Generator API --------------->*//
//*<------------------------------------------------------>*//

//API url - https://goweather.herokuapp.com/weather/{city}

//*<--------------- Query Selectors --------------->*//
let weatherForm = document.querySelector('#weatherForm');
let cityInput = document.querySelector('#validationCustom03');
 

let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
let descript = document.querySelector('#descript');



//*<--------------- Weather API Code --------------->*//

weatherForm.addEventListener('submit', (event) => {

  event.preventDefault();

fetch(encodeURI(`https://goweather.herokuapp.com/weather/{${cityInput.value}}`))
    .then(function(response){
            return response.json()
    })
      .then(function(data){
        console.log(data);
        temp.innerHTML = "The current temperature is " + data.temperature
        wind.innerHTML = "The current wind is: " +  data.wind
        descript.innerHTML = "Weather Description: " + data.description
        
        
      })
      cityInput.value = "";
});