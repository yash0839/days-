const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profession: "Web Developer",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    fullName: "Priya Verma",
    image: "https://images.unsplash.com/photo-1601288496920-b6154fe3626a?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmxzfGVufDB8fDB8fHww",
    profession: "UI/UX Designer",
    tags: ["Figma", "UI Design", "Creativity"]
  },
  {
    fullName: "Rohit Patil",
    image: "https://images.unsplash.com/photo-1559893088-c0787ebfc084?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    profession: "Software Engineer",
    tags: ["Java", "DSA", "Problem Solving"]
  },
  {
    fullName: "Neha Kulkarni",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHN8ZW58MHx8MHx8fDA%3D",
    profession: "Digital Marketer",
    tags: ["SEO", "Social Media", "Branding"]
  },
  {
    fullName: "Karan Deshmukh",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D",
    profession: "Mobile App Developer",
    tags: ["Flutter", "Android", "iOS"]
  }
];


// users.forEach(function(user){
//     console.log(user.fullName);
// })

// users.forEach(function(elem){
//     console.log(elem.fullName);
//     console.log(elem.profession);
// })

var sum =' '
users.forEach(function(elem){
    sum = sum +` <div class="card">
            <div>
            <img src="${elem.image}" alt="">
            <!-- <i id="love" class="ri-heart-3-fill"></i> -->
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.tags}</p>
           </div>
        </div>`
})

var main=document.querySelector('main')
   main.innerHTML = sum;