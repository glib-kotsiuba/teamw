let inputs = document.querySelectorAll('.cell-txt');


function showInput(block) {
  block.querySelector('.table-input').style.display = 'block';
  block.querySelector('.edit-btn').style.display = 'none';
  block.querySelector('.check-btn').style.display = 'block';
  block.childNodes[0].defaultValue = block.childNodes[1].childNodes[0].nodeValue;
  block.childNodes[1].childNodes[0].nodeValue = "";
}
function hideInput(block) {
  block.querySelector('.table-input').style.display = 'none';
  block.querySelector('.edit-btn').style.display = 'block';
  block.querySelector('.check-btn').style.display = 'none';
  block.childNodes[1].childNodes[0].nodeValue = `${block.querySelector('.table-input').value}`;
}
inputs.forEach((block) => {
  block.childNodes[1].addEventListener('click', () => {
    showInput(block);
  })
  block.querySelector('.edit-btn').addEventListener('click', () => {
    showInput(block);
  })
  block.querySelector('.check-btn').addEventListener('click', () => {
    hideInput(block);
  })
})


document.querySelectorAll('.btn-data-set').forEach(btn => {
  btn.addEventListener('click', () => {
    for (let i = 1; i <= participantsCount; i++) {
      localStorage.setItem(`Participant-${i}-name`, `${tbodyParticipants.children[i].children[1].childNodes[0].childNodes[1].childNodes[0].nodeValue}`)
    }
    for (let i = 1; i <= judgesNumber; i++) {
      localStorage.setItem(`Judge-${i}-name`, `${tbodyJudges.children[i].children[0].children[0].children[1].childNodes[0].nodeValue}`)
    }
  })
})


document.querySelectorAll('.next-tour').forEach(btn => {
  btn.addEventListener('click', (() => {
    setMarks();
    for (let i = 0; i < participants.length; i++) {
      participants[i].getSum();
    }
    sortItems(participants, "markSum");
    participants = participants.slice(-5);
    localStorage.clear();
    for (let i = 0; i < 5; i++) {
      localStorage.setItem(`Participant-${i + 1}-name`, `${participants[i].name}: ${participants[i].getSum()}`);
    }
    for (let i = 0; i < juris.length; i++) {
      localStorage.setItem(`Judge-${i + 1}-name`, juris[i].name);
    }
  }))
})
document.querySelectorAll('.final-tour').forEach(btn => {
  btn.addEventListener('click', () => {
    setMarks();
    sortItems(participants, "markSum");
    participants = participants.slice(-3);
    for (let i = 2; i >= 0; i--) {
      localStorage.setItem(`Winner-${i + 1}`, `${participants[i].name}: ${participants[i].getSum()}`)
    }
  })
})