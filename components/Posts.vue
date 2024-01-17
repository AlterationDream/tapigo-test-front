
import type { NuxtLink } from '#build/components';

<script setup lang="ts">
    const { data: posts, pending } = await useLazyFetch('/api/posts');
</script>

<template>
    <div class="p-2">
        <div class="container mx-auto gradient-border p-10 pt-4">
            <h1 v-if="pending" class="text-xl text-center pt-6 h-20">Загрузка...</h1>
            <div v-else>
                <h1 class="text-xl pb-4">Список постов:</h1>
                <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <NuxtLink :to="'/post/' + post.id" v-for="post in posts" class="bg-white rounded-xl border border-gray-300 overflow-hidden pb-4 hover:shadow-xl">
                        <div class="pb-4 min-h-72">
                            <img :src="post.img" class="hover:shadow-md"/>
                        </div>
                        <h2 class="px-4">{{ post.title }}</h2>
                        <p class="px-4">{{ post.short_content }}</p>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>