<template>
	<div class="container">
		<div class="card card-register mx-auto mt-5">
			<div class="card-header">Register an Account</div>
			<div class="card-body">
				<form v-on:submit.prevent="register">
					<div class="form-group mb-0">
						<div class="form-row">
							<div class="col-md-6">
								<div class="form-label-group">
									<input
										type="text"
                                        v-model="user.name"
										id="name"
										class="form-control"
										placeholder="Enter Full Name"
										autofocus="autofocus"
									/>
									<label for="name">Enter Full Name</label>
                                    <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
                                    <div class="form-label-group">
                                        <input
                                            type="email"
                                            v-model="user.email"
                                            id="email"
                                            class="form-control"
                                            placeholder="Email address"
                                        />
                                        <label for="email">Email address</label>
                                        <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                    </div>
                                </div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<div class="form-row">
							<div class="col-md-6">
								<div class="form-label-group">
									<input
										type="password"
                                        v-model="user.password"
										id="password"
										class="form-control"
										placeholder="Password"
									/>
									<label for="password">Password</label>
                                    <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-label-group">
									<input
										type="password"
                                        v-model="user.password_confirmation"
										id="password_confirmation"
										class="form-control"
										placeholder="Confirm password"
									/>
									<label for="password_confirmation">Confirm password</label>
                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
								</div>
							</div>
						</div>
					</div>
                    <button type="submit" class="btn btn-primary btn-block">Register</button>
				</form>
				<div class="text-center">
                    <router-link class="d-block small mt-3" to="/login">Login Page</router-link>
					<router-link to="/reset-password-request" class="d-block small">Forgot Password?</router-link>
				</div>
			</div>
		</div><br>
        
		<div align="center">
            <button @click="$router.go(-1)" class="btn btn-sm btn-outline-light" style="margin-right: 41%;">
                <i class="fa fa-arrow-left"></i> Go back
            </button>
            <router-link to="/">
                <button class="btn btn-sm btn-outline-light">
                    <i class="fa fa-home"></i> Go Home
                </button>
            </router-link>           
        </div>
	</div>
</template>

<script>

    export default {
        name: 'Register',

        created()
        {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },

        data()
        {
            return {
                user: {
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                },

                errors: {}
            }
        },

        methods:
        {
        	// 
        }
    }
</script>
