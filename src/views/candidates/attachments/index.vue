<template>
<div>
	 <b-card no-body class="default-border _mt-20px">
	  	<div class="_px-20px _pb-20px">
		  	<b-card-header header-tag="p" class="with-elements border-top-0 border-left-0 border-right-0 border-warning pl-0 pr-0" style="border-width:2px">
	        	<div class="card-header-title">ATTACHMENTS ({{model_count}})</div>Help
	        	<div v-if="$can('update','Candidate')" class="card-header-elements ml-auto">
	        		<kr-file v-slot="{open}" @uploaded="create">
						
	        			<b-button pill variant="warning" @click="open()"> <i class="ion ion-md-cloud-upload mr-2"></i>Upload</b-button>
	        		</kr-file>
              <!--
              <b-button pill variant="warning" @click="requestAttachment"> <i class="ion ion-md-cloud-upload mr-2"></i>Upload</b-button>
              <input id="attachmentFileUploader" type="file" @change="uploadAttachment" style="display: none;">
              -->
	      		</div>
	    	</b-card-header>
	      	<kr-search ref="attachments_search_listing" :options="{url:`attachments/candidates/${this.$route.params.id}`}" @retrieved="model_count = $event.data.data.length">
	      		<template v-slot:data="{models}">
	      			 <div class="_pt-20px">
	      			 	<template v-for="(attachment,idx) in models">
							<div class="row _mb-20px">
								<div class="col-12 d-flex">
									<b-card no-body class="default-border _p-9px w-100">
										<div class="d-flex w-100 justify-content-between">
											<div>
												<a target="_blank" :href="attachment.url" @click="createNotification(attachment)">{{attachment.filename}}</a>
									      	</div>
									      	<span v-if="$can('update','Candidate')" class="card-header-elements ml-auto"><i class="ion ion-md-trash text-primary" @click="$refs['attachment-cru-component'].processSubmission(attachment,'delete')"></i></span>
									    </div>
								    </b-card>
								</div>
					     	</div>
						</template>
					</div>
				</template>
		    </kr-search>
	    </div>
    </b-card>
    <attachment-cru ref="attachment-cru-component" :candidate_id="$route.params.id" @created="$refs.attachments_search_listing.fetch()" @updated="$refs.attachments_search_listing.fetch()" @deleted="$refs.attachments_search_listing.fetch()"></attachment-cru>
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
		createNotification(attachment){
			this.$http.post('notifications',{type:'download',message:`${this.krAuth.user().name} has downloaded ${attachment.filename}`});
		},
		create(data){
			for(var i = 0;i<data.filesUploaded.length;i++){
				data.filesUploaded[i].table='candidates';
				data.filesUploaded[i].record_id=this.$route.params.id;
				data.filesUploaded[i].status=null;
				data.filesUploaded[i].url = process.env.VUE_APP_FILESTACK_SRC_URL+data.filesUploaded[i].key;
			}
			this.$refs['attachment-cru-component'].processSubmission({attachments:data.filesUploaded});
		},

		requestAttachment () {

			document.getElementById ( 'attachmentFileUploader' ).click ();

		},

		uploadAttachment ( evt ) {

			var files = evt.target.files;

			var reader = new FileReader ();

			reader.onload = ( function ( theFile ) {

				axios.post ( process.env.VUE_APP_NODE + '/attachments/' + this.$parent.$data.candidate.id, theFile.target.result )
				.then ( function () {

					location.reload ();

				} );

			} ).bind ( this );

			reader.readAsText ( files[0] );

			console.log ( files );

		},
	},
	components:{
		'attachment-cru': require(`./cru.vue`).default,
	}
}
</script>
<style>
</style>
