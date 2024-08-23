var index = 0;

const sections = [
    document.getElementById('age-gender'),
    document.getElementById('cholesterol'),
    document.getElementById('smoker'),
    document.getElementById('blood-pressure'),
    document.getElementById('results'),
];

function showSection(index) {
    console.log(index);
    for(var i = 0; i < sections.length; i++){
        if(i == index){
            sections[i].style.display = 'flex';
        } else {
            sections[i].style.display = 'none'
        }
    }
}

function nextPage() {
    if(index < sections.length - 1){
        index += 1;
        showSection(index);
    }
}

function previousPage() {
    if (index > 0) {
        index -= 1;
        showSection(index);
    }
}

function restartForm() {
    index = 0;
    showSection(index);
}


document.addEventListener('DOMContentLoaded', function () {
    showSection(index);
    document.getElementById('next').addEventListener('click', nextPage);
    document.getElementById('previous').addEventListener('click', previousPage);
    document.getElementById('restart').addEventListener('click', restartForm);
});
