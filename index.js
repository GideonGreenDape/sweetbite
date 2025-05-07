// border-bottom: 1.5px solid #bc8adf;

const elements= document.querySelectorAll('li');
const subText= document.getElementById('sub_text') //DOM



elements.forEach((li,index)=>{
   if (index <=1 ) {
    li.addEventListener('mouseover',()=>{
        li.style.borderBottom= '1.9px solid #bc8adf'
        console.log(index);
        
    }

)
   }else{
    li.addEventListener('mouseover',()=>{
        li.style.borderBottom= '1.9px solid #F3BA9E';
        console.log(index);
        
    })
   }
})


elements.forEach((li)=>{
    li.addEventListener('mouseleave',()=>{
        li.style.borderBottom= '0px'
    })
})

subText.addEventListener('mouseover',()=>{
    subText.style.fontSize= '14px';
    subText.style.cursor= 'pointer';
});


subText.addEventListener('mouseleave',()=>{
    subText.style.fontSize= '13px';
    subText.style.width= '290px'
})