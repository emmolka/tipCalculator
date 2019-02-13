let percentage;
document.querySelector('.first').addEventListener('click', function(){
    percentage=0.05;
    
});    
document.querySelector('.second').addEventListener('click', function(){
    percentage= 0.1;
    
});
document.querySelector('.third').addEventListener('click', function(){
    percentage= 0.15;
    
});
document.querySelector('.fourth').addEventListener('click', function(){
    percentage= 0.2;
});

document.querySelector('.button').addEventListener('click', function(){
    let bill = document.querySelector('.bill-amount').value;
    let people= document.querySelector('.people-sharing').value;
    let tip;
   
    if(isNaN(tip=bill*percentage/people)){
        let fail='Please insert numbers';
        document.querySelector('.score').innerHTML=fail;
    }else{
        
        document.querySelector('.score').innerHTML=tip;
    };
        
    
    
});

