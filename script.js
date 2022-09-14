var typed = new Typed("#Name", {
  strings: ["", "Devyansh Narayan", "GOD OF LOVE" , "Programmer"],
  typeSpeed: 40,
  backSpeed: 40,
  loop: true,
});

var light = true;

document.getElementById("IMG").addEventListener("click", () => {
  if (light) {
    document.getElementById("IMG").src = "Dark.png";
    document.querySelector(":root").style.setProperty("--white", "#18093c");
    document.querySelector(":root").style.setProperty("--black", "white");
    light = false;
  } else {
    document.getElementById("IMG").src = "light.png";
    document.querySelector(":root").style.setProperty("--white", "white");
    document.querySelector(":root").style.setProperty("--black", "black");
    light = true;
  }
});


window.addEventListener("scroll" , ()=>{
         let val = window.scrollY;
         document.getElementById("Name").style.left = `${-val}px`;
         document.getElementById("something").innerHTML = `${val}K`;
});