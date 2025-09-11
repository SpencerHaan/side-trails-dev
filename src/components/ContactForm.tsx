import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const formSchema = z.object({
  contactName: z.string().min(1).max(50),
  contactEmail: z.string().email(),
  contactDescription: z.string().min(1).max(1024)
})

export function ContactForm() {
  return <BaseContactForm />
}

function BaseContactForm() {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      contactEmail: "",
      contactDescription: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (import.meta.env.PROD) {
      setSubmitting(true)

      fetch(`${import.meta.env.PUBLIC_API_URL}/contact`, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((r) => {
        setSubmitting(false)

        r.ok ? successToast() : errorToast()
      })
      .catch((e) => {
        setSubmitting(false)

        console.error("Errors", e)
        errorToast()
      })
    } else {
      console.log(values)
      successToast()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="sm:grid sm:grid-cols-2 sm:gap-x-4 space-y-6 w-full">
        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pb-2">Name</FormLabel>
              <FormControl>
                <Input {...field} disabled={submitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pb-2">Email</FormLabel>
              <FormControl>
                <Input {...field} disabled={submitting} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactDescription"
          render={({ field }) => (
            <FormItem className="w-full sm:col-span-2">
              <FormLabel className="pb-2">Description</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} disabled={submitting} />
              </FormControl>
              <FormDescription>What's your project about?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center md:col-span-2">
          <Button type="submit" className="w-full" disabled={submitting}>Submit</Button>
        </div>
      </form>
    </Form>
  )
}

function successToast() {
  toast.success("Contact details sent!", {
    description: "I'll get back to you as soon as possible, thank you!"
  })
}

function errorToast() {
  toast.error("Sorry, something didn't work!", {
    description: "Try again or email me at discovery@sidetrails.dev"
  })
}
