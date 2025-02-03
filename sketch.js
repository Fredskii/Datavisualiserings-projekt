//Varibaler der defineres og bruges igennem koden.
let Krypto;
let DropMenu;
let i;
let KryptoValuta;
let IndexTal;
let KryptoValg = null;
let canvasBredde = 1500;
let canvasHøjde = 800;

function setup() {
  //Baggrundens højde og bredde.
  createCanvas(canvasBredde,canvasHøjde);
  textSize(16);
  text("Vælg den kryptovaluta du søger ved at klikke på dropmenuen", 10, 50);

  //API fra CoinLore med et datasæt, der er indsat med loadJSON.
  loadJSON("https://api.coinlore.net/api/tickers/", (data) => {
    Krypto = data.data;

    //Dropmenu opsat, og et startervalg.
    DropMenu = createSelect();
    DropMenu.position(10, 10);
    DropMenu.size(200, 20);
    DropMenu.option("Vælg en Kryptovaluta");

    //For-lykke af hele datasættet af kryptovalutaer, som bliver til valgmuligheder i dropmenuen.
    for (i = 0; i < Krypto.length; i++) {
      KryptoValuta = Krypto[i];
      DropMenu.option(`${KryptoValuta.symbol}: ${KryptoValuta.name}`, i);
    }

    //En funktion der gør at når man vælger et valg dropmenuen, ændrer den til dens data ved brug af datasættets array.
    DropMenu.changed(change);
  });
}
//En funktion, som erstatter draw funktionen, så programmet ikke skal indlæse dataen flere gange.
function change(){
  IndexTal = DropMenu.value();
  background(255)
  text("Vælg den kryptovaluta du søger ved at klikke på dropmenuen", 10, 50);
  
  //Dataen udsendes i tekst, af den kryptovaluta valgt i dropmenuen.
  //Der indsættes forskellige informetioner omkring den valgte kryptovaluta.
  KryptoValg = Krypto[IndexTal];
  text(`Navn: ${KryptoValg.name}`, 10, 100);
  text(`Forkortelse: ${KryptoValg.symbol}`, 10, 120);
  text(`Pris (USD): ${KryptoValg.price_usd}$`, 10, 140);
  text(`Markedsværdi (USD): ${KryptoValg.market_cap_usd}$`, 10, 160);
  text(`1-times ændring: ${KryptoValg.percent_change_1h}%`, 10, 180);
  text(`24-timers ændring: ${KryptoValg.percent_change_24h}%`, 10, 200);
  text(`7-dages ændring: ${KryptoValg.percent_change_7d}%`, 10, 220);
  text(`Pris i Bitcoin: ${KryptoValg.price_btc} BTC`, 10, 240);
}