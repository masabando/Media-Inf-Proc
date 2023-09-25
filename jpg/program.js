createNavbar("JPEG変換");

let image = new Image();
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");
let buttons = document.querySelectorAll(".convertButton");
let resetButton = document.querySelector("#reset");
let loopCount = 0;
let totalCount = 0;
let quality = 85;
let changeEvent = new Event("change", {bubbles: false, cancelable: true});

resetButton.addEventListener("click", function () {
  document.querySelector("#formFile").dispatchEvent(changeEvent);
  loopCount = 0;
  totalCount = 0;
  labelChange();
});
resetButton.disabled = true;

buttons.forEach(button => {
  button.disabled = true;
});

function labelChange() {
  document.querySelector("#loopCount").innerHTML = `変換残り回数 : ${loopCount}`;
  document.querySelector("#totalCount").innerHTML = `変換総回数 : ${totalCount}`
}
labelChange();

// quality
document.querySelector("#qualityRange").addEventListener("input", function (e) {
  quality = +e.target.value;
  document.querySelector("#quality").innerHTML = `${quality}`;
});
document.querySelector("#qualityRange").value = quality;
document.querySelector("#quality").innerHTML = `${quality}`;


let reader = new FileReader();
reader.onload = function (e) {
  image.src = e.target.result;
};
image.onload = function () {
  let width = image.width;
  let height = image.height;
  if (width > 1000) {
    width = 1000;
    height = image.height * 1000 / image.width;
  }
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
  buttons.forEach(button => {
    button.disabled = false;
  });
  if (loopCount > 0) {
    setTimeout(jpgLoop, 10);
    loopCount--;
    totalCount++;
    labelChange();
  } else {
    resetButton.disabled = false;
  }
};
function jpgLoop() {
  let img = canvas.toDataURL("image/jpeg", quality / 100.0);
  image.src = img;
}
buttons.forEach(button => {
  let n = +button.dataset["loop"];
  button.addEventListener("click", function () {
    resetButton.disabled = true;
    loopCount = n;
    labelChange();
    jpgLoop();
  });
});

document.querySelector("#formFile").addEventListener("change", function (e) {
  totalCount = 0;
  let file = e.target.files[0];
  reader.readAsDataURL(file);
});

