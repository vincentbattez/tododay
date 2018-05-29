<?php
require_once './vendor/autoload.php';

$loader = new Twig_Loader_Filesystem("./src/template");
$twig = new Twig_Environment($loader, array(
  'debug' => true,
));
$twig->addExtension(new Twig_Extension_Debug());
$twig->addExtension(new Twig_Extensions_Extension_Intl());
