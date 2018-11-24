$(document).ready(function(){
    $(".resultado").css("display", "none")
    $(".cadena").val("");
    var a=0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, i=0, j=0, k=0, l=0, m=0, n=0, ñ=0, o=0,
        p=0, q=0, r=0, s=0, t=0, u=0, v=0, w=0, x=0, y=0, z=0;
    var con=0;
    var ultimo=100;
    $(".continuar").click(function(){
        a=0, b=0, c=0, d=0, e=0, f=0, g=0, h=0, i=0, j=0, k=0, l=0, m=0, n=0, ñ=0, o=0,
        p=0, q=0, r=0, s=0, t=0, u=0, v=0, w=0, x=0, y=0, z=0;
        if($(".cadena").val()=="")
        {
            alert("Primero escriba en el campo")            
        }
        else{
            var Cadena = $(".cadena").val();
            var Cadenanueva= Cadena.replace(" ","");
            for(con=0;con<=ultimo;con++){
                if(con!=ultimo)
                {
                    contar(Cadenanueva,con);
                }
                else
                {
                    con=ultimo
                }
            }
            alert(" a: "+ a + " b: "+ b + " c: "+ c + " d: "+ d + " e: "+ e + " f: "+ f + " g: "+ g + " h: "+ h + " i: "+ i + " j: "+ j + " k: "+ k + " l: "+ l +
            " m: "+ m + " n: "+ n + " ñ: "+ ñ + " o: "+ o + " p: "+ p + " q: "+ q + " r: "+ r + " s: "+ s + " t: "+ t + " u: "+ u + " v: "+ v +" w: "+ w + " x: "+ x +
            " y: "+ y + " z: "+ z )
        }
    })
    contar = function(Cadena,con)
    {
        if(Cadena.substr(con,1)=="a")
        {
            a++;
        }
        if(Cadena.substr(con,1)=="b")
        {
            b++;
        }
        if(Cadena.substr(con,1)=="c")
        {
            c++;
        }
        if(Cadena.substr(con,1)=="d")
        {
            d++;
        }
        if(Cadena.substr(con,1)=="e")
        {
            e++;
        }
        if(Cadena.substr(con,1)=="f")
        {
            f++;
        }
        if(Cadena.substr(con,1)=="g")
        {
            g++;
        }
        if(Cadena.substr(con,1)=="h")
        {
            h++;
        }
        if(Cadena.substr(con,1)=="i")
        {
            i++;
        }
        if(Cadena.substr(con,1)=="j")
        {
            j++;
        }
        if(Cadena.substr(con,1)=="k")
        {
            k++;
        }
        if(Cadena.substr(con,1)=="l")
        {
            l++;
        }
        if(Cadena.substr(con,1)=="m")
        {
            m++;
        }
        if(Cadena.substr(con,1)=="n")
        {
            n++;
        }
        if(Cadena.substr(con,1)=="ñ")
        {
            ñ++;
        }
        if(Cadena.substr(con,1)=="o")
        {
            o++;
        }
        if(Cadena.substr(con,1)=="p")
        {
            p++;
        }
        if(Cadena.substr(con,1)=="q")
        {
            q++;
        }
        if(Cadena.substr(con,1)=="r")
        {
            r++;
        }
        if(Cadena.substr(con,1)=="s")
        {
            s++;
        }
        if(Cadena.substr(con,1)=="t")
        {
            t++;
        }
        if(Cadena.substr(con,1)=="u")
        {
            u++;
        }
        if(Cadena.substr(con,1)=="v")
        {
            v++;
        }
        if(Cadena.substr(con,1)=="x")
        {
            x++;
        }
        if(Cadena.substr(con,1)=="y")
        {
            y++;
        }
        if(Cadena.substr(con,1)=="z")
        {
            z++;
        }
    }
})