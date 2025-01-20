let Scrollbar;
let canvasHøjde = 1700;
let canvasBredde = 780


function setup() {
  createCanvas(canvasHøjde, canvasBredde);
  background(400);
  Scrollbar = createSelect();
  Scrollbar.position(0,0);
  Scrollbar.size(120,75)
Scrollbar.option('Binance coin', 5);
Scrollbar.option('Bitcoin', 0);
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

let d;
function udskrivData(data){
  d = data;
  console.log(d.data);
}
function draw(){
  clear();
  if(d != null && Scrollbar.value() != null){
    text(d.data[Scrollbar.value()].name,100,100)
    text(d.data[Scrollbar.value()].rank,200,100)
    text(d.data[Scrollbar.value()].symbol,300,100)
    text(d.data[Scrollbar.value()].price_usd,400,100)
    text(d.data[Scrollbar.value()].percent_change_1h,100,200)
    text(d.data[Scrollbar.value()].percent_change_24h,200,200)
    text(d.data[Scrollbar.value()].percent_change_7d,300,200)
  }

}