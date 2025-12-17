import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import lottie from "lottie-web";

gsap.registerPlugin(ScrollTrigger);


function animateCounter() {
  const counter = { value: 0 };
  const counterElement = document.querySelector("#counter-7000");

  if (!counterElement) return;

  ScrollTrigger.create({
    trigger: "#slide-1",
    start: "top center",
    onEnter: () => {
      gsap.to(counter, {
        value: 7000,
        duration: 0.8,
        ease: "power1.out",
        onUpdate: () => {
          const formatted = Math.floor(counter.value)
            .toString()
            .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
          counterElement.textContent = formatted;
        },
      });
    },
    once: false,
  });
}

function setupScrollFlow() {
  const container = document.querySelector(".scroll-container");
  const fallingItems = document.querySelectorAll(".falling__item");

  fallingItems.forEach((item) => {
    item.style.left = Math.random() * 90 + "%";
    item.style.width = Math.random() * 80 + 120 + "px";
  });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll-container",
      start: "top top",
      end: "+=35000",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        gsap.to(".progress__bar", {
          width: self.progress * 100 + "%",
          duration: 0.1,
        });
      },
    },
  });

    /* ============================================================
      SLIDE 1 - VÊTEMENTS QUI TOMBENT + COMPTEUR 7000
      ============================================================ */
  tl.addLabel("slide1");
  tl.to(container, { x: 0, y: "-100vh", ease: "none" }, "slide1");
  tl.fromTo(
    ".falling__item",
    { y: "-50vh", rotation: -45 },
    {
      y: "150vh",
      rotation: "random(-180, 180)",
      x: "random(-200, 200)",
      ease: "none",
      stagger: { amount: 0.5, from: "random" },
    },
    "slide1"
  );
  tl.fromTo(
    "#slide-1 .slide__content",
    { opacity: 0, scale: 0.8 },
    { opacity: 1, scale: 1, ease: "back.out(1.7)" },
    "slide1+=0.3"
  );

    /* ============================================================
      SLIDE 2 - GRILLE T-SHIRTS 7/10
      ============================================================ */
  tl.to(container, { x: "-100vw", y: "-100vh", ease: "none" });
  tl.addLabel("slide2-anim");
  tl.to(
    ".tshirts__icon",
    { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(2)", stagger: 0.1 },
    "slide2-anim"
  );
  tl.to(
    ".slide__content--reveal",
    { opacity: 1, y: 0, duration: 0.8 },
    ">-=0.3"
  );

    /* ============================================================
      SLIDE 3 - FERMETURE ÉCLAIR 7200 VÊTEMENTS
      ============================================================ */
  // tl.to(container, { x: "-100vw", y: "-200vh", ease: "none" });
  // tl.addLabel("slide3-anim");
  // tl.fromTo(
  //   ".zipper__pull",
  //   { top: "-15vh" },
  //   { top: "115vh", ease: "none" },
  //   "slide3-anim"
  // );
  // tl.fromTo(
  //   ".zipper__panel--left",
  //   { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  //   { clipPath: "polygon(0 0, 0% 0, 60% 100%, 0% 100%)", ease: "none" },
  //   "slide3-anim"
  // );
  // tl.fromTo(
  //   ".zipper__panel--right",
  //   { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
  //   { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 40% 100%)", ease: "none" },
  //   "slide3-anim"
  // );
  // tl.to(
  //   "#slide-3 .slide__content",
  //   { opacity: 0, scale: 0.9, duration: 0.5 },
  //   "slide3-anim"
  // );

    /* ============================================================
      SLIDE 4 - ARMOIRE 50% VÊTEMENTS INUTILISÉS
      ============================================================ */
  tl.to(container, { x: "-100vw", y: "-300vh", ease: "none" });
  tl.addLabel("slide4-anim");
  tl.fromTo(
    ".wardrobe__text",
    { opacity: 0, x: -50 },
    { opacity: 1, x: 0, ease: "power2.out" },
    "slide4-anim"
  );
  tl.to(
    ".wardrobe__door--top",
    { xPercent: 110, ease: "power2.inOut", duration: 1.5 },
    "slide4-anim+=0.2"
  );
  tl.to(
    ".wardrobe__clothes",
    {
      bottom: "10%",
      opacity: 1,
      ease: "back.out(1.5)",
      stagger: 0.15,
      duration: 0.8,
    },
    "slide4-anim+=0.8"
  );

    /* ============================================================
      SLIDE 5 - GRAPHIQUE ÉTIQUETTES (4ÈME IMPACT)
      ============================================================ */
  tl.to(container, { x: "-200vw", y: "-300vh", ease: "none" });
  tl.addLabel("slide5-anim");
  tl.to(
    ".chart__bar",
    {
      height: (i, target) =>
        getComputedStyle(target).getPropertyValue("--target-height"),
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2,
    },
    "slide5-anim"
  );
  tl.to(
    ".tag__content",
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2,
    },
    "slide5-anim+=0.5"
  );

    /* ============================================================
      SLIDE 6 - CADENCE DE TRAVAIL (HORLOGE + PIÈCES)
      ============================================================ */
  tl.to(container, { x: "-300vw", y: "-300vh", ease: "none" });
  tl.addLabel("slide6-anim");

  const clockDuration = 3;

  tl.to(
    ".hand-minute",
    {
      rotation: 720,
      duration: clockDuration,
      ease: "power1.inOut",
      transformOrigin: "bottom center",
    },
    "slide6-anim"
  );

  tl.to(
    ".hand-hour",
    {
      rotation: 120,
      duration: clockDuration,
      ease: "power1.inOut",
      transformOrigin: "bottom center",
    },
    "slide6-anim"
  );

  tl.to(
    ".clock-pie",
    {
      strokeDashoffset: 300,
      duration: clockDuration,
      ease: "power1.inOut",
    },
    "slide6-anim"
  );

  tl.fromTo(
    ".coin",
    { y: -600, opacity: 0, rotation: -180 },
    {
      y: 0,
      opacity: 1,
      rotation: 0,
      duration: 1.2,
      ease: "bounce.out",
      stagger: 0.15,
    },
    "slide6-anim+=0.5"
  );

    /* ============================================================
      SLIDE 7 - 7 000 LITRES D'EAU
      ============================================================ */
  tl.to(container, { x: "-300vw", y: "-400vh", ease: "none" });
  tl.addLabel("slide7-anim");

  tl.to(
    ".water__jet",
    { height: "100%", duration: 0.8, ease: "power1.in" },
    "slide7-anim"
  );

  tl.to(
    ".water__layer",
    {
      y: "0%",
      duration: 2.5,
      ease: "power2.out",
    },
    "slide7-anim+=0.5"
  );

  tl.to(
    ".water__bottom-text",
    { opacity: 1, duration: 1, y: -20 },
    "slide7-anim+=1.5"
  );

  gsap.to(".water__wave--front", {
    x: "-5%",
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  gsap.to(".water__wave--back", {
    x: "5%",
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

    /* ============================================================
      SLIDE 8 - RANA PLAZA (EFFONDREMENT)
      ============================================================ */

  tl.to(container, { x: "-300vw", y: "-500vh", ease: "none" });
  tl.addLabel("slide8-anim");

  tl.fromTo(
    ".building__svg", 
    { y: "100%" }, 
    { y: "0%", duration: 1, ease: "power2.out" }, 
    "slide8-anim"
  );


  tl.to(
    [".rana__header", ".rana__col-right"], 
    { opacity: 1, duration: 1, stagger: 0.3 }, 
    "slide8-anim+=0.5"
  );


  
  const getSortedWindows = () => {

    const windows = Array.from(document.querySelectorAll(".building__svg rect[fill='#fbd236']"));

    return windows.sort((a, b) => {
      const yA = parseFloat(a.getAttribute("y"));
      const yB = parseFloat(b.getAttribute("y"));
      return yA - yB;
    });
  };


  tl.to(
    getSortedWindows(), 
    { 
      fill: "#000000", 
      duration: 0.1, 
      stagger: 0.05 
    },
    "slide8-anim+=1.5"
  );

  tl.to(
    ".building__svg", 
    { 
      x: "+=15", 
      yoyo: true, 
      repeat: 10, 
      duration: 0.05 
    },
    ">"
  );

  tl.to(
    ".building__svg", 
    {
      y: "150vh", 
      rotation: 5, 
      opacity: 0,
      duration: 1.5,
      ease: "power2.in",
    },
    ">"
  );

    /* ============================================================
      SLIDE 9 - RECYCLAGE 36,4%
      ============================================================ */
  tl.to(container, { x: "-400vw", y: "-500vh", ease: "none" });
  tl.addLabel("slide9-anim");
  tl.to(
    ".bins",
    { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
    "slide9-anim"
  );
  const recyclingItems = document.querySelectorAll(".recycling__item");

  recyclingItems.forEach((item, index) => {
    const delay = gsap.utils.random(0.5, 2.5);
    const itemTl = gsap.timeline({ delay: delay });
    const side = Math.random() < 0.5 ? -1 : 1;
    const minDist = 100;
    const maxDist = 500;
    const randomX = side * gsap.utils.random(minDist, maxDist);

    itemTl.set(item, {
      y: "-30vh",
      xPercent: -50,
      x: randomX,
      rotation: gsap.utils.random(-180, 180),
      opacity: 1,
      scale: gsap.utils.random(0.8, 1.2),
    });
    itemTl.to(item, {
      y: "50vh",
      rotation: "+=random(180, 360)",
      duration: gsap.utils.random(1, 1.5),
      ease: "power1.in",
    });
    itemTl.to(
      item,
      {
        y: "80vh",
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: "power1.out",
      }
    );

    tl.add(itemTl, "slide9-anim");
  });

    /* ============================================================
      SLIDE 10 - AFRIQUE / GHANA
      ============================================================ */
  
  tl.to(container, { x: "-500vw", y: "-500vh", ease: "none" });
  tl.addLabel("slide10-anim");
  tl.to(".map", { opacity: 1, duration: 1 }, "slide10-anim");
  tl.to(".africa__block--1", { opacity: 1, duration: 1 }, "slide10-anim");
  tl.to(".map__overlay", { opacity: 1, duration: 0.5 }, "slide10-anim+=1.5");
  tl.to(".africa__block--2", { opacity: 1, duration: 1 }, "slide10-anim+=1.5");

    /* ============================================================
      SLIDE 11 - USINE (FUMÉE)
      ============================================================ */
  tl.to(container, { x: "-600vw", y: "-500vh", ease: "none" });
  tl.addLabel("slide11-anim");
  tl.to(
    ".factory__img",
    { transform: "translateY(0%)", duration: 1, ease: "power3.out" },
    "slide11-anim"
  );
  tl.to(
    ".smoke__dot",
    {
      opacity: 1,
      scale: 1,
      duration: 0.1,
      stagger: { amount: 2, grid: [10, 10], from: "end" },
    },
    "slide11-anim+=0.5"
  );
  tl.to(".factory__text", { opacity: 1, y: 0, duration: 1 }, "slide11-anim+=2");

    /* ============================================================
      SLIDE 12 - CONSEILS (CHAPEAUX)
      ============================================================ */
  tl.to(container, { x: "-600vw", y: "-400vh", ease: "none" });
  tl.addLabel("slide12-anim");
  const hatTl = gsap.timeline();
  hatTl
    .to(".hats__item--1", {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: "bounce.out",
    })
    .to(".hats__tip--3", { opacity: 1, x: 0, duration: 0.3 }, ">-0.2")
    .to(".hats__tip--6", { opacity: 1, x: 0, duration: 0.3 }, "<");
  hatTl
    .to(
      ".hats__item--2",
      { y: 0, opacity: 1, duration: 0.5, ease: "bounce.out" },
      ">-0.1"
    )
    .to(".hats__tip--2", { opacity: 1, x: 0, duration: 0.3 }, ">-0.2")
    .to(".hats__tip--5", { opacity: 1, x: 0, duration: 0.3 }, "<");
  hatTl
    .to(
      ".hats__item--3",
      { y: 0, opacity: 1, duration: 0.5, ease: "bounce.out" },
      ">-0.1"
    )
    .to(".hats__tip--1", { opacity: 1, x: 0, duration: 0.3 }, ">-0.2");
  hatTl
    .to(
      ".hats__item--4",
      { y: 0, opacity: 1, duration: 0.5, ease: "bounce.out" },
      ">-0.1"
    )
    .to(".hats__tip--4", { opacity: 1, x: 0, duration: 0.3 }, ">-0.2");
  hatTl.to(
    ".hats__item--5",
    { y: 0, opacity: 1, duration: 0.5, ease: "bounce.out" },
    ">-0.1"
  );
  hatTl.to(
    ".hats__item--6",
    { y: 0, opacity: 1, duration: 0.5, ease: "bounce.out" },
    ">-0.1"
  );
  tl.add(hatTl, "slide12-anim");

    /* ============================================================
      SLIDE 13 - CONCLUSION
      ============================================================ */
  tl.to(container, { x: "-600vw", y: "-300vh", ease: "none" });
  tl.addLabel("slide13-anim");
  tl.to(
    ".final",
    { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" },
    "slide13-anim"
  );
  tl.to(
    ".final__line",
    { width: "300px", duration: 1, ease: "power2.out" },
    "slide13-anim+=0.5"
  );

  return tl;
}

setupScrollFlow();
animateCounter();

initLottieSimple("#lottie-3", "assets/json/fast_fashion.json");
initLottieSimple("#lottie-4", "assets/json/armoire.json");
initLottieSimple("#lottie-5", "assets/json/impact_environnement.json");
initLottieSimple("#lottie-6", "assets/json/cadence_travail.json");
initLottieSimple("#lottie-7", "assets/json/jean_water.json");
initLottieSimple("#lottie-8", "assets/json/rana_plaza.json");
initLottieSimple("#lottie-9", "assets/json/recyclage.json");
initLottieSimple("#lottie-10", "assets/json/afrique.json");
initLottieSimple("#lottie-11", "assets/json/made_in_france.json");
initLottieSimple("#lottie-12", "assets/json/conseils.json");
initLottieSimple("#lottie-13", "assets/json/conseils.json");
