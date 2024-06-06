const x = document.querySelector("#x");
const o = document.querySelector("#o");
const box = document.getElementsByClassName("box");
const form = document.querySelector("form");
const boxxo = document.querySelector(".boxxo");
const continer = document.querySelector(".continer");
const continergrid = document.querySelector(".continer-grid");
continer.style.displey = "inline";
let xo = [x,o]
x.addEventListener("click", () => play(xo[0]));
o.addEventListener("click", () => play(xo[1]));
let goodcomp = false;
let finish = false;
let num;
let forthecomputer;


function play(varele) {
  if(varele.in)
  continer.style.display = "inline-block";
  boxxo.style.display = "none";
  for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", mat);
  }
  function mat() {
    if (this.children.length === 0) {
      const newimg = document.createElement("img");
      newimg.src = varele.src;
      newimg.alt = varele.alt;
      newimg.classList = "putintable";
      this.appendChild(newimg);
    }
    
    while(!goodcomp){
    num = Math.floor(Math.random() * 9);
    console.log(num);
    if (box[num].children.length === 0) {
      goodcomp = true;
    }
  }
      const compnewimg = document.createElement("img");
      compnewimg.src = varele.src;
      compnewimg.alt = varele.alt;
      compnewimg.classList = "putintable";
      box[num].appendChild(compnewimg);
  }
}

if (finish) {
  tit.innerHTML = "כל הכבוד ניצחת";
  const reset = document.createElement("input");
  reset.type = "submit";
  reset.value = "משחק חדש";
  reset.classList = "butten2";
  form.append(reset);
  clickCount = 2;
}
