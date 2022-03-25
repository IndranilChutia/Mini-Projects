'use strict';

//Creating an array to save in local storage
const curArray = []
const main = document.querySelector('.main')
// Select the hero section
const hero = document.querySelector('.hero')

// Selects the input field
const myInput = document.querySelector('#textInput')
// myInput.setAttribute('type','text')

//Selects the add item button
const myButton = document.querySelector('#addItemButton')

// Creates the unordered list
const myList = createMyElement(hero, 'ul', 'myList')


//Function to Update the local storage
function updator(){

    // adds the text items to array
    const myListItems = document.querySelectorAll('.info')
    curArray.length = 0
    myListItems.forEach((element)=>{
        curArray.push(element.textContent)
    })
    /*Local storage stores string. so we have to use JSON.stringify 
    to store the array in an array like string*/
    localStorage.setItem('curArray',JSON.stringify(curArray)) 
    const counterText = document.querySelector('.counterText')
    counterText.textContent = `You have ${curArray.length} tasks ToDo!`
}


// Retrieve Data from local storage
let getData = localStorage.getItem('curArray')


/* Convert the JSON.stringify data stored in the local storage 
to array using JSON.parse and create list item*/
window.addEventListener('DOMContentLoaded',(e)=>{
    // Check if array contains elements or not
    if(getData){
        const tempArr = JSON.parse(getData) //Creates a temp array to store the data from local storage
        tempArr.forEach(listItem => {
            addNewItem(listItem)
        });
    }
})

myInput.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        let listItem = myInput.value
        if(listItem.length>3){
        const li = addNewItem(listItem)
        myInput.value=''
    } else{
        alert('Enter more than 3 characters')
    }
}
})

// On-click event listener for the "Add New User" button
myButton.addEventListener('click', (e) =>{
    let listItem = myInput.value
    if(listItem.length>3){
        const li = addNewItem(listItem)
        myInput.value=''
    } else{
        alert('Enter more than 3 characters')
    }
})


// List item adder function
function addNewItem(listItem){
    // Add item to the array
    curArray.push(listItem)

    // Create list item
    const li = createMyElement(myList, 'li', 'myList')
    // Creates a div which houses all the other elements
    const div = createMyElement(li, 'div', 'container')
    // Contains text
    const textItem = createMyElement(div, 'span', 'info')
    textItem.textContent = listItem
    // Edit button
    const editButton = createMyElement(div, 'span', 'editor')
    editButton.textContent = 'Edit'
    // Delete button
    const deleteButton = createMyElement(div, 'span', 'deleter')
    deleteButton.textContent = 'Delete'



    // Add event listener to edit and delete buttons
    editButton.addEventListener('click', (e)=>{
        if(editButton.textContent === 'Edit'){
            textItem.style.backgroundColor = '#FBACCC'
            textItem.setAttribute('contenteditable', true)
            editButton.textContent = 'Save'
        } else{
            textItem.style.backgroundColor = ''
            textItem.setAttribute('contenteditable', false)
            editButton.textContent = 'Edit'
            updator()
        }
    })
    deleteButton.addEventListener('click', (e)=>{
        li.remove()
        updator()
    })

    updator()
    return li
}


// Element Creator Function
function createMyElement(parent, elType, classAdd){
    const ele = document.createElement(elType)
    parent.append(ele)
    ele.classList.add(classAdd)
    return ele
}