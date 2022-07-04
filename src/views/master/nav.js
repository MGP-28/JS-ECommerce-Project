function render(){
    document.querySelector('#app').innerHTML += `
    <nav>
      <section class="flex items-center py-5 px-0 md:px-20">
        <!-- Nav links -->
        <ul class="hidden md:block md:absolute">
          <li id="nav-links" class="flex flex-row gap-10 text-xl font-light h-full">
            <a relatedView="shop" class="link-hover-anim flex gap-2 items-center">
              <i class="w-8 h-8 fa-solid fa-cart-shopping text-color-custom-beige"></i>
              <span class="hidden lg:block">Shop</span>
            </a>
            <a relatedView="about" class="link-hover-anim flex gap-2 items-center">
              <i class="w-4 h-4 fa-solid fa-info border-2 border-orange-100 rounded-full p-1.5 text-color-custom-beige"></i>
              <span class="hidden lg:block">About</span>
            </a>
            <a relatedView="contact" class="link-hover-anim flex gap-2 items-center">
              <i class="w-8 h-8 fa-brands fa-whatsapp text-color-custom-beige"></i>
              <span class="hidden lg:block">Contact</span>
            </a>
            <a relatedView="cart" class="link-hover-anim flex gap-2 items-center">
              <i class="w-8 h-8 fa-solid fa-ban text-color-custom-beige"></i>
              <span class="hidden lg:block">TEST: cart</span>
            </a>
          </li>
        </ul>
        <!-- Brand name -->
        <div class="w-full font-parisienne text-5xl text-center md:text-right xl:text-center">
          <a>DekiDeki Jewelry</a>
        </div>
        <!-- Social -->
        <div class="hidden xl:block xl:absolute right-20">
          <div class="flex justify-end items-center gap-5">
            <a href="#"><i class="link-hover-anim fa-brands fa-facebook w-8 h-8 text-color-custom-beige"></i></a>
            <a href="#"><i class="link-hover-anim fa-brands fa-twitter-square w-8 h-8 text-color-custom-beige"></i></a>
            <a href="#"><i class="link-hover-anim fa-solid fa-square-rss w-8 h-8 text-color-custom-beige"></i></a>
          </div>
        </div>
      </section>
      <section id="nav-links-mobile" class="nav-style fixed md:hidden z-40">
        <!-- Mobile nav links -->
        <ul class="rounded-lg bg-orange-300 px-3 py-1.5">
          <li class="flex flex-row gap-10 text-xl font-light h-full">
            <a relatedView="shop" class="link-hover-anim flex gap-2 items-center">
              <i class="w-8 h-8 fa-solid fa-cart-shopping text-color-custom-beige"></i>
              <span class="hidden lg:block">Shop</span>
            </a>
            <a relatedView="about" class="link-hover-anim flex gap-2 items-center">
              <i class="w-4 h-4 fa-solid fa-info border-2 border-orange-100 rounded-full p-1.5 text-color-custom-beige"></i>
              <span class="hidden lg:block">About</span>
            </a>
            <a relatedView="contact" class="link-hover-anim flex gap-2 items-center">
              <i class="w-8 h-8 fa-brands fa-whatsapp text-color-custom-beige"></i>
              <span class="hidden lg:block">Contact</span>
            </a>
          </li>
        </ul>
      </section>
    </nav>
    `
}

export {render as renderNavBar}