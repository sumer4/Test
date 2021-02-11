<template>
	<div class="container">
		<div class="card card-login mx-auto mt-5">
			<div class="card-header">Reset Password Request</div>
			<div class="card-body">
				<div class="text-center mb-4">
					<h4>Forgot your password?</h4>
					<p>Enter your email address and we will send you instructions on how to reset your password.</p>
				</div>
				<form v-on:submit.prevent="resetPassword">
					<div class="form-group">
						<div class="form-label-group">
							<input
								type="email"
								id="inputEmail"
								class="form-control"
								placeholder="Enter email address"
								autofocus="autofocus"
								v-model="user.email"
							/>
							<label for="inputEmail">Enter email address</label>
							<div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
						</div>
					</div>
					<button type="submit" class="btn btn-primary btn-block" ref="btnSubmit">Request Password</button>
				</form>
				<div class="text-center">
					<router-link to="/register" class="d-block small mt-3">Register an Account</router-link>
					<router-link class="d-block small" to="/login">Login Page</router-link>
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
    export default {
		name: 'ResetPasswordRequest',
		data() {
			return {
				user: {
					email: ''
				},

				errors: {}
			}
		},

        created() {
            document.querySelector('body').style.backgroundColor = '#343a40';
		}		
    }
</script>
