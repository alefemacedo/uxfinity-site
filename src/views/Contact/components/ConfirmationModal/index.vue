<template>
    <Transition>
        <div v-if="show" class="modal-mask">
            <div class="confirmation-modal">
                <div class="modal-header">
                    <div class="title">Envio de contato</div>
                    <span class="close" @click="close">
                        X
                    </span>
                </div>
                
                <div class="modal-content">
                    <span v-if="loading" class="sending">
                        Enviando...
                    </span>

                    <div v-else class="sended">
                        <span v-if="success" class="success">
                            Enviado com sucesso!
                        </span>

                        <span v-else class="failed">
                            Falha ao enviar.
                        </span>
                    </div>

                    <div ref="success-mark" class="circle-loader" :class="{ 'load-complete': loaded }">
                        <div ref="checkmark" class="checkmark draw"></div>
                    </div>

                    <div ref="error-mark" class="error-mark">
                        <div class="circle-border"></div>
                        <div class="circle">
                            <div class="error"></div>
                        </div>
                    </div>
                </div>
                
                <div class="modal-footer">
                    <div v-if="!loading" class="modal-action-buttons">
                        <button v-if="success" class="close" @click="close">
                            Finalizar
                        </button>

                        <button v-else class="retry" @click="send">
                            Tentar novamente
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </Transition>
</template>

<script setup>
    import { onMounted, ref, useTemplateRef, watch } from 'vue';
    import emailjs from '@emailjs/browser';

    defineOptions({
        name: 'ui-confirmation-modal'
    });

    const props = defineProps({
        show: {
            type: Boolean,
            required: true
        },
        params: {
            type: Object,
            required: true
        }
    });

    const emit = defineEmits(['update:show', 'clear']);

    const success = ref(false);
    const loading = ref(true);
    const loaded = ref(false);
    const checkmark = useTemplateRef('checkmark');
    const successMark = useTemplateRef('success-mark');
    const errorMark = useTemplateRef('error-mark');

    onMounted(() => {
        watch(
            () => props.show,
            (show, prevShow) => {
                if (show !== prevShow && show) {
                    send();
                }
            }
        );
    });

    function close() {
        emit('clear');
        emit('update:show', false);
    }

    function send() {
        if (errorMark.value) errorMark.value.style.display = 'none';
        if (successMark.value) successMark.value.style.display = 'inline';
        loaded.value = false;
        loading.value = true;

        emailjs.send(
            'service_utb4g2w',
            'template_zzhn3le',
            props.params.value,
            { publicKey: '2AjaZnkV5b5D1z3I8' }
        )
        .then(
            () => {
                loaded.value = true;
                if (checkmark.value) checkmark.value.style.display = 'inline';
                loading.value = false;
                success.value = true;
                // console.log('SUCCESS!', response);
            },
            () => {
                loading.value = false;
                if (successMark.value) successMark.value.style.display = 'none';
                if (errorMark.value) errorMark.value.style.display = 'inline';
                // console.log('FAILED...', error);
            }
        );
    }
</script>

<style lang="stylus" scoped>
    @import './style.styl';

</style>