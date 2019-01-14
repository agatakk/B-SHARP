// setTimeout(function(){$("#green").animate({
//     width: '100vw',
//     height: '100vh',
//     top: "0",
//     left:"0",
//     borderRadius:'0',
// },1500)}, 5000);



// setTimeout(function(){$("#par").animate({
//     padding: '20px',
//     // marginLeft: '-90vh',
//   },1500)},5000);



// const mql = window.matchMedia("screen and (max-width: 1024px)");

// const mql1 =  window.matchMedia('screen and (max-width: 768px)');

// function moveLogo (mql){
//   if (mql.matches){
//     setTimeout(function(){$("#par").animate({
//          marginLeft: '-40vh',
          
//      },1050)},5000);
//      console.log("działa");
//   }
//   else if (mql1.matches){
//     setTimeout(function(){$("#par").animate({
//          marginLeft: '-350vh',
//            },1450)},5000);
//   }
//   else{
//     setTimeout(function(){$("#par").animate({
//       padding: '20px',
//       marginLeft: '-90vh',
//     },1500)},5000);
//   }
// }
// moveLogo(mql);
// mql.addListener(moveLogo);
// mql1.addListener(moveLogo);
  
// let viewportMobile = window.matchMedia("screen and (max-width: 767px");
// let viewportMobileLarge = window.matchMedia("screen and (max-width: 1024px");

// if(viewportMobile.matches){
//     setTimeout(function(){$("#par").animate({
//         marginLeft: '-350vh',
//       },1450)},5000);
// }

// if(viewportMobileLarge.matches){
//   setTimeout(function(){$("#par").animate({
//     marginLeft: '-40vh',
    
//   },1050)},5000);
// }
// const mql = window.matchMedia('screen and (max-width: 1024px)')

// const mqls = [
//   window.matchMedia("(max-width: 1024px)"),
//   window.matchMedia("(max-width: 768px)"),
// ]
//  function moveLogo(mql){
//    if(mqls[0].matches){
//     setTimeout(function(){$("#par").animate({
//        marginLeft: '-40vh',
//          },1050)},5000);
//    }
//    else if(mqls[1].matches){
//     setTimeout(function(){$("#par").animate({
//          marginLeft: '-350vh',
//       },1450)},5000);
//    }
//    else{
//     setTimeout(function(){$("#par").animate({
//          padding: '20px',
//           marginLeft: '-90vh',
//       },1500)},5000);
//    }
//  }

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

    
    