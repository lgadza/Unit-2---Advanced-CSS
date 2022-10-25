/* JS Exercises should go here */
// Write a JavaScript functionality to add a new link into the navbar
// Write a JavaScript functionality to change the color of the main heading title
// Write a JavaScript functionality to change the background of the jumbotron

// Write a JavaScript functionality to remove the “twitter” link under the “Elsewhere” section in the aside element. It should happen when the page loads, automatically

let newNavItem = document.querySelector(
  ".nav.d-flex.justify-content-between.mb-2"
);
let newItem = document.createElement("span");
newItem.innerText = "New";
newNavItem.appendChild(newItem);

let h1 = document.querySelector(".display-4.font-italic");
h1.style.color = "white";

let jumbotron = document.querySelector(".jumbotron");
jumbotron.style.backgroundColor = "coral";

let removeTwitter = document.querySelector(
  ".blog-sidebar > :nth-child(3) ol > :nth-child(2)"
);
console.log(removeTwitter);
function removeTwiter() {
  removeTwitter.remove();
  removeTwiter.innerHtml = "";
}
removeTwiter();

//Write a JavaScript functionality to remove the first 50 characters in the first paragraph for every blog post

let firstP = document.querySelectorAll(".blog-post > :nth-child(3)");
// console.log(firstP[0].textContent.slice(50));
function trimEle() {
  for (let i = 0; i <= firstP; i++) {
    firstP[i].textContent.trim().slice(50);
  }
}
trimEle();

// Write a JavaScript functionality to add a new Blog Post (div with title and text)
let container = document.querySelector(".container");
let newPost = document.createElement("div");
newPost.classList = "blog-post";
let h2 = document.createElement("h2");
h2.classList = "blog-post-title";
h2.innerText = "Last Blog Post";
let p1 = document.createElement("p");
p1.classList = "blog-post-meta";
p1.innerText = `December 23, 2013 by Louis`;

let p2 = document.createElement("p");
p2.innerText = `Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
              consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
              dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
              ut fermentum massa justo sit amet risus.`;

newPost.appendChild(h2);
newPost.appendChild(p1);
newPost.appendChild(p2);
container.appendChild(newPost);

// Write a JavaScript functionality to remove the last Blog Post when the user clicks on the "Older" button

let older = document.querySelector(".btn.btn-outline-primary");
let blogs = document.querySelectorAll(".blog-post");
console.log(blogs);
function removeLastBlog() {
  blogs[blogs.length - 1].remove();
}

older.addEventListener("click", removeLastBlog);

// Write a JavaScript functionality that will create an alert with the name of the author every time the user hovers the mouse on an author's name

let author = document.querySelectorAll(".blog-post-meta a");

for (let i = 0; i < author.length; i++) {
  author[i].addEventListener("mouseover", () => {
    alert(`${author[i].textContent}`);
  });
}

// EXTRA Write a JavaScript functionality that will remove the corresponding parent card from the DOM, upon clicking on their “Continue reading” link
let continue1 = document.querySelectorAll(".stretched-link");
let continue2 = document.querySelector(".font-weight-bold");
// continue2.textContent;

// console.log(continue2);
let card = document.querySelector(".jumbotron.p-4.p-md-5.rounded");
let cards = document.querySelectorAll(".col-md-6");

continue2.addEventListener("click", () => {
  //   card.style.display = "hide";
  card.remove();
});
for (let i = 0; i < continue1.length; i++) {
  continue1[i].addEventListener("click", () => {
    cards[i + 1].remove();
  });
}
