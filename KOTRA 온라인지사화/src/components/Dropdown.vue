<template>
    <div id="dropdown">

        <header class="header">
            <nav class="header__nav">
                <ul class="header__navbar">
                    <li class="header__item">
                        <a class="header__link">
                            <transition name="slide-fade">
                                <!-- Header Navigation Menu Icons -->
                                <button class="header--button" v-if="show" key="on" @click="show = false">
                                    <div class="header--icon">&#9650;</div>
                                </button>
                                <button class="header--button" v-else key="off" @click="show = true">
                                    <div class="header--icon">&#9660;</div>
                                </button>
                            </transition>
                        </a>
                        <!-- Dropdown Menu -->
                        <transition name="dropdown">
                            <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
                                <ul class="dropdown__menu-nav">
                                    <li class="dropdown__menu-item">
                                        <a href="#" class="dropdown__menu-link" title="Account">
                                            <div class="dropdown__menu-svg">
                                                <b>Company:&nbsp;</b>
                                            </div>
                                            <div class="dropdown__menu-text">{{item.company}}</div>
                                        </a>
                                    </li>
                                    <li class="dropdown__menu-item">
                                        <a href="#" class="dropdown__menu-link" title="Personal info">
                                            <div class="dropdown__menu-svg">
                                                <b>Established:&nbsp;</b>
                                            </div>
                                            <div class="dropdown__menu-text">{{item.established}}</div>
                                        </a>
                                    </li>
                                    <li class="dropdown__menu-item">
                                        <a href="#" class="dropdown__menu-link" title="Privacy">
                                            <div class="dropdown__menu-svg">
                                                <b>HS Code:&nbsp;</b>
                                            </div>
                                            <div class="dropdown__menu-text">{{item.hsCode}}</div>
                                        </a>
                                    </li>
                                    <li class="dropdown__menu-item">
                                        <a href="#" class="dropdown__menu-link" title="Data &amp; personalization">
                                            <div class="dropdown__menu-svg">
                                                <b>Website:&nbsp;</b>
                                            </div>
                                            <div class="dropdown__menu-text">{{item.website}}</div>
                                        </a>
                                    </li>
                                    <li class="dropdown__menu-item">
                                        <a href="#" class="dropdown__menu-link" title="People &amp; sharing">
                                            <div class="dropdown__menu-svg">
                                                <b>Category:&nbsp;</b>
                                            </div>
                                            <div class="dropdown__menu-text">
                                                <p style="margin: 0; display: inline-block"> </p><span v-for="(cat, i) in item.categories" :key="i">{{cat}},&nbsp;</span><br /><br />
                                            </div>
                                        </a>
                                    </li>
                                    <!--<li class="dropdown__menu-item">
                                        <a href="#" class="dropdown__menu-link" title="Subscriptions">
                                            <div class="dropdown__menu-svg">
                                                <svg viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M528 31H48C21.5 31 0 52.5 0 79v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V79c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V79c0-8.8 7.2-16 16-16h480c8.8 0 16 7.2 16 16v352zm-352-68v8c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v8c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z" />
                                                </svg>
                                            </div>
                                            <div class="dropdown__menu-text">Subscriptions</div>
                                        </a>
                                    </li>-->                                  
                                </ul>
                            </div>
                        </transition>
                    </li>
                </ul>
            </nav>
        </header>

    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        data() {
            return {
                show: false
            }
        },
        props: ['item']
    }

</script>

<style scoped>
    :root {
        --font-primary: 'Open Sans', sans-serif;
        --color-gray: #dadce0;
    }
    *,
    ::after,
    ::before {
        box-sizing: border-box;
    }

    body {
        font-size: 1rem;
        -webkit-text-size-adjust: 100%;
        font-family: var(--font-primary);
        overflow: hidden;
    }
    ul {
        list-style: none;
    }
    hr {
        border: 0;
        height: 0;
        margin: 1.5rem 0;
        border-top: 1px solid var(--color-gray);
    }
    #dropdown {
        /*transform: translateY(-41px);*/
    }

    @media(min-width: 601px) {
        #dropdown {
            display: none;
        }
    }
    .header {
        padding: 0;
    }

    .header__nav{
        position: relative;
    }

    .header__navbar {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin: 0;
    }

    .header__item {
        padding: 1rem;
    }

    .header--icon {
        font-size: 1.3rem;
    }

    .header--button {
        top: 0;
        right: 7px;
        position: absolute;
        margin: 0;
        padding: 0;
        color: gray;
        cursor: pointer;
        border: 1px solid transparent;
        background-color: transparent;
    }

    .header--button:focus{
        outline: 0;
    }
    .dropdown__menu {
        top: 100%;
        right: -1px;
        position: absolute;
        z-index: 10;
        width: 100%;
        overflow-y: auto;
        background-color: white;
        border: 1px solid;
        border-top: none;
        background-clip: padding-box;
        box-sizing: content-box;
    }

    .dropdown__menu-link {
        display: flex;
        /*align-items: center;*/
        justify-content: flex-start;
        text-decoration: none;
        color: rgba(0, 0, 0, 0.6);
        padding: 0.3rem 0 0.3rem 0.8rem;
        margin-top: 0.2rem;
        margin-bottom: 0.2rem;
        border-radius: 0 50px 50px 0;
    }

    .dropdown__menu-link:hover{
        color: #17bf63;
        background-color: rgba(79, 192, 141, 0.1);
    }

    .dropdown__menu.active * {
        font-size: 0.9rem;
    }

    .dropdown__menu-nav {
        list-style: none;
        padding: 0;
    }

    .dropdown__menu-svg {
   
    }

    .dropdown__menu-text {
        font-weight: 300;
        margin-left: 0.3rem;
        margin-right: 1rem;
        word-break: break-all;
    }


    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.6s;
    }

    .slide-fade-enter,
    .slide-fade-leave-active {
        opacity: 0;
    }

    .slide-fade-enter {
        transform: translateX(31px);
    }

    .slide-fade-leave-active {
        transform: translateX(-31px);
    }

    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: all 1s;
    }

    .dropdown-enter,
    .dropdown-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    .main {
        margin: 6rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .main__subtitle {
        color: #4f5959;
        font-weight: 100;
        margin-bottom: 2rem;
    }

    .main__link {
        margin-right: 1.5rem;
        display: inline-block;
    }

    .main__link:last-child {
        margin-right: 0;
    }

    .main__svg {
        width: 2rem;
        height: 2rem;
        opacity: 0.6;
        color: #94a2b0;
    }

    .main__svg:hover{
        color: #ffad1f;
    }

</style>