const scene = document.createElement('scene');
document.body.appendChild(scene);
const bashos = document.getElementById('basho');
const reb = document.getElementById('re');
reb.style.display = 'none';
function push() {
    new Audio('alert.mp3').play();
    bashos.innerHTML = `<marquee behavior="#fff" direction="left" scrollamount="70" width="980" behavior="slide" id="givetext"></marquee>;`
    let gtext = document.getElementById('givetext');
    gtext.innerText = "Give Up";
    reb.style.display = 'block';
}
function reset () {
    location.reload();
}