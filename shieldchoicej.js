
const answers = document.querySelectorAll('.answer');
const dropzones = document.querySelectorAll('.taro');
answers.forEach(answer => {
    answer.addEventListener('dragstart', dragStart);
});


dropzones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', dropAnswer);
});


function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
    e.target.classList.add('dragging');
}


function dragOver(e) {
    e.preventDefault();
}


function dropAnswer(e) {
    e.preventDefault();
    const answerId = e.dataTransfer.getData('text');
    const answerElement = document.getElementById(answerId);
    

    if (e.target.innerHTML === "") {
        e.target.appendChild(answerElement);
    }
}