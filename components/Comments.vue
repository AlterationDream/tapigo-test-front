
<template>
    <div v-if="commentsGrouped">
        <div v-for="comment in commentsGrouped" class="pb-2">
            <div class="border rounded-xl inline-block px-4 py-1 bg-amber-100">{{ comment.text }}</div>
            <div v-if="comment.children" class="border-l-2 pl-2">
                <div v-for="commentChild in comment.children">
                    <div class="border rounded-xl inline-block px-4 py-1">{{ commentChild.text }}</div>
                </div>
            </div>
            <CommentForm :commentId="comment.id" :postId="postId"/>
        </div>
    </div>
    <p v-else>Загрузка отзывов...</p>
</template>

<script setup lang="ts">
    const props = defineProps({
        comments: Array,
        postId: Number,
    })

    const { comments, postId } = toRefs(props)
    let commentsGrouped = false;

    if (!process.server) {
        let json = comments.value;
        
        for (const comment of json) {
            if (comment.parent_id) {
                json.find(parent => parent.id == comment.parent_id).children = json.find(parent => parent.id == comment.parent_id).children ?? [];
                json.find(parent => parent.id == comment.parent_id).children.push(comment)
            }
        }

        commentsGrouped = json.filter((comment) => {
            return comment.parent_id == null
        });;
    }
</script>