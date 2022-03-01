function Hello() 
{
    alert("Hello, World");
}

function test(b,c) 
{
    var a=document.getElementById(b).value;
    a=parseInt(a);
    if(a==5){a=-a;}
    else{a=a;}
    document.getElementById(c).innerHTML=(0+a);
}

function recognize(a,b)
{
    var a=document.getElementById(a).value;
    var b=document.getElementById(b).value;
    var fname
    if(a=="5" && b=="1"){fname="Fgo_SSR_1.csv";}
    else if(a=="5" && b=="2"){fname="Fgo_SSR_2.csv";}
    else if(a=="4" && b=="1"){fname="Fgo_SR_1.csv";}
    else if(a=="4" && b=="2"){fname="Fgo_SR_2.csv";}
    else if(a=="4" && b=="3"){fname="Fgo_SR_3.csv";}
    else if(a=="3"){fname="Fgo_R.csv";}
    else {document.getElementById("divi").innerHTML="SSRs never share rateup in 3";}
    var c=$.get("Fgo_R.csv")
    var data = $.csv.toObjects('c');
    return data;
}

function link(a)
{
    var string
    var ad
    string=a.toString(10);
    ad=".//s"+string+".html";
    // document.getElementById("divi").innerHTML=ad;
    document.getElementById("sav").href=ad;
    document.getElementById("sav").style="display:block";
    return ad;
}