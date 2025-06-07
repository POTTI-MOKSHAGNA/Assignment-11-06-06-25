function sortString(){
    const input = document.getElementById('string')
    const span = document.getElementById('getValue')
    let inputValue = input.value
    let result = inputValue.split("").sort().join("")            
    span.innerText = result
}
