$(document).ready(function(){
  console.log('document ready');
  //Draggable element


  //Droppable element
  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        //Do something;
      }
    });
  });




  function startBlinking(){
    setInterval(function () {
      blink();
    }, 1000);
  }
  function blink() {
      $(".main-titulo").css("color", "white");
    setTimeout(function(){
      $(".main-titulo").css("color", "#DCFF0E");
    },500);
  }
  startBlinking();

  var list = ['0', '1', '2', '3', '4', '5', '6'];

  function fill(){
    for(i = 0; i < list.length; i++){
      for(j=0; j < list.length; j++){
        $(".col-" + (i+1).toString()).append("<img id='draggable' src='image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/'>");
      }
    }
  }

  $(".buttons").click(function(){
    $(".btn-reinicio").text("Reiniciar");
    remove();
    fill();
  });


  $('div.panel-tablero:first').attr('id', 'droppable');
  $('div.panel-tablero:first').addClass('ui-widget-content');
  $("img").addClass('draggable');//se agrega la clase y las imagenes adoptan fondo blanco

  //Droppable element
  //usar snap
  $( function() {
    console.log('entered droppable function');
    $( ".draggable" ).draggable({ grid: [ 20, 20 ]});
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        //Do something;
      }
    });
  });

  $("div[class ^= 'col-']").attr({"style":"height:680px"});
  $("img").attr({"width":"76%", "height":"97px"});

  $(function(){
    $("div[class ^= 'col-1']").find("img").each(function(){
      // console.log($(this).attr("src"));
    });
  });

  var detach_1, detach_2, detach_3;

  setTimeout(function(){
    for(var j = 1 ; j<8; j++){
      for(var i = 2; i<7; i++){
        //console.log($(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")"));
        if($(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src") == $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")").attr("src") && $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src") == $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")").attr("src")){
          detach_1 = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").hide(2000);
          detach_2 = $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")").hide(2000);
          detach_3 = $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")").hide(2000);
          setTimeout(function(){
            detach_1.detach();
            detach_2.detach();
            detach_3.detach()
          }, 2000);;
        }
      }
    }
  },2000);


  setTimeout(function(){
    for(var i = 1; i<8; i++){
      console.log('column number ' + i.toString() + ' passed');
      if($(".col-" + i.toString()).children().length < 7){
        let resta = $(".col-" + i.toString()).children().length;
        let difference = 7 - resta;
        console.log(difference.toString() + ' dom elements dispatched to column ' + i.toString());
        for(var j = 0; j<difference; j++){
          $('.col-' + i.toString()).prepend("<img id='theImg' src='image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/'>");
        }
      }
    }
    $("img").attr({"width":"76%", "height":"97px"});
  }, 5000);

  function runEffect(){
    console.log("entered function");
    // var selectedEffect = "size";
    var options = { to: { width: 1200, height: 185, direction: "ltr" } };
    // var options = {mode : "show", direction: "vertical"};
    // $(".moves, .score").hide();
    $(".moves, .score").effect("scale", options , 2000);
    $(".moves, .score").animate({
      // width: "200%",
      // height: "20%",
      left: "-=900",
      duration: 5000,
      queue: false,
      specialEasing: {
        width: "linear",
        height: "easeOutBounce"
      }
		//'marginLeft' : "-=1000px",
     //moves left
		});
  }

  $(function(){
    var timer = new Timer('1000 miliseconds');
    var timer_text = $('#timer');
    console.log(timer_text);
    var number_0 = '01';
    var number_1 = 59;
    timer.bind(1000 * 1, function () {
      console.log(number_1);
      timer_text.text(number_0 + ':' + number_1.toString());
      number_1 = number_1 - 1;
      if(timer_text.text() == '00:0'){
        console.log('se acabó el tiempo');
        $(".panel-tablero, .time").hide(2000);
        runEffect();

      }
      if(number_1<0){
        number_1 = 59;
        number_0 = '00';
      }

    });

    timer.start();
  });

fill();

});
