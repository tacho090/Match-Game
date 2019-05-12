$(document).ready(function(){

  //Variables
  var list = ['0', '1', '2', '3', '4', '5', '6'];
  var iteration_time = 250;
  var detach_time = 750;
  var new_score = 0;
  var movimientos = 0;
  var detach_col_1, detach_col_2, detach_col_3, detach_row_1, detach_row_2, detach_row_3;


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

  //Fill columns

  $('div.panel-tablero:first').attr('id', 'droppable');
  $('div.panel-tablero:first').addClass('ui-widget-content');

  //Restart button event
  $(".buttons").click(function(){
    $(".btn-reinicio").text("Reiniciar");
    remove();
    fill();
    drag();
    columnMatch();
    rowMatch();
    addScore(0, true);
    Timer_panel(false);
    //reset timer
  });

  //Remove images
  function remove(){
    $("img").remove();
  };


  //Drag and drop images
  var origin;
  $(document).mousedown(function(event){
    origin = $(event.target);
    drop(origin);
  });

  function drag(){
    $(".draggable").draggable({
      snap:'.draggable',
      snapMode: 'inner',
      cursor: "move",
      revert: "invalid"
    });
  };

  function drop(img){
    console.log('entered drop function');
    let pos1 = $(img).position();
    $( ".droppable" ).droppable({
      accept: ".draggable",
      drop: function( event, ui ) {
        let li1 = $(ui.draggable);
        let li2 = $(this);
        let pos2 = $(this).position();
        let li1_src = $(img).attr('src');
        let li2_src = li2.attr('src');

        li2.offset({top:pos1.top,left:pos1.left});
        li1.offset({top:pos2.top,left:pos2.left});
        setTimeout(function(){
          console.log('settimeout');
          $(img).attr('src', li2_src);
          li2.attr('src', li1_src);
        }, 1000);
      }
    });
    setTimeout(function(){
      console.log('drop and entered columnMatch function');
      drag();
      columnMatch();
      rowMatch();
    }, detach_time);
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
  }
  fill();
  drag();
  drop();
  //


  //Pulse
  function pulse(div){
    let time = 125;
    function startpulse(){
      setInterval(function () {
        pulsation(div);
      }, time);
    }
    let toggle = time*2;
    function pulsation(div) {
      //   console.log('pulse\n');
      div.fadeToggle(toggle);
      pulse;
      setTimeout(function(){
        div.fadeToggle(toggle);
        pulse;
      },time);
    }
    startpulse();
  }


  //Detach function
  function detach_function(list){
    let time = 500;
    let score = 20;
    for(var i = 0; i<list.length; i++){
      list[i].hide( time ,function(){
        addScore(score, false);
      });
      setTimeout(function(){
        for(var i = 0; i<list.length; i++){
          list[i].detach();
        }
      }, time);
    }
    setTimeout(function(){
      addItems();
    }, time * 1.5);
  }
  columnMatch();
  rowMatch();
  Timer_panel(true);


  //encontrar coincidencias en filas
  function rowMatch(){
    let detach_row_list = [];
      setTimeout(function(){
        for(var i = 1; i<8; i++){//filas
          for(var j = 2; j<7; j++){//columnas
            let center = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src");
            let previous = $(".col-" + (j-1).toString() + " img:nth-child(" + i.toString() + ")").attr("src");
            let next = $(".col-" + (j+1).toString() + " img:nth-child(" + i.toString() + ")").attr("src");
            if(center == previous && center == next){
              detach_row_1 = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")");
              detach_row_2 = $(".col-" + (j+1).toString() + " img:nth-child(" + i.toString() + ")");
              detach_row_3 = $(".col-" + (j-1).toString() + " img:nth-child(" + i.toString() + ")");
              detach_row_list.push(detach_row_1, detach_row_2, detach_row_3);
              //ulse(detach_row_list);
            }
          }
        }
        setTimeout(function(){
          pulse(detach_row_list);
          detach_function(detach_row_list);
        }, detach_time);
      }, iteration_time);
  };


  //encontrar coincidencias en columnas
  function columnMatch(){
    //let detach_1, detach_2, detach_3;
    let detach_column_list = [];
    setTimeout(function(){
      for(var j = 1 ; j<8; j++){
        for(var i = 2; i<7; i++){
          if($(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src") == $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")").attr("src") && $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")").attr("src") == $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")").attr("src")){
            detach_col_1 = $(".col-" + j.toString() + " img:nth-child(" + i.toString() + ")");
            detach_col_2 = $(".col-" + j.toString() + " img:nth-child(" + (i+1).toString() + ")");
            detach_col_3 = $(".col-" + j.toString() + " img:nth-child(" + (i-1).toString() + ")");
            detach_column_list.push(detach_col_1, detach_col_2, detach_col_3);
            //pulse(detach_column_list);
          }
        }
      }
      setTimeout(function(){
        pulse(detach_column_list);
        detach_function(detach_column_list);
      }, detach_time);
    }, iteration_time);
  };


  //add new items
  function addItems(){
    let time = 250;
    let difference = 0;
    let difference_list = [];
    // setTimeout(function(){
      for(var i = 1; i<8; i++){
        if($(".col-" + i.toString()).children().length < 7){
          let resta = $(".col-" + i.toString()).children().length;
          difference = 7 - resta;
          difference_list.push(difference);
          for(var j = 0; j<difference; j++){
            $('.col-' + i.toString()).prepend("<img id='theImg' src='image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/'>");
          }
        }
      }
      $("img").attr({"width":"76%", "height":"97px"});
      $("img").addClass('draggable');
    // }, 8000);
    for( i = 0; i < difference_list.length; i++){
      if(difference_list[i] !== 0){
        setTimeout(function(){
          drag();
          drop('.draggable');
          columnMatch();
          rowMatch();
        }, time);
      }else{
      }
    }
  };

  //Effect on .moves and .score after game ends
  function runEffect(){
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

      var timer = new Timer('1000 miliseconds');
      var timer_text = $('#timer');
      var number_0 = '01';
      var number_1 = 59;
      timer.bind(1000 * 1, function () {
        // console.log(number_1);
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
        timer.reset();
        // timer.start();
      }
  };
  //

});
