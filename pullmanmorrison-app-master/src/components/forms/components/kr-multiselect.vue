<template>
  <multiselect
    v-model="internalValue"
    v-bind="$attrs"
    @tag="$emit('tag',$event)"
    @search-change="$emit('search-change',$event)">
    <template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
  </multiselect>
</template>
<script>
import Multiselect from 'vue-multiselect'
export default {
	props:['value'],
	data(){
		return{
			internalValue:''
		}
	},
	created(){
		this.internalValue = this.value
	},
	components: {
    	Multiselect
  	},
  	watch:{
		internalValue:{
			handler:function(){
				this.$emit('input',this.internalValue);
			},
			deep:true
		},
		value:{
	      handler:function(){
	        this.internalValue = this.value
	      },
	      deep:true
	    },
	}
}

</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style src="@/vendor/libs/vue-multiselect/vue-multiselect.scss" lang="scss"></style>


<style>
	.multiselect__option--highlight {
	    background: #ffc107!important;
	    outline: none;
	    color: #fff;
	}
	.default-style .multiselect__tag {
	    margin: 0 0.375rem 0.375rem 0;
	    background-color: rgba(255, 193, 7, 0.1);
	    color: #4E5155;
}
</style>
