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

  for(i = 0; i < list.length; i++){
    for(j=0; j < list.length; j++){
      $(".col-" + (i+1).toString()).append("<img id='draggable' src='image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/'>");

    }
  }

  $('div:nth-child(2)').attr('id', 'droppable');
  //$('div:nth-child(2)').addClass('ui-widget-content');
  // $("img").addClass('ui-widget-content');

  //Droppable element
  //usar snap
  $( function() {
    console.log('entered droppable function');
    $( "#draggable" ).draggable({ grid: [ 20, 20 ]});
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

});
