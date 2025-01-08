<template>
    <div class="content-wrapper">
        <section v-for="(quali, index) in qualification" :key="index" class="task-wrapper">
            <h1>{{ quali.title }}</h1>
            <ul>
                <li v-for="content in quali.content">
                    <h3>{{ content.subtitle }}</h3>
                    <p><b>{{content.pre}}</b> {{ content.since }}</p>
                    <ul v-if="content.keyPoints">
                        <li v-for=" point in content.keyPoints">
                            {{ point }}
                        </li>
                    </ul>
                    <div v-if="content.additional">
                        <p v-for="point in content.additional">{{ point }}</p>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    qualification: {
        type: Object,
        required: true
    } 
})

</script>

<style lang="scss" scoped>
div.content-wrapper {
    color: var(--font-color);
    width: calc(100% - 3rem);
    padding: 0 1.5rem 1.5rem;
    display: flex;
    justify-content: space-around;

    h1{
        overflow-wrap: break-word;
    }

    img{
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

@media (max-width:750px) {
    div.content-wrapper{
        display: block!important;
    }
}
</style>