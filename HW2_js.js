function check(){
			var exercise1 = document.quiz.exercise1.value;
			var exercise2 = document.quiz.exercise2.value;
			var exercise3 = document.quiz.exercise3.value;
			var exercise4 = document.quiz.exercise4.value;
			var exercise5 = document.quiz.exercise5.value;
			var exercise6 = document.quiz.exercise6.value;
			var exercise7 = document.quiz.exercise7.value;
			var exercise8 = document.quiz.exercise8.value;
			var exercise9 = document.quiz.exercise9.value;
			var exercise10 = document.quiz.exercise10.value;
			
			var correct = 0;
			
			if(exercise1 == "d") {
			correct++;
			}
			if(exercise2 == "b") {
			correct++;
			}
			if(exercise3 == "c") {
			correct++;
			}
			if(exercise4 == "d") {
			correct++;
			}
			if(exercise5 == "a") {
			correct++;
			}
			if(exercise6 == "c") {
			correct++;
			}
			if(exercise7 == "b") {
			correct++;
			}
			if(exercise8 == "c") {
			correct++;
			}
			if(exercise9 == "a") {
			correct++;
			}
			if(exercise10 == "b") {
			correct++;
			}
			
			var messages = ["Woo-hoo! Good job.", "You did alright.", "Try to do better."];
			var pictures = ["img/good.gif", "img/alright.gif", "img/bad.gif"];
			
			var range;
			if (correct < 6) {
				range = 2;
			}
			if (correct >= 6 && correct < 8) {
				range = 1;
			}
			if (correct >= 8) {
			range = 0;
			}
			
			document.getElementById("after_submit").style.visibility = "visible";
			document.getElementById("message").innerHTML = messages[range];
			document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
			document.getElementById("picture").src = pictures[range];
		}