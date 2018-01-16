<template>
    <div class="date-picker">
        <date-picker :date="date" :limit="limit"></date-picker>
    </div>
</template>

<script>
    import myDatepicker from 'vue-datepicker'
    export default {
        name: 'date-picker',
        data(){
            return {
                date: {
                    time: '' // string
                },
                limit:{
                    type: 'weekday',
                    available: [1, 2, 3, 4, 5] 
                }
            }
        },
        created(){
        },
        components:{
            'date-picker': myDatepicker
        },
        computed: {},
        methods: {},
        destroyed(){
            
        }
    }
</script>
