<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  tag?: string
  href?: string
  noIcon?: boolean
  target?: string
  rel?: string
}>()

const EXTERNAL_URL_RE = /^(?:[a-z]+:|\/\/)/i;

const tag = computed(() => props.tag ?? (props.href ? 'a' : 'span'))
const isExternal = computed(
  () =>
    (props.href && EXTERNAL_URL_RE.test(props.href)) ||
    props.target === '_blank'
)
</script>

<template>
  <component
    :is="tag"
    class="VPLink"
    :class="{
      link: href,
      'vp-external-link-icon': isExternal,
      'no-icon': noIcon
    }"
    :href="href"
    :target="target ?? (isExternal ? '_blank' : undefined)"
    :rel="rel ?? (isExternal ? 'noreferrer' : undefined)"
  >
    <slot />
  </component>
</template>
<style scoped>

</style>