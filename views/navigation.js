import Vue from 'vue';
import Navigation from '../containers/Navigation';
import '../less/base.less';
import 'flex.css/dist/flex.css';
new Vue({
    el: '#continer',
    render: h => h(Navigation)
});

