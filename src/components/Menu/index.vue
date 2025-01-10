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

        <ui-language-switcher />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuItem from '../MenuItem'
import LanguageSwitcher from '../LanguageSwitcher'
import { useI18n } from 'vue-i18n'

defineOptions({
    name: 'ui-menu',

    components: {
        'ui-menu-item': MenuItem,
        'ui-language-switcher': LanguageSwitcher,
    },
})

const { t } = useI18n()

const items = ref([
    {
        label: t('nav.home'),
        page: '/#home',
        type: 'link',
        name: 'home',
    },
    {
        label: t('nav.meet_studio'),
        page: '/#meet-studio',
        type: 'link',
        name: 'meet_studio',
    },
    {
        label: t('nav.process_services'),
        page: '/#process-services',
        type: 'link',
        name: 'process_services',
    },
    {
        label: t('nav.team'),
        page: '/#team',
        type: 'link',
        name: 'team',
    },
    {
        label: t('nav.contact'),
        page: '/contato',
        type: 'router',
        name: 'contact',
    },
])
</script>

<style lang="stylus" scoped>
@import './style';
</style>
