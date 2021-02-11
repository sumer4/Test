<template>
    <div class="container">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/admin">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item">
                <router-link to="/admin/users">Users</router-link>
            </li>
            <li class="breadcrumb-item active">Add</li>
        </ol>
        <div class="card mb-3">
            <div class="card-header d-flex">
                <span>
                    <i class="fas fa-user-plus"></i>
                    Add User
                </span>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="doInsert">
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
                                type="password"
                                v-model="form.password"
                                id="password"
                                class="form-control"
                                placeholder="Password"
                            />
                            <label for="password">Password</label>
                            <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
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
                            <div class="invalid-feedback" v-if="errors.role">{{errors.role[0]}}</div>    
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary btn-block"><i class="fa fa-plus-circle"></i> INSERT</button>
                </form>
            </div>
        </div>       
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'AddUser',

        data()
        {
            return {
                form: {
                    name: '',
                    email: '',
                    password: '',
                    role: ''
                },

                errors: {}
            }
        },

        methods:
        {
            ...mapActions([
                'insertUser'
            ]),

            doInsert()
            {
                this.insertUser(this.form)
                .then(response => {
                    this.errors = {};
                    this.flashMessage.success({
                        message: 'User inserted successfully!',
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