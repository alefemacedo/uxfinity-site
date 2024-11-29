<template>
    <contact-template>
        <div class="contact-form">
            <div class="form-description">
                <img class="symbol" src="@/assets/img/main_symbol.png" style="width: 68px" />
                <span class="title w400"> Vamos tirar suas ideias do papel? fala com a gente </span>
                <span class="subtitle w700">Como funciona?</span>
                <div class="instructions">
                    <div v-for="(item, index) of instructions" :key="index" class="item">
                        <div class="label w700">{{ item.label }}</div>
                        <span class="description w400">{{ item.description }}</span>
                    </div>
                </div>

                <div class="footer">
                    <div class="info">
                        <div class="contact w400">
                            <div class="phone">(64) 9 92788588</div>
                            <div class="email">contact@uxfinity.studio</div>
                        </div>

                        <div class="social-media">
                            <a href="https://www.instagram.com/uxfinity.studio/">
                                <img src="@/assets/img/instagram_2.png" />
                            </a>

                            <a href="https://www.linkedin.com/company/uxfinity-studio/">
                                <img src="@/assets/img/linkedin_2.png" />
                            </a>

                            <a href="https://wa.me/message/QULHAUMMCTTCD1">
                                <img src="@/assets/img/whatsapp_2.png" />
                            </a>
                        </div>
                    </div>

                    <div class="waves">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="886"
                            height="502"
                            viewBox="200 -100 500 400"
                            fill="none"
                        >
                            <g filter="url(#filter0_i_138_772)">
                                <path
                                    class="wave-1"
                                    d="M84.7464 75.2332C14.4701 67.6711 -2.19312 0.196655 -2.19312 0.196655L-2.19269 419.96H839.193C839.193 419.96 753.33 361.107 742.823 330.603C732.316 300.099 778.334 249.419 705.635 237.301C632.937 225.183 693.023 177.735 640.278 144.831C587.534 111.928 495.378 205.39 403.721 139.205C347.573 98.6608 320.927 137.033 273.106 148.175C225.299 159.305 210.805 142.074 183.998 111.314C157.191 80.5546 155.023 82.7953 84.7464 75.2332Z"
                                    fill="url(#paint0_radial_138_772)"
                                />
                            </g>
                            <path
                                class="wave-2"
                                opacity="0.25"
                                d="M-15.3031 6.38811C-9.51089 3.19766 91.9233 -18.0152 123.795 41.6779C155.666 101.371 189.482 102.102 240.675 105.779C291.867 109.445 276.422 110.187 333.407 142.189C390.392 174.191 423.872 157.545 465.411 146.11C506.95 134.664 573.239 162.099 626.237 138.244C679.234 114.401 681.403 153.539 681.403 153.539C681.403 153.539 666.656 187.684 709.524 211.576C752.407 235.467 731.35 263 743.285 306.729C755.219 350.445 871.273 415.192 871.273 415.192H-34.2734L-15.3031 6.38811Z"
                                fill="url(#paint0_radial_138_774)"
                            />
                            <path
                                class="wave-3"
                                opacity="0.25"
                                d="M349.476 13.4443C358.688 29.0962 329.323 44.409 374.531 60.6648C419.739 76.9206 441.509 66.1151 472.209 134.868C502.908 203.622 522.057 223.229 554.418 220.631C586.779 218.033 636.989 220.388 676.112 270.347C715.247 320.299 811.41 295.029 853.974 321.405C896.54 347.765 881.458 397.68 881.458 397.68L498.543 654.517L-72 10.3107C-72 10.3107 1.13663 -12.4735 51.6536 12.5498C102.171 37.5731 109.54 24.1907 142.381 7.57353C175.234 -9.0511 246.427 51.3366 285.878 16.9888C312.12 -5.85829 340.264 -2.20762 349.476 13.4443Z"
                                fill="url(#paint0_radial_138_773)"
                            />

                            <defs>
                                <filter
                                    id="filter0_i_138_772"
                                    x="-2.19312"
                                    y="0.196655"
                                    width="841.386"
                                    height="429.168"
                                    filterUnits="userSpaceOnUse"
                                    color-interpolation-filters="sRGB"
                                >
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                        result="hardAlpha"
                                    />
                                    <feOffset dy="9.40402" />
                                    <feGaussianBlur stdDeviation="11.755" />
                                    <feComposite
                                        in2="hardAlpha"
                                        operator="arithmetic"
                                        k2="-1"
                                        k3="1"
                                    />
                                    <feColorMatrix
                                        type="matrix"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in2="shape"
                                        result="effect1_innerShadow_138_772"
                                    />
                                </filter>
                                <radialGradient
                                    id="paint0_radial_138_772"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(686.079 216.02) scale(840.751 731.765)"
                                >
                                    <stop offset="0.00537634" stop-color="#E591EF" />
                                    <stop offset="1" stop-color="#9E6CEF" />
                                </radialGradient>
                                <radialGradient
                                    id="paint0_radial_138_774"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(316.955 129.174) scale(570.241 496.322)"
                                >
                                    <stop offset="0.00537634" stop-color="#F57AAE" />
                                    <stop offset="1" stop-color="#A476F0" />
                                </radialGradient>
                                <radialGradient
                                    id="paint0_radial_138_773"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(418.508 194.76) rotate(-131.53) scale(347.874 357.147)"
                                >
                                    <stop offset="0.00537634" stop-color="#E591EF" />
                                    <stop offset="1" stop-color="#A476F0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
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

                <label :class="{ error: v$.data.serviceType.$errors.length }" for="service-type">
                    Qual serviço está buscando?
                    <div class="radio-group">
                        <label for="instagram">
                            <input
                                v-model="v$.data.serviceType.$model"
                                type="radio"
                                name="serviceType"
                                value="instagram"
                                id="instagram"
                            />
                            Instagram
                        </label>
                        <label for="recommendation">
                            <input
                                v-model="v$.data.serviceType.$model"
                                type="radio"
                                name="serviceType"
                                value="recommendation"
                                id="recommendation"
                            />
                            Indicação
                        </label>
                        <label for="google">
                            <input
                                v-model="v$.data.serviceType.$model"
                                type="radio"
                                value="google"
                                name="serviceType"
                                id="google"
                            />
                            Google
                        </label>
                        <label for="linkedin">
                            <input
                                v-model="v$.data.serviceType.$model"
                                type="radio"
                                value="linkedin"
                                name="serviceType"
                                id="linkedin"
                            />
                            LinkedIn
                        </label>
                        <label for="other">
                            <input
                                v-model="v$.data.serviceType.$model"
                                type="radio"
                                value="other"
                                name="serviceType"
                                id="other"
                            />
                            Outro
                        </label>
                    </div>
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

                <div class="action">
                    <button :disabled="v$.$invalid" class="send-button" @click="sendEmail">
                        enviar mensagem
                    </button>

                    <img
                        src="@/assets/img/letter_send.png"
                        style="width: 240px; margin-right: 114px"
                    />
                </div>
            </div>

            <ui-confirmation-modal
                :show="showModal"
                :params="params"
                @clear="clearForm"
                @update:show="showModal = $event"
            />
        </div>
    </contact-template>
</template>

<script setup>
import ContactTemplate from '@/templates/Contact'
import ConfirmationModal from './components/ConfirmationModal'

import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

const defaultFormData = {
    name: '',
    email: '',
    serviceType: null,
    message: '',
}

const instructions = [
    {
        label: 'Entre em contato',
        description: 'Estamos felizes que você tenha interesse nos nossos serviço',
    },
    {
        label: 'Retorno rápido',
        description: `Alguém do nosso time vai entrar em contato para agendarmos um papo e
            conhecer melhor o projeto`,
    },
    {
        label: 'Proposta',
        description: `Aqui, apresentamos para você como nossa empresa vai trabalhar na sua
            ideia e oferecemos uma proposta para seu negócio.`,
    },
    {
        label: 'Curtiu?',
        description: 'Aqui começamos a transformar a experiência do seu negócio!',
    },
]

defineOptions({
    name: 'ui-contact',

    components: {
        'ui-confirmation-modal': ConfirmationModal,
        ContactTemplate,
    },
})

const form = reactive({
    data: { ...defaultFormData },
})
const validType = (value) =>
    ['recommendation', 'instagram', 'linkedin', 'other', 'google'].includes(value)
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
    params.value = { ...form.data }

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
