montageDefine("66ac009","ui/anchor.reel/anchor",{dependencies:["ui/native-control"],factory:function(e,t){var n=e("ui/native-control").NativeControl,i=t.Anchor=n.specialize({blur:{value:function(){this._element.blur()}},focus:{value:function(){this._element.focus()}}});i.addAttributes({textContent:null,href:null,hreflang:null,media:null,rel:null,target:null,type:null})}});