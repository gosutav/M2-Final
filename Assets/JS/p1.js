var button = document.getElementById("convertir")
button.addEventListener("click", function(){
      var USDamount = document.getElementById("USD")
      if(!isNaN(USDamount.value)){
      var CONVamount = USDamount.value*947.34 
      var CLPamount = document.getElementById("CLP")
       document.getElementById("CLP").innerHTML = CONVamount+" CLP"
      }
      else{
            document.getElementById("CLP").innerHTML = "Por favor ingrese una suma válida"
      }
 
})


