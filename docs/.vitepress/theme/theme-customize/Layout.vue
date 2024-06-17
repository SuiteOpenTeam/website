<template>
    <div v-if="frontmatter.layout !== false" class="layout" :class="frontmatter.pageClass">
       <slot name="layout-top"></slot>
       <VPNav>
            <template #nav-bar-title-before><slot name="nav-bar-title-before" /></template>
            <template #nav-bar-title-after><slot name="nav-bar-title-after" /></template>
            <template #nav-bar-content-before><slot name="nav-bar-content-before" /></template>
            <template #nav-bar-content-after><slot name="nav-bar-content-after" /></template>
            <template #nav-screen-content-before><slot name="nav-screen-content-before" /></template>
            <template #nav-screen-content-after><slot name="nav-screen-content-after" /></template>
        </VPNav>
        <VPContent>
            <template #page-top><slot name="page-top" /></template>
            <template #page-bottom><slot name="page-bottom" /></template>

            <template #not-found><slot name="not-found" /></template>
        </VPContent>
        <VPFooter />
       <slot name="layout-bottom" />
    </div>
    <Content v-else />
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { useSlots } from 'vue';
import VPNav from './components/VPNav.vue'
import VPFooter from './components/VPFooter.vue'
import VPContent from './components/VPContent.vue';
import './styles/vars.css';
import './styles/base.css';
import './styles/icons.css';
import './styles/utils.css';
import './styles/components/custom-block.css';
import './styles/components/vp-code.css';
import './styles/components/vp-code-group.css';
import './styles/components/vp-doc.css';

const slots = useSlots();
const { frontmatter } = useData();

</script>
<style scoped>
.Layout{
    display: flex;
    flex-direction: column;
    min-height: 100vh; 
}
</style>