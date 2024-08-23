var index = 0;

// Section references for navigation
const sections = [
    document.getElementById('age-gender'),
    document.getElementById('cholesterol'),
    document.getElementById('smoker'),
    document.getElementById('blood-pressure'),
    document.getElementById('results'),
];

// Show section by index
function showSection(index) {
    for(var i = 0; i < sections.length; i++){
        if(i == index){
            sections[i].style.display = 'flex';
        } else {
            sections[i].style.display = 'none'
        }
    }
}

// Calculate score based on inputs
function calculateScore() {
    // Example calculation; you should replace this with your actual scoring logic
    const male = document.getElementById('genderChoice1').value;
    const smoker = document.getElementById('smokeChoice1').value;
    const treated = document.getElementById('bpChoice1').value;
    const age = parseInt(document.getElementById('age').value);
    const totalChol = parseInt(document.getElementById('t-chol').value);
    const hdlChol = parseInt(document.getElementById('hdl-chol').value);
    const bp = parseInt(document.getElementById('bp-range').value);

    console.log(male);
}

// Increments index to next section
function nextPage() {
    if(index == 3){
        calculateScore();
    }
    if(index < sections.length - 1){
        index += 1;
        showSection(index);
    }
}

// Decrements index to next section
function previousPage() {
    if (index > 0) {
        index -= 1;
        showSection(index);
    }
}

// Returns index to start section
function restartForm() {
    index = 0;
    showSection(index);
}


document.addEventListener('DOMContentLoaded', function () {
    // Initialize page with first section
    showSection(index);

    // Set listeners on navigation buttons
    document.getElementById('next').addEventListener('click', nextPage);
    document.getElementById('previous').addEventListener('click', previousPage);
    document.getElementById('restart').addEventListener('click', restartForm);

    const age = document.getElementById('age');
    const totalChol = document.getElementById('t-chol');
    const hdlChol = document.getElementById('hdl-chol');
    const bp = document.getElementById('bp-range');

    const ageValue = document.getElementById('age-value');
    const totalCholValue = document.getElementById('total-chol-value');
    const hdlCholValue = document.getElementById('hdl-chol-value');
    const bpValue = document.getElementById('bp-value');

    // Listeners for setting text values
    age.addEventListener('input', function () {
        ageValue.textContent = age.value;
    });

    totalChol.addEventListener('input', function () {
        totalCholValue.textContent = totalChol.value;
    });

    hdlChol.addEventListener('input', function () {
        hdlCholValue.textContent = hdlChol.value;
    });

    bp.addEventListener('input', function () {
        bpValue.textContent = bp.value;
    });
});
