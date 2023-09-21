const express = require("express");

//Lista dos exercícios
const { somar} = require("./Exercicios/um.js");
const { valor_receber } = require("./Exercicios/Dois.js");
const { peso } = require("./Exercicios/tres.js");
const { temperaturaF } = require("./Exercicios/quatro.js");
const { qtde_milhas } = require("./Exercicios/Cinco.js");
const { evento_duracao } = require("./Exercicios/seis.js");
const { conversao_Metro } = require("./Exercicios/Sete.js");
const { conversao_Cm } = require("./Exercicios/Sete.js");
const { tabuada } = require("./Exercicios/oito.js");
const { media_notas } = require("./Exercicios/nove.js");
const { calculo_imc } = require("./Exercicios/dez.js");
const { calculo_operacao} = require("./Exercicios/onze.js");
const { positivo_negativo} = require("./Exercicios/doze.js");
const { par_impar} = require("./Exercicios/treze.js");
const { num_maior} = require("./Exercicios/quatorze.js");
const { valor_triangulo} = require("./Exercicios/quinze.js");
const { impostoDeRenda} = require("./Exercicios/dezesseis.js");
const { notaMediaPonderada} = require("./Exercicios/dezessete.js");
const { custoCarro } = require("./Exercicios/dezoito.js");
const { jurosCapital } = require("./Exercicios/dezenove.js");
const { valorTotalIPI } = require("./Exercicios/vinte.js");
//const { investigacaoCriminal } = require("./Exercicios/vinteUm.js");
const { velocidadeMulta } = require("./Exercicios/vintedois.js");
const { escreverBatata } = require("./Exercicios/vintetres.js");
const { tabuadaRepet } = require("./Exercicios/vintequatro.js");
const { mediaAltura } = require("./Exercicios/vintecinco.js");
const { mediaPesos } = require("./Exercicios/vinteseis.js");
const { pesoElevador } = require("./Exercicios/vintesete.js");
const { numerosNegativos } = require("./Exercicios/vinteoito.js");
const { numerosDiversos } = require("./Exercicios/vintenove.js");
const { numsAleatoriosEspecificos } = require("./Exercicios/trinta.js");

//Lista dos desafios
const { idadeMesesDias } = require("./Desafios/desafiozero.js");
const { trocaValores } = require("./Desafios/desafioum.js");
const { maior_num } = require("./Desafios/desafiodois.js");
const { num_menor } = require("./Desafios/desafiotres.js");
const { anoBissexto } = require("./Desafios/desafioquatro.js");
const { NumPosParMult } = require("./Desafios/desafiocinco.js");
const { valoresFibonacci } = require("./Desafios/desafioseis.js");
const { valoresFibDez } = require("./Desafios/desafiosete.js");
const { detalhesNotas } = require("./Desafios/desafiooito.js");


const app = express();
app.use(express.json());
const port = 3000;

app.post("/api/exum", (req, res) => {
  try{
    const result = somar(req.body.num1, req.body.num2);
    res.status(200).json({message: `A soma dos números é: ${result}`});

  }catch(error){
    console.log(error);
    res.status(500).json({message: "ERROR"});
  }
});

app.post("/api/exdois", (req, res) => {
  try{
    const result = valor_receber(req.body.valor_hr, req.body.qtde_horas);
    res.status(200).json({message: `O trabalhador irá receber no final do mês o valor de: ${result}`});

  }catch(error){
    console.log(error);
    res.status(500).json({message: "ERROR"});
  }
});

app.post("/api/extres", (req, res) => {
  try{
    const result = peso(
      req.body.peso1,
      req.body.peso2,
      req.body.peso3,
      req.body.peso4,
      req.body.peso5
    );
    res.status(200).json({message: `A média dos 5 pesos é: ${result}`});
  
  }catch(error){
    console.log(error);
    res.status(500).json({message: "ERROR"});
  }
});

app.post("/api/exquatro", (req, res) => {
  try{
    const result = temperaturaF(req.body.temperatura_C);
    res.status(200).json({message: `A temperatura em Fahrenheit é: ${result}`});
  }
  catch(error){
    console.log(error);
    res.status(500).json({message: "ERROR"});
  }
});

app.post("/api/excinco", (req, res) => {
  const result = qtde_milhas(req.body.valor_milhas);

  res.status(200).json({
    message: `Convertendo as milhas para quilômetros fica:  ${result}`,
  });
});

app.post("/api/exseis", (req, res) => {
  const result = evento_duracao(req.body.duracao_segundos);

  res.status(200).json({
    message: `A duração do evento em horas é de:  ${result}`,
  });
});

app.post("/api/exsete", (req, res) => {
  const resulMetro = conversao_Metro(req.body.valorKM);
  const resulCm = conversao_Cm(req.body.valorKM);

  res.status(200).json({
    message: `A conversão de quilometros em metros é de ${resulMetro}m e em CM é ${resulCm}cm`,
  });
});

app.post("/api/exoito", (req, res) => {
  const result = tabuada(req.body.num);

  res.status(200).json(result);
});

app.post("/api/exnove", (req, res) => {
  const result = media_notas(req.body.nota1, req.body.nota2, req.body.nota3);

  res.status(200).json(result);
});

app.post('/api/exdez', (req, res) => {
  const result = calculo_imc(req.body.sexo, req.body.altura)

  res.status(200).json({message: `Seu IMC é: ${result}`});
})

app.post('/api/exonze', (req, res) => {
  const result = calculo_operacao(req.body.num1, req.body.operacao, req.body.num2)

  res.status(200).json({message: result})
})

app.post('/api/exdoze', (req, res) => {
  const result = positivo_negativo(req.body.num)

  res.status(200).json({message: result})
})

app.post('/api/extreze', (req, res) => {
  const result = par_impar(req.body.num)

  res.status(200).json({message: result})
})

app.post('/api/exquatorze', (req, res) => {
  const result = num_maior(req.body.num1, req.body.num2)

  res.status(200).json({message: result})
})

app.post('/api/exquinze', (req, res) => {
  const result = valor_triangulo(req.body.valorA, req.body.valorB, req.body.valorC, req.body.altura)

  res.status(200).json({message: result})
})

app.post('/api/exdezesseis', (req, res) => {
  const result = impostoDeRenda(req.body.CPF, req.body.numDependentes, req.body.rendaMensal)

  res.status(200).json({message: result})
})

app.post('/api/exdezessete', (req, res) => {
  const result = notaMediaPonderada(req.body.nota1, req.body.nota2, req.body.nota3)

  res.status(200).json({message: `Média: ${result}`})
})

app.post('/api/exdezoito', (req, res) => {
  const resultado = custoCarro(req.body.custoCarro);
  res.status(200).json({message: `O custo do carro para o consumidor final é: ${resultado}`});
});

app.post('/api/exdezenove', (req, res) => {
  const resultado = jurosCapital(req.body.capital, req.body.taxa, req.body.tempo);
  res.status(200).json({message: resultado});
});

app.post('/api/exvinte', (req, res) => {
  const resultado = valorTotalIPI(req.body.percentagem, req.body.cod_peca1, req.body.valor_peca1, req.body.qntde_peca1, req.body.cod_peca2, req.body.valor_peca2, req.body.qntde_peca2);
  res.status(200).json({message: `O valor total do IPI é: ${resultado}`});
});

/*app.post('/api/exvinteum', (req, res) => {
  const resultado = investigacaoCriminal(req.body.respostas);
  res.status(200).json({message: resultado});
})*/

app.post('/api/exvintedois', (req, res) => {
  const resultado = velocidadeMulta(req.body.velPermitida, req.body.velPraticada);
  res.status(200).json({message: resultado});
});

app.post('/api/exvintetres', (req, res) => {
  const resultado = escreverBatata(req.body.num);
  res.status(200).json({message: resultado});
});

app.post('/api/exvintequatro', (req, res) => {
  const resultado = tabuadaRepet(req.body.num);
  res.status(200).json({message: resultado});
});

app.post('/api/exvintecinco', (req, res) => {
  const resultado = mediaAltura(req.body.qntdePessoas, req.body.alturas);
  res.status(200).json({message: `A média das alturas é: ${resultado}m`});
});

app.post('/api/exvinteseis', (req, res) => {
  const resultado = mediaPesos(req.body.pesos);
  res.status(200).json({message: `A média dos pesos é: ${resultado}kg`});
});

app.post('/api/exvintesete', (req, res) => {
  const resultado = pesoElevador(req.body.pesos);
  res.status(200).json({message: resultado});
});

app.post('/api/exvinteoito', (req, res) => {
  const numeros = req.body.numeros;
  const resultado = numerosNegativos(numeros);
  res.status(200).json({numbers: numeros, message: resultado});
});

app.post('/api/exvintenove', (_, res) => {
  res.status(200).json({message: `Os números gerados são: ${numerosDiversos()}`});
});

app.post('/api/extrinta', (_, res) => {
  res.status(200).json({message: `Os números gerados são: ${numsAleatoriosEspecificos()}`});
});

//DESAFIOS!

app.post('/api/desafios/desafiozero', (req, res) => {
  const resultado = idadeMesesDias(req.body.idade);
  res.status(200).json({message: `${resultado}`});
});

app.post('/api/desafios/desafioum', (req, res) => {
  const resultado = trocaValores(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

app.post('/api/desafios/desafiodois', (req, res) => {
  const resultado = maior_num(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

app.post('/api/desafios/desafiotres', (req, res) => {
  const resultado = num_menor(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

app.post('/api/desafios/desafioquatro', (req, res) => {
  const resultado = anoBissexto(req.body.ano);
  res.status(200).json({message: `${resultado}`});
});

app.post('/api/desafios/desafiocinco', (req, res) => {
  const resultado = NumPosParMult(req.body.numeros);
  res.status(200).json({message: `${resultado}`});
});

app.post('/api/desafios/desafioseis', (req, res) => {
  const resultado = valoresFibonacci(req.body.qntdeTermos);
  res.status(200).json({message: `Os números gerados foram: ${resultado}`});
});

app.post('/api/desafios/desafiosete', (_, res) => {
  res.status(200).json({message: `${valoresFibDez()}`});
});

app.post('/api/desafios/desafiooito', (req, res) => {
  const resultado = detalhesNotas(req.body.notas);
  res.status(200).json({
    maiorNota: resultado.maiorNota,
    menorNota: resultado.menorNota,
    mediaNotas: resultado.media,
    maioresNotas: resultado.maioresNotas,
    menoresNotas: resultado.menoresNotas
  });
});

/*Router

const express = require('express')
const router = require('./src/routes/exercicio.js')

const app = express()
const port = 3000

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})*/

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
