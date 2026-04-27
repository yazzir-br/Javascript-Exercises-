
const Item = document.querySelector('#Item')
function addItem(){

    const NewItem = document.createElement('li')

    NewItem.textContent='Add New'

    Item.appendChild(NewItem )  
}


function RemoveItem(){

    if (Item.lastChild){

        Item.removeChild(Item.lastChild ) 
    }else{
        alert('Wax laga jaraa ma hadhin')
    }
   
}