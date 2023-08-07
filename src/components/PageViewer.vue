<template>
    <div class="container">
        <h1>{{ page.pageTitle }}</h1>
        <p>{{ page.content }}</p>
    </div>
</template>

<script>
export default {
    props: ['page']
}
</script>

<!-- Adding the 'scoped' attribute limits the scope of the defined styles to this component -->
<style scoped>

</style>