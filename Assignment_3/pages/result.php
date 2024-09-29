<!-- result.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SOFA Score Result</title>
    <link rel="stylesheet" href="../stylesheets/styles.css">
</head>
<body>

    <?php

    // Initialize total score and sub scores
    $nervousTotal = 0;
    $cardiovascularTotal = 0;
    $respiratoryTotal = 0;
    $coagulationTotal = 0;
    $liverTotal = 0;
    $kidneysTotal = 0;

    // Patient Details Cookies
    $nhi = $_COOKIE['patient-nhi'];
    $surname = $_COOKIE['patient-surname'];
    $firstname = $_COOKIE['patient-firstname'];

    // Retrieve SOFA subscores
    $nervous = $_POST['nervous'];
    $liver = $_POST['liver'];
    $coagulation = $_POST['coagulation'];
    $kidneys = $_POST['kidneys'];

    // Respiratory
    $respiratoryPA = $_POST['respiratory-pa'];
    $respiratoryVent = $_POST['respiratory-vent'] ?? null;

    // Cardiovascular
    $map = $_POST['map'] ?? null;
    $dopamine = $_POST['dopamine'] ?? null;
    $dobutamine = $_POST['dobutamine'] ?? null;
    $epinephrine = $_POST['epinephrine'] ?? null;
    $norepinephrine = $_POST['norepinephrine'] ?? null;

    // Central Nervous System
    if ($nervous < 6) {
        $nervousTotal += 4;
    } elseif ($nervous <= 9) {
        $nervousTotal += 3;
    } elseif ($nervous <= 12) {
        $nervousTotal += 2;
    } elseif ($nervous <= 14) {
        $nervousTotal += 1;
    }

    if ($map && $map < 70) {
        $cardiovascularTotal += 1;
    } elseif ($dopamine && $dopamine <= 5) {
        $cardiovascularTotal += 2;
    } elseif ($dopamine > 5 && $dopamine <= 15) {
        $cardiovascularTotal += 3;
    } elseif ($dopamine > 15 || $epinephrine > 0.1 || $norepinephrine > 0.1) {
        $cardiovascularTotal += 4;
    }

    // Respiratory System
    if ($respiratoryVent === 'yes' && $respiratoryPA < 100) {
        $respiratoryTotal += 4;
    } elseif ($respiratoryPA < 200 && $respiratoryVent === 'yes') {
        $respiratoryTotal += 3;
    } elseif ($respiratoryPA < 300) {
        $respiratoryTotal += 2;
    } elseif ($respiratoryPA < 400) {
        $respiratoryTotal += 1;
    }

    // Coagulation
    if ($coagulation < 20) {
        $coagulationTotal += 4;
    } elseif ($coagulation < 50) {
        $coagulationTotal += 3;
    } elseif ($coagulation < 100) {
        $coagulationTotal += 2;
    } elseif ($coagulation < 150) {
        $coagulationTotal += 1;
    }

    // Liver
    if ($liver < 2 && $liver >= 1.2) {
        $liverTotal += 1;
    } elseif ($liver < 6 && $liver >= 1.2) {
        $liverTotal += 2;
    } elseif ($liver < 12 && $liver >= 1.2) {
        $liverTotal += 3;
    } elseif ($liver >= 12){
        $liverTotal += 4;
    }

    // Kidney
    if ($kidneys >= 5) {
        $kidneysTotal += 4; // for high creatinine
    } elseif ($kidneys >= 3.5 && $kidneys < 5) {
        $kidneysTotal += 3;
    } elseif ($kidneys >= 2 && $kidneys < 3.5) {
        $kidneysTotal += 2;
    } elseif ($kidneys >= 1.2 && $kidneys < 2) {
        $kidneysTotal += 1;
    }

    $totalScore = $nervousTotal + $cardiovascularTotal + $respiratoryTotal + $coagulationTotal + $liverTotal + $kidneysTotal;

    ?>

    <div class="center-container">
        <h1>SOFA Score Result</h1>
        <p>Patient: <?php echo "$firstname $surname ($nhi)"; ?></p>
        <h2>Subscores:</h2>
        <div class="outputs">
            <ul>
                <li>Nervous: <?php echo $nervousTotal; ?></li>
                <li>Cardiovascular: <?php echo $cardiovascularTotal; ?></li>
                <li>Respiratory: <?php echo $respiratoryTotal; ?></li>
                <li>Liver: <?php echo $liverTotal; ?></li>
                <li>Coagulation: <?php echo $coagulationTotal; ?></li>
                <li>Kidneys: <?php echo $kidneysTotal; ?></li>
            </ul>
        </div>
        <h2>Total SOFA Score: <?php echo $totalScore; ?></h2>
    </div>
</body>
</html>
