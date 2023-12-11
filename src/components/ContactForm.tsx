import * as React from "react"
import Button from "./Button"

const ContactForm = () => {
  return (
    <div className="space-y-4">
      <form className="flex flex-wrap -m-2 text-sm xl:text-base">
        <div className="w-full md:max-w-[50%] p-2">
          <input type="text" placeholder="Name" name="contactName" className="w-full h-10 p-2 rounded-md"/>
        </div>
        <div className="w-full md:max-w-[50%] p-2">
          <input type="text" placeholder="Company" name="contactCompany" className="w-full h-10 p-2 rounded-md"/>
        </div>
        <div className="w-full md:max-w-[50%] p-2">
          <input type="text" placeholder="Email" name="contactEmail" className="w-full h-10 p-2 rounded-md"/>
        </div>
        <div className="w-full md:max-w-[50%] p-2">
          <select className="w-full h-10 p-2 rounded-md bg-white text-zinc-400">
            <option disabled selected hidden>Budget</option>
            <option>$25,000-$50,000</option>
            <option>$50,000-$100,000</option>
            <option>$100,000+</option>
          </select>
        </div>
        <div className="w-full m-2">
          <textarea placeholder="What's your project about?" rows={10} className="w-full p-2 rounded-md"/>
        </div>
      </form>
      <div className="text-center">
        <Button disabled={true} label="Submit"/>
      </div>
    </div>
  )
}

export default ContactForm