<script setup lang="ts">
import { errorToast, successToast } from '.'
import { useForm } from '@tanstack/vue-form'
import { z } from 'zod'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup, InputGroupAddon, InputGroupText, InputGroupTextarea } from '@/components/ui/input-group'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'

const submitting = ref(false)

const formSchema = z.object({
  contactName: z.string()
    .min(1, 'Name must be at least 1 character.')
    .max(50, 'Name must be at most 50 characters.'),
  contactEmail: z.email(),
  contactDescription: z.string()
    .min(50, 'Description must be at least 50 characters.')
    .max(1000, 'Description must be at most 1000 characters.')
})

const form = useForm({
  defaultValues: {
     contactName: '',
     contactEmail: '',
     contactDescription: '',
  },
  validators: {
    onSubmit: formSchema
  },
  onSubmit: async ({ value }) => {
     if (import.meta.env.PROD) {
      submitting.value = true

      fetch(`${import.meta.env.PUBLIC_API_URL}/contact`, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((r) => {
        r.ok ? successToast() : errorToast()
      })
      .catch((e) => {
        console.error("Errors", e)
        errorToast()
      })
      .finally(() => {
        submitting.value = false
      })
    } else {
      console.log(value)
      successToast()
    }
  }
})

const isInvalid = (field: any) => {
  return field.state.meta.isTouched && !field.state.meta.isValid
}
</script>

<template>
  <div class="w-full space-y-6">
    <form
      id="contact-form"
      @submit.prevent="form.handleSubmit"
      class="w-full"
    >
      <FieldGroup>
        <form.Field name="contactName">
          <template #default="{ field }">
            <Field :data-invalid="isInvalid(field)">
              <FieldLabel :for="field.name">
                Name
              </FieldLabel>
              <Input
                :id="field.name"
                :name="field.name"
                :model-value="field.state.value"
                :aria-invalid="isInvalid(field)"
                autocomplete="off"
                @blur="field.handleBlur"
                @input="field.handleChange($event.target.value)"
              />
              <FieldError
                v-if="isInvalid(field)"
                :errors="field.state.meta.errors"
              />
            </Field>
          </template>
        </form.Field>

        <form.Field name="contactEmail">
          <template #default="{ field }">
            <Field :data-invalid="isInvalid(field)">
              <FieldLabel :for="field.name">
                Email
              </FieldLabel>
              <Input
                :id="field.name"
                :name="field.name"
                :model-value="field.state.value"
                :aria-invalid="isInvalid(field)"
                type="email"
                @blur="field.handleBlur"
                @input="field.handleChange($event.target.value)"
              />
              <FieldError
                v-if="isInvalid(field)"
                :errors="field.state.meta.errors"
              />
            </Field>
          </template>
        </form.Field>

        <form.Field name="contactDescription">
          <template #default="{ field }">
            <Field :for="field.name">
              <FieldLabel>
                Description
              </FieldLabel>
              <InputGroup>
                <InputGroupTextarea
                  :id="field.name"
                  :name="field.name"
                  :model-value="field.state.value"
                  :rows="5"
                  :aria-invalid="isInvalid(field)"
                  placeholder="What's your project about?"
                  @blur="field.handleBlur"
                  @input="field.handleChange($event.target.value)"
                  class="min-h-24 resize-none"
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText class="tabular-nums">
                    {{ field.state.value?.length ?? 0 }}/1000 characters
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
              <FieldError
                v-if="isInvalid(field)"
                :errors="field.state.meta.errors"
              />
            </Field>
          </template>
        </form.Field>
      </FieldGroup>
    </form>
    <div class="text-center md:col-span-2">
      <Button type="submit" form="contact-form" class="w-full">Submit</Button>
    </div>
  </div>
</template>
