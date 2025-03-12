(function(){
 
  function quiz(){
    const output = [];

    quizQuestions.forEach(
      (currentQuestion, questionNumber) => {

        const answers = [];

        for(letter in currentQuestion.answers){

          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}"/>
              ${letter} :
              ${currentQuestion.answers[letter]}
            `
          );
        }

        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    quizContainer.innerHTML = output.join('');
  }

  function results(){

    const answerContainers = quizContainer.querySelectorAll('.answers');

    let numCorrect = 0;

    quizQuestions.forEach( (currentQuestion, questionNumber) => {

      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const uanswer = (answerContainer.querySelector(selector) || {}).value;

      if(uanswer === currentQuestion.correctAnswer){

        numCorrect++;

        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      else{
        answerContainers[questionNumber].style.color = 'red';
      }
    });
	
	  let feedback;
	  switch (true) {
                case (numCorrect >= 0 && numCorrect <= 5):
                    feedback = "Nice try! Let this website help you understand each SDG more!";	
                    break;
                case (numCorrect >= 6 && numCorrect <= 10):
                    feedback = "Good job! You have some knowledge of each SDG. Explore the website to expand your knowledge more!";
                    break;
                case (numCorrect >= 11 && numCorrect <= 15):
                    feedback = "Congratulations, you know the SDGs well! Hope this website can still teach you something!";
                    break;
                default:
                    feedback = "Invalid score";
            }
    resultsContainer.innerHTML = `
	
        <strong>${numCorrect} out of ${quizQuestions.length}</strong></p>
        <p id="feedback">${feedback}</p>
    `;
}
			

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function nextSlide() {
    const warning = document.querySelector(`input[name=question${currentSlide}]:checked`);  
	  
    if (warning) {  
        showSlide(currentSlide + 1);
    } else {  
        alert("Please select an answer. Just trust yourself! :)");
    }
}

  function previousSlide() {
    showSlide(currentSlide - 1);
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const quizQuestions = [
    {
      question: "What is the goal of SDG 2?",
      answers: {
        A: "End hunger",
        B: "Waste more food",
        C: "Stop farming",
		D: "Encourage malnutrition"
      },
      correctAnswer: "A"
    },
    {
      question: "How can we reduce hunger?",
      answers: {
        A: "Throw away extra food",
        B: "Eat only fastfood",
        C: "Grow more food sustainably",
		D: "I don't know :("
      },
      correctAnswer: "C"
    },
	{
      question: "These are causes of malnutrition EXCEPT",
      answers: {
        A: "Poverty",
        B: "Food prices",
        C: "Food waste",
		D: "Food surplus"
      },
      correctAnswer: "D"
    },
	{
      question: "What is one way to reduce food waste?",
      answers: {
        A: "Buying unnecessary food",
        B: "Donate extra food",
        C: "Throw leftovers",
		D: "I don't know :("
      },
      correctAnswer: "B"
    },
	{
      question: "What is food security?",
      answers: {
        A: "Access to sufficient, safe, and nutritious food",
        B: "Only eating organic food",
        C: "Reducing food production to prevent waste",
		D: "Storing large amounts of food at home"
      },
      correctAnswer: "A"
    },
	
	//end of sdg 2
	
    {
      question: "What is the main goal of SDG 3?",
      answers: {
        A: "Increase pollution",
        B: "Promote healthy lives and well-being",
        C: "Ban medicine",
        D: "I don't know :("
      },
      correctAnswer: "B"
    },
	{
      question: "Which activity improves physical health?",
      answers: {
        A: "Exercising regularly",
        B: "Rotting in bed",
        C: "Sleeping too little",
        D: "Not eating healthy foods"
      },
      correctAnswer: "A"
    },
	{
      question: "Why are vaccines important?",
      answers: {
        A: "They protect against diseases",
        B: "They aren't. There are controlling chips in them",
        C: "Are they?",
        D: "They make us sick"
      },
      correctAnswer: "A"
    },
	{
      question: "How to maintain good mental health? Below are a few ways EXCEPT",
      answers: {
        A: "Journaling	",
        B: "Bottling up emotions",
        C: "Therapy",
        D: "Creating/finding a good support system"
      },
      correctAnswer: "B"
    },
	{
      question: "All are unpreventable diseases, find the odd one out",
      answers: {
        A: "Cancer",
        B: "Diabetes",
        C: "Influenza",
        D: "Asthma"
      },
      correctAnswer: "C"
    },
	
    //end of sdg 3
	
	{
      question: "What is the main goal of SDG 6?",
      answers: {
        A: "Provide free healthcare",
        B: "Ensure access to clean water and sanitation",
        C: "Increase use of bottled water",
        D: "Reduce electricity use"
      },
      correctAnswer: "B"
    },
	{
      question: "The following are reasons why clean water is needed EXCEPT",
      answers: {
        A: "To avoid sickness",
        B: "To stay healthy",
        C: "To waste more water",
        D: "To keep our bodies hydrated and healthy"
      },
      correctAnswer: "C"
    },
	{
      question: "In what ways can you conserve water?",
      answers: {
        A: "Fix leaking taps",
        B: "Watering plants at noon",
        C: "Taking long showers",
        D: "Keeping the water running when not in use"
      },
      correctAnswer: "A"
    },
	{
      question: "All contributes to water pollution EXCEPT",
      answers: {
        A: "Sewage",
        B: "Industrial waste",
        C: "Oil spills",
        D: "Planting trees"
      },
      correctAnswer: "D"
    },
	{
      question: "How can you have clean, drinking water?",
      answers: {
        A: "By using dirty containers",
        B: "By filtering water",
        C: "By throwing trash in rivers",
        D: "By drinking from any available source"
      },
      correctAnswer: "B"
	  
	  //end of sdg 6
    },
  ];

  quiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
 

  showSlide(currentSlide);
  submitButton.addEventListener('click', results);
  previousButton.addEventListener("click", previousSlide);
  nextButton.addEventListener("click", nextSlide);
})();
