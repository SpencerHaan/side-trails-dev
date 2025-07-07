import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  contactName: z.string().min(1).max(50),
  contactCompany: z.string().min(1).max(50),
  contactEmail: z.string().email(),
  contactBudget: z.string(),
  contactDescription: z.string().min(1).max(512)
})

export function ContactForm() {
  return <BaseContactForm />
}

function BaseContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contactName: "",
      contactCompany: "",
      contactEmail: "",
      contactDescription: ""
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (import.meta.env.PROD) {
      const endpoint = `${import.meta.env.PUBLIC_API_URL}/contact`
      console.log(endpoint)

       fetch(endpoint, {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        })
        .then(() => toast.success("Contact details sent!", {
          description: "I'll get back to you as soon as possible, thank you!"
        }))
        .catch((e) => {
          console.error("Errors", e)
          toast.error("Sorry, something didn't work!", {
            description: "Try again or email me at discovery@sidetrails.dev"
          })
        })
    } else {
      toast.success("Contact details sent!", {
          description: "I'll get back to you as soon as possible, thank you!"
      })
    }
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="md:grid md:grid-cols-2 md:gap-x-4 space-y-6">
        <FormField
          control={form.control}
          name="contactName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pb-2">Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactCompany"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pb-2">Company</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactBudget"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="pb-2">Budget</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a budget" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="$25,000-$50,000">$25,000-$50,000</SelectItem>
                  <SelectItem value="$50,000-$100,000">$50,000-$100,000</SelectItem>
                  <SelectItem value="$100,000+">$100,000+</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactDescription"
          render={({ field }) => (
            <FormItem className="w-full md:col-span-2">
              <FormLabel className="pb-2">Description</FormLabel>
              <FormControl>
                <Textarea rows={5} {...field} />
              </FormControl>
              <FormDescription>What's your project about?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center md:col-span-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}
