<template>
    <form v-show="isShow" @submit.prevent class="my-4">
        <div class="grid my-4">
            <label :for="'comment_' + post" class="sr-only">Content</label>
            <textarea
                :id="'comment_' + post"
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

<script>
export default {
    name: "CommentForm",

    props: {
        isShow: {
            type: Boolean,
            default: false,
        },
        post: {
            type: String,
            default: undefined
        },
        reply: {
            type: String,
            default: undefined
        }
    },

    data() {
        return {
            content: ''
        }
    },

    methods: {
        /**
         * 评论提交
         */
        onSubmit() {
            let comment = {
                posts: this.post,
                content: this.content,
                replier: this.reply
            };
            this.$axios.get("/check").then(() => {
                this.$axios.post(SERVER_URL.comment, comment).then(() => {
                    this.$axios.get(SERVER_URL.comment.concat("/", this.props.post)).then(res => this.comments = res.data);
                    // 已提交的内容清空
                    this.content = '';
                });
            });
        }
    }
}
</script>