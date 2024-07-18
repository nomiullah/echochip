$(document).ready(function(){
	

	/*  Foundation Init    */
	$(document).foundation();


	/*    Mean navigation menu scroll to    */
    $('#site-menu ul li a, #main_nav ul li a').click(function(e){
    	e.preventDefault();
    	scrollTo($(this).attr('href'), 900, 'easeInOutCubic');
    });

	$('#site-menu ul li:not(.has-child) a, #main_nav ul li:not(.has-child) a').click(function(e){
		$('#site-wrapper').removeClass('show-nav');
    });


    /*    Back to top button    */
    var back_top = $('#back_top');

    back_top.click(function(e){
    	e.preventDefault();
    	scrollTo(0, 900, 'easeInOutCubic');
    	
    });

    function scrollTo(target, speed, ease){
    	$(window).scrollTo(target, speed, {easing:ease});
    }

    $(window).on('scroll', function(){    
	    if($(this).scrollTop()>749)
	    {
	    	back_top.stop().animate({opacity : 1}, 250);
	    }else
	    {
	    	back_top.stop().animate({opacity : 0}, 250);	    
	    }   
    });

});


/*========================================
=     CUSTOM FUNCTIONS Offcanvas menu    =
========================================*/ 
$(function() {
    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
});

function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {
        // Do things on Nav Close
        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }
    //$('#site-wrapper').toggleClass('show-nav');
}

// Mobile menu function
document.addEventListener('DOMContentLoaded', function() {
	// Function to handle toggling the 'active' class
	function toggleActive(event) {
		// Prevent the default action if it's a link
		if (event.target.tagName.toLowerCase() === 'a') {
		event.preventDefault();
		}

		// Toggle the 'active' class on the parent element
		const parentLi = this.parentElement;
		parentLi.classList.toggle('active');
	}

	// Get all links and span elements inside elements with the class 'has-child'
	const hasChildLinks = document.querySelectorAll('.has-child > a');
	const spanArrows = document.querySelectorAll('.has-child > .span-arrow');

	// Add event listeners to both links and span elements
	hasChildLinks.forEach(link => {
		link.addEventListener('click', toggleActive);
	});

	spanArrows.forEach(span => {
		span.addEventListener('click', toggleActive);
	});
	
});

// Custom animation function
document.addEventListener('DOMContentLoaded', function() {

    const handleScroll = () => {
		var idDOm = document.getElementById('sectioncheck');
        if (window.scrollY >= idDOm.offsetTop - 200) {
            idDOm.classList.add('iamin');
            window.removeEventListener('scroll', handleScroll);
        }
    };

    window.addEventListener('scroll', handleScroll);
});




window.onscroll = function() {makeHeaderSticky()};

function makeHeaderSticky() {
  if (window.scrollY > 100) {
    document.body.classList.add("sticky-header");
  } else {
    document.body.classList.remove("sticky-header");
  }
}

// JavaScript to dynamically set the content attribute for all elements with the class 'title-dup'
document.addEventListener('DOMContentLoaded', function() {
	var textElements = document.querySelectorAll('.title-dup');
	textElements.forEach(function(textElement) {
		

		if (textElement.hasAttribute('data-content')) {
            
        } else {
            var textContent = textElement.textContent;
			textElement.setAttribute('data-content', textContent);
        }
	});
});

$('.custom-slider').slick({
	centerMode: false,
	centerPadding: '60px',
	dots: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	responsive: [
		{
		breakpoint: 1024,
			settings: {
				centerMode: true,
				slidesToShow: 2
			}
		},
		{
		breakpoint: 768,
			settings: {
				centerMode: false,
				slidesToShow: 1
			}
		}
	]
});