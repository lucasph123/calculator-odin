let firstNum = '';
let operator = null;
let secondNum = '';
let firstDot = false;
let secondDot = false;

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
                checkDotFirst(firstNum,e.target.value);
                if(operator == null){
                    if(e.target.value != '.')
                    {   
                        firstNum += e.target.value;
                        display.textContent = firstNum;
                    }
                    
                }
                else
                {
                    checkDotSecond(secondNum,e.target.value);
                    if(e.target.value != '.')
                    {
                        secondNum += e.target.value;
                        display.textContent = secondNum;
                    }
                   
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
                    else if(e.target.value !='back')
                    { 
                        if(operator == '*')  multiply(firstNum,secondNum);
                        if(operator == '+')  sum(firstNum,secondNum);
                        if(operator == '/')  division(firstNum,secondNum);
                        if(operator == '-')  subtract(firstNum,secondNum);
                        
                    }
                }
                    
                if(firstNum != '' && e.target.value != 'back') operator = e.target.value;
                    
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
    if(secondNum == '')
    {
        firstNum = firstNum.substring(0, firstNum.length - 1);
        display.textContent = firstNum;
    }else
    {   
        secondNum = secondNum.substring(0, secondNum.length - 1);
        display.textContent = secondNum;
    }

})

function checkDotFirst(first,dot)
{
    if(first == '' && dot == '.' && firstDot == false)
    {
        firstNum += 0 + dot;
        display.textContent = firstNum;
        firstDot = true;
    }else if(dot == '.' && firstDot == false)
    {
        firstNum += dot;
        display.textContent = firstNum;
        firstDot =true;
    }
}

function checkDotSecond(second,dot)
{

    if(second == '' && dot == '.' && secondDot == false)
    {
        secondNum += 0 + dot;
        display.textContent = secondNum;
        secondDot = true;
    }else if(dot == '.' && secondDot == false)
    {
        secondNum += dot;
        display.textContent = secondNum;
        secondDot =true;
    }
}
 