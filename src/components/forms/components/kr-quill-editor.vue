<template>
  <div :class="{'is-invalid':state===false,'is-valid':state===true}">
    <quill-editor v-model="editorContent" :options="editorOptions" />
  </div>
</template>

<style src="@/vendor/libs/vue-quill-editor/typography.scss" lang="scss"></style>
<style src="@/vendor/libs/vue-quill-editor/editor.scss" lang="scss"></style>

<script>
export default {
  props:['value','state'],
  components: {
    quillEditor: () => import('vue-quill-editor/dist/vue-quill-editor').then(m => m.quillEditor).catch(() => {})
  },
  created(){
    this.editorContent = this.value;
  },
  data: () => ({
    editorContent: '',
    editorOptions: {
      modules: {
        toolbar: [
          //[{ 'header': [1, 2, 3, 4, 5, 6, false] }, { 'font': [] }, { 'size': [] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ 'color': [] }, { 'background': [] }],
          [{ 'script': 'sub' }, { 'script': 'super' }],
          ['blockquote', 'code-block'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
          [{ 'direction': 'rtl' }, { 'align': [] }],
          ['link', 'image', 'video'],
          ['clean']
        ]
      }
    },
  }),
  watch:{
    editorContent:{
      handler:function(){
        this.$emit('input',this.editorContent);
      },
    },
    value:{
      handler:function(){
        this.editorContent = this.value
      },
      deep:true
    }
  }
}
</script>
<style>
.ql-editor p{
  margin-bottom:0px;
}
.quill-editor{
  border-radius:3px;
}
.is-invalid .quill-editor{
  border: 1px solid  #d9534f;
}
.is-valid .quill-editor{
  border: 1px solid  #02BC77;
}
</style>
