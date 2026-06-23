import { toast } from "vue-sonner"

export { default as ContactForm } from './ContactForm.vue'

export function successToast() {
  toast.success("Contact details sent!", {
    description: "I'll get back to you as soon as possible, thank you!"
  })
}

export function errorToast() {
  toast.error("Sorry, something didn't work!", {
    description: "Try again or email me at discovery@sidetrails.dev"
  })
}
