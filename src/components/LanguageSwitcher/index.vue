<template>
    <div class="language-switcher">
        <select @change="switchLanguage" :class="theme">
            <option
                v-for="sLocale in supportedLocales"
                :key="`locale-${sLocale}`"
                :value="sLocale"
                :selected="locale === sLocale"
            >
                {{ $t(`locale.${sLocale}`) }}
            </option>
        </select>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

defineOptions({
    name: 'ui-language-switcher',
})

defineProps({
    theme: {
        type: String,
        required: false,
        default: 'light',
    },
})

const { locale } = useI18n()
const supportedLocales = Tr.supportedLocales

async function switchLanguage(event) {
    const newLocale = event.target.value
    await Tr.switchLanguage(newLocale)
}
</script>

<style lang="stylus" scoped>
@import './style.styl'
</style>
