<template>
    <form v-show="isShow" @submit.prevent class="my-4">
        <div class="grid my-4">
            <label :for="'comment+' + code" class="sr-only">Content</label>
            <textarea
                :id="'comment+' + code"
                placeholder="请输入评论..."
                v-model="content"
                class="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
            ></textarea>
        </div>

        <div class="flex justify-end">
            <button
                type="submit"
                @click="onSubmit"
                class="px-2 py-1 text-sm transition-colors duration-200 transform border border-gray-300 dark:bg-gray-600 dark:text-gray-300 bg-gray-200 rounded-md focus:outline-none"
            >Commit Comment</button>
        </div>
    </form>
</template>

<script lang="ts" setup>
const props = defineProps({
    isShow: {
        type: Boolean,
        default: false,
    },
    code: {
        type: String,
        default: undefined
    },
    reply: {
        type: String,
        default: undefined
    }
})

let content = ref('')

/**
 * 提交表单
 */
const onSubmit = async () => {
    let comment = {
        posts: props.code,
        content: content.value,
        replier: props.reply
    }
    await $fetch(`/api/check`).then(() => {
        $fetch(`/api/assets/comment`, { method: 'POST', body: comment }).then(() => {
            content.value = ''
        })
    })

}
</script>