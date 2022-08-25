const   $ = document.querySelector.bind(document);
const   $$= document.querySelectorAll.bind(document);
const childs = $$('.child');

childs.forEach((child, index) =>{
    child.onclick = function(){
        $('.active').classList.remove('active');
        child.classList.add('active');
    }
});