<template>
    <div class="navigation-box">
        <div class="nav-content box-width clear">
            <div class="nav-menus" @mouseenter="navItemsShow = true" @mouseleave="navItemsShow=false">
                <div class="menus-view"><span>全部分类</span></div>
                <div v-show="navItemsShow" class="menu-list">
                    <ul>
                        <li v-for="item in navItems" @mouseenter="item.show = true" @mouseleave="item.show=false">
                            <div class="nav-item-view">{{item.title}}</div>
                            <div v-show="item.show" class="nav-child clear">
                                <template v-if="item.children && item.children.length>0">
                                    <div v-for="nav in item.children" class="nav-child-view"><a href="">{{nav.title}}</a></div>
                                </template>
                                <template v-else>暂无内容</template>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <ul class="nav-items clear">
                <li v-for="item in menus">
                    <a href="">{{item.title}}</a>
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
                menus:[
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
                ],
                navItemsShow:false,
                navItems:[
                    {
                        title:'罗纳尔迪尼奥',
                        id:1,
                        show:false,
                        children:[
                            {
                                title:'郭德纲',
                                id:1
                            },{
                                title:'于谦',
                                id:1
                            },{
                                title:'于谦',
                                id:1
                            },{
                                title:'于谦',
                                id:1
                            },{
                                title:'于谦',
                                id:1
                            },{
                                title:'于谦',
                                id:1
                            },{
                                title:'于谦',
                                id:1
                            }
                        ]
                    },{
                        title:'诺维斯基',
                        id:2,
                        show:false,
                        children:[
                            {
                                title:'精细鬼'
                            },{
                                title:'伶俐虫'
                            },{
                                title:'精细鬼'
                            },{
                                title:'伶俐虫'
                            },{
                                title:'奔波儿灞'
                            },{
                                title:'霸波尔奔'
                            }
                        ]
                    },{
                        title:'克里斯蒂亚诺',
                        id:3,
                        show:false,
                        children:[]
                    }
                ]
            }
        },
        created(){
            //Toast('服务器错误！');
        },
        computed: {},
        methods: {
        },
        destroyed(){

        }
    }
</script>
