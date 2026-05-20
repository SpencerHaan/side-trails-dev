<script setup lang="ts">
import { cn } from "@/lib/utils"

const props = withDefaults(defineProps<{open: boolean}>(), {open: false})

const lineClass = "absolute bg-foreground rounded w-full h-0.5 top-1/2 left-1/2 -translate-1/2 transition-all duration-300"
</script>

<template>
  <div class="relative w-4 h-4 my-auto">
    <div :class="cn(
      lineClass,
      props.open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'top-1/6',
    )"/>
    <div :class="cn(lineClass, props.open ? 'w-0' : null)" />
    <div :class="cn(
      lineClass,
      props.open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-5/6',
    )"/>
  </div>
</template>
