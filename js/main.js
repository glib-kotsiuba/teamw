const openButtons = document.querySelectorAll("#modal-open");
console.log(openButtons);
const modal = document.getElementById(`modal-dialog`);

openButtons.forEach(openButton => {
  openButton.addEventListener('click', () => {
    modal.showModal();
    modal.style.opacity = '1';
  });
});

const createBtn = document.querySelector('.create-btn');
const participants = document.getElementById('participants');

createBtn.addEventListener('click', () => {
  localStorage.setItem("All_Participants", participants.value);
});
