
let rightAnswer;
let currentQuestionIndex = 0;
let rightAnswers = 0;
let wrongAnswers = 0;
let timeInterval;
let time = 5; 

		const cuestionary = [
			{
				"question": "¿Quien descubrió América?",
				"img": "/res/blog-material/trivial/img/america.png",
				"audio": "/res/blog-material/trivial/audio/america.mp3",
				"answers": ["Colón", "El Fari", "Yo mismo", "Tú"]
			},
			{
				"question": "¿Quién es el mayor superheroe de todos los tiempos?",
				"img": "/res/blog-material/trivial/img/heroe.png",
				"audio": "/res/blog-material/trivial/audio/superheroe.mp3",
				"answers": ["Spiderman", "Batman", "Yo mismo", "Tú mismo"]
			},
			{
				"question": "¿Por qué lo pájaros pían?",
				"img": "/res/blog-material/trivial/img/birds.png",
				"audio": "/res/blog-material/trivial/audio/pajaros.mp3",
				"answers": ["Tienen hambre", "Tienen frío", "Están contentos", "Están tristes"]
			}
		];


		const printHTMLQuestion = (i) => {
			currentQuestionIndex++;
			const q = cuestionary[i];
			let a = q.answers;
			rightAnswer = a[0];
			a = a.sort((a,b) => Math.floor(Math.random() * 3) -1);


			let audio = new Audio(q.audio);
			audio.play();
			
			const htmlAnswersArray = a.map( currentA => `<p class="answer"><button onClick="evaluateAnswer('${currentA}', this)">X</button> <span>${currentA}</span></p>`);
			const htmlAnswers = htmlAnswersArray.join(' ');


				let htmlQuestionCode = `<p>${q.question}</p><img src="${q.img}"/><div>${htmlAnswers}</div>`;
			document.querySelector('.question').innerHTML = htmlQuestionCode;

			time = 5;
			document.querySelector('.time').innerHTML = time;
			clearInterval(timeInterval);
			timeInterval = setInterval( ()=> {
				time--;
				if(time == 0){
					alert("Has perdido");
					clearInterval(timeInterval);

				}else{
					document.querySelector('.time').innerHTML = time;
				}
			},1000)

		}

		const evaluateAnswer = (answer, obj )=>{
			document.querySelectorAll('.answer').forEach( a => a.classList.remove('right', 'wrong'));

			const parentP = obj.parentNode;

			console.log('answer:  ' + answer + ', rightAnswer: ' + rightAnswer)
			if(answer == rightAnswer){
				parentP.classList.add('right');
				rightAnswers++;
				document.querySelector('.rightCounter').innerHTML = rightAnswers;
			}else{
				parentP.classList.add('wrong');
				wrongAnswers++;
				document.querySelector('.wrongCounter').innerHTML = wrongAnswers;
			}
		}

		const nextQuestion = _ => {

		}

		const iniciarTest = _ =>{
			printHTMLQuestion(0);
			document.querySelector('.btnIniciar').style.display = 'none';
			document.querySelector('.mamotreto').style.display = 'block';

		}