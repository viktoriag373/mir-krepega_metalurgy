'use strict';

jQuery(document).ready(function ($) {
	resizeInit(); // Запуск при загрузке
	$(window).resize(function () {
		resizeInit(); // Запуск если изменили экран
	});

	function resizeInit() {
		slidersInit();
	}

	$('.popup__form-input').bind('input', function () {
		if (this.value !== '') {
			this.classList.add('input_filled');
		} else {
			this.classList.remove('input_filled');
		}
	});

	let dropZone = $('.popup__wrap-input-file');
	$('.popup__input-file').focus(function () {
		$('label').addClass('focus');
	})
		.focusout(function () {
			$('label').removeClass('focus');
		});
	dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function () {
		return false;
	});
	dropZone.on('dragover dragenter', function () {
		dropZone.addClass('dragover');
	});
	dropZone.on('dragleave', function (e) {
		let dx = e.pageX - dropZone.offset().left;
		let dy = e.pageY - dropZone.offset().top;
		if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
			dropZone.removeClass('dragover');
		}
	});
	dropZone.on('drop', function (e) {
		dropZone.removeClass('dragover');
		let files = e.originalEvent.dataTransfer.files;
		addFiles(files);
	});
	$('.popup__input-file').change(function () {
		let files = this.files;//список файлов
		addFiles(files);
	});

	let labelTextDefault = $('.popup__label-file-text').html()
	$('.popup__input-file-clear').on('click', function (e) {
		clearFiles($(this))
		return false
	});

	function clearFiles(e) {
		e.closest('.popup__wrap-input-file').find('.popup__label-file-text').html(labelTextDefault);
		$('.popup__wrap-input-file').removeClass('added');
	}

	function addFiles(files) {
		$('.popup__input-file').closest('.popup__wrap-input-file').find('.popup__label-file-text').html(files[0].name);
		$('.popup__wrap-input-file').addClass('added');
		let fileSize = files[0].size; // Размер файла в байтах
		// Функция для конвертации размера файла
		function convertFileSize(size) {
			let suffix = ''
			if (size < 1024) {
				suffix = " B";
			} else if (size < 1048576) {
				size /= 1024;
				suffix = " KB";
			} else if (size < 1073741824) {
				size /= 1048576;
				suffix = " MB";
			} else {
				size /= 1073741824;
				suffix = " GB";
			}
			return size.toFixed(1) + suffix
		}
		let formattedSize = convertFileSize(fileSize);
		$('.popup__file-size').html(formattedSize)
	}

	$('.popup__form-checkbox').on('click', function () {
		if ($(this).is(':checked')) {
			$('.popup__button').addClass('active')
		} else {
			$('.popup__button').removeClass('active')
		}
	});

	$('.button-order').on('click', function () {
		if (!$('.popup').hasClass('open')) {
			openPopupOrder()
		}
	});
	$('.popup__content').click(function(event) {
		event.stopPropagation(); // Останавливаем передачу клика вверх, чтобы не закрылось окно
	});
	$('.popup__close, .popup').on('click', function () {
		if ($('.popup').hasClass('open')) {
			closePopupOrder()
		}
	});
	
	function openPopupOrder() {
		$('.popup').addClass('open')
	}
	function closePopupOrder() {
		$('.popup').removeClass('open')
	}
});

function slidersInit() {
	if ($(window).width() < 951) {
		$('.hits__wrap-slider').addClass('swiper');
		$('.hits__wrap-blocks').addClass('swiper-wrapper');
		$('.hits__item-block').addClass('swiper-slide');
		let hitsSlider = new Swiper(".hits__wrap-slider", {
			spaceBetween: 16,
			slidesPerView: 2.5,
			navigation: false,
			breakpoints: {
				320: {
					slidesPerView: 1.835,
				},
				576: {
					slidesPerView: 2.5,
				}
			}
		});

		$('.hits__wrap-slider-1').addClass('swiper');
		let hitsSlider1 = new Swiper(".hits__wrap-slider-1", {
			spaceBetween: 16,
			slidesPerView: 2.5,
			// slidesPerGroup: 1,
			navigation: false,
			breakpoints: {
				320: {
					slidesPerView: 1.835,
				},
				576: {
					slidesPerView: 2.5,
				}
			}
		});
		$('.hits__wrap-slider-2').addClass('swiper');
		let hitsSlider2 = new Swiper(".hits__wrap-slider-2", {
			spaceBetween: 16,
			slidesPerView: 2.5,
			navigation: false,
			breakpoints: {
				320: {
					slidesPerView: 1.835,
				},
				576: {
					slidesPerView: 2.5,
				}
			}
		});
		$('.hits__wrap-slider-3').addClass('swiper');
		let hitsSlider3 = new Swiper(".hits__wrap-slider-3", {
			spaceBetween: 16,
			slidesPerView: 2.5,
			navigation: false,
			breakpoints: {
				320: {
					slidesPerView: 1.835,
				},
				576: {
					slidesPerView: 2.5,
				}
			}
		});
	} else {
		$('.hits__wrap-slider').removeClass('swiper');
		$('.hits__wrap-slider-1').removeClass('swiper');
		$('.hits__wrap-slider-2').removeClass('swiper');
		$('.hits__wrap-slider-3').removeClass('swiper');

		$('.hits__wrap-blocks').removeClass('swiper-wrapper');
		$('.hits__item-block').removeClass('swiper-slide');
	}

	if ($(window).width() < 768) {
		$('.description__wrap-slider').addClass('swiper');
		$('.description__content').addClass('swiper-wrapper');
		$('.description__item').addClass('swiper-slide');
		let descriptionSlider = new Swiper(".description__wrap-slider", {
			spaceBetween: 16,
			slidesPerView: 1.835,
			slidesPerGroup: 1,
			navigation: false,
		});
	} else {
		$('.description__wrap-slider').removeClass('swiper');
		$('.description__content').removeClass('swiper-wrapper');
		$('.description__item').removeClass('swiper-slide');
	}
}