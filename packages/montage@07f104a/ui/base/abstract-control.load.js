montageDefine("07f104a","ui/base/abstract-control",{dependencies:["../../core/core","../component","collections/dict"],factory:function(e,t){var n=(e("../../core/core").Montage,e("../component").Component),r=e("collections/dict");t.AbstractControl=n.specialize({dispatchActionEvent:{value:function(){return this.dispatchEvent(this.createActionEvent())}},_detail:{value:null},detail:{get:function(){return null==this._detail&&(this._detail=new r),this._detail}},createActionEvent:{value:function(){var e,t=document.createEvent("CustomEvent");return e=this._detail,t.initCustomEvent("action",!0,!0,e),t}}})}});