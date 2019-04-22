const menBtn= document.querySelector('.btn-meniu');
const meniu= document.querySelector('.header');
const menBtnItems=document.querySelectorAll('.btn-meniu-item')

let showItems= false;
menBtn.addEventListener('click', showing);
function showing(){
    if(!showItems){
        meniu.classList.add('close');
        menBtnItems.forEach(element => element.classList.add('close'));
        showItems=true;
    }else{
        meniu.classList.remove('close');
        menBtnItems.forEach(element => element.classList.remove('close'));
        showItems=false;
    }
}

