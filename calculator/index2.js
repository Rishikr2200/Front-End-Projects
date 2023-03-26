let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;   //button k ander jo likha hai wo e.target se aayga
        console.log('Button text is ', buttonText);
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'ON/AC') {
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == 'CE') {
            screenValue = "";
            screen.value = screenValue;
        }

        else if (buttonText == 'Mrc') {
            screenValue = "";
            screen.value = screenValue;
        }


        else if (buttonText === "M-") {

        }
        else if (buttonText === "M+") {

        }

        else if(buttonText=='÷')
        {
            buttonText='/';
            screenValue+=buttonText;
            screen.value = screenValue;

        }

        else if (buttonText == '=') {
            screen.value = eval(screenValue);  //ye ek javascript ka ek function hai jisme walue evaluate ho jata hai
        }
        else if (buttonText == '√') {
            screen.value = Math.sqrt(screenValue);
        }

        else if(buttonText=='+/-')
        {
            buttonText='-';
            screenValue =buttonText + screenValue;
            screen.value = screenValue;

        }
        else if(buttonText=='|>>>')
        {
            buttonText=screenValue[-1];
            screenValue -= buttonText + screenValue;
            screen.value = screenValue;

        }


        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}

function del(){
    const display=document.getElementById('screen')
    display.value=''
}
