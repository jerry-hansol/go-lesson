/* learn-go 공용 퀴즈 위젯 — 즉각 피드백 (retrieval practice 용)
 *
 * 사용법 (레슨 HTML에서):
 *   <div id="quiz"></div>
 *   <script src="../assets/quiz.js"></script>
 *   <script>
 *     renderQuiz("quiz", [
 *       { q: "질문?", choices: ["보기1", "보기2"], answer: 0, explain: "해설" },
 *     ]);
 *   </script>
 */
function renderQuiz(rootId, questions) {
  var root = document.getElementById(rootId);
  if (!root) return;

  questions.forEach(function (item, qi) {
    var qEl = document.createElement("div");
    qEl.className = "quiz-q";

    var question = document.createElement("p");
    question.className = "quiz-question";
    question.textContent = "Q" + (qi + 1) + ". " + item.q;
    qEl.appendChild(question);

    var choices = document.createElement("div");
    choices.className = "quiz-choices";

    var explain = document.createElement("p");
    explain.className = "quiz-explain";
    explain.textContent = item.explain || "";

    item.choices.forEach(function (choice, ci) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.textContent = choice;
      btn.addEventListener("click", function () {
        if (qEl.classList.contains("answered")) return;
        qEl.classList.add("answered");
        var buttons = choices.querySelectorAll("button");
        buttons.forEach(function (b, bi) {
          b.disabled = true;
          if (bi === item.answer) b.classList.add("correct");
        });
        if (ci !== item.answer) btn.classList.add("wrong");
      });
      choices.appendChild(btn);
    });

    qEl.appendChild(choices);
    qEl.appendChild(explain);
    root.appendChild(qEl);
  });
}
