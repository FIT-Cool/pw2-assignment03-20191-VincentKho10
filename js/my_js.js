function updateInsurance(idns){
    window.location = "index.php?nav=insupd&id="+idns;
}

function delInsurance(idns){
    window.location = "index.php?nav=ins&id="+idns;
}

function patUpdate(mrn){
    window.location = "index.php?nav=patupd&mrn="+mrn;
}

function patDelete(mrn){
    window.location = "index.php?nav=pat&mrn="+mrn;
}