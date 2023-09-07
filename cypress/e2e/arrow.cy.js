const { it } = require("mocha");

it('nada agora', function() {})
// Usar "const" para declarar variáveis com valor fixo
// Usar "let" para declarar variáveis com valor móvel

// Função normal.
function soma(a, b) {
    return a + b;
}

// Função anônima.
const soma_anonima = function (a, b) {
    return a + b;
}

// Arrow function basica.
const soma_arrow_basic = (a, b) =>  {
    return a + b
}

// Arrow function forma simplificada.
// Uso dos parênteses em função com mais de um parâmetro é obrigatório.
const soma_arrow_simplified = (a, b) => a + b

// Arrow function forma simplificada. 
// Como recebe apenas um parâmetro, o uso do parênteses é opcional.
const soma_arrow_simplified_2 = a => a + a

// Arrow function simplicada.
// Uso dos parênteses em função sem parâmetro é obrigatório.
const soma_arrow_simplified_3 = () => 5 + 9

// Erro comum, retornará "undefined". 
// Quando utilizamos chave é preciso explicitar o "return".
const soma_arrow_error = (a, b) => {
    a + b
}

console.log(soma(1, 4))
console.log(soma_anonima(2, 5))
console.log(soma_arrow_basic(4,6))
console.log(soma_arrow_simplified(3, 6))
console.log(soma_arrow_simplified_2(3))
console.log(soma_arrow_simplified_3())
console.log(soma_arrow_error(4,6))

// "this": referência para o escopo em que está sendo executado, referencia a quem invocou.
// Retorna o "Context" no console.
it('a function test...', function(){
    console.log('Function', this)
})

// "this": referência para o escopo em que está sendo executado.
// Retorna o "undefined" no console. O this fica no escopo "mais alto", que no caso, é vazio.
it('a arrow test...', () => {
    console.log('Arrow', this)
})