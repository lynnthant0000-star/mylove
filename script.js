function sayHello() {
  alert("Hello! I love u mwahh 💐💐💐\nClick OK!!");
  alert("Tap OK again!\nmwahh mwahh mwahh!!!")
}

let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];

let texts = [
  "Sate ma soe pr nk byr❤️!",
  "Myr gyi my gyi chit tl mama!!",
  "dr ka toh Mgmg chit ya thu ly poh byr"
];

let index = 0;

function openPopup() {
  document.getElementById("popup").style.display = "flex";
  showImage();
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function showImage() {
  document.getElementById("popupImg").src = images[index];
  document.getElementById("popupText").innerText = texts[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}