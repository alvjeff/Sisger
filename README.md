# SISGER - Sistema Gerador de Direitos

O **SISGER** é um sistema interno desenvolvido para automatizar a coleta de informações e geração de textos que gerem direitos remuneratórios.  
Ele foi pensado para uso em SPP, sendo leve, rápido e funcional.

## Funcionalidades iniciais

- Estrutura básica do backend em Python.
- Integração com banco de dados SQLite.
- Frontend simples com HTML e Bootstrap.
- Controle de versão via Git/GitHub.

## Estrutura do Projeto
```
sisger/
|
├── static/             # Arquivos estáticos do front-end
|   ├── css/
|   |   └── style.css   # Estilos principais
|   ├── js/
|   |   └── main.js     # Scripts principais
|   └── img/
|   
├── templates/          # Páginas HTML renderizadas pelo Flask
|   └── index.html      # Página inicial
|
├── app.py              # Arquivo principal Flask (rotas, lógica, DB)
├── README.md           # Este arquivo
├── requirements.txt    # Dependências Python
└── sisger.db           # Banco de dados Sqlite

```

## Próximos passos

- Desenvolver a lógica de geração de documentos automatizados.
- Criar formulários para entrada de dados.
- Melhorar a interface do frontend mantendo simplicidade e responsividade.

## Contato

Desenvolvido por Alvaro Rocha.  
Para dúvidas ou sugestões: **alvjeff@hotmail.com**
