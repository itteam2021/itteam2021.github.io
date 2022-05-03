function checkForm(){
    let x=document.forms["frm2"]["Pass"].value;
    let y=document.forms["frm2"]["confirmPass"].value;
    if( x!=y ){ alert("Error In Password");  return false; }}
   
    function findCountry(){
        var z=document.getElementById("country");
        z.value=z.value.toUpperCase();
       }