

export function contact(){
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
          <div class="grid md:grid-cols-2" id="contact-form-data">
            <div class="grid" id="contact-form-input">
              <input type="name" id="contact-name" placeholder="First Name" required>
              <input type="email" id="contact-email" placeholder="Email" required>
              <input type="text" id="contact-message" placeholder="Write your message here..." required>
              <button type="submit" id="contact-submit">Add to cart</button>
            </div>
            <div class="contact-map">
              <iframe id="contact-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.0634987829135!2d-8.688463584741491!3d41.2203866792799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2468ec3655d101%3A0x12cab54b20119109!2sATEC%20-%20Academia%20de%20Forma%C3%A7%C3%A3o%20(Matosinhos)!5e0!3m2!1spt-PT!2spt!4v1656437625120!5m2!1spt-PT!2spt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div id="contact-map-span">
                <span>Avenida Mário Brito (EN107), nº 3570 - Freixieiro, 4455-491 Perafita</span>
              </div>
            </div>
          </div>
        </div>
        <div id="contact-team">
          <h1 id="contact-team-span">
            <span>Still not sure? Contact our team instead!</span>
          </h1>
          <div class="grid md:grid-cols-2" id="contact-user">
            <div class="grid" id="contact-userData">
              <img src="" alt="" id="contact-user-img">
              <span id="contact-userName">
                Nome do Mans
              </span>
              <span id="contact-userWork">
                Trabalho do Mans
              </span>
              <span id="contact-userDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iste necessitatibus quis culpa esse vel, labore molestiae enim. Facilis minima quas sint, dolore necessitatibus ea inventore molestias amet iste itaque.
              </span>
              <button type="submit" id="contact-userButton">Send Message</button>
            </div>
            <div class="grid" id="contact-userData">
              <img src="" alt="" id="contact-user-img">
              <span id="contact-userName">
                Nome do Mans
              </span>
              <span id="contact-userWork">
                Trabalho do Mans
              </span>
              <span id="contact-userDescription">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto iste necessitatibus quis culpa esse vel, labore molestiae enim. Facilis minima quas sint, dolore necessitatibus ea inventore molestias amet iste itaque.
              </span>
              <button type="submit" id="contact-userButton">Send Message</button>
            </div>
          </div>
        </div>
    `
}