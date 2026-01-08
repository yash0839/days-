const reels = [
  {
    username: "yash_patil",
    likecount: 12400,
    isliked: true,
    commentcount: 85,
    caption: "Chasing dreams one step at a time 💫",
    video: "video1.mp3",
    userprofile: "https://images.unsplash.com/photo-1655705248503-f9739b7e20d5?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym13JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    sharecount: 45,
    isFollow: true
  },
  {
    username: "code_with_amit",
    likecount: 9820,
    isliked: true,
    commentcount: 310,
    caption: "JavaScript tips every beginner should know 🔥",
    video: "video2.mp3",
    userprofile: "https://images.unsplash.com/photo-1579774977974-46df38104894?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    sharecount: 220,
    isFollow: false
  },
  {
    username: "travel_diaries",
    likecount: 15400,
    isliked: true,
    commentcount: 540,
    caption: "Mountains are calling 🏔️",
    video: "video3.mp3",
    userprofile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufHwwfDB8fDB8",
    sharecount: 890,
    isFollow: true
  },
  {
    username: "fitness_freak",
    likecount: 6700,
    isliked: false,
    commentcount: 190,
    caption: "Consistency beats motivation 💪",
    video: "video4.mp3",
    userprofile: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    sharecount: 130,
    isFollow: false
  },
  {
    username: "food_lovers",
    likecount: 21000,
    isliked: true,
    commentcount: 760,
    caption: "Street food hits different 😋",
    video: "video5.mp3",
    userprofile: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    sharecount: 1020,
    isFollow: true
  },
  {
    username: "daily_quotes",
    likecount: 4300,
    isliked: false,
    commentcount: 95,
    caption: "Believe in yourself ✨",
    video: "video1.mp3",
    userprofile: "https://images.unsplash.com/photo-1655705248503-f9739b7e20d5?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym13JTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
    sharecount: 60,
    isFollow: true
  },
  {
    username: "tech_world",
    likecount: 8900,
    isliked: true,
    commentcount: 280,
    caption: "AI is changing the future 🤖",
    video: "video2.mp3",
    userprofile: "https://images.unsplash.com/photo-1579774977974-46df38104894?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcG9sZXxlbnwwfHwwfHx8MA%3D%3D",
    sharecount: 310,
    isFollow: false
  },
  {
    username: "music_vibes",
    likecount: 17800,
    isliked: true,
    commentcount: 620,
    caption: "Feel the rhythm 🎶",
    video: "video3.mp3",
    userprofile: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufHwwfDB8fDB8",
    sharecount: 540,
    isFollow: true
  },
  {
    username: "nature_clicks",
    likecount: 9600,
    isliked: false,
    commentcount: 210,
    caption: "Peace in every frame 🌿",
    video: "video4.mp3",
    userprofile: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    sharecount: 180,
    isFollow: false
  },
  {
    username: "startup_life",
    likecount: 5200,
    isliked: true,
    commentcount: 140,
    caption: "Build. Fail. Learn. Repeat 🚀",
    video: "video5.mp3",
    userprofile: "https://plus.unsplash.com/premium_photo-1669703777437-27602d656c27?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D",
    sharecount: 95,
    isFollow: true
  }
];

var sum = ' '
reels.forEach(function(elem){
    sum = sum+`<div class="reels">
                   <video autoplay loop muted src=${elem.video}></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userprofile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                      <div class="right">
                        <div class="like">
 <h4 class="like-icon icon">${elem.isliked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</h4>                            <h6>${elem.likecount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-1-line"></i></h4>
                            <h6>${elem.commentcount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-send-plane-2-line"></i></h4>
                            <h6>${elem.sharecount}</h6>
                        </div> 
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>
                            <h6>69</h6>
                        </div> 
                    </div>
                </div>`
})
console.log(sum);

var allReels = document.querySelector('.all-reels')

allReels.innerHTML = sum