var lists = document.querySelectorAll("li");

for(let i=0; i < lists.length; i++) {
    lists[i].addEventListener('mouseover', ()=>{
        lists[i].style.background = 'rgba(0,0,0,0.2)'
    });

    lists[i].addEventListener('mouseout', ()=>{
        lists[i].style.background = 'rgba(0,0,0,0.3)'
    });
}
