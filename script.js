//Sticky Navbar
window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 250);
});

//Side navbar

////Menu icon
const menuIcon = document.querySelector(".fa-bars");
const sideNavbar = document.querySelector(".collapse");
const menuIconX = document.querySelector(".fa-x");
const closeMenu = document.querySelector(".burgerMenu");
menuIcon.addEventListener("click", mobileNavBar);

function mobileNavBar() {
  sideNavbar.classList.toggle("show");
}

closeMenu.addEventListener("click", closemobileNavBar);

function closemobileNavBar() {
  sideNavbar.classList.remove("show");
}

//Fade animation
const leftCards = document.querySelectorAll(".left-card");
const rightCards = document.querySelectorAll(".right-card");
const topCards = document.querySelectorAll(".top-card");
const appearOptions = { treshold: 0, rootMargin: "0px 0px -200px 0px" };

////Left side
const leftCardAppear = new IntersectionObserver(function (
  entries,
  leftCardAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("left-show");
      leftCardAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

leftCards.forEach((leftCard) => {
  leftCardAppear.observe(leftCard);
});

////Right side

const rightCardAppear = new IntersectionObserver(function (
  entries,
  rightCardAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("right-show");
      rightCardAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

rightCards.forEach((rightCard) => {
  rightCardAppear.observe(rightCard);
});

////Top side

const topCardAppear = new IntersectionObserver(function (
  entries,
  topCardAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("top-show");
      topCardAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

topCards.forEach((topCard) => {
  topCardAppear.observe(topCard);
});

//Fade animation for "Contact us" section
const topTitles = document.querySelectorAll(".top-title");
const bottomTitles = document.querySelectorAll(".bottom-title");

////From top

const topTitleAppear = new IntersectionObserver(function (
  entries,
  topTitleAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("top-title-show");
      topTitleAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

topTitles.forEach((topTitle) => {
  topTitleAppear.observe(topTitle);
});

////From bottom

const bottomTitleAppear = new IntersectionObserver(function (
  entries,
  bottomTitleAppear
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("bottom-title-show");
      bottomTitleAppear.unobserve(entry.target);
    }
  });
},
appearOptions);

bottomTitles.forEach((bottomTitle) => {
  bottomTitleAppear.observe(bottomTitle);
});
