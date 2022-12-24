elSimply=document.getElementById('idSimply');
elCantilever=document.getElementById('idCantilever');
elContinuous=document.getElementById('idContinuous');
elFixed=document.getElementById('idFixed');
elOverhanging=document.getElementById('idOverhanging');
elProblem=document.getElementById('idProblem');
elSFD=document.getElementById('idSFD');
elBMD=document.getElementById('idBMD');

function fillProblem(el){
    elBMD.innerHTML = elSFD.innerHTML = elProblem.innerHTML = el.innerHTML;
}
function simply(){
    fillProblem(elSimply)
}
function cantilever(){
    fillProblem(elCantilever)
    
}
function continuous(){
    fillProblem(elContinuous)
}
function fixed(){
    fillProblem(elFixed)
}
function overhanging(){
    fillProblem(elOverhanging)
}
