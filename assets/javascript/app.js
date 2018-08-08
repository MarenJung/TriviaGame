// Define variables

var time = 10;
var intervalId = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var arrayFinder = 0;

// Define variable in questions and answers
var question01 = {
	question: "Who directed the 1972 film, The Godfather?",
	answers: ["Martin Scorsese", "Francis Ford Coppola", "Mario Puzo", "Spike Jonze"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Francis Ford Coppola",
	image: "./assets/images/Godfather.gif"
};
var question02 = {
	question: "'The Jazz Singer,' the first talking film, was made in what year?",
	answers: ["1919", "1931", "1923", "1927"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "1927",
	image: "./assets/images/jazzSinger.jpg"
};
var question03 = {
	question: "Finish this quote: Life is like _________.",
	answers: ["a game of chess", " neverending book", "an hourglass", "box of chocolates"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "box of chocolates",
	image: "./assets/images/forrestGump.gif"
};
var question04 = {
	question: "Han Solo is a major character for which movie franchise?",
	answers: ["Star Wars", "Indiana Jones", "Terminator", "Blade Runner"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Star Wars",
	image: "./assets/images/hanSolo.gif"
};
var question05 = {
	question: "What was the first technicolor film?",
	answers: ["Gone with the Wind", "Wizard of Oz", "Cupid Angling", "The Jazz Singer"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Cupid Angling",
	image: "./assets/images/cupidAngling.jpg"
};
var question06 = {
	question: "What filmmaker is considered the Master of Suspense?",
	answers: ["M. Night Shyamalan", "Wes Craven", "Guillermo del Toro", "Alfred Hitchcock"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Alfred Hitchcock",
	image: "./assets/images/theBirds.gif"
};
var question07 = {
	question: "Which actor has not portrayed Batman?",
	answers: ["George Clooney", "Ryan Gosling", "Michael Keaton", "Christian Bale"],
	values: ["incorrect", "correct", "incorrect", "incorrect"],
	correct: "Ryan Gosling",
	image: "./assets/images/batman.gif"
};
var question08 = {
	question: "What London neighborhood is also the name of a romantic comedy starring Julia Roberts & Hugh Grant?",
	answers: ["Islington", "White Chapel", "Notting Hill", "Wimbledon"],
	values: ["incorrect", "incorrect", "correct", "incorrect"],
	correct: "Notting Hill",
	image: "./assets/images/nottingHill.gif"
};
var question09 = {
	question: "What 2000 epic historical drama starred Russell Crowe?",
	answers: ["Gladiator", "Alexander", "300", "Troy"],
	values: ["correct", "incorrect", "incorrect", "incorrect"],
	correct: "Gladiator",
	image: "./assets/images/gladiator.gif"
};
var question10 = {
	question: "What franchise does Mike Myers star in as a timetraveling spy?",
	answers: ["Allied", "James Bond", "Inspector Gadget", "Austin Powers"],
	values: ["incorrect", "incorrect", "incorrect", "correct"],
	correct: "Austin Powers",
	image: "./assets/images/austinPowers.gif"
};


var questionsArray = [question01, question02, question03, question04, question05, question06, question07, question08, question09, question10];

	function start () {
		$(".content-div").empty();
		var startButton = $("<button>");
		startButton.text("Start");
		startButton.addClass("start btn btn-default answerBtn");
		$(".content-div").append(startButton);
	};

	function run() {
      intervalId = setInterval(decrement, 1000);
    };

    function decrement() {
      time--;
      $(".timer-div").html("Time Remaining: " + time + " Seconds");
      if (time == 0) {
        if (arrayFinder < questionsArray.length-1) {
        	setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 1000);
        	solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      	else if (arrayFinder < questionsArray.length) {
      		setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 1000);
      		solutionWrite(questionsArray[arrayFinder]);
	    	$(".question-div").html("Incorrect!");
        	stop();
        	unanswered++;
      	}
      };
    };

    function stop() {
      clearInterval(intervalId);
    };

	function questionWrite (obj) {
		time = 10;
		$(".timer-div").empty();
		$(".timer-div").html("Time Remaining: " + time + " Seconds");
		$(".question-div").empty();
		$(".content-div").empty();
		run ();
		$(".question-div").html(obj.question);
		for (var i = 0; i < obj.answers.length; i++) {
			var answerButton = $("<button>");
			answerButton.addClass("answer btn btn-default answerBtn");
			answerButton.text(obj.answers[i]);
			answerButton.attr("value", obj.values[i]);
			$(".content-div").append(answerButton);
			$(".content-div").append("<br>");
		};
	};
// Show correct answer
	function solutionWrite (obj) {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".content-div").html("The correct answer was " + obj.correct + "<br>");
		var characterImage = $("<img>");
		characterImage.attr("height", "250");
		characterImage.attr("src", obj.image);
		characterImage.addClass("character")
		$(".content-div").append(characterImage);
		arrayFinder++;
	};

	function startWrite () {
		questionWrite(question01);
	};
// Choose answer - defines to user whether they are incorrect or correct
	function answerSelect () {
		stop();
		if ($(this).attr("value") == "correct") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Correct!");
			correct++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 3000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 3000);
      		}
		}
		else if ($(this).attr("value") == "incorrect") {
			solutionWrite(questionsArray[arrayFinder]);
			$(".question-div").html("Incorrect!");
			incorrect++;
			if (arrayFinder < questionsArray.length) {
				setTimeout(function () {questionWrite(questionsArray[arrayFinder])}, 3000);
			}
			else if (arrayFinder < questionsArray.length+1) {
		        setTimeout(function () {endWrite(questionsArray[arrayFinder])}, 3000);
      		}
		}
	};
// Show results
	function endWrite () {
		$(".question-div").empty();
		$(".content-div").empty();
		$(".question-div").html("Your Score:");
		$(".content-div").html("<p> Correct: " + correct + "</p>" + "<p> Incorrect: " + incorrect + "</p>" + "<p> Unanswered: " + unanswered + "</p>");
		var resetButton = $("<button>");
		resetButton.addClass("reset btn btn-default answerBtn");
		resetButton.text("Again?");
		$(".content-div").append(resetButton);
	}
// Start trivia over
	function resetClick () {
		arrayFinder = 0;
		incorrect = 0;
		correct = 0;
		unanswered = 0;
		startWrite();
	}

	$(document).on("click", ".start", startWrite);

	$(document).on("click", ".answer", answerSelect);

	$(document).on("click", ".reset", resetClick);


start();