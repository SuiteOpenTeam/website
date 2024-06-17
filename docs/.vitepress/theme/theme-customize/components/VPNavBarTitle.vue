<template>
    <div class="VPNavBarTitle">
      <a
        class="title"
        :href="link"
        :rel="rel"
        :target="target"
      >
        <slot name="nav-bar-title-before" />
        <VPImage v-if="theme.logo" class="logo" :image="theme.logo" />
        <template v-if="theme.siteTitle"><span>{{ theme.siteTitle }}</span></template>
        <template v-else-if="theme.siteTitle === undefined"><span>{{ site.title }}</span></template>
        <slot name="nav-bar-title-after" />
      </a>
    </div>
  </template>
<script setup lang="ts">
import { useData } from 'vitepress';
import { computed } from 'vue';
import VPImage from './VPImage.vue'


const { site, theme } = useData();

const link = computed(() => {
   return typeof theme.value.logoLink === 'string'
    ? theme.value.logoLink
    : theme.value.logoLink?.link
})

const rel = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? undefined
    : theme.value.logoLink?.rel
)

const target = computed(() =>
  typeof theme.value.logoLink === 'string'
    ? undefined
    : theme.value.logoLink?.target
)
</script>
<style scoped>
.title {
  display: flex;
  align-items: center;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: var(--vp-nav-height);
  font-size: 18px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: opacity 0.25s;
  margin-right: 20px;
  text-decoration: none;
}

@media (min-width: 960px) {
  .title {
    flex-shrink: 0;
  }

  .VPNavBarTitle.has-sidebar .title {
    border-bottom-color: var(--vp-c-divider);
  }
}

:deep(.logo) {
  margin-right: 8px;
  height: var(--vp-nav-logo-height);
}
</style>