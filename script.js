var carneresult = document.getElementById("carneResult")
var drinkresult = document.getElementById("drinkResult");
var refriresult = document.getElementById("refriResult")
var divresult = document.getElementById("divResult");

var peso = "Kg";

var carneTotalA = 400;
var carneTotalC = 200;
var cervejaTotal = 1200;
var refriTotalA = 1000;
var refriTotalC = 500;


function resultado() {

   
    let adultos =  document.getElementById("pessoas").value;
    let crianças = document.getElementById("crianças").value;
    let duration = document.getElementById("duração").value;

   
     adultos = parseInt(adultos);
     crianças = parseInt(crianças);
     duration = parseInt(duration);
   

    if(isNaN(adultos))
    {
        adultos = 0;
    }
    if(isNaN(duration))
    {
        duration = 0;
    }
    if(isNaN(crianças))
    {
        crianças = 0;
    }

    if ((adultos != 0) && (duration != 0)){


        let carne;
        let cerveja;
        let refri;
        divresult.style.display = "block"


        if (duration > 6) {
            carneTotalA = 650;
            carneTotalC = 325;
            cervejaTotal = 2000;
            refriTotalA = 1500;
            refriTotalC = 750;
        }
        else {
            carneTotalA = 400;
            carneTotalC = 200;
            cervejaTotal = 1200;
            refriTotalA = 1000;
            refriTotalC = 500;
        }



        carne = adultos * carneTotalA;
        carne += crianças * carneTotalC;

        cerveja = adultos * cervejaTotal;

        refri = adultos * refriTotalA;
        refri += crianças * refriTotalC;

        if (carne < 1000) {
            peso = "Gr";
        }
        else {
            peso = "Kg";
            carne = carne / 1000;
        }

        cerveja = cerveja / 355;
        cerveja = Math.ceil(cerveja);

        refri = refri / 2000;
        refri = Math.ceil(refri);


        carneresult.innerHTML = "- " + " " + carne + " " + peso + " " + "de carne";
        drinkresult.innerHTML = "- " + " " + cerveja + " " + "Latinhas de cerveja";
        refriresult.innerHTML = "- " + " " + refri + " " + "Garrafas de 2L de Refri";
        
    }
    else {
        alert("Insira dados para continuar")
       
    }
}

function reseta(){
    divresult.style.display = "none"

    document.getElementById("pessoas").value = '';
    document.getElementById("crianças").value = '';
    document.getElementById("duração").value = '';
    carneResult.innerHTML = "";
    drinkResult.innerHTML = "";
    refriResult.innerHTML = "";
    
}