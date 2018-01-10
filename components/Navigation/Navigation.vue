<template>
    <div class="navigation-box">
        <div class="nav-content box-width clear">
            <div class="nav-menus">
                <div class="menus-view">全部分类</div>
                <div class="menu-list">
                    <ul>
                        li
                    </ul>
                </div>
            </div>
            <ul class="nav-items clear">
                <li v-for="item in items">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import './navigation.less';
    //import $api from '../../tools/api';
    import Toast from '../Toast';
    //import {navItems} from '../../../navigation.js';
    export default {
        name: 'navigation-box',
        //props:['navItems'],
        data(){
            return {
                items:[
                    {
                        title:'中超',
                        id:1
                    },{
                        title:'西甲',
                        id:2
                    },{
                        title:'英超',
                        id:3
                    },{
                        title:'德甲',
                        id:4
                    },{
                        title:'意甲',
                        id:5
                    },{
                        title:'美职篮',
                        id:6
                    },{
                        title:'中冀投资',
                        id:7
                    }
                ]
            }
        },
        created(){
            //Toast('服务器错误！');
        },
        computed: {},
        methods: {
            mouseenterEvent(item,index){
                /*if(index == 0){
                    //首页没有子导航
                    return false;
                }
                let url = '/index/cate/moveOnCate.html';
                if(index == 1){
                    //产品
                    url = '/index/product_cate/getProductCateList.html';
                }
                let cateid = item.id;
                console.log(cateid);
                if(!item.children || item.children.length<1){
                    $api.post(url,{cateid}).then((res)=>{
                        if(res.code == 200){
                            item.children = res.data.secondCateList;
                            if(index == 1){
                                //产品真是特殊
                                item.children = res.data.productCateList;
                            }
                        }else{
                            Toast(res.message || '服务器错误！');
                        }
                    });
                }
                console.log(item.children);
                item.show = true;*/
            },
            mouseleaveEvent(item){
                item.show = false;
                console.log(item.show)
            },
            navChange(item){
                //item.val == this.activeVal ? this.activeVal = '' : this.activeVal = item.val;
            }
        },
        destroyed(){

        }
    }
</script>
