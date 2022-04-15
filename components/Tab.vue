<template>
    <div
        class="flex justify-between items-center border border-gray-900 dark:border-gray-300 overflow-x-auto"
    >
        <button
            v-for="data in datas"
            :key="data.code"
            :title="data.name"
            :aria-label="data.name"
            type="button"
            @click="switchCode(data.code)"
            class="w-full p-3 text-xs font-bold uppercase whitespace-nowrap rounded-none focus:outline-none hover:bg-gray-900 dark:text-gray-300 hover:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-gray-900"
            :class="{ 'bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900': data.code == checked }"
        >{{ data.name }}</button>
    </div>
</template>

<script>
export default {
    name: "Tab",

    props: {
        datas: {
            type: Array,
            default: [],
        }
    },

    data() {
        return {
            checked: this.datas[0].code
        }
    },

    methods: {
        switchCode(code) {
            this.checked = code
            this.$emit('chageParams', code)
        }
    }
}
</script>