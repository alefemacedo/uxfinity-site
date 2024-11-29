<template>
    <div class="header-content">
        <img v-if="waveTop" src="@/assets/img/wave_top.png" class="wave-top" />

        <div class="sidebar">
            <button class="sidebar-button" @click="emit('toggleNavbar', true)">
                <img src="@/assets/svg/menu_icon.svg" />
            </button>
        </div>

        <img :src="getAsset(logo)" class="logo" />

        <div v-if="showContactButton" class="contact-button">
            <router-link to="/contato">conte sua ideia pra gente</router-link>
        </div>
    </div>
</template>

<script setup>
import Menu from '@/components/Menu'
import helpers from '@/mixins/helpers'

defineOptions({
    name: 'ui-header',

    components: {
        'ui-menu': Menu,
    },

    mixins: [helpers],
})

defineProps({
    waveTop: {
        type: Boolean,
        required: false,
        default: true,
    },

    logo: {
        type: String,
        required: false,
        default: 'img/logo_branca.png',
    },

    showContactButton: {
        type: Boolean,
        required: false,
        default: true,
    },
})

const emit = defineEmits(['toggleNavbar'])
</script>

<style lang="stylus" scoped>
@import './style';
</style>
