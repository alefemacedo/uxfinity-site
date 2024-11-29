export default {
    methods: {
        getAsset(asset) {
            return new URL(`/src/assets/${asset}`, import.meta.url).href
        }
    }
}