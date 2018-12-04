function displayElement(element, id){
    unselectMenu();
    if ( document.getElementById(id).style.display =='none')
         {
             document.getElementById(id).style.display ='block';
             element.parentNode.classList.add('selected');
        }
}

function unselectMenu() {
    const selectedOthers =  document.getElementsByClassName('selected');
    for(iterator in selectedOthers) {
        if(selectedOthers[iterator].classList != undefined)
            selectedOthers[iterator].classList.remove('selected');                
    }
    
    const displayedOthers =  document.getElementsByClassName('menu-display');
    for(iterator in displayedOthers) {
        if(displayedOthers[iterator].style != undefined)
            displayedOthers[iterator].style.display = 'none';                
    }
}



const headerMessages = JSON.parse(localStorage.getItem('headerMessages'));
const footerMessages = JSON.parse(localStorage.getItem('footerMessages'));

let repeat = setInterval(function(){
    let number = Math.floor(Math.random() *  headerMessages.length);
    document.getElementById('headerMessage').innerHTML = headerMessages[number];
}, 15000);

repeat = setInterval(function(){
    let number = Math.floor(Math.random() *  footerMessages.length);
    document.getElementById('footerMessage').innerHTML = footerMessages[number];
}, 8000);

function changeHeaderMessage() {
    let number = Math.floor(Math.random() *  headerMessages.length);
    document.getElementById("headerMessage").innerHTML = headerMessages[number];
}