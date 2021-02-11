<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <template v-if="!currentUser">
                    <ul class="navbar-nav" style="margin: 0 82%;">
                        <h4><router-link to="/login" class="nav-link welcome_auth">Login</router-link></h4>
                        <h4><router-link to="/register" class="nav-link welcome_auth">Register</router-link></h4>
                    </ul>
                </template>
                <template v-else>
                    <ul class="navbar-nav" style="margin: 0 91%;">
                        <h4><router-link to="/admin" class="nav-link welcome_auth">Home</router-link></h4>
                    </ul>
                </template>
            </div>
        </nav>
        <div class="flex-center position-ref">
            <div align="center" style="margin: 8% auto;">
                <div class="title m-b-md welcome_text">
                    Welcome to Vuex in LaraVue
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        name: 'Welcome',

        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },

        computed: {
            ...mapGetters([
                'currentUser'
            ])
        }
    }
</script>
