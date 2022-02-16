document.getElementById("btn").addEventListener("click", correct)
document.getElementById("btn2").addEventListener("click", correct2)
document.getElementById("btn3").addEventListener("click", correct3)
document.getElementById("btn4").addEventListener("click", start)

let message = document.getElementById("paragraph")

function correct() {
    
    let content = message.textContent 
    let firstChar = content.charAt(0).toUpperCase()
    let remainder = content.slice(1).toLowerCase()
    let result = firstChar + remainder
    message.textContent = result
    // Write the JavaScript to grab the message from the paragraph and correct its capitalisation.
    // It should read "Valentine's"
    // Render the corrected message to the DOM.
}

function correct2() {
    
     let content = message.textContent 
   //  create array for each word in message
    const array = message.textContent.split(' ')
    //loop through array
    const arrayValentine = array.map(word =>  word[0].toUpperCase() + word.slice(1).toLowerCase())
    message.textContent =  arrayValentine.join(' ')
}

function correct3() {
    
    let content = message.textContent 
   // let firstChar = content.charAt(0).toLowerCase()
    let remainder = content.slice(0).toLowerCase()
    let result = remainder
    message.textContent = result

}
function start() {
    //reload
     window.location.reload()
  

}



message.addEventListener("click", correct);
message.addEventListener("click", correct2);
message.addEventListener("click", correct3);
message.addEventListener("click", start);
