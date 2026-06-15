const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

    cards.forEach((card)=>{

        const position =
        card.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            card.classList.add("show");

        }

    });

});