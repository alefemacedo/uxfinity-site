<template>
    <div class="footer">
        <div class="contact-info">
            <div class="info">
                <div class="title w600">Chega de conversa, vamos construir algo juntos!</div>

                <div class="contact w400">
                    <div class="phone">(64) 9 92788588</div>
                    <div class="email">contact@uxfinity.studio</div>
                </div>
            </div>

            <div class="social-media">
                <a href="https://www.instagram.com/uxfinity.studio/">
                    <img src="@/assets/img/instagram_white_2.png" />
                </a>

                <a href="https://www.linkedin.com/company/uxfinity-studio/">
                    <img src="@/assets/img/linkedin_white_2.png" />
                </a>

                <a href="https://wa.me/message/QULHAUMMCTTCD1">
                    <img src="@/assets/img/whatsapp_white_2.png" />
                </a>
            </div>
        </div>

        <div class="quote">
            <div class="text">
                <span class="w275"> Vamos conversar </span>
            </div>
            <img src="@/assets/svg/circled_text.svg" class="circled-text" />
        </div>

        <img src="@/assets/svg/footer_boxes.svg" class="footer-boxes" />
    </div>
</template>

<script setup>
defineOptions({
    name: 'ui-footer',
})
</script>

<style lang="stylus" scoped>
@import './style.styl';
</style>
