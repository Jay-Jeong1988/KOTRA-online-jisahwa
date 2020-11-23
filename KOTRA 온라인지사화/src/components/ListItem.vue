<template>
    <div class="ListItem">
        <div @click="openPdf" class="leftContainer" :style="{'backgroundImage': 'url(' + this.item.thumbnailUrl + ')' }"></div>
        <div class="rightContainer">
            <h1 @click="openPdf" class="productTitle">{{item.product}}</h1>
            <Dropdown :item="item"></Dropdown>
            <div class="productInfo">
                <p class="company"><b>Company:</b> {{item.company}}</p>
                <!--<button v-if="item.catalogueUrls[0]" class="openPdfBtn" @click="openPdf">More Info</button>-->
                <p v-if="item.established"><b>Established Year:</b> {{item.established}}</p>
                <p v-if="item.hsCode"><b>HSCode:</b> {{item.hsCode}}</p>
                <p style="display: inline-block"><b>Category:&nbsp;</b> </p><span v-for="(cat, i) in item.categories" :key="i">{{cat}},&nbsp;</span><br /><br />
                <a :href="item.website" target="_blank"><b>{{item.website}}</b></a>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropdown from './Dropdown'
    export default {
        name: 'ListItem',
        props: ['item'],
        data() {
            return {
                
            }
        },
        methods: {
            openPdf() {
                this.$emit('openPdf',this.item)
            }
        },
        components: {
            Dropdown
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
        width: 70%;
        height: 300px;
        margin: 30px 0;
        overflow: hidden;
    }
    .leftContainer {
        width: 45%;
        /* height: 300px; */
        background-size: cover;
        background-repeat: no-repeat;
        border-radius: 15px 0 0 15px;
        background-position: center;
        cursor: pointer;
    }
    .leftContainer:hover {
        border: 3px solid #3688e5;
        border-style: dashed;
    }
    .rightContainer {
        width: 55%;
        padding: 0rem 2rem;
        overflow-y: scroll;
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
    .productTitle {
        cursor: pointer;
    }
    .productTitle:hover {
        color: #007fff;
        text-decoration: underline;
    }
    @media (max-width: 600px) {
        .ListItem {
            display: block;
            border: 1px solid;
            width: 85%;
            height: 240px;
            margin: 30px 0;
            overflow: initial;
            border-radius: 0;
        }
        .leftContainer {
            width: 100%;
            height: 70%;
            border-radius: 0;
        }
        .rightContainer {
            width: unset;
            overflow-y: initial;
            padding: 0;
        }
        .productInfo {
            display: none;
        }
        .productTitle {
            width: 100%;
            padding: 0 0.5rem;
            margin-bottom: 0;
            font-size: 1.3rem;
        }
    }
</style>