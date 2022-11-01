module.exports = {
    precoComDesconto (produto){       
        if(produto.desconto){
            return produto.preco * (100 - produto.desconto) / 100;
        } else {
            return produto.preco;
        }
    },
}