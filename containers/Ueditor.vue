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
        },
        computed: {},
        methods: {
            getUM(){
                if(window.UM){
                    this.um = UM.getEditor('myEditor');
                    /*this.um.addListener('contentchange', function () {
                        //this.sync();
                    });*/
                }else {
                    setTimeout(this.getUM,2000);
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
