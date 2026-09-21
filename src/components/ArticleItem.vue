<script setup>
    const props = defineProps(['artist', 'title', 'album'])
</script>

<template>
    <div>
        <h2>{{ props.title }}</h2>
        <h3>{{ props.artist }}</h3>
        <p>"{{ props.album }}"</p>
    </div>
</template>

<style>
    div {
        display: block;
        align-items: center;
        flex-direction: column;
    }

    h2 {
        color: rgb(239, 243, 243);
        font-size: 40px;
    }

    h3 { font-size: 30px;}

    p { font-size: 20px; }
</style>