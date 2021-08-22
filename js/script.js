window.addEventListener("load", function(){
    document.querySelector(".preloader").classList.add('opacity-z'),

        setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})


const filerCont=document.querySelector('.portfolio-filter'),
      fiterA=filerCont.children,
      totalFilterA=fiterA.length;

for(let i=0; i<totalFilterA; i++)
{
    fiterA[i].addEventListener('click',function(){
        filerCont.querySelector('.active').classList.remove('active');
        this.classList.add('active');
    });
};


const menu=document.querySelector('.menu'),
      menuList=menu.querySelectorAll('li'),
      totalMenuList=menuList.length,
      allSec=document.querySelectorAll('.section'),
      totalSec=allSec.length;

for(let i=0; i<totalMenuList; i++){
    const a=menuList[i].querySelector('a');
    a.addEventListener('click', function(){
//        removeBackSec();

        for(let j=0; j<totalMenuList; j++){
            if(menuList[j].querySelector('a').classList.contains('active')){
//                addBackSec(j);
            }
            menuList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');

        showSec(this);

        if(window.innerWidth < 1200){
            asideSecToggBtn();
        }
    })
}


function addBackSec(num){
    allSec[num].classList.add('prev-sec');
}

function showSec(elem){
    for(let i=0; i<totalSec; i++){
        allSec[i].classList.remove('active');
    }
    const tar=elem.getAttribute('href').split('#')[1];
    document.querySelector('#'+tar).classList.add('active')
}


function removeBackSec(){
    for(let i=0; i<totalSec; i++){
        allSec[i].classList.remove('prev-sec');
    }
}

function updateMenu(element){
    for(let i=0; i<totalMenuList; i++){
        menuList[i].querySelector('a').classList.remove('active');
        const targ=element.getAttribute('href').split('#')[1];
        if(targ === menuList[i].querySelector('a').getAttribute('href').split('#')[1]){
            menuList[i].querySelector('a').classList.add('active');
        }
    }
}


document.querySelector(".hire-me").addEventListener('click', function(){
    const secIndex=this.getAttribute('data-section-index');
    showSec(this);
    updateMenu(this);
    removeBackSec();
    addBackSec(secIndex);
})




const navTogg=document.querySelector('.nav-toggler'),
      aside=document.querySelector('.aside');

navTogg.addEventListener('click',() =>{
    asideSecToggBtn();
})

//navTogg.addEventListener('click',asideSecToggBtn());

function asideSecToggBtn(){
    aside.classList.toggle('open');
    navTogg.classList.toggle('open');
    for(let i=0; i<totalSec; i++){
        allSec[i].classList.toggle('open');
    }
}















