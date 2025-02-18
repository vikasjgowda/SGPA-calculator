function calci(event)
{
    var cie1=parseFloat(document.getElementById("cie1").value);
    var cie2=parseFloat(document.getElementById("cie2").value);
    var cie3=parseFloat(document.getElementById("cie3").value);
    var cie4=parseFloat(document.getElementById("cie4").value);
    var cie5=parseFloat(document.getElementById("cie5").value);
    var cie6=parseFloat(document.getElementById("cie6").value);

    var see1=parseFloat(document.getElementById("see1").value);
    var see2=parseFloat(document.getElementById("see2").value);
    var see3=parseFloat(document.getElementById("see3").value);
    var see4=parseFloat(document.getElementById("see4").value);
    var see5=parseFloat(document.getElementById("see5").value);
    var see6=parseFloat(document.getElementById("see6").value);
    

    var tot1=cie1+see1;
    var tot2=cie2+see2;
    var tot3=cie3+see3;
    var tot4=cie4+see4;
    var tot5=cie5+see5;
    var tot6=cie6+see6;

    document.getElementById("tot1").value=tot1;
    document.getElementById("tot2").value=tot2;
    document.getElementById("tot3").value=tot3;
    document.getElementById("tot4").value=tot4;
    document.getElementById("tot5").value=tot5;
    document.getElementById("tot6").value=tot6;

    document.getElementById("total").value=tot1+tot2+tot3+tot4+tot5+tot6;

    if(tot1 > 89)
    {
        document.getElementById("grd1").value="10";
    }

    else if(tot1 >79 && tot1<=89)
    {
        document.getElementById("grd1").value="9";
    }

    else if(tot1 >69 && tot1<=79)
    {
        document.getElementById("grd1").value="8";
    }

    else if(tot1 >59 && tot1<=69)
    {
        document.getElementById("grd1").value="7";
    }

    else if(tot1 >49 && tot1<=59)
    {
        document.getElementById("grd1").value="6";
    }

    else if(tot1 >39 && tot1<=49)
    {
        document.getElementById("grd1").value="5";
    }

    else if(tot1 >29 && tot1<=39)
    {
        document.getElementById("grd1").value="4";
    }

    else if(tot1 >19 && tot1<=29)
    {
        document.getElementById("grd1").value="3";
    }

    else if(tot1 >9 && tot1<=19)
    {
        document.getElementById("grd1").value="2";
    }

    else if(tot1 <9 && tot1>0)
    {
        document.getElementById("grd1").value="1";
    }

    if(tot2 > 89)
    {
        document.getElementById("grd2").value="10";
    }

    else if(tot2 >79 && tot2<=89)
    {
        document.getElementById("grd2").value="9";
    }

    else if(tot2 >69 && tot2<=79)
    {
        document.getElementById("grd2").value="8";
    }

    else if(tot2 >59 && tot2<=69)
    {
        document.getElementById("grd2").value="7";
    }

    else if(tot2 >49 && tot2<=59)
    {
        document.getElementById("grd2").value="6";
    }

    else if(tot2 >39 && tot2<=49)
    {
        document.getElementById("grd2").value="5";
    }

    else if(tot2 >29 && tot2<=39)
    {
        document.getElementById("grd2").value="4";
    }

    else if(tot2 >19 && tot2<=29)
    {
        document.getElementById("grd2").value="3";
    }

    else if(tot2 >9 && tot2<=19)
    {
        document.getElementById("grd2").value="2";
    }

    else if(tot2 <9 && tot2>0)
    {
        document.getElementById("grd2").value="1";
    }

    if(tot3 > 89)
    {
        document.getElementById("grd3").value="10";
    }

    else if(tot3 >79 && tot3<=89)
    {
        document.getElementById("grd3").value="9";
    }

    else if(tot3 >69 && tot3<=79)
    {
        document.getElementById("grd3").value="8";
    }

    else if(tot3 >59 && tot3<=69)
    {
        document.getElementById("grd3").value="7";
    }

    else if(tot3 >49 && tot3<=59)
    {
        document.getElementById("grd3").value="6";
    }

    else if(tot3 >39 && tot3<=49)
    {
        document.getElementById("grd3").value="5";
    }

    else if(tot3 >29 && tot3<=39)
    {
        document.getElementById("grd3").value="4";
    }

    else if(tot3 >19 && tot3<=29)
    {
        document.getElementById("grd3").value="3";
    }

    else if(tot3 >9 && tot3<=19)
    {
        document.getElementById("grd3").value="2";
    }

    else if(tot3 <9 && tot3>0)
    {
        document.getElementById("grd3").value="1";
    }

    if(tot4 > 89)
    {
        document.getElementById("grd4").value="10";
    }

    else if(tot4 >79 && tot4<=89)
    {
        document.getElementById("grd4").value="9";
    }

    else if(tot4 >69 && tot4<=79)
    {
        document.getElementById("grd4").value="8";
    }

    else if(tot4 >59 && tot4<=69)
    {
        document.getElementById("grd4").value="7";
    }

    else if(tot4 >49 && tot4<=59)
    {
        document.getElementById("grd4").value="6";
    }

    else if(tot4 >39 && tot4<=49)
    {
        document.getElementById("grd4").value="5";
    }

    else if(tot4 >29 && tot4<=39)
    {
        document.getElementById("grd4").value="4";
    }

    else if(tot4 >19 && tot4<=29)
    {
        document.getElementById("grd4").value="3";
    }

    else if(tot4 >9 && tot4<=19)
    {
        document.getElementById("grd4").value="2";
    }

    else if(tot4 <9 && tot4>0)
    {
        document.getElementById("grd4").value="1";
    }

    if(tot5 > 89)
    {
        document.getElementById("grd5").value="10";
    }

    else if(tot5 >79 && tot5<=89)
    {
        document.getElementById("grd5").value="9";
    }

    else if(tot5 >69 && tot5<=79)
    {
        document.getElementById("grd5").value="8";
    }

    else if(tot5 >59 && tot5<=69)
    {
        document.getElementById("grd5").value="7";
    }

    else if(tot5 >49 && tot5<=59)
    {
        document.getElementById("grd5").value="6";
    }

    else if(tot5 >39 && tot5<=49)
    {
        document.getElementById("grd5").value="5";
    }

    else if(tot5 >29 && tot5<=39)
    {
        document.getElementById("grd5").value="4";
    }

    else if(tot5 >19 && tot5<=29)
    {
        document.getElementById("grd5").value="3";
    }

    else if(tot5 >9 && tot5<=19)
    {
        document.getElementById("grd5").value="2";
    }

    else if(tot5 <9 && tot5>0) 
    {
        document.getElementById("grd5").value="1";
    }

    if(tot6 > 89)
    {
        document.getElementById("grd6").value="10";
    }

    else if(tot6 >79 && tot6<=89)
    {
        document.getElementById("grd6").value="9";
    }

    else if(tot6 >69 && tot6<=79)
    {
        document.getElementById("grd6").value="8";
    }

    else if(tot6 >59 && tot6<=69)
    {
        document.getElementById("grd6").value="7";
    }

    else if(tot6 >49 && tot6<=59)
    {
        document.getElementById("grd6").value="6";
    }

    else if(tot6 >39 && tot6<=49)
    {
        document.getElementById("grd6").value="5";
    }

    else if(tot6 >29 && tot6<=39)
    {
        document.getElementById("grd6").value="4";
    }

    else if(tot6 >19 && tot6<=29)
    {
        document.getElementById("grd6").value="3";
    }

    else if(tot6 >9 && tot6<=19)
    {
        document.getElementById("grd6").value="2";
    }

    else if(tot6 <9 && tot6>0)
    {
        document.getElementById("grd6").value="1";
    }

    var cr1=parseFloat(document.getElementById("cr1").value);
    var cr2=parseFloat(document.getElementById("cr2").value);
    var cr3=parseFloat(document.getElementById("cr3").value);
    var cr4=parseFloat(document.getElementById("cr4").value);
    var cr5=parseFloat(document.getElementById("cr5").value);
    var cr6=parseFloat(document.getElementById("cr6").value);

    var crd=cr1+cr2+cr3+cr4+cr5+cr6;

    var grd1=parseFloat(document.getElementById("grd1").value);
    var grd2=parseFloat(document.getElementById("grd2").value);
    var grd3=parseFloat(document.getElementById("grd3").value);
    var grd4=parseFloat(document.getElementById("grd4").value);
    var grd5=parseFloat(document.getElementById("grd5").value);
    var grd6=parseFloat(document.getElementById("grd6").value);

    var scgpa=((cr1*grd1)+(cr2*grd2)+(cr3*grd3)+(cr4*grd4)+(cr5*grd5)+(cr6*grd6))/crd;

    document.getElementById("sgpa").value=scgpa;

    event.preventDefault();
}
