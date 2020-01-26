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