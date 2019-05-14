$(document).ready(function(){

  //Variables
  var list = ['0', '1', '2', '3', '4', '5', '6'];
  var new_score = 0;
  var movimientos = 0;
  var detach_col_1, detach_col_2, detach_col_3, detach_row_1, detach_row_2, detach_row_3;
  var total_time = 3000;
  var timer = new Timer('1000 miliseconds');
  var timer_text = $('#timer');
  var movimientos_text = $('#movimientos-text');
  var number_movimientos = 0;
  var score = 20;
  var origin;

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


  //Restart button event
  $(".buttons").click(function(){
    $(".btn-reinicio").text("Reiniciar");
    if(timer_text.text() == '00:0'){
      location.reload();
    }else{
      remove();
      fill();
      drag();
      columnMatch();
      rowMatch();
      addScore(0, true);
      Timer_panel(false);
      number_movimientos = 0;
      movimientos_text.text((number_movimientos).toString());

    }
  });

  //Remove images
  function remove(){
    $("img").remove();
  };

  //Drag and drop images
  $(document).mousedown(function(event){
    origin = $(event.target);
    var source = origin.attr('src');
    drop(origin, source);
  });

  //Draggable attr
  function drag(){
    $(".draggable").draggable({
      snap:'.draggable',
      snapMode: 'inner',
      cursor: "move",
      revert: "true"
    });
    $(".draggable").draggable("option", "revert", true);
  };

  //Droppable
  function drop(img, source){
    let pos1 = $(img).position();
    let src1 = $(img).attr('src');
    $( ".droppable" ).droppable({
      accept: ".draggable",
      drop: function( event, ui ) {
        number_movimientos = number_movimientos + 1;
        movimientos_text.text((number_movimientos).toString());
        //store attr
        let li1_src = $(img).attr('src');

        //set attr
        $(img).attr('src', $(this).attr('src'));
        $(this).attr('src', source);

      }
    });
      drag();
      columnMatch();
      rowMatch();
  };

  //Fill
  function fill(){
    $("div[class ^= 'col-']").attr({"style":"height:680px"});
    for(i = 0; i < list.length; i++){
      for(j=0; j < list.length; j++){
        $(".col-" + (i+1).toString()).append("<img src='image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/'>");
      }
    }
    $("img").attr({"width":"76%", "height":"97px"});
    $("img").addClass('draggable');
    $('img').addClass('droppable');
    drag();
  };

  //Pulse columns
  function pulse_col(div){
      function pulsation(){
        for(var i = 0; i<div.length; i++){
          div[i].fadeToggle(total_time/16);
        };
      };
      setInterval(function(){
         pulsation();
       }, total_time/8);
  };

  //Pulse rows
  function pulse_row(div){

    function pulsation(){
      for(var i = 0; i<div.length; i++){
        div[i].fadeToggle(total_time/16);
      };
    };
    setInterval(function(){
       pulsation();
     }, total_time/8);

  };

  //Detach function
  function detach_function_row(list){
    for(var i = 0; i<list.length; i++){
      list[i].hide(total_time/8, function(){
        $(this).detach();
        addScore(score, false);
      });
    };
  };

  //Detach function
  function detach_function_column(list){
    for(var i = 0; i<list.length; i++){
      list[i].hide(total_time/6, function(){
        $(this).detach();
      });
    };
  };

  //encontrar coincidencias en filas
  function rowMatch(){
    let detach_row_list = [];
    for(var i = 1; i<8; i++){//filas
      for(var j = 2; j<7; j++){//columnas
        let center = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src");
        let previous = $(".col-" + (j-1).toString() + " img:nth-child(" + i.toString() + ")").attr("src");
        let next = $(".col-" + (j+1).toString() + " img:nth-child(" + i.toString() + ")").attr("src");
        if(center === previous && center === next){
          detach_row_1 = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")");
          detach_row_2 = $(".col-" + (j+1).toString() + " img:nth-child(" + i.toString() + ")");
          detach_row_3 = $(".col-" + (j-1).toString() + " img:nth-child(" + i.toString() + ")");
          detach_row_list.push(detach_row_1, detach_row_2, detach_row_3);
        }
      }
    }
    pulse_row(detach_row_list);
    setTimeout(function(){
      detach_function_row(detach_row_list);
    }, total_time/3);
  };

  //encontrar coincidencias en columnas
  function columnMatch(){
    let detach_column_list = [];
    for(var j = 1 ; j<8; j++){
      // console.log('col-' + j.toString());
      for(var i = 2; i<7; i++){
        // console.log('col-' + j.toString() + ' row ' + i.toString());
        let center = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src");
        let previous = $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")").attr("src");
        let next = $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")").attr("src");
        if(center === previous && center === next){
          detach_col_1 = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")");
          detach_col_2 = $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")");
          detach_col_3 = $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")");
          detach_column_list.push(detach_col_1, detach_col_2, detach_col_3);
        }
      }
    }
    pulse_col(detach_column_list);
    setTimeout(function(){
      detach_function_column(detach_column_list);
      setTimeout(function(){
        addItems();
      }, total_time/3);
    }, total_time/3);
  };

  //add new items
  function addItems(){
      for(var i = 1; i<8; i++){
        if($(".col-" + i.toString()).children().length < 7){
          let children = $(".col-" + i.toString()).children().length;
          let children_add = 7 - children;
          for(var j = 0; j<children_add; j++){
            $('.col-' + i.toString()).prepend("<img id='theImg' src='image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/'>");
          }
        }
      }
      $("img").attr({"width":"76%", "height":"97px"});
      $("img").addClass('draggable');
      $("img").addClass('droppable');
      drag();
      columnMatch();
      rowMatch();
  };

  //Effect on .moves and .score after game ends
  function runEffect(){
    let final_score = new_score;
    $(".panel-score .score span").text(final_score.toString());
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

  //Add score
  function addScore(score, reinicio){
    if(reinicio){
      new_score = 0;
      $(".panel-score .score span").text(new_score.toString());
    }else{
      new_score = new_score + score;
      $(".panel-score .score span").text(new_score.toString());
    }
  };

  //Timer function
  function Timer_panel(start){
      var number_0 = '01';
      var number_1 = 59;
      timer.bind(1000 * 1, function () {
        timer_text.text(number_0 + ':' + number_1.toString());
        number_1 = number_1 - 1;
        if(timer_text.text() == '00:0'){
          $(".panel-tablero, .time").hide(2000);
          runEffect();
          timer.clear();
        }
        if(number_1<0){
          number_1 = 59;
          number_0 = '00';
        }
      });
      if(start == true){
        timer.start();
      }else{
        timer.stop();
        timer.start();
      }
  };

  //Executable functions
  startBlinking();
  fill();
  columnMatch();
  rowMatch();
  Timer_panel(true);

});
