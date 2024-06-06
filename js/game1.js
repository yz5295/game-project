const img = document.getElementsByClassName("images");
const cover = document.getElementsByClassName("cover");
const num = document.getElementById("number");
const stock = document.getElementsByClassName("theCard");
const tit = document.getElementById("tit");
const form = document.querySelector("form");
let clickCount = 0;
let card = [];
let plus = 0;
let menycard = img.length;
let isscend = true;
let scendclick = 0;

for (let i = 0; i < img.length; i++) {
  cover[i].addEventListener("click", mat);
  function mat() {
    if (isscend) {
      scendclick = i;
      isscend = false;
    }
    console.log(i);
    tit.innerHTML = "";
    if (clickCount < 2) {
      img[i].style.display = "inline";
      card[clickCount] = img[i].id;
      clickCount++;
      if (clickCount === 2) {
        if (card[0] == card[1]) {
          const goodCard = document.getElementById(card[0]);
          const thecard = document.createElement("img");
          thecard.src = goodCard.src;
          thecard.alt = goodCard.alt;
          thecard.classList.add("imgintheCard");
          stock[plus].append(thecard);
          console.log(stock);
          console.log(plus);
          plus++;
          num.innerHTML = plus + "/6";
          clickCount = 0;
          isscend = true;
        } else {
          tit.innerHTML = "לא תואם נסה שוב";
          setTimeout(function () {
            img[i].style.display = "none";
            img[scendclick].style.display = "none";
            console.log(i);
            console.log(scendclick);
          }, 400);
          clickCount = 0;
          isscend = true;
        }
        if (plus === 6) {
          tit.innerHTML = "כל הכבוד סיימת";
          const reset = document.createElement("input");
          reset.type = "submit";
          reset.value = "משחק חדש";
          reset.classList = "butten2";
          form.append(reset);
          clickCount = 2;
        }
      }
    }
  }
}
