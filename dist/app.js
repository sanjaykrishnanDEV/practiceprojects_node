// counter
var counterDisplay = Number(
  document.getElementById("counterDisplay").innerHTML
);
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const clickToChangeColor = document.getElementById("clickToChangeColor");

// counter
let counter = 0;
increase.addEventListener("click", () => {
  counter += 1;
  let result = Number(counterDisplay) - counter;
  document.getElementById("counterDisplay").innerHTML = result;
});

reset.addEventListener("click", () => {
  document.getElementById("counterDisplay").innerHTML = 0;
});

decrease.addEventListener("click", () => {
  counter--;
  let result = Number(counterDisplay) - counter;
  document.getElementById("counterDisplay").innerHTML = result;
});
// counter

//colorFlipper
clickToChangeColor.addEventListener("click", () => {
  const randomColor = Math.random().toString(16).substring(2, 8);
  document.getElementById("colorflipper").style.backgroundColor =
    "#" + randomColor;
  document.getElementById("clrvalue").innerHTML = "#" + randomColor;
});
//colorFlipper

// carousel
// let reviews = [{
//     img:"../src/user2.jpg",
//     name:"sanjay",
//     review:"Lorem ipsum dolor sit,amet consectetur adipisicing elit. Similique repudiandae rem atque placeat sint unde minus eos cum? Incidunt blanditiis ex earum ea magnam id?",
// },{
//     img:"../src/user3.jpg",
//     name:"Jaga",
//     review:"Lorem ipsum dolor sit,amet consectetur adipisicing elit. Similique repudiandae rem atque placeat sint unde minus eos cum? Incidunt blanditiis ex earum ea magnam id?",
// },
// {
//     img:"../src/user4.jpg",
//     name:"Harry",
//     review:"Lorem ipsum dolor sit,amet consectetur adipisicing elit. Similique repudiandae rem atque placeat sint unde minus eos cum? Incidunt blanditiis ex earum ea magnam id?",
// }]

// const previous = document.getElementById("prevReview");
// const next = document.getElementById("nextReview");
// const card = document.getElementById('card');
// let survivor = 2;
// previous.addEventListener("click",()=>{
//     card.innerHTML = `<img
//     src="../src/user${survivor}.jpg"
//     alt="user1"
//     class="rounded-full mt-4 w-[100px] relative"
//   />
//   <h4 class="text-center text-2xl">John</h4>
//   <div class="review border-2 w-[300px] p-3">
//     <p>
//       Im john health get+1.Bicyle rights turmeric chances before they sold
//       out chambray pop-up.Shaman growspieces coloring book.
//     </p>
//   </div>`;
// })
let rev = 0;
carousel(rev);

function previousReview() {
  rev = rev - 1;
  carousel(rev);
}

function nextReview() {
  rev = rev + 1;
  carousel(rev);
}

function carousel(review) {
  let reviews = document.getElementsByClassName("review__items");

  if (review >= reviews.length) {
    review = 0;
    rev = 0;
  }
  if (review < 0) {
    review = reviews.length - 1;
    rev = reviews.length - 1;
  }
  for (let i = 0; i < reviews.length; i++) {
    reviews[i].style.display = "none";
  }
  reviews[review].style.display = "block";
}
// carousel
//hamburger
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  console.log("log");
  document.getElementById("sidebar").classList.remove("hidden");
});
document.getElementById("closeSideBar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.add("hidden");
});
//hamburger

// openmodal
document.getElementById("openmodal").addEventListener("click", () => {
  // document.body.classList.add("blur-xl");
  document.getElementById("modalcontent").classList.remove("hidden");
  document.getElementById("modalcontent").classList.add("backdrop-blur");
});
// openmodal
// closemodal
document.getElementById("closemodal").addEventListener("click", () => {
  // document.body.classList.add("blur-xl");
  document.getElementById("modalcontent").classList.add("hidden");
  document.getElementById("modalcontent").classList.remove("backdrop-blur");
});
// closemodal

// timer
document.getElementById("timer").innerHTML = 20 + ":" + 0o0;
document.querySelector("#timerbutton").addEventListener("click", () => {
  startTimer();
  console.log("log");
});
function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  document.getElementById("timer").innerHTML = m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  } // add zero in front of numbers < 10
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}
// timer

// tab
const contactOne = document.getElementById("contactOne");
const contactTwo = document.getElementById("contactTwo");
const contactThree = document.getElementById("contactThree");

contactOne.addEventListener("click", () => {
  console.log("asefsdff");
  document.getElementById("content").innerHTML = `
    <p class="text-2xl text-center"><a href="https://www.linkedin.com/in/sanjaykrishnane/">
    Click to Goto My Linkedin</a></p>
            <p>90805654954</p>
    `;
});

contactTwo.addEventListener("click", () => {
  console.log("asefsdff");
  document.getElementById("content").innerHTML = `
    <p class="text-2xl">Sanjay krishnan</p>
            <p>9080565495</p>
    `;
});
contactThree.addEventListener("click", () => {
  console.log("asefsdff");
  document.getElementById("content").innerHTML = `
    <p class="text-xl p-4 flex flex-wrap">
    <a href="mailto:er.sanjaykrishnan@gmail.com">er.sanjaykrishnan@gmail.com</a></p>
            <p>984562174</p>
    `;
});
// tab
// random
document.getElementById("form").addEventListener("click", (e) => {
  e.preventDefault();
});
document.getElementById("groceryform").addEventListener("click", (e) => {
  e.preventDefault();
});
// array of 10 random paras
// // random
const para = [
  "The blinking light caught her attention. She thought about it a bit and couldn't remember ever noticing it before.",
  "That was strange since it was obvious the flashing light had been there for years.",
  " Now she wondered how she missed it for that amount of time and what other things in her small town she had failed to notice.",
  "He looked at the sand. Picking up a handful, he wondered how many grains were in his hand. Hundreds of thousands? the said under his breath. I need more.",
  "The computer wouldn't start. She banged on the side and tried again.",
  "Still nothing. She banged her closed fist against the top.",
];
// array of 10 random paras
const input = document.getElementById("inputvalue");
const paramaker = document.getElementById("paramaker");
paramaker.addEventListener("click", () => {
  if (input.value == 0) {
    alert("Add a valid value");
  }
  let string = "";
  for (let i = 0; i < input.value; i++) {
    let randomselector = Math.floor(Math.random() * para.length);
    string += para[randomselector];
  }
  document.getElementById("generated").innerHTML = `<p>${string}</p>`;
});
document.getElementById("paraclear").addEventListener("click", () => {
  document.getElementById("generated").innerHTML = `<p>Try Generating</p>`;
});
// // random

// //groceryList
// selecting elements
const alerts = document.getElementById("alert");
const form = document.getElementById("groceryform");
const grocery = document.getElementById("grocery");
const submitBtn = document.getElementById("additemsbtn");
const list = document.getElementById("grocery-list");

//edit
let editelement;
let editFlag = false;
let editId = "";
//clear
const clearbtn = document.getElementById("clritemsbtn");
clearbtn.addEventListener("click", (e) => {
  e.preventDefault();
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
      localStorage.clear();
    });
  }
  // if(){}
});
//clear
// eventlisteners
//form
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let Id = Math.ceil(Math.random() * 5125);
  if (grocery.value && !editFlag) {
    const elem = document.createElement("article");
    elem.classList.add("grocery-item");
    const attr = document.createAttribute("data-id");
    attr.value = Id;
    elem.setAttributeNode(attr);
    elem.innerHTML = `
        <div class="flex justify-between border p-2">
        <p>${grocery.value}</p>
        <div class="btns flex ">
            <span class="me-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
              </svg>
              </span>
            <span class="cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </span>
        </div>
        </div>
        `;
    list.appendChild(elem);
    alertsy("successfully added", "bg-teal-600");
    toLocalStorage(attr.value, grocery.value);
    toDefault();
  } else if (grocery.value && editFlag) {
  } else {
    alertsy("enter a valid value", "bg-red-500");
  }
});

function toLocalStorage(key, value) {
  localStorage.setItem(key, value);
}

function toDefault() {
  grocery.value = "";
  editFlag = false;
}

function alertsy(attr1, attr2) {
  alerts.textContent = attr1;
  alerts.classList.add(attr2);
  setTimeout(function () {
    alerts.textContent = "";
    alerts.classList.remove(attr2);
  }, 1500);
}

//groceryList

let slideIndex = 0;
showSlides(); // call showslide method

function showSlides() {
  let i;

  // get the array of divs' with classname image-sliderfade
  let slides = document.getElementsByClassName("slider-container");

  // get the array of divs' with classname dot
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    // initially set the display to
    // none for every image.
    slides[i].style.display = "none";
  }

  // increase by 1, Global variable
  slideIndex++;

  // check for boundary
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Change image every 2 seconds
  setTimeout(showSlides, 2000);
}

// rockpaper
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
let compInitscore = 0;
let userInitScr = 0;
let data = ["Rock", "paper", "sci"];
let comscore = document.getElementById("comscore");
let userscore = document.getElementById("userscore");
let displaycomp = document.getElementById("displaycomp");
let displayuser = document.getElementById("displayuser");
let resetGame = document.getElementById("resetGame");

rock.addEventListener("click", () => {
  let computerInput = Math.floor(Math.random() * 3);
  if (data[computerInput] === "paper") {
    //displaycomp.innerText = "Computer : "+data[computerInput];
    let compinitscr = String(compInitscore++);
    comscore.textContent = "Computer : " + compinitscr;
  } else if (data[computerInput] === "sci") {
    let userIntScr = String(userInitScr++);
    userscore.textContent = "User : " + userIntScr;
  } else {
    console.log("draw");
  }
});
paper.addEventListener("click", () => {
  let computerInput = Math.floor(Math.random() * 3);
  if (data[computerInput] === "Rock") {
    let userIntScr = String(userInitScr++);
    userscore.textContent = "user : " + userIntScr;
  } else if (data[computerInput] === "sci") {
    let compinitscr = String(compInitscore++);
    comscore.textContent = "Computer : " + compinitscr;
  }
});
scissor.addEventListener("click", () => {
  let computerInput = Math.floor(Math.random() * 3);
  if (data[computerInput] === "Rock") {
    let compinitscr = String(compInitscore++);
    comscore.textContent = "Computer : " + compinitscr;
  } else if (data[computerInput] === "paper") {
    let userIntScr = String(userInitScr++);
    userscore.textContent = "user : " + userIntScr;
  }
});

resetGame.addEventListener("click", () => {
  userscore.textContent = "user : 0";
  comscore.textContent = "computer : 0";
});

// rockpaper

//hotelmenu
const allitems = document.getElementById("allitems");
const breakfast = document.getElementById("breakfast");
const lunch = document.getElementById("lunch");
const drinks = document.getElementById("drinks");
const menu = [
  {
    title: "Idly",
    Quantity: "2pcs",
    cost: "Rs.30",
    img: "../src/hotel/idly.jpg",
    type: "breakfast",
  },
  {
    title: "Dosa",
    Quantity: "1pcs",
    cost: "Rs.50",
    img: "../src/hotel/dosa.jpg",
    type: "breakfast",
  },
  {
    title: "Poori",
    Quantity: "3pcs",
    cost: "Rs.50",
    img: "../src/hotel/poori.jpg",
    type: "breakfast",
  },
  {
    title: "pongal",
    Quantity: "100gm",
    cost: "Rs.60",
    img: "../src/hotel/pongal.jpg",
    type: "breakfast",
  },
  {
    title: "South indian Meal",
    Quantity: "1set",
    cost: "Rs.160",
    img: "../src/hotel/meal.jpg",
    type: "lunch",
  },
  {
    title: "Briyani",
    Quantity: "500gm",
    cost: "Rs.120",
    img: "../src/hotel/briyani.jpg",
    type: "lunch",
  },
  {
    title: "Curd Rice",
    Quantity: "200gm",
    cost: "Rs.60",
    img: "../src/hotel/curdrice.jpg",
    type: "lunch",
  },
  {
    title: "Sambar Sadham",
    Quantity: "200gm",
    cost: "Rs.60",
    img: "../src/hotel/sambar.jpg",
    type: "lunch",
  },
  {
    title: "Coffee",
    Quantity: "1",
    cost: "Rs.30",
    img: "../src/hotel/coffee.jpg",
    type: "drinks",
  },
  {
    title: "Tea",
    Quantity: "1",
    cost: "Rs.20",
    img: "../src/hotel/tea.jpg",
    type: "drinks",
  },
  {
    title: "Fresh Juice",
    Quantity: "1",
    cost: "Rs.20",
    img: "../src/hotel/juice.jpg",
    type: "drinks",
  },
  {
    title: "Rose milk",
    Quantity: "1",
    cost: "Rs.20",
    img: "../src/hotel/rosemilk.jpg",
    type: "drinks",
  },
];
menu.map((item) => {
  let items = document.createElement("div");
  items.innerHTML = `
    <div class="item flex flex-col 
    items-center  border border-red-100 p-2 w-[300px] h-[300px] m-3 text-center  hover:bg-slate-400">
        <img class="img h-[200px] w-[200px]"  src="${item.img}" alt="${item.title}">
        <div class="title text-2xl">${item.title}</div>
        <div class="qty">${item.Quantity}</div>
        <div class="price">${item.cost}</div>
    </div>`;
  // document.getElementById('image').setAttribute("src",'${items.img}');
  document.getElementById("menu_item").appendChild(items);
});
allitems.addEventListener("click", () => {
  const menuItems = document.getElementById("menu_item");
  while (menuItems.firstChild) {
    menuItems.removeChild(menuItems.firstChild);
  }
  menu.map((item) => {
    let items = document.createElement("div");
    items.innerHTML = `
        <div class="item flex flex-col 
        items-center  border border-red-100 p-2 w-[300px] h-[300px] m-3 text-center  hover:bg-slate-400">
            <img class="img h-[200px] w-[200px]"  src="${item.img}" alt="${item.title}">
            <div class="title text-2xl">${item.title}</div>
            <div class="qty">${item.Quantity}</div>
            <div class="price">${item.cost}</div>
        </div>`;
    // document.getElementById('image').setAttribute("src",'${items.img}');
    document.getElementById("menu_item").appendChild(items);
  });
});

breakfast.addEventListener("click", () => {
  const menuItems = document.getElementById("menu_item");
  while (menuItems.firstChild) {
    menuItems.removeChild(menuItems.firstChild);
  }
  const breakfastItems = menu.filter((item) => item.type === "breakfast");

  breakfastItems.map((item) => {
    let items = document.createElement("div");
    items.innerHTML = `
        <div class="item flex flex-col 
        items-center  border border-red-100 p-2 w-[300px] h-[300px] m-3 text-center  hover:bg-slate-400">
            <img class="img h-[200px] w-[200px]"  src="${item.img}" alt="${item.title}">
            <div class="title text-2xl">${item.title}</div>
            <div class="qty">${item.Quantity}</div>
            <div class="price">${item.cost}</div>
        </div>`;
    // document.getElementById('image').setAttribute("src",'${items.img}');

    document.getElementById("menu_item").appendChild(items);
  });
});
//lunch
lunch.addEventListener("click", () => {
  const menuItems = document.getElementById("menu_item");
  while (menuItems.firstChild) {
    menuItems.removeChild(menuItems.firstChild);
  }
  const lunchItems = menu.filter((item) => item.type === "lunch");

  lunchItems.map((item) => {
    let items = document.createElement("div");
    items.innerHTML = `
        <div class="item flex flex-col 
        items-center  border border-red-100 p-2 w-[300px] h-[300px] m-3 text-center  hover:bg-slate-400">
            <img class="img h-[200px] w-[200px]"  src="${item.img}" alt="${item.title}">
            <div class="title text-2xl">${item.title}</div>
            <div class="qty">${item.Quantity}</div>
            <div class="price">${item.cost}</div>
        </div>`;
    // document.getElementById('image').setAttribute("src",'${items.img}');

    document.getElementById("menu_item").appendChild(items);
  });
});

//drinks
drinks.addEventListener("click", () => {
  const menuItems = document.getElementById("menu_item");
  while (menuItems.firstChild) {
    menuItems.removeChild(menuItems.firstChild);
  }
  const drinks = menu.filter((item) => item.type === "drinks");

  drinks.map((item) => {
    let items = document.createElement("div");
    items.innerHTML = `
        <div class="item flex flex-col 
        items-center  border border-red-100 p-2 w-[300px] h-[300px] m-3 text-center  hover:bg-slate-400">
            <img class="img h-[200px] w-[200px]"  src="${item.img}" alt="${item.title}">
            <div class="title text-2xl">${item.title}</div>
            <div class="qty">${item.Quantity}</div>
            <div class="price">${item.cost}</div>
        </div>`;
    // document.getElementById('image').setAttribute("src",'${items.img}');

    document.getElementById("menu_item").appendChild(items);
  });
});
//hotelmenu
//nav on scrollup
// keep track of previous scroll position
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function () {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector(".nav").classList.remove("bg-red-500");
  } else {
    // user has scrolled down
    document.querySelector(".nav").classList.add("bg-red-500");
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});
//nav on scrollup

// video
const playbtn = document.getElementById("play");
const pausebtn = document.getElementById("pause");
const video = document.getElementById("vid");
playbtn.addEventListener("click", () => {
  video.play();
});
pausebtn.addEventListener("click", () => {
  video.pause();
});

// })
// video
