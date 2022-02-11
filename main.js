const aboutChangeImg = [
  "/image/photo2.jpg",
  "/image/pic_baby.jpg",
  "/image/pic_koara.jpg",
  "/image/pic_reiwa.jpg",
  "/image/pic_carp.jpg",
  "/image/pic_hanabi.jpg",
];
const moreChangeImg = [
  "/image/photo3.jpg",
  "/image/pic_teach.jpg",
  "/image/pic_mirror.jpg",
  "/image/pic_base.jpg",
  "/image/pic_gakusai.jpg",
  "/image/pic_suit.jpg",
];

const aboutPic = document.querySelector("#aboutPic");
const morePic = document.querySelector("#morePic");

let i = 0;
let j = 0;

// 背景画像を切り替える関数
function changeAboutBackground() {
  if (i === aboutChangeImg.length) {
    i = 0;
  }
  aboutPic.style.backgroundImage = "url(" + aboutChangeImg[i] + ")";
  i++;
}

function changeMoreBackground() {
  if (j === moreChangeImg.length) {
    j = 0;
  }
  morePic.style.backgroundImage = "url(" + moreChangeImg[j] + ")";
  j++;
}

// インターバルで切り替える
window.setInterval(changeAboutBackground, 5000);

window.setInterval(changeMoreBackground, 5000);

//mouseoverの処理
const aboutQuestion = document.querySelectorAll(".about-question");
const moreQuestion = document.querySelectorAll(".more-question");

// questionに接しているanswerを出現させる関数
const drawAboutAnswer = function (order) {
  aboutQuestion[order].onmouseover = function () {
    const aboutAnswer = aboutQuestion[order].nextElementSibling; // HTMLで見て次の要素を取ってくる
    aboutAnswer.classList.add("seen"); // 見えるようにする
  };
};

for (let i = 0; i < aboutQuestion.length; i++) {
  drawAboutAnswer(i);
}

const drawMoreAnswer = function (order) {
  moreQuestion[order].onmouseover = function () {
    const moreAnswer = moreQuestion[order].nextElementSibling; // HTMLで見て次の要素を取ってくる
    moreAnswer.classList.add("seen"); // 見えるようにする
  };
};

for (let i = 0; i < moreQuestion.length; i++) {
  drawMoreAnswer(i);
}
