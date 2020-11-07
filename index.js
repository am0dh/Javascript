
let clickedCard=null;
let combos=0;
let name=prompt('Your Name','Name');
let seconds=0;
 incrementSeconds=()=> {
    seconds += 1;
}

setInterval(incrementSeconds, 1000);

onCardClicked=(e)=>{
    const target =e.currentTarget;
    
    if(target===clickedCard || target.className.includes('done')) return;
    
    
    
    target.className=target.className.replace('color-hidden','').trim()
    target.className+= ' done'

    console.log(target.getAttribute('data-at'));
    
    
    if(!clickedCard){

        clickedCard=target;
    }
    else if(clickedCard){
        if(clickedCard.getAttribute('data-at')!==target.getAttribute('data-at')){
         
           
            setTimeout(()=>{
             clickedCard.className=   clickedCard.className.replace('done','').trim()+ ' color-hidden';
             target.className=   target.className.replace('done','').trim()+' color-hidden';
             clickedCard=null;
            },500);

        }
        else{
            clickedCard=null;
            combos++;
            if(combos===8){

               
                alert(`${name} completed this in ${seconds} seconds`)
                location.reload();


           }
         }

    }

}
