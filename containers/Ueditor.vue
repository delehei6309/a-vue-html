<template>
    <div class="ueditor">
        <script type="text/plain" id="myEditor" style="width:800px;height:240px;max-height:600px;"></script>
        <div id="dom"></div>
        <button @click="setContent">添加</button>
        <button @click="addNewElement()">Add Element</button>
    </div>

</template>

<script>
    import {devUrl, testUrl,test2Url, productionUrl} from '../tools/config';
    export default {
        name: 'ueditor',
        data(){
            return {
                html:'<button @click="test()">Test</button>',

            }
        },
        created(){
            this.setConfig();
            this.addUm();
        },
        computed: {},
        methods: {
            //配置config
            setConfig(){
                let {env} = window;
                window.Kop = {};
                window.Kop.serverUrl = devUrl;
                if (env == 'test') {
                    window.Kop.serverUrl = testUrl;
                }
                if (env == 'production') {
                    window.Kop.serverUrl = productionUrl;
                }
            },
            addUm(){
                let scriptArr = ['/third-party/jquery.min.js','/umeditor.config.js','/umeditor.min.js'];
                let linkArr = ['../umeditor/themes/default/css/umeditor.css'];
                //动态夹杂ueditor相关css;
                for(let i=0;i<linkArr.length;i++){
                    let link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type = 'text/css';
                    link.href = linkArr[i];
                    document.head.appendChild(link);
                }
                //动态加载ueditor相关js
                let index = 0;
                let addScript = ()=>{
                    let script = document.createElement("script");
                    script.type = 'text/javascript';
                    script.src = '../umeditor'+scriptArr[index];
                    document.body.appendChild(script);
                    script.onload=function(){
                        if(index < (scriptArr.length-1)){
                            index ++;
                            addScript();
                        }
                    }
                };

                addScript();
            },
            getUM(){
                if(window.UM){
                    this.um = UM.getEditor('myEditor');
                    /*this.um.addListener('contentchange', function () {
                        //this.sync();
                    });*/
                }else {
                    setTimeout(this.getUM,50);
                }
            },
            setContent(){
                //this.um.setContent('000000',1)
                this.um.setDisabled();
            },
            addNewElement(){
                console.log(document.querySelector('#dom'));
               let element = document.querySelector('#dom').innerHTML = (this.html);
               /* compile the new content so that vue can read it */
               this.$compile(element);
            },
            test(){
               console.log('Test');
            }
        },
        mounted(){
            this.getUM();
        },
        destroyed(){

        }
    }
</script>
