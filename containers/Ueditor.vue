<template>
    <div class="ueditor">
        <script type="text/plain" id="myEditor" style="width:800px;height:240px;max-height:600px;"></script>
        <button @click="setContent">添加</button>
    </div>
    
</template>

<script>
    export default {
        name: 'ueditor',
        data(){
            return {}
        },
        created(){
            this.addUmScript();
        },
        computed: {},
        methods: {
            addUmScript(){
                let scriptArr = ['/third-party/jquery.min.js','/umeditor.config.js','/umeditor.min.js','/lang/zh-cn/zh-cn.js'];
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
                }
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
            }
        },
        mounted(){
            this.getUM();
        },
        destroyed(){

        }
    }
</script>
