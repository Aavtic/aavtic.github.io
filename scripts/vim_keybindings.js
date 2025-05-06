let clicked_g = false;
let clicked_h = false;

const help_window = document.querySelector(".floating");
const main_body= document.querySelector(".page");

window.addEventListener("keydown", (e) => {
if (e.key == "j" && !clicked_h) {
  e.preventDefault();
  window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
}

if (e.key == "k" && !clicked_h) {
  e.preventDefault();
  window.scrollBy({
  top: -100,
  left: -100,
  behavior: "smooth",
});
}

if (e.key == "G" && !clicked_h) {
  e.preventDefault();
  window.scrollBy({
      top: document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
  });
}

if (e.key == "g" && !clicked_h) {
  e.preventDefault();
  if (clicked_g) {
      window.scrollBy({
          top: -document.body.scrollHeight,
          left: 0,
          behavior: "smooth",
      });
  } else {
      clicked_g = true;
  }
}

if (e.key == "h") {
  e.preventDefault();
  help_window.hidden = false;
  clicked_h = true;
  main_body.classList.add("blurr");
}

if (e.key == "q") {
  e.preventDefault();
  help_window.hidden = true;
  clicked_h = false;
  main_body.classList.remove("blurr");
}

if (e.key != "g") {
  if (clicked_g)
      clicked_g = false;
}
});
