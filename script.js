// split start
let texthero;

// Split the text up
function runSplit() {
  texthero = new SplitType("[animation='split-stagger-hero']", {
    types: "lines, words",
    lineClass: "split-line",
    wordClass: "is--scroll-hero-scrub",
  });
}

runSplit();

// split type ends

gsap.registerPlugin(ScrollTrigger);

// On Page Load
function pageLoad() {
  let tl = gsap.timeline();
  tl.to(".main-wrapper", {
    opacity: 1,
    ease: "Quint.easeOut",
    duration: 0.3,
  });
  tl.from(".is--scroll-hero-scrub", {
    y: "100%",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 0.6,
  });
  tl.from("[animation='loading']", {
    y: "20rem",
    opacity: "0",
    stagger: { each: 0.1, from: "start" },
    ease: "Quint.easeOut",
    duration: 0.6,
    delay: -0.6,
  });
}
pageLoad();

$("[animation='fade-in']").each(function (index) {
  let target = $(this);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom -=200",
    },
  });

  tl.from(
    target,
    {
      y: "20rem",
      opacity: 0,
      ease: "Quint.easeOut",
      duration: 1,
    },
    0
  );
});

// navbar color
$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    if (scrollTop >= 100) {
      $(".navbar").addClass("is--scrolled");
    } else if (scrollTop < 100) {
      $(".navbar").removeClass("is--scrolled");
    }
  });
});
