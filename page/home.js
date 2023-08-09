$(".section.is--home-afterhero").each(function (index) {
  let targetparent = $(this).find(".home--hero-image-wrapper");
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

$(".section.is-home-terraria").each(function (index) {
  let target = $(this).find(".relative");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
      end: "top center",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true,
    },
  });
  tl.from(
    target,
    {
      scale: 0.6,
    },
    0
  );
});

$(".section.is-home-logos").each(function (index) {
  let target = $(".section.is-home-terraria");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "top bottom",
      end: "top top",
      ease: "Quint.easeOut",
      duration: 1,
      scrub: true,
    },
  });
  tl.to(
    target,
    {
      scale: 0.6,
    },
    0
  );
});

// PAGE COLOR POWER-UP
window.addEventListener("DOMContentLoaded", (event) => {
  // attribute value checker
  function attr(defaultVal, attrVal) {
    const defaultValType = typeof defaultVal;
    if (typeof attrVal !== "string" || attrVal.trim() === "") return defaultVal;
    if (attrVal === "true" && defaultValType === "boolean") return true;
    if (attrVal === "false" && defaultValType === "boolean") return false;
    if (isNaN(attrVal) && defaultValType === "string") return attrVal;
    if (!isNaN(attrVal) && defaultValType === "number") return +attrVal;
    return defaultVal;
  }
  // pagecolor trigger
  $("[tr-pagecolor-element='trigger']").each(function (index) {
    // elements
    let triggerEl = $(this),
      targetEl = $(".body");
    // settings
    let classSetting = attr(
      "after-hero-body",
      triggerEl.attr("tr-pagecolor-class")
    );
    // result
    ScrollTrigger.create({
      trigger: triggerEl,
      start: "top center",
      end: "bottom center",
      onToggle: ({ self, isActive }) => {
        if (isActive) {
          targetEl.addClass(classSetting);
        } else {
          targetEl.removeClass(classSetting);
        }
      },
    });
  });
});

// slider
document.addEventListener("DOMContentLoaded", function () {
  let splide = new Splide(".slider-pastprojects", {
    type: "slide",
    perPage: 2,
    perMove: 1,
    gap: "48rem",
    breakpoints: {
      991: {
        // Tablet
        arrows: false,
        gap: "24rem",
      },
    },
  });
  splide.mount();
});
