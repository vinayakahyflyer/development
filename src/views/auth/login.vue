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
            <b-alert v-if="from=='password-reset'" class="mt-3" show>A link has been sent to your email, please check your email</b-alert>
            <kr-form-i name="email" v-slot="{validation}" :rules="data.config.email.rules">
              <b-form-group>             
                <b-input v-model="data.model.email" :state="validation" placeholder="Enter your email here" @keyup.enter="!(flags.invalid || !flags.valid)?actions.post():''"/>
              </b-form-group>
            </kr-form-i>

            <kr-form-i name="password" v-slot="{validation}" :rules="data.config.password.rules">
              <b-form-group>
                <b-input type="password" v-model="data.model.password" :state="validation" placeholder="Enter your password here" @keyup.enter="!(flags.invalid || !flags.valid)?actions.post():''" />
              </b-form-group> 
            </kr-form-i>
            <div class="d-flex justify-content-between">
              <kr-form-i name="remember me" v-slot="{validation}" :rules="data.config.rememberMe.rules">
                <b-check v-model="data.model.rememberMe" :state="validation" class="m-0"><span class="remember-me">Remember me</span></b-check>
              </kr-form-i>
              <div >
                <b-link :to="{name:'auth.password.email'}" class="small"><b>Forgot password?</b></b-link>
              </div>
            </div>
            <b-btn  pill variant="warning" :block="true" :disabled="flags.invalid || !flags.valid" @click="actions.post()"><i class="ion ion-md-log-in mr-2"></i>Sign-in</b-btn>
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
  name: 'pages.auth.login',
  metaInfo: {
    title: 'Pullman-Morrison Login Page'
  },
  data(){
    var that = this;
    return{
      from:this._.get(this.$route,'query.from'),
      formOptions:{
        fields:{
          email:{value:'',rules:'email|required'},
          password:{rules:'required'},
          rememberMe:{value:false,rules:'',sendType:false}
        },
        urls:{
          post:'auth/login'
        },
        successCallback:function(response){
          //console.log(response.data.data);
          that.krAuth.login(response.data.data);
        },
        failCallback:function(errors){
          var message = that._.get(errors,'response.data.message',errors.message);
          if(message=='Session Expired'){
            that.krAuth.logout()
          }
          that.$refs.form.observer.setErrors({
            password: [message],
          });
        },    
      },
    }
  },
  mounted(){
    
  },
}
</script>
<style scoped>
  span.remember-me{
    color:#4e5155 !important;
    font-weight:bold;
  }
</style>