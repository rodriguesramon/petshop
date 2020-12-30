const ModeloTabela = require('../rotas/fornecedores/ModeloTabelaFornecedor')

ModeloTabela
    .sync()
    .then(() => console.log('Tabele Criada com Sucesso'))