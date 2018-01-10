<template>
    <div class="swiper-box" @mouseenter="mouseenter" @mouseleave="mouseleave">
        <!-- css3实现 -->
        <div class="swiper-wrap clear" 
            :style="{
                width:swiperItems.length*100+'%',
                transform:`translateX(${-(100*activeIndex/swiperItems.length)}%)`,
                transitionDuration:`${duration}ms`
            }">
            <div v-for="item in swiperItems" :style="{width:(100/swiperItems.length)+'%'}">
                <img :src="item.src" :alt="item.title">
            </div>
        </div>
        <div>{{activeIndex}}</div>
        <div class="navigation">
            <span class="navigation-prev" @click.stop="prev">‹</span>
            <span class="navigation-next" @click.stop="next">›</span>
        </div>
    </div>
</template>

<script>
    import './swiper.less';
    export default {
        name: 'swiper-demo',
        props:['scrollItems','viewSize'],
        data(){
            return {
                swiperItems:[
                    {
                        title:'马云',
                        src:'http://bjchuangyezhe.com/Public/uploads/Ad/2017-09-14/59b9f6aa27724.JPG'
                    },{
                        title:'王健林',
                        src:'http://bjchuangyezhe.com/Public//uploads/Ad/2017-09-30/59cf2acf7e92b.jpg'
                    },{
                        title:'马化腾',
                        src:'http://bjchuangyezhe.com/Public//uploads/Ad/2017-09-14/59b9e8963ae25.JPG'
                    }
                ],
                //translateX:-25,
                activeIndex:1,
                duration:0,
                config:{
                    duration:800,//默认动画持续时间0.8s;
                    time:1800,//默认动画间隔时间1.8s;
                },
                suspend:false,//true 为暂停;
            }
        },
        created(){
            this.duration = this.config.duration;
            this.time = this.config.time;
            this.swiperItems.push(this.swiperItems[0]);
            this.swiperItems.unshift(this.swiperItems[this.swiperItems.length-1]);
            this.animate();
        },
        components: {
           
        },
        mounted(){

        },
        computed: {},
        methods: {
            animate(){
                //css3实现方法
                this.timer = setInterval(this.next,this.config.time);
            },
            mouseenter(){
                clearInterval(this.timer);
            },
            mouseleave(){
                this.animate();
            },
            prev(){
                if(!this.setTimeFun(this.config.duration)){
                    return false;
                }
                if(this.activeIndex == 1){
                    this.duration = 0;
                    this.activeIndex = this.swiperItems.length-1
                    setTimeout(()=>{
                        this.duration = this.config.duration;
                        this.activeIndex -- ;
                    },100);
                    return false;
                }
                this.duration = this.config.duration;
                this.activeIndex -- ;
            },
            next(){
                if(this.activeIndex == (this.swiperItems.length-1)){
                    this.duration = 0;
                    this.activeIndex = 1;
                    setTimeout(()=>{
                        this.duration = this.config.duration;
                        this.activeIndex ++ ;
                    },100);
                    return false;
                }else{
                    this.duration = this.config.duration;
                    this.activeIndex ++ ;
                }
            },
            //搞一个某时间段内不可点击的fun
            setTimeFun(timeLong){
                if(this.time0){
                    let time2 = new Date().getTime();
                    if(time2>this.time1){
                        this.time0 = 0;
                        this.time1 = 0;
                        return true;
                    }
                    return false;
                }else{
                    this.time0 = new Date().getTime();
                    this.time1 = this.time0 + timeLong;
                    return true;
                }
            }
        },
        destroyed(){

        }
    }
</script>