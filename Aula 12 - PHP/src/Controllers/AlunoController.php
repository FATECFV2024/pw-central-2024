<?php
 
 namespace app\Controllers;
 use app\Service\AlunoService;

 class AlunoController{
    private $service;

    public function __construct(){
        $service = new AlunoService();
    }

    public function criar(){
        $data = json_decode(file_get_contents("php://input"));
        echo json_encode(
            ["id"=>$this->service->criar($data->nome,$data->genero)]);
    }


    public function hello(){
        echo 'Olá PHP';
    }
    
        
    
 }

?>