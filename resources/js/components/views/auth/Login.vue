<template>
	<div class="container">
		<div class="card card-login mx-auto mt-5">
			<div class="card-header"><i class="fa fa-lock"></i> Login</div>
			<div class="card-body">
				<form v-on:submit.prevent="doLogin">
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="email"
                                v-model="user.email"
								id="email"
								class="form-control"
								placeholder="Email address"
								autofocus="autofocus"
							/>
							<label for="email">Email address</label>
                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
						</div>
					</div>
					<div class="form-group">
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
					<div class="form-group">
						<div class="checkbox">
							<label>
								<input type="checkbox" value="remember-me" v-model="user.remember_me" />
								Remember Password
							</label>
						</div>
					</div>
                    <button type="submit" class="btn btn-primary btn-block" ref="btnSubmit">Login</button>
				</form>
				<div class="text-center">
                    <router-link to="/register" class="d-block small mt-3">Register an Account</router-link>
                    <router-link to="/reset-password-request" class="d-block small">Forgot Password?</router-link>
				</div>
			</div>
		</div><br>        
            
        <div align="center">
            <button @click="$router.go(-1)" class="btn btn-sm btn-outline-light" style="margin-right: 19%;">
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
	import { mapActions } from 'vuex';
    import * as auth from '../../../helpers/account_helper';
    export default {
        name: 'Login',

        created()
        {
            document.querySelector('body').style.backgroundColor = '#343a40';
        },

        data()
        {
            return {
            	user: {
            		email: '',
            		password: '',
            		remember_me: false
            	},

                btnOldHtml: '',
                errors: {}
            }
        },

        methods:
        {
        	...mapActions([
                'saveToken'
			]),
        	
        	doLogin: async function() {
                try
                {
                    this.disableSubmission(this.$refs.btnSubmit);
                    const response = await auth.login(this.user);
                    this.errors = {};                    
                    this.saveToken(response); //calling action
                    this.flashMessage.success({
                        message: response.success,
                        time: 5000
                    });
                    this.$router.push('/admin');
                }
                catch (error)
                {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.error;
                            break;
                        case 401:
                            this.flashMessage.error({
                                message: error.response.data.error,
                                time: 5000
                            });
                            break;
                        case 500:
                            this.flashMessage.error({
                                message: error.response.data.error,
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: 'Internal server error occurred, Please try again!',
                                time: 5000
                            });
                            break;
                    }

                    this.enableSubmission(this.$refs.btnSubmit);
                }
            },

            disableSubmission(btn)
            {
                btn.setAttribute('disabled', 'disabled');
                this.btnOldHtml = btn.innerHTML;
                btn.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
            },

            enableSubmission(btn)
            {
                btn.removeAttribute('disabled');
                btn.innerHTML = this.btnOldHtml;
            }
        }        
    }
</script>
