
//----------NAMES----------

const names = [
  "Олександр",
  "Анна",
  "Олексій",
  "Аліса",
  "Андрій",
  "Ангеліна",
  "Артем",
  "Валерія",
  "Іванна",
  "Дмитро",
  "Дарина",
  "Євген",
  "Катерина",
  "Жанна",
  "Ірина",
  "Іван",
  "Інесса",
  "Костянтин",
  "Крістіна",
  "Карина",
  "Микола",
  "Наталія",
  "Олег",
  "Ольга",
  "Роман",
  "Сергій",
  "Софія",
  "Тетяна",
  "Шарлотта",
  "Ельза",
  "Юлія",
  "Антон",
  "Вероніка",
  "Оксана",
  "Ігор",
  "Єлизавета",
  "Максим",
  "Світлана",
  "Денис",
  "Вікторія",
  "Мілана",
  "Руслан",
  "Діана",
  "Оксана",
  "Єва",
  "Камілла",
  "Марк",
  "Варвара",
  "Нікіта",
  "Зоряна"
];

// ----------SURNAMES----------

const surnames = [
  "Коваленко",
  "Бондаренко",
  "Ткаченко",
  "Ковальчук",
  "Шевченко",
  "Кравченко",
  "Романенко",
  "Захарченко",
  "Левченко",
  "Кузьменко",
  "Козак",
  "Мельник",
  "Шаповаленко",
  "Білоус",
  "Тимченко",
  "Бойко",
  "Ковалюк",
  "Остапенко",
  "Поляков",
  "Карпенко",
  "Клименко",
  "Федоренко",
  "Шевельов",
  "Гончаренко",
  "Литвиненко",
  "Кулик",
  "Руденко",
  "Луценко",
  "Кучеренко",
  "Матвієнко",
  "Бараненко",
  "Жуковський",
  "Косенко",
  "Тарасенко",
  "Козловський",
  "Семенченко",
  "Лихачов",
  "Бондарчук",
  "Масленко",
  "Гончарук",
  "Даниленко",
  "Гребенюк",
  "Кравчук",
  "Захарчук",
  "Ковалюк",
  "Карплюк",
  "Мельничук",
  "Литвинчук",
  "Балан",
  "Косач"
];

// ----------TALENTS----------

const talents = [
  "Спів",
  "Танці",
  "Малювання",
  "Скрипка",
  "Гра на піаніно",
  "Гра на гітарі",
  "Хореографія",
  "Акробатика",
  "Комедії",
  "Магія",
  "Гра на флейті",
  "Гра на саксофоні",
  "Поетичне виконавство",
  "Скульптура",
  "Гра на українському бандурі",
  "Гра на барабанах",
  "Живопис",
  "Театральна акторська гра",
  "Фігурне катання",
  "Стрільба з лука",
  "Створення музики",
  "Гра на гармоні",
  "Фокуси",
  "Гра на сопілці",
  "Балет",
  "Робототехніка",
  "Гра на акордеоні",
  "Льодові скульптури",
  "Тренування домашніх тварин",
  "Фрістайл",
  "Багатоголосний спів",
  "Аерографія",
  "Боді-арт",
  "Скейтбординг",
  "Магія з картами",
  "Скульптури з кераміки",
  "Малювання на склі",
  "Фігурне катання на роликах",
  "Танці з вогнем"
];


// ----------JURI----------

const juryMembers = [
  {
    name: "Євген Паперний",
    role: "музичний продюсер"
  },
  {
    name: "Світлана Лобода",
    role: "поп-виконавиця"
  },
  {
    name: "Владислав Лобода",
    role: "танцор"
  },
  {
    name: "Наталія Фаліон",
    role: "танцівниця, хореограф"
  },
  {
    name: "Олексій Потапенко",
    role: "музичний продюсер"
  },
  {
    name: "Сергій Притула",
    role: "телеведучий, комедіант"
  },
  {
    name: "Ектор Хіменес-Браво",
    role: "шеф-повар"
  },
  {
    name: "Ольга Фреймут",
    role: "телеведуча, акторка"
  },
  {
    name: "Ігор Кондратюк",
    role: "телеведучий, продюсер"
  },
  {
    name: "Алла Костромічова",
    role: "танцівниця, хореограф"
  }
];


// ----------ALGORITHM----------

const judgesNumber = 3;

let participantsCount = localStorage.getItem('All_Participants');
participantsCount = parseInt(participantsCount);

let tbodyParticipants = document.querySelector('.participants-table tbody');
let tbodyJudges = document.querySelector('.judges-table tbody');

function getRandomElement(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}


/////////===Table print=====///////
function printJudgesTable() {
  for (let i = 0; i < judgesNumber; i++) {
    let newRow = document.createElement('tr');
    newRow.classList.add('table-row');
    newRow.innerHTML = `
    <td data-cell="name" class="input__box"><div class="cell-txt judge"><input type="text" class="table-input" style="display:none"><p class="show-txt">Enter name </p><img src="../source/pencil.svg" class="edit-btn"><img src="../source/check.svg" class="check-btn" style="display:none"></div></td>
        <td data-cell="talant" class="input__box"><div class="cell-txt judge"><input type="text" class="table-input" style="display:none"><p class="show-txt">Enter talant </p><img src="../source/pencil.svg" class="edit-btn"><img src="../source/check.svg" class="check-btn" style="display:none"></div></td>
        `;
    tbodyJudges.appendChild(newRow);
  }

}

function printParticipantsTable() {
  for (let i = 0; i < participantsCount; i++) {
    let newRow = document.createElement('tr');
    newRow.classList.add('table-row');
    newRow.innerHTML = `
        <td data-cell="number">${i + 1}</td>
        <td data-cell="name" class="input__box"><div class="cell-txt"><input type="text" class="table-input" style="display:none"><p class="show-txt">Enter name </p><img src="../source/pencil.svg" class="edit-btn"><img src="../source/check.svg" class="check-btn" style="display:none"></div></td>
        <td data-cell="talant" class="input__box"><div class="cell-txt"><input type="text" class="table-input" style="display:none"><p class="show-txt">Enter talant </p><img src="../source/pencil.svg" class="edit-btn"><img src="../source/check.svg" class="check-btn" style="display:none"></div></td>
    `;
    tbodyParticipants.appendChild(newRow);
  }
}


printJudgesTable()
printParticipantsTable();

///////////======user functions======//////

let randomBtn = document.querySelector('.random-btn');
randomBtn.addEventListener('click', function () {
  for (let i = 1; i <= participantsCount; i++) {
    tbodyParticipants.children[i].children[1].childNodes[0].childNodes[1].childNodes[0].nodeValue = `${getRandomElement(names)} ${getRandomElement(surnames)}`;
    tbodyParticipants.children[i].children[2].childNodes[0].childNodes[1].childNodes[0].nodeValue = `${getRandomElement(talents)}`;
  }
  for (let i = 1; i <= judgesNumber; i++) {
    tbodyJudges.children[i].children[0].childNodes[0].childNodes[1].childNodes[0].nodeValue = `${getRandomElement(juryMembers).name}`;
    tbodyJudges.children[i].children[1].childNodes[0].childNodes[1].childNodes[0].nodeValue = `${getRandomElement(talents)}`;
  }
})