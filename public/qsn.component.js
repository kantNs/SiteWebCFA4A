/* globals Vue */
;(function () {
  'use strict'

  const template = `
<section id="qsn">
  <h1>Alors vous voulez en savoir plus sur nous ?</h1>
  <p> Bonjour, nous sommes deux étudiants de l'ESIEA, nous avions pour but de créer un site
  web avec Node JS, Express et VUe.js dans le cadre de notre cours de programmation Web.
  Notre binome est composé de :</p></br>
  <p> NESARATNAM Kantharuban</p></br>
  <p> VERDY Sylvain</p></br>
  <p><img src="/assets/logo.png" alt="Logo" width="300" height="200"></p></br>
</section>
  `

  Vue.component('qsn', {
    template: template
  })
})()