<?php

function writeConfig($contents) {
  return file_put_contents(CONFIG_FILE_PATH, $contents);
}

function getProjectsFromConfig()
{

  if (file_exists(CONFIG_FILE_PATH)) {
    $content = file_get_contents(CONFIG_FILE_PATH);
    $projects = json_decode($content);

    return $projects;
  } else {
    $projectsString = "[]"; // empty projects list
    if (writeConfig($projectsString)) {
      return [];
    } else {
      return FALSE;
    }
  }
}

function writeEnConfig($contents) {
  return file_put_contents(EN_CONFIG_FILE_PATH, $contents);
}

function getEnProjectsFromConfig()
{

  if (file_exists(EN_CONFIG_FILE_PATH)) {
    $content = file_get_contents(EN_CONFIG_FILE_PATH);
    $projects = json_decode($content);

    return $projects;
  } else {
    $projectsString = "[]"; // empty projects list
    if (writeConfig($projectsString)) {
      return [];
    } else {
      return FALSE;
    }
  }
}
