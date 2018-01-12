<template>
    <div class="entrepreneur aos-all" id="aos-demo">
        <index-header></index-header>
        <navigation-box></navigation-box>
        <div class="banner">
            <!--轮播-->
            <swiper-banner></swiper-banner>
        </div>
        <div>
            <div class="content">
                <div class="team box-width">
                    <h6>精英团队</h6>
                    <div class="team-items">
                        <!-- <div class="clear" :style="{width:(teamItems.length*340)+'px'}">
                            <dl v-for="item in teamItems" style="width:340px;">
                                <dt><img :src="item.src" alt="" :style="{height:'200px'}"></dt>
                                <dd>{{item.name}}</dd>
                            </dl>
                        </div> -->
                        <swiper :options="swiperOption" ref="mySwiper">
                            <swiper-slide v-for="item in teamItems">
                                <div><img :src="item.src" alt=""></div>
                                <div>{{item.name}}</div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
                <div class="team box-width">
                    <h6>项目推荐</h6>
                    <div class="project-items">
                        <ul class="clear">
                            <li v-for="item in itemList"  class="aos-item aos-init aos-animate" data-aos="flip-left">
                                <img :src="item.src" class="aos-item__inner" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="team box-width">
                    <h6>项目推荐</h6>
                    <div class="project-items">
                        <ul class="clear">
                            <li v-for="item in itemList"  class="aos-item" data-aos="flip-left">
                                <img :src="item.src" class="aos-item__inner" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <!-- <div id="aos-demo" class="aos-all"> -->
                <div class="aos-item"  style="width:100px;height:100px;" v-for="item in itemList"  data-aos="flip-left">
                    <div class="aos-item__inner" style="width:100%;height:100%;background-color:tomato;"><h3>12345</h3></div>
                </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
    import IndexHeader from '../components/IndexHeader'
    import NavigationBox from '../components/Navigation'
    import SwiperBanner from '../components/Swiper';
    import 'swiper/dist/css/swiper.css'
    //import '../less/swiper.less'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    //const Hammer = require('hammerjs');
    export default {
        name: 'entrepreneur',
        data(){
            return {
                //精英团队
                teamItems:[
                    {
                        name:'罗大佑',
                        src:'http://static.firefoxchina.cn/img/201801/8_5a55705d6d34c0.jpg'
                    },{
                        name:'李寻欢',
                        src:'http://static.firefoxchina.cn/img/201801/8_5a5572524ef970.jpg'
                    },{
                        name:'腾格尔',
                        src:'http://static.firefoxchina.cn/img/201801/8_5a55712a72dae0.jpg'
                    },{
                        name:'穆里尼奥',
                        src:'http://static.firefoxchina.cn/img/201801/8_5a55712a72dae0.jpg'
                    },{
                        name:'葛公',
                        src:'http://mini.eastday.com/firefoxnews/1515560286_4.jpg'
                    },{
                        name:'霸王',
                        src:'http://mini.eastday.com/firefoxnews/1515560286_4.jpg'
                    },{
                        name:'罗大佑',
                        src:'http://static.firefoxchina.cn/img/201801/8_5a55705d6d34c0.jpg'
                    },{
                        name:'李寻欢',
                        src:'http://static.firefoxchina.cn/img/201801/8_5a5572524ef970.jpg'
                    },{
                        name:'腾格尔',
                        src:'http://static.firefoxchina.cn/img/201801/8_5a55712a72dae0.jpg'
                    }
                ],
                itemList:[
                    {
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon12.png'
                    },{
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon11.png'
                    },{
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon10.png'
                    },{
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon9.png'
                    },{
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon8.png'
                    },{
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon7.png'
                    },{
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon6.png'
                    },{
                        title:'',
                        src:'http://bjchuangyezhe.com/Public/images/icon5.png'
                    }
                ],
                swiperOption:{
                    slidesPerView:5,
                    spaceBetween:20,
                    autoplay:{
                        delay:3000
                    }
                }
            }
        },
        created(){
            AOS.init({
                offset: 200,
                duration: 600,
                easing: 'ease-in-sine',
                delay: 100,
            });

            var itemsCounter = 1;
            var container = document.getElementById('aos-demo');
            
            //addItem();
            //var itemsCounter = 1;
            //var container = document.getElementById('aos-demo');
            console.log('--------------------->>>>>>>>>>>>>>>',99);
            let addItem = () =>  {
                if (itemsCounter > 42) return;
                this.itemList.push(itemsCounter);
                /*var item = document.createElement('div');
                item.classList.add('aos-item');
                item.setAttribute('data-aos', 'fade-up');
                item.innerHTML = '<div class="aos-item__inner"><h3>' + itemsCounter + '</h3></div>';
                console.log(item,container)
                container.appendChild(item);*/
                itemsCounter++;
            }
            //setInterval(addItem, 300);
        },
        computed: {},
        components:{
            IndexHeader,NavigationBox,SwiperBanner,swiper, swiperSlide
        },
        methods: {},
        mounted(){
            /*监听滑动事件*/
            /*let swiper = this.$refs.swiper;
            var hammer = new Hammer(swiper);
            hammer.get('swipe').set({direction: Hammer.DIRECTION_VERTICAL});
            hammer.on('swipe', (e) => {
                if(e.deltaY<0){
                    console.log(e.deltaY)
                    //this.swipeHandle();
                }
            });*/
        },
        destroyed(){

        }
    }
</script>
