<template>
    <div class="content-wrapper">
        <h1>{{ task.title }}</h1>
        <section v-for="(offer, index) in task.offers" :key="index" class="task-wrapper">
            <h2 v-html="offer.subtitle"></h2>
            <p>{{ offer.description }}</p>
            <div v-if="offer.contentList">
                <h3>Was ich anbiete:</h3>
                <ul>
                    <li v-for="content in offer.contentList" :key="content.context">
                        {{ content.context }}{{ content.description }}
                    </li>
                </ul>
            </div>
            <div v-if="offer.content" v-for="content in offer.content">
                <h3 v-if="content.subtitle">{{ content.subtitle }}</h3>
                <p v-for="text in content.text">{{ text }}</p>
            </div>
            <div v-for="text in offer.closingText">
                <h3 v-if="text.header">{{ text.header }}</h3>
                <p>{{ text.paragraph }}</p>
            </div>
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
    padding: 0 1.5rem 1.5rem;

    h1{
        overflow-wrap: break-word;
    }
}

.task-wrapper {
    padding: 32px 0 0;
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>