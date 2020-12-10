<?php
const CONFIG_FILE_NAME = "portfolio.json";
const CONFIG_FILE_PATH = "./content/" . CONFIG_FILE_NAME;

const EN_CONFIG_FILE_NAME = "portfolio-eng.json";
const EN_CONFIG_FILE_PATH = "./content/" . EN_CONFIG_FILE_NAME;

const ASSETS_DIR = "https://zotov.one/content/res/";
const PREVIEW_PASS_PATH = ASSETS_DIR . "later.jpg";

const BACK_URL = '/admin.php';

function getProjectById($projects, $id)
{
  foreach ($projects as $index => $item) {
    if ($item->id === $id) {
      return (int) $index;
    }
  }
  return $id;
}

function getLastId($projects)
{
  $currentMax = 0;
  foreach ($projects as $project) {
    if ($project->id > $currentMax) {
      $currentMax = $project->id;
    }
  }
  return $currentMax;
}
