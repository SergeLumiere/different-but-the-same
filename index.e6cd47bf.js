!function(){var e,t,n,o,a,d,l,r;e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),o=document.querySelector(".js-link"),a=document.querySelector(".js-link-second"),d=document.querySelector(".js-link-third"),l=document.querySelector(".js-link-fourth"),r=function(){var n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open"),bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)},t.addEventListener("click",r),n.addEventListener("click",r),o.addEventListener("click",r),a.addEventListener("click",r),d.addEventListener("click",r),l.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})),window.addEventListener("load",(function(){function e(e){var t=e||document.querySelectorAll("[data-digits-couter]");t&&t.forEach((function(e){!function(e){var t=null,n=parseInt(e.dataset.digitsCounter)?parseInt(e.dataset.digitsCounter):1e3,o=parseInt(e.innerHTML),a=0,d=function(l){t||(t=l);var r=Math.min((l-t)/n,1);e.innerHTML=Math.floor(r*(a+o)),r<1&&window.requestAnimationFrame(d)};window.requestAnimationFrame(d)}(e)}))}var t=new IntersectionObserver((function(t,n){t.forEach((function(t){if(t.isIntersecting){var n=t.target.querySelectorAll("[data-digits-couter]");n.length&&e(n)}}))}),{threshold:.3}),n=document.querySelectorAll(".advantages-item ,.hero-info-cont-wrap");n.length&&n.forEach((function(e){t.observe(e)}))}));var i=0;!function e(){var t;setTimeout(e,4e3);var n=document.querySelectorAll(".gallery-images img");for(t=0;t<n.length;t++)n[t].style.display="none";++i>n.length&&(i=1),n[i-1].style.display="block"}();for(var c=document.querySelectorAll("[data-modal]"),s=document.querySelectorAll("[data-modal-open]"),u=document.querySelectorAll("[data-modal-close]"),m=0;m<c.length;m++)s[m].addEventListener("click",p.bind(null,m)),u[m].addEventListener("click",v.bind(null,m));function p(e){c[e].classList.remove("is-hidden")}function v(e){c[e].classList.add("is-hidden")}document.getElementById("myBtn").addEventListener("click",(function(){window.open("https://www.google.com/maps/place/GoIT:+%D0%9A%D1%83%D1%80%D1%81%D1%8B+%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D0%B2+%D0%9A%D0%B8%D0%B5%D0%B2%D0%B5+%7C+IT+%D0%9A%D1%83%D1%80%D1%81%D1%8B/@50.4250354,30.5338423,18z/data=!4m6!3m5!1s0x40d4d96f5139689b:0xa1f7c65300bebad1!4b1!8m2!3d50.4249597!4d30.5340916","_blank")}));new Swiper(".swiper",{direction:"horizontal",loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});!function(){var e={openModalBtn:document.querySelector("[data-header-modal-open]"),closeModalBtn:document.querySelector("[data-header-modal-close]"),modal:document.querySelector("[data-header-modal]")};function t(){document.body.classList.toggle("modal-open"),e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)}()}();
//# sourceMappingURL=index.e6cd47bf.js.map