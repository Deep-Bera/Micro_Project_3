let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll(".btn");
let arr= Array.from(buttons);
let string="";
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
      if(e.target.innerHTML == '='){
          string = string.replace(/x/g,'*');
          let lastChar=string.charAt(string.length-1)
          console.log(lastChar);
          if(['+', '-', '*', '/'].includes(lastChar)){
              string="Error"
              input.value=string;
          }
          else{
            string = eval(string);
            if(string % 1 === 0){
              input.value = string;
            }
            else{
              input.value = string.toFixed(3);
              string=input.value;
            }
          }
      }
      else if(e.target.innerHTML == 'RESET'){
        string = "";
        input.value = string;
        }
        else if(e.target.innerHTML === 'DEL')
        {
            string=string.toString();
            string=string.slice(0,-1);
            input.value=string;
        }
      else{
        string = string + e.target.innerHTML;
        input.value = string;
        }
      }
    )
})



