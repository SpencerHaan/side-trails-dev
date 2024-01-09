import * as React from "react"
import { ContactForm, Section } from "../components"

const ContactSection = () => {
  return (
    <Section.Item
      anchor="contact"
      heading={{ title: "Let's Chat", subtitle: "Need help with a project? Send me some details." }}
    >
      <ContactForm/>
    </Section.Item>
  )
}

export default ContactSection