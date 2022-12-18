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
    const users = [
      name=document.getElementById("name").value,
      secondname=document.getElementById("secondname").value,
      cash=document.getElementById("cash").value,
      uncash=document.getElementById("uncash").value,
    ]
    console.log(users)
    localStorage.namel=users[0]
    localStorage.secondnamel=users[1]
    localStorage.cashl=users[2]
    localStorage.uncashl=users[3]
    
    document.getElementById("namev").value=""
    document.getElementById("secondnamev").value=""
    document.getElementById("cashv").value=""
    document.getElementById("uncashv").value=""


}