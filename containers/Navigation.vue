/**
 *                             _ooOoo_
 *                            o8888888o
 *                            88" . "88
 *                            (| -_- |)
 *                            O\  =  /O
 *                         ____/`---'\____
 *                       .'  \\|     |//  `.
 *                      /  \\|||  :  |||//  \
 *                     /  _||||| -:- |||||-  \
 *                     |   | \\\  -  /// |   |
 *                     | \_|  ''\---/''  |   |
 *                     \  .-\__  `-`  ___/-. /
 *                   ___`. .'  /--.--\  `. . __
 *                ."" '<  `.___\_<|>_/___.'  >'"".
 *               | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *               \  \ `-.   \_ __\ /__ _/   .-` /  /
 *          ======`-.____`-.___\_____/___.-`____.-'======
 *                             `=---='
 *          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 *                     佛祖保佑        永无BUG
 *            佛曰:
 *                   写字楼里写字间，写字间里程序员；
 *                   程序人员写程序，又拿程序换酒钱。
 *                   酒醒只在网上坐，酒醉还来网下眠；
 *                   酒醉酒醒日复日，网上网下年复年。
 *                   但愿老死电脑间，不愿鞠躬老板前；
 *                   奔驰宝马贵者趣，公交自行程序员。
 *                   别人笑我忒疯癫，我笑自己命太贱；
 *                   不见满街漂亮妹，哪个归得程序员？
*/
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
