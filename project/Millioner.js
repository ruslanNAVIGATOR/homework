const answer1 = document.querySelector(".answer0"),
    answer2 = document.querySelector(".answer1"),
    answer3 = document.querySelector(".answer2"),
    answer4 = document.querySelector(".answer3");

const answerElement = document.querySelectorAll(".answer"),
    clueElement = document.querySelectorAll(".buttons div");

const question = document.querySelector(".question");

const money = document.querySelectorAll(".stage");

let indexOfStage = 14;

let numberOfQuestion = 0;

let indexOfQuestion = 0;

let modal = document.querySelector("#window");

const questions = [
    {
        question: " К какой части речи не может относиться слово “Привет”?",
        options: [
            "Междометие",
            "Прилогательное",
            "Существительное",
            "Частица",
        ],
        rightAnswer: 2,
    },
    {
        question: ' Какой норматив не сдается в школе?',
        options: ["Бег", "Плавание", "Отжимание", "Кардио"],
        rightAnswer: 1,
    },
    {
        question: "Луч, исходящий из вершины угла и делящий его на два равных угла. называется…",
        options: ["Отрезок", "Гипотенуза", "Медиана", "Биссектриса"],
        rightAnswer: 3,
    },
    {
        question: "Что из этого не является одноклеточным организмом?",
        options: ["Гидра зеленая", "Амеба", "Инфузория-туфелька", "Эвглена зеленая"],
        rightAnswer: 0,
    },
    {
        question: "Чтобы найти площадь прямоугольника нужно...",
        options: [
            "К длине прибавить ширину",
            "Длину умножить на ширину",
            "Длину разделить на ширину",
            "Из длины вычесть ширину",
        ],
        rightAnswer: 1,
    },
    {
        question: "Из курса какого школьного предмета вам знакомо правило буравчика?",
        options: [
            "Физика",
            "Математика",
            "Химия",
            "Астрономия",
        ],
        rightAnswer: 0,
    },
    {
        question: " Сколько материков существует на планете Земля?",
        options: ["5", "8", "6", "7"],
        rightAnswer: 2,
    },
    {
        question: "Сколько лет маме, если она старше дочери на 24 года, а дочь моложе матери в 7 раз?",
        options: [
            "28",
            "35",
            "24",
            "42",
        ],
        rightAnswer: 0,
    },
    {
        question:
            " Какой остров самый большой в мире?",
        options: ["Сарпинский", "Гренландия", "Мадагаскар", "Бали"],
        rightAnswer: 1,
    },
    {
        question: " Какая из перечисленных рек — самая длинная?",
        options: ["Днепр", "Нил", "Амазонка", "Волга"],
        rightAnswer: 2,
    },
    {
        question:
            "Рядом с пирамидой Хеопса в Гизе расположены ещё две пирамиды. Как они называются?",
        options: ["Хази и Мену", "Осериса и Емона", "Хеврена и Мекерина", "Пирю и Жарона"],
        rightAnswer: 2,
    },
    {
        question: "В одном из следующих словосочетаний допущена досадная ошибка. В каком?",
        options: [
            "Более пятиста человек",
            "Подписанные договоры",
            "Нет чулок",
            "Несколько полотенец",
        ],
        rightAnswer: 0,
    },
    {
        question: " Какое это число LXXVII",
        options: [
            "63",
            "53",
            "87",
            "77",
        ],
        rightAnswer: 3,
    },
    {
        question: "Пигмент, который окрашивает листья в зеленый цвет называется...",
        options: ["Вакуоль", "Меланин", "Фотосинтез", "Хлорофилл"],
        rightAnswer: 3,
    },
    {
        question: " Сколько хромосом в геноме человека?",
        options: ["47", "46", "48", "45"],
        rightAnswer: 1,
    },
];

window.addEventListener("load", () => {
    load();
});

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question;
    answer1.innerHTML = questions[indexOfQuestion].options[0];
    answer2.innerHTML = questions[indexOfQuestion].options[1];
    answer3.innerHTML = questions[indexOfQuestion].options[2];
    answer4.innerHTML = questions[indexOfQuestion].options[3];
};

for (answer of answerElement) {
    answer.addEventListener("click", (e) => controlAnswer(e));
}
for (buttonsDiv of clueElement) {
    buttonsDiv.addEventListener("click", (e) => selectClue(e));
}

const controlAnswer = (el) => {
    console.log(el);
    if (el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add("correct");
        winMoney("win");
        indexOfStage--;
        numberOfQuestion++;
        if (numberOfQuestion == 15) {
            modal.style.display = "block";
            document.querySelector(".content h1").innerHTML = "Поздравляем!";
            document.querySelector(".score").innerHTML = "Ваш выигрыш - 1000000!";
        }
        setTimeout(nextLevel, 2000);
    } else {
        el.target.classList.add("wrong");
        setTimeout(gameOver, 2000);
    }
    disabledAnswers();
};

const winMoney = (status) => {
    console.log(money);
    money[indexOfStage].classList.add(`${status}`);
};

const disabledAnswers = () => {
    answerElement.forEach((item) => {
        item.classList.add("disabled");
        if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add("correct");
        }
    });
};

const nextLevel = () => {
    enableAnswer();
    indexOfQuestion++;
    load();
    clueFirst = document.querySelector(".answer0");
    clueFirst.style.visibility = "visible";
    clueSecond = document.querySelector(".answer1");
    clueSecond.style.visibility = "visible";
    clueFirst = document.querySelector(".answer2");
    clueFirst.style.visibility = "visible";
    clueSecond = document.querySelector(".answer3");
    clueSecond.style.visibility = "visible";
};

const enableAnswer = () => {
    answerElement.forEach((item) => {
        item.classList.remove("disabled", "correct", "wrong", "call", "help");
    });
};

const selectClue = (el) => {
    let first;
    let second;
    if (el.target.dataset.id == "fifty") {
        first = randomExp();
        second = randomExp();

        if (first == second) {
            second = randomExp();
        }
        console.log(first);
        console.log(second);

        clueFirst = document.querySelector(".answer" + first);
        clueFirst.style.visibility = "hidden";
        clueSecond = document.querySelector(".answer" + second);
        clueSecond.style.visibility = "hidden";
    } else if (el.target.dataset.id == "call") {
        first = random();
        clueFirst = document.querySelector(".answer" + first);
        clueFirst.classList.add("call");
    } else if (el.target.dataset.id == "help") {
        first = random();
        clueFirst = document.querySelector(".answer" + first);
        clueFirst.classList.add("help");
    }
};
function randomExp(
    min = 0,
    max = 3,
    exp = questions[indexOfQuestion].rightAnswer
) {
    let rand;

    while (true) {
        if ((rand = Math.floor(Math.random() * (max - min + 1)) + min) != exp)
            return rand;
    }
}

function random(min = 0, max = 3) {
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    return rand;
}

const gameOver = () => {
    modal.style.display = "block";
    if (numberOfQuestion >= 0 && numberOfQuestion < 5) {
        document.querySelector(".content h1").innerHTML = "Конец игры";
        document.querySelector(".score").innerHTML = "Ваш выигрыш - 0!";
    } else if (numberOfQuestion >= 5 && numberOfQuestion < 10) {
        document.querySelector(".content h1").innerHTML = "Конец игры";
        document.querySelector(".score").innerHTML = "Ваш выигрыш - 1000!";
    } else if (numberOfQuestion >= 10 && numberOfQuestion < 15) {
        document.querySelector(".content h1").innerHTML = "Конец игры";
        document.querySelector(".score").innerHTML = "Ваш выигрыш - 32000!";
    }
};