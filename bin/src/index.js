// Generated by Haxe 4.0.5
/* eslint-disable */
;(function ($hx_exports, $global) { "use strict";
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Main = function() { };
Main.main = function() {
	ReactDOM.render({ "$$typeof" : $$tre, type : App._renderWrapper, props : { }, key : null, ref : null},window.document.getElementById("root"));
};
var React_Component = require("react").Component;
var mui_core_styles_Styles = require("@material-ui/core/styles");
var react__$ReactType_ReactType_$Impl_$ = {};
react__$ReactType_ReactType_$Impl_$.fromString = function(s) {
	return s;
};
react__$ReactType_ReactType_$Impl_$.fromComp = function(cls) {
	if(cls.__jsxStatic != null) {
		return cls.__jsxStatic;
	}
	return cls;
};
var App = $hx_exports["App"] = function(props) {
	React_Component.call(this,props);
	this.state = { data : [], content : ""};
};
App.styles = function(theme) {
	return { root : { display : "flex"}, appBar : { width : "calc(100% - " + 240 + "px)", marginRight : 240}, drawer : { width : 240, flexShrink : 0}, drawerPaper : { width : 240}, toolbar : theme.mixins.toolbar, content : { flexGrow : 1, backgroundColor : theme.palette.background.default, padding : theme.spacing(3)}};
};
App.__super__ = React_Component;
App.prototype = $extend(React_Component.prototype,{
	handleUpload: function(data) {
		var _gthis = this;
		var reader = new FileReader();
		reader.readAsText(data.target.files[0]);
		reader.onload = function(response) {
			_gthis.parseGeneData(response.target.result);
			_gthis.setState({ content : response.target.result});
			return;
		};
	}
	,parseGeneData: function(data) {
		var _gthis = this;
		this.parseIndex(function(index) {
			_gthis.parseTags(index);
			var _g = [];
			var item = new haxe_ds__$StringMap_StringMapIterator(index,index.arrayKeys());
			while(item.hasNext()) _g.push(item.next());
			_gthis.setState({ data : _g});
		});
	}
	,parseTags: function(data) {
		var tags = new haxe_ds_StringMap();
		var item = new haxe_ds__$StringMap_StringMapIterator(data,data.arrayKeys());
		while(item.hasNext()) {
			var keys = item.next().summary.split(",");
			var _g1 = 0;
			while(_g1 < keys.length) {
				var key = keys[_g1];
				++_g1;
				if(__map_reserved[key] != null ? tags.existsReserved(key) : tags.h.hasOwnProperty(key)) {
					continue;
				}
				var value = [];
				if(__map_reserved[key] != null) {
					tags.setReserved(key,value);
				} else {
					tags.h[key] = value;
				}
			}
		}
		var item1 = new haxe_ds__$StringMap_StringMapIterator(data,data.arrayKeys());
		while(item1.hasNext()) {
			var item2 = item1.next();
			var _g11 = new haxe_iterators_MapKeyValueIterator(tags);
			while(_g11.hasNext()) {
				var _g2 = _g11.next();
				var value1 = _g2.value;
				if(item2.summary.indexOf(_g2.key) != -1) {
					value1.push(item2.snp);
				}
			}
		}
		return tags;
	}
	,parseIndex: function(cb) {
		externs_Fetch.fetch("./genes.tsv").then(function(data) {
			return data.text().then(function(response) {
				var split_lines = response.split("\n");
				var data1 = new haxe_ds_StringMap();
				var i = 0;
				var _g = 0;
				while(_g < split_lines.length) {
					var line = split_lines[_g++];
					if(i++ == 0) {
						continue;
					}
					var column = line.split("\t");
					var value = { all_alleles : column[0], a_allele : column[1], aa_allele : column[2], ag_allele : column[3], g_allele : column[4], t_allele : column[5], gg_allele : column[6], tt_allele : column[7], cc_allele : column[8], ct_allele : column[9], c_allele : column[10], gene : column[12], snp : column[13].toUpperCase(), summary : column[11], source : ""};
					var key = column[13];
					if(__map_reserved[key] != null) {
						data1.setReserved(key,value);
					} else {
						data1.h[key] = value;
					}
				}
				cb(data1);
				return;
			},null);
		},null);
	}
	,tableContent: function() {
		var content = [];
		var i = 0;
		var _g = 0;
		var _g1 = this.state.data;
		while(_g < _g1.length) {
			var item = _g1[_g];
			++_g;
			var snpedia = "https://www.snpedia.com/index.php/" + item.snp.toLowerCase();
			content.push({ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableRow), props : { children : [{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.all_alleles}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.a_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.aa_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.g_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.gg_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.t_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.tt_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.cc_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.ct_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.c_allele}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : item.gene}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_Link), props : { rel : "noopener", target : "_blank", href : snpedia, children : item.snp}, key : null, ref : null}}, key : null, ref : null}]}, key : null, ref : null});
		}
		return content;
	}
	,render: function() {
		var content = null;
		if(this.state.data.length == 0) {
			content = { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_Grid), props : { item : true, xs : 12, children : { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_Input), props : { id : "raised-button-file", type : "file", onChange : $bind(this,this.handleUpload)}, key : null, ref : null}}, key : null, ref : null};
		} else {
			content = { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_Grid), props : { item : true, xs : 12, children : { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_Table), props : { children : [{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableHead), props : { children : { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableRow), props : { children : [{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "All Alleles"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "A Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "A;A Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "G Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "G;G Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "T Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "TT Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "CC Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "CT Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "C Allele"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "Gene"}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableCell), props : { children : "SNP"}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null},{ "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_TableBody), props : { children : this.tableContent()}, key : null, ref : null}]}, key : null, ref : null}}, key : null, ref : null};
		}
		return { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromString("div"), props : { className : this.props.classes.root, children : { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromString("main"), props : { className : this.props.classes.content, children : { "$$typeof" : $$tre, type : react__$ReactType_ReactType_$Impl_$.fromComp(mui_core_Grid), props : { container : true, children : content}, key : null, ref : null}}, key : null, ref : null}}, key : null, ref : null};
	}
});
var externs_Fetch = function() { };
externs_Fetch.fetch = function(url,options) {
	return fetch(url);
};
var haxe_ds__$StringMap_StringMapIterator = function(map,keys) {
	this.map = map;
	this.keys = keys;
	this.index = 0;
	this.count = keys.length;
};
haxe_ds__$StringMap_StringMapIterator.prototype = {
	hasNext: function() {
		return this.index < this.count;
	}
	,next: function() {
		var _this = this.map;
		var key = this.keys[this.index++];
		if(__map_reserved[key] != null) {
			return _this.getReserved(key);
		} else {
			return _this.h[key];
		}
	}
};
var haxe_ds_StringMap = function() {
	this.h = { };
};
haxe_ds_StringMap.prototype = {
	get: function(key) {
		if(__map_reserved[key] != null) {
			return this.getReserved(key);
		}
		return this.h[key];
	}
	,setReserved: function(key,value) {
		if(this.rh == null) {
			this.rh = { };
		}
		this.rh["$" + key] = value;
	}
	,getReserved: function(key) {
		if(this.rh == null) {
			return null;
		} else {
			return this.rh["$" + key];
		}
	}
	,existsReserved: function(key) {
		if(this.rh == null) {
			return false;
		}
		return this.rh.hasOwnProperty("$" + key);
	}
	,keys: function() {
		return HxOverrides.iter(this.arrayKeys());
	}
	,arrayKeys: function() {
		var out = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) {
			out.push(key);
		}
		}
		if(this.rh != null) {
			for( var key in this.rh ) {
			if(key.charCodeAt(0) == 36) {
				out.push(key.substr(1));
			}
			}
		}
		return out;
	}
};
var haxe_iterators_MapKeyValueIterator = function(map) {
	this.map = map;
	this.keys = map.keys();
};
haxe_iterators_MapKeyValueIterator.prototype = {
	hasNext: function() {
		return this.keys.hasNext();
	}
	,next: function() {
		var key = this.keys.next();
		return { value : this.map.get(key), key : key};
	}
};
var mui_core_Grid = require("@material-ui/core").Grid;
var mui_core_Input = require("@material-ui/core").Input;
var mui_core_Link = require("@material-ui/core").Link;
var mui_core_Table = require("@material-ui/core").Table;
var mui_core_TableBody = require("@material-ui/core").TableBody;
var mui_core_TableCell = require("@material-ui/core").TableCell;
var mui_core_TableHead = require("@material-ui/core").TableHead;
var mui_core_TableRow = require("@material-ui/core").TableRow;
var mui_core_styles_MuiPaletteBackground = function(paper,_default) {
	this.paper = paper;
	this.default = _default;
};
var ReactDOM = require("react-dom");
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
var $$tre = (typeof Symbol === "function" && Symbol.for && Symbol.for("react.element")) || 0xeac7;
var __map_reserved = {};
App._renderWrapper = (mui_core_styles_Styles.withStyles(App.styles))(react__$ReactType_ReactType_$Impl_$.fromComp(App));
App.__jsxStatic = App._renderWrapper;
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
