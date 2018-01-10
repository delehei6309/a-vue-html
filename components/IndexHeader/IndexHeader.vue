<template>
    <div class="index-header">
        <div class="header-content">
            <div class="header-top">
                <div class="box-width clear">
                    <div class="">欢迎来到欢迎来到创业者集团官方网站！</div>
                    <div class="right clear right-items">
                        <div class="item">返回首页</div>
                        <div class="item">设为首页</div>
                        <div class="item">加入收藏</div>
                        <div class="other clear">
                            <div @mouseenter="weixinShow = true" @mouseleave="weixinShow = false">
                                <i class="iconfont icon-weixin"></i>
                                <img v-show="weixinShow" class="weixin-code" src="http://bjchuangyezhe.com/Public/images/shouji.png" alt="">
                            </div>
                            <div><i class="iconfont icon-sina"></i></div>
                            <div><i class="iconfont icon-qq"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="box-width clear">
                    <div class="logo"><img src="http://bjchuangyezhe.com/Public/images/logo.png" alt=""></div>
                    <div class="right clear nav-right">
                        <ul class="clear">
                            <li>安全高效<br>SECURITY</li>
                            <li>保密隐私<br>SECRECY</li>
                            <li>售后保障<br>SERVICE</li>
                        </ul>
                        <div class="right telephone-box">
                            <h6>全国服务热线</h6>
                            <p>400-700-8918</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import './index-header.less';
    export default {
        name: 'index-header',
        data(){
            return {
                weixinShow:false,
                smallLinks:[
                    {
                        link:'',
                        text:'加入收藏'
                    },{
                        link:'',
                        text:'设为首页'
                    },{
                        link:'',
                        text:'返回首页'
                    }
                ]
            }
        },
        created(){
        },
        computed: {},
        methods: {},
        destroyed(){

        }
    }
</script>
