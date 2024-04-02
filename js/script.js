let front = document.querySelector('.face-front');
let back = document.querySelector('.face-back');
let flip = document.querySelector('.book-content');
let uno = document.querySelectorAll('.book');
let portada = document.querySelectorAll('#portada');

let contZindex = 2;
let customZindex = 1;

for (let i = 0; i < uno.length; i++) {
	uno[i].style.zIndex = customZindex;
	customZindex--;

	uno[i].addEventListener('click', function(e){

		var tgt = e.target;
		var unoThis = this;

		unoThis.style.zIndex = contZindex;
		contZindex++;

		if (tgt.getAttribute('class') == 'face-front') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;
			setTimeout(function(){
				unoThis.style.transform = 'rotateY(-180deg)';
			}, 500);
		}
		if (tgt.getAttribute("class") == 'face-back') {
			unoThis.style.zIndex = contZindex;
			contZindex +=20;

			setTimeout(function(){
				unoThis.style.transform = 'rotateY(0deg)';
			}, 500);
		}

		if (tgt.getAttribute('id') == 'portada') {
			flip.classList.remove("trnsf-reset");
			flip.classList.add("trnsf");
		}
		if (tgt.getAttribute('id') == 'trsf') {
			flip.classList.remove("trnsf");
			flip.classList.add("trnsf-reset");
		}

	});
}
 


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

