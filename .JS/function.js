function moreInfo() {
    var call = document.getElementById('info-extra');
    if (call.style.display === 'none') {
      call.style.display = 'block';
    } else {
      call.style.display = 'none';
    }
  }


  function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
  }

  window.onclick = function(event){
    if(!event.target.matches('boton')) {
      var desplegable =
      document.getElementsByClassName("datos");
      var i;
      for (i = 0; i < desplegable.length; i++) {
        var openDropdown = desplegable [i];
        if (openDropdown.classList.contains('show')){
          openDropdown.classList.remove('show');
        }
      }
    }
  }