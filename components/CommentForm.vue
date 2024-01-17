<template>
    <div v-if="showForm">
        <form @submit.prevent="onSubmit" class="py-2">
            <input type="text" v-model="state.text" placeholder="Напечатайте отзыв" class="border rounded-md mr-2 px-2" />
            <input type="hidden" v-model="state.post_id" />
            <input type="hidden" v-model="state.comment_id" />
            <button type="submit" class="text-sm border rounded-sm mr-2 px-2">Отправить</button>
            <button @click="showForm = !showForm"  class="text-sm border rounded-sm px-2">Закрыть</button>
        </form>
    </div>
    <div v-else class="text-sm">
        <a v-if="commentId" @click="showForm = !showForm" class="text-pink-400 hover:text-pink-500 cursor-pointer">Ответить</a>
        <a v-else @click="showForm = !showForm" class="text-pink-400 hover:text-pink-500 cursor-pointer">Добавить новый отзыв</a>
    </div>
</template>

<script lang="ts">
    import type { FormError, FormSubmitEvent } from '#ui/types'

    export default {
        props: ['postId', 'commentId'],
        data() {
            let state = reactive({
                text: undefined,
                post_id: this.postId,
                comment_id: this.commentId,
            })
            return {
                showForm: false,
                state: state,
                validate: (state: any): FormError[] => {
                    const errors = []
                    if (!state.post_id) errors.push({ path: 'post_id', message: 'Не указан!' })
                    if (!state.text) errors.push({ path: 'text', message: 'Введите текст отзыва!' })
                    return errors
                },
                onSubmit:async (event) => {
                    event.preventDefault;
                    //const formData = new FormData(event.target as HTMLFormElement);
                    console.log(toRaw(state))
                }
            }
        }, 
    }
</script>