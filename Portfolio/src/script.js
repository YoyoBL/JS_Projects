const projects = [
   {
      title: "Expenses-Tracker",
      link: "https://yoyobl.github.io/Expenses_Tracker",
      gitHubLink: "https://github.com/YoyoBL/Expenses_Tracker",
      description: `Keep better track of your expenses with this handy tool. <br> 
      It lets you create as many different expense lists as you need, <br>
       making it simple to manage and organize your financial records. <br>`,
   },
   {
      title: "Trivia",
      link: "https://yoyobl.github.io/To_do_list",
      gitHubLink: "https://github.com/YoyoBL/Trivia",
      description: `Exciting webpage trivia game with multiple categories. <br>
       Test your knowledge, earn points, and have fun while learning new facts!`,
   },
   {
      title: "Todo-Lists",
      link: "https://yoyobl.github.io/To_do_list",
      gitHubLink: "https://github.com/YoyoBL/To_do_list",
      description: `Never forget a task again with this intuitive to-do app! <br>
       Easily create and track everything you need to do. <br>
        Plus, you can even organize your tasks into multiple lists for better organization and efficiency. <br>`,
   },
   {
      title: "Cards Memory Game",
      link: "https://yoyobl.github.io/Memory_Game_Cards",
      gitHubLink: "https://github.com/YoyoBL/Memory_Game_Cards",
      description: `Have fun with this enjoyable memory card game!  <br>
      If you're looking for more of a challenge, <br>
       you can increase the difficulty level and test your skills! <br>`,
   },
   {
      title: "Snake Game",
      link: "https://yoyobl.github.io/Snake",
      gitHubLink: "https://github.com/YoyoBL/Snake",
      description: `Experience a wave of nostalgia with this classic Snake game that takes you on a trip down memory lane. <br>
       Some things never lose their charm! <br>
       Designed to enhance your vintage gaming experience, it's a timeless delight. <br>`,
   },
   {
      title: "Full-Stack Course Summary",
      link: "https://yoyobl.github.io/summary_bootstrap",
      gitHubLink: "https://github.com/YoyoBL/summary_bootstrap",
      description: `Access a comprehensive summary of the full stack course, <br>
       personally written by me. <br>
        It provides all the necessary information to refresh your memory and covers every essential aspect in a concise format <br>`,
   },
];

const $projects = document.getElementById("projects");
const $homeScreen = document.getElementById("home-screen");
const $about = document.getElementById("about");
const $navLinks = document.querySelectorAll(".nav-link");
// console.log($navItems);

let currentSection = 0;
const sections = [$homeScreen, $about, $projects];

console.log($homeScreen);

function generateProjectCardsHtml() {
   let html = "";

   for (let { title, link, gitHubLink, description } of projects) {
      html += `
        <div class="col-12 col-lg-4 center-all ">
               <div class="card h-100 justify-content-between" >
                <a class="text-black text-decoration-none" href="${link}" target="_blank">
                    <img
                        src="./images/Sites_thumbnails/${title}.png"
                        class="card-img-top"
                        alt="${title}"
                    />
                  <div class="card-body">
                     <h5 class="card-title">${title}</h5>
                     <p class="card-text">
                        ${description}
                     </p>
                  </div>
                  </a>
                  <div class="list-group list-group-flush">
                     <a
                        href="${gitHubLink}"
                        class="list-group-item list-group-item-action"
                        target="_blank"
                        ><i class="bi bi-github"></i> Git Link</a
                     >
                     
                  </div>
               </div>
            </div>
        `;
   }
   return html;
}

function renderSite() {
   $projects.innerHTML = generateProjectCardsHtml();
}

renderSite();
// window.addEventListener("load", function () {
//    window.scrollTo(0, 0);
// });

// window.addEventListener(
//    "wheel",
//    (e) => {
//       if (e.deltaY < 0) {
//          if (currentSection >= 0) {
//             e.preventDefault();
//             currentSection = currentSection === 0 ? 0 : currentSection - 1;
//             sections[currentSection].scrollIntoView({ behavior: "smooth" });
//             console.log("UP", currentSection);
//          }
//       } else if (e.deltaY > 0) {
//          if (currentSection < sections.length) {
//             e.preventDefault();
//             currentSection = currentSection === 2 ? 2 : currentSection + 1;
//             sections[currentSection].scrollIntoView({ behavior: "smooth" });
//             console.log("DOWN", currentSection);
//          }
//       }
//    },
//    { passive: false }
// );

window.addEventListener("click", (e) => {
   if (e.target.closest(".navbar-nav")) {
      for (const navLink of $navLinks) {
         navLink.classList.remove("active");
      }
      //   debugger;
      e.target.classList.add("active");
   }
});
