const idInput = document.getElementById("id-input");
const styleInput = document.getElementById("style-input");

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = styleInput.value;
}

function reset() {
  ["diamonds", "clubs", "hearts", "spades"].forEach((suit) => {
    document.getElementById(suit).style.color = "#808080";
  });
}
