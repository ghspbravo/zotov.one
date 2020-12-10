<?php

include 'constants.php';
include 'configActions.php';
$projects = getProjectsFromConfig();

$newId = getLastId($projects) + 1;

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Zotov.one admin panel</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/0d95e8fef2.js" crossorigin="anonymous"></script>
</head>

<body>

  <div class="container py-5">
    <h1 class="mb-4">Projects list</h1>

    <?php
    if ($projects != NULL) :

      if (count($projects) > 0) :
        foreach ($projects as $project) :
          $id = $project->id;
          $title = $project->{"title"};
          ?>
          <ul class="list-group list-group-flush">
            <a href="/project.php?id=<?php echo $id; ?>" class="list-group-item list-group-item-action">
              <?php echo $title; ?>
            </a>
          </ul>
        <?php endforeach;
          else : ?>
        <p>There is no projects in the list</p>
      <?php endif; ?>

      <a href="/project.php?id=<?php echo $newId ?>" class="mt-4 btn btn-primary"><i class="fas fa-plus"></i> Add project</a>

    <?php else : ?>
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">There error happen!</h4>
        <p>Can't find and create config file!</p>
        <hr />
        <p>Use FTP or server's file manager to create <b><?php echo CONFIG_FILE_NAME ?></b> file</p>

      </div>
    <?php endif; ?>


  </div>


  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>

</html>