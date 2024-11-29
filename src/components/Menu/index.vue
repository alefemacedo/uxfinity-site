<template>
    <div class="menu">
        <ui-menu-item
            v-for="(item, index) in items"
            :key="index"
            :label="item.label"
            :page="item.page"
            :type="item.type"
            :name="item.name"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from '../MenuItem'

defineOptions({
    name: 'ui-menu',

    components: {
        'ui-menu-item': MenuItem,
    },
})

const items = ref([
    {
        label: 'Início',
        page: '/#home',
        type: 'link',
        name: 'home',
    },
    {
        label: 'Sobre mim',
        page: '/#about',
        type: 'link',
        name: 'about',
    },
    {
        label: 'Cases',
        page: '/#cases',
        type: 'link',
        name: 'cases',
    },
    {
        label: 'Contato',
        page: '/contato',
        type: 'router',
        name: 'contact',
    },
])
</script>

<style lang="stylus" scoped>
@import './style';
</style>
