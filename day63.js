// scenio 1: weather dashborard with error handling 

//Build a small weather dashborsd that fetch currernt weather data from any public weather API (such as openweatherAppMap).
//tou must make the API request asychronouslu using fetch with async/await.
//if the api request fail for example due to an invalid city name, you must handle the error using try / catch 
// additionally create and throw custom error based on wether consitions.
// for ex if ther temp is extremely hight or extrimlly low throw a custom error and handle it properly in your code.


// let url = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={06dc5a4b6e0f4675ad89cc775780a1c4}`;


// async function getWeather(city){
//     try{
//     let apikey = '06dc5a4b6e0f4675ad89cc775780a1c4';

//  let raw =await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
 
//  if(!raw.ok){
//     throw new Error("city not found, try something else.");
//  }
//  let realdata = raw.json();
//  console.log(realdata);
// }catch(err){
//     console.erroe(err.message);
// }
// }

// getWeather('delhi');





//scenario2 : bulk email sending simulation with parallel promision and error handling 

// ek array hoga of emails   