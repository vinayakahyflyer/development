import Vue from 'vue'
import { ValidationProvider,ValidationObserver,extend} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import en from 'vee-validate/dist/locale/en';
// loop over all rules
for (let rule in rules) {
  extend(rule, {
    ...rules[rule], // add the rule
    message: en.messages[rule] // add its message
  });
}
import * as filestack from 'filestack-js';
import Uppy from '@uppy/core'
import XHRUpload from '@uppy/xhr-upload'
import Dashboard from '@uppy/dashboard'

// And their styles (for UI plugins)
// With webpack and `style-loader`, you can import them like this:
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = new Uppy()
  .use(Dashboard, {
    trigger: '#select-files',
  })
  .use(XHRUpload, { endpoint: 'https://api2.transloadit.com' })

uppy.on('complete', (result) => {
  console.log('Upload complete! We’ve uploaded these files:', result.successful)
})

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('kr-form', require('./components/kr-form.vue').default);
Vue.component('kr-form-i', require('./components/kr-form-i.vue').default);
Vue.component('kr-quill-editor', require('./components/kr-quill-editor.vue').default);
Vue.component('kr-date', require('./components/kr-date.vue').default);
Vue.component('kr-multiselect', require('./components/kr-multiselect.vue').default);
Vue.component('kr-slider', require('./components/kr-slider.vue').default);


window.fileStackClient = filestack.init(process.env.VUE_APP_FILESTACK_API_KEY);
Vue.component('kr-file', require('./components/kr-file.vue').default);