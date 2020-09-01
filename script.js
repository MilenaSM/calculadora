
// 1 – Calcule a média de diversas notas digitadas pelo usuário.
function media() {
    var primeiro = window.document.querySelector('input#numero1')
    var segundo = window.document.querySelector('input#numero2')
    var res1 = window.document.querySelector('p#resposta-primeiro-exercicio')
    var n1 = Number(primeiro.value)
    var n2 = Number(segundo.value)
    var nota = ''

    res1.innerHTML = `${resultadoMedia(n1, n2)}`
    // console.log('A média dos dois números é: ${nota}')
}

function resultadoMedia(n1, n2) {
    if (n1 >= 0 && n2 >= 0) {
        nota = (n1 + n2) / 2
        return `A média de ${n1} e ${n2} é:</br> ${nota}` 
    } else {
        return '[ERRO]Confira os dados fornecidos!!'
    }
}

// 2 – Faça um programa que entre com cinco números e imprima o quadrado de cada número.
function calculaQuadrados() {
    var quadrado1 = window.document.querySelector('input#quadrado1')
    var quadrado2 = window.document.querySelector('input#quadrado2')
    var quadrado3 = window.document.querySelector('input#quadrado3')
    var quadrado4 = window.document.querySelector('input#quadrado4')
    var quadrado5 = window.document.querySelector('input#quadrado5')
    var res2 = window.document.querySelector('p#resposta-segundo-exercicio')

    var numero1 = Number(quadrado1.value)
    var numero2 = Number(quadrado2.value)
    var numero3 = Number(quadrado3.value)
    var numero4 = Number(quadrado4.value)
    var numero5 = Number(quadrado5.value)

    res2.innerHTML = `O números ${numero1}, ${numero2}, ${numero3}, ${numero4}, ${numero5} elevados ao quadrado são ${quadrado(numero1)}, ${quadrado(numero2)}, ${quadrado(numero3)}, ${quadrado(numero4)}, ${quadrado(numero5)}`
}

function quadrado(numero) {
    if(numero >= 0) {
        return numero * numero 
    } else {
        return '[ERRO]Confira os dados fornecidos!!'
    }
}

// 3 – Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o maior número e exiba-o.
function menorNumero() {
    var number1 = document.querySelector('input#number1')
    var number2 = document.querySelector('input#number2')
    var number3 = document.querySelector('input#number3')
    var number4 = document.querySelector('input#number4')
    var number5 = document.querySelector('input#number5')
    res3 = window.document.querySelector('p#resposta-terceiro-exercicio1')
    res4 = window.document.querySelector('p#resposta-terceiro-exercicio2')


    var valor1 = Number(number1.value)
    var valor2 = Number(number2.value)
    var valor3 = Number(number3.value)
    var valor4 = Number(number4.value)
    var valor5 = Number(number5.value)

    // Funcao para retornar o menor valor de um array
    Array.min = function(array) {
        return Math.min.apply(Math, array)
    }

    // Funcao para retornar o maior valor de um array
    Array.max = function(array) {
        return Math.max.apply(Math, array)
    }

    // Agora e so pegar os resultados
    var random = [valor1, valor2, valor3, valor4, valor5] // Nosso array

    res3.innerHTML = `O maior número é ${Array.max(random)}`
    res4.innerHTML = `O menor número é ${Array.min(random)}`

}

function idade() {
    var idade1 = window.document.querySelector('input#idade1')
    var idade2 = window.document.querySelector('input#idade2')
    var idade3 = window.document.querySelector('input#idade3')
    var idade4 = window.document.querySelector('input#idade4')
    var idade5 = window.document.querySelector('input#idade5')
    var resposta5 = window.document.querySelector('p#resposta-segundo-exercicio')

    var primeiraIdade = Number(idade1.value)
    var segundaIdade = Number(idade2.value)
    var terceiraIdade = Number(idade3.value)
    var quartaIdade = Number(idade4.value)
    var quintaIdade = Number(idade5.value)

    var name1 = window.document.querySelector('input#name1').value
    var name2 = window.document.querySelector('input#name2').value
    var name3 = window.document.querySelector('input#name3').value
    var name4 = window.document.querySelector('input#name4').value
    var name5 = window.document.querySelector('input#name5').value

    var qtdMaior = 0
    var qtdMenor = 0

    if (primeiraIdade >= 18) {
        qtdMaior++
    } else {
        qtdMenor++
    }

    if (segundaIdade >= 18) {
        qtdMaior++
    } else {
        qtdMenor++
    }

    if (terceiraIdade >= 18) {
        qtdMaior++
    } else {
        qtdMenor++
    }

    if (quartaIdade >= 18) {
        qtdMaior++
    } else {
        qtdMenor++
    }

    if (quintaIdade >= 18) {
        qtdMaior++
    } else {
        qtdMenor++
    }

    resposta.innerHTML = `${qtdMaior} são maiores de idade e ${qtdMenor} são menores de idade. <br/> <br/> ${name1} Tem ${primeiraIdade} anos e é ${maiorIdade(primeiraIdade)}, <br/> ${name2} Tem ${segundaIdade} anos e é ${maiorIdade(segundaIdade)}, <br/> ${name3} Tem ${terceiraIdade} e é ${maiorIdade(terceiraIdade)}, <br/> ${name4} Tem ${quartaIdade} anos e é ${maiorIdade(quartaIdade)},<br/> ${name5} Tem ${quintaIdade} anos e é ${maiorIdade(quintaIdade)}`
}

function maiorIdade(idade) {
    if (idade >= 18) {
        return 'maior de idade'
    } else {
        return 'menor de idade'
    }
}


function sexoEaltura() {

    var altura1 = window.document.querySelector('input#altura1')
    var altura2 = window.document.querySelector('input#altura2')
    var altura3 = window.document.querySelector('input#altura3')
    var altura4 = window.document.querySelector('input#altura4')
    var altura5 = window.document.querySelector('input#altura5')
    var res6 = window.document.querySelector('div#res6')

    var primeiraAltura = Number(altura1.value)
    var segundaAltura = Number(altura2.value)
    var terceiraAltura = Number(altura3.value)
    var quartaAltura = Number(altura4.value)
    var quintaAltura = Number(altura5.value)

    var sexo1 = window.document.querySelector('select#sexo1').value
    var sexo2 = window.document.querySelector('select#sexo2').value
    var sexo3 = window.document.querySelector('select#sexo3').value
    var sexo4 = window.document.querySelector('select#sexo4').value
    var sexo5 = window.document.querySelector('select#sexo5').value

    // console.log(`${sexo1}, ${sexo2}, ${sexo3}, ${sexo4} e ${sexo5}`)

        var qtdFeminino = 0
        var qtdMasculino = 0
        if (sexo1 == 'Feminino') {
            qtdFeminino++
         } else if (sexo1 == 'Masculino') {
             qtdMasculino++
         }
         if (sexo2 == 'Feminino') {
            qtdFeminino++
         } else if (sexo2 == 'Masculino') {
             qtdMasculino++
         }
         if (sexo3 == 'Feminino') {
            qtdFeminino++
         } else if (sexo3 == 'Masculino') {
             qtdMasculino++
         }
         if (sexo4 == 'Feminino') {
            qtdFeminino++
         } else if (sexo4 == 'Masculino') {
             qtdMasculino++
         }
         if (sexo5 == 'Feminino') {
            qtdFeminino++
         } else if (sexo5 == 'Masculino') {
             qtdMasculino++
         }
    
        //  console.log(`${qtdMasculino} e ${qtdFeminino}`)

    function calculoAltura(altura) {
        if (altura >= primeiraAltura && 
            altura >= segundaAltura && 
            altura >= terceiraAltura && 
            altura >= quartaAltura && 
            altura >= quintaAltura) {
                return 'é a maior altura'
        } else {
            return ''
        }
        
    }

    res6.innerHTML = `A altura da primeira pessoa é ${primeiraAltura} e ${calculoAltura(primeiraAltura)} </br> A altura da segunda pessoa é ${segundaAltura} e ${calculoAltura(segundaAltura)} </br> A altura da terceira pessoa é ${terceiraAltura} e ${calculoAltura(terceiraAltura)} </br> A altura da quarta pessoa é ${quartaAltura} e ${calculoAltura(quartaAltura)} </br> A altura da quinta pessoa é ${quintaAltura} e ${calculoAltura(quintaAltura)}</br> Tem ${qtdMasculino} homens e ${qtdFeminino} mulheres.</br>` 
}