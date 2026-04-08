document.getElementById("next-btn").onclick = () => {
  current++;

  if (current < currentQuiz.length) {
    showQuiz();
  } else {
    questionEl.textContent = "終了！";
    choicesEl.innerHTML = "";
    resultEl.textContent = `スコア: ${score} / ${currentQuiz.length}`;

    // 👇ここ追加（超重要）
    const nextBtn = document.getElementById("next-btn");
    nextBtn.textContent = "もう一回やる";

    nextBtn.onclick = () => {
      // リセット
      current = 0;
      score = 0;
      resultEl.textContent = "";

      // モード選択に戻る
      document.getElementById("quiz-box").style.display = "none";
      document.getElementById("mode-select").style.display = "block";

      nextBtn.textContent = "次へ";
    };
  }
};
