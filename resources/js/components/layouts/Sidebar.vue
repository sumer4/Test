<template>
    <ul class="sidebar navbar-nav">
        <li class="nav-item">
            <router-link to="/admin/dashboard" class="nav-link" exact>
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/admin/users" class="nav-link" exact>
                <i class="fa fa-users"></i>
                <span>Users</span>
            </router-link>
        </li>
        <!-- <li class="nav-item">
            <router-link to="/admin/new_users" class="nav-link" exact>
                <i class="fa fa-users"></i>
                <span>Datatable Users</span>
            </router-link>
        </li> -->
        <li class="nav-item">
            <a href="#" class="nav-link" exact>
                <i class="fa fa-list-alt"></i>
                <span>Categories</span>
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link" exact>
                <i class="fa fa-cart-plus"></i>
                <span>Products</span>
            </a>
        </li>
    </ul>
</template>
