<?php

//1- conectando banco de dados
$servername = "localhost";
$username = "root";
$password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=db_spp_7gac", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully!!!<br><br>";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}


//2-consultando elementos da tabela
$stmt = $conn->prepare("SELECT * FROM tb_efetivo_7gac");
$stmt->execute();


//3-exibir resultados
/*while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
  echo "Nome: " . $row['nome_guerra'] . "<br />";
  echo "CPF: " . $row['cpf'] . "<br />";
  echo "PREC: " . $row['prec'] . "<br />";
}*/
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CONSULTAR MILITAR</title>
    <link rel="stylesheet" href="css/style1.css">

    <link rel="shortcut icon" href="icons/ico1.ico" type="image/x-icon">

    <script src="https://kit.fontawesome.com/a19119b252.js" crossorigin="anonymous"></script>
</head>
<body>

  <table class="consulta">
    <?php
    //4-exibindo resultados em formato tabela

      echo "<tr> <th>Nome</th> <th>CPF</th> <th>PREC</th>";
      while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        echo "<tr>";
        echo "<td>" . $row['nome_guerra'] . "</td>";
        echo "<td>" . $row['cpf'] . "</td>";
        echo "<td>" . $row['prec'] . "</td>";
        echo "</tr>";
      }


  ?> 
  </table>


</body>
</html>
