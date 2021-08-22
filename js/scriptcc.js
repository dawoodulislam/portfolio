const cssLink = document.querySelectorAll(".alt-style"),
      totalCssLinks = cssLink.length;

function setStyleCh(color) {
    for(let l=0; l<totalCssLinks; l++) {
        if(color === cssLink[l].getAttribute('title')){

            cssLink[l].removeAttribute('disabled');
        }
        else{
            cssLink[l].setAttribute('disabled','true');
        }
    }
}


const bSkin=document.querySelectorAll('.b-skin'),
      totalBskin=bSkin.length;
for(let i=0; i<totalBskin; i++){
    bSkin[i].addEventListener("change",function(){
        if(this.value === "dark")
        {
            document.body.className='dark';
        }
        else
        {
            document.body.className=""
        }
    })
}

document.querySelector('.toggler-ss').addEventListener("click",() =>{
    document.querySelector(".style-switch").classList.toggle("open");
})







