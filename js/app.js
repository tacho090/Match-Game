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



  // setTimeout(function(){
  //   $(".main-titulo").css("color", "white");
  // },2000);


  /*setTimeout(function(){
    $(".main-titulo").css("color", "white");
    setTimeout(function(){
      $(".main-titulo").css("color", "#DCFF0E");
    },2000);
  },2000);*/

  /*function blink(){
    setTimeout(function(){
      $(".main-titulo").css("color", "white");
    },2000);
    setTimeout(function(){
      $(".main-titulo").css("color", "#DCFF0E");
    },2000);
    blink();
  };*/
  //blink();

  var list = ['0', '1', '2', '3', '4', '5', '6'];

  for(i = 0; i < list.length; i++){
    for(j=0; j < list.length; j++){
      $(".col-" + (i+1).toString()).append("<img id='theImg' src=image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/>");
    }
  }
  $("img").attr("width", "76%");

  // setTime();
  //<img id='theImg' src=image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/>
  /*
  //Create rows. Append rows to columns
  for(i = 1; i < list.length+1; i++){
    for(j=0; j<7; j++){
      let row_0 = "<div class = row></div>";
      $('.col-' + i.toString()).append(row_0);
    }
  }

  var row_1 = $('.row');
  row_1.css({"height":"97px"});

  //Array fill*************************************************

  var matrix = [];
  for(var i=0; i<7; i++) {//i = columns
      matrix[i] = new Array(7);
      for(var j=0; j < matrix[i].length; j++){//j = rows
        matrix[i][j] = Math.floor(Math.random() * 4);
        if(matrix[i][j] == 1){
          $(".col-" + (i+1).toString() + ":nth-child(" + (j+1).toString() + ")").append("<img id='theImg' src=image/1.png/>");
        }else if(matrix[i][j] == 2){
          $(".col-" + (i+1).toString() + ":nth-child(" + (j+1).toString() + ")").append("<img id='theImg' src=image/2.png/>");
        }else if(matrix[i][j] == 3){
          $(".col-" + (i+1).toString() + ":nth-child(" + (j+1).toString() + ")").append("<img id='theImg' src=image/3.png/>");
        }else{
          $(".col-" + (i+1).toString() + ":nth-child(" + (j+1).toString() + ")").append("<img id='theImg' src=image/4.png/>");
        }
      }
  }

  //Array validation*************************************************

  for(var i=1; i<6; i++){
    for(var j=1; j<6; j++){
      if(matrix[i][j] == matrix[i][j-1] && matrix[i][j] == matrix[i][j+1]){
        console.log(matrix[i][j].toString() + " coincide con " + matrix[i][j-1].toString() + " y " + matrix[i][j+1].toString());
      }else{
        console.log("*".repeat(10) + "NO coincide" + "*".repeat(10))
      }
    }
  }

  for(var i=1; i<6; i++){
    for(var j=1; j<6; j++){
      if(matrix[j][i] == matrix[j-1][i] && matrix[j][i] == matrix[j+1][i]){
        console.log(matrix[j][i].toString() + " coincide con " + matrix[j-1][i].toString() + " y " + matrix[j+1][i].toString());
      }else{
        console.log("*".repeat(10) + "NO coincide" + "*".repeat(10))
      }
    }
  }*/
});
