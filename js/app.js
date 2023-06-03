document.getElementById('signup').addEventListener('click',
   function(){
    document.querySelector('.bg-modal').style.display='flex';
    
    document.body.style.overflow="hidden";

   

    

});

document.querySelector('.close').addEventListener('click',
   function(){
    document.querySelector(".bg-modal").style.display='none';
    document.body.style.overflow="auto";

});

document.getElementById('login').addEventListener('click',
   function(){
    document.querySelector(".bg-modal2").style.display="flex";
    document.body.style.overflow="hidden";
   }
)

document.querySelector('.close2').addEventListener('click',
   function(){
    document.querySelector(".bg-modal2").style.display='none';
    document.body.style.overflow="auto";

});

document.getElementById('cls').addEventListener('click',
   function(){
    document.querySelector(".bg-modal2").style.display='none';
    document.querySelector(".bg-modal").style.display="flex";
    document.body.style.overflow="hidden";
    
   }
)

document.getElementById('cls1').addEventListener('click',
   function(){
    document.querySelector(".bg-modal").style.display='none';
    document.querySelector(".bg-modal2").style.display="flex";
    document.body.style.overflow="hidden";
    
   }
)