// (window).on("load",function() {
//     console.log("window loaded");
// });




 

// var btnPopup = document.getElementById('btnPopup');
// var overlay = document.getElementById('overlay');
// btnPopup.addEventListener('click',openMoadl);
function openMoadl() {
overlay.style.display='block';
}


var btnClose = document.getElementById('btnClose');
btnClose.addEventListener('click',closeModal);
var t;
function closeModal() {
    
    t = document.getElementById('prompt').value; 
    console.log(t);
    overlay.style.display='none';
    console.log("test:" + t);
    document.getElementById("Ecran").innerHTML= t; 
}

  window.onload = openMoadl;
