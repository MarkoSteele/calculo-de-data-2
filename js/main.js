const today = new Date();

const data1 = prompt('Digite a data(padrão americano) de início do certificado.')
const data2 = prompt('Digite a data(padrão americano) atual ou limite para a aprovação.')

function calculoData(start, end) {
  return resultado = Math.abs(new Date(start).getTime() - new Date(end).getTime());
  
}

const milliseconds = calculoData(data1,data2);
const seconds = calculoData(data1, data2) / 1000;
const minutes = calculoData(data1, data2) / (1000 * 60);
const hours = calculoData(data1, data2) / (1000 * 60 * 60);
const days = Math.ceil(calculoData(data1, data2) / (1000 * 60 * 60 * 24));
const meses = (days / 30).toFixed(2);

if (days < 540) {
  alert ('O certificado está dentro do prazo de 18 meses.')
} else {
    if (meses >= 24 )
    alert (`O ceritificado não está valido, pois ele possui 2 anos ou mais.`);
    else {
      alert (`O certificado não está válido, pois ele possui ${meses} meses.`);
    }
}
