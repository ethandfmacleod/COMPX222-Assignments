<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Assignment 3</title>
    <link rel="stylesheet" href="stylesheets/styles.css">
    <script src="main.js"></script>
</head>
<body>
    <div class="center-container">
        <!-- Header -->
        <h1>SOFA Score Calculator</h1>
        <p>
            The sequential organ failure assessment score (SOFA score), previously known as the sepsis-related organ failure assessment score, 
            is used to track a person's status during the stay in an intensive care unit (ICU) to determine the extent of a person's organ 
            function or rate of failure. The score is based on six different scores, one each for the respiratory, cardiovascular, hepatic, 
            coagulation, renal, and neurological systems. By inputting your details below, you will be able to see your SOFA results.
        </p>

        <!-- Get cookies if they exist else blank -->
        <?php
            $nhi = isset($_COOKIE['patient-nhi']) ? $_COOKIE['patient-nhi'] : '';
            $surname = isset($_COOKIE['patient-surname']) ? $_COOKIE['patient-surname'] : '';
            $firstname = isset($_COOKIE['patient-firstname']) ? $_COOKIE['patient-firstname'] : '';
        ?>

        <!-- Submission form -->
        <form name="detailsForm" action="pages/sofa.php" method="POST" onsubmit="return validateDetails()">
            <label for="nhi">NHI Number (AAANNNN):</label>
            <input type="text" id="nhi" name="patient-nhi" value="<?php echo htmlspecialchars($nhi); ?>" required><br>

            <label for="surname">Surname:</label>
            <input type="text" id="surname" name="patient-surname" value="<?php echo htmlspecialchars($surname); ?>" required><br>

            <label for="firstname">First Name:</label>
            <input type="text" id="firstname" name="patient-firstname" value="<?php echo htmlspecialchars($firstname); ?>" required><br>

            <input type="submit" value="Submit Details">
        </form>
    </div>
</body>
</html>
