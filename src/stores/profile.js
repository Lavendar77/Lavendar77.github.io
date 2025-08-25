import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => {
    return {
      name: 'Adeyinka Adefolurin',
      phone: '2348135303377',
      email: 'folurinyinka@gmail.com',
      linkedin: 'https://linkedin.com/in/adeyinka-adefolurin/',
      github: 'https://github.com/lavendar77/',
      gitlab: 'https://gitlab.com/lavendar77/',
      twitter: 'https://twitter.com/_fykay',
      drive: 'https://drive.google.com/file/d/17wjEZG9f9sC5u0ivzuQ3H3b0YIDNx29H/view?usp=sharing'
    }
  }
})
