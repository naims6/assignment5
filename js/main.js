let heart = document.querySelectorAll(".card .fa-heart");
let callBtn = document.querySelectorAll(".card .call-btn");
let copyBtn = document.querySelectorAll(".card .copy-btn");

let heartCounted = 0;
let coinCounted = 100;

// Call Button Functionality
function call(e) {
  let target = e.target;
  let card = target.closest(".card");

  let coinCount = document.getElementById("coin-count");
  let serviceNumber = card.querySelector("#service-number").innerText;
  let serviceName = card.querySelector(".service-name").innerText;

  alert(`📞 Calling ${serviceName} ${serviceNumber}...`);

  if (20 > coinCounted) return;
  coinCounted -= 20;
  coinCount.innerText = coinCounted;
}

callBtn.forEach((item) => {
  item.addEventListener("click", call);
});

// Heart Button Functionality
function increseHeart() {
  let heartCount = document.getElementById("heart-count");
  heartCounted++;
  heartCount.innerText = heartCounted;
}

heart.forEach((item) => {
  item.addEventListener("click", increseHeart);
});
