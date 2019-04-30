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

  for(i = 0; i < dom_values.length; i++){
    console.log(dom_values[i])
  }
  //if(typeof dom_values)

  // for(const key in dom){
  //   let value = dom[key];
  //   console.log(value);
  // }
  //
  /*for(i = 0; i<dom.length; i++){
    for(j=0; j<8; i++){
      dom[i].appendChild(row);
    }
  }*/

});
