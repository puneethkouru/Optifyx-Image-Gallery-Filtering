let buttons = document.querySelectorAll(".buttons button");
let images = document.querySelectorAll(".gallery img");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    let filter = buttons[i].getAttribute("data-filter");

    for (let j = 0; j < images.length; j++) {
      if (filter === "all" || images[j].classList.contains(filter)) {
        images[j].style.display = "block";
      } else {
        images[j].style.display = "none";
      }
    }
  };
}
