// SNACK 1
const biciCorsa = [
  {
    nome: 'Ktm',
    peso: 2.5
  },
  {
    nome: 'Skyline',
    peso: 3.5
  },
  {
    nome: 'Hurricane',
    peso: 3
  }
];

var biciLeggera = biciCorsa[0];

for(var i = 0; i < biciCorsa.length; i++){
  const {nome, peso} = biciCorsa[i];
  if(peso <= biciLeggera.peso){
    biciLeggera = biciCorsa[i];
    console.log(`La bici più leggera è la ${nome} e pesa: ${peso} kg`);
  }
}



// SNACK 2
