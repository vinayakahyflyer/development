<template>
	<vue-slider v-model="internalValue" v-bind="$attrs">
		<template v-for="(_, slot) of $scopedSlots" v-slot:[slot]="scope"><slot :name="slot" v-bind="scope"/></template>
	</vue-slider>
</template>

<script>
import vueSlider from 'vue-slider-component'
export default{
	props:['value'],
	components: {
    	vueSlider
  	},
  	created(){
		this.internalValue = this.value
	},
  	data(){
		return{
			internalValue:''
		}
	},
	watch:{
		internalValue:{
			handler:function(){
				this.$emit('input',this.internalValue);
			}
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
<style src="@/vendor/libs/vue-slider-component/vue-slider-component.scss" lang="scss"></style>