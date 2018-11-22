$(document).ready(function(){
    $(".recoger").css("display", "none")
    $(".resultado").css("display", "none")
    $(".continuar").click(function(){
        var Cantidad = $(".cantidad").val();
        var Divisible = $(".factor").val();
        var Matriz=[Cantidad];
        if(Cantidad=="" || Divisible=="")
        {
            alert("Llene todos los campos.");
        }
        else{
            if(Cantidad<1000000000 || Cantidad>=1|| Divisible<1000000000 || Divisible>=1)
            {
                $(".datos").slideUp(1000),
                window.setTimeout(function(){
                    $(".recoger").slideDown(1000)
                },1300)
                var i=0;
                recoger(Cantidad, i);
            }
            else{
                alert("Solo se aceptan numeros, y no se aceptan valores de 0")
            }
        }
    })
    recoger = function(limite, i){
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
})