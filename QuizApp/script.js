const QNA = [
    {
      question: "What is the fastest land animal?",
      Options: ["Lion", "Cheetah", "Horse", "Tiger"],
      answer: "Cheetah"
    },
    {
      question: "What is the chemical symbol for water?",
      Options: ["H₂O", "O₂", "CO₂", "H₂"],
      answer: "H₂O"
    },
    {
      question: "What is 2 + 2?",
      Options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
        question: "What is 2 x 10?",
        Options: ["2", "8", "5", "20"],
        answer: "20"
    },
    {
        question: "What is 8 x 2?",
        Options: ["90", "6", "5", "16"],
        answer: "16"
      }
  ];
  
  let currentQuestion = 0;
  let currentScore = 0;
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  
  function loadQuestion(index) {
    optionsContainer.innerHTML = "";
  
    questionElement.textContent = QNA[index].question;
  
    QNA[index].Options.forEach(option => {
      const button = document.createElement("button");
      button.className = "option";
      button.textContent = option;
      button.onclick = () => handleAnswer(button, option, QNA[index].answer);
      optionsContainer.appendChild(button);
    });
  
    nextButton.style.display = "none";
  }
  
  function handleAnswer(button, selected, correct) {
    Array.from(optionsContainer.children).forEach(btn => {
      btn.disabled = true;
      btn.classList.remove("correct", "incorrect");
  
      if (btn.textContent === correct) {
        btn.classList.add("correct");
      }
    });
  
    if (selected !== correct) {
      button.classList.add("incorrect");
    } else {
      currentScore++;
    }
  
    scoreElement.textContent = `Score: ${currentScore}`;
    nextButton.style.display = "block";
  }
  
  nextButton.addEventListener("click", () => {
    currentQuestion++;
  
    if (currentQuestion < QNA.length) {
      loadQuestion(currentQuestion);
    } else {
      questionElement.textContent = "Quiz Completed!";
      optionsContainer.innerHTML = "";
      nextButton.style.display = "none";
      scoreElement.textContent = `Your Final Score: ${currentScore} out of ${QNA.length}`;
    }
  });

  loadQuestion(0);
  