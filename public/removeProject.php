<?php
include 'constants.php';
include 'configActions.php';

$projects = getProjectsFromConfig();
$projectsEn = getEnProjectsFromConfig();

$id = (int)$_GET["id"];

$key = getProjectById($projects, $id) ?? $id;

unset($projects[$key]);
unset($projectsEn[$key]);

$projectString = json_encode(array_values($projects), JSON_UNESCAPED_UNICODE);
writeConfig($projectString);

$projectEnString = json_encode(array_values($projectsEn), JSON_UNESCAPED_UNICODE);
writeEnConfig($projectEnString);

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Project deleted</title>
</head>

<body>
  project deleted
  <script>
    window.location = "<?php echo BACK_URL ?>";
  </script>
</body>

</html>