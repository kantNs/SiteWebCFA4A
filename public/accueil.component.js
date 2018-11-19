/* globals Vue */
;(function () {
  'use strict'

  const template = `
<section id="accueil">
  <h1>Bienvenue sur BShopping</h1>
  <h2>Nous vous remercions de votre visite !!</h2>
  <p> Ici vous pourrez trouver tout ce que vous désirez au plus profond de votre
  coeur</p></br>
  <p> N'hésitez pas à vendre ce qui ne vous sert plus, que ce soit un animal ou un vehicule</p></br>
 <p><img src="/assets/logo.jpg" alt="Logo" width="300" height="200"></p></br>
 <h1>Nos partenaires</h1>
  <h3> Promotions -30% sur tous les produits avec le BLACK FRIDAY grâce à votre compte Bshopping</h3>
 <div id="carousel">
  <carousel-3d :autoplay="true" :autoplay-timeout="3400">
    <slide :index="0"><img style="height: 300px; width: 200px;"  src="https://c.static-nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/kiqlozzugbcgzuiz96vc/chaussure-air-max-97-pour-fKNVSJ.jpg"/></slide>
    <slide :index="1"><img style="height: 300px; width: 200px;" src="https://sits-pod68-pod69.demandware.net/dw/image/v2/AAQM_PRD/on/demandware.static/Sites-FR-Site/Sites-master/fr/dw6fd1d793/BH9358_DYE_20.jpg?"/></slide>
    <slide :index="2"><img style="height: 300px; width: 200px;" src="https://1391915162.rsc.cdn77.org/fr/182677/adidas-x-pharrell-williams-solar-hu-nmd-ftw-white-bold-green-bright-yellow.jpg"/></slide>
  </carousel-3d>
</div>

</section>
  `

  Vue.component('accueil', {
    template: template
  })
})()