$(document).ready(function(){
    $(".recoger").css("display", "none")
    $(".resultado").css("display", "none")
    $(".cantidad").val("")
    $(".factor").val("")
    var matriz2=[];
    var matriz3=[];
    $(".continuar").click(function(){
        var Cantidad = $(".cantidad").val()
        var Divisible = $(".factor").val()
        var Matriz=[Cantidad];
        if(Cantidad=="" || Divisible=="")
        {
            alert("Llene todos los campos.");
        }
        else{
            if(Cantidad<100000 || Cantidad>=1|| Divisible<100 || Divisible>=1)
            {
                $(".datos").slideUp(1000),
                window.setTimeout(function(){
                    $(".recoger").slideDown(1000)
                },1300)
                var i=0;
                recoger(Cantidad, i, Divisible);
            }
            else{
                alert("Solo se aceptan numeros, y no se aceptan valores de 0 o superiores a 100 en k")
            }
        }
    })
    recoger = function(limite, i,Divisible){
        var Matriz=[limite-1];
        $(".matriz").val("");
        $(".siguiente").click(function(){
            Matriz[i]= $(".matriz").val()
            if(limite-1==i)
            {
                $(".recoger").slideUp(1000),
                window.setTimeout(function(){
                    $(".resultado").slideDown(1000)
                },1300)
                calcular(limite,Matriz,Divisible);
            }
            else
            {
                if(Matriz[i]=="")
                {
                    alert("Ingrese un valor");
                }
                else{
                    if(Matriz[i]<1000000000 || Matriz[i]>-100000000 )
                    {
                        i++;            
                        $(".matriz").val("");
                    }
                    else{   
                        alert("Solo se aceptan numeros")
                    }
                }
            }
        })
    }
    calcular = function(limite,Matriz,Divisible){
        var nuevos=0;
        for(i=0;i<limite;i++)
        {
            for(j=i+1;j<limite;j++)
            {
                var suma=0;
                var numero1= parseInt(Matriz[i]);
                var numero2= parseInt(Matriz[j]);
                suma =numero1+numero2;
                matriz2[nuevos]=suma
                nuevos++;
            }
        }
        for(i=0;i<matriz2.length;i++)
        {
            var resultado=0;
            var numero3= parseInt(matriz2[i])
            resultado= numero3%Divisible;
            if(resultado!=0)
            {
                alert("no es divisible")
            }
            else{
                alert("si es divisible")
            }
        }
    }
})