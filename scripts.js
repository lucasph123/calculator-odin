let firstNum = '';
let operator = null;
let secondNum = '';


const display = document.querySelector('.display');
const btn = document.querySelectorAll('button');
const delBtn = document.querySelector('.delete');
const backBtn = document.querySelector('.back')


function operate()
{
    for(i=0;i<btn.length;i++)
    {   
        btn[i].addEventListener('click',(e)=>{
            if(e.target.className == 'number')
            {
                
                if(operator == null){
                    firstNum += e.target.value;
                    display.textContent = firstNum;
                }
                else
                {
                    secondNum += e.target.value;
                    display.textContent = secondNum;
                }
            }
            else
            {
                if(secondNum != '' && firstNum != '')
                {
                    if(e.target.value == '=')
                    {
                        if(operator == '*')  multiply(firstNum,secondNum);
                        if(operator == '+')  sum(firstNum,secondNum);
                        if(operator == '/')  division(firstNum,secondNum);
                        if(operator == '-')  subtract(firstNum,secondNum);
                        
                    }
                    else
                    { 
                        if(operator == '*')  multiply(firstNum,secondNum);
                        if(operator == '+')  sum(firstNum,secondNum);
                        if(operator == '/')  division(firstNum,secondNum);
                        if(operator == '-')  subtract(firstNum,secondNum);
                        
                    }
                }
                    if(firstNum != '') operator = e.target.value;
                
                    
            }
               
        });
    }
}

operate();

function multiply(num1,num2){
    firstNum = parseFloat(num1)*parseFloat(num2);
    secondNum = '';
    operator = '';
    return display.textContent = firstNum;
};
  
function sum(num1,num2){
    firstNum = parseFloat(num1)+parseFloat(num2);
    secondNum = '';
    operator = '';
    return display.textContent = firstNum;
};
function subtract(num1,num2){
    firstNum = parseFloat(num1)-parseFloat(num2);
    secondNum = '';
    operator = '';
    return display.textContent = firstNum;
};
function division(num1,num2){
    firstNum = parseFloat(num1)/parseFloat(num2);
    secondNum = '';
    operator = '';
    return display.textContent = firstNum;
};


delBtn.addEventListener('click', () => {
    firstNum = '';
    operator = null;
    secondNum = '';
    display.textContent = '';
})

backBtn.addEventListener('click', () => {

    console.log(firstNum);
    firstNum = firstNum.substring(0, firstNum.length - 1);
    display.textContent = firstNum;

})
 