montageDefine("4676c02","generic-order",{dependencies:["./shim-object"],factory:function(e,t,n){function i(){throw Error("Can't construct. GenericOrder is a mixin.")}var r=e("./shim-object");n.exports=i,i.prototype.equals=function(e,t){return t=t||this.contentEquals||r.equals,this===e?!0:e?this.length===e.length&&this.zip(e).every(function(e){return t(e[0],e[1])}):!1},i.prototype.compare=function(e,t){if(t=t||this.contentCompare||r.compare,this===e)return 0;if(!e)return 1;var n=Math.min(this.length,e.length),i=this.zip(e).reduce(function(e,i,r){return 0===e?r>=n?e:t(i[0],i[1]):e},0);return 0===i?this.length-e.length:i}}});