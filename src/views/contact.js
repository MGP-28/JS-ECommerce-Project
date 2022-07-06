import { teamMembers } from "../components/contact/teamMembers"

export async function contact(){
  const contactView = document.querySelector('#contact')
  contactView.innerHTML = `
      <div id="contact-introduction"></div>
      <div id="contact-initialText">
        <span id="introduction-span">Let your essence, flow and lifestyle overflow</span>
        <p id="introduction-p">Be wise</p>
      </div>
      <div id="contact-form">
        <h1 id="contact-us">
          <span>Contact us</span>
        </h1>
        <div class="flex flex-col lg:flex-row justify-evenly items-center lg:items-start gap-10 lg:gap-0" id="contact-form-data">
          <form class="grid gap-5 w-2/3 lg:w-1/3" id="contact-form-input">
            <input type="name" id="contact-name" name="name" placeholder="Name" required class="contact-input h-14">
            <input type="email" id="contact-email" name="email" placeholder="Email" required class="contact-input h-14">
            <textarea type="text" id="contact-message" name="message" placeholder="Write your message here..." required class="contact-input"></textarea>
            <button type="submit" id="contact-submit" class="text-3xl h-14 w-full">Contact me!</button>
          </form>
          <div class="flex flex-col items-center">
            <iframe id="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.0634987829135!2d-8.688463584741491!3d41.2203866792799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2468ec3655d101%3A0x12cab54b20119109!2sATEC%20-%20Academia%20de%20Forma%C3%A7%C3%A3o%20(Matosinhos)!5e0!3m2!1spt-PT!2spt!4v1656437625120!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <span class="sm:w-max text-center font-semibold">Avenida Mário Brito (EN107), nº 3570 - Freixieiro, 4455-491 Perafita</span>
          </div>
        </div>
      </div>
      <div id="contact-team" class="py-20">
        <h1 id="contact-team-span">
          <span>Still not sure? Contact our team instead!</span>
        </h1>
      </div>
  `

  const contactTeamEl = contactView.querySelector('#contact-team')
  const teamMembersEl = await teamMembers()
  contactTeamEl.append(teamMembersEl)
}