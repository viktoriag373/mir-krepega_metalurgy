'use strict';

jQuery(document).ready(function ($) {
	resizeInit(); // Запуск при загрузке
	$(window).resize(function () {
		resizeInit(); // Запуск если изменили экран
	});

	function resizeInit() {
		if ($(window).width() < 1023) {
			$('.header__menu').height($(window).height());
		}
		else {
			$('.header__menu').removeAttr('style');
		}
		slidersInit();
	}



});

function slidersInit() {
	// if (descriptionSlider !== undefined) {
	// 	descriptionSlider.destroy( true, true );
	// }

	if ($(window).width() < 577) {
		$('.description__wrap-slider').addClass('swiper');
		$('.description__content').addClass('swiper-wrapper');
		$('.description__item').addClass('swiper-slide');
		var descriptionSlider = new Swiper(".description__wrap-slider", {
			spaceBetween: 16,
			slidesPerView: 1.835,
			slidesPerGroup: 1,
			// cssMode: false,
			// autoHeight: false,
			navigation: false,
		});


		$('.hits__wrap-slider').addClass('swiper');
		$('.hits__wrap-blocks').addClass('swiper-wrapper');
		$('.hits__item-block').addClass('swiper-slide');
		var hitsSlider = new Swiper(".hits__wrap-slider", {
			spaceBetween: 16,
			slidesPerView: 1.835,
			slidesPerGroup: 1,
			// cssMode: false,
			// autoHeight: false,
			navigation: false,
		});

		$('.hits__wrap-slider-1').addClass('swiper');
		var hitsSlider1 = new Swiper(".hits__wrap-slider-1", {
			spaceBetween: 16,
			slidesPerView: 1.835,
			slidesPerGroup: 1,
			// cssMode: false,
			// autoHeight: true,
			navigation: false,
		});
		$('.hits__wrap-slider-2').addClass('swiper');
		var hitsSlider2 = new Swiper(".hits__wrap-slider-2", {
			spaceBetween: 16,
			slidesPerView: 1.835,
			slidesPerGroup: 1,
			// cssMode: false,
			// autoHeight: false,
			navigation: false,
		});
		$('.hits__wrap-slider-3').addClass('swiper');
		var hitsSlider3 = new Swiper(".hits__wrap-slider-3", {
			spaceBetween: 16,
			slidesPerView: 1.835,
			slidesPerGroup: 1,
			// cssMode: false,
			// autoHeight: false,
			navigation: false,
		});

	} else {
		// if (descriptionSlider !== undefined) {
		// 	descriptionSlider.destroy( true, true );
		// }
		setTimeout(function () {
			$('.description__wrap-slider').removeClass('swiper');
			$('.description__content').removeClass('swiper-wrapper');
			$('.description__item').removeClass('swiper-slide');

			$('.hits__wrap-slider').removeClass('swiper');
			$('.hits__wrap-slider-1').removeClass('swiper');
			$('.hits__wrap-slider-2').removeClass('swiper');
			$('.hits__wrap-slider-3').removeClass('swiper');

			$('.hits__wrap-blocks').removeClass('swiper-wrapper');
			$('.hits__item-block').removeClass('swiper-slide');
		}, 30);



	}
}