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

  for(i = 0; i < list.length; i++){
    for(j=0; j<8; j++){
      //console.log('row added');
      //dom_subset[i].appendChild(row);
      let row_0 = "<div id = newid class = row></div>"
      let col_0 = "<div class = col-12></div>"
      let col_row = $('.col-' + i.toString()).append(row_0);
      //row_list = row_list.push(col_row);
      //for(k=0; k<8)
      //console.log(typeof col_row);
    }
  }

  $('#newid').load(function(){
    console.log('**********ids loaded**********')
  });
  row_list = $('#newid');
  var all = $("#newid").map(function() {
    return this.innerHTML;
  }).get();

  console.log(all.join());
  console.log('**********************************************')
  console.log(row_list);

  console.log(row_list);
  console.log(typeof row_list);

  //$("#theDiv").append("<img id='theImg' src='theImg.png'/>");
  var row_1 = $('#newid');
  row_1.append("<img id='theImg' src=image/" + (Math.floor((Math.random() * 4) + 1)).toString() + ".png/>");
  console.log(row_1);

  var columna = document.getElementsByClassName('col-1');
  console.log(columna);
  $('.col-1').append("<div class=row></div>");
  console.log('row added');

});
