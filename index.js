const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para determinar o nível do herói com base na experiência
function determinarNivel(xp) {
  let nivel;
  if (xp < 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }
  return nivel;
}

// Função para inserir heróis
function inserirHeroi() {
  rl.question('Digite o nome do herói (ou "sair" para encerrar): ', (nome) => {
    if (nome.toLowerCase() === 'sair') {
      console.log('Encerrando o programa.');
      rl.close();
      return;
    }
    rl.question('Digite a quantidade de experiência do herói: ', (xp) => {
      xp = parseInt(xp);

      // Determinar o nível do herói
      let nivel = determinarNivel(xp);

      // Exibe a mensagem com o nome do herói e seu nível
      console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);

      // Pergunta se o usuário deseja continuar
      rl.question('Deseja inserir outro herói? (sim/não): ', (resposta) => {
        if (resposta.toLowerCase() === 'sim') {
          inserirHeroi(); // Chama a função novamente para inserir outro herói
        } else {
          console.log('Encerrando o programa.');
          rl.close();
        }
      });
    });
  });
}

// Chamada inicial para inserir o primeiro herói
inserirHeroi();

