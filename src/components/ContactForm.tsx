import * as React from "react"
import { useForm } from "react-hook-form"
import Button from "./Button"
import Card from "./Card"
import Content from "./Content"

const ENDPOINT = `${process.env.API_URL}/contact`

enum Status {
  Failed,
  Success
}

interface Inputs {
  contactName: string
  contactCompany: string
  contactEmail: string
  contactBudget: string
  contactDescription: string
}

const ContactForm = () => {
  const [status, setStatus] = React.useState<Status>()
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      isValid,
      isDirty,
      isSubmitting,
    }
  } = useForm<Inputs>()

  const onSubmit = async (data: Inputs) => {
    fetch(ENDPOINT, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
     },
    })
    .then(() => setStatus(Status.Success))
    .catch((e) => {
      console.error("Errors", e)
      setStatus(Status.Failed)
    })
  }

  const handleReset = () => {
    reset({}, { keepValues: true, keepIsValid: true })
    setStatus(undefined)
  }

  return (
    <Card>
      {status === Status.Success
      ? <div className="h-full flex flex-col justify-center p-2">
          <Content className="text-center">
              <h3>Contact details sent!</h3>
              <p>
                I'll get back to you as soon as possible, thank you!
              </p>
              <p>
                Made a mistake? <a onClick={handleReset} className="cursor-pointer"> Try again.</a>
              </p>
          </Content>
        </div>
      : <div>
          {status === Status.Failed
          ? <div className="text-sm 3xl:text-lg border border-red-500 m-1 p-2 text-red-500 bg-red-100">
              Sorry, something didn't work! Try again or email me at discovery@sidetrails.dev
            </div>
          : null
          }
          <form id="contact-form" onSubmit={(e) => { console.log("Clicked submit"); handleSubmit(onSubmit)(e)}} className="flex flex-wrap">
            <label className="w-full md:max-w-[50%] p-1">
              Name:
              <input {...register("contactName", { required: true })} type="text" className="w-full p-2 rounded-md border border-zinc-400 focus:ring-lion focus:border-lion"/>
            </label>
            <label className="w-full md:max-w-[50%] p-1">
              Company:
              <input {...register("contactCompany", { required: true })} type="text" className="w-full rounded-md p-2 border border-zinc-400 focus:ring-lion focus:border-lion"/>
            </label>
            <label className="w-full md:max-w-[50%] p-1">
              Email:
              <input {...register("contactEmail", { required: true })} type="text" className="w-full rounded-md p-2 border border-zinc-400 focus:ring-lion focus:border-lion"/>
            </label>
            <label className="w-full md:max-w-[50%] p-1">
              Budget:
              <select {...register("contactBudget", { required: true })} className="w-full rounded-md p-2 border border-zinc-400 focus:ring-lion focus:border-lion">
                <option>$25,000-$50,000</option>
                <option>$50,000-$100,000</option>
                <option>$100,000+</option>
              </select>
            </label>
            <label className="w-full p-1">
              What's your project about?
              <textarea {...register("contactDescription", { required: true })} rows={10} className="w-full p-2 rounded-md border-zinc-400 focus:ring-lion focus:border-lion"/>
            </label>
          </form>
          <div className="mt-2 text-center">
            <Button disabled={!isValid || !isDirty || isSubmitting} label="Submit" form="contact-form"/>
          </div>
        </div>
      }
    </Card>
  )
}

export default ContactForm