<template>
	<span>
		<slot :open="open"></slot>
	</span>
</template>

<script>


export default{
	data(){
		var that = this;
		return {
			picker:null,
			options:this._.get(this.$attrs,'options',{
				maxFiles: 20,
			    uploadInBackground: false,
			})
		}
	},
	created(){
		if(!this.options.onOpen){
			this.options.onOpen = () => this.$emit('opened');
		}
		if(!this.options.onUploadDone){
			this.options.onUploadDone =  (res) => this.$emit('uploaded',res);
		}
	},
	methods:{
		open(){
			window.fileStackClient.picker(this.options).open();
		},
	},

	
}
</script>