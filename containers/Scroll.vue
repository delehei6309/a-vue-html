<template>
    <div class="scroll" @scroll="scroll">
        <div class="container">
            <div :class="`dom${index}`" class="doms" :ref="`dom${index}`" v-for="(item,index) in items">
                <h2>{{item.title}}</h2>
                <div v-html="text"></div>
            </div>
        </div>
        <div class="navs">
            <ul>
                <li v-for="(item,index) in items" :class="{'active':activeIndex == index}" @click="navChange(index)">{{item.title}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'scroll',
        data(){
            return {
                activeIndex:0,
                items:[
                    {
                        title:'醉打蒋门神',
                        top:0,
                        
                    },{
                        title:'血溅鸳鸯楼',
                        top:0
                    },{
                        title:'大闹飞云浦',
                        top:0
                    },{
                        title:'拳打镇关西',
                        top:0
                    },{
                        title:'九天玄女',
                        top:0
                    },{
                        title:'虎牢关三英战吕布',
                        top:0
                    },{
                        title:'关云长温酒斩华雄',
                        top:0
                    },{
                        title:'赵子龙常山救主',
                        top:0
                    },{
                        title:'假如时间可以重来',
                        top:0
                    },{
                        title:'我本是卧龙岗闲散的人',
                        top:0
                    }
                ],
                text:'武松被发配到孟州。按照规矩，新到的犯人要挨一百杀威棒，要是肯出钱就可以不打。武松是个硬汉子，宁可挨打，绝不出钱。正要打时，有个包着头、吊着胳膊的年轻人在管营相公耳边说了什么，管营就对武松说：“我看你脸色不好，像是有病。”两边拿棍的军汉提醒武松，“这是相公照顾你，你快说有病。”武松偏不领情，“我没病，能吃饭，能喝酒，能走路！”管营笑道：“说这种话就是有病。先寄下这顿杀威棒吧。”武松说：“我不要留下‘寄库棒’，早打了早干净！”<br>老资格的犯人替武松担心：“不打你，不是好意，只怕要害你！”正说着，有个军人给武松送来好酒好菜。武松想：“ 让我吃过了就要来害我了吧？不管它，吃了再说。”吃完了那军人还提来热水让武松洗澡。“洗完澡就要来害我了吧？”但当天晚上没什么动静。以后天天这样服侍。到第五天武松憋不住了，他问那人：“是谁派你来送这送那？”那人说：“是小管营吩咐的。”“小管营？是那个包着头吊着胳膊的年轻人吗？”“正是。”“他为什么要照顾我？”“小管营不许我多说，要过半年才能让你知道。”武松不耐烦了，“快把他请出来和我见面，不然的话，我什么也不吃了！”那小管营叫金眼彪施恩，这时赶紧跑出来拜见武松。原来，东门外有个热闹去处叫快活林，施恩在那里开了家客店，生意不错。谁知新来一位张团练，他带了个狗腿子叫蒋命忠。那蒋命忠九尺多身材，人称“蒋门神”，他凭着武艺高强打伤了施恩，霸占了快活林客店。施恩知道武松是有名的打虎英雄，想请他帮忙夺回客店，但要等武松把身体养好了再说。武松笑了，“让你看看我的身体。”天王堂前有个五百斤的石墩，被武松扔起一丈多高，然后稳稳接住。施恩这才放了一百个心，当下与武松结为弟兄。要打蒋门神，武松只提一个要求：“出城后，每遇见一个酒店，你必须请我喝三碗酒。”施恩说：“出东门到快活林总有十二三家客店，这样喝过去要喝三四十碗酒，还没打先醉倒了。”武松大笑道：“你怕我醉？你不知道我醉了才能打老虎？我是一分酒一分气力！武松被发配到孟州。按照规矩，新到的犯人要挨一百杀威棒，要是肯出钱就可以不打。武松是个硬汉子，宁可挨打，绝不出钱。正要打时，有个包着头、吊着胳膊的年轻人在管营相公耳边说了什么，管营就对武松说：“我看你脸色不好，像是有病。”两边拿棍的军汉提醒武松，“这是相公照顾你，你快说有病。”武松偏不领情，“我没病，能吃饭，能喝酒，能走路！”管营笑道：“说这种话就是有病。先寄下这顿杀威棒吧。”武松说：“我不要留下‘寄库棒’，早打了早干净！”<br>老资格的犯人替武松担心：“不打你，不是好意，只怕要害你！”正说着，有个军人给武松送来好酒好菜。武松想：“ 让我吃过了就要来害我了吧？不管它，吃了再说。”吃完了那军人还提来热水让武松洗澡。“洗完澡就要来害我了吧？”但当天晚上没什么动静。以后天天这样服侍。到第五天武松憋不住了，他问那人：“是谁派你来送这送那？”那人说：“是小管营吩咐的。”“小管营？是那个包着头吊着胳膊的年轻人吗？”“正是。”“他为什么要照顾我？”“小管营不许我多说，要过半年才能让你知道。”武松不耐烦了，“快把他请出来和我见面，不然的话，我什么也不吃了！”那小管营叫金眼彪施恩，这时赶紧跑出来拜见武松。原来，东门外有个热闹去处叫快活林，施恩在那里开了家客店，生意不错。谁知新来一位张团练，他带了个狗腿子叫蒋命忠。那蒋命忠九尺多身材，人称“蒋门神”，他凭着武艺高强打伤了施恩，霸占了快活林客店。施恩知道武松是有名的打虎英雄，想请他帮忙夺回客店，但要等武松把身体养好了再说。武松笑了，“让你看看我的身体。”天王堂前有个五百斤的石墩，被武松扔起一丈多高，然后稳稳接住。施恩这才放了一百个心，当下与武松结为弟兄。要打蒋门神，武松只提一个要求：“出城后，每遇见一个酒店，你必须请我喝三碗酒。”施恩说：“出东门到快活林总有十二三家客店，这样喝过去要喝三四十碗酒，还没打先醉倒了。”武松大笑道：“你怕我醉？你不知道我醉了才能打老虎？我是一分酒一分气力！',
                offsetTop:0,
                top:0,
                canScroll:true
            }
        },
        created(){
            
        },
        computed: {},
        methods: {
            navChange(index){
                this.canScroll = false;
                this.activeIndex = index;
                this.top = document.querySelector(`.dom${index}`).offsetTop;
                if(this.top>this.offsetTop){
                    this.scrollAnimate1();
                }
                if(this.top<this.offsetTop){
                    this.scrollAnimate2();
                }
            },
            scrollAnimate1(){
                if(this.offsetTop<this.top){
                    this.offsetTop +=15 ;
                    window.setTimeout(()=>{
                        document.querySelector('.scroll').scrollTo(0,this.offsetTop);
                        this.scrollAnimate1();
                    },10);
                    return false;
                }
                this.canScroll = true;
                
            },
            scrollAnimate2(){
                if(this.offsetTop>this.top){
                    this.offsetTop -=15 ;
                    window.setTimeout(()=>{
                        document.querySelector('.scroll').scrollTo(0,this.offsetTop);
                        this.scrollAnimate2();
                    },10);
                    return false;
                }
                this.canScroll = true;
                
            },
            //滚动
            scroll(e){
                if(!this.canScroll){
                    return false;
                }
                this.items.forEach((el,index)=>{
                    if(Math.abs(e.target.scrollTop-el.top)<100){
                        this.activeIndex = index;
                    }
                });
                
            }
        },
        mounted(){
            //追加每个模块的offsetTop
            this.items.map((el,index)=>{
                el.top = document.querySelector(`.dom${index}`).offsetTop;
            });
        },
        destroyed(){

        }
    }
</script>
