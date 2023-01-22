(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open")
        refs.modal.classList.toggle("is-hidden");
    }
})(); 

// $('.js-modal-open').click(function() {

//     var modalName = $(this).attr('datam-modal');
//     var modal = $('.js-header-modal[data-modal-header="'+ modalName +'"]');

//     modal.addClass('is-show')
// })

// $('js-header-modal-close').click(function(){
//     $(this).parent('.js-header-modal').removeClass('is-show')
// })
