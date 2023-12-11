import * as React from "react"
import { useForm } from "react-hook-form"
import Button from "./Button"

interface Inputs {
  contactName: string
  contactCompany: string
  contactEmail: string
  contactBudget: string
  contactDescription: string
}

const ContactForm = () => {
  const [data, setData] = React.useState<Inputs>()
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<Inputs>()

  React.useEffect(() => {
    const endpoint = `${process.env.API_URL}/contact`
    console.log("Contact endpoint", endpoint)
    if (data) {
      fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
       },
      })
      .then((response) => console.log(response))
      .catch((error) => console.error(error))
    }
  }, [data])

  return (
    <div className="space-y-4">
      <form id="contact-form" onSubmit={handleSubmit(setData)} className="flex flex-wrap">
        <div className="w-full md:max-w-[50%] p-2">
          <input {...register("contactName", { required: true })} type="text" placeholder="Name" className={`w-full rounded-md ${errors.contactName ? "bg-red-100" : null} border-zinc-400 focus:ring-lion focus:border-lion`}/>
        </div>
        <div className="w-full md:max-w-[50%] p-2">
          <input {...register("contactCompany", { required: true })} type="text" placeholder="Company" className={`w-full rounded-md ${errors.contactCompany ? "bg-red-100" : null} border-zinc-400 focus:ring-lion focus:border-lion`}/>
        </div>
        <div className="w-full md:max-w-[50%] p-2">
          <input {...register("contactEmail", { required: true })} type="text" placeholder="Email" className={`w-full rounded-md ${errors.contactEmail ? "bg-red-100" : null} border-zinc-400 focus:ring-lion focus:border-lion`}/>
        </div>
        <div className="w-full md:max-w-[50%] p-2">
          <select {...register("contactBudget", { validate: (value: string) => value !== "Budget" })} className={`w-full rounded-md ${errors.contactBudget ? "bg-red-100" : null} border-zinc-400 focus:ring-lion focus:border-lion`}>
            <option disabled selected hidden>Budget</option>
            <option>$25,000-$50,000</option>
            <option>$50,000-$100,000</option>
            <option>$100,000+</option>
          </select>
        </div>
        <div className="w-full p-2">
          <textarea {...register("contactDescription", { required: true })} placeholder="What's your project about?" rows={10} className={`w-full rounded-md ${errors.contactDescription ? "bg-red-100" : null} border-zinc-400 focus:ring-lion focus:border-lion`}/>
        </div>
      </form>
      <div className="text-center">
        <Button label="Submit" form="contact-form"/>
      </div>
    </div>
  )
}

export default ContactForm