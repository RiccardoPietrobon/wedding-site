import type { DirectiveBinding } from 'vue'

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('visible')
          } else {
            el.classList.remove('visible') // rimuovilo se vuoi che sparisca di nuovo
          }
        })
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
  },
}
