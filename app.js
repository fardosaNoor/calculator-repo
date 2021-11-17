const displayArea = document.getElementById('display')
const buttons = Array.from(document.getElementsByClassName("button"));

buttons.forEach( button =>{
    button.addEventListener('click', function(e){
       switch (e.target.innerText) {
           case 'C':
               displayArea.innerText = '';
                break;
          case 'Del' :
            if(displayArea.innerText){
                displayArea.innerText = displayArea.innerText.slice(0, -1) ;
            }
               break;
          case '='  :
              try{
                displayArea.innerText = eval(displayArea.innerText);

              }catch{
                  displayArea.innerText = 'Error!';

              }
             break;

           default:
               displayArea.innerText += e.target.innerText;
               break;
       }
                
       
        
    }) ;
});