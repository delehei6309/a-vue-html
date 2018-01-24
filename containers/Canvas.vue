<template>
    <div class="canvas">
        <canvas id="my-canvas"></canvas>
    </div>
</template>

<script>
    export default {
        name: 'canvas-demo',
        data(){
            return {
                canvas:null,
            }
        },
        created(){

        },
        components:{},
        computed: {},
        methods: {
            getCanvas(){
                this.canvas = document.querySelector('#my-canvas');
                this.canvasDraw();
            },
            canvasDraw(){
                let ctx = this.canvas.getContext('2d');
                ctx.translate(75,75);
                for(let i=0;i<6;i++){
                    ctx.save();
                    ctx.fillStyle = 'rgb('+(51*i)+','+(255-51*i)+','+(255)+')';
                    for(let j=0;j<6;j++){
                        ctx.rotate(Math.PI*2/(6*i));
                        ctx.beginPath();
                        ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
                        ctx.fill();
                    }
                }
                ctx.restore();
            }
        },
        mounted(){
            this.getCanvas();
        },
        destroyed(){

        }
    }
</script>
