<template>
  <div class="authentication-wrapper authentication-2 px-4">
    <div class="authentication-inner py-5">

      <!-- Form -->
      <kr-form ref="form" v-slot="{flags,actions,data}" :options="formOptions" class="card">
        <div class="p-4 p-sm-5">

         <!-- Logo -->
        <div class="d-flex justify-content-center pb-3">
          <span class="pullman-morrison-auth-logo">PULLMAN<br/>MORRISON</span>
        </div>
      <!-- / Logo -->

          <h5 class="text-center text-muted font-weight-normal mb-4">Reset Your Password</h5>

          <hr class="mt-0 mb-4">
          <p>
            Please enter your new password
          </p>
            <kr-form-i name="password" vid="password" v-slot="{validation}" :rules="data.config.password.rules">
              <b-form-group>
                <b-input type="password" v-model="data.model.password" :state="validation" placeholder="Enter your password here" @keyup.enter="!(flags.invalid || !flags.valid)?actions.post():''"/>
              </b-form-group>
            </kr-form-i>
            <kr-form-i name="password_confirm" v-slot="{validation}" :rules="data.config.password_confirmation.rules">
              <b-form-group>
                <b-input type="password" v-model="data.model.password_confirmation" :state="validation" placeholder="Please reenter your password" @keyup.enter="!(flags.invalid || !flags.valid)?actions.post():''" />
              </b-form-group>
            </kr-form-i>
            <b-btn pill variant="warning" :block="true" :disabled="flags.invalid || !flags.valid" @click="actions.post()">Reset Password</b-btn>
        </div>
      </kr-form>
      <!-- / Form -->
    </div>
  </div>
</template>

<!-- Page -->
<style src="@/vendor/styles/pages/authentication.scss" lang="scss"></style>

<script>
export default {
  name: 'pages.auth.reset',
  metaInfo: {
    title: 'Pullman Morrison Password Reset'
  },
  data(){
    var that = this;
    return{
      formOptions:{
        fields:{
          password:{value:'',rules:'required|min:8'},
          password_confirmation:{value:'',rules:'required|confirmed:password'},
          token:this._.get(this.$route,'params.token'),
          email:this._.get(this.$route,'query.email')
        },
        urls:{
          post:'auth/password/reset'
        },
        successCallback:function(response){
          //console.log(response.data.data);
          that.krAuth.login(response.data.data);
        },
        /*failCallback:function(errors){
          var message = that._.get(errors,'response.data.message',errors.message);
          that.$refs.form.observer.setErrors({
            password: [message],
          });
        },*/    
      },
    }
  }
}
</script>
