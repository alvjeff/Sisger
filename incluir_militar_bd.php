<?php
    //1-conectando
    $servername =  "localhost";
    $username = "root";
    $password = "";

    try{
        $conn =  new PDO("mysql:host=$servername;dbname=db_spp_7gac", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Connected sucessfuly!! <br><br>";
    } catch(PDOException $e){
        echo "conection failed :(" . $e->getMessage(); 
    }
    

    if(isset($_POST['acao']))

?>


<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INCLUIR MILITAR</title>
    <link rel="stylesheet" href="css/style1.css">

    <link rel="shortcut icon" href="icons/ico1.ico" type="image/x-icon">

    <script src="https://kit.fontawesome.com/a19119b252.js" crossorigin="anonymous"></script>
</head>
<body>

    <header>        
        <div class="cabecalho">
            <div class="logo flutua-esquerda">
                <img src="image/logo.png" alt="logo"> 
            </div>
           
            <div class="texto-cabecalho flutua-esquerda">
                <p>Regimento Olinda</p>
                <h1>7º Grupo de Artilharia de Campanha</h1>
                <h3>Exército Brasileiro</h3>
            </div>
            <div class="clear"></div>
        </div>
       
    </header>

    <section>

        <h2>PREENCHA OS DADOS ABAIXO</h2>
        <form action="" method="post">

            <label for="p_g">P/G:</label>
            <select name="p_g" id="p_g">
                <option value="TENCEL">Ten Cel</option>
                <option value="MAJ">Maj</option>
                <option value="CAP">Cap</option>
                <option value="1TEN">1º Ten</option>
                <option value="2TEN">2º Ten</option>
                <option value="ASP">Asp Of</option>
                <option value="STEN">Sten</option>
                <option value="1SGT">1º Sgt</option>
                <option value="2SGT">2º Sgt</option>
                <option value="3SGT">3º Sgt</option>
                <option value="CB">Cb EP</option>
                <option value="SDEP">Sd EP</option>
                <option value="SDEV">Sd EV</option>
            </select>

            <label for="nome_guerra">Nome de guerra:</label>
            <input type="text" name="nome_guerra" id="nome_guerra">

            <label for="sist_pag">Sistema de pagamento:</label>
            <select name="sist_pag" id="sist_oag">
                <option value="siappes">SIAPPES</option>
                <option value="sippes">SIPPES</option>
            </select>

            <label for="cpf">CPF:</label>
            <input type="text" name="cpf" id="cpf">

            <label for="prec">PREC-CP:</label>
            <input type="text" name="prec" id="prec">

            <label for="idt">IDT:</label>
            <input type="text" name="idt" id="idt">

            <label for="banco">BANCO:</label>
            <select name="banco" id="banco">
                <option value="001">001 - BB</option>
                <option value="104">104 - CEF</option>
                <option value="341">341 - ITAU</option>
                <option value="033">033 - SANTANDER</option>
                <option value="237">237 - BRADESCO</option>                
            </select>

            <label for="agencia">AGÊNCIA:</label>
            <input type="text" name="agencia" id="agencia">

            <label for="conta">CONTA:</label>
            <input type="text" name="conta" id="conta">

            <input type="submit" value="Adicionar">
        </form>
    </section>


    <footer>
        <p>&copy;TODOS OS DIREITOS RESERVADOS</p>
    </footer>
    
</body>
</html>