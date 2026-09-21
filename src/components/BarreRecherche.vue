<script setup>
    const props = defineProps(['message'])
</script>

<template>
    <div id="searchbar">
        <div>
            <input v-model="searching" :placeholder="props.message">
            <button @click="$emit('handleClick')">Enter</button>
        </div>
    </div>
</template>

<style>
    #searchbar {
        width: 100%;
        align-content: center;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    #searchbar div {
        width: 70%;
    }
    input {
        width: 90%;
        height: 3em;
        margin: 0 0.5em 0 0;
        font-size: 24px;
    }
    button {
        font-size: 24px;
        height: 3em;
    }
</style>