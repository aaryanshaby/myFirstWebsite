function dowhenresized(){
    var ctext = document.getElementById("centered");

    var win = window.innerWidth;
    if(win >= 992){
        ctext.classList.remove("smaller");
        ctext.classList.remove("smallest");
        ctext.classList.add("normal");
    }

    else if (win >= 768){
        ctext.classList.remove("normal");
        ctext.classList.remove("smallest");
        ctext.classList.add("smaller");
    }

    else if ( win < 768){
        ctext.classList.remove("normal");
        ctext.classList.remove("smaller");
        ctext.classList.add("smallest");
    }
}
dowhenresized();

window.addEventListener("resize", dowhenresized);


function dowhenresized2(){
    var ctext2 = document.getElementById("centered2");

    var win = window.innerWidth;
    if(win >= 992){
        ctext2.classList.remove("smaller");
        ctext2.classList.remove("smallest");
        ctext2.classList.add("normal");
    }

    else if (win >= 768){
        ctext2.classList.remove("normal");
        ctext2.classList.remove("smallest");
        ctext2.classList.add("smaller");
    }

    else if ( win < 768){
        ctext2.classList.remove("normal");
        ctext2.classList.remove("smaller");
        ctext2.classList.add("smallest");
    }
}
dowhenresized2();

window.addEventListener("resize", dowhenresized2);




function dowhenresized3(){
    var ctext3 = document.getElementById("centered3");

    var win = window.innerWidth;
    if(win >= 992){
        ctext3.classList.remove("smaller");
        ctext3.classList.remove("smallest");
        ctext3.classList.add("normal");
    }

    else if (win >= 768){
        ctext3.classList.remove("normal");
        ctext3.classList.remove("smallest");
        ctext3.classList.add("smaller");
    }

    else if ( win < 768){
        ctext3.classList.remove("normal");
        ctext3.classList.remove("smaller");
        ctext3.classList.add("smallest");
    }
}
dowhenresized3();

window.addEventListener("resize", dowhenresized3);