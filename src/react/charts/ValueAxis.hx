package react.charts;

import react.ReactComponent;

@:jsRequire('@devexpress/dx-react-chart-material-ui', 'ValueAxis')
extern class ValueAxis extends ReactComponentOfProps<Props> {}

private typedef Props = {
	@:optional var tickSize:Int;
	@:optional var position:ValueAxisPosition;
	@:optional var scaleName:String;
	@:optional var indentFromAxis:Int;
	@:optional var showTicks:Bool;
	@:optional var showGrid:Bool;
	@:optional var showLine:Bool;
	@:optional var showLabels:Bool;
}

enum abstract ValueAxisPosition(String) {
	var bottom;
	var top;
	var left;
	var right;
}
