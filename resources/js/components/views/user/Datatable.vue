<template>
    <div>
        <!--<vue-topprogress ref="topProgress"></vue-topprogress>-->
        <div class="container">
            <v-server-table ref="myTable"
                    :columns="columns"
                    :options="options">
            </v-server-table>
        </div>
    </div>
</template>
 
<script>
    import VueAxios from 'vue-axios';
    import axios from 'axios';
    export default {
        data() {
            return {
                columns: ['id', 'name', 'email'],
                options: {
                    headings: {
                        id: 'ID',
                        name: 'Name',
                        email: 'Email',
                        // action: 'Action'
                    },
                    perPage: 5,
                    perPageValues: [5,10,25,50,100],
                    sortable: ['name', 'email'],
                    filterable: ['name'],
                    requestFunction: function (data) {
                        console.log(data);
                        let self = this;
                        return self.axios.get('/api/user', { params: data }).catch(function (e) {
                            self.dispatch('error', e);
                        }.bind(this));
                    },
                    responseAdapter: function(resp) {
                        console.log(resp)
                        return {
                            data: resp.data.data,
                            count: resp.data.total,
                        }
                    }
                }
            }
        },
 
        mounted() {
 
        }
 
    }
</script>
 
<style>
    #app {
        width: 95%;
        margin-top: 50px;
    }
 
    .VuePagination {
        text-align: center;
    }
 
    .vue-title {
        text-align: center;
        margin-bottom: 10px;
    }
 
    .vue-pagination-ad {
        text-align: center;
    }
 
    .glyphicon.glyphicon-eye-open {
        width: 16px;
        display: block;
        margin: 0 auto;
    }
 
    th:nth-child(3) {
        text-align: center;
    }
 
    .VueTables__child-row-toggler {
        width: 16px;
        height: 16px;
        line-height: 16px;
        display: block;
        margin: auto;
        text-align: center;
    }
 
    .VueTables {
        margin-top:20px;
    }
    .VueTables__child-row-toggler--closed::before {
        content: "+";
    }
 
    .VueTables__limit-field{
        margin-top:30px;
    }
    .VueTables__child-row-toggler--open::before {
        content: "-";
    }
 
    .VuePagination nav{
        background-color: transparent !important;
        color:black;
        box-shadow: none;
        text-align: right;
        padding:0px;
    }
    .VuePagination nav ul{
        float:right;
        margin:0px;
    }
    .VuePagination nav p{
        text-align: right;
        padding:0px;
    }
</style>