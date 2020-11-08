const quizData = [
    {
        question: 'How old is Prince Harry?',
        a: '36',
        b: '30',
        c: '32',
        d: '28',
        correct: 'a'
    },
    {
        question: 'what is the most used programming language in 2019?',
        a: 'Java',
        b: 'JavaScript',
        c: 'Python',
        d: 'C++',
        correct: 'b',
    },
    {
        question: 'Who is a singer?',
        a: 'Donald Trump',
        b: 'john legend',
        c: 'harry style',
        d: 'Tom Hank',
        correct: 'c',
    },
   
    {
        question: 'what year was javaScript launched?',
        a: '2018',
        b: '1994',
        c: '2013',
        d: 'none of the above',
        correct: 'd',
    },
    {
        question: 'who is the next president of the United states?',
        a: 'Donald Trump',
        b: 'Joe Biden',
        c: 'Barac obama',
        d: 'none of the above',
        correct: 'b',
    } 
];


const quiz = document.getElementById('quiz');
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score= 0;

loadQuiz();
 
function loadQuiz(){
    deselectAnswer();

    const currentQuizData =  quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    
}

function getSelected(){

    let answer = undefined;
    

    answersEls.forEach( (answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    });
    return answer;
        
}

function deselectAnswer() {
    answersEls.forEach(answerEl => {
        answerEl.checked = false;
    })
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    currentQuiz ++;
    if(currentQuiz < quizData.length){
       loadQuiz();
    }else {
       quiz.innerHTML =  `<h2>You answered correctly at ${score} / 
       ${quizData.length} questions.</h2>

        <button onclick = "location.reload()">Retake Quiz</button>`
    }
};

});    




   
   
   
    
   

    
