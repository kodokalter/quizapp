const data = [
    {
        question: 'Apakah huruf keempat dalam abjad?',
        a: "Huruf d",
        b: "Huruf f",
        c: "Huruf g",
        d: "Huruf a",
        correct: "a"
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
        correct: "a"
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



let currentData = 0;

const getAnswer = () => {
    const answer = document.querySelectorAll('form-check-input');
    answer.forEach((a) => {
        console.log(a.checked)
    })
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
    if (currentData < data.length) {
        loadQuiz();
    } else {
        card.innerHTML = "Sudah berhasil"
    }
    getAnswer();
    currentData++;
});