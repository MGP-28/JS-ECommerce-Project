import { renderContactForm } from "../components/contact/contactForm"
import { teamMembers } from "../components/contact/teamMembers"
import { renderPopup } from "../components/generic/popup"
import { renderSpinner } from "../components/generic/spinner"
import { sendContact } from "../services/sendContact"

export async function contact(){
  const contactView = document.querySelector('#contact')
  contactView.innerHTML = `
      <div id="contact-introduction"></div>
      <div id="contact-initialText" class="relative overflow-hidden h-full">
        <span id="introduction-span">Let your essence, flow and lifestyle overflow</span>
        <div class="introduction-p absolute" >Be wise</div>
        <div class="introduction-p absolute hidden">Be clever</div>
        <div class="introduction-p absolute hidden">Be ingenious</div>
      </div>
      <div id="contact-form">
        <h1 id="contact-us">
          <span>Contact us</span>
        </h1>
        <div class="flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-10 lg:gap-0" id="contact-form-data">
        </div>
      </div>
      <div id="contact-team" class="py-20">
        <h1 id="contact-team-span">
          <span>Still not sure? Contact our team instead!</span>
        </h1>
      </div>
  `

  // hero animation function call
  const heroDivs = [...contactView.querySelectorAll(".introduction-p")]
  animationLoop(heroDivs, 0)

  //get form/map container from the view
  const formSectionEl = contactView.querySelector('#contact-form-data')

  //render form
  formSectionEl.append(renderContactForm())
  //render map
  formSectionEl.innerHTML += `
    <div class="flex flex-col items-center gap-5">
      <iframe id="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.0634987829135!2d-8.688463584741491!3d41.2203866792799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2468ec3655d101%3A0x12cab54b20119109!2sATEC%20-%20Academia%20de%20Forma%C3%A7%C3%A3o%20(Matosinhos)!5e0!3m2!1spt-PT!2spt!4v1656437625120!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <span class="sm:w-max text-center font-semibold">Avenida Mário Brito (EN107), nº 3570 - Freixieiro, 4455-491 Perafita</span>
    </div>
  `

  //only reliable event listener fixation on the form
  const formEl = formSectionEl.querySelector('form')
  formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    //disable form submit
    const submitBtn = formEl.querySelector('button')
    submitBtn.setAttribute('disabled', '')
    submitBtn.innerHTML = ''; submitBtn.append(renderSpinner())
    //form data validations
    if(!e.target.name.value) {renderPopup(false, 'Error: Name is empty.'); contactMeReset(submitBtn); return}
    if(!e.target.email.value) {renderPopup(false, 'Error: Email is empty.');contactMeReset(submitBtn); return}
    const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(!e.target.email.value.match(emailPattern)) {renderPopup(false, 'Error: Email format is incorrect.');contactMeReset(submitBtn); return}
    if(!e.target.message.value) {renderPopup(false, 'Error: Message is empty.');contactMeReset(submitBtn); return}
    //organize data into object
    const contactInfo = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }
    //send form data to API service
    sendContact(contactInfo)
    .then(response => {

      if(response){
        e.target.name.value = '',
        e.target.email.value = '',
        e.target.message.value = ''
        renderPopup(true, 'Message sent successfully. Thank you for your contact!')
      }

      else renderPopup(false, 'Error sending the message, please try again later.')

      contactMeReset(submitBtn)
    })
  })

  //get contacts container from the view
  const contactTeamEl = contactView.querySelector('#contact-team')
  //render team members via API data
  const teamMembersEl = await teamMembers()
  contactTeamEl.append(teamMembersEl)
}

// function that will loop animation
function animationLoop(heroDivs, index) {
  // do the animation in and out every 7 seconds, text enter and text out and hide
  setTimeout(() => {
    const nextDivIndex = (index == heroDivs.length - 1) ? 0 : index + 1
    heroDivs[index].classList.add('anim-hero-out')
    heroDivs[nextDivIndex].classList.add('anim-hero-in')
    heroDivs[nextDivIndex].classList.remove('hidden')

    // at the end of the animation (2 seconds), 
    setTimeout(() => {
      heroDivs[index].classList.add('hidden')
      heroDivs[index].classList.remove('anim-hero-out')
      heroDivs[nextDivIndex].classList.remove('anim-hero-in')

        // callback to keep the loop going
        setTimeout(() => {
          animationLoop(heroDivs, nextDivIndex)
        }, 0);
    }, 1950);
  },7000)
}

function contactFormValidationError(message){

}

function contactMeReset(submitBtn){
  submitBtn.removeAttribute('disabled')
  submitBtn.textContent = 'Contact Me!'
}