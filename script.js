let percentage;
document.querySelector('.first').addEventListener('click', function(){
    
    let first= document.querySelector('.first');
    let second= document.querySelector('.second');
    let third= document.querySelector('.third');
    let fourth= document.querySelector('.fourth');
    if(first.classList.contains('clicked')){
        first.classList.remove('clicked');
        percentage='none';
        second.classList.remove('clicked');
        third.classList.remove('clicked');
        fourth.classList.remove('clicked');
    }else{
        first.classList.add('clicked');
        percentage=0.05;
        second.classList.remove('clicked');
        third.classList.remove('clicked');
        fourth.classList.remove('clicked');


    }
});    
document.querySelector('.second').addEventListener('click', function(){
    
    let second= document.querySelector('.second');
    let first= document.querySelector('.first');
    
    let third= document.querySelector('.third');
    let fourth= document.querySelector('.fourth');
    if(second.classList.contains('clicked')){
        second.classList.remove('clicked');
        percentage='none';
        first.classList.remove('clicked');
        third.classList.remove('clicked');
        fourth.classList.remove('clicked');
    }else{
        second.classList.add('clicked');
        percentage= 0.1;
        first.classList.remove('clicked');
        third.classList.remove('clicked');
        fourth.classList.remove('clicked');
    }
    
    
});
document.querySelector('.third').addEventListener('click', function(){
    
    
    let first= document.querySelector('.first');
    let second= document.querySelector('.second');
    let third= document.querySelector('.third');
    let fourth= document.querySelector('.fourth');
    if(third.classList.contains('clicked')){
        third.classList.remove('clicked');
        percentage='none';
        second.classList.remove('clicked');
        first.classList.remove('clicked');
        fourth.classList.remove('clicked');
    }else{
        third.classList.add('clicked');
        percentage= 0.15;
        second.classList.remove('clicked');
        first.classList.remove('clicked');
        fourth.classList.remove('clicked');
    }
});
document.querySelector('.fourth').addEventListener('click', function(){
    
    let fourth= document.querySelector('.fourth');
    let first= document.querySelector('.first');
    let second= document.querySelector('.second');
    let third= document.querySelector('.third');
   
    if(fourth.classList.contains('clicked')){
        fourth.classList.remove('clicked');
        percentage='none';
        first.classList.remove('clicked');
        second.classList.remove('clicked');
        third.classList.remove('clicked');
    }else{
        fourth.classList.add('clicked');
        percentage= 0.2;
        first.classList.remove('clicked');
        second.classList.remove('clicked');
        third.classList.remove('clicked');
    }
});


document.querySelector('.button').addEventListener('click', function(){
    let bill = document.querySelector('.bill-amount').value;
    let people= document.querySelector('.people-sharing').value;
    let tip;
   
    if(isNaN(tip=bill*percentage/people)){
        let fail='Please choose an option and insert numbers';
        document.querySelector('.score').innerHTML=fail;
    }else{
        
        document.querySelector('.score').innerHTML=tip;
    };
        
    
    
});

