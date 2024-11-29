<template>
    <div class="body">
        <div class="logo">
            <img src="@/assets/img/main_logo_v1.png" />
        </div>

        <div class="content">
            <div class="stars">
                <img src="@/assets/img/stars.png" />
            </div>
            <img src="@/assets/img/planet_1.png" class="planet-1" />
            <img src="@/assets/img/planet_2.png" class="planet-2" />

            <div class="title">
                <span class="label w500">Ops! Este site está em construção!</span>
            </div>

            <div class="countdown">
                <div class="countdown-title w400">contagem regressiva</div>

                <div class="countdown-timer">
                    <div class="timer w700">
                        <div class="days">
                            <span class="days-counter">{{ days }}</span>
                            <span class="days-label">dias</span>
                        </div>

                        <div class="hours">
                            <span class="hour-counter">{{ hours }}</span>
                            <span class="hour-label">horas</span>
                        </div>

                        <div class="minutes">
                            <span class="min-counter">{{ minutes }}</span>
                            <span class="min-label">minutos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer">
            <img src="@/assets/img/wave.png" class="wave" />

            <div class="social-media">
                <a href="https://www.instagram.com/uxfinity.studio/">
                    <img src="@/assets/img/instagram_white.png" />
                </a>
                <a href="https://www.linkedin.com/company/uxfinity-studio/">
                    <img src="@/assets/img/linkedin_white.png" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue'

defineOptions({
    name: 'ui-in-construction',
})

const endDate = new Date('11/28/2024 23:59:59')
let timeDiff = ref(endDate.getTime() - new Date().getTime())

setInterval(() => {
    timeDiff.value = endDate.getTime() - new Date().getTime()
}, 1000)

let days = computed(() => {
    return Math.floor(timeDiff.value / (1000 * 3600 * 24))
})

let hours = computed(() => {
    return Math.floor(timeDiff.value / (1000 * 3600)) - days.value * 24
})

let minutes = computed(() => {
    return Math.floor(timeDiff.value / (1000 * 60)) - (days.value * 24 * 60 + hours.value * 60)
})
</script>

<style lang="stylus" scoped>
@import "./style.styl";
</style>
