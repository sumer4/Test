<template>
    <div class="container-fluid">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <router-link to="/admin">Dashboard</router-link>
            </li>
            <li class="breadcrumb-item active">Users</li>
            <li style="margin-left: auto;">
                <router-link class="btn btn-info btn-sm" to="/admin/user/add"><i class="fa fa-user-plus"></i> Add User</router-link>
            </li>
        </ol>

        <div class="card mb-3">
            <div class="card-header d-flex">
                <div>
                    <div class="input-group">
                        <input
                            type="text"
                            @keyup.enter="searchIt"
                            v-model="find"
                            class="form-control"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                        />
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                                <i class="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <download-excel
                style="margin-left: auto;"
                class="btn btn-info btn-sm"
                :data="users"
                :fields="excel_column_name"
                worksheet="My Worksheet"
                name="UserExcel.xls"
                > 
                <i class="fa fa-file-download"></i>
                Download Excel
                </download-excel>
            </div>
            <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                            <th>Modify</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td><router-link :to="'/admin/user/' + user.id" style="text-decoration: none;">{{ user.name }}</router-link></td>
                                <td>{{ user.email }}</td>
                                <td>{{ user.role }}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="javascript:void(0);" v-on:click="onDelete(user)">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </td>
                            </tr>                            
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: 'UserList',

        data()
        {
            return {
                errors: {},
                find: '',

                excel_column_name: {
                    Id: "id",
                    "Complete name": "name",
                    Email: "email",
                    Role: "role"
                }
            }
        },

        computed:
        {
            ...mapGetters([
                'users'
            ])
        },

        mounted()
        {
            this.loadUsers();
        },

        methods:
        {
            ...mapActions([
                'loadUsers',
                'deleteUser',
                'search'
            ]),

            onDelete(user)
            {
                swal({
                    title: "Are you sure?",
                    text: "Once deleted, you will not be able to recover this file!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                .then((willDelete) => {
                    if (willDelete)
                    {
                        this.deleteUser(user.id)
                        swal("Oops! Your file has been deleted!", {
                            icon: "success",
                        });
                        this.loadUsers()
                    }
                    else
                    {
                        swal("Hurray! Your file is safe!");
                    }
                });
            },

            searchIt()
            {
                this.search(this.find)
            }
        }
    }
</script>