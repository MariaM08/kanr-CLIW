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


