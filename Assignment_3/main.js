// Validate details form
function validateDetails() {
    const nhi = document.getElementById('nhi').value;
    const nhiPattern = /^[A-Z]{3}\d{4}$/;   // Regex matcher
    if (!nhiPattern.test(nhi)) {
        alert('NHI number must be in the form AAANNNN -> A = Capital Letter, N = Number');
        return false;
    }
    return true;
}

// Validate SOFA Inputs
function validateSOFA() {
    const nervous = document.getElementById('nervous').value;
    const coagulation = document.getElementById('coagulation').value;
    const kidneys = document.getElementById('kidneys').value;
    const liver = document.getElementById('liver').value;

    // Cardiovascular inputs
    const map = document.getElementById('map').value;
    const dop = document.getElementById('dopamine').value;
    const dob = document.getElementById('dobutamine').value;
    const epi = document.getElementById('epinephrine').value;
    const nor = document.getElementById('norepinephrine').value;

    // Respiratory Inputs
    const pa = document.getElementById('respiratory-pa').value;

    // Coma scale should be between 0 and 15
    if (nervous > 15 || nervous < 0) {
        alert('Coma Scale Must be between 0 and 15');
        return false;
    }

    // Cardiovascular requirements
    const criteria1 = (dop > 15 || epi > 0.1 || nor > 0.1);
    const criteria2 = (dop > 5 || epi <= 0.1 || nor <= 0.1);
    const criteria3 = (dop <= 5 || dob > 0);
    const criteria4 = (map < 70);
    const criteria5 = (map >= 70);

    // Check if at least one of the criteria is true
    if (!(criteria1 || criteria2 || criteria3 || criteria4 || criteria5)) {
        alert('At least one of the cardiovascular criteria must be met.');
        return false;
    }

    // Respiratory must be positive
    if(pa < 0){
        alert('PA must be a valid positive number.');
        return false;
    }

    // Coagulation must be positive
    if(coagulation < 0){
        alert('Coagulation must be a valid positive number.');
        return false;
    }

    // Kidneys must be positive
    if(kidneys < 0){
        alert('Kidneys must be a valid positive number.');
        return false;
    }

    // Liver must be positive
    if(liver < 0){
        alert('Liver must be a valid positive number.');
        return false;
    }

    return true;
}
