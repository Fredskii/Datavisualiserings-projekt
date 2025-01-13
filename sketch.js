function setup() {
  createCanvas(1700, 780);
  background(400);
  let Scrollbar = createSelect();
  Scrollbar.position(0,0);
  Scrollbar.size(120,75)
Scrollbar.option('Bitcoin');
Scrollbar.option('Etherium');
Scrollbar.option('Tether');
Scrollbar.option('Ripple');
Scrollbar.option('Binance coin');
Scrollbar.option('Solana');
Scrollbar.option('Doge coin');
Scrollbar.option('USD Coin');
Scrollbar.option('Cardano');
Scrollbar.option('Staked Ether');
}
function loadData(){
  loadJSON('https://api.coinlore.net/api/tickers/',udskrivData);
}
function udskrivData(data){
  console.log(data);
}
function draw(){

}