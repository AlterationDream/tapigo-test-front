
import type { NuxtLink } from '#build/components';
<template>
    <header class="p-2 pb-4">
        <div class="container mx-auto">
            <div class="text-lg gradient-border flow-root">
                <img src="/logo.jpg" class="w-10 h-10 inline-block"> 
                <h2 class="ml-2 inline-block text-balance text-center">Прекрасный тестовый сайт для Tapigo</h2>
            
                <div class="float-right">
                    <NuxtLink to="/" class="float-right text-center p-1 pr-4 color-flower font-medium">Посты</NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts">

</script>

<style>

</style>