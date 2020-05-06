(this["webpackJsonpsleep-gene-analysis"]=this["webpackJsonpsleep-gene-analysis"]||[]).push([[0],{162:function(e,l,r){e.exports=r(163)},163:function(e,l,r){(function(e){!function(e,l){"use strict";var t=function(){};t.iter=function(e){return{cur:0,arr:e,hasNext:function(){return this.cur<this.arr.length},next:function(){return this.arr[this.cur++]}}};var n=function(){};n.main=function(){v.render({$$typeof:x,type:i._renderWrapper,props:{},key:null,ref:null},window.document.getElementById("root"))};var o=r(0).Component,p=r(80),s={fromString:function(e){return e},fromComp:function(e){return null!=e.__jsxStatic?e.__jsxStatic:e}},i=e.App=function(e){o.call(this,e),this.state={data:[],content:""}};i.styles=function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - 240px)",marginRight:240},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}},i.__super__=o,i.prototype=function(e,l){var r=Object.create(e);for(var t in l)r[t]=l[t];return l.toString!==Object.prototype.toString&&(r.toString=l.toString),r}(o.prototype,{handleUpload:function(e){var l=this,r=new FileReader;r.readAsText(e.target.files[0]),r.onload=function(e){l.parseGeneData(e.target.result),l.setState({content:e.target.result})}},parseGeneData:function(e){var l=this;this.parseIndex((function(e){l.parseTags(e);for(var r=[],t=new f(e,e.arrayKeys());t.hasNext();)r.push(t.next());l.setState({data:r})}))},parseTags:function(e){for(var l=new u,r=new f(e,e.arrayKeys());r.hasNext();)for(var t=r.next().summary.split(","),n=0;n<t.length;){var o=t[n];if(++n,null!=w[o]?!l.existsReserved(o):!l.h.hasOwnProperty(o)){var p=[];null!=w[o]?l.setReserved(o,p):l.h[o]=p}}for(var s=new f(e,e.arrayKeys());s.hasNext();)for(var i=s.next(),a=new y(l);a.hasNext();){var h=a.next(),c=h.value;-1!=i.summary.indexOf(h.key)&&c.push(i.snp)}return l},parseIndex:function(e){a.fetch("./genes.tsv").then((function(l){return l.text().then((function(l){for(var r=l.split("\n"),t=new u,n=0,o=0;o<r.length;){var p=r[o++];if(0!=n++){var s=p.split("\t"),i={all_alleles:s[0],a_allele:s[1],aa_allele:s[2],ag_allele:s[3],g_allele:s[4],t_allele:s[5],gg_allele:s[6],tt_allele:s[7],cc_allele:s[8],ct_allele:s[9],c_allele:s[10],gene:s[12],snp:s[13].toUpperCase(),summary:s[11],source:""},a=s[13];null!=w[a]?t.setReserved(a,i):t.h[a]=i}}e(t)}),null)}),null)},tableContent:function(){for(var e=[],l=0,r=this.state.data;l<r.length;){var t=r[l];++l;var n="https://www.snpedia.com/index.php/"+t.snp.toLowerCase();e.push({$$typeof:x,type:s.fromComp(C),props:{children:[{$$typeof:x,type:s.fromComp(_),props:{children:t.all_alleles},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.a_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.aa_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.g_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.gg_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.t_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.tt_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.cc_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.ct_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.c_allele},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:t.gene},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:{$$typeof:x,type:s.fromComp(d),props:{rel:"noopener",target:"_blank",href:n,children:t.snp},key:null,ref:null}},key:null,ref:null}]},key:null,ref:null})}return e},render:function(){var e=null;0==this.state.data.length?e={$$typeof:x,type:s.fromComp(h),props:{item:!0,xs:12,children:{$$typeof:x,type:s.fromComp(c),props:{id:"raised-button-file",type:"file",onChange:g(this,this.handleUpload)},key:null,ref:null}},key:null,ref:null}:e={$$typeof:x,type:s.fromComp(h),props:{item:!0,xs:12,children:{$$typeof:x,type:s.fromComp(m),props:{stickyHeader:!0,style:{backgroundColor:"#f7f7f7"},children:[{$$typeof:x,type:s.fromComp(k),props:{children:{$$typeof:x,type:s.fromComp(C),props:{children:[{$$typeof:x,type:s.fromComp(_),props:{children:"All Alleles"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"A Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"A;A Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"G Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"G;G Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"T Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"TT Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"CC Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"CT Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"C Allele"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"Gene"},key:null,ref:null},{$$typeof:x,type:s.fromComp(_),props:{children:"SNP"},key:null,ref:null}]},key:null,ref:null}},key:null,ref:null},{$$typeof:x,type:s.fromComp($),props:{children:this.tableContent()},key:null,ref:null}]},key:null,ref:null}},key:null,ref:null};return{$$typeof:x,type:s.fromString("div"),props:{className:this.props.classes.root,children:{$$typeof:x,type:s.fromString("main"),props:{className:this.props.classes.content,children:{$$typeof:x,type:s.fromComp(h),props:{container:!0,children:e},key:null,ref:null}},key:null,ref:null}},key:null,ref:null}}});var a=function(){};a.fetch=function(e,l){return fetch(e)};var f=function(e,l){this.map=e,this.keys=l,this.index=0,this.count=l.length};f.prototype={hasNext:function(){return this.index<this.count},next:function(){var e=this.map,l=this.keys[this.index++];return null!=w[l]?e.getReserved(l):e.h[l]}};var u=function(){this.h={}};u.prototype={get:function(e){return null!=w[e]?this.getReserved(e):this.h[e]},setReserved:function(e,l){null==this.rh&&(this.rh={}),this.rh["$"+e]=l},getReserved:function(e){return null==this.rh?null:this.rh["$"+e]},existsReserved:function(e){return null!=this.rh&&this.rh.hasOwnProperty("$"+e)},keys:function(){return t.iter(this.arrayKeys())},arrayKeys:function(){var e=[];for(var l in this.h)this.h.hasOwnProperty(l)&&e.push(l);if(null!=this.rh)for(var l in this.rh)36==l.charCodeAt(0)&&e.push(l.substr(1));return e}};var y=function(e){this.map=e,this.keys=e.keys()};y.prototype={hasNext:function(){return this.keys.hasNext()},next:function(){var e=this.keys.next();return{value:this.map.get(e),key:e}}};var h=r(23).Grid,c=r(23).Input,d=r(23).Link,m=r(23).Table,$=r(23).TableBody,_=r(23).TableCell,k=r(23).TableHead,C=r(23).TableRow,v=r(10);function g(e,r){return null==r?null:(null==r.__id__&&(r.__id__=l.$haxeUID++),null==e.hx__closures__?e.hx__closures__={}:t=e.hx__closures__[r.__id__],null==t&&(t=r.bind(e),e.hx__closures__[r.__id__]=t),t);var t}l.$haxeUID|=0;var x="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,w={};i._renderWrapper=p.withStyles(i.styles)(s.fromComp(i)),i.__jsxStatic=i._renderWrapper,n.main()}(l,"undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:this)}).call(this,r(154))}},[[162,1,2]]]);
//# sourceMappingURL=main.ff21e6d7.chunk.js.map