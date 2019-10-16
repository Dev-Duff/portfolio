const scrollButton = document.querySelector('[data-dom=scrollButton]');
scrollButton.addEventListener('click', function () {
    window.scrollTo(0, 0)
})


// const inputEmail = document.querySelector('[data-dom=input_email]')
// const textinput = document.querySelector('[data-dom=input_textarea]')
// const sendButton = document.querySelector('[data-dom=btn]')


// sendButton.addEventListener('click',function(){
//     console.log(inputEmail.value)
//     console.log(textinput.value)
//     inputEmail = ''
// })

const contactForm = document.querySelector('[data-dom=contact-form]')

contactForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const contactForm = document.forms.contactForm
    const { email: { value: email }, message: { value: msg } } = contactForm

    const result = new FormData(contactForm)
    // send result to backend
    const jsonResult = JSON.stringify({email, msg})
    console.log(jsonResult)
})