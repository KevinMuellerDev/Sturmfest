<template>
    <div class="content-wrapper" v-editable="blok">
        <h1>{{ blok?.title }}</h1>
        <img v-if="blok" :src="blok!.image.filename" :alt="blok!.image.alt" />
        <section v-for="(offer, index) in blok?.offers" :key="index" class="task-wrapper">
            <h2 v-html="offer.subtitle"></h2>
            <p>{{ offer.description }}</p>
            <div v-if="offer.contentlist.length > 0">
                <h3>Was ich anbiete:</h3>
                <ul>
                    <li v-for="content in offer.contentlist" :key="content.context">
                        {{ content.context }}{{ content.description }}
                    </li>
                </ul>
            </div>
            <div v-for="text in offer.textblock">
                <h3 v-if="text.header">{{ text.header }}</h3>
                <p>{{ text.paragraph }}</p>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object })
</script>

<style lang="scss">
div.content-wrapper {
    color: var(--font-color);
    width: calc(100% - 3rem);
    padding: 0 1.5rem 1.5rem;

    h1 {
        overflow-wrap: break-word;
    }

    img {
        width: 100%;
        max-width: 300px;
        border-radius: 16px;
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