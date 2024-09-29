<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SOFA Score Input</title>
    <link rel="stylesheet" href="../stylesheets/styles.css">
    <script src="../main.js" defer></script>
</head>
<body>
    <!-- Retrieve and set cookies -->
    <?php
        // Retrieve details
        $nhi = isset($_POST['patient-nhi']) ? $_POST['patient-nhi'] : '';
        $surname = isset($_POST['patient-surname']) ? $_POST['patient-surname'] : '';
        $firstname = isset($_POST['patient-firstname']) ? $_POST['patient-firstname'] : '';

        // Set cookies
        setcookie('patient-nhi', $nhi, time() + 3600, "/");
        setcookie('patient-surname', $surname, time() + 3600, "/");
        setcookie('patient-firstname', $firstname, time() + 3600, "/");
    ?>

    <!-- SOFA Input form -->
    <div class="center-container">
        <h1>SOFA Score Input</h1>
        <p>Patient: <?php echo htmlspecialchars("$firstname $surname ($nhi)"); ?></p>

        <form action="result.php" method="POST" onsubmit="return validateSOFA()">

            <label for="nervous">Central Nervous System (Glasgow Coma Scale):</label>
            <input type="number" id="nervous" name="nervous" required step="0.01"><br>

            <!-- Cardiovascular System -->
            <fieldset class="sub-form">
                <legend>Cardiovascular System</legend>

                <label for="map">MAP (mmHg)</label>
                <input type="number" id="map" name="map" step="0.01"><br>

                <label for="dopamine">Dopamine (μg/kg/min)</label>
                <input type="number" id="dopamine" name="dopamine" step="0.01"><br>

                <label for="dobutamine">Dobutamine (μg/kg/min)</label>
                <input type="number" id="dobutamine" name="dobutamine" step="0.01"><br>

                <label for="epinephrine">Epinephrine (μg/kg/min)</label>
                <input type="number" id="epinephrine" name="epinephrine" step="0.01"><br>

                <label for="norepinephrine">Norepinephrine (μg/kg/min)</label>
                <input type="number" id="norepinephrine" name="norepinephrine" step="0.01"><br>
            </fieldset>

            <!-- Respiratory System -->
            <fieldset>
                <legend>Respiratory System</legend>

                <label for="respiratory-pa">PaO2/FiO2 [mmHg]:</label>
                <input type="number" id="respiratory-pa" name="respiratory-pa" step="0.01"required><br>

                <label for="respiratory-vent">Mechanically Ventilated including CPAP:</label>
                <select id="respiratory-vent" name="respiratory-vent" required>
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                </select><br>
            </fieldset>

            <label for="coagulation">Coagulation (Platelets ×10³/μl):</label>
            <input type="number" id="coagulation" name="coagulation" step="0.01" required><br>

            <label for="liver">Liver (Bilirubin [mg/dl]):</label>
            <input type="number" id="liver" name="liver" step="0.01" required><br>

            <label for="kidneys">Kidneys (Creatinine [mg/dl] or Urine Output):</label>
            <input type="number" id="kidneys" name="kidneys" step="0.01" required><br>

            <input type="submit" value="Calculate Score">
        </form>
    </div>
</body>
</html>
