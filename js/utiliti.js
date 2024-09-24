
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    
    if(isNaN(inputValue)){
        alert('Failed to donate money');
        return null;
    }
    else{
        const inputValueNumber = parseFloat(inputValue);
        return inputValueNumber;
    }
    
}

function getInputText(id){
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = Number(inputText);

    return inputTextNumber;
}