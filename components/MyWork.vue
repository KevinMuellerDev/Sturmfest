<template>
    <div class="content-wrapper">
        <h1>{{ task.title }}</h1>
        <section v-for="(offer, index) in task.offers" :key="index" class="task-wrapper">
            <h2 v-html="offer.subtitle"></h2>
            <p>{{ offer.description }}</p>
            <ul v-if="offer.content.length > 1">
                <li v-for="content in offer.content" :key="content.context">
                    {{ content.context }}{{ content.description }}
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})

</script>

<style lang="scss">
div.content-wrapper {
    color: var(--font-color);
    width: calc(100% - 3rem);
    padding: 0 1.5rem;
}

.task-wrapper {
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>