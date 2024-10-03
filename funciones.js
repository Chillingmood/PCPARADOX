function cambia(){
    var i =Math.floor(Math.random()*10);
    var ximagen = "imagen/" + i + ".jpg";
         
                 document.getElementById("fotocambia").src =ximagen;
              
  }
  function inicio() {
              setInterval(cambia, 500);
          }
  //evento que se ejecuta al mostrar la pagina
  window.onload = inicio;