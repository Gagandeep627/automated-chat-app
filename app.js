

const myNav = document.querySelector('.navbar');
// content-a
const list = document.querySelectorAll('.item');

// changes on scrolling a page on navbar-->


// const navbar = document.querySelector('.nav-fixed');


window.onscroll = () => {
    if (window.scrollY > 300) {
        // console.log("hello");
        myNav.classList.add('nav-active');
    } else {

        // console.log("bye");
        myNav.classList.remove('nav-active');
    }
};



function serving_content(){

    list.forEach((ele)=>{
    
        console.log(ele);

        serving_content_each(ele);

        // makeload();
        
        


    
        
    
    
    
    })



}

function serving_content_each(ele){

    if (ele.classList.contains("hide")){
    
        ele.classList.remove("hide");
        


    }


}


const myTimeout = setTimeout(serving_content(), 5000);
// myTimeout;

// loading after serving each content-->



// setTimeout(serving_content(), 5000);





