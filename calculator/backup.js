
 var screen=document.querySelector('#screen');
 var btn=document.querySelectorAll('.btn');

 /============ For getting the value of btn, Here we use for loop ============/
 for(item of btn)
 {
     item.addEventListener('click',(e)=>{
         btntext=e.target.innerText;

         if(btntext =='×')
         {
             btntext= '*';
         }

         if(btntext=='÷')
         {
             btntext='/';
         }
         screen.value+=btntext;
     });
 }

 function sin()
 {
     screen.value=Math.sin(screen.value);
 }

 function cos()
 {
     screen.value=Math.cos(screen.value);
 }

 function tan()
 {
     screen.value=Math.tan(screen.value);
 }

 function pow()
 {
     screen.value=Math.pow(screen.value,2);
 }

 function sqrt()
 {
     screen.value=Math.sqrt(screen.value,2);
 }

 function log()
 {
     screen.value=Math.log(screen.value);
 }

 function pi()
 {
     screen.value= 3.14159265359;
 }

 function e()
 {
     screen.value=2.71828182846;
 }

 function fact()
 {
     var i, num, f;
     f=1
     num=screen.value;
     for(i=1; i<=num; i++)
     {
         f=f*i;
     }

     i=i-1;

     screen.value=f;
 }

 function backspc()
 {
     screen.value=screen.value.substr(0,screen.value.length-1);
 }






 switch (button) {
    // define functions for all non-numeric presses
    case "MRC":
      console.log('MRC Pressed');
      handleMRC();
      break;
    case "M+":
      console.log('M+ Pressed');
      handleMPlus();
      break;
    case "M-":
      console.log('M- Pressed');
      handleMMinus();
      break;
    case "C / CE":
      console.log('C / CE Pressed')
      handleCCE();
      break;
    case "+":
      console.log('+ Pressed');
      setOperator('+');
      break;
    case "-":
      console.log('- Pressed');
      setOperator('-');
      break;
    case "÷":
      console.log('÷ Pressed');
      setOperator('/');
      break;
    case "x":
      console.log('x pressed');
      setOperator('*');
      break;
    case "=":
      console.log('= pressed');
      if (getCurState() == 'operand2') {
        setOperand2Val(getCurVal());
        executeOperation();
        displayCurVal();
        setCurState('total');
        setOperand1Val(getCurVal());
      }
      else if (getCurState() == 'total') {
        executeOperation();
        displayCurVal();
        setOperand1Val(getCurVal());
      }
      break;
    case ".":
      if (getCurVal() === 0) {
        setCurVal('0.');
        displayCurVal();
      } else {
       if (curVal.indexOf('.') === -1) {
        setCurVal(getCurVal() + '.');
         displayCurVal();
        } else {
          // do nothing
        }
      }
      break;
    default: // number or decimal pressed
      console.log(button + 'pressed (default)');
      if (getCurVal() !== 0) {
        setCurVal(String(getCurVal()) + String(button));
      } else {
        setCurVal(String(button));
      }
      displayCurVal();
  }
}

$('button').click(function() {
  button = $(this).text();
  $('#main-display-text').fadeOut(100, function() {
    handleButtonPress(String(button));
    $('#main-display-text').show();
  });

});