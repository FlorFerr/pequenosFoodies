//SLIDER
$(document).ready(() =>{
    $(".slide").slick({
        dots: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1000,
        
        
        responsive: [
          {
            breakpoint: 990,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
})

//FORMULARIO
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
const $form = document.querySelector("#form")
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok){
    this.reset()
    myModal.show()
    console.log("enviado")
  }
}
