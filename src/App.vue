<template>
    <router-view />
    <!-- <ui-in-construction /> -->
</template>

<script setup>
import InConstruction from '@/components/InContruction'

defineOptions({
    components: {
        'ui-in-construction': InConstruction,
    },
})
</script>
