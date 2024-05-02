function fun() {
    var id= document.getElementById("user_id").value;
    var pass=document.getElementById("password").value;
   
     if (id=="hari" && pass=="radhe" || id=="user" && pass=="admin" ||id=="ajay" && pass=="sharma")
      {
       window.open("first_page.html");
   
   }
   else if(id==""||pass==""){
     alert("please fill the  details");

   }
   else {
     alert("wrong id or password");
   
   }
 }