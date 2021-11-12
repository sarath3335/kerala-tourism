var su=document.getElementById("sname");
var p1=document.getElementById("spswd1");
var p2=document.getElementById("spswd2");
var e1=document.getElementById("mail");
var u=document.getElementById("update");
var b=document.getElementById("button");
var u1=document.getElementById("sname");
var psw=document.getElementById("password");
var regexp=/ ^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$ /;

// function empty(){
    
//     if(su.value.trim()=="" || p1.value.trim()=="" || p2.value.trim()=="" || e1.trim()==""){
//     u.innerHTML="<h4><b>Fields Can't be empty</b></h4>";
//     u.style.color="red";
//     b.style.backgroundColor ="#da2525";
//     return false;
//     }
   
//     else{
//         return true;
//     }
// }
function pswd()
{
    if(p1.value.trim() != p2.value.trim()){
        u.innerHTML="<h4><b>Password do not match</b></h4>";
        u.style.color="red";
        p1.style.border="2px solid red";
        p2.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }
} 
  
function email()
{
    if( ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test (e1.value))){
        
        u.innerHTML="<h4><b>wrong email format</b></h4>";
        e1.style.border="2px solid red";
        return false;
      

    }
    else{
        return true;
    }

}
function un()
{
    if(u1.value.trim() == "" || p1.value.trim()==""){
        u.innerHTML="<h4><b>field can't be empty</b></h4>";
        u.style.color="red";
        u1.style.border="2px solid red";
        b.style.backgroundColor ="#da2525";
       
        return false;
    }
    else{
        return true;
    }
}
function email2()
{
    if( ( !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test (e1.value))){
        e1.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }

}

function pswd2()
{
    if(psw.value.trim()=="" ){
        psw.style.border="2px solid red";
        return false;
    }
    else{
        return true;
    }

}


     


// function email(){
    // if(regexp.test(e1.value)){
        
    //     return true;
    // }
    // else{
    //     u.innerHTML="<h4><b>Invalid Email</b></h4>";
    //     return false;
        
    // }

