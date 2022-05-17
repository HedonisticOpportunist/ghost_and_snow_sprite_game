// global variables
let sprites;
let kittyImg;

function preload() 
{
  kittyImg = loadImage('assets/cats.png');
}

function setup() 
{
    sprites = [];
    createCanvas(800, 600);
    
    // set up the cat images 
    for (let i = 0; i < 4; i++)
    {
       sprites.push(setUpSprite());
    }
}

function draw() 
{
    background("#B7E5DD");
    drawSprites();
    
    for(let j = 0; j < sprites.length; j++)
    {
         checkSpritePos(sprites[j]);
    }
}

function setUpSprite()
{
    let spriteRec; 
    spriteRec = createSprite(1, 1);
    spriteRec.addImage(kittyImg);
    
    // velocity 
    spriteRec.velocity.y = random(0.1, 0.5) * 3;
    
    // set up initial positions
    spriteRec.position.x = random(0, 30);
    spriteRec.position.y = random(0, 40);
    
    return spriteRec; 
}

function mousePressed()
{
     for (let i = 0; i < sprites.length; i++)
    {
        sprites[i].position.x = mouseX - random(0, 50);
        sprites[i].position.y = mouseY - random(0, 50);
       
    } 
}

function checkSpritePos(spriteChar)
{
    // check the boundary positions of the canvas 
    if (spriteChar.position.x > width || spriteChar.position.y > height)
    {
        gameOver();
    } 
}

function gameOver()
{
    fill('#FF0075');
    textSize(50);
    textAlign(CENTER);
    text("GAME OVER:", width / 2 , height / 2 );
    
    textSize(30);
    text("Reload the screen to play again.", width / 1.8 , height / 1.8 );
    
    noLoop();
}
