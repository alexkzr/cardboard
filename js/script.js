document.addEventListener('DOMContentLoaded', () => {
  /* Modal window script */
  const requestButton = document.getElementById('call-button');
  const requestButtonContacts = document.getElementsByClassName('call-button');
  const popup = document.querySelector('.popup-overlay');
  const closeButton = document.querySelector('.popup-close');
  const popupThanks = document.getElementById('thankyou');

  requestButton.addEventListener('click', e => {
    e.preventDefault();
    popup.style.display = 'block';
  });
  for (let i = 0; i < requestButtonContacts.length; i++) {
    requestButtonContacts[i].addEventListener('click', e => {
      e.preventDefault();
      console.log('the button was clicked');
      popup.style.display = 'block';
    });
  }

  closeButton.addEventListener('click', e => {
    e.preventDefault();
    popup.style.display = 'none';
  });
  closeButton.addEventListener('click', e => {
    e.preventDefault();
    popupThanks.style.display = 'none';
  });
  /* End Modal Window*/

  /*Make sure when submit button is clicked, modal is opened*/
  const submitButton = document.getElementsByClassName('submit');
  const modal = document.getElementById('thankyou');
  for (let i = 0; i < submitButton.length; i++) {
    submitButton[i].addEventListener('change', e => {
      e.preventDefault();
      modal.style.display = 'block';
    });
  }
  /*Code-block end*/

  /*End main page slider*/
  $(document).ready(function() {
    // Add smooth scrolling to all links
    $('a').on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== '') {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });
  /* Feedback slider */
  const slider = document.querySelector('.feedback-slider');

  slider.addEventListener('click', e => {
    e.preventDefault();
    const body = document.querySelector('body');

    const popupOverlay = document.querySelector('.feedback-popup-overlay');
    const sliderFeed = document.getElementsByClassName('slider-feed');
    const popup = document.querySelector('.feedback-popup');
    console.log(e.target.tagName);
    if (e.target.tagName == 'IMG') {
      popupOverlay.style.display = 'block';
      for (let i = 0; i < sliderFeed.length; i++) {
        sliderFeed[i].style.zIndex = '-2';
      }
      const imageSrc = e.target.src;
      const image = document.createElement('img');
      image.src = imageSrc;
      popup.appendChild(image);
      popupOverlay.addEventListener('click', e => {
        popupOverlay.style.display = 'none';
        image.remove();
        for (let i = 0; i < sliderFeed.length; i++) {
          sliderFeed[i].style.zIndex = '99';
        }
      });
    }
  });
  /*End feedback slider*/
  /*Input mask*/
  $('.popup-form__input').mask('+7(999)999-9999');
  $('.production-form__tel').mask('+7(999)999-9999');
  $('.main-form__tel').mask('+7(999)999-9999');
  /*End of input mask */
  /*slider*/
  $(function() {
    $('.main-slider .slide:gt(0)').hide();
    setInterval(function() {
      $('.main-slider .slide:gt(1)')
        .fadeOut()
        .next('.slide')
        .fadeIn()
        .end()
        .appendTo('.main-slider');
    }, 3000);
  });
  /*end of slider*/
  /*more sliders*/
});
