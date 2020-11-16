<template>
    <div class="home">
        <div class="navbar">
            <div class="logo" />
            <div style="display: flex; justify-content: space-around; align-items: center;">
                <!--<div class="categoryBtnContainer" @click="openCatalogueSelection">
                    <img style="width: 100%" src="../assets/category.svg" alt="categories" />
                    <p style="font-size: 1.2rem; margin: 0; color: #555;">Category</p>
                </div>-->
                <div class="profileBtnContainer" @click="openProfile">
                    <img style="width: 100%" src="../assets/user.svg" alt="user" />
                    <p style="font-size: 1.2rem; margin: 0; color: #555;">Contact</p>
                </div>
            </div>
        </div>
        <modal name="profile" width="28%" height="auto" :shiftX="parseFloat(0.7)" :shiftY="parseFloat(0.3)" styles="padding: 2rem 1rem; justify-content: space-around; align-items: center; display: flex; background-color: #fff;">
            <div class="logo" />
            <div>
                <p style="text-align: center; margin: 0;">Jay Jeong</p>
                <p style="text-align: center; margin: 0; color: #aaa; font-size: 0.9rem;">Project Assistant</p>
                <a href="mailto:jay@kotrayvr.com" target="_blank"><p style="text-align: center;">jay@kotrayvr.com</p></a>
                <a href="tel:+17782220766" target="_blank"><p style="text-align: center;">778-222-0766</p></a>
            </div>
            <div class="closeBtn" @click="$modal.hide('profile')">&#10005;</div>
        </modal>
        <div class="businessInfo">
            <h2 style="font-size: 1.7rem; margin-bottom: 0;">Overseas Branching Project</h2>
            <p style="margin-bottom: 0; font-size: 1.3rem;"><b>Business purpose</b></p>
            <p style="font-size: 1.2rem; margin-top: 5px;">&#x25cb; Supporting export and overseas expansion by playing a role as a local branch for small and medium-sized Korean companies that lack the ability to set up branch offices abroad</p>
        </div>
        <div class="main_image">
            <img style="width: 100%" src="../assets/kotra_vancouver_.gif" alt="kotra vancouver" />
        </div>
        <h1 class="title" style="margin-top: 0; text-align:center; font-size: 2.7rem; border:2px solid; background: linear-gradient(#3b8fed, #053f95); color: #fff; padding: 5px 0;">{{title}}</h1>
        <div class="categorySelection">
            <button v-for="(item, index) in allCategories" :key="index" class="cBtn" @click="btnSelect" :style="styleObject(item.color)">{{item.name}}</button>
            <button style="visibility: hidden;" class="cBtn"></button>
        </div>
        <div class="okayBtn" :class="{ active: !!selectedCategories[0] }" @click="confirm">Search
            <img style="margin: auto; width: 1.3rem" src="../assets/search.svg" />
        </div>
        <p style="text-align: center; margin-bottom: 0;">Found {{listItems.length}} items</p>
        <p style="text-align: center; color: red;">*Click a product image or title to see the catalogue.</p>
        <div class="listContainer">
            <div class="category">
                <ListItem v-for="item in listItems" :key="item.uid" :item="item" @openPdf="openPdf"></ListItem>
            </div>
        </div>
        <!--<modal name="category selection" :clickToClose="false" width="70%" :shiftX="0" styles="margin: auto; overflow: unset; box-shadow: unset; align-items: center; display: flex; flex-direction: column; background-color: transparent;">
            <h1 style="text-align: center; color: #fff;">Please select one or more categories that you are interested in.</h1>
            <div class="categorySelection">
                <button v-for="(item, index) in allCategories" :key="index" class="cBtn" @click="btnSelect" :style="styleObject(item.color)">{{item.name}}</button>
            </div>
            <div class="okayBtn" @click="confirm">Okay</div>
        </modal>-->
        <modal name="moreInfo" width="70%" @closed="closeEventTriggered" height="100%" :shiftY="parseInt(0)" :shiftX="parseInt(0)" styles="margin: auto; overflow: hidden; box-shadow: unset; align-items: center; display: flex; flex-direction: column; background-color: transparent;">
            <div style="width: 100%; height: 100%;">
                <div class="pdfTools">
                    <div id="catalogueSelectorContainer">
                        <select class="catalogueSelector" @change="onCatalogueChange">
                            <option value="" disabled selected>Select a catalogue...</option>
                            <option v-for="(item, index) in pdfInfo.catalogueUrls" :value="item" :key="index" v-text="item.split('kotra/')[1]"></option>
                        </select>
                        <h2 v-if="!pdfInfo.isPdfSelected" style="position: absolute; top: 35px; left: 70px; color:red; font-size: 2rem;"></h2>
                    </div>
                    <div class="downloadLinkContainer">
                        <a v-if="pdfInfo.src" class="downloadLink" :href="pdfInfo.src" target="_blank">
                            <img style="width: 100%" src="../assets/download.svg" alt="download icon" />
                            <p style="color: #fff; margin: 0">Download</p>
                        </a>
                    </div>
                    <div class="controller" style="display: flex; justify-content: space-between; align-items: center;">
                        <input v-model.number="pdfInfo.page" style="font-size: 2rem; width: 3rem; text-align: center; border-radius: 5px; background: transparent; color: #fff">
                        <h4 style="margin: 0 17px 0 2px; font-size: 1.8rem; color: #fff;">/ {{pdfInfo.numPages}}</h4>
                        <button @click="prevPage" style="margin-right: 10px; background-color: crimson; cursor: pointer;color: #fff; font-size: 1.8rem;">&#x25c1;</button>
                        <button @click="nextPage" style="background-color: royalblue; cursor: pointer;color: #fff; font-size: 1.8rem;">&#x25b7;</button>
                    </div>
                    <button @click="$modal.hide('moreInfo')" style="cursor: pointer; font-size: 1.9rem; background: transparent; color: #fff; border: none;">&#x2716;</button>
                </div>
                <div v-if="pdfInfo.loadedRatio > 0 && pdfInfo.loadedRatio < 1" style="background-color: royalblue; color: white; text-align: center" :style="{ width: pdfInfo.loadedRatio * 100 + '%' }">{{ Math.floor(pdfInfo.loadedRatio * 100) }}%</div>
                <pdf v-if="pdfInfo.show" ref="pdf" class="pdfContainer" :src="pdfInfo.src" :page="pdfInfo.page" @progress="pdfInfo.loadedRatio = $event" @error="error" @num-pages="pdfInfo.numPages = $event" @link-clicked="pdfInfo.page = $event"></pdf>
            </div>
        </modal>
    </div>
</template>

<script>
    import ListItem from "./ListItem";
    import pdf from 'vue-pdf'
    

    export default {
        name: 'Home',
        data() {
            return {
                pdfInfo: {
                    src: '',
                    show: false,
                    catalogueUrls: [],
                    loadedRatio: 0,
                    page: 1,
                    numPages: 0,
                    isPdfSelected: false
                },
                title: `Korean Company Offerings`,
                selectedCategories: [],
                listItems: [],
                allCategories: [
                    { name: "Home", color: "#093145" },
                    { name: "Technology", color: "#107896" },
                    { name: "Industry", color: "#2478DD" },
                    { name: "Food", color: "#829356" },
                    { name: "Construction", color: "#AD2A1A" },
                    { name: "Cosmetic", color: "#C2571A" },
                    { name: "Natural", color: "#ff0066" },
                    { name: "Stationery", color: "#AABB15" },
                    { name: "Eco-friendly", color: "#FF6666" },
                    { name: "Clothing", color: "blue" },
                    { name: "PPE", color: "#990066" }
                ]
            }
        },
        mounted() {
            //this.$modal.show('category selection')
            //this.pdfInfo.src.promise.then(pdf => {
            //    this.pdfInfo.numPages = pdf.numPages;
            //});
            window.onhashchange = () => {
                if (!window.location.hash) {
                    this.$modal.hide('moreInfo')
                }
            }
        },
        methods: {
            onCatalogueChange(event) {
                document.getElementById("catalogueSelectorContainer").style.transform = "unset"
                this.pdfInfo.page = 1
                this.pdfInfo.isPdfSelected = !!event.target.selectedIndex
                this.pdfInfo.src = event.target.value
            },
            openCatalogueSelection() {
                this.listItems = []
                this.$modal.show('category selection')
                this.title = ""
            },
            openProfile() {
                this.$modal.show('profile')
            },
            closeEventTriggered() {
                this.pdfInfo = {
                    show: false,
                    catalogueUrls: [],
                    loadedRatio: 0,
                    page: 1,
                    numPages: 0,
                    src: ""
                }
                document.getElementsByTagName("body")[0].style.overflow = "unset"
                if (window.location.hash) {
                    window.location.hash = ''
                }
            },
            prevPage() {
                if (this.pdfInfo.page > 1) this.pdfInfo.page--
                document.querySelector(".pdfContainer").scrollTop = 0;
            },
            nextPage() {
                if (this.pdfInfo.page < this.pdfInfo.numPages) this.pdfInfo.page++
                document.querySelector(".pdfContainer").scrollTop = 0;
            },
            openPdf(catalogueUrls) {
                this.pdfInfo.catalogueUrls = catalogueUrls
                this.pdfInfo.show = true
                this.$modal.show('moreInfo')
                document.getElementsByTagName("body")[0].style.overflow = "hidden"
                window.location.hash += "pdfWindow"
            },
            error: function (err) {

                console.log(err);
            },
            styleObject: function (itemColor) {
                return {
                    'border': '1px solid ' + itemColor,
                    '--color': itemColor,
                    '--backgroundColor-hover': itemColor,
                    '--color-hover': '#fff',
                    '--border-selected': '1px solid #fff'
                }
            },
            confirm() {
                this.listItems = []
                this.getData()
            },
            getData() {         
                fetch("data.json")
                    .then(response => response.json())
                    .then(data => {
                        const filterItems = (arr, category) => {
                            return arr.filter(el => el.categories.includes(category))
                        }                       
                        let filteredItems = []
                        for (let i = 0; i < this.selectedCategories.length; i++) {
                            filteredItems = filterItems(data, this.selectedCategories[i])
                            for (let j = 0; j < filteredItems.length; j++) {
                                if(!this.listItems.includes(filteredItems[j])) this.listItems.push(filteredItems[j])
                            }
                        }
                    })
                    //.then(() => {
                        //this.selectedCategories = []
                        //const categoryBtns = document.getElementsByClassName("cBtn")
                        //for (let i = 0; i < categoryBtns.length; i++) {
                        //    categoryBtns[i].classList.remove("selected")
                        //}

                    //    this.closeEventTriggered();
                    //})
            },
            btnSelect(event) {
                const target = event.currentTarget
                const targetText = target.innerText
            
                if (target.classList.contains("selected")) {
                    target.classList.remove("selected")
                    this.selectedCategories = this.selectedCategories.filter(el => el != targetText)
                } else {
                    target.classList.add("selected")
                    this.selectedCategories.push(targetText)
                }
            }
        },
        components: {
            ListItem, pdf
        },
        created() {
            
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo { 
        width: 200px;
        height: 120px;
        background-image: url("../assets/kotra_logo.png" );
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }
    .home {
        padding: 4rem;
        padding-top: 2rem;
        width: 70%;
    }
    .category {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .categorySelection {
        display: flex;
        justify-content: center;
        align-items: center;
        /*padding: 1rem;*/
        flex-wrap: wrap;
        background-color: rgba(0,0,0,0);
        margin-bottom: 1.5rem;
    }
    .cBtn {
        /*border-radius: 10px;*/
        padding: 1rem;
        outline: none;
        width: 22%;
        font-size: 1.3rem;
        color: var(--color);
        cursor: pointer;
        margin: 5px;
    }
    .cBtn:hover {
        color: var(--color-hover);
        background-color: var(--backgroundColor-hover);
    }
    .cBtn.selected {
        border: var(--border-selected);
        box-shadow: 2px 2px 5px rgba(255, 255, 255, .6);
        background-color: var(--backgroundColor-hover);
        color: var(--color-hover);
    }
    .listContainer {
        min-height: 30vh;
    }
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    .okayBtn {
        width: 18.5%;
        margin: auto;
        padding: 0.6rem 0.2rem;
        color: #fff;
        text-align: center;
        font-size: 1.8rem;
        border-radius: 7px;
        background: #aaa;
        cursor: pointer;
        font-family: 'Bebas Neue', cursive;
    }
    .okayBtn.active {
        background: linear-gradient(90deg, rgb(255 0 224) 0%, rgb(225 38 211) 35%, rgb(239 157 220) 100%);
        animation: shake .3s;
        box-shadow: 0 2px 7px rgb(239 157 220);
    }
    @keyframes shake {
        10%, 90% {
            transform: translate3d(0px, 0, 0);
        }

        20%, 80% {
            transform: translate3d(1px, 0, 0);
        }

        30%, 50%, 70% {
            transform: translate3d(-2px, 0, 0);
        }

        40%, 60% {
            transform: translate3d(2px, 0, 0);
        }
    }
    .categoryBtnContainer, .profileBtnContainer {
        width: 36px;
        font-size: 1.4rem;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 10px 20px;
        border-radius: 10px;
        margin: 0 5px;
    }
    .categoryBtnContainer:hover, .profileBtnContainer:hover {
        background-color: #cdfcf9;
        color: #fff;
    }
    #catalogueSelectorContainer {
        transform: translate(20vw, 40vh) scale(1.5); 
        transition: transform 1s ease-out;
    }

    .pdfTools {
        width: 70%;
        top: 15px;
        z-index: 1;
        align-items: center;
        position: fixed;
        justify-content: space-around;
        display: flex;
    }
    .vm--overlay {
        background: rgba(0, 0, 0, 0.9) !important;
    }
    .vm--overlay[data-modal="profile"] {
        background: rgba(0, 0, 0, 0) !important;
    }
    .downloadLinkContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        background-color: transparent;
    }
    .downloadLink {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 40px;
        text-decoration: none;
    }
    .closeBtn {
        border: 1px solid;
        border-radius: 5px;
        background-color: #fff;
        padding: 5px 10px;
        align-self: flex-end;
        margin-left: 1rem;
    }

    .pdfContainer {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        box-sizing: content-box;
        padding-right: 17px;
        background-color: transparent;
        margin-top: 5rem;
    }
    .catalogueSelector {
        width: 15em;
        height: 2.4rem;
        font-size: 1.2rem;
        background: transparent;
        border: 2px solid #fff;
        border-radius: 5px;
        padding: 0 5px;
        color: #fff;
    }
    option {
        color: #000;
    }

    /*responsive*/
    @media (max-width: 600px){
        .home {
            padding: 0;
            width: 94%;
        }
        .logo {
            width: 150px;
            height: 110px;
        }
        .profileBtnContainer {
            width: 28px !important;
        }
        .profileBtnContainer > p {
            font-size: 0.9rem !important;
        }
        .businessInfo > h2 {
            font-size: 1.4rem !important;
        }
        .businessInfo > p {
            font-size: 1.1rem !important;
        }
        .title {
            font-size: 1.6rem !important;
            padding: 10px !important;
        }
        .cBtn {
            width: 30%;
            padding: 10px 5px;
            font-size: 1rem;
        }
        .okayBtn {
            width: 30%;
            font-size: 1.4rem;
        }
        .catalogueSelector {
            width: 13.5rem;
        }
        .downloadLink {
            width: 30px;
        }
        .pdfTools {
            width: 100%;
        }
        .controller {
            position: absolute;
            top: 86vh;
        }
        .vm--modal {
            width: 100% !important;
            left: 0 !important;
            top: 0 !important;
        }
        .controller > input {
            background-color: #fff !important;
            color: #000 !important;
        }
        .controller > h4 {
            text-shadow: 2px 1px 0 #fff;
            color: #000 !important;
            background-color: transparent !important;
        }
        #catalogueSelectorContainer {
            transform: translate(20vw, 40vh) scale(1.3);
            transition: transform 1s ease-out;
        }
    }
</style>

