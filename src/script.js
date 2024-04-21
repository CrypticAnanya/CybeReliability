var tl = gsap.timeline();
var contact_btn = document.getElementsByClassName(".contact-btn");
const img = document.getElementById("bg-img");
var arr = ["64474bb6-549d-4db1-a819-ec3b62851a90.jpg","55349c78-29bf-4f44-bb02-272cff1a9155.jpg","pexels-thisisengineering-3861969.jpg","64c0f0f8017eb62087a4cbda0afb94ce.jpg"];
var index = 0;

function learn_hoverup() {
  gsap.to(".learn-more", {
    backgroundColor: "rgb(34,211,238)",
    color: "#fff",
    duration: 0.2,
  });
}

gsap.from(".para-1,.para-2",{
  x: "-50%",
  opacity: 0,
  scrollTrigger: {
    trigger: ".intro",
    scroller: "body",
    start: "top 20%",
    end: "top 0%",
  }
})

function learn_hoverdown() {
  gsap.to(".learn-more", {
    backgroundColor: "transparent",
    color: "rgb(34,211,238)",
    duration: 0.2,
  });
}

function contact_hoverup() {
  gsap.to(".login_btn", {
    backgroundColor: "rgb(34,211,238)",
    color: "#fff",
    duration: 0.2,
  });
}

tl.from(".learn-more,.start_btn",{
  scale: 0,
  opacity: 0.4,
  duration: 0.6,
  stagger: 0.4
})

function contact_hoverdown() {
  gsap.to(".login_btn", {
    backgroundColor: "transparent",
    color: "rgb(34,211,238)",
    duration: 0.2,
  });
}

setInterval(() => {
    if(index === 4){
      index = 0;
    }
    img.src = arr[index];
    index++;
    gsap.from(img,{
      opacity: 0.4,
      scale: 0.5,
      duration: 0.8
    })
}, 4000);

gsap.set(".intro",{
  y: "-50%",
  opacity: 0
})

gsap.to(".intro",{
  y: "0%",
  opacity: 1,
  duration: 0.6,
  stagger: 0.4,
  scrollTrigger:{
    trigger:".page2",
    scroller: "body",
    start: "top 30%",
    end: "top 10%",
    scrub: 0.4
  }
})

gsap.from(".nav .nav-1,.nav .nav-3,.nav .nav-4", {
  y: "-200%",
  delay: 0.5,
  duration: 0.5,
  stagger: 0.1,
});

tl.from(".page1 h1,.page1 p", {
  x: "-80%",
  opacity: -1,
  duration: 1,
  stagger: 0.4,
});



