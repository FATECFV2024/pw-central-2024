<?php
    namespace app\Models;

    class Aluno{
        private $id;
        private $nome;
        private $genero;
        
        public function __construct($nome, $genero){
            $this->nome = $nome;
            $this->genero = $genero;
        }

        public function getNome(){
            return $this->nome;
        }
        public function getId(){
            return $this->id;
        }
        public function getGenero(){
            return $this->genero;
        }


    }

?>