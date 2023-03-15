
$(document).ready(function () {

    // box shadow & text-color
    $('.select-btn').on('click', function () {
      
        $('.select-btn').removeClass('btn-active-shadow');
        $(this).addClass('btn-active-shadow');

        $('.select-btn').each(function(index, element){
          if ($(element).attr('class').includes('btn-active-shadow')) {
            $(element).children('p').addClass('text-white');
          }else {
            $(element).children('p').removeClass('text-white');
          }
        })
    });

});

// form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()