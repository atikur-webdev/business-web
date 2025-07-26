// jquery for global btn to slide up and down
$(document).ready(() => {
    $(".global-btn").click(() => {
        $(".global-text").slideToggle('slow');
    });
})
// for counter
const counts = document.querySelectorAll('.count');
const speed = 357;
counts.forEach((counter) => {
    function upDate() {
        const target = Number(counter.getAttribute('data-target'));
        const count = Number(counter.innerText);
        const inc = target / speed;
        if(count < target) {
            counter.innerText = Math.floor(inc + count)
            setTimeout(upDate, 1);
        }else {
            counter.innerText = target;
        }
    }
    upDate()
})

// for gsap
gsap.from("body", { opacity: 0, duration: 1, ease: "power2.out" })
gsap.from("nav", { y: -50, opacity: 0, duration: 1, ease: "power2.out" });
gsap.from(".hero-content", { opacity: 0, duration: 1.5, delay: 0.5, ease: "power2.out" });


// for swiper slider
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});





// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <!-- bootstrap css cdn link -->
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
//     <!-- css link -->
//     <link rel="stylesheet" href="practise.css">
//     <!-- font awasome cdn link -->
//     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
// </head>
// <body>
// <div class="custom-container">
// <header>
// <nav class="navbar navbar-expand-lg custom-nav">
//     <!-- <div class="container-fluid"> -->
//         <a href="#" class="navbar-brand nav-img">
//             <img src="G:\BusinessProject\image for new project\logo\logo-retina-free-img.png">
//         </a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul class="navbar-nav nav-item-container">
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Home</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#" class="nav-link">About Us</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Blog</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Blog Details</a>
//             </li>
//             <li class="nav-item">
//                 <a href="#" class="nav-link">Conatct</a>
//             </li>
//         </ul>
//         <!-- <div class="emergency-contact">
//             <div class="emergency-number">
//                 <span>Emergency</span>
//                 <span>+91-125-9966</span>
//             </div>
//             <div class="emergency-btn">
//                 <button>Call anytime</button>
//             </div>
//            </div> -->
//       </div>
//     <!-- </div> -->
// </nav>
// </header>

// </div>







// <!-- jquery link -->
// <script src="js for jquery/jquery.js"></script>
// <!-- js link -->
// <script src="script.js"></script>
// <!-- bootstrap js cdn link -->
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
// </body>
// </html>

// @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
// * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// html,
// body {
//     height: 100%;
//     width: 100%;
//     font-family: 'Roboto', sans-serif;
//     background-color: black;
// }
// .custom-container {
//     height: 100vh;
//     width: 100%;
//     position: relative;
// }
// .custom-nav {
//     height: 60px;
//     background-color: #00111c;
//     color: white;
//     padding: 0 20px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }
// .nav-img img {
//     object-fit: cover;
//     height: 44px;
// }
// .nav-item-container a {
//     color: white;
// }
// .navbar-collapse {
//     display: flex;
//     justify-content: center;  /* Centering the navbar items */
//     width: 100%;
// }
// .nav-item-container {
//     display: flex;
//     gap: 30px;  /* Space between the nav items */
// }
// .emergency-contact {
//     display: flex;
//     gap: 10px;
//     align-items: center;
   
// }

// .emergency-contact .emergency-number {
//     font-weight: bold;
//     font-size: 16px;
//     letter-spacing: 1.2px;
// }

// .emergency-contact .emergency-number span {
//     display: block;
// }

// .emergency-contact button {
//     padding: 4px 15px;
//     background: #00406c;
//     border-radius: 5px;
//     border: none;
//     color: white;
//     transition: all 0.2s ease;
// }

// .emergency-contact button:hover {
//     background-color: transparent;
//     border: 1px solid #00406c;
// }