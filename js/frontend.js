

var links = document.querySelectorAll('.menu-list li a');
var main_link = document.querySelectorAll('.menu-list li');
var home_link = document.querySelectorAll('.menu-left li a');
var home_link_li = document.querySelectorAll('.menu-left li');

links.forEach(function(link, link_index){
    link.addEventListener('click', function(){
        links.forEach(function(link){
            link.classList.remove('active')
        })

        home_link_li.forEach(function(link){
            link.classList.remove('active')
        })
        link.classList.add('active')

        main_link.forEach(function(content, content_index){
            if(content_index == link_index){
                content.classList.add('active')
            }else{
                content.classList.remove('active')
            }
        })
    })
})

home_link.forEach(function(link, link_index){
    link.addEventListener('click', function(){
        main_link.forEach(function(link){
            link.classList.remove('active')
        })
        home_link_li.forEach(function(content, content_link){
            if(content_link == link_index){
                content.classList.add('active')
            }else{
                content.classList.remove('active')
            }
        })
    })
})



// Responsive nav

const menu = document.querySelector(".main-menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}