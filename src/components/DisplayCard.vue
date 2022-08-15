<template>
        <h1>hello</h1>
    <div v-for="list of item" :key="list">
        <h3>first-name: {{list.first}}</h3>
        <h3>last-name: {{list.last}}</h3>
        <h3>Password: {{list.password}}</h3>
    </div>
</template>

<script>
export default {
    inject:["item"]
}
</script>

<style>

</style>