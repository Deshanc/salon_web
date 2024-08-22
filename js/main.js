//toggle background acrive
const slideNavigator = name => {
    let slides = document.querySelectorAll('.bg-slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
        if (slide.classList.contains(name)) {
            slide.classList.add('active');
        }
    });
};






// Function to toggle active state of navigation buttons
const toggleActiveNav = (target) => {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.classList.remove('active');
    });
    target.classList.add('active');
};

// Function to navigate to the target section
const navigateToSection = (targetId) => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
};







// Event listener for navigation button clicks
document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = button.getAttribute('data-target');
            if (targetId) {
                toggleActiveNav(button);
                navigateToSection(targetId);
            }
        });
    });
});



//switch background
window.addEventListener('load', () => {
const slideBtnList = document.querySelectorAll('.slide-btn');
 slideBtnList.forEach(btn => {
 btn.addEventListener('click', function (e) {
e.preventDefault();
slideBtnList.forEach(el => {
    el.classList.remove('active');

});
this.classList.add('active');
slideNavigator(this.getAttribute('data-target'));

        });
    });
});







//navigation to sections
window.addEventListener('load', () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(nav => {
        nav.addEventListener('click', function (e) {
            e.preventDefault();
            navList.forEach(el => {
                el.classList.remove('active');

            });
            this.classList.add('active');
            sectionNavigator(this.getAttribute('data-target'));
            screen.width < 768 && toggleMenu();
        });
    });
});






// reset header to initial state
const resetHeader = () => {
    let header= document.querySelector('header');
    header.classList.remove('active');
};

//initial navigation
const initNavigation = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'about') {
            el.classList.add('active');
        }
    });
    sectionNavigator('About');

};



const initNavigation1 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'Services') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Services');

};

const initNavigation2 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'Portfolio') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Portfolio');

};

const initNavigation3 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'Packages') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Packages');

}



const scrollToTop = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'Services') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Services');

}


const scrollToTop1 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'Home') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Home');

}


const scrollToTop2 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'About') {
            el.classList.add('active');
        }
    });
    sectionNavigator('About');

}

const initNavigation4 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'Contact') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Contact');

}


const scrollToTop3 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'Portfolio') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Portfolio');

}


const scrollToTop4 = () => {
    const navList = document.querySelectorAll('.nav-btn');
    navList.forEach(el => {
        el.classList.remove('active');
        if (el.getAttribute('data-target') === 'packages') {
            el.classList.add('active');
        }
    });
    sectionNavigator('Packages');

}














var swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000, // Adjust the delay as needed (in milliseconds)
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});


$(document).ready(function(){
    // Initialize Isotope
    var $portfolioContainer = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });
  
    // Filter items on button click
    $('#Portfolio-filter').on( 'click', 'li', function() {
      var filterValue = $(this).attr('data-filter');
      $portfolioContainer.isotope({ filter: filterValue });
      $('#Portfolio-filter li').removeClass('filter-active');
      $(this).addClass('filter-active');
    });
  });
  
  // toggle menu
  const toggleMenu = () => {
    const menu = document.querySelector('.menu');
    const navMobile = document.querySelector('.nav-mobile')
    menu.classList.toggle('active');
    navMobile.classList.toggle('active')
};



document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll("section");
    var footer = document.querySelector("footer");
    
    // Show footer if last section is reached
    function toggleFooter() {
      var lastSection = sections[sections.length - 1];
      var lastSectionRect = lastSection.getBoundingClientRect();
      if (lastSectionRect.bottom <= window.innerHeight) {
        footer.style.display = "block";
      } else {
        footer.style.display = "none";
      }
    }
    
    // Initial check on page load
    toggleFooter();
    
    // Check on scroll
    window.addEventListener("scroll", toggleFooter);
  });
  


