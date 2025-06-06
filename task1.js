function reverseNumber(){
    const input = document.getElementById('number')
    let inputValue = parseInt(input.value)
    const span = document.getElementById('getValue')
    let result = 0;
    while (inputValue !== 0){
        result = result * 10 + inputValue % 10
        inputValue = Math.floor(inputValue / 10)
    }
    span.innerText = result
}