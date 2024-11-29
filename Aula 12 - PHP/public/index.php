<?php
    require_once __DIR__.'/../vendor/autoload.php';

    use routes\Routes;
    use app\Controllers\AlunoController;

    $router = new Routes();
    
    //Definindo rotas
    $router->add('POST', 'api/aluno', [ new AlunoController(), 'criar']);
    
    $router->add('GET', '/hello', [ new AlunoController(), 'hello']);

    $router->handleRequest();






?>