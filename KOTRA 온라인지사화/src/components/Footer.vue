<template>
    <div id="footer">
        <div class="foot_logo">
            <a href="/"><img src="../assets/kotra_logo.png" alt="KOTRA"></a>
        </div>
        <div class="foot_util">
                <a href="https://www.kotra.or.kr/foreign/main/KHEMUI010M.html" target="_blank" >Visit KOTRA</a>
            <div class="adr" style="margin: 7px 0">
                <p>
                    780-999 Canada Place, Vancouver, BC, Canada V6C 3E1&nbsp;&nbsp;
                </p>
                <p>
                    <span>TEL : 1-604-683-1820, 687-7322</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>FAX : 1-604-687-6249</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <span>EMAIL : jay@kotrayvr.com  </span>
                </p>
            </div>
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
        border-top: 1px solid #ccc;
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
    @media (max-width: 600px){
        #footer {
            padding: 2rem;
            width: 90%;
        }
        .adr span {
            display: block;
        }
    }
</style>