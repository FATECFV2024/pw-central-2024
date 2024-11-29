<?php
    namespace routes;
    
    class Routes{
        private $routes = [];

        public function add ($method, $path, $action){
            $this->routes[]= [
                'method'=>$method,
                'path'=>$path,
                'action'=>$action
            ];
        }

        public function handleRequest(){
            $method = $_SERVER['REQUEST_METHOD'];

            $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
            // verificar as rotas
            foreach($this->routes as $r){
                if ($r['method'] == $method && $r['path']==$path){
                    // é método ou função dinâmica que permite invocar funções ou métodos de uma classe

                    //action é atributo que menciona "Qual a Classe"
                    call_user_func($r['action']);
                    return;
                }
            }

            http_response_code(404);
            echo json_encode(['error'=>'Rota não Encontrada']);

        }
    }
?>