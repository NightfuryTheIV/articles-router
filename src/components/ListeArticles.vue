<script setup>
    import { ref } from 'vue';
    import ArticleItem from './ArticleItem.vue';
    import BarreRecherche from './BarreRecherche.vue';

    const articles = ref([
        {id: 1, artist: "Anri", title: "Remember Summer Days", album: "Timely!!"},
        {id: 2, artist: "AJR", title: "World's Smallest Violin", album: "OK ORCHESTRA"},
        {id: 3, artist: "Dua Lipa", title: "Levitating", album: "Future Nostalgia"},
        {id: 4, artist: "Post Malone & Swae Lee", title: "Sunflower", album: "Spider-Man: Into the Spider-Verse"},
        {id: 5, artist: "The Weeknd & Daft Punk", title: "I Feel It Coming", album: "Starboy"},
        {id: 6, artist: "Modjo", title: "Lady - Hear Me Tonight", album: "Modjo (Remastered)"},
        {id: 7, artist: "Electric Light Orchestra", title: "Mr. Blue Sky", album: "Out of the Blue"},
        {id: 8, artist: "Haddaway", title: "What Is Love - 7\" Mix", album: "The Album"},
        {id: 9, artist: "Metro Boomin, A$AP Rocky & Roisee", title: "Am I Dreaming", album: "Spider-Man: Across the Spider-Verse"},
        {id: 10, artist: "Kendrick Lamar & SZA", title: "All The Stars", album: "Black Panther"},
        {id: 11, artist: "Clean Bandit & Zara Larsson", title: "Symphony", album: "What Is Love? (Deluxe)"},
        {id: 12, artist: "John Newman", title: "Love Me Again", album: "Tribute"}
    ])
</script>

<template>

    <div id="bigdiv">
        <BarreRecherche message="Search a song to add to your favorites..."></BarreRecherche>
        <div id="v-for-list">
            <div v-for="value in articles" :key="value.id">
                <ArticleItem :artist="value.artist" :album="value.album" :title="value.title"></ArticleItem>
            </div>
        </div>
    </div>

</template>

<style>
    @property --w_raw {
    syntax: '<length>';
    inherits: true;
    initial-value: 100vw;
    }

    @property --h_raw {
    syntax: '<length>';
    inherits: true;
    initial-value: 100vh;
    }

    #bigdiv {
        width: var(--w_raw);
    }

    #v-for-list {
        margin: 5em 0 0 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        width: 100%;
    }

    #v-for-list div {
        min-height: 5em;
        margin: 0.2em;
    }
</style>