var quiz = [ 
{
	question: "When was the broncos founded? :",
	answer: 1960
},

{
	question:"How many super bowls do the broncos have? :",
	answer:3
},

{
	question:">Who was super bowl 50 mvp?:",
	answer:"von miller"
},

{
	question:">Who is the All time leading rusher for the broncos? :",
	answer:"terrell davis"
},

{
	question:"What year is john elway drafted?:",
	answer:1983
},

{
	question:"Who is the Broncos 2016 first round pick? :",
	answer:"paxton lynch"
},

{
	question:"What is the name of the horse that runs after a touchdown? :",
	answer:"thunder"
},

]




function checkQuestion() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < quiz.length; i++) {	
		var answer = quiz[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++
		} else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect
}




