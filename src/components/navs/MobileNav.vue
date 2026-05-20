<script setup lang="ts">
import { ref } from 'vue';
import type { NavItem } from '.';
import { cn } from "@/lib/utils"
import { MenuIcon } from '@/components/icons';
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Button from '../ui/button/Button.vue';


const props = defineProps<{
  items: NavItem[]
  class?: string
}>()

const open = ref(false)
</script>

<template>
  <div :class="cn(
    'bg-background/90 backdrop-blur border rounded-lg shadow-sm',
    props.class
  )">
    <Popover v-model:open="open" :modal="true">
      <PopoverAnchor class="flex justify-between items-center w-full">
        <a href="/" class="flex items-center ml-2">
          <img class="h-8" src="/logo.svg" alt="Side Trails Software Development logo." />
          <p class="font-bold font-heading mt-0.5">
            Side Trails
          </p>
        </a>
        <PopoverTrigger as-child>
          <Button variant="ghost">
            <MenuIcon :open="open" />
            <span class="sr-only">Menu Toggle</span>
          </Button>
        </PopoverTrigger>
      </PopoverAnchor>
      <PopoverContent
        align="start"
        side="bottom"
        :side-offset="8"
        class="bg-background/90 backdrop-blur w-(--reka-popper-anchor-width)"
      >
        <ul class="space-y-3">
          <li v-for="item in props.items" :key="item.label">
            <a :href="item.href">{{ item.label }}</a>
          </li>
          <hr class="border-dashed" />
          <li>
            <a href="https://www.linkedin.com/in/spencerhaan/" target="_blank">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/SpencerHaan/side-trails-dev" target="_blank">GitHub</a>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  </div>
</template>
