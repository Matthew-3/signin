function setCookie(cname,user,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie =  cname+"="+user+";"+expires;
}
function Setit(){
    // window.alert("fasddfsa");
    var bool =0,doit=0;
    var account = document.getElementById("1").value;
    var key = document.getElementById("2").value;
    if(account == "" || account == null){
        document.getElementById("write").innerHTML = "账号不能为空";
        doit=1;
    }
    else{
        document.getElementById("write").innerHTML = "";
        doit=0;
    }
    if(key == "" || key == null){
        document.getElementById("write1").innerHTML = "密码不能为空";
        doit=1;
    }
    else{
        document.getElementById("write1").innerHTML = "";
        doit=0;
    }
    if(doit == 0){
        var name = new Array("try","");
        var keys = new Array("try","");
        for(var i=0;i<name.length;i++){
            // alert();
            if(name[i] == account){
                bool = 1;
                if(keys[i] == key){
                    // alert("1");
                    setCookie("username",user,1);
                    window.location.href="https://matthew-3.github.io/";
                } 
                else{
                    // alert("2")
                    document.getElementById("write1").innerHTML = "密码错误";
                }
            }
        }
        if(bool == 0){
            document.getElementById("write").innerHTML = "该账号不存在";
        }
    }
}
function getCookie(cname){
    var name = cname + "=";
    var user = document.cookie.split(';');
    // var key = document.cookie.split(';');
    // for(var i=0; i<ca.length; i++) {
    //     var c = ca[i].trim();
    //     if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    // }
    if(user != "") return "have";
    return "";
}
function checkcookie(){
    var user=getCookie("username");
    if(user != ""){
        window.location.href="https://matthew-3.github.io/";
    }
}