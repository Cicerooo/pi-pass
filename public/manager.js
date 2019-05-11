//const fs = require('fs');
const obj = fs.readFile("./public/manager.json");

function loadMenu(type,number){
    var m = document.getElementsByClassName("account-cont");
    var mClone = m[0].cloneNode(true);
    quizNumber = number;
    for(var j=0; j<m.length; j++){
      m[0].parentNode.removeChild(m[0]);
    }
    obj.accounts.forEach(function(menu,i){
      mClone = mClone.cloneNode(true);
      
      mClone.addEventListener("click",function(){
        
      });
      document.getElementsByClassName("accounts")[0].appendChild(mClone);
    });
}