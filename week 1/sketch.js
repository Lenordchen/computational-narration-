let outputP;
let genButton;

function setup() {
  noCanvas();
  background(255);
  textAlign(LEFT, TOP);
  textSize(24);
  genButton = createButton("Click to generate");
  genButton.mousePressed(generate);
  outputP = createP("");
}

function draw() {
}

function generate() {
  let grammar = tracery.createGrammar(grammarSource);
  grammar.addModifiers(tracery.baseEngModifiers);
  let output = grammar.flatten("#origin#");
  outputP.html(output);

}

let grammarSource = {
  "origin": "More laughter around the mahjong table. #name# stood behind #name#, watching the game. The #object# behind was #verb# in heavy, #color# #material-feel# curtains printed with a brick-red phoenix-tail fern design. ",
  "name": ["Mr.Yee", "He", "Wang Chia-chih", "Ms.Mai", "Ms.Yee", "Ms.Liao","his'wife"],
  "name_male":["Mr.Yee", "He"],
  "name_female": ["Wang Chia-chih", "Ms.Mai", "Ms.Yee", "Ms.Liao","his'wife"],
  "object": ["diamond rings", "cheongsam", "diamond-studded button earrings", "table cloth",
    "turned-down collar","wall"],
  "material-feel": ["satin", "wool", "artificial", "electric", "harsh"],
  "color": ["blinding white","sapphire","gold","yellowish-brown","rouged"],
  "verb":["flashed", "studded", "silhouetted", "thinned into", "pinned", "swathed"]

};
