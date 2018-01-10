<template>
    <div class="entrepreneur">
        <index-header></index-header>
        <navigation-box></navigation-box>
        <div class="banner">
            <!--轮播-->
            <swiper></swiper>
        </div>
        <!-- <div>
            <div id="aos-demo" class="aos-all">
                <div class="aos-item"  style="width:100px;height:100px;" v-for="item in itemList"  data-aos="flip-left">
                    <div class="aos-item__inner" style="width:100%;height:100%;background-color:tomato;"><h3>12345</h3></div>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
    import IndexHeader from '../components/IndexHeader'
    import NavigationBox from '../components/Navigation'
    import Swiper from '../components/Swiper'
    export default {
        name: 'entrepreneur',
        data(){
            return {
                itemList:[1,2,3,4,5,6,7,78,8,8,8,8,7,8,8,8,7,8,8,8,7,8,7,8,8,7,8,8,7,8,7,8,88,8,7,8,8,8,8,8,8,8,8,8,8,8,8,8]
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
            IndexHeader,NavigationBox,Swiper
        },
        methods: {},
        destroyed(){

        }
    }
</script>
