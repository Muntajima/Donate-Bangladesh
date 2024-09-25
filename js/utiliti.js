
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
        
    return inputValueNumber;
    
    
}

function getInputText(id){
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = Number(inputText);

    return inputTextNumber;
}