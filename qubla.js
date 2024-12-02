let rotatex=document.getElementById("rotatex")
let showx=document.getElementById("show")
let span=document.getElementById("span")
let bnqubla=document.getElementById("b4")

bnqubla.onclick=()=>{
  document.querySelector(".contime").style.display="none";
  document.getElementById("conqubla").style.display="block";
}
if(navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(
        function possion(possion){
            let locx=possion.coords.latitude
            let locy=possion.coords.longitude
if (window.DeviceMotionEvent) {
  window.addEventListener("deviceorientation", (even)=>{
    let alph = even.alpha;  
  rotatex.style.transform= `rotate(${alph}deg)`
  span.innerHTML = `(${Math.round(alph + 58)}°)`;
  });
}
}
)}
