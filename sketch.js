var fixedRect, movingRect; 

function setup(){ 
 createCanvas(1200,800);
 fixedRect = createSprite(600, 400, 50, 80);
 fixedRect.shapeColor = "green";

 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";
     }

 function draw() {
  background(255,255,255);

   movingRect.x=mouseX;
   movingRect.y=mouseY; 

   if(isTouching(movingRect,fixedRect)){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
   }
   else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
   }

     drawSprites();
     
     }

    