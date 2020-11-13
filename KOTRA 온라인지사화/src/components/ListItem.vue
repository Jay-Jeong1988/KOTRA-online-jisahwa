<template>
    <div class="ListItem">
        <div class="leftContainer" :style="{'backgroundImage': 'url(' + this.item.thumbnailUrl + ')' }"></div>
        <div class="rightContainer">
            <h1 class="title">{{item.product}}</h1>
            <p class="company"><b>Company:</b> {{item.company}}</p>
            <button v-if="item.catalogueUrls[0]" class="openPdfBtn" @click="openPdf">More Info</button>
            <p v-if="item.established"><b>Established Year:</b> {{item.established}}</p>
            <p><b>HSCode:</b> {{item.hsCode}}</p>
            <p style="display: inline-block"><b>Category:&nbsp;</b> </p><span v-for="(cat, i) in item.categories" :key="i">{{cat}},&nbsp;</span><br /><br />
            <a :href="item.website" target="_blank"><b>{{item.website}}</b></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListItem',
        props: ['item'],
        data() {
            return {
                
            }
        },
        methods: {
            openPdf() {
                this.$emit('openPdf',this.item.catalogueUrls)
            }
        }
    };
</script>

<style scoped>
    p {
        margin: 0;
        margin-bottom: 10px;
    }
    .ListItem {
        display: flex;
        justify-content: space-between;
        border: 1px solid;
        border-radius: 15px;
        width: 90%;
        height: 300px;
        margin: 30px 0;
    }
    @media (max-width: 600px){
        .ListItem {
            
        }
    }
    .leftContainer {
        width: 45%;
        /* height: 300px; */
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 15px 0 0 15px;
        background-position: center;
    }
    .rightContainer {
        width: 55%;
        padding: 0rem 2rem;
        overflow: scroll;
    }
    .description {
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .openPdfBtn {
        position: absolute;
        left: 65%;
        font-size: 1.4rem;
    }
</style>