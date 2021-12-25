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
            Enter your email address and we will send you a link to reset your password.
          </p>
            <kr-form-i name="email" vid="email" v-slot="{validation}" :rules="data.config.email.rules">
              <b-form-group>
                <b-input v-model="data.model.email" :state="validation" placeholder="Enter your email address" @keyup.enter="!(flags.invalid || !flags.valid)?actions.post():''" />
              </b-form-group>
            </kr-form-i>
            <b-btn pill variant="warning" :block="true" :disabled="flags.invalid || !flags.valid" @click="actions.post()">Sent password reset email</b-btn>
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
  name: 'pages.auth.email',
  metaInfo: {
    title: 'Pullman Morrison Password Reset'
  },
  data(){
    var that = this;
    return{
      formOptions:{
        fields:{
          email:{value:'',rules:'email|required'},
          password:''
        },
        urls:{
          post:'auth/password/email'
        },
        successCallback:function(response){
          //console.log(response.data.data);
          that.$router.push({name:'auth.login',query:{from:'password-reset'}});
        },
        failCallback:function(errors){
          var message = that._.get(errors,'response.data.message',errors.message);
          that.$refs.form.observer.setErrors({
            email: [message],
          });
        },    
      },
    }
  }
}
</script>
