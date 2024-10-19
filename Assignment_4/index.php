<?php
    // Load XML, get items
    $xml = simplexml_load_file('catalog.xml');
    $sort = isset($_GET['sort']) ? $_GET['sort'] : 'title';
    $movies = $xml->xpath('/catalog/movie');

    // Sort functions
    if ($sort == 'year') {
        usort($movies, function($a, $b) {
            return (int)$a->releaseDate - (int)$b->releaseDate;
        });
    } else {
        usort($movies, function($a, $b) {
            return strcmp($a->title, $b->title);
        });
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Assignment 4</title>
    <link rel="stylesheet" href="stylesheets/styles.css">
</head>
<body>
    <h1>Movie Catalog</h1>
    <!-- Change Sorting -->
    <form name="sortingSelect" method="GET">
        <label for="sort">Sort by: </label>
        <select name="sort" id="sort" onchange="this.form.submit()">
            <option value="title" <?= $sort == 'title' ? 'selected' : '' ?>>Title</option>
            <option value="year" <?= $sort == 'year' ? 'selected' : '' ?>>Year</option>
        </select>
    </form>
    <!-- Catalog Display -->
    <div class="movies">
        <?php foreach ($movies as $movie): ?>
            <div class="movie-card">
                <a href="view.php?title=<?= urlencode($movie->title) ?>">
                    <h3>
                        <?= htmlspecialchars($movie->title) ?>
                    </h3>
                </a>
                <img src="<?= htmlspecialchars($movie->image) ?>">
            </div>
        <?php endforeach; ?>
    </div>
</body>
</html>
