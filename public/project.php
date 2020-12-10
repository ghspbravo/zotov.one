<?php

include 'constants.php';
include 'configActions.php';

$projects = getProjectsFromConfig();
$projectsEn = getEnProjectsFromConfig();

$currentProjectId = (int) $_GET["id"];

$key = getProjectById($projects, $currentProjectId);

$currentProject = $projects[$key] ?? NULL;
$currentEnProject = $projectsEn[$key] ?? NULL;
$isProjectExists = isset($projects[$key]);

$id = $currentProjectId;
$order = $currentProject->{"order"} ?? $id;
$title = $currentProject->{"title"} ?? "";
$task = $currentProject->{"task"} ?? "";
$tags = $currentProject->{"tags"} ?? "";
$url = $currentProject->{"url"} ?? "";
$thumbnail = $currentProject->{"thumbnail"} ?? "";


$titleEn = $currentEnProject->{"title"} ?? "";
$taskEn = $currentEnProject->{"task"} ?? "";
$tagsEn = $currentEnProject->{"tags"} ?? "";
$urlEn = $currentEnProject->{"url"} ?? "";

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title><?php echo $title == "" ? "New project" : $title ?></title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script async src="https://kit.fontawesome.com/0d95e8fef2.js" crossorigin="anonymous"></script>
</head>

<body>
  <div class="container py-5">
    <form enctype="multipart/form-data" method="POST" action="/submitConfig.php">

      <input name="id" type="hidden" value="<?php echo $id ?>">

      <div class="form-group row">
        <label for="title" class="col-sm-2 col-form-label">title</label>
        <div class="col-sm-5">
          <input name="title" type="text" class="form-control" id="title" value="<?php echo $title ?>">
        </div>
        <div class="col-sm-5">
          <input name="titleEn" type="text" class="form-control" id="titleEn" value="<?php echo $titleEn ?>">
        </div>
      </div>

      <div class="form-group row">
        <label for="order" class="col-sm-2 col-form-label">order</label>
        <div class="col-sm-5">
          <input name="order" type="number" min="0" max="<?php echo count($projects)+1 ?>" class="form-control" id="order" value="<?php echo $order ?>">
        </div>
      </div>

      <div class="form-group row">
        <label for="task" class="col-sm-2 col-form-label">task</label>
        <div class="col-sm-5">
          <input name="task" type="text" class="form-control" id="task" value="<?php echo $task ?>">
        </div>
        <div class="col-sm-5">
          <input name="taskEn" type="text" class="form-control" id="taskEn" value="<?php echo $taskEn ?>">
        </div>
      </div>

      <div class="form-group row">
        <label for="tags" class="col-sm-2 col-form-label">tags</label>
        <div class="col-sm-5">
          <input name="tags" type="text" class="form-control" id="tags" value="<?php echo $tags ?>">
        </div>
        <div class="col-sm-5">
          <input name="tagsEn" type="text" class="form-control" id="tagsEn" value="<?php echo $tagsEn ?>">
        </div>
      </div>

      <div class="form-group row">
        <label for="url" class="col-sm-2 col-form-label">url</label>
        <div class="col-sm-5">
          <input name="url" type="text" class="form-control" id="url" value="<?php echo $url ?>">
        </div>
        <div class="col-sm-5">
          <input name="urlEn" type="text" class="form-control" id="urlEn" value="<?php echo $urlEn ?>">
        </div>
      </div>

      <div class="form-group row">
        <div class="offset-sm-2 col">
          <div class="form-check">
            <input name="inProgress" class="form-check-input" type="checkbox" id="inProgress">
            <label class="form-check-label" for="inProgress">
              Is in progress?
              <small class="text-muted">
                Set thumbnail to soon image. Image below won't count
              </small>
            </label>
          </div>
        </div>
      </div>

      <div class="form-group row">
        <label for="thumbnail" class="col-sm-2 col-form-label">thumbnail</label>
        <div class="col-sm-10">
          <input name="thumbnail" type="file" class="form-control" id="thumbnail">
        </div>
        <img src="<?php echo $thumbnail ?>" alt="<?php echo $title ?> thumb" width="320" height="180" class="img-thumbnail mt-4">
      </div>

      <div class="row mt-5">
        <button type="submit" class="btn btn-success"><i class="fas fa-check"></i> Save</button>
        <a href="/" class="ml-4 btn btn-light"><i class="fas fa-times"></i> Cancel</a>

        <?php if ($isProjectExists) : ?>
          <a href="/removeProject.php?id=<?php echo $id ?>" class="ml-auto btn btn-secondary"><i class="fas fa-trash"></i> Remove</a>
        <?php endif; ?>
      </div>
    </form>
  </div>

  <script defer src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script defer src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>