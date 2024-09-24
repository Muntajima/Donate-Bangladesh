
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    
    if(isNaN(inputValue)){
        alert('Failed to donate money');
        return 0;
    }
    else{
        const inputValueNumber = Number(inputValue);
        document.getElementById("my_modal_1").showModal();
        return inputValueNumber;
    }
    
}

function getInputText(id){
    const inputText = document.getElementById(id).innerText;
    const inputTextNumber = Number(inputText);

    return inputTextNumber;
}