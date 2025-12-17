var btn= document.querySelector("button");
var box= document.querySelector("#box");    

// btn.addEventListener('click',function(){
//     var c1 = Math.floor(Math.random()*256);
//     var c2 = Math.floor(Math.random()*256);
//     var c3 = Math.floor(Math.random()*256);

//     box.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
//     box.innerHTML=`rgb(${c1},${c2},${c3})`;
// })


var arr = [
  {
    shortForm: "CSK",
    fullName: "Chennai Super Kings",
    primaryColor: "Yellow",
    secondaryColor: "Blue",
    captain: "Ruturaj Gaikwad"
  },
  {
    shortForm: "MI",
    fullName: "Mumbai Indians",
    primaryColor: "Blue",
    secondaryColor: "Gold",
    captain: "Hardik Pandya"
  },
  {
    shortForm: "RCB",
    fullName: "Royal Challengers Bengaluru",
    primaryColor: "Red",
    secondaryColor: "Black",
    captain: "Faf du Plessis"
  },
  {
    shortForm: "KKR",
    fullName: "Kolkata Knight Riders",
    primaryColor: "Purple",
    secondaryColor: "Gold",
    captain: "Shreyas Iyer"
  },
  {
    shortForm: "RR",
    fullName: "Rajasthan Royals",
    primaryColor: "Pink",
    secondaryColor: "Blue",
    captain: "Sanju Samson"
  },
  {
    shortForm: "SRH",
    fullName: "Sunrisers Hyderabad",
    primaryColor: "Orange",
    secondaryColor: "Black",
    captain: "Pat Cummins"
  },
  {
    shortForm: "DC",
    fullName: "Delhi Capitals",
    primaryColor: "Blue",
    secondaryColor: "Red",
    captain: "Rishabh Pant"
  },
  {
    shortForm: "PBKS",
    fullName: "Punjab Kings",
    primaryColor: "Red",
    secondaryColor: "Silver",
    captain: "Shikhar Dhawan"
  },
  {
    shortForm: "GT",
    fullName: "Gujarat Titans",
    primaryColor: "Dark Blue",
    secondaryColor: "Gold",
    captain: "Shubman Gill"
  },
  {
    shortForm: "LSG",
    fullName: "Lucknow Super Giants",
    primaryColor: "Light Blue",
    secondaryColor: "Orange",
    captain: "KL Rahul"
  }
];
 var a = arr[Math.floor(Math.random()*arr.length)];
 console.log(a);
    box.style.backgroundColor = a.primaryColor;
    box.innerHTML=`${a.fullName} <br> Captain: ${a.captain}`;

    btn.addEventListener('click',function(){
        var a = arr[Math.floor(Math.random()*arr.length)];
        box.style.backgroundColor = a.primaryColor;
        box.innerHTML=`${a.fullName} <br> Captain: ${a.captain}`;
    })