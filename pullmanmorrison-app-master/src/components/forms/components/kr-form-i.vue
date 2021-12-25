<template>
	<div class="kr-form-i">
		<ValidationProvider :name="attrs.name" :vid="attrs.vid" :ref="attrs.provider_ref" :rules="attrs.rules" :immediate="attrs.immediate" v-slot="props" slim>
			<slot :valid="props.valid" :invalid="props.invalid" :validation.sync="props.invalid?false:props.valid?props.valid:null" :validate="validate"></slot>
			<b-form-invalid-feedback :state="props.errors.length==0?true:false">
				{{props.errors[0]}}
		    </b-form-invalid-feedback>
		    <!--<b-form-valid-feedback :state="props.valid">
		    	Looks Good
		    </b-form-valid-feedback>-->
		</ValidationProvider>
	</div>
</template>
<script>
export default{
	props:{
		options:{
			type:Object,
			default:function(){return {}},
		},
  	},
  	data(){
  		return {
  			attrs:this.$attrs
  		}
  	},
	created(){
		if(this.$attrs.provider_ref==null){
			this.$attrs.provider_ref = Math.random().toString(36).slice(2)
		}
	},
	methods:{
		validate(){
			return this.provider.validate();
		},
	},
	computed:{
  		provider(){
  			return this.$refs[this.attrs.provider_ref];
  		}
  	}
}
</script>
<style scoped>
	.kr-form-i{
		padding-bottom:1rem !important;
	}
</style>
<style>
	.form-control:focus {
	    border-color:#FFD950;
	    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 8px rgba(255, 217, 80, 0.5);
	}
	.form-group {
	    margin-bottom: .35rem !important;
	}

</style>