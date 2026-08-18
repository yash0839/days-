let users = [
    {
        name: "Aarav Sharma",
        pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
        bio: "Frontend developer who loves creating clean and modern websites."
    },
    {
        name: "Ananya Patel",
        pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        bio: "UI/UX designer passionate about beautiful and simple user experiences."
    },
    {
        name: "Rohan Mehta",
        pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
        bio: "Full stack developer who enjoys learning new technologies."
    },
    {
        name: "Priya Deshmukh",
        pic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
        bio: "Creative designer who enjoys photography and traveling."
    },
    {
        name: "Aditya Joshi",
        pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
        bio: "JavaScript developer building interactive web applications."
    },
    {
        name: "Sneha Kulkarni",
        pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
        bio: "Software engineer who loves solving problems with code."
    }
];


function showUser(arr) {

    const cardsContainer = document.querySelector(".cards");

    arr.forEach(function(user){

        const card = document.createElement("div");
        card.classList.add("card");


        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");


        const blurredLayer = document.createElement("div");
        blurredLayer.classList.add("blurred-layer");

        blurredLayer.style.backgroundImage = `url(${user.pic})`;


        const content = document.createElement("div");
        content.classList.add("content");


        const heading = document.createElement("h3");
        heading.innerText = user.name;


        const para = document.createElement("p");
        para.innerText = user.bio;


        content.appendChild(heading);
        content.appendChild(para);


        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);


        cardsContainer.appendChild(card);

    });

}

showUser(users);


let input = document.querySelector('.input');

inp.addEventListener("input", function(){

    let newUser = users.filter((user)=>{

        return user.name.startsWith(input.value);

    });



    showUser(newUser);

});