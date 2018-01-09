<template>
    <div class="navigation">
        <div class="nav-wrap">
            <ul flex>
                <li v-for="item in navigation" @mouseenter="hover(item)" @mouseleave="mouseleave(item)">{{item.title}}</li>
            </ul>
            <div class="nav-hover animate"
                    :style="{left:`${hoverLeft}px`}"></div>
            <!-- <transition name="slide-fade">
                <div class="nav-hover" v-show="show"></div>
            </transition> -->
            
        </div>
        <div>
            <button @click="show = !show">Toggle render</button>
            <transition name="slide-fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
    </div>
</template>

<script>
    import '../less/navigation.less'
    export default {
        name: 'navigation',
        data(){
            return {
                show:0,
                navigation:[
                    {
                        title:'首页',
                        id:1
                    },{
                        title:'英超',
                        id:2
                    },{
                        title:'西甲',
                        id:3
                    },{
                        title:'德甲',
                        id:4
                    },{
                        title:'意甲',
                        id:5
                    },{
                        title:'NBA',
                        id:6
                    },{
                        title:'中超',
                        id:7
                    }
                ],
                hoverLeft:-100
            }
        },
        created(){
        },
        computed: {
        },
        methods: {
            hover(item){
                this.show = 1;
                this.hoverLeft = 100*(item.id-1);
            },
            mouseleave(){
                this.show = 0;
                this.hoverLeft = -100;
            }
        },
        destroyed(){

        }
    }
</script>
