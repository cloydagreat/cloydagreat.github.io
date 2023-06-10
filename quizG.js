//quiz game javaScript


const questions = [
	{
		question:"what is your name",
		answer:[
			{text:"Shark",correct:false},
			{text:"Cloy",correct:true},
			{text:"Destiny",correct:false},
			{text:"Nigga",correct:false}
		]
	},
	{
		question:"how old are you",
		answer:[
			{text:"30",correct:false},
			{text:"Idan",correct:true},
			{text:"5",correct:false},
			{text:"90",correct:false}
		]
	},
	{
		question:"what is your dream",
		answer:[
			{text:"Doctor",correct:false},
			{text:"Lawyer",correct:false},
			{text:"Chief",correct:false},
			{text:"Star",correct:true}
		]
	},
	{
		question:"what is your networth",
		answer:[
			{text:"I nor get shi shi",correct:true},
			{text:"Millions",correct:false},
			{text:"rest",correct:false},
			{text:"elon musk",correct:false}
		]
	}
];

const area = document.querySelector(".question h2");
const list = document.querySelector(".answer-space");
const button = document.querySelector(".nBut");

let idan = 0;
let score = 0;

function startQuiz(){
	idan = 0;
	score = 0;
	button.innerHTML = "next";
	display();	
}


function display(){
	reset();
	let currentQuest = questions[idan];
	let questionNum =idan + 1;
	area.innerHTML = questionNum +". "+ currentQuest.question;
	currentQuest.answer.forEach(t =>{
		let li = document.createElement("button");
		li.innerText = t.text;
		list.appendChild(li);
		if(t.correct){
			li.dataset.correct = t.correct;
		}
		
		li.addEventListener("click",selectbut)
	});
	
}


function reset(){
	button.style.display = "none"; 
	while(list.firstChild){
		list.removeChild(list.firstChild);
	}
}

function selectbut(e){
	const selectedBut = e.target;
	const isCorrect = selectedBut.dataset.correct === "true";
			
	if(isCorrect){
		selectedBut.classList.add("correct");
		score++;
	}
	else{
		selectedBut.classList.add("incorrect");
	}
	
	Array.from(list.children).forEach(but => {
		if(but.dataset.correct === "true"){
		but.classList.add("correct");
	}
		but.disabled = true;							  
	});		
	button.style.display = "block";	  
}

function displayScore(){
	reset();
	area.innerHTML = `you just scored ${score} out of ${questions.length}`;
	button.innerHTML = "play again"; 
	button.style.display ="block";
}


function handleNext(){
	idan++;
	if(idan + 1 <= questions.length ){
		display();
	}else{
		displayScore();
	}
}

button.addEventListener("click", function() {
	if(idan + 1 <= questions.length ){
		handleNext();
	}else{
		startQuiz();
	}
	
});

startQuiz();






