var score = 0 //ammount of questions the user has got correct
var selected =[] //stores the question elements taken randomly from questions array
var totalQst = 6 ////defines how many questions the user will need to answer

//stores the correct answer for the selected questions (used in dupe check)
var storedAnswers = [] 

var repeatAns = [] //used to stop same question appearing back to back
var sec = 0 //stores secs passed 
var min = 0 //stores mins passed

//assigns a variable with a html element
var header2 = document.getElementById("question")
var ansButton1 = document.getElementById("ans1")
var ansButton2 = document.getElementById("ans2")
var ansButton3 = document.getElementById("ans3")
var ansButton4 = document.getElementById("ans4")
var next = document.getElementById("next")
var timer = document.getElementById("timeTaken")

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
      Question: "What is the capital of Egypt?",
      Correct: "Cairo",
      incorrect1: "New Cairo City",
      incorrect2: "Alexandria",
      incorrect3: "Jerusalem"
    }
  ];


//fuction used to get the time since the quiz started
function clock(){
    sec = 0
    min = 0
    //setInterval set at 1000 miliseconds to count each second passed
    //each if statement is used to update the display to correctly show time
    setInterval(function() {
        if (sec < 10){
            timer.innerHTML = 'Time: ' + min + ':0' + sec;
            sec ++;
        }
        else if (sec > 9 && sec <60){
            timer.innerHTML = 'Time: ' + min + ':' + sec;
            sec ++;
        }
        else if (sec > 59 ){
            min++
            sec = 00
            timer.innerHTML = 'Time: '+ min + ':' + sec;
            sec ++;
        }
    }, 1000)
}

// used to pull a question 
function getQuestion() {

    //randomly selects an index number to pull from question and assigns it to selected
    //then checks if the question has answered correctly and if it has been pulled
    //within the last pull
    selected = questions[Math.floor(Math.random() * (questions.length))]
    dupeCheck = storedAnswers.includes(selected.Correct)
    repeatCheck = repeatAns.includes(selected.Correct)
    if (dupeCheck == true){
      getQuestion()
    }
    if (repeatCheck == true){
      getQuestion()
    }

    //if the question passes the reqirements then
    //the answers are added to the answers array
    //the array is then shuffled using math.random
    var answers = [selected.Correct,selected.incorrect1,selected.incorrect2,selected.incorrect3]
    var answers = answers.sort((a,b) => 0.5 - Math.random())

    //buttons are then assign one of the suffled possible inputs
    //and the header will display the question
    header2.innerHTML = selected.Question;
    ansButton1.innerHTML = answers[0];
    ansButton2.innerHTML = answers[1];
    ansButton3.innerHTML = answers[2];
    ansButton4.innerHTML = answers[3];
}

//used to remove the users selected button when a new question is pulled
function resetButtons(){
  ansButton1.className = "button"
  ansButton2.className = "button"
  ansButton3.className = "button"
  ansButton4.className = "button"

}

//starts counting the timer
clock()

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
  if (score == totalQst) {
    sessionStorage.setItem("sec", sec)
    sessionStorage.setItem("min", min)
    sessionStorage.setItem("score", score)
    window.location.replace("SpeedResults.html");
  }
}

//used to check if the question that has been pulled
//has been pulled recently
function reCheck(){
  repeatAns.push(selected.Correct)
  if (repeatAns.length == 3){
    repeatAns = repeatAns.splice([0],1);
  }
}

//used to run all fuctions that are needed when the
//next button is used by the user
function functionCall(){
  reCheck()
  resetButtons()
  finishQuiz()
  getQuestion()
}

//pulls the first question
getQuestion()

//when the next button is clicked it checks what ans button was
//selected and if it was the correct answer if it is correct score will increase 
//if it is incorrect nothing will increase.
//if no button was selected nothing increase.
//fuction call is used to run all the necessary fuctions.
next.onclick = function() {
  if (ansButton1.className == "buttonSelect"){
    if (ansButton1.innerHTML == selected.Correct){
      score++
      storedAnswers.push(selected.Correct)
    }
    functionCall()
  } else if (ansButton2.className == "buttonSelect"){
    if (ansButton2.innerHTML == selected.Correct){
      score++
      storedAnswers.push(selected.Correct)
    }
    functionCall()
  } else if (ansButton3.className == "buttonSelect"){
    if (ansButton3.innerHTML == selected.Correct){
      score++
      storedAnswers.push(selected.Correct)
    }
    functionCall()
  } else if (ansButton4.className == "buttonSelect"){
    if (ansButton4.innerHTML == selected.Correct){
      score++
      storedAnswers.push(selected.Correct)
    }
    functionCall()
  } else {
    functionCall()
  }
}
