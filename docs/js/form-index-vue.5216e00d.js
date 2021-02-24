(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["form-index-vue","form-api-vue","form-examples-vue"],{"34b5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("alert",{staticClass:"mt6",attrs:{tip:""}},[s("ul",[s("li",{staticClass:"title5"},[t._v("The "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" component is used for validation.")]),s("li",[t._v("A "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" is invisible and has no style by default. You can put it in a\n"),s("span",{staticClass:"code"},[t._v("w-card")]),t._v(" (or put a "),s("span",{staticClass:"code"},[t._v("w-card")]),t._v(" in it) to have some style. Alternatively,\nyou can apply colors and spaces CSS classes on it (e.g. "),s("span",{staticClass:"code"},[t._v(".blue--bg")]),t._v(", "),s("span",{staticClass:"code"},[t._v(".pa4")]),t._v(").")]),s("li",[t._v("The "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" tag translates to a "),s("span",{staticClass:"code"},[t._v("<form>")]),t._v(" tag.")])])]),s("title-link",{attrs:{h2:""}},[t._v("How it works")]),s("div",{staticClass:"title3"},[t._v("The validation works in 3 steps:")]),s("ol",[s("li",[t._v("Add one or more validator functions on the field you want validated"),s("ssh-pre",{attrs:{language:"html-vue",label:"Vue template"}},[t._v('<w-input label="First name" :validators="[validators.required]"></w-input>')]),s("ssh-pre",{attrs:{language:"js",label:"Javascript"}},[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})")])],1),s("li",{staticClass:"mt6"},[t._v("Wrap the field in a "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" and add a submit button"),s("ssh-pre",{attrs:{language:"html-vue",label:"Vue template"}},[t._v('<w-form>\n  <w-input label="First name" :validators="[validators.required]"></w-input>\n\n  <w-button type="submit">Submit</w-button>\n</w-form>')])],1),t._m(0)]),s("alert",{attrs:{tip:""}},[s("strong",[t._v("As of version 1.14.4")]),s("p",[t._v("It is also possible to trigger a particular field validation programmatically via\n"),s("code",[t._v("this.$refs.myField.validate()")]),t._v(". all the validator functions associated on this field will be\nre-run.\n")])]),s("title-link",{attrs:{h2:""}},[t._v("Basic validation")]),t._m(1),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form v-model="valid">\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <strong>v-model:</strong>\n    <code class="ml2 mr4">\n      '+t._s("{{ valid === false ? 'false' : valid || 'null' }}")+'\n    </code>\n    <w-button type="submit" :disabled="valid === false">\n      Validate\n    </w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})")]},proxy:!0}])},[s("w-form",{model:{value:t.form1.valid,callback:function(e){t.$set(t.form1,"valid",e)},expression:"form1.valid"}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required,t.validators.alphabetical]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("strong",[t._v("v-model:")]),s("code",{staticClass:"ml2 mr4"},[t._v(t._s(!1===t.form1.valid?"false":t.form1.valid||"null"))]),s("w-button",{attrs:{type:"submit",disabled:!1===t.form1.valid}},[t._v("Validate")])],1)],1)],1),s("alert",{attrs:{warning:""}},[s("strong",[t._v("Heads up!")]),s("div",[t._v("The v-model value has 3 states: "),s("code",[t._v("true")]),t._v(" and "),s("code",[t._v("false")]),t._v(" for success and error, but also\n"),s("code",[t._v("null")]),t._v(" for pristine."),s("br"),t._v("\nPristine represents the moment where the form is still untouched, neither valid, nor invalid.")])]),s("alert",{attrs:{success:""}},[t._v("Even in the most advanced case, Wave UI's form validation is very simple, it doesn't\nrequire you to use "),s("code",[t._v("$refs")]),t._v(".\n")]),s("title-link",{attrs:{h2:""}},[t._v("Direct submission to a server")]),t._m(2),t._m(3),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form\n  action="test.php"\n  method="post"\n  target="_blank"\n  allow-submit>\n\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-form",{attrs:{action:"test.php",method:"post",target:"_blank","allow-submit":""}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("alert",{attrs:{tip:""}},[t._v("To submit a form via the HTML standard way like in this example, you need to add\nthe "),s("code",[t._v("action")]),t._v(" attribute and optionally a "),s("code",[t._v("method")]),t._v(" attribute.\n")]),s("title-link",{attrs:{h2:""}},[t._v("Validate on submit, on blur, on keyup")]),t._m(4),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form no-keyup-validation no-blur-validation>\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-form",{attrs:{"no-keyup-validation":"","no-blur-validation":""}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("title-link",{attrs:{h2:""}},[t._v("Reset the form")]),t._m(5),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-form v-model="valid">\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button\n      class="my1 mr2"\n      bg-color="warning"\n      type="reset">\n      Reset\n    </w-button>\n    <w-button\n      class="my1"\n      type="submit">\n      Validate\n    </w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  valid: null,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-form",{model:{value:t.form4.valid,callback:function(e){t.$set(t.form4,"valid",e)},expression:"form4.valid"}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{staticClass:"my1 mr2",attrs:{"bg-color":"warning",type:"reset"}},[t._v("Reset")]),s("w-button",{staticClass:"my1",attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("title-link",{attrs:{h2:""}},[t._v("On validate, on success & on error events")]),s("p",{staticClass:"title5"},[t._v("These events are fired on submit.")]),t._m(6),s("alert",{attrs:{tip:""}},[t._v("The form status is always accurate (through the "),s("span",{staticClass:"code"},[t._v("v-model")]),t._v("), and the "),s("code",[t._v("error")]),t._v(" &\n"),s("code",[t._v("success")]),t._v(" events return the "),s("span",{staticClass:"code"},[t._v("errorsCount")]),t._v("."),s("br"),t._v("\nSo the only thing you could be missing at this point is the exact number of errors between the\nsubmission attempts (if you need it) since a "),s("span",{staticClass:"code"},[t._v("keyup")]),t._v(" or "),s("span",{staticClass:"code"},[t._v("blur")]),t._v(" event may trigger\nan error or success on that element. The next example introduces the "),s("code",[t._v("errors-count")]),t._v(" syncing\nfor this purpose.")]),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-alert\n  :success="success"\n  :error="error"\n  :info="!success && !error">\n  '+t._s("{{ !success && !error ? 'The form is still pristine' : (success ? 'Success' : 'Error') }}")+"\n</w-alert>\n\n<p>\n  The form has been validated "+t._s("{{ validated }}")+' time(s).\n</p>\n\n<w-form\n  @validate="validated++;success = error = false"\n  @success="success = true"\n  @error="error = true">\n\n  <w-input\n    label="First name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <w-input\n    class="mt3"\n    label="Last name"\n    :validators="[validators.required]">\n  </w-input>\n\n  <div class="text-right mt6">\n    <w-button type="submit">Validate</w-button>\n  </div>\n</w-form>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  success: null,\n  error: null,\n  validated: 0,\n  validators: {\n    required: value => !!value || 'This field is required'\n  }\n})\n")]},proxy:!0}])},[s("w-alert",{attrs:{success:t.form5.success,error:t.form5.error,info:!t.form5.success&&!t.form5.error}},[t._v(t._s(t.form5.success||t.form5.error?t.form5.success?"Success":"Error":"The form is still pristine"))]),s("p",[t._v("The form has been validated "+t._s(t.form5.validated)+" time(s).")]),s("w-form",{on:{validate:function(e){t.form5.validated++,t.form5.success=t.form5.error=!1},success:function(e){t.form5.success=!0},error:function(e){t.form5.error=!0}}},[s("w-input",{attrs:{label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{label:"Last name",validators:[t.validators.required]}}),s("div",{staticClass:"text-right mt6"},[s("w-button",{attrs:{type:"submit"}},[t._v("Validate")])],1)],1)],1),s("title-link",{attrs:{h2:"",slug:"advanced-validation"}},[t._v("Advanced validation with everything")]),t._m(7),t._m(8),s("example",{scopedSlots:t._u([{key:"html",fn:function(){return[t._v('<w-card class="white--bg" content-class="pa0">\n  <div class="message-box">\n    <w-transition-fade>\n      <w-alert\n        class="my0 text-light"\n        v-if="form.submitted"\n        success\n        no-border>\n        The form is valid, ready to send it!\n      </w-alert>\n\n      <w-alert\n        class="my0 text-light"\n        v-else-if="form.valid === false"\n        error\n        no-border>\n        The form has '+t._s("{{ form.errorsCount }}")+' errors.\n      </w-alert>\n    </w-transition-fade>\n  </div>\n\n  <w-form\n    class="px8 pt2 pb12"\n    v-model="form.valid"\n    :errors-count.sync="form.errorsCount"\n    @validate="onValidate"\n    @success="onSuccess">\n\n    <w-input\n      required\n      label="First name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-input\n      class="mt3"\n      required\n      label="Last name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-input\n      class="mt3"\n      disabled\n      required\n      label="User name"\n      :validators="[validators.required]">\n    </w-input>\n\n    <w-flex class="mt4" wrap align-center justify-end>\n      <w-checkbox\n        required\n        :validators="[validators.consent]">\n        I agree to the terms & conditions\n      </w-checkbox>\n\n      <div class="spacer" />\n\n      <w-button\n        class="my1 mr2"\n        bg-color="warning"\n        type="reset"\n        @click="form.submitted = form.sent = false">\n        Reset\n      </w-button>\n\n      <w-button\n        class="my1"\n        type="submit"\n        :disabled="form.valid === false"\n        :loading="form.submitted && !form.sent">\n        Validate\n      </w-button>\n    </w-flex>\n  </w-form>\n\n  <w-notification\n    v-model="form.sent"\n    success\n    transition="bounce"\n    absolute\n    plain\n    round\n    bottom>\n    The form was sent successfully!\n  </w-notification>\n</w-card>')]},proxy:!0},{key:"js",fn:function(){return[t._v("data: () => ({\n  form: {\n    valid: null,\n    submitted: false,\n    sent: false,\n    errorsCount: 0\n  },\n  validators: {\n    required: value => !!value || 'This field is required',\n    consent: value => !!value || 'You must agree'\n  }\n}),\n\nmethods: {\n  onSuccess () {\n    setTimeout(() => (this.form.sent = true), 2000)\n  },\n  onValidate () {\n    this.form.sent = false\n    this.form.submitted = this.form.errorsCount === 0\n  }\n}")]},proxy:!0},{key:"css",fn:function(){return[t._v(".message-box {min-height: 35px;}")]},proxy:!0}])},[s("w-card",{staticClass:"white--bg",attrs:{"content-class":"pa0"}},[s("div",{staticClass:"message-box"},[s("w-transition-fade",[t.form6.submitted?s("w-alert",{staticClass:"my0 text-light",attrs:{success:"","no-border":""}},[t._v("The form is valid, ready to send it!")]):!1===t.form6.valid?s("w-alert",{staticClass:"my0 text-light",attrs:{error:"","no-border":""}},[t._v("The form has "+t._s(t.form6.errorsCount)+" errors.")]):t._e()],1)],1),s("w-form",{staticClass:"px8 pt2 pb12",attrs:{"errors-count":t.form6.errorsCount},on:{"update:errorsCount":function(e){return t.$set(t.form6,"errorsCount",e)},"update:errors-count":function(e){return t.$set(t.form6,"errorsCount",e)},validate:t.onValidate,success:t.onSuccess},model:{value:t.form6.valid,callback:function(e){t.$set(t.form6,"valid",e)},expression:"form6.valid"}},[s("w-input",{attrs:{required:"",label:"First name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{required:"",label:"Last name",validators:[t.validators.required]}}),s("w-input",{staticClass:"mt3",attrs:{disabled:"",required:"",label:"User name",validators:[t.validators.required]}}),s("w-flex",{staticClass:"mt4",attrs:{wrap:"","align-center":"","justify-end":""}},[s("w-checkbox",{attrs:{required:"",validators:[t.validators.consent]}},[t._v("I agree to the terms & conditions")]),s("div",{staticClass:"spacer"}),s("w-button",{staticClass:"my1 mr2",attrs:{"bg-color":"warning",type:"reset"},on:{click:function(e){t.form6.submitted=t.form6.sent=!1}}},[t._v("Reset")]),s("w-button",{staticClass:"my1",attrs:{type:"submit",disabled:!1===t.form6.valid,loading:t.form6.submitted&&!t.form6.sent}},[t._v("Validate")])],1)],1),s("w-notification",{attrs:{success:"",transition:"bounce",absolute:"",plain:"",round:"",bottom:""},model:{value:t.form6.sent,callback:function(e){t.$set(t.form6,"sent",e)},expression:"form6.sent"}},[t._v("The form was sent successfully!")])],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"mt6"},[t._v("That's enough, you can let the "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" component do the rest!"),s("br"),t._v("\nBut you might want more options, discover them in the examples bellow.\n")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("In this example and by default, the fields are validated on "),s("span",{staticClass:"code"},[t._v("keyup")]),t._v(", on "),s("span",{staticClass:"code"},[t._v("blur")]),t._v(",\nand on "),s("span",{staticClass:"code"},[t._v("submit")]),t._v("."),s("br"),t._v("\nThe v-model on the "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" gets updated with the form status.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt6"},[t._v("The "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" prevents the form submission by default - for modern usage where an AJAX\ncall is made on success ("),s("a",{attrs:{href:"#advanced-validation"}},[t._v("see the last example: Advanced validation")]),t._v(").\n"),s("br"),t._v("\nBut in case you need to send the form as is to the server, you can set the "),s("code",[t._v("allow-submit")]),t._v("\noption to "),s("span",{staticClass:"code"},[t._v("true")]),t._v(" and provide a URL via the usual "),s("code",[t._v("action")]),t._v(" attribute, and optionally\nset a "),s("code",[t._v("method")]),t._v(" attribute. Just like a normal "),s("span",{staticClass:"code"},[t._v("<form>")]),t._v(" tag."),s("br"),s("br"),t._v("\n\nThe "),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" will handle the validation and prevent the form submission\nuntil the form is valid. Once the form is valid, the form submission will not be prevented and the\ndata will be submitted to the URL set in the "),s("code",[t._v("action")]),t._v(" attribute.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt2"},[t._v("In this example, the form data will be submitted in another tab to a fake "),s("span",{staticClass:"code"},[t._v("test.php")]),t._v(".\n")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("By default the validation happens on "),s("span",{staticClass:"code"},[t._v("keyup")]),t._v(", on "),s("span",{staticClass:"code"},[t._v("blur")]),t._v(" and on\n"),s("span",{staticClass:"code"},[t._v("submit")]),t._v(". You can disable the "),s("span",{staticClass:"code"},[t._v("keyup")]),t._v(" and "),s("span",{staticClass:"code"},[t._v("blur")]),t._v(" validations\nwith "),s("code",[t._v("no-keyup-validation")]),t._v(" and "),s("code",[t._v("no-blur-validation")]),t._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Once the form is invalid, you can reset it with a basic HTML reset button, like in this example."),s("br"),t._v("\nAlternatively, you can programmatically reset the form and all its element by setting the form\nvalue (or v-model) to "),s("code",[t._v("null")]),t._v(", like pristine.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",{staticClass:"mt1"},[s("code",[t._v("before-validate")]),t._v(" is always fired as soon as a submission is attempted (e.g. submit\nbutton click), prior validation.")]),s("li",{staticClass:"mt1"},[s("code",[t._v("validate")]),t._v(" is always fired as soon as a submission is attempted, after validation.")]),s("li",{staticClass:"mt1"},[s("code",[t._v("success")]),t._v(" is fired after submission when the validation is successful.\nYou should send the data to the server from this hook.")]),s("li",{staticClass:"mt1"},[s("code",[t._v("error")]),t._v(" is fired after submission when the validation is failing.\nYou can show an error message from this hook.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("This example shows a full form validation and lifecycle - everything you could need."),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("It handles the error and success states of the form elements on keyup, on blur and submit.")]),s("li",[t._v("It allows resetting the form.")]),s("li",[t._v("It keeps track of the form errors count at any time and displays a global message using the fired\n"),s("span",{staticClass:"code"},[t._v("w-form")]),t._v(" custom events."),s("br")]),s("li",[t._v("When the form is valid and submitted, it simulates a form sending to a backend and displays\na notification.")])])}],r={data:function(){return{form1:{valid:null},form2:{valid:null},form3:{valid:null},form4:{valid:null},form5:{valid:null,error:null,success:null,validated:0},form6:{valid:null,submitted:!1,sent:!1,errorsCount:0},validators:{required:function(t){return!!t||"This field is required"},alphabetical:function(t){return/^[a-z \-']+$/i.test(t)||"This field only accepts letters."},consent:function(t){return!!t||"You must agree"}}}},methods:{onSuccess:function(){var t=this;setTimeout((function(){return t.form6.sent=!0}),2e3)},onValidate:function(){this.form6.sent=!1,this.form6.submitted=0===this.form6.errorsCount}}},i=r,o=(s("654c"),s("2877")),l=Object(o["a"])(i,a,n,!1,null,null,null);e["default"]=l.exports},"40f9":function(t,e,s){},"5fc5":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"w-divider my12"}),s("title-link",{staticClass:"title1",attrs:{h2:""}},[t._v("API")]),s("component-api",{staticClass:"mt0",attrs:{items:t.props,descriptions:t.propsDescs,title:"Props"}}),s("component-api",{attrs:{items:t.slots,title:"Slots"}}),s("component-api",{attrs:{items:t.events,title:"Events"}})],1)},n=[],r=(s("13d5"),s("bdff")),i={value:'<strong class="error"><code>model-value</code> in Vue 3.</strong><br>Contains the status of the form validity at all times. Three values are possible: <code>null</code> when pristine (untouched), <code>false</code> when invalid, <code>true</code> when valid.<br>This value gets updated every time a validation is triggered on a single field or on all the fields at once on form submit.<br>Setting this value to <code>null</code> will reset the form.',allowSubmit:"Native HTML submits the form to the server when all the form elements are valid.<br>Usually and by default, the form submission is prevented and an AJAX call is made from the front end. This is completely up to the developer.",noKeyupValidation:"Prevents the form element validation on keyup (happening by default).",noBlurValidation:"Prevents the form element validation on blur (happening by default).",errorPlaceholders:"Reserves a space under all the form elements so that triggering an error and showing the error message will not change the height of the form."},o={default:{description:"The form content."}},l={submit:{description:"Emitted on form submit.",params:{"[DOM event object]":"The associated reset DOM event."}},"before-validate":{description:"Emitted before validation, every time a validation is triggered."},validate:{description:"Emitted on form validate, every time a validation is triggered.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},success:{description:"Emitted on form success, when there is no error in the form and the validation is successful.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},error:{description:"Emitted on form error, when there is at least one error in the form and the validation fails.<br>Returns a single object containing:",params:{e:"The associated DOM event.",errorsCount:"An integer representing the number of errors in the form."}},reset:{description:"Emitted on form reset. A reset can be triggered by setting the v-model value to null or by clicking on a reset button.",params:{"[DOM event object]":"The associated reset DOM event."}},input:{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 2.x only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:modelValue":{description:"Emitted every time the form status changes.<br>Updates the v-model value in Vue 3 only.",params:{"[Boolean, Null]":"The new status of the form: one of <code>null</code> when pristine, <code>false</code> when invalid, <code>true</code> when valid."}},"update:errorsCount":{description:"Emitted every time the errorsCount changes. To be used with <code>:errors-count.sync</code> on Vue 2.x or <code>v-model:errors-count</code> on Vue 3.",params:{"[Integer]":"The number of errors in the form."}}},d={data:function(){return{propsDescs:i,slots:o}},computed:{props:function(){return r["a"].props},events:function(){return r["a"].emits.reduce((function(t,e){return(t[e]=l[e]||{})&&t}),{})}}},u=d,c=s("2877"),v=Object(c["a"])(u,a,n,!1,null,null,null);e["default"]=v.exports},"654c":function(t,e,s){"use strict";s("40f9")},"6cb6":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",[s("ui-component-title",[t._v("w-form")]),s("examples"),s("api")],1)},n=[],r=s("34b5"),i=s("5fc5"),o={components:{Examples:r["default"],Api:i["default"]}},l=o,d=s("2877"),u=Object(d["a"])(l,a,n,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=form-index-vue.5216e00d.js.map