const btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackground() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}

//with eventlistner we can add multiple handler to a singer event
//addEventListener('click', handler1), addEventListener('click', handler1)
btn.addEventListener("click", changeBackground);



//button onlick只能有一个handler而且下面用的肩头函数
btn.onclick = () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
};