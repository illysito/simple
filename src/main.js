import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './styles/style.css'

console.log(
  'El server esta apagado y esta mierda esta funcionando en REMOTO HERMANO'
)

gsap.registerPlugin(ScrollTrigger)

const h = document.querySelectorAll('.hero-h')
const hero = document.querySelector('.hero')

gsap.to(h, {
  y: 250,
  scrollTrigger: {
    trigger: hero,
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
  },
})
