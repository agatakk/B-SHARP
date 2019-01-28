  function changeText(cont1, cont2, speed) {
    var Otext = cont1.text();
    var Ocontent = Otext.split("");
    var i = 0;

    function show() {
      if (i < Ocontent.length) {
        cont2.append(Ocontent[i]);
        i = i + 1;
      };
    };
    var Otimer = setInterval(show, speed);
  };
  setTimeout(function () {
    changeText($(".intro"), $(".p2"), 35);
    clearInterval(Otimer);
  }, 6500);

  setTimeout(function () {
    changeText($(".coming"), $(".p3"), 35);
    clearInterval(Otimer);
  }, 10700);

  setTimeout(function () {
    changeText($(".sign-up"), $(".p4"), 35); // 35 = the Delay time in milliseconds between strokes.
    clearInterval(Otimer);
  }, 11200);