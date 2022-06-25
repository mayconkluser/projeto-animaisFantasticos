export default function initFetchBitcoin() {
  try {
    fetch("https://blockchain.info/ticker")
      .then((response) => response.json())
      .then((jsonBitcoin) => {
        const btcPreco = document.querySelector(".btc-preco");
        btcPreco.innerText = (100 / jsonBitcoin.BRL.sell).toFixed(4);
      });
  } catch (erro) {
    console.log(erro);
  }
}
