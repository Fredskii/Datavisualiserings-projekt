function setup() {
  createCanvas(400, 400);
  background(250);
let Button = createButton("Klik for crypto");
Button.position(250,250);
Button.size(150,120);
Button.mousePressed(Crypto);
}