$(function() {

	// for mobile menu

	$('.navi-hamburger').click(function (event) {
		$('.nav-mobile').toggleClass('open');
		$(this).toggleClass('open');
		$('.admittance-desk').slideToggle('slow');
		event.stopPropagation();
		if($('.nav-mobile').hasClass('open')) {
			$('html').css('overflow','hidden');
			// $('#main-header').addClass('resize');
		}else {
			// $('#main-header').removeClass('resize');
			$('html').css('overflow', 'auto');
		}
	});

	// constructor for mobile menu
	$(function() {
		var Accordion = function(el, multiple) {
			this.el = el || {};
			this.multiple = multiple || false;

			var links = this.el.find('.link');

			var subLinks = this.el.find('.sub-link');

			subLinks.on('click', {el: this.el, multiple: this.multiple}, this.subDropdown);
			links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
		};

		Accordion.prototype.subDropdown = function(e) {
			var $el = e.data.el;
			$this = $(this),
					$next = $this.next();

			$next.slideToggle();
			$this.parent().toggleClass('open');

			if (!e.data.multiple) {
				$el.find('.sub-submenu').not($next).slideUp().parent().removeClass('open');
			}
		};

		// Accordion.prototype.dropdown = function(e) {
		// 	var $el = e.data.el;
		// 	$this = $(this),
		// 			$next = $this.next();
		//
		// 	$next.slideToggle();
		// 	$this.parent().toggleClass('open');
		//
		// 	console.log($this.parent());
		//
		// 	if ( !$this.parent().hasClass('open') ) {
		// 		console.log('first-item-menu has class open');
		// 		$('.sub-submenu').slideUp();
		// 	}
		//
		// 	if (!e.data.multiple) {
		// 		$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		// 	};
		// };

		var accordion = new Accordion($('#collapse'), false);
	});

	// End for mobile menu


	// scroll Main menu



	$(function(){
		$('#main-header').data('size','big');
	});


	var navMobile = $('.nav-mobile');


	var mainHeaderHeight = $('#main-header').outerHeight();

	navMobile.css( { height: 'calc(100% - ' + $('#main-header').outerHeight() + 'px)' } );

	$(window).on('scroll resize',function(){

		navMobile.css( { height: 'calc(100% - ' + $('#main-header').outerHeight() + 'px)' } );

		if($(document).scrollTop() > 0) {

			$('#main-header').addClass('resize');

			setTimeout(function () {
				navMobile.css( { height: 'calc(100% - ' + $('#main-header').outerHeight() + 'px)' } );

			}, 501);


			if($('#main-header').data('size') == 'big')  {

				// scroll to bottom
				($(window).resize(function () {
					if($(window).width() < 480) {
						navMobile.css( { height: 'calc(100% - ' + $('#main-header').outerHeight() + 'px)' } );
					}
					else {
						navMobile.css( { height: 'calc(100% - ' + $('#main-header').outerHeight() + 'px)' } );
					}
				}));

				$('.nav-mobile').addClass('additional-indent');
				$('#main-header').data('size','small');

			}
		}
		else {


			if($('#main-header').data('size') == 'small') {


				$('#main-header').removeClass('resize');

				// scroll to top


				$('.nav-mobile').removeClass('additional-indent');

				$('#main-header').data('size','big');

			}
		}
		if($(document).scrollTop() == 0) {

			setTimeout(function () {
				navMobile.css( { height: 'calc(100% - ' + $('#main-header').height() + 'px)' } );
			}, 501)

		}
	});

	// End scroll Main menu


	// for slider-popup window

	var open = false;

	var openSidebar = function(){
		$('html').css('overflow', 'hidden');
		$('body').css('overflow', 'hidden');
		$('.slider-popup-body').addClass('active-body');
		$('.slider-popup-window').addClass('active-popup');
		$('.toggle-btn').addClass('is-active');
		$('#toggle-nav').addClass('toggle-close');
		open = true;
	}
	var closeSidebar = function(){
		$('html').css('overflow-y', 'scroll');
		$('body').css('overflow', 'hidden');
		$('.slider-popup-body').removeClass('active-body');
		$('.slider-popup-window').removeClass('active-popup');
		$('.toggle-btn').removeClass('is-active');
		$('#toggle-nav').removeClass('toggle-close');
		open = false;
	}

	$('.open-slide-popup').click( function(event) {
		event.stopPropagation();
		event.preventDefault();
		var toggle = open ? closeSidebar : openSidebar;
		toggle();
		$('.nav-mobile').removeClass('open');
		$('.navi-hamburger').removeClass('open');
	});
	$('.close-button').click(function (e) {
		e.preventDefault();
		closeSidebar();
	})

	$(document).click( function(event){
		if ( !$(event.target).closest('.slider-popup-body').length ) {
			closeSidebar();
		}
	});

	//end of for slider-popup window

	$('#hide-block').click(function (e) {
		e.preventDefault();
		$('#form-block').fadeOut({
			complete: function () {
				$('#thanks-block').css("display", "flex").hide().fadeIn();
			}

		})

	});


});
