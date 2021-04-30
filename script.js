let screenLog = document.querySelector('.coordinate-box');
document.addEventListener('mousemove', logKey);

function logKey(e) {
  screenLog.innerText = `
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
    document.addEventListener('click',(e)=>{
    	screenLog.innerText = `
    	cordinates X/Y: ${e.screenX},${e.screenY}`
    })
}