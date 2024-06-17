<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from 'vitepress'
import { isActive } from '../composables/utils'
import VPLink from './VPLink.vue'

defineProps<{
  item: DefaultTheme.NavItemWithLink & Record<'desc', string>
}>()

const { page } = useData()
</script>

<template>
  <div class="VPMenuLink">
    <VPLink
      :class="{ active: isActive(page.relativePath, item.activeMatch || item.link, !!item.activeMatch) }"
      :href="item.link"
      :target="item.target"
      :rel="item.rel"
    >
    <li class="inline-block">
      <p class="title" v-html="item.text"></p>
      <span class="desc">{{ item.desc }}</span>
    </li>
    </VPLink>
  </div>
</template>

<style scoped>
.inline-block{
  display: inline-block;
  margin-bottom: 10px;
}
.title{
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
}
.desc{
  font-size: 12px;
}
.VPMenuGroup + .VPMenuLink {
  margin: 12px -12px 0;
  border-top: 1px solid var(--vp-c-divider);
  padding: 12px 12px 0;
}

.link {
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  transition: background-color 0.25s, color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}

.link.active {
  color: var(--vp-c-brand-1);
}
</style>
