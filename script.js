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
  tl.from("[animation='zoomin']", {
    scale: "1.2",
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

$(".section.is--cta").each(function (index) {
  let targetparent = $(this).find(".cta--img-parent");
  let target = $(this).find(".home--hero--img-bg");
  let target2 = $(this).find(".home--hero--img-bg-1");
  let target3 = $(this).find(".home--hero--img-bg-2");
  let target4 = $(this).find(".home--hero--img-bg-3");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top center",
      end: "bottom center",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true,
    },
  });
  tl.from(
    targetparent,
    {
      opacity: 0,
    },
    0
  );
  tl.from(
    target,
    {
      scale: 1.2,
    },
    0
  );
  tl.from(
    target2,
    {
      scale: 1.4,
      y: "40rem",
    },
    0
  );
  tl.from(
    target3,
    {
      scale: 1.6,
      y: "20rem",
    },
    0
  );
  tl.from(
    target4,
    {
      scale: 1.8,
      y: "10rem",
    },
    0
  );
});
