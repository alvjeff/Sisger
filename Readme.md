# PROJETO NOTAS AUTOMATICAS SPP

Este projeto tem por finalidade tornar as Notas de Aditamento da Seção de Pagamento mais rápidas, diminuindo a inscidência de erros e automatizando procedimentos os tornando mais ágeis.

## Pré-requisitos

- XAMPP como ambiente de servidor local com suporte a PHP e MySQL
- HTML5
- CSS3
- Javascript
- PHP

## Instalação e configuração

1. Clone este repositório na pasta `htdocs` do XAMPP:
   ```bash
   git clone https://github.com/seu-usuario/seu-projeto.git
   ```

2. No `phpMyAdmin`, crie um banco de dados chamado `nome_do_banco`.

3. Importe o arquivo SQL localizado na pasta `sql/` do projeto para o banco de dados.

4. Edite as credenciais do banco de dados no arquivo de configuração do projeto (por exemplo, `config.php`), conforme o ambiente local.

5. Inicie o servidor Apache e o MySQL no painel do XAMPP.

6. Acesse o projeto pelo navegador em `http://localhost/seu-projeto`.

## Uso

- Ao acessar a página inicial, você terá uma página de login, que exige um usuário e senha cadastrados;
- Após o acesso, teremos uma página que funciona como menu, onde os botões indicam qual tipo de nota você deseja fazer para acrescentar em aditamento.
