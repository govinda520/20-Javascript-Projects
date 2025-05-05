let movie = document.querySelector("#movie");
let contianer = document.querySelector(".container");
let count = document.querySelector(".count");
let total = document.querySelector(".total");
let seats = document.querySelectorAll(".row .seat:not(.occupied)");

populateUI();

let ticketPrice = movie.value;

//save the movie data
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem("movieIndex", movieIndex);
  localStorage.setItem("moviePrice", moviePrice);
}

//update count function
function updateCount() {
  let seatSelected = document.querySelectorAll(".row .seat.selected");
  count.innerText = seatSelected.length;
  total.innerText = ticketPrice * seatSelected.length;

  //copy the selectedSeat to new array
  //map through the array
  //return a new array2
  let seatIndex = [...seatSelected].map(function (seat) {
    return [...seats].indexOf(seat);
  });
  localStorage.setItem("selectedSeat", JSON.stringify(seatIndex));
}

//for bring the local storage data to ui
function populateUI() {
  const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));

  if (selectedSeat !== null && selectedSeat.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeat.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  let movieIndex = localStorage.getItem("movieIndex");
  if (movieIndex !== null) {
    movie.selectedIndex = movieIndex;
  }
}

//change movie event
movie.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateCount();
  setMovieData(e.target.selectedIndex, e.target.value);
});

//seat selected event
contianer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateCount();
  }
});

updateCount();
