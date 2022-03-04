const output = document.querySelector('.output')

// Element Creator Function
function createEle(eleType,eleParent){
    const ele = document.createElement(eleType)
    eleParent.append(ele)
    return ele
}

const myMessage = createEle('div',output)
const myInput = createEle('input',output)
const myButton = createEle('button',output)

myMessage.innerText = "Message"
myInput.placeholder = "Hello"
myButton.innerText = "Click Me"


myButton.addEventListener('click', (e)=>{
    myMessage.innerText = myInput.value
    myInput.value = ""
})


