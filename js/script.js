///////////////////////////////////////////////////////////
"use strict";

// Copyright Year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Mobile Navigation
const headerEl = document.querySelector(".header");
const menuBtnEl = document.querySelector(".btn-mobile-nav");

menuBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//Smooth scrolling fix for older versions of Safari
const allLinks = document.querySelectorAll("a:link");

//Implementing Smooth Scrolling
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //Scroll to links
    if (href.startsWith("#") && href !== "#") {
      document.querySelector(href).scrollIntoView({behavior: "smooth"});
    }

    //Collapse mobile nav
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

//Implementing Sticky Navigation
const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      headerEl.classList.add("sticky");
      sectionHeroEl.style.marginTop = "9.6rem";
    }

    if (ent.isIntersecting) {
      headerEl.classList.remove("sticky");
      sectionHeroEl.style.marginTop = "0";
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

observer.observe(sectionHeroEl);
