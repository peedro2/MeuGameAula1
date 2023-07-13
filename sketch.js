let personagem
let chao
let tamanho = 64
let velocidade = 64

let andarx = 0
let andary = 0

function setup() {
  createCanvas(576, 576);
  personagem = loadImage("luf.png")
  chao = loadImage("pedra.png")
}



function draw() {
  background(220);

  if (andarx < 0) { andarx = 0 }
  if (andary < 0) { andary = 0 }
  if (andarx > 512) { andarx = 512 }
  if (andary > 512) { andary = 512 }




  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++)

      image(chao, 64 * x, 64 * y, tamanho, tamanho)
  }



  image(personagem, andarx, andary, tamanho, tamanho)
  //rota gps na tela  text(`x:${andarx} y: ${andary}`,500 ,500)


  if (andarx === tamanho * 8 && andary === tamanho * 8) {
    rect(100, 220, 300, 200) // cria retangulo
    textSize(150)

    text("OK", 150, 350)
    botao = createButton("reiniciar")

    botao.mousePressed(reset)
    botao.position(300, 370)
    noLoop()





  }


}


function reset() {
  andarx = 0
  andary = 0


  loop()






}

function keyPressed() {

  if (keyIsDown(UP_ARROW)) {
    andary -= velocidade
  }

  if (keyIsDown(DOWN_ARROW)) {
    andary += velocidade
  }

  if (keyIsDown(LEFT_ARROW)) {
    andarx -= velocidade
  }

  if (keyIsDown(RIGHT_ARROW)) {
    andarx += velocidade
  }


}