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

  //Append rows to columns
  var row = document.createElement('ROW');
  console.log('row element created');
  //var rownode = document.createTextNode('../img/1.png');
  //get all elements that begin with col-
  // var dom = $("'.^='col-'");
  var dom = $("div[class ^= 'col-']");
  console.log(dom);
  console.log(typeof dom);

  dom_values = Object.values(dom);
//  console.log(dom_values);
  var list = ['0', '1', '2', '3', '4', '5', '6'];

  var dom_subset = _.pick(dom_values, list);
  console.log(dom_subset);
  console.log(typeof dom_subset);

  /*for(i = 0; i < dom_values.length; i++){
    console.log(dom_values[i])
    console.log(typeof dom);
    console.log(dom instanceof Element);
  }*/
  //if(typeof dom_values)

  // for(const key in dom){
  //   let value = dom[key];
  //   console.log(value);
  // }
  //
  var row_list = [];
  var panel_height = $(".panel-tablero").css("height");
  console.log(panel_height);

  for(i = 1; i < list.length+1; i++){

    for(j=0; j<7; j++){


      //console.log('row added');
      //dom_subset[i].appendChild(row);

      //create and append new rows
      let row_0 = "<div class = row></div>";
      // row_0.css({"height":"97px"});

      $('.col-' + i.toString()).append(row_0);
      // col_row.append(col_0);
      console.log(".col-" + i.toString() + ":nth-child(" + (j+1).toString() + ")");
      console.log(".panel-tablero .col-" + i.toString() + ":nth-child(" + (j+1).toString() + ")");
      console.log($(".panel-tablero .col-" + i.toString() + " .row"));//row is an object
      //console.log(col_row);

      //row_list = row_list.push(col_row);
      //for(k=0; k<8)
      //console.log(typeof col_row);
    }
  }
  var col_0 = "<div class = col></div>";
  var row_1 = $('.row');
  console.log($('.row'));
  console.log($(".panel-tablero .col-" + (1).toString() + ":first-child"));
  row_1.css({"height":"97px"});
  /*
  $('#newid').load(function(){
    console.log('**********ids loaded**********')
  });*/
  /*row_list = $('#newid');
  var all = $("#newid").map(function() {
    return this.innerHTML;
  }).get();

  console.log(all.join());
  console.log('**********************************************')
  console.log(row_list);

  console.log(row_list);
  console.log(typeof row_list);
  */

  //Array fill

  var matrix = [];
  for(var i=0; i<7; i++) {//i = columns
      matrix[i] = new Array(7);
      for(var j=0; j < matrix[i].length; j++){//j = rows
        matrix[i][j] = Math.floor(Math.random() * 4);
        if(matrix[i][j] == 1){
          console.log((".col-" + (i+1).toString() + ":nth-child(" + (j+1).toString() + ")"));
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

  console.log($(".col-1:nth-child(2)"));

  console.log(matrix);

function validation(){
  for(var i=1; i<6; i++){
    return n = i;
  }
}

  //var random = Math.floor(Math.random() * 6;

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
  }

  console.log(matrix.indexOf(2));

  //Array*************************************************

  /*for(var i=1; i<6; i++){
    if(matrix[i][0] == matrix[i-1][0] && matrix[i][0] == matrix[i+1][0]){
      console.log("*".repeat(10) + "coincide" + "*".repeat(10));
    }else{
      console.log("*".repeat(10) + "NO coincide" + "*".repeat(10))
    }
  }*/

  /*
  //$("#theDiv").append("<img id='theImg' src='theImg.png'/>");*/

  // row_1.append("<img id='theImg' src=image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/>").append(col_0);
  // console.log(row_1);
  /*
  var columna = document.getElementsByClassName('col-1');
  console.log(columna);
  $('.col-1').append("<div class=row></div>");
  console.log('row added');*/

});
