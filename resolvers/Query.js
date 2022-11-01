const { usuarios, perfis } = require('../data/db');

module.exports = {
    ola() {
        return 'Bom dia'
    },
    horaAtual() {
        return new Date
    },
    usuarioLogado(){
        return {
            id: 1,
            nome: 'Lucas Dantas da Cruz',
            email: 'ldantascruz@gmail.com',
            idade: 23,
            salario_real: 2976.00,
            vip: true,
        }
    },
    produtoEmDestaque(){
        return {
            nome: 'Bicicleta',
            preco: 565,
            desconto: 20,
        }
    },
    numerosMegaSena() {
        // return [4, 8, 13, 27, 33, 54]
        const crescente = (a, b) => a - b;
        return Array(6).fill(0)
            .map(n => parseInt(Math.random() * 60 + 1))
            .sort(crescente)            
    },
    usuarios(){
        return usuarios
    },
    usuario(_, { id }){
        const sels = usuarios
            .filter(u => u.id === id);
        return sels ? sels[0]: null;
    },
    perfis(){
        return perfis;
    },
    perfil(_, { id }){
        const sels = perfis
            .filter(p => p.id === id);
        return sels ? sels[0]: null;
    },
}