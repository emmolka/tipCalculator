let percentage;
document.querySelector('.selected').addEventListener('click', function(){
    let number =document.querySelector('.selected').value;
    if(number==='1'){
        percentage=0.2;
    }else if(number==='2'){
        percentage=0.15;
    }else if(number==='3'){
        percentage=0.1;
    }else if(number==='4'){
        percentage=0.05;
    }
    
    
});    
document.querySelector('.button').addEventListener('click', function(){
    let bill = document.querySelector('.bill-amount').value;
    let people= document.querySelector('.people-sharing').value;
    let tip;
   
    tip=bill*percentage/people;
        
    document.querySelector('.score').innerHTML=tip;
    
});



