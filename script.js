let current = 0;
let score = 0;
let currentQuiz = [];

const itQuiz = [
  {
    question: "L2とは何？",
    answers: [
      "電圧線",
      "データリンク層",
      "接地線",
      "通信線"
    ],
    correct: 1
  },
  {
    question: "IPアドレスの役割は？",
    answers: [
      "機器の識別",
      "電源供給",
      "冷却",
      "音声通信"
    ],
    correct: 0
  }
];

const fieldQuiz = [
  {
    question: "パッチパネルの役割は？",
    answers: [
      "電源供給",
      "配線の整理",
      "冷却",
      "信号増幅"
    ],
    correct: 1
  },
  {
    question: "PoEとは？",
    answers: [
      "LANケーブルで電源供給",
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

document.getElementById("next-btn").onclick = () => {
  current++;
  if (current < currentQuiz.length) {
    showQuiz();
  } else {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    resultEl.textContent = `スコア: ${score} / ${currentQuiz.length}`;
  }
};
