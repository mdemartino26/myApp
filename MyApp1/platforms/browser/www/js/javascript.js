var nombretxt = "";
var nicktxt = "";
var nombretxt2 ="";
var nicktxt2 = "";

// document.addEventListener("deviceready", onDeviceReady, false);
//     function onDeviceReady() {
//         console.log(navigator.camera);
//     }

function takePicture(id) {

    navigator.camera.getPicture(onSuccess, onFail, { quality: 25,
        destinationType: Camera.DestinationType.DATA_URL,
        correctOrientation: true,
        targetHeight:100,
        targetWidth:100
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById(id);
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
}


function corroborar(){
    nombretxt = document.getElementById("nombretxt").value;
    nicktxt = document.getElementById("nicktxt").value;
    nombretxt2 = document.getElementById("nombretxt2").value;
    nicktxt2 = document.getElementById("nicktxt2").value;
    if (nombretxt =="" || nicktxt =="" || nombretxt2 =="" || nicktxt2 ==""){
    } else {
      guardar();
    };
};

function guardar(){
    var usuario1 = {
        nombre: document.getElementById("nombretxt").value,
        nick: document.getElementById("nicktxt").value
    };

    var usuario2 = {
        nombre: document.getElementById("nombretxt2").value,
        nick: document.getElementById("nicktxt2").value
    };

    localStorage.setItem("usuario1", JSON.stringify( usuario1 ));
    localStorage.setItem("usuario2", JSON.stringify( usuario2 ));
    document.getElementById("ingreso").style.display = "none"; 
    document.getElementById("usu1").innerHTML = "Usuario 1" + usuario1.nick;
    document.getElementById("usu2").innerHTML = "Usuario 2" + usuario2.nick;
    document.getElementById("juegos").style.display = "";
}

function checkUsuarios(){
    document.getElementById("juegos").style.display = "none";
  var usuario1 = localStorage.getItem("usuario1")
  var usuario2 = localStorage.getItem("usuario2")
  if (usuario1 && usuario2) {
    usuario1 = JSON.parse(usuario1);
    usuario2 = JSON.parse(usuario2);
    document.getElementById("ingreso").style.display = "none";
    document.getElementById("usu1").innerHTML = "Usuario 1: " + usuario1.nick;
    document.getElementById("usu2").innerHTML = "Usuario 2: " + usuario2.nick;
    document.getElementById("juegos").style.display = "";
  }
}


