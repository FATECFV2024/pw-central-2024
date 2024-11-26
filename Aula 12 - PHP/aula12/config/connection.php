<?php
    namespace config;
    use PDO;
    use PDOException;

    class connection{
        private $host ="localhost"; //colocar um ip:porta
        private $db_name = "fatecfv";
        private $username = "root";
        private $password = "";
        public $conn; //ele vai armazenar o objeto da conexão

        public function getConnection(){
            try{
                $this->conn = new PDO ("mysql:host=$this->host; 
                                        dbname=$this->db_name",
                                        $this->username,
                                        $this->password);
              $this->conn->exec("set names utf8");
            }catch(PDOException $error){
                echo "Error:".$error->getMessage();

            }
            return $this->conn;
        }


    }
?>