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
    let totalScore = 0;
    let riskPercentage = 0;
    // Get User inputs
    const male = document.querySelector('input[name="gender"]:checked').value;
    const smoker = document.querySelector('input[name="smoke"]:checked').value;
    const treated = document.querySelector('input[name="bp"]:checked').value;
    const age = parseInt(document.getElementById('age').value);
    const totalChol = parseInt(document.getElementById('t-chol').value);
    const hdlChol = parseInt(document.getElementById('hdl-chol').value);
    const bp = parseInt(document.getElementById('bp-range').value);

    if(!male){
        if (age >= 20 && age <= 34) {
            totalScore += -9;
        } else if (age >= 35 && age <= 39) {
            totalScore += -4;
        } else if (age >= 40 && age <= 44) {
            totalScore += 0;
        } else if (age >= 45 && age <= 49) {
            totalScore += 3;
        } else if (age >= 50 && age <= 54) {
            totalScore += 6;
        } else if (age >= 55 && age <= 59) {
            totalScore += 8;
        } else if (age >= 60 && age <= 64) {
            totalScore += 10;
        } else if (age >= 65 && age <= 69) {
            totalScore += 11;
        } else if (age >= 70 && age <= 74) {
            totalScore += 12;
        } else if (age >= 75 && age <= 79) {
            totalScore += 13;
        }

        if (age >= 20 && age <= 39) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 4;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 7;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 9;
            else if (totalChol >= 280) totalScore += 11;
        } else if (age >= 40 && age <= 49) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 3;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 5;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 6;
            else if (totalChol >= 280) totalScore += 8;
        } else if (age >= 50 && age <= 59) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 2;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 3;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 4;
            else if (totalChol >= 280) totalScore += 5;
        } else if (age >= 60 && age <= 69) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 1;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 1;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 2;
            else if (totalChol >= 280) totalScore += 3;
        } else if (age >= 70 && age <= 79) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 0;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 0;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 1;
            else if (totalChol >= 280) totalScore += 1;
        }

        if (smoker === 'true') {
            if (age >= 20 && age <= 39) totalScore += 8;
            else if (age >= 40 && age <= 49) totalScore += 5;
            else if (age >= 50 && age <= 59) totalScore += 3;
            else if (age >= 60 && age <= 69) totalScore += 1;
            else if (age >= 70 && age <= 79) totalScore += 1;
        }

        if (hdlChol >= 60) totalScore += -1;
        else if (hdlChol >= 50 && hdlChol <= 59) totalScore += 0;
        else if (hdlChol >= 40 && hdlChol <= 49) totalScore += 1;
        else if (hdlChol < 40) totalScore += 2;

        if (treated === 'true') {
            if (bp < 120) totalScore += 0;
            else if (bp >= 120 && bp <= 129) totalScore += 1;
            else if (bp >= 130 && bp <= 139) totalScore += 2;
            else if (bp >= 140 && bp <= 159) totalScore += 2;
            else if (bp >= 160) totalScore += 3;
        } else {
            if (bp < 120) totalScore += 0;
            else if (bp >= 120 && bp <= 129) totalScore += 0;
            else if (bp >= 130 && bp <= 139) totalScore += 1;
            else if (bp >= 140 && bp <= 159) totalScore += 1;
            else if (bp >= 160) totalScore += 2;
        }

        if (totalScore >= 17) riskPercentage = 30;
        else if (totalScore === 16) riskPercentage = 25;
        else if (totalScore === 15) riskPercentage = 20;
        else if (totalScore === 14) riskPercentage = 16;
        else if (totalScore === 13) riskPercentage = 12;
        else if (totalScore === 12) riskPercentage = 10;
        else if (totalScore === 11) riskPercentage = 8;
        else if (totalScore === 10) riskPercentage = 6;
        else if (totalScore === 9) riskPercentage = 5;
        else if (totalScore === 8) riskPercentage = 4;
        else if (totalScore === 7) riskPercentage = 3;
        else if (totalScore === 6 || totalScore === 5) riskPercentage = 2;
        else if (totalScore >= 1) riskPercentage = 1;
        else riskPercentage = 0;

    } else{
        if (age >= 20 && age <= 34) {
            totalScore += -7;
        } else if (age >= 35 && age <= 39) {
            totalScore += -3;
        } else if (age >= 40 && age <= 44) {
            totalScore += 0;
        } else if (age >= 45 && age <= 49) {
            totalScore += 3;
        } else if (age >= 50 && age <= 54) {
            totalScore += 6;
        } else if (age >= 55 && age <= 59) {
            totalScore += 8;
        } else if (age >= 60 && age <= 64) {
            totalScore += 10;
        } else if (age >= 65 && age <= 69) {
            totalScore += 12;
        } else if (age >= 70 && age <= 74) {
            totalScore += 14;
        } else if (age >= 75 && age <= 79) {
            totalScore += 16;
        }

        if (age >= 20 && age <= 39) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 4;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 8;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 11;
            else if (totalChol >= 280) totalScore += 13;
        } else if (age >= 40 && age <= 49) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 3;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 6;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 8;
            else if (totalChol >= 280) totalScore += 10;
        } else if (age >= 50 && age <= 59) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 2;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 4;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 5;
            else if (totalChol >= 280) totalScore += 7;
        } else if (age >= 60 && age <= 69) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 1;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 2;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 3;
            else if (totalChol >= 280) totalScore += 4;
        } else if (age >= 70 && age <= 79) {
            if (totalChol < 160) totalScore += 0;
            else if (totalChol >= 160 && totalChol <= 199) totalScore += 1;
            else if (totalChol >= 200 && totalChol <= 239) totalScore += 1;
            else if (totalChol >= 240 && totalChol <= 279) totalScore += 2;
            else if (totalChol >= 280) totalScore += 2;
        }

        if (smoker === 'true') {
            if (age >= 20 && age <= 39) totalScore += 9;
            else if (age >= 40 && age <= 49) totalScore += 7;
            else if (age >= 50 && age <= 59) totalScore += 4;
            else if (age >= 60 && age <= 69) totalScore += 2;
            else if (age >= 70 && age <= 79) totalScore += 1;
        }

        if (hdlChol >= 60) totalScore += -1;
        else if (hdlChol >= 50 && hdlChol <= 59) totalScore += 0;
        else if (hdlChol >= 40 && hdlChol <= 49) totalScore += 1;
        else if (hdlChol < 40) totalScore += 2;

        if (treated === 'true') {
            if (bp < 120) totalScore += 0;
            else if (bp >= 120 && bp <= 129) totalScore += 3;
            else if (bp >= 130 && bp <= 139) totalScore += 4;
            else if (bp >= 140 && bp <= 159) totalScore += 5;
            else if (bp >= 160) totalScore += 6;
        } else {
            if (bp < 120) totalScore += 0;
            else if (bp >= 120 && bp <= 129) totalScore += 1;
            else if (bp >= 130 && bp <= 139) totalScore += 2;
            else if (bp >= 140 && bp <= 159) totalScore += 3;
            else if (bp >= 160) totalScore += 4;
        }

        if (totalScore >= 25) riskPercentage = 30;
        else if (totalScore === 24) riskPercentage = 27;
        else if (totalScore === 23) riskPercentage = 22;
        else if (totalScore === 22) riskPercentage = 17;
        else if (totalScore === 21) riskPercentage = 14;
        else if (totalScore === 20) riskPercentage =11;
        else if (totalScore === 19) riskPercentage = 8;
        else if (totalScore === 18) riskPercentage = 6;
        else if (totalScore === 17) riskPercentage = 5;
        else if (totalScore === 16) riskPercentage = 4;
        else if (totalScore === 15) riskPercentage = 3;
        else if (totalScore >= 13) riskPercentage = 2;
        else if (totalScore >= 9) riskPercentage = 1;
        else riskPercentage = 0;
    }

    document.getElementById('result-value').textContent = riskPercentage;
    
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
