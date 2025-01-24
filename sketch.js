let Scrollbar;
let canvasHøjde = 1700;
let canvasBredde = 780
let api;

const valutaer = []

function setup() {
  createCanvas(canvasHøjde, canvasBredde);
  background(400);
  Scrollbar = createSelect();
  Scrollbar.position(0,0);
  Scrollbar.size(120,75)
  for (let i = 0; i<valutaer.length; i++){
    Scrollbar.option(valutaer[i],i)
  }
Scrollbar.option('Binance coin', 5);
Scrollbar.option('Bitco,in', 0);
Scrollbar.option('Cardano', 8);
Scrollbar.option('Dogecoin', 6);
Scrollbar.option('Etherium', 1);
Scrollbar.option('Tether', 3);
Scrollbar.option('Solana', 4);
Scrollbar.option('Staked Ether', 9);
Scrollbar.option('USD Coin', 7);
Scrollbar.option('XRP', 2);

loadData();
}
function loadData(){
  loadJSON('https://api.coinlore.net/api/tickers/',udskrivData);
}


function udskrivData(data){
  api = data;
  console.log(api.data);
}

function draw(){
  clear();
  if(api != null && Scrollbar.value() != null){
    text(api.data[Scrollbar.value()].name,100,100)
    text(api.data[Scrollbar.value()].rank,200,100)
    text(api.data[Scrollbar.value()].symbol,300,100)
    text(api.data[Scrollbar.value()].price_usd,400,100)
    text(api.data[Scrollbar.value()].percent_change_1h,100,200)
    text(api.data[Scrollbar.value()].percent_change_24h,200,200)
    text(api.data[Scrollbar.value()].percent_change_7d,300,200)
  }

}