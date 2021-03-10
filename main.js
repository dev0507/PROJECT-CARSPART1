 canvas=document.getElementById("myCanvas") ;
 ctx = canvas.getContext("2d") ; 
 car1_width=120;
 car1_height=70;
 car1_x=10;
 car1_y=10;
 background_image = "https://i.postimg.cc/KzWwHPcq/racing.gif";
 car2_image="https://postimg.cc/9rqYz9HM";
 car2_width=120;
 car2_height=70;
 car2_x=10;
 car2_y=10;
 
 car1_image="https://postimg.cc/9rqYz9HM";
 function add(){
    background_imgtag=newimage();
     background_imgtag.onload = uploadBackground;
     background_imgtag.src= background_image;
     car1_imgtag=newimage();
     car1_imgtag.onload = uploadcar1;
     car1_imgtag.src= car1_image;
 }
 car2_image="https://postimg.cc/9rqYz9HM";
 function add(){
    background_imgtag=newimage();
     background_imgtag.onload = uploadBackground;
     background_imgtag.src= background_image;
     car2_imgtag=newimage();
     car2_imgtag.onload = uploadcar2;
     car2_imgtag.src= car2_image;
 }
 function  uploadBackground(){
     ctx.drawimage( background_imgtag, 0,0, canvas.width,canvas.height);
 }
 function uploadrover(){
    ctx.drawImage( rover_imgtag, rover_x,rover_y, 0,0, rover.width,rover.height);
 }
 window.addEventListener("keydown",my_keydown);
 function my_keydown(e)
 {keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed== '38')
    {
        up();
      //  console.log
    }
    if(keyPressed== '40')
    {
       down();
       // console.log
    }
    if(keyPressed== '37')
    {
       left();
       // console.log
    }
    if(keyPressed== '39')
    {
       right();
        //console.log
    }
 }
 function up()
 {

    if(car2_y>=0)
    {
      car2_y-=10;
        console.log("When up arrow is pressed = " + car2_x  + car2_y );
        uploadracing.jpg();
        uploadcar2();
    }
 }
 function down()

 {
   if(car2_y<=500)
    {
      car2_y+=500;
      console.log("When down  arrow is pressed  =" +car2_x + car2_y  );
    uploadBackground();
    uploadcar2();
    }
 }
 function left()

 {
      if ( car2_x >=0 )
    {
      car2_x+=10;
      uploadBackground();
      uploadcar2();
    }
 }
 function right()

 {
     if (car2_x<=700)
    {
      car2_x+=10;
     uploadBackground();
     uploadcar2();
    }
 }
 




 function my_keydown(e)
 {keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed== '85')
    {
        up();
      //  console.log
    }
    if(keyPressed== '68')
    {
       down();
       // console.log
    }
    if(keyPressed== '76')
    {
       left();
       // console.log
    }
    if(keyPressed== '82')
    {
       right();
        //console.log
    }
 }
 function up()
 {

    if(car1_y>=0)
    {
      car1_y-=10;
        console.log("When up arrow is pressed = " + car1_x  + car1_y );
        uploadBackground();
        uploadcar1();
    }
 }
 function down()

 {
   if(car1<=500)
    {
      car1_y+=500;
      console.log("When down  arrow is pressed  ="+(car1_x + (car1_y);
    uploadBackground();
    uploadcar1();
    }
 }
 function left()

 {
      if ( car1_x >=0 )
    {
      car1_x+=10;
      uploadBackground();
      uploadcar1();
    }
 }
 function right()

 {
     if (car1_x<=700)
    {
      car1_x+=10;
     uploadBackground();
     uploadcar1();
    }
 }