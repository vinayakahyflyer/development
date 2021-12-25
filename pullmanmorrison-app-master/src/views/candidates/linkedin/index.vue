<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">LINKEDIN</div>
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<b-button pill variant="warning" @click="requestLinkedInFile"> <i class="ion ion-md-cloud-upload mr-2"></i>Upload</b-button>
	       		</div>
	      	</b-card-header>
	      	<p><br>Click the button above to submit a LinkedIn HTML file for parsing. This can take up to 15 seconds to complete before this page auto-refreshes.</p>
	      	<input id="linkedInFileUploader" type="file" @change="uploadLinkedInFile" style="display: none;">
	    </div>
    </b-card>
</div>
</template>
<script>

let axios = require ( 'axios' );

export default{
	data(){
		return {
			model_count:0,
		}
	},
	methods:{
		create(data){
			for(var i = 0;i<data.filesUploaded.length;i++){
				data.filesUploaded[i].table='candidates';
				data.filesUploaded[i].record_id=this.$route.params.id;
				data.filesUploaded[i].status=null;
				data.filesUploaded[i].url = process.env.VUE_APP_FILESTACK_SRC_URL+data.filesUploaded[i].key;
			}
			this.$refs['attachment-cru-component'].processSubmission({attachments:data.filesUploaded});
		},

		requestLinkedInFile () {

			document.getElementById ( 'linkedInFileUploader' ).click ();

		},

		uploadLinkedInFile ( evt ) {

			var files = evt.target.files;

			var reader = new FileReader ();

			reader.onload = ( function ( theFile ) {

				axios.post ( process.env.VUE_APP_NODE + '/parser/parsehtml/' + this.$parent.$data.candidate.id, theFile.target.result )
				.then ( function () {

					location.reload ();

				} );

			} ).bind ( this );

			reader.readAsText ( files[0] );

			console.log ( files );

		}
	}
}
</script>
<style>
</style>
