const parentChild = document.querySelector('.projects .row.grid')

let iso = new Isotope( parentChild, {
    itemSelector: '.element-item',
});

const btns = document.querySelectorAll('.projects .button-group .project-button')


 btns.forEach(btn =>{
     btn.addEventListener('click',(e)=>{
        const btnActive = document.querySelector('.project-button.active')
        btnActive.classList.remove('active')
        e.target.classList.add('active')

            let selector = e.target.getAttribute('data-filter')
            
            iso.arrange({
                filter:selector
            })
     })
 })

