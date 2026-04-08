const quiz = [
  {
    question: "L2とは何？",
    answers: ["中性線", "電圧線", "接地線", "通信線"],
    correct: 1
  },
  {
    question: "ローゼットは何に使う？",
    answers: ["LAN接続", "照明接続", "電源供給", "冷却"],
    correct: 1
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const resultEl = document.getElementById("result");

function showQuiz() {
  choicesEl.innerHTML = "";
  let q = quiz[current];
  questionEl.textContent = q.question;

  q.answers.forEach((ans, index) => {
    const btn = document.createElement("button");
    btn.textContent = ans;

    btn.onclick = () => {
      // 全ボタン無効化
      const buttons = document.querySelectorAll("#choices button");
      buttons.forEach(b => b.disabled = true);

      if (index === q.correct) {
        btn.style.background = "green";
        btn.textContent += " ← 正解！";
        score++;
      } else {
        btn.style.background = "red";
        btn.textContent += " ← 不正解";

        // 正解も表示
        buttons[q.correct].style.background = "green";
      }
    };

    choicesEl.appendChild(btn);
  });
}

document.getElementById("next-btn").onclick = () => {
  current++;
  if (current < quiz.length) {
    showQuiz();
  } else {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    resultEl.textContent = `スコア: ${score} / ${quiz.length}`;
  }
};

showQuiz();
