<template>
	<div class="kr-date" :class="{'is-invalid':state===false,'is-valid':state===true}">
		<flat-pickr v-if="!$attrs._select" v-model="datetime" v-bind="$attrs"/>
		<div class="row" v-else>
          <div class="col-4">
             <b-form-select v-model="mm" :options="monthOptions" @change="changedDate"></b-form-select>
          </div>
          <div class="col-3">
            <b-form-select v-model="dd" :options="dayOptions" @change="changedDate"></b-form-select>
          </div>
          <div class="col-3">
            <b-form-select v-model="yy" :options="yearOptions"@change="changedDate"></b-form-select>
          </div>
        </div>
	</div>
</template>
<script>
import flatPickr from 'vue-flatpickr-component'
export default{
	props:['value','state'],
	data(){
		let dayOptions = [];
	    for(var i = 0 ; i <=31;i++){
	      let v = i;
	      if(i<10){
	        v = '0'+v;
	      }
	      dayOptions.push({value:v,text:v}) 
	    }
	    let yearOptions = [];
	    for(var i = 1920 ; i <2021;i++){
	      yearOptions.push({value:i+'',text:i+''}) 
	    }
		return{
			datetime:'',
			dayOptions:dayOptions,
	      	monthOptions:[
		        {
		          value:'01',
		          text:'January'
		        },
		        {
		          value:'02',
		          text:'February'
		        },
		        {
		          value:'03',
		          text:'March'
		        },
		        {
		          value:'04',
		          text:'April'
		        },
		        {
		          value:'05',
		          text:'May'
		        },
		        {
		          value:'06',
		          text:'June'
		        },
		        {
		          value:'07',
		          text:'July'
		        },
		        {
		          value:'08',
		          text:'August'
		        },
		        {
		          value:'09',
		          text:'September'
		        },
		        {
		          value:'10',
		          text:'October'
		        },
		        {
		          value:'11',
		          text:'November'
		        },
		        {
		          value:'12',
		          text:'December'
		        },
	      	],
	      	yearOptions:yearOptions,
	      	mm:'',
	      	dd:'',
	      	yy:'',
		}
	},
	created(){
		this.datetime = this.value
		if(this.datetime){
        	let a = this.moment(this.datetime,this._.get(this.$attrs,'config.dateFormat','YYYY-MM-DD'));
			if(a.isValid()){
        		this.mm  = a.format('MM');
				this.dd  = a.format('DD');
				this.yy  = a.format('YYYY');
        	}
        }
	},
	methods:{
		changedDate(){
			if(this.mm&&this.dd&&this.yy){
    			this.datetime = this.moment(this.yy+this.mm+this.dd,'YYYYMMDD').format(this._.get(this.$attrs,'config.dateFormat','YYYY-MM-DD'));
    		}
		},
	},
	watch:{
		datetime:{
			handler:function(){
				this.$emit('input',this.datetime);
			}
		},
		value:{
	      handler:function(){
	        this.datetime = this.value
	        if(this.datetime){
	        	let a = this.moment(this.datetime,this._.get(this.$attrs,'config.dateFormat','YYYY-MM-DD'));
	        	if(a.isValid()){
	        		this.mm  = a.format('MM');
					this.dd  = a.format('DD');
					this.yy  = a.format('YYYY');
	        	}
	        }
	      },
	      deep:true
	    },
	},
	components: {
    	flatPickr
  	},
}
</script>
<style src="@/vendor/libs/vue-flatpickr-component/vue-flatpickr-component.scss" lang="scss"></style>
<style>
.kr-date.is-invalid > input{
	border: 1px solid  #d9534f;  
}
.kr-date.is-valid > input{
	border: 1px solid  #02BC77;
}
.default-style .flatpickr-calendar.open {
    z-index: 20000;
}
</style>