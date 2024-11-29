<template>
    <div class="menu-item">
        <template v-if="submenus?.length">
            <div class="button" :class="{ selected: arrow }">
                <a v-if="type === 'link'" :href="page" class="w600">{{ label }}</a>
                <router-link v-else :to="page" class="w600">{{ label }}</router-link>
                <span @click="toggleArrow" :class="{ 'height-100': !arrow }">
                    <Icon :icon="arrow ? 'ep:arrow-up-bold' : 'ep:arrow-down-bold'" />
                </span>
            </div>

            <div v-if="arrow" class="submenus">
                <div v-for="(submenu, index) of submenus" :key="index" class="submenu-item">
                    <router-link :to="submenu.page" class="w600">
                        {{ submenu.label }}
                    </router-link>
                </div>
            </div>
        </template>

        <template v-else>
            <a v-if="type === 'link'" :href="page" class="w600">{{ label }}</a>
            <router-link v-else :to="page" class="w600">{{ label }}</router-link>
        </template>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'

const route = useRoute()
const path = computed(() => route.fullPath)
const arrow = ref(false)

defineOptions({
    name: 'ui-menu-item',
})

defineProps({
    label: {
        type: String,
        required: true,
    },
    page: {
        type: String,
        required: true,
    },
    type: String,
    name: {
        type: String,
        required: true,
    },
    /**
     * Submenus para o item de menu
     */
    submenus: {
        type: Array,
        required: false,
        default() {
            return []
        },
    },
})

function toggleArrow() {
    arrow.value = !arrow.value
}
</script>

<style lang="stylus" scoped>
@import "./style";
</style>
