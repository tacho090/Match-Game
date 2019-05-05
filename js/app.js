$(document).ready(function(){

  //Droppable element
  $( function() {
    $( "#draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        //Do something;
      }
    });
  });



  //Flashing text
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
  //

  //Fill columns
  var list = ['0', '1', '2', '3', '4', '5', '6'];

  $('div.panel-tablero:first').attr('id', 'droppable');
  $('div.panel-tablero:first').addClass('ui-widget-content');

  function fill(){
    $("div[class ^= 'col-']").attr({"style":"height:680px"});
    for(i = 0; i < list.length; i++){
      for(j=0; j < list.length; j++){
        $(".col-" + (i+1).toString()).append("<img id='draggable' src='image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/'>");
      }
    }
    $("img").attr({"width":"76%", "height":"97px"});
    $("img").addClass('draggable');
  }
  fill();
  //

  //Remove images
  function remove(){
    $("img").remove();
  }

  //Restart button event
  $(".buttons").click(function(){
    $(".btn-reinicio").text("Reiniciar");
    remove();
    fill();
    //reset timer
  });
  //

  //Droppable element
  //usar snap
  $( function() {
    $( ".draggable" ).draggable({ grid: [ 20, 20 ]});
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        //Do something;
      }
    });
  });



  $(function(){
    $("div[class ^= 'col-1']").find("img").each(function(){
    });
  });

  var detach_1, detach_2, detach_3;

  function pulse(div0, div1, div2){
    function startpulse(){
      setInterval(function () {
        pulsation(div0, div1, div2);
      }, 500);
    }
    let toggle = 500;
    function pulsation(div0, div1, div2) {
      div0.fadeToggle(toggle);
      div1.fadeToggle(toggle);
      div2.fadeToggle(toggle);
      pulse;
      setTimeout(function(){
        div0.fadeToggle(toggle);
        div1.fadeToggle(toggle);
        div2.fadeToggle(toggle);
        pulse;
      },250);
    }
    startpulse();
  }

  function detach_function(list){
    for(var i = 0; i<list.length; i++){
      list[i].detach();
    }
  }

  $(function(){
    //let detach_1, detach_2, detach_3;
    let detach_list1 = [];
    let detach_list2 = [];
    let detach_list3 = [];
    setTimeout(function(){
      for(var j = 1 ; j<8; j++){
        for(var i = 2; i<7; i++){
          if($(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src") == $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")").attr("src") && $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src") == $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")").attr("src")){
            detach_1 = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")");
            detach_2 = $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")");
            detach_3 = $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")");
            detach_list1.push(detach_1, detach_2, detach_3);
            pulse(detach_1, detach_2, detach_3);
          }
        }
      }
      setTimeout(function(){
        detach_function(detach_list1);
      }, 5000);
    },1000);
  });

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
    $("img").addClass('draggable');

  }, 5000);


  //Effect on .moves and .score after game ends
  function runEffect(){
    console.log("entered function");
    var options = { to: { width: 1200, height: 185, direction: "ltr" } };
    $(".moves, .score").effect("scale", options , 2000);
    $(".moves, .score").animate({
      left: "-=900",
      duration: 5000,
      queue: false,
      specialEasing: {
        width: "linear",
        height: "easeOutBounce"
      }
		});
  }
  //

  //Timer function
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
  //

});
