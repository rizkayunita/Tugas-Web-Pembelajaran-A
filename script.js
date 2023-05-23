const quizData = [
    {
        question: "Apa kepanjangan dari HNI?",
        a:"Halal Neuro Internasional",
        b:"Halal Network Internasional",
        c:"Halal Nature Internasional",
        correct: "b",
    },
    {
        question: "Makanan kesehatan alami yang dibuat dari sinergi 23 herbal buah-buahan dan sayuran yang kaya akan antioksidan dan serat alami adalah...",
        a:"Centella",
        b:"Spirulina",
        c:"Extra Food",
        correct: "c",
    },
    {
        question: "Berikut yang bukan termasuk elemen tanaman dari Kopi 7 elemen adalah...",
        a:"Bunga Gula Palm",
        b:"Buah Markisa",
        c:"Kulit Manggis",
        correct: "b",
    },
    {
        question: "Produk herbal yang dapat meringankan gejala kencing manis adalah...",
        a:"Diabextrac",
        b:"Harumi",
        c:"Bilberry",
        correct: "a",
    },
    {
        question: "Selain produk makananan herbal, HNI HPAI juga memiliki produk perawatan kesehatan seperti...",
        a:"Herbal Propolis",
        b:"HNI Beauty Facial Wash",
        c:"Semua Benar",
        correct: "c",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl=> {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer= getSelected()
    if (answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }
    
        currentQuiz++
    
        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML= `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reload</button>
            
            `
            
        } 
    }
    
})
