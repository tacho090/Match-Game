$(document).ready(function(){
  console.log('document ready');
  //Draggable element
  $( function() {
    $( "#draggable" ).draggable();
  });

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
      $(".col-" + (i+1).toString()).append("<img id='theImg' src=image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/>");
    }
  }
  $("^='col-'").css("height:680px");
  $("img").attr({"width":"76%"});


});
