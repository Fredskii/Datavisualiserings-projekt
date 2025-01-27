//Varibaler der bruges igennem koden.
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

    //En A-Sync funktion der gør at når man vælger i dropmenuen, viser den dens data ved brug af datasættets array.
    DropMenu.changed(() => {
      IndexTal = DropMenu.value();
      KryptoValg = Krypto[IndexTal];
    });
  });
}

function draw() {
  //Baggrundens farve og tekstens størrelse.
  background(250);
  textSize(18);
  text("Vælg den kryptovaluta du søger ved at klikke på dropmenuen", 10, 50);

  // Dataen udsendes i tekst, af den kryptovaluta valgt i dropmenuen.
  //Der indsættes forskellige punkter der beskriver forskellige ting omkring kryptovalutaen.
  if (KryptoValg) {
    text(`Navn: ${KryptoValg.name}`, 10, 100);
    text(`Forkortelse: ${KryptoValg.symbol}`, 10, 125);
    text(`Pris (USD): ${KryptoValg.price_usd}$`, 10, 150);
    text(`Markedsværdi (USD): ${KryptoValg.market_cap_usd}$`, 10, 175);
    text(`1-times ændring: ${KryptoValg.percent_change_1h}%`, 10, 200);
    text(`24-timers ændring: ${KryptoValg.percent_change_24h}%`, 10, 225);
    text(`7-dages ændring: ${KryptoValg.percent_change_7d}%`, 10, 250);
    text(`Pris i Bitcoin: ${KryptoValg.price_btc} BTC`, 10, 275);
  }
}
