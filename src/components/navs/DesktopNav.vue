<script setup lang="ts">
import type { NavItem } from '.';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { GitHubIcon, LinkedInIcon } from '@/components/ui/icons';

const props = defineProps<{
  items: NavItem[]
  class?: string
}>()
</script>

<template>
  <NavigationMenu
    :viewport="false"
    :class="cn('relative min-w-full bg-background/90 backdrop-blur border rounded-lg shadow-sm p-1', props.class)"
  >
  <NavigationMenuList>
    <NavigationMenuItem v-for="item in props.items" :key="item.label">
      <NavigationMenuLink as-child :class="navigationMenuTriggerStyle()">
        <a :href="item.href">{{ item.label }}</a>
      </NavigationMenuLink>
    </NavigationMenuItem>
  </NavigationMenuList>
    <a href="/" class="absolute left-2 flex items-center">
      <img src="/logo.svg" alt="Side Trails Software Development logo." class="h-8" />
      <p class="font-bold font-heading mt-0.5">
        Side Trails
      </p>
    </a>
    <div class="absolute right-2 flex items-center gap-1">
      <a
        href="https://www.linkedin.com/in/spencerhaan/"
        target="_blank"
        class="p-1 hover:rounded-lg hover:bg-muted"
        aria-label="LinkedIn profile link."
      >
        <LinkedInIcon :size="20" />
      </a>
      <a
        href="https://github.com/SpencerHaan/side-trails-dev"
        target="_blank"
        class="p-1 hover:rounded-lg hover:bg-muted"
        aria-label="GitHub website repository link."
      >
        <GitHubIcon :size="20" />
      </a>
    </div>
  </NavigationMenu>
</template>
