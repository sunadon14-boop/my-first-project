let current = 0;
let score = 0;
let currentQuiz = [];

const itQuiz = [
  {
    question: "L2とは何？",
    answers: ["電圧線", "データリンク層", "接地線", "通信線"],
    correct: 1
  }
];

const fieldQuiz = [
  {
    question: "パッチパネルの主な役割として最も適切なのはどれ？",
    answers: [
      "電源を供給する",
      "配線を集約・整理し管理を容易にする",
      "通信速度を上げる",
      "冷却する"
    ],
    correct: 1
  },
  {
    question: "PoEとは何？",
    answers: [
      "LANケーブルで電源供給する技術",
      "通信遮断",
      "冷却",
      "増幅"
    ],
    correct: 0
  }
];

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");

function startQuiz(mode) {
  document.getElementById("mode-select").style.display = "none";
  document.getElementById("quiz-box").style.display = "block";

  current = 0;
  score = 0;

  currentQuiz = mode === "it" ? itQuiz : fieldQuiz;

  showQuiz();
}

function showQuiz() {
  choicesEl.innerHTML = "";
  resultEl.textContent = "";

  let q = currentQuiz[current];
  questionEl.textContent = q.question;

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.textContent = ans;

    btn.onclick = () => {
      const buttons = document.querySelectorAll("#choices button");

      buttons.forEach((b, i) => {
        b.disabled = true;

        if (i === q.correct) {
          b.style.background = "green";
        } else if (i === index) {
          b.style.background = "red";
        }
      });

      if (index === q.correct) score++;
    };

    choicesEl.appendChild(btn);
  });
}

// 👇 ここが超重要（イベントは1回だけ定義）
nextBtn.addEventListener("click", () => {
  current++;

  if (current < currentQuiz.length) {
    showQuiz();
  } else {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    resultEl.textContent = `スコア: ${score} / ${currentQuiz.length}`;

    nextBtn.textContent = "もう一回";

    // リスタート処理
    nextBtn.onclick = () => {
      document.getElementById("quiz-box").style.display = "none";
      document.getElementById("mode-select").style.display = "block";
      nextBtn.textContent = "次へ";
    };
  }
});
