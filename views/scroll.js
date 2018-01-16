/**
 * Created by DELL on 2017/8/9.
 */
import Vue from 'vue';
import Scroll from '../containers/Scroll';
//import 'flex.css/dist/flex.css';
import '../less/base.less';
import '../less/scroll.less';
new Vue({
    el: '#app',
    render: h => h(Scroll)
});
