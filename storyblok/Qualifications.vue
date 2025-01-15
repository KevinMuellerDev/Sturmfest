<template>
    <div class="content-wrapper">
        <section v-for="(quali, index) in blok?.content" :key="quali._uid" class="task-wrapper">
            <h1>{{ quali.title }}</h1>
            <ul>
                <li v-for="content in quali.qualificationmodule || quali.workexperiencemodule">
                    <h3>{{ content.subtitle }}</h3>
                    <p><b>{{content.pre}}</b> {{ content.since }}</p>
                    <ul v-if="content.keyPoints">
                        <li v-for=" point in content.keyPoints">
                            {{ point.paragraph }}
                        </li>
                    </ul>
                    <div v-if="content.employerInfo">
                        <p v-for="point in content.employerInfo">{{ point.paragraph }}</p>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({ blok: Object })
onMounted(() => {
    console.log(props.blok?.content[1]._uid);
    
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