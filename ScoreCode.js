var ammount = 0 //ammount of questions the user has answered
var score = 0 //ammount of questions the user has got correct
var selected =[] //stores the question elements taken randomly from questions array
var storedAnswers = [] //stores the correct answer for the selected questions
var storedQuestions = [] ////stores the question for the selected questions
var storedUserIn = [] //stores the users answer
var totalQst = 6 //defines how many question the user will need to answer

//assigns a variable with a html element
var header2 = document.getElementById("question")
var ansButton1 = document.getElementById("ans1")
var ansButton2 = document.getElementById("ans2")
var ansButton3 = document.getElementById("ans3")
var ansButton4 = document.getElementById("ans4")
var next = document.getElementById("next")

// The list of questions that can be randomly selected
const questions =[
    {
      Question: "What is the capital of England?",
      Correct: "London",
      incorrect1: "Barcelona",
      incorrect2: "Sydney",
      incorrect3: "Paris"
    },
    {
      Question: "What is the capital of Turkey?",
      Correct: "Ankara",
      incorrect1: "Damascus",
      incorrect2: "Nicosia",
      incorrect3: "Tallinn"
    },
    {
      Question: "What is the capital of Japan?",
      Correct: "Tokyo",
      incorrect1: "Osaka",
      incorrect2: "Seoul",
      incorrect3: "Busan"
    },
    {
      Question: "What is the capital of Philippines?",
      Correct: "Manila",
      incorrect1: "Naga",
      incorrect2: "Davao",
      incorrect3: "Port Moresby"
    },
    {
      Question: "What is the capital of Poland?",
      Correct: "Warsaw",
      incorrect1: "Lublin",
      incorrect2: "Minsk",
      incorrect3: "Kaunas"
    },
    {
      Question: "What is the capital of Lithuania?",
      Correct: "Vilnius",
      incorrect1: "Riga",
      incorrect2: "Palanga",
      incorrect3: "Saldus"
    },
    {
      Question: "What is the capital of Costa Rica?",
      Correct: "San Jose",
      incorrect1: "Cartago",
      incorrect2: "Panama City",
      incorrect3: "La Fortuna"
    },
    {
      Question: "What is the capital of Madagascar?",
      Correct: "Antananarivo",
      incorrect1: "Toliara",
      incorrect2: "Ambositra",
      incorrect3: "Manakara"
    },
    {
      Question: "What is the capital of Lebanon?",
      Correct: "Beirut",
      incorrect1: "Chtoura",
      incorrect2: "Anfeh",
      incorrect3: "Hermel"
    },
    {
      Question: "What is the capital of Sri Lanka?",
      Correct: "Columbo",
      incorrect1: "Habarana",
      incorrect2: "Kandy",
      incorrect3: "Galle"
    },
    {
      Question: "What is the capital of Cameroon?",
      Correct: "Yaounde",
      incorrect1: "Bertoua",
      incorrect2: "Douala",
      incorrect3: "Uyo"
    },
    {
      Question: "What is the capital of Chile?",
      Correct: "Santiago",
      incorrect1: "Ovalle",
      incorrect2: "La Serena",
      incorrect3: "Calama"
    },
    {
      Question: "What is the capital of Zimbabwe?",
      Correct: "Harare",
      incorrect1: "Gutu",
      incorrect2: "Ruwa",
      incorrect3: "Mutoko"
    },
    {
      Question: "What is the capital of Malaysia?",
      Correct: "Kuala Lumpur",
      incorrect1: "Yala",
      incorrect2: "Medan",
      incorrect3: "Batam"
    },
    {
      Question: "What is the capital of Australia?",
      Correct: "Canberra",
      incorrect1: "Sydney",
      incorrect2: "Melbourne",
      incorrect3: "Brisbane"
    },
    {
      Question: "What is the capital of Suriname?",
      Correct: "Paramaribo",
      incorrect1: "Apatou",
      incorrect2: "Grand-Santi",
      incorrect3: "Camopi"
    },
    {
      Question: "What is the capital of Colombia?",
      Correct: "Bogota",
      incorrect1: "Cali",
      incorrect2: "Monteria",
      incorrect3: "Popayan"
    },
    {
      Question: "What is the capital of Canada?",
      Correct: "Ottawa",
      incorrect1: "Toronto",
      incorrect2: "Quebec City",
      incorrect3: "Winnipeg"
    },
    {
      Question: "What is the capital of Iceland?",
      Correct: "Reykjavik",
      incorrect1: "Arbaer",
      incorrect2: "Reykjanes",
      incorrect3: "Flateyri"
    },
    {
      Question: "What is the capital of Morocco?",
      Correct: "Rabat",
      incorrect1: "Casablanca",
      incorrect2: "Fes",
      incorrect3: "Marrakesh"
    },
    {
      Question: "What is the capital of Czechia?",
      Correct: "Prague",
      incorrect1: "Brno",
      incorrect2: "Liberec",
      incorrect3: "Vienna"
    },
    {
      Question: "What is the capital of Egypt",
      Correct: "Cairo",
      incorrect1: "New Cairo City",
      incorrect2: "Alexandria",
      incorrect3: "Jerusalem"
    }
  ];

// used to pull a question 
function getQuestion() {

    //randomly selects an index number to pull from question and assigns it to selected
    //then checks if the question has been pulled before
    selected = questions[Math.floor(Math.random() * (questions.length))]
    dupeCheck = storedAnswers.includes(selected.Correct)
    if (dupeCheck == true){
      getQuestion()
    } else {
      storedAnswers.push(selected.Correct)
      storedQuestions.push(selected.Question)
      //if the question hasnt been pulled before the possible answers are assign to the array
      //the array is then shuffled using math.random
      var answers = [
        selected.Correct,
        selected.incorrect1,
        selected.incorrect2,
        selected.incorrect3]
      var answers = answers.sort(() => 0.5 - Math.random())

      //buttons are then assign one of the suffled possible inputs
      //and the header will display the question
      header2.innerHTML = selected.Question;
      ansButton1.innerHTML = answers[0];
      ansButton2.innerHTML = answers[1];
      ansButton3.innerHTML = answers[2];
      ansButton4.innerHTML = answers[3];
    }
}

//used to remove the users selected button when a new question is pulled
function resetButtons(){
  ansButton1.className = "button"
  ansButton2.className = "button"
  ansButton3.className = "button"
  ansButton4.className = "button"

}

//The four onclick fuctions below are used to select a button by changing class name
ansButton1.onclick = function() {
    if (ansButton1.className == "button"){
        ansButton1.className = "buttonSelect"
    } else{
        ansButton1.className = "button"
    }
    ansButton2.className = "button"
    ansButton3.className = "button"
    ansButton4.className = "button"
}

ansButton2.onclick = function() {
    if (ansButton2.className == "button"){
        ansButton2.className = "buttonSelect"
    } else{
        ansButton2.className = "button"
    }
    ansButton1.className = "button"
    ansButton3.className = "button"
    ansButton4.className = "button"
}

ansButton3.onclick = function() {
    if (ansButton3.className == "button"){
        ansButton3.className = "buttonSelect"
    } else{
        ansButton3.className = "button"
    }
    ansButton1.className = "button"
    ansButton2.className = "button"
    ansButton4.className = "button"
}

ansButton4.onclick = function() {
    if (ansButton4.className == "button"){
        ansButton4.className = "buttonSelect"
    } else{
        ansButton4.className = "button"
    }
    ansButton1.className = "button"
    ansButton2.className = "button"
    ansButton3.className = "button"
}

//when the user has answered the ammount of total questions 
//the below variables are put into session storage to be used 
//on the result page
function finishQuiz(){
  if (ammount == totalQst) {
    sessionStorage.setItem("score", score)
    sessionStorage.setItem("ammount", ammount)
    storedAnswers = JSON.stringify(storedAnswers)
    storedQuestions = JSON.stringify(storedQuestions)
    storedUserIn = JSON.stringify(storedUserIn)
    sessionStorage.setItem("answers", storedAnswers)
    sessionStorage.setItem("questions", storedQuestions)
    sessionStorage.setItem("userinput", storedUserIn)
    window.location.replace("ScoreResults.html");
  }
}

//displays how many questions are left to answer
function displayQstNum(){
  document.getElementById("display").innerHTML = 
  `Questions Answered: ${ammount}/${totalQst}`
}

//fuction to store what answer the user picked.
//Since the answers are all random the function has to check
//what button was selected and what was inside that button
//it then adds the selected answer to the user input array.
//if no question is answered "Unanswered" is added to the user input array
function userInputStorage(){
  if (ansButton1.className == "buttonSelect"){
    if (ansButton1.innerHTML == selected.Correct){
      storedUserIn.push(selected.Correct)
    } else if (ansButton1.innerHTML == selected.incorrect1){
      storedUserIn.push(selected.incorrect1)
    } else if (ansButton1.innerHTML == selected.incorrect2){
      storedUserIn.push(selected.incorrect2)
    } else if (ansButton1.innerHTML == selected.incorrect3){
      storedUserIn.push(selected.incorrect3)
    }
  } else if (ansButton2.className == "buttonSelect"){
      if (ansButton2.innerHTML == selected.Correct){
        storedUserIn.push(selected.Correct)
      } else if (ansButton2.innerHTML == selected.incorrect1){
        storedUserIn.push(selected.incorrect1)
      } else if (ansButton2.innerHTML == selected.incorrect2){
        storedUserIn.push(selected.incorrect2)
      } else if (ansButton2.innerHTML == selected.incorrect3){
        storedUserIn.push(selected.incorrect3)
      }
  } else if (ansButton3.className == "buttonSelect"){
      if (ansButton3.innerHTML == selected.Correct){
        storedUserIn.push(selected.Correct)
      } else if (ansButton3.innerHTML == selected.incorrect1){
        storedUserIn.push(selected.incorrect1)
      } else if (ansButton3.innerHTML == selected.incorrect2){
        storedUserIn.push(selected.incorrect2)
      } else if (ansButton3.innerHTML == selected.incorrect3){
        storedUserIn.push(selected.incorrect3)
      }
  } else if (ansButton4.className == "buttonSelect"){
      if (ansButton4.innerHTML == selected.Correct){
        storedUserIn.push(selected.Correct)
      } else if (ansButton4.innerHTML == selected.incorrect1){
        storedUserIn.push(selected.incorrect1)
      } else if (ansButton4.innerHTML == selected.incorrect2){
        storedUserIn.push(selected.incorrect2)
      } else if (ansButton4.innerHTML == selected.incorrect3){
        storedUserIn.push(selected.incorrect3)
      }
  } else {
    storedUserIn.push("Unanswered")
  }
}

//used to run all fuctions that are needed when the
//next button is used by the user
function functionCall(){
  userInputStorage()
  resetButtons()
  finishQuiz()
  displayQstNum()
  getQuestion()
}

//pulls the first question and Questions answered display
getQuestion()
displayQstNum()

//when the next button is clicked it checks what ans button was
//selected and if it was the correct answer if it is correct score and 
//ammount will increase if it is incorrect only ammount will increase.
//if no button was selected only ammount will increase.
//fuction call is used to run all the necessary fuctions.
next.onclick = function() {
  if (ansButton1.className == "buttonSelect"){
    ammount++
    if (ansButton1.innerHTML == selected.Correct){
      score++
    }
    functionCall()
  } else if (ansButton2.className == "buttonSelect"){
    ammount++
    if (ansButton2.innerHTML == selected.Correct){
      score++
    }
    functionCall()
  } else if (ansButton3.className == "buttonSelect"){
    ammount++
    if (ansButton3.innerHTML == selected.Correct){
      score++
    }
    functionCall()
  } else if (ansButton4.className == "buttonSelect"){
    ammount++
    if (ansButton4.innerHTML == selected.Correct){
      score++
    }
    functionCall()
  } else {
    ammount++
    functionCall()
  }
}