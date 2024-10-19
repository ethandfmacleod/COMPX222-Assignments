<?php
// Load the XML file
$xml = simplexml_load_file('catalog.xml');
// Get the title and movie
$title = isset($_GET['title']) ? urldecode($_GET['title']) : '';
$movie = $xml->xpath("//movie[title='$title']")[0];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Assignment 4</title>
    <link rel="stylesheet" href="stylesheets/styles.css">
</head>
<body>
    <!-- Movie Content -->
    <h1><?= htmlspecialchars($movie->title) ?></h1>
    <p><b>Release Date:</b> <?= htmlspecialchars($movie->releaseDate) ?></p>
    <p><b>Description:</b> <?= htmlspecialchars($movie->description) ?></p>
    <p><b>Director/s:</b> <?= htmlspecialchars($movie->director) ?></p>
    <p><b>Genre/s:</strong> <?= htmlspecialchars($movie->genre) ?></p>
    <img src="<?= htmlspecialchars($movie->image) ?>" alt="<?= htmlspecialchars($movie->title) ?>">

    <!-- Navigation -->
    <h2><a href="index.php">Back</a></h2>
</body>
</html>
