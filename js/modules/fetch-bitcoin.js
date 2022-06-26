export default function fetchBitcoin(url, target) {
  try {
    fetch(url)
      .then((response) => response.json())
      .then((jsonBitcoin) => {
        const btcPreco = document.querySelector(target);
        btcPreco.innerText = (100 / jsonBitcoin.BRL.sell).toFixed(4);
      });
  } catch (erro) {
    console.log(erro);
  }
}
