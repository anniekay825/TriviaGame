// $(document).ready(function() {
var count = 0;
var time = 31;
var isSelected = false;
var ticker;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

//create questions, correct answers, and potential responses
var question = ["What is the largest US state by population?", "What is the longest river in the US?", "Death Valley is located in which US state?", "What is the tallest mountain in the United States?", "In what country can you visit Machu Picchu?", "Which African nation has the most pyramids?", "What African country served as the setting for Tatooine in Star Wars?", "What country has the most miles of Coastline?", "What is the tallest mountain in North America?", "What is the least populated US state?"];
var answer = ["California", "Missouri River", "California", "Mount McKinley", "Peru", "Sudan", "Tunisia", "Canada", "Denali", "Wyoming"];
var firstQ = ["California", "Colorado River", "Nevada", "Mount Hood", "Columbia", "Egypt", "Ghana", "United States", "King Peak", "Delaware"];
var secondQ = ["Texas", "Mississippi River", "Utah", "Mount Ranier", "Chile", "Algeria", "Tunisia", "Canada", "Mount Steele", "Wyoming"];
var thirdQ = ["Florida", "Missouri River", "California", "Mount McKinley", "Bolivia", "Libya", "Ethiopia", "China", "Mount Rushmore", "Montana"];
var fourthQ = ["New York", "Rio Grande River", "Texas", "Mount Rushmore", "Peru", "Sudan", "Gabon", "Brazil", "Denali", "Rhode Island"];

// Show & Hide Functions
function showHolders() {
    $("#question-holder").show();
    $("#choice-holder-1").show();
    $("#choice-holder-2").show();
    $("#choice-holder-3").show();
    $("#choice-holder-4").show();
}
function hideHolders() {
    $("#question-holder").hide();
    $("#choice-holder-1").hide();
    $("#choice-holder-2").hide();
    $("#choice-holder-3").hide();
    $("#choice-holder-4").hide();
}
function hideResults() {
    $("#correct-holder").hide();
    $("#incorrect-holder").hide();
    $("#unanswered-holder").hide();
    $("#restart-holder").hide();
}
function displayQuestion() {
    hideResults();
    $("#answer-holder").hide();
    $("#image-holder").hide();
    $("#time-holder").show();
    showHolders();
    $("#question-holder").html(question[count]);
    $("#choice-holder-1").html(firstQ[count]);
    $("#choice-holder-2").html(secondQ[count]);
    $("#choice-holder-3").html(thirdQ[count]);
    $("#choice-holder-4").html(fourthQ[count]);
}
$("#choice-holder-1").on("click", checkAnswer)
$("#choice-holder-2").on("click", checkAnswer)
$("#choice-holder-3").on("click", checkAnswer)
$("#choice-holder-4").on("click", checkAnswer)

function checkAnswer() {
    hideHolders();
    if ($(this).text() === answer[count]) {
        stopTime();
        isSelected = true;
        $("#answer-holder").show();
        $("#answer-holder").html("Correct! The answer is: " + answer[count]);
        displayImage();
        correct++;
        count++;
    }
    else {
        stopTime();
        isSelected = true;
        $("#answer-holder").show();
        $("#answer-holder").html("Sorry! The answer is: " + answer[count]);
        displayImage();
        incorrect++;
        count++;
    }
    checkGameEnd();
}

function checkGameEnd() {
    if (count === question.length) {
        $("#time-holder").hide();
        showResults();
        count = 0;
        $(".start").show();
        $(".start").on("click", function () {
            resetResults();
            startGame();
        });
    }
}

function resetTime() {
    time = 31;
}

function displayTime() {
    time--;
    $("#time-holder").html("Time remaining: " + time);

    if (time <= 0) {
        hideHolders();
        stopTime();
        $("#answer-holder").show();
        $("#answer-holder").html("Time is up! The answer is: " + answer[count]);
        displayImage();
        unanswered++;
        count++;
        checkGameEnd();
    }
}

function startTime() {
    clearInterval(ticker);
    ticker = setInterval(displayTime, 1000);
}
function stopTime() {
    clearInterval(ticker);
    resetTime();
    if (count < question.length - 1) {
        setTimeout(startTime, 2000);
        setTimeout(displayQuestion, 3000);
    }
}

resetTime();

// Answer Images
function displayImage() {
    if (count === 0) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/california.jpg">');
    }
    else if (count === 1) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/missouriRiver.jpg">');
    }
    else if (count === 2) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/deathValley.jpg">');
    }
    else if (count === 3) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/mountMcKinley.jpg">');
    }
    else if (count === 4) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/peru2.jpg">');
    }
    else if (count === 5) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/sudanPyramid-min.jpg">');
    }
    else if (count === 6) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/tataouine.jpg">');
    }
    else if (count === 7) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/canadaCoastline-min.jpg">');
    }
    else if (count === 8) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/denali-min.jpg">');
    }
    else if (count === 9) {
        $("#image-holder").show();
        $("#image-holder").html('<img src="assets/images/wyoming2-min.jpg">');
    }
}

// Show Results Function   
function showResults() {
    $("#correct-holder").show();
    $("#correct-holder").html("Correct: " + correct);
    $("#incorrect-holder").show();
    $("#incorrect-holder").html("Incorrect: " + incorrect);
    $("#unanswered-holder").show();
    $("#unanswered-holder").html("Unanswered: " + unanswered);
    $("#restart-holder").show();
    $("#restart-holder").html("Click Start above to play again!");
}

// Reset Results Function 
function resetResults() {
    correct = 0;
    incorrect = 0;
    unanswered = 0;
}

// Start Game Function
function startGame() {
    $(".start").hide();
    startTime();
    displayQuestion();
}

// Start Game On Click
$(".start").on("click", function () {
    startGame();
});
// });