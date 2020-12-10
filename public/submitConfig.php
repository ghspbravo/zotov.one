<?php
include 'constants.php';
include 'configActions.php';

$projects = getProjectsFromConfig();
$projectsEn = getEnProjectsFromConfig();

$id = (int)$_POST["id"];
$order = (int)$_POST["order"];
$title = $_POST["title"];
$titleEn = $_POST["titleEn"];
$task = $_POST["task"];
$taskEn = $_POST["taskEn"];
$tags = $_POST["tags"];
$tagsEn = $_POST["tagsEn"];
$url = $_POST["url"];
$urlEn = $_POST["urlEn"];

$inProgress = $_POST["inProgress"] ?? false;

// FILE UPLOAD HANDLE
if ($inProgress) {
  $thumbnail = PREVIEW_PASS_PATH;
} else {
  $thumbnail = isset($projects[$id]) ? $projects[$id]->{"thumbnail"} : "";

  $uploadfile = ASSETS_DIR . basename($_FILES['thumbnail']['name']);

  if (move_uploaded_file($_FILES['thumbnail']['tmp_name'], $uploadfile)) {
    $thumbnail = $uploadfile;
  }
}

$key = getProjectById($projects, $id) ?? $id;

$projects[$key] = new stdClass();
$projectsEn[$key] = new stdClass();

$projects[$key]->id = (int) $id;
$projectsEn[$key]->id = (int) $id;
$projects[$key]->order = (int) $order;
$projectsEn[$key]->order = (int) $order;
$projects[$key]->title = $title;
$projectsEn[$key]->title = $titleEn;
$projects[$key]->task = $task;
$projectsEn[$key]->task = $taskEn;
$projects[$key]->tags = $tags;
$projectsEn[$key]->tags = $tagsEn;
$projects[$key]->url = $url;
$projectsEn[$key]->url = $urlEn;
$projects[$key]->thumbnail = $thumbnail;
$projectsEn[$key]->thumbnail = $thumbnail;


usort($projects, function ($item1, $item2) {
  return $item1->{"order"} > $item2->{"order"};
});
usort($projectsEn, function ($item1, $item2) {
  return $item1->{"order"} > $item2->{"order"};
});

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
  <title>Submit project</title>
</head>

<body>
  project submited
  <script>
    window.location = "<?php echo BACK_URL ?>";
  </script>
</body>

</html>