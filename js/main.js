var scroll25 = false;
var scroll50 = false;
var scroll75 = false;
var scroll100 = false; 

$(document).ready(function(){
	
	init();
	$('.header__arrow').click(function(){
		$('html, body').animate({ scrollTop: $('#intro').offset().top}, 1000)
	})

	$(window).scroll(function(){
		scrollSocialNetworks();
		scrollActiv();

		$('.balance__container').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$(this).addClass('is-visible')
			}
		});

		$('.summary').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$(this).addClass('is-visible')
			}
		});

		$('.title__line').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$(this).addClass('is-visible')
			}
		});

		$('.graphic__filled').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$(this).addClass('is-visible')
			}

		});

		$('.trade__computer').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$('.trade__buy').addClass('active')
				$('.trade__box').addClass('active')
				$('.trade__van').addClass('active')
				$('.trade__van--line').addClass('active')
				$('.title__line--first').addClass('active')
			}
		});

		$('.locker').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$('.locker__box').addClass('active')
			}
		});

		$('.center').each(function(){
			if(isVisible($(this), $(window).scrollTop())) {
				console.log("visible")
				$('.center__van').addClass('active')
				$('.center__box').addClass('active')
				$('.center__line').addClass('is-visible')
			}
		});

		$('.data__container').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$(this).addClass('is-visible')
			}
		});

		$('.footer-credits').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$(".share-container").removeClass('is-visible');
			}
		});

		$('.column__container').each(function(){
			if(isVisible($(this), $(window).scrollTop())){
				$('.column__filled').addClass('is-visible')
				$('.column__text').addClass('is-visible')
			}
		});

   	});

	$(window).resize(function(){
		sectionLinePosition();
		tradeComputerPosition();
		sectionTitlePosition();

	});

});

window.onload = function(){
	sectionLinePosition();
}

function init() {
	socialNetworksSharing();
	sectionLinePosition();

	if(!isPortrait()) {
		tradeComputerPosition();
		sectionTitlePosition();
	}

}

function tradeComputerPosition() {

	var titlePostion = $('.header__title--question').offset().left
	$('.trade__computer').css('left', titlePostion);
	$('.center__van').css('margin-left', titlePostion);
	if(!isMobile()){
		$('.trade__box').css('left', titlePostion);
		$('.center').css('margin-left', titlePostion);
	}
}

function sectionLinePosition() {

	var lineExtension
	var lineCentroUrbano

	if(isMobile()) {
		lineExtension = $('.title').offset().left + $('.title').outerWidth();
		lineCentroUrbano = $('.title--centro').offset().left + $('.title--centro').outerWidth();

		$('.title__line').css('width', lineExtension)
		$('.title__line--first').css('width', lineExtension)
		$('.title__line--centro').css('width', lineCentroUrbano)
	}
	
	if(!isMobile()){
		lineExtension = $('.title').offset().left
		$('.title__line').css('width', lineExtension)
		$('.title__line--first').css('width', lineExtension)
		$('.title__line--centro').css('width', lineExtension)
	}

}

function sectionTitlePosition() {
	
	var reference = $('.header__title').offset().left
	$('.title__container').css('margin-left', reference)

}


function scrollActiv(){  
	scrollPercent = getScrollPercent();
	   	 	
	if ( scrollPercent >= 25 ) {
		if ( !scroll25 ) {
		    //universalGa('brands.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 25%', {nonInteraction: true});
	        //universalGa('t1.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 25%');
		    scroll25 = true;
		    }
		}
		if ( scrollPercent >= 50 ) {
		    if ( !scroll50 ) {
			//universalGa('brands.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 50%', {nonInteraction: true});
      		//universalGa('t1.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 50%');
    		scroll50 = true;
		    }
		}
		if ( scrollPercent >= 75 ) {
		  	if ( !scroll75 ) {
			//universalGa('brands.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 75%', {nonInteraction: true});
	    	//universalGa('t1.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 75%');
			scroll75 = true;
		  	}
		}
		if ( scrollPercent >= 100 ) {
		  	if ( !scroll100 ) {
			//universalGa('brands.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 100%', {nonInteraction: true});
	    	//universalGa('t1.send', 'event', 'Especial Seur - compras online', 'scroll', 'Scroll Depth 100%');
			scroll100 = true;
		}
	}
}


function isMobile() {
	return $(window).width() < 768
}

function isPortrait() {
	return $(window).width() < 993
}

function isVisible(el,scroll) {
    var elementTop = el.offset().top;
	var elementBottom = elementTop + el.outerHeight();
	var viewportTop = scroll;
	var viewportBottom = viewportTop + $(window).height();
	return (elementTop > viewportTop) && (elementBottom < viewportBottom);
}


function getScrollPercent() {
	var bottom = $(window).height() + $(window).scrollTop();
	var height = $(document).height();
	return Math.round(100*bottom/height);
}


function scrollSocialNetworks() {
	var mobileSocialNetworks = $(".share-container")
	var desktopSocialNetworks = $(".aside")
	if (window.scrollY > 63){
		mobileSocialNetworks.addClass('is-visible');
		desktopSocialNetworks.addClass('is-visible');	
	} else {
		mobileSocialNetworks.removeClass('is-visible');
		desktopSocialNetworks.removeClass('is-visible');
	}
}


function socialNetworksSharing() {
	var urlPage = window.location.href;
	$('.share-fb').each(function(){
	var fbHref = "https://www.facebook.com/sharer/sharer.php?u="+urlPage;
        $(this).attr('href',fbHref);
    });
    $('.share-tw').each(function(){
        var tuitText = encodeURI($(this).data('text'));
        var tuitHref = "https://twitter.com/intent/tweet?url="+urlPage+"&text="+tuitText+"&original_referer="+urlPage;
        $(this).attr('href',tuitHref);
    });
    $('.share-lk').each(function(){
        var lkText = encodeURI($(this).data('text'));
        var lkHref = "https://www.linkedin.com/shareArticle?mini=true&url="+urlPage+"&title="+lkText+"&summary=&source=";
        $(this).attr('href',lkHref);
    });
    $('.share-wa').each(function(){
        var waText = encodeURI($(this).data('text'));
        var waHref = "whatsapp://send?text="+waText+" "+urlPage;
        $(this).attr('href',waHref);
    });
}

