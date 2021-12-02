const data = [
    {
        question: 'Apakah huruf keempat dalam abjad?',
        a: "Huruf d",
        b: "Huruf f",
        c: "Huruf g",
        d: "Huruf a",
        correct: "d"
    },
    {
        question: 'Kalau ada bus kecelakaan, pesawat jatuh, ada kapal tenggelam, semuanya akan muncul di mana?',
        a: "Kantor polisi",
        b: "Rumah sakit",
        c: "Di TV",
        d: "Kuburan",
        correct: "c"
    },
    {
        question: 'Kalau sedang sendiri, kakinya ada empat, kalau berdua, kakinya jadi ada delapan. Siapakah aku?',
        a: "Kursi",
        b: "Meja",
        c: "Pak RT",
        d: "Om Faizul",
        correct: "b"
    },
    {
        question: 'Kenapa matahari bisa tenggelam?',
        a: "Karena disuruh bobok",
        b: "Karena ada yang bocor",
        c: "Karena tidak bisa berenang",
        d: "Karena lagi corona",
        correct: "c"
    }
]
const question = document.getElementById('question');
const a_text = document.getElementById('a');
const b_text = document.getElementById('b');
const c_text = document.getElementById('c');
const d_text = document.getElementById('d');
const submit = document.getElementById('submit');
const card = document.getElementById('card');
let point = 0;

let currentData = 0;
let currentAnswer = -1;
const getAnswer = () => {
    const answer = document.querySelectorAll('.form-check-input');
    for (let i = 0; i < answer.length; i++) {
        if (answer[i].checked) {
            return answer[i].value;
        }
    }

}
const loadQuiz = () => {
    currentQuizData = data[currentData];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

submit.addEventListener("click", () => {
    currentData++;
    currentAnswer++;
    if (currentData < data.length) {
        const ans = getAnswer();
        console.log(currentData, ans, data[currentAnswer].correct, data.length)
        if (ans == data[currentAnswer].correct) {
            point++;
            console.log(point);
        }
        loadQuiz();
    } else {
        if(point<(data.length/2)){
            card.innerHTML = `<h4>Maaf anda kurang receh, anda hanya benar ${point} dari ${data.length}</h4>`
        }else{
            card.innerHTML = `<h4>You got me brada! Bestie forever! Send me your jokes! anda benar ${point} dari ${data.length}</h4>`
        }
    }
});
loadQuiz()
console.log(currentData)