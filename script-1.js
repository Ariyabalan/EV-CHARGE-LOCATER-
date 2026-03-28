const modal = document.getElementById("myModal");
const jokeText = document.getElementById("jokeText");

// MOBILE MENU
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// FETCH JOKE
function jokey() {
  fetch("https://v2.jokeapi.dev/joke/Programming,Pun")
    .then(res => res.json())
    .then(data => {
      if (data.type === "single") {
        jokeText.innerText = data.joke;
      } else {
        jokeText.innerText = data.setup + " — " + data.delivery;
      }
      modal.classList.remove("hidden");
    });
}

// CLOSE MODAL
function closeModal() {
  modal.classList.add("hidden");
}

// CLICK OUTSIDE CLOSE
window.onclick = function(e) {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
};

// REFRESH MAP
function refreshMap() {
  const map = document.getElementById("mapFrame");
  map.src = map.src;
}
