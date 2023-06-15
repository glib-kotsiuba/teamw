let juris = [];
let participants = [];
let table = document.querySelector('.tour-table tbody');
let markInputs = document.querySelectorAll('.input__box');


class Jury {
    constructor(name) {
        this.name = name;
    }
    giveMark(userID) {
        let rand = Math.floor(Math.random() * 10);
        rand = (rand != 0) ? rand : 1
        participants[userID].mark.push(rand);
    }
}

class Human {
    constructor(name, id, mark) {
        this.name = name;
        this.id = id;
        this.mark = mark;
    }
    // setMark(mark) {

    //     this.mark.push(mark);
    // }
    getSum() {
        this.markSum = this.mark.reduce((sum, current) => sum + current, 0);
        let markS = this.mark.reduce((sum, current) => sum + current, 0);
        return markS;
    }
}
function sortItems(array, type) {
    array.sort(function (a, b) {
        if (a[type] > b[type]) {
            return 1;
        }
        if (a[type] < b[type]) {
            return -1;
        }
        return 0;
    });
}


let participantsIndex = 1;
do {
    let currentParticipant = localStorage.getItem(`Participant-${participantsIndex}-name`);
    if (currentParticipant != null && currentParticipant.includes(':') === false) {
        let newParticipant = new Human(currentParticipant, participantsIndex, new Array());
        participants.push(newParticipant);
    }
    if (currentParticipant != null && currentParticipant.includes(':') === true) {
        let newParticipant = new Human(localStorage.getItem(`Participant-${participantsIndex}-name`).substring(0, localStorage.getItem(`Participant-${participantsIndex}-name`).indexOf(':')), participantsIndex, new Array());
        participants.push(newParticipant);
    }
    participantsIndex += 1;
} while (localStorage.getItem(`Participant-${participantsIndex}-name`) != null);

for (let i = 1; ; i++) {
    if (localStorage.getItem(`Judge-${i}-name`) != null) {
        let newJury = new Jury(localStorage.getItem(`Judge-${i}-name`));
        juris.push(newJury);
    }
    else {
        break;
    }

}
sortItems(participants, "id"); // отсортировка участников
function printTable() {
    let tableHeader = document.createElement(`tr`);
    tableHeader.innerHTML = `
        <th>№</th>
        <th>Name</th>
        <th>${juris[0].name}</th>
        <th>${juris[1].name}</th>
        <th>${juris[2].name}</th>
    `;
    table.appendChild(tableHeader);
    for (let i = 0; i < participants.length; i++) {
        let newRow = document.createElement('tr');
        newRow.classList.add('participant-row');
        newRow.innerHTML = `<td>${participants[i].id}</td>
        <td>${participants[i].name}</td>
        <td class="input__box cell-mark"><div class="cell-txt"><input type="text" class="table-input" style="display:none"><p class="show-txt">Set mark</p><img src="../source/pencil.svg" class="edit-btn"><img src="../source/check.svg" class="check-btn" style="display:none"></div></td>
        <td class="input__box cell-mark"><div class="cell-txt"><input type="text" class="table-input" style="display:none"><p class="show-txt">Set mark</p><img src="../source/pencil.svg" class="edit-btn"><img src="../source/check.svg" class="check-btn" style="display:none"></div></td>
        <td class="input__box cell-mark"><div class="cell-txt"><input type="text" class="table-input" style="display:none"><p class="show-txt">Set mark</p><img src="../source/pencil.svg" class="edit-btn"><img src="../source/check.svg" class="check-btn" style="display:none"></div></td>
        `;
        table.appendChild(newRow);
    }
}
printTable();

function setMarks() {
    let row = document.querySelectorAll('.participant-row');
    for (let i = 0; i < row.length; i++) {
        let currentParticipantId = +row[i].children[0].childNodes[0].nodeValue;
        let currentUser = participants.find(elem => elem.id == currentParticipantId);
        currentUser.mark = new Array();
        for (let j = 2; j < 5; j++) {
            let currentMark = row[i].children[j].children[0].children[1].childNodes[0].nodeValue;
            currentUser.mark.push(+currentMark);

        }
        currentUser.markSum = currentUser.getSum();
        localStorage.setItem(`Participant-${currentUser.id}-name`, `${currentUser.name}: ${currentUser.getSum()}`);
    }
}

function setRandomMark() {
    let markCount = document.querySelectorAll('.cell-mark');
    for (let i = 0; i < markCount.length; i++) {
        markCount[i].children[0].children[1].childNodes[0].nodeValue = "";
        let rand = Math.floor(Math.random() * 10);
        rand = (rand != 0) ? rand : 1;
        markCount[i].children[0].children[1].childNodes[0].nodeValue = rand;

    }
    setMarks()
}
document.querySelector('.randomMark').addEventListener('click', () => { setRandomMark() });