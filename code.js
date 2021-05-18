function ejercicio(){
    obtener=document.getElementById("texto").value
    safe=localStorage.getItem("safe")

    console.log(obtener)
    if(safe==null){
        localStorage.setItem("safe",obtener)

    }else{
        alert("digite el nombre")
    }


    obtener2=document.getElementById("texto2").value
    safe2=sessionStorage.getItem("safe2")

    console.log(obtener)
    if(safe==null){
        sessionStorage.setItem("safe2",obtener)

    }else{
        alert("digite el nombre")
    }
}