$(".section.is--home-afterhero").each(function (index) {
  let targetparent = $(".home--hero-image-wrapper");
  let target = $(".home--hero--img-bg");
  let target2 = $(".home--hero--img-bg-1");
  let target3 = $(".home--hero--img-bg-2");
  let target4 = $(".home--hero--img-bg-3");

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
