var message=window.prompt("Enter message").split("");
var cipher=String("qwertyuiopasdfghjklzxcvbnm").split("");
var alpha=String("abcdefghijklmnopqrstuvwxyz").split("");
var res=[message.length]
function replace(){
  
for (let i=0;i>message.length;i++){
for (let ii = 0; ii < alpha.length; ii++) {
  if (message[i]==alpha[ii]) {
    res[i]=cipher[ii]
    ii=alpha.length
    
  }
    
}

    }
}

console(res)

