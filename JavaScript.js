function viewall() {
document.getElementById("all").style.display="flex";
document.getElementById("new").style.display="none";
document.getElementById("tab1").style.color="red";
document.getElementById("tab2").style.color="black";
}
function viewnew() {
    document.getElementById("new").style.display="flex";
    document.getElementById("all").style.display="none";
    document.getElementById("tab2").style.color="red";
    document.getElementById("tab1").style.color="black";
}