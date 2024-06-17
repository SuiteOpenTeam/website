<script lang="ts" setup>
import type { DefaultTheme } from 'vitepress/theme'
import { useData } from 'vitepress'
import VPLink from './VPLink.vue'
import { isActive } from '../composables/utils';

defineProps<{
  item: DefaultTheme.NavItemWithLink & Record<'desc', string>
}>()

const { page } = useData()
</script>

<template>
  <VPLink
    :class="{
      VPNavBarMenuLink: true,
      active: isActive(
        page.relativePath,
        item.activeMatch || item.link,
        !!item.activeMatch
      )
    }"
    :href="item.link"
    :noIcon="item.noIcon"
    :target="item.target"
    :rel="item.rel"
    tabindex="0"
  >
    <li class="inline-block">
      <p class="title" v-html="item.text"></p>
      <span class="desc">{{ item.desc }}</span>
    </li>
    
  </VPLink>
</template>

<style scoped>
.inline-block{
  display: inline-block;
}
.title{
  font-size: 14px;
  font-weight: 500;
  font-size: 16px;
}
.VPNavBarMenuLink {
  display: flex;
  align-items: center;
  padding: 0 12px;
  line-height: var(--vp-nav-height);
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  transition: color 0.25s;
}

.VPNavBarMenuLink.active {
  color: var(--vp-c-brand-1);
}

.VPNavBarMenuLink:hover {
  color: var(--vp-c-brand-1);
}
</style>
