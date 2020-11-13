<template>
    <div id="footer">
        <div class="foot_logo">
            <img src="../assets/kotra_logo.png" alt="KOTRA">
        </div>
        <div class="foot_util">
                <a href="https://www.kotra.or.kr/foreign/main/KHEMUI010M.html" target="_blank"><p style="margin: 6px 0">Visit KOTRA</p></a>
            <div class="adr">
                <p>
                    780-999 Canada Place, Vancouver, BC, Canada V6C 3E1&nbsp;&nbsp;
                    <!-- <img src="/images/kbc/goolesmap.gif"
                    alt="???????" onclick="javascript:goGooles();"
                    style="cursor: pointer" /> -->
                </p>
                <p>
                    TEL :<span> 1-604-683-1820, 687-7322</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    FAX :<span> 1-604-687-6249</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    EMAIL :<span> info@kotrayvr.com  </span>
                </p>
            </div>
            <p class="copyright">
                Copyright &copy; 2012 <strong>KOTRA</strong> all rights reserved.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        props: [],
        data() {
            return {

            }
        },
        methods: {
        }
    };
</script>

<style scoped>
    #footer {
        overflow: hidden;
        background: url() repeat-x top;
        padding: 4rem;
        padding-top: 2rem;
        width: 70%;
        border-top: 2px solid #ccc;
        box-shadow: 0 -1px 1px #ddd;
    }
    #footer .foot_logo {
        float: left;
        width: 150px;
    }
    #footer .foot_logo img {
        width: 100%;
    }
    #footer .foot_util {
        float: left;
        width: 580px;
        font-size: 11px;
        color: #777;
        border-left: 1px solid #e5e5e5;
        padding: 7px 0px 5px 20px;
    }
    #footer .foot_util ul {
        overflow: hidden;
        margin-bottom: 7px;
    }
    #footer .foot_util ul li:first-child {
        background: none;
    }
    #footer .foot_util ul li {
        float: left;
        background: url() no-repeat;
    }
    #footer .foot_util .adr {
        line-height: 16px;
    }
    p {
        margin: 0;
        padding: 0;
    }
    #footer .foot_util .copyright {
        color: #aaa;
        margin-top: 7px;
        font-family: tahoma;
    }
</style>