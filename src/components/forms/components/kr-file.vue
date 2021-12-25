<template>
	<span>
		<slot :open="open"></slot>
		<div>
			<b-modal id="bv-modal-example" 	 hide-footer>

					<dashboard :uppy="uppy" />

		</b-modal>
		</div>
		 
	</span>
</template>

<script>
import { Dashboard } from '@uppy/vue'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import Uppy from '@uppy/core'

export default{
	name: 'UploadFile',
	
	props:{
		msg:String
	},
	components: {
		Dashboard
	},
	computed: {           
		uppy: () => new Uppy()
	},
	

  beforeDestroy () {
    this.uppy.close()
  },
	data(){
		var that = this;	
		return {
			picker:null,
			options:this._.get(this.$attrs,'options',{
				maxFiles: 20,
			    uploadInBackground: false,
			}),
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
		open:function(){
			this.$bvModal.show('bv-modal-example')
		},
	},

	
}
</script>	