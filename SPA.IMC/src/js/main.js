function calculo(){
document.getElementById("bd").style.backgroundColor="White"
document.getElementById("ds").style.backgroundColor="White"
document.getElementById("dm").style.backgroundColor="White"
document.getElementById("da").style.backgroundColor="White"
document.getElementById("n").style.backgroundColor="White"
document.getElementById("sp").style.backgroundColor="White"
document.getElementById("o").style.backgroundColor="White"
alt=document.getElementById("m").value;
peso=document.getElementById("kg").value;
imc=(peso(alt*alt));
document.getElementById("imc").innerHTML=imc;
if(imc<18.50){  
      document.getElementById("bp").style.backgroundColor="red";
      document.getElementById("bp").style.boder="solid"
}else{
    if(imc<16.00){
        document.getElementById("ds").style.backgroundColor="red";
    }else{
        if(imc<16.00 && imc<=16.99){
            document.getElementById("dm").style.backgroundColor="red";
        }else{
            if(imc<17.00 && imc<=18.50){
                document.getElementById("da").style.backgroundColor="red";
            }else{
                if(imc<25.00 && imc<=29.99){
                    document.getElementById("n").style.backgroundColor="red";
                }else{
                    if(imc>=30.00){
                        document.getElementById("sp").style.backgroundColor="red";
                    }else{
                        if(imc>=30.00 && imc<=35.99){
                            document.getElementById("0").style.backgroundColor="red";
                        }
                    }
                }
            }
        }
    }
}
}