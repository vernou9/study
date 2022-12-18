function namech() {
    x=document.getElementById("name").value;
    document.getElementById("namev").value=x
    x=document.getElementById("secondname").value;
    document.getElementById("secondnamev").value=x
    x=document.getElementById("cash").value;
    document.getElementById("cashv").value=x
    x=document.getElementById("uncash").value;
    document.getElementById("uncashv").value=x
    
    
}
function perenesti() {
    localStorage.namel=document.getElementById("name").value
    localStorage.secondnamel=document.getElementById("secondname").value
    localStorage.cashl=document.getElementById("cash").value
    localStorage.uncashl=document.getElementById("uncash").value

    document.getElementById("name").value="" 
    document.getElementById("namev").value=""
    document.getElementById("secondname").value=""
    document.getElementById("secondnamev").value=""
    document.getElementById("cash").value=""
    document.getElementById("cashv").value=""
    document.getElementById("uncash").value=""
    document.getElementById("uncashv").value=""


}