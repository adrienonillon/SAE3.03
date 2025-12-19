import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Initialisation des objets tombants (Slide 1)
let objetsChute = document.querySelectorAll(".objet-chute");
for (let i = 0; i < objetsChute.length; i++) {
  objetsChute[i].style.left = Math.random() * 90 + "%";
  objetsChute[i].style.width = Math.random() * 80 + 120 + "px";
}

// --- LA TIMELINE PRINCIPALE ---
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".zone-scroll-fixe", // Anciennement .pin-wrapper
    start: "top top",
    end: "+=35000",
    scrub: 1,
    pin: true,
    onUpdate: function (self) {
      let barre = document.querySelector(".barre-progression__jauge");
      barre.style.width = self.progress * 100 + "%";
    },
  },
});

let container = document.querySelector(".grille-diapositives"); // Anciennement .scroll-container

// ============================================================
// SLIDE 1 : CONSOMMATION
// ============================================================
tl.to(container, { x: 0, y: "-100vh", ease: "none", duration: 1 });
tl.fromTo(
  ".objet-chute",
  { y: "-50vh", rotation: -45 },
  {
    y: "150vh",
    rotation: "random(-180, 180)",
    x: "random(-200, 200)",
    ease: "none",
    stagger: 0.1,
    duration: 1,
  },
  "<"
);
tl.fromTo(
  "#consommation .contenu-diapo",
  { opacity: 0, scale: 0.8 },
  { opacity: 1, scale: 1, ease: "back.out(1.7)", duration: 0.5 },
  "-=0.5"
);

// Animation compteur spécifique
ScrollTrigger.create({
  trigger: "#consommation",
  start: "top center",
  onEnter: function () {
    let obj = { val: 0 };
    let span = document.querySelector("#compteur-7000");
    gsap.to(obj, {
      val: 7000,
      duration: 1,
      onUpdate: function () {
        span.textContent = Math.floor(obj.val);
      },
    });
  },
});

// ============================================================
// SLIDE 2 : QUALITÉ
// ============================================================
tl.to(container, { x: "-100vw", y: "-100vh", ease: "none", duration: 1 });
tl.to(".icone-tshirt", {
  opacity: 1,
  scale: 1,
  duration: 0.5,
  ease: "back.out(2)",
  stagger: 0.1,
});
tl.to(".animation-revelation", { opacity: 1, y: 0, duration: 0.5 });

// ============================================================
// SLIDE 3 : FAST FASHION
// ============================================================
tl.to(container, {
  x: "-100vw",
  y: "-200vh",
  ease: "none",
  duration: 1,
});

tl.fromTo(
  ".chiffre-geant",
  { scale: 0, opacity: 0 },
  { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
);
tl.fromTo(
  ".label-chapeau",
  { y: 50, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 },
  "<0.2"
);
tl.fromTo(
  ".texte-focus",
  { y: -50, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.5 },
  "<"
);
tl.fromTo(
  ".forme-gauche",
  { x: "-100%" },
  { x: "0%", duration: 0.8, ease: "power2.out" },
  "<"
);
tl.fromTo(
  ".forme-droite",
  { x: "100%" },
  { x: "0%", duration: 0.8, ease: "power2.out" },
  "<"
);

// ============================================================
// SLIDE 4 : ARMOIRE
// ============================================================
tl.to(container, { x: "-100vw", y: "-300vh", ease: "none", duration: 1 });
tl.fromTo(
  ".bloc-texte-gauche",
  { opacity: 0, x: -50 },
  { opacity: 1, x: 0, ease: "power2.out", duration: 0.5 }
);
tl.to(".porte-haut", {
  xPercent: 110,
  ease: "power2.inOut",
  duration: 1.5,
});
tl.to(".vetement-interieur", {
  bottom: "10%",
  opacity: 1,
  ease: "back.out(1.5)",
  stagger: 0.2,
  duration: 0.8,
});

// ============================================================
// SLIDE 5 : GRAPHIQUE
// ============================================================
tl.to(container, { x: "-200vw", y: "-300vh", ease: "none", duration: 1 });

let barres = document.querySelectorAll(".barre");
tl.to(barres, {
  height: function (index, target) {
    // Lecture de l'attribut data-hauteur au lieu de CSS variable
    return target.getAttribute("data-hauteur"); 
  },
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.2,
});

tl.to(".contenu-etiquette", { opacity: 1, duration: 0.8, stagger: 0.2 });

// ============================================================
// SLIDE 6 : CADENCE TRAVAIL
// ============================================================
tl.to(container, { x: "-200vw", y: "-400vh", ease: "none", duration: 1 });

tl.to(".aiguille-minutes", {
  rotation: 720,
  duration: 3,
  transformOrigin: "bottom center",
});

tl.to(
  ".aiguille-heures",
  { rotation: 120, duration: 3, transformOrigin: "bottom center" },
  "<"
);

tl.to(".camembert-horloge", { strokeDashoffset: 300, duration: 3 }, "<");

tl.fromTo(
  ".piece",
  { y: -600, opacity: 0, rotation: -180 },
  {
    y: 0,
    opacity: 1,
    rotation: 0,
    duration: 1,
    ease: "bounce.out",
    stagger: 0.2,
  }
);

// ============================================================
// SLIDE 7 : EAU
// ============================================================
tl.to(container, { x: "-200vw", y: "-500vh", ease: "none", duration: 1 });

tl.to(".jet-eau", { height: "100%", duration: 0.8 });
tl.to(".eau-arriere", { y: "0%", duration: 2 });
tl.to(".eau-avant", { y: "0%", duration: 1.5 }, "-=1.2");
tl.to(".titre-eau", { opacity: 1, y: -20, duration: 1 });

gsap.to(".vague-avant", {
  x: "-5%",
  duration: 1.5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.to(".vague-arriere", {
  x: "5%",
  duration: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

// ============================================================
// SLIDE 8 : RANA PLAZA
// ============================================================
tl.to(container, { x: "-200vw", y: "-600vh", ease: "none", duration: 1 });

tl.fromTo(".svg-batiment", { y: "100%" }, { y: "0%", duration: 1 });
tl.to(".entete-tragedie", { opacity: 1, duration: 0.5 });
tl.to(".stats-tragedie", { opacity: 1, duration: 0.5 });

// Sélection des fenêtres jaunes via leur classe
let fenetresList = document.querySelectorAll(".fenetre"); 
// Note: Si le SVG est externe ou non modifié, utiliser: ".svg-batiment rect[fill='var(--c-jaune)']" ou fill brute.
// Pour compatibilité, on assume que la classe a été ajoutée au SVG inline

let fenetresArray = Array.from(fenetresList);
// Tri pour allumer les lumières progressivement
fenetresArray.sort(function (a, b) {
  let yA = parseFloat(a.getAttribute("y"));
  let yB = parseFloat(b.getAttribute("y"));
  return yA - yB;
});

tl.to(fenetresArray, { fill: "#000000", duration: 0.1, stagger: 0.05 });
tl.to(".svg-batiment", { x: "+=15", yoyo: true, repeat: 10, duration: 0.05 });
tl.to(".svg-batiment", { y: "150vh", rotation: 5, opacity: 0, duration: 1.5 });

// ============================================================
// SLIDE 9 : RECYCLAGE
// ============================================================
tl.to(container, { x: "-200vw", y: "-700vh", ease: "none", duration: 1 });
tl.to(".bacs-recyclage", { y: 0, opacity: 1, duration: 1, ease: "power3.out" });

let itemsRecyclage = document.querySelectorAll(".objet-recyclage");
let animationRecyclage = gsap.timeline();

for (let i = 0; i < itemsRecyclage.length; i++) {
  let item = itemsRecyclage[i];
  let positionX;
  if (i % 2 == 0) {
    positionX = -350 + Math.random() * 200;
  } else {
    positionX = 150 + Math.random() * 200;
  }
  gsap.set(item, {
    y: "-50vh",
    x: positionX,
    rotation: Math.random() * 360,
    opacity: 1,
    scale: 1,
  });
  animationRecyclage.to(
    item,
    { y: "60vh", rotation: "+=180", duration: 1.2, ease: "power1.in" },
    i * 0.3
  );
  animationRecyclage.to(
    item,
    { y: "75vh", opacity: 0, scale: 0.5, duration: 0.2 },
    ">"
  );
}
tl.add(animationRecyclage);

// ============================================================
// SLIDE 10 : AFRIQUE
// ============================================================
tl.to(container, { x: "-200vw", y: "-800vh", ease: "none", duration: 1 });
tl.to(".carte-continent", { opacity: 1, duration: 1 });
tl.to(".bloc-1", { opacity: 1, duration: 1 }, "<");
tl.to(".carte-pays-ghana", { opacity: 1, duration: 0.5 });
tl.to(".bloc-2", { opacity: 1, duration: 1 }, "<");

// ============================================================
// SLIDE 11 : USINE
// ============================================================
tl.to(container, { x: "-300vw", y: "-800vh", ease: "none", duration: 1 });
tl.fromTo(
  ".info-usine",
  { x: 100, opacity: 0 },
  { x: 0, opacity: 1, duration: 1 },
  "+=0.5"
);

// ============================================================
// SLIDE 12 : CONSEILS
// ============================================================
tl.to(container, { x: "-300vw", y: "-700vh", ease: "none", duration: 1 });

// Animation inverse de la pile (chapeau 6 vers 1) et des textes
tl.to(".chapeau-6", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
tl.to(".astuce-3", { opacity: 1, x: 0, duration: 0.3 }, "<0.2");

tl.to(".chapeau-5", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
tl.to(".astuce-6", { opacity: 1, x: 0, duration: 0.3 }, "<0.2");

tl.to(".chapeau-4", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
tl.to(".astuce-2", { opacity: 1, x: 0, duration: 0.3 }, "<0.2");

tl.to(".chapeau-3", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
tl.to(".astuce-5", { opacity: 1, x: 0, duration: 0.3 }, "<0.2");

tl.to(".chapeau-2", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
tl.to(".astuce-1", { opacity: 1, x: 0, duration: 0.3 }, "<0.2");

tl.to(".chapeau-1", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2");
tl.to(".astuce-4", { opacity: 1, x: 0, duration: 0.3 }, "<0.2");

// ============================================================
// SLIDE 13 : CONCLUSION
// ============================================================
tl.to(container, { x: "-300vw", y: "-600vh", ease: "none", duration: 1 });
tl.to(".bloc-final", { opacity: 1, scale: 1, duration: 1.5, ease: "power4.out" });
tl.to(".ligne-separation", { width: "300px", duration: 1 });