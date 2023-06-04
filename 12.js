let dog = document.querySelector('.dog');
let text = document.querySelector('.text');
async function img() {
  let arr1 = await fetch("https://random.dog/woof.json");
  let fotoDog = await arr1.json();
  console.log(fotoDog.url);
  dog.children[0].src = fotoDog.url;
}
img();
async function textR() {
  let arr1 = await fetch("https://official-joke-api.appspot.com/random_joke");
  let textRandom = await arr1.json();
  console.log(textRandom);
  text.innerHTML = `
  <p align="left">${textRandom.setup} </p>
  <p align="right">${textRandom.punchline}</p>
  
  
  `
}
textR();
//setup  punchline

let btn = document.querySelector('.btn');
btn.style.display = "block";
btn.style.margin = "auto";
btn.addEventListener('click', () => {
  let img1 = dog.children[0];
  if (img1.complete) {
    img();
    textR();
  }

})