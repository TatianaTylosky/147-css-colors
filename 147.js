window.onload = function() {
  console.log ( 'it loaded' );
  var colors = ["green", "red", "blue"];
  console.log(colors);
  var arrayLength = colors.length;
  for (var i in colors) {
    current = colors[i];
    console.log( 'for loop started' );
    console.log(current);
    //insert a div with the background-color:colors[i];
    document.getElementById('grid').innerHTML='<div></div>';
    console.log ( 'added div' );
  }
}
