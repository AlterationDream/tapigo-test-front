
import type { CommentForm } from '#build/components';

import type { routeLocationKey } from 'vue-router';

import type { routeLocationKey } from 'vue-router';
<script setup lang="ts">
    const route = useRoute();
    const { data: post, pending } = await useLazyFetch('/api/posts?id='+route.params.id);
</script>

<template>
    <div class="p-2">
        <div class="container mx-auto gradient-border p-10 pt-4">
            <h1 v-if="pending" class="text-xl text-center pt-6 h-20">Загрузка...</h1>
            <div v-else>
                <h1 class="text-xl pb-2">{{ post.title }}</h1>
                <img :src="post.img" class="max-h-72 pb-2" />
                <p>{{ post.content }}</p>
                <p class="text-sm mt-4 text-right">{{ post.date }}</p>
                <hr />

                <h1 class="pt-4 pb-2">Отзывы:</h1>
                <CommentForm :postId="post.id"/>
                <Comments v-if="post.comments" :postId="post.id" :comments="post.comments" />
                <p v-else >Будь первым, кто оставит отзыв! Не будь букой!</p>
            </div>
        </div>
    </div>
</template>