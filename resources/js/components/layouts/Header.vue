<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
        <router-link to="/admin" class="navbar-brand mr-1">
            Welcome: {{ loggedInUser }}
        </router-link>

        <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown no-arrow">
                <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    <img width="30" height="30" src="/assets/admin.jpg" style="border-radius: 50%;" />
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="#">Settings</a>
                    <a class="dropdown-item" href="#">Activity Log</a>
                    <div class="dropdown-divider"></div>
                    <button class="dropdown-item" v-on:click="doLogout">Logout</button>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import * as auth from '../../helpers/account_helper';
    export default {
        computed:
        {
            ...mapGetters([
                'currentUser'
            ]),

            loggedInUser()
            {
                if(this.currentUser)
                {
                    return this.currentUser.name;
                }
                else
                {
                    return 'Annonymous';
                }
            }
        },

        methods:
        {
            ...mapActions([
                'removeToken'
            ]),

            doLogout: async function()
            {
                try
                {
                    const response = await auth.logout();
                    this.removeToken(); //calling action
                    this.flashMessage.success({
                        message: response.success,
                        time: 5000
                    });
                    this.$router.push('/login');
                }
                catch (error)
                {
                    console.log(error)
                }
            }
        }
    }
</script>
