<template>
    <div class="container">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/admin">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link to="/admin/users">Users</router-link>
            </li>
            <li class="breadcrumb-item active">View</li>
        </ol>
        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-user"></i>
                    View User
                </span>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="doUpdate">
                    <div class="form-group">
                        <div class="form-label-group">
                            <input
                                type="text"
                                v-model="form.name"
                                id="name"
                                class="form-control"
                                placeholder="Name"
                                autofocus="autofocus"
                            />
                            <label for="name">Name</label>
                            <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input
                                type="email"
                                v-model="form.email"
                                id="email"
                                class="form-control"
                                placeholder="Email address"
                            />
                            <label for="email">Email address</label>
                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input
                                type="text"
                                v-model="form.role"
                                id="role"
                                class="form-control"
                                placeholder="Role"
                            />
                            <label for="role">Role</label>    
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block"><i class="fa fa-sync"></i> UPDATE</button>
                </form>
            </div>
        </div>       
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    export default {
        name: 'ShowUser',

        data()
        {
            return {
                errors: {}
            }
        },

        computed:
        {
            id()
            {
                return this.$route.params.id
            },

            ...mapState({
                user: state => state.user.user
            }),

            form()
            {
                if (!this.user)
                {
                    return {};
                }

                return {
                    name: this.user.name,
                    email: this.user.email,
                    role: this.user.role,
                }
            }
        },

        mounted()
        {
            this.viewUser(this.id);
        },

        methods:
        {
            ...mapActions([
                'viewUser',
                'updateUser'
            ]),

            doUpdate()
            {
                this.updateUser({id: this.id, form: this.form})
                .then(response => {
                    this.errors = {};
                    this.flashMessage.success({
                        message: 'User updated successfully!',
                        time: 5000
                    });
                    this.$router.go(- 1)
                })
                .catch(error => {
                    this.errors = error.errors;
                })
            }
        }
    }
</script>