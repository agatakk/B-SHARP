setTimeout(function(){$("#green").animate({
    width: '100vw',
    height: '100vh',
    top: "0",
    left:"0",
    borderRadius:'0',
},1500)}, 5000);



setTimeout(function(){$("#par").animate({
    padding: '20px',
    marginLeft: '-90vh',
  },1500)},5000);


let viewportMobile = window.matchMedia("screen and (max-width: 376px");

if(viewportMobile.matches){
    setTimeout(function(){$("#par").animate({
        marginLeft: '-200vh',
      },1450)},5000);
}


  function changeText(cont1,cont2,speed){
          var Otext=cont1.text();
          var Ocontent=Otext.split("");
          var i=0;
          function show(){
            if(i<Ocontent.length){  
                cont2.append(Ocontent[i]);
                 i=i+1;
          };
        };
           var Otimer=setInterval(show,speed);
        };
   setTimeout(function(){
          changeText($(".intro"),$(".p2"),40); //  150 = the Delay time in milliseconds between strokes.
          clearInterval(Otimer);
        },6500);

    setTimeout(function(){
            changeText($(".coming"),$(".p3"),50); //  150 = the Delay time in milliseconds between strokes.
            clearInterval(Otimer);
          },11300);

    setTimeout(function(){
            changeText($(".sign-up"),$(".p4"),45); //  150 = the Delay time in milliseconds between strokes.
            clearInterval(Otimer);
          },12000);

    
    