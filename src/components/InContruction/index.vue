<template>
    <div class="body">
        <div class="logo">
            <img src="@/assets/img/main_logo_v1.png" />
        </div>

        <div class="content">
            <img src="@/assets/img/stars.png" class="stars" />
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

            <div class="contact-form">
                <div class="form-header">
                    <span class="title w500">
                        Chega de conversa, vamos construir algo juntos!
                    </span>
                    <span class="subtitle">
                        Pronto para dar vida à sua ideia? Se você tem um projeto incrível em mente e
                        precisa de ajuda, conta comigo.
                    </span>
                </div>

                <div class="form">
                    <label :class="{ error: v$.data.name.$errors.length }" for="name">
                        Nome
                        <input v-model="v$.data.name.$model" id="name" type="text" />
                        <div
                            v-for="error of v$.data.name.$errors"
                            :key="error.$uid"
                            class="input-errors"
                        >
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </label>

                    <label :class="{ error: v$.data.email.$errors.length }" for="email">
                        E-mail
                        <input
                            v-model="v$.data.email.$model"
                            id="email"
                            type="email"
                            placeholder="me diz seu melhor e-mail"
                        />
                        <div
                            v-for="error of v$.data.email.$errors"
                            :key="error.$uid"
                            class="input-errors"
                        >
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </label>

                    <label
                        :class="{ error: v$.data.serviceType.$errors.length }"
                        for="service-type"
                    >
                        Qual serviço está buscando?
                        <select v-model="v$.data.serviceType.$model" id="service-type">
                            <option :value="null" disabled selected>
                                Selecione o tipo de serviço
                            </option>
                            <option value="ux">UX</option>
                            <option value="ui">UI</option>
                            <option value="research">Research (Pesquisa)</option>
                            <option value="product_design">Product Design</option>
                        </select>
                        <div
                            v-for="error of v$.data.serviceType.$errors"
                            :key="error.$uid"
                            class="input-errors"
                        >
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </label>

                    <label :class="{ error: v$.data.message.$errors.length }" for="name">
                        Mensagem
                        <textarea
                            v-model="v$.data.message.$model"
                            id="name"
                            type="textarea"
                            placeholder="Me conta um pouco do seu projeto e solicite um orçamento"
                        ></textarea>
                        <div
                            v-for="error of v$.data.message.$errors"
                            :key="error.$uid"
                            class="input-errors"
                        >
                            <div class="error-msg">{{ error.$message }}</div>
                        </div>
                    </label>

                    <button :disabled="v$.$invalid" class="send-button" @click="sendEmail">
                        Enviar
                    </button>
                </div>

                <ui-confirmation-modal
                    :show="showModal"
                    :params="params"
                    @clear="clearForm"
                    @update:show="showModal = $event"
                />
            </div>
        </div>

        <div class="footer">
            <img src="@/assets/img/wave.png" class="wave" />

            <div class="social-media">
                <a href="https://www.instagram.com/ux.abia/">
                    <img src="@/assets/img/instagram_white.png" />
                </a>
                <a href="https://www.linkedin.com/in/%C3%A1bia-bognola-8a638288/">
                    <img src="@/assets/img/linkedin_white.png" />
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import ConfirmationModal from '../ConfirmationModal'

import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

const serviceTypeLabels = {
    ux: 'UX',
    ui: 'UI',
    research: 'Research (Pesquisa)',
    product_design: 'Product Design',
}
const defaultFormData = {
    name: '',
    email: '',
    serviceType: null,
    message: '',
}

defineOptions({
    name: 'ui-in-construction',

    components: {
        'ui-confirmation-modal': ConfirmationModal,
    },
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

const form = reactive({
    data: { ...defaultFormData },
})
const validType = (value) => [...Object.keys(serviceTypeLabels)].includes(value)
const rules = {
    data: {
        name: {
            required: helpers.withMessage('O campo nome não pode ser vazio', required),
        },
        email: {
            required: helpers.withMessage('O campo e-mail não pode ser vazio', required),
            email: helpers.withMessage('O campo e-mail não contém um valor válido', email),
        },
        serviceType: {
            required: helpers.withMessage('O campo tipo de serviço não pode ser vazio', required),
            validType: helpers.withMessage(
                'O campo tipo de serviço apresenta um valor válido',
                validType,
            ),
        },
        message: {
            required: helpers.withMessage('O campo mensagem não pode ser vazio', required),
        },
    },
}
const v$ = useVuelidate(rules, form)
const showModal = ref(false)
const params = reactive({})

function sendEmail() {
    params.value = {
        ...form.data,
        serviceType: serviceTypeLabels[form.data.serviceType],
    }

    showModal.value = true
}

function clearForm() {
    params.value = {}
    form.data = { ...defaultFormData }
    v$.value.$reset()
}
</script>

<style lang="stylus" scoped>
@import "./style.styl";
</style>
