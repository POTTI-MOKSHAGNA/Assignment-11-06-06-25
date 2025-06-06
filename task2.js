function reverseString(){
    const input = document.getElementById('string')
    const span = document.getElementById('getValue')
    let inputValue = input.value
    let result = inputValue.split("").reverse().join("")            
    span.innerText = result
}