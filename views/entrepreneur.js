/**
 * Created by DELL on 2017/8/9.
 */
import Vue from 'vue';
import Entrepreneur from '../containers/Entrepreneur';
import '../less/base.less';
import '../less/entrepreneur.less';
new Vue({
    el: '#app',
    render: h => h(Entrepreneur)
});
