montageDefine("1d97bb3","ui/rich-text-editor/rich-text-editor.reel/rich-text-sanitizer",{dependencies:["montage"],factory:function(e,t){var n=e("montage").Montage;t.Sanitizer=n.specialize({willSetValue:{value:function(e,t){return this._scopeCSS(e,t)}},didGetValue:{value:function(e,t){return this._unscopeCSS(e,t)}},willInsertHtmlData:{value:function(e,t){return this._scopeCSS(this._removeScript(e),t)}},_scopeCSS:{enumerable:!0,value:function(e,t){var n=".editor-"+t+" ";return"string"==typeof e&&(e=e.replace(/(<style ?[^>]*>)([^<]*)(<\/style>)/gi,function(e,t,i,r){return i=i.replace(/\t|\n|\r/g,function(e){return"	"==e?" ":""}),i=i.replace(/\*\.editor-[^ ] +/g,"body"),i=i.replace(/\.editor-[^ ]+ /g,""),i=i.replace(/([^{]+)({[^}]*})/gi,function(e,t,i){return t=t.replace(/ *([^,]+)/g,function(e,t){return"body"==t.toLowerCase()?"*"+n:n+t}),t+i}),t+i+r})),e}},_unscopeCSS:{enumerable:!0,value:function(e){return"string"==typeof e&&(e=e.replace(/(<style ?[^>]*>)([^<]*)(<\/style>)/gi,function(e,t,n,i){return n=n.replace(/\*\.editor-[^ ] +/g,"body"),n=n.replace(/\.editor-[^ ]+ /g,""),t+n+i})),e}},_removeScript:{enumerable:!0,value:function(e){var t=document.createElement("div"),n=function(e){var t,i,r,a=e.children,s=a.length,o=e.attributes,l=o.length;for(r=0;l>r;r++)i=o[r],(i.name.match(/^on[a-z]+/i)||i.value.match(/^javascript:/))&&(e.removeAttribute(i.name),r--,l--);for(r=0;s>r;r++)t=a[r],"SCRIPT"==t.tagName?(t.parentNode.removeChild(t),r--,s--):n(t)};return t.innerHTML=e,n(t),t.innerHTML}}})}});