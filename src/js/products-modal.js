!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {
   var modal1Buttons = document.querySelectorAll('.js-open-modal-products'),
       overlay      = document.querySelector('.js-overlay-modal-products'),
       closeButtons = document.querySelectorAll('.js-modal-close-products');
   modal1Buttons.forEach(function(item){
      item.addEventListener('click', function(e) {
         e.preventDefault();
         var modal1Id = this.getAttribute('products-data-modal'),
             modal1Elem = document.querySelector('.modal1[products-data-modal="' + modal1Id + '"]');

         modal1Elem.classList.add('active');
         overlay.classList.add('active');
      }); 

   }); 


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal1');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); 


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {

            document.querySelector('.modal1.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal1.active').classList.remove('active');
        this.classList.remove('active');
    });




});