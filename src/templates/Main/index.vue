<template>
    <div class="header">
        <ui-header @toggle-navbar="toggleNavbar" />
    </div>

    <div class="navbar" :style="navbarStyle">
        <ui-navbar-menu @toggle-navbar="toggleNavbar" />
    </div>

    <div id="body" class="body">
        <slot></slot>

        <ui-footer />
    </div>
</template>

<script setup>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavbarMenu from '@/components/NavbarMenu'

import { computed, ref } from 'vue'

defineOptions({
    name: 'main-template',

    components: {
        'ui-header': Header,
        'ui-footer': Footer,
        'ui-navbar-menu': NavbarMenu,
    },
})

let navbar = ref(false)
const navbarStyle = computed(() =>
    navbar.value ? { transform: 'translateX(0%)' } : { transform: 'translateX(-100%)' },
)

function toggleNavbar(event) {
    navbar.value = event
}
</script>

<style lang="stylus" scoped>
@import './style.styl';
</style>
