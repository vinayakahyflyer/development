<template>
	<form :class="attrs.class" @submit.stop.prevent>
		<ValidationObserver :ref="attrs.observer_ref" v-slot="{invalid,valid,validated}" slim>
			<slot :flags="{invalid:invalid,valid:valid,validated:validated}" :actions="{reset,put,post}" :data="{model:model,config:field_config}"></slot>
		</ValidationObserver>
	</form>
</template>

<script>
export default{
	props:{
	  	options:{
	  		type:Object,
	  		default:function(){return {fields:{},successCallback:null,failCallback:null}},
	  	},
	},
	created(){
	  	if(this.$attrs.observer_ref==null){
      		this.$attrs.observer_ref = Math.random().toString(36).slice(2)
    	}
    	this.init();
	},
	data(){
		return{
			attrs:this.$attrs,
			//model
			model:{},
			//internal field rules and src
			field_config:{},
			///urls variable
			urls:{post:'',put:'',patch:''}
		}
	},
	methods:{
		init(){
			this.model = {};
			this.field_config = {};
			for(let key in this.options.fields){
				let field = this.options.fields[key];
				if(this.options.fields.hasOwnProperty(key))
				{
					if((typeof field)=='object'){
						this.setModelField(key,field.value!==undefined?field.value:field.default!==undefined?field.default:'')
						this.field_config[key] = {default:field.default,rules:field.rules!==undefined?field.rules:'',src:field.src!==undefined?field.src:key,sendType:(field.SendType!==undefined)?'default':field.sendType};
					}else{
						this.setModelField(key,field);
						this.field_config[key] = {default:'',rules:'',src:key,sendType:'default'};
					}
				}
			}
			if((typeof this.options.urls)=='object'){
				this.urls.post = this.options.urls.post;
				this.urls.put = this.options.urls.put;
				this.urls.patch = this.options.urls.patch;
			}
		},
		reset(data=null){
			this.init();
			this.setModel(data);
			// You should call it on the next frame
	      	requestAnimationFrame(() => {
	       		this.observer.reset();
	      	});
		},
		setModelField(key,value){
			this.$set(this.model,key ,value);
		},
		setModel(data=null){
			for(var key in this.field_config){
				let field = this.field_config[key];
				let src = field.src?field.src:key;
				if(data!=null&&data.hasOwnProperty(src)){
					this.setModelField(key ,data[src]);
				}else{
					this.setModelField(key , this.field_config[key].default);
				}
			}
			var that = this;
			//validate run 
			if(data!==null){
				this.$nextTick(function(){
					that.observer.validate()
				});
			}
		},
		processData(){
			var data = {};
			for(let field in this.model){
				if(this.field_config[field] && this.field_config[field].sendType && this.field_config[field].sendType===false){
					//ignore if sendType === false
					continue;
				}
				if((typeof this.model[field])=='object'&&this.model[field]!==null){
					data[field] =  JSON.stringify(this.model[field]);
				}else if((typeof this.model[field])=='array'){
					data[field] =  JSON.stringify(this.model[field]);
				}else{
					data[field] = this.model[field];
				}
			}
			return data;
		},
		post(url=null){
			return this.submit('post',url);
		},
		put(url=null){
			return this.submit('put',url);
		},
		patch(url=null){
			return this.submit('patch',url);
		},
		getUrl(requestType){
			if(requestType==='post'){
				return this.urls.post;
			}
		    if(requestType==='put'){
				return this.urls.put;
			}
			return '';

		},
		successCallback(response,requestType){
			if(this._.isFunction(this.options.successCallback)){
				return this.options.successCallback(response,requestType);
			}else{
				if(requestType=='post'){
					this.reset();
				}
				return;
			}
		},
		handleErrors(errors){
			console.log(errors)
			this.observer.setErrors(errors);
		},
		failCallback(errors,requestType){
			if(this._.isFunction(this.options.failCallback)){
				return this.options.failCallback(errors,requestType);
			}else{
				if(_.get(errors, "response.data.errors",false)){	
					this.handleErrors(errors.response.data.errors);
				}
				return;
			}
		},
		submit(requestType,url){
			if(url===null){
				url = this.getUrl(requestType);
			}
			return new Promise((resolve, reject) => {
            	this.$http[requestType](url, this.processData(requestType))
	                .then(response => {
	                    this.successCallback(response,requestType);
	                    response.krFormError=false;
	                    resolve(response);
	                })
	                .catch(error => {
	                	 this.failCallback(error,requestType);
	                    //this.onFail(error);
	                    if(!error.response){
	                    	error.response = {};
	                    }
	                    //throw an error but handle gracefully
	                    error.response.krFormError=true;
	                    resolve(error.response);
	                });
        	});
		},
	},
	computed:{
		observer(){
			return this.$refs[this.attrs.observer_ref];
		}
	},
}
</script>