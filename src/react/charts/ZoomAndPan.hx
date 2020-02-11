package react.charts;

import react.ReactComponent;

@:jsRequire('@devexpress/dx-react-chart-material-ui', 'ZoomAndPan')
extern class ZoomAndPan extends ReactComponent {}

private typedef Props = {
	@:optional var interactionWithArguments:ZoomAndPanInteractions;
	@:optional var interactionWithValues:ZoomAndPanInteractions;
	@:optional var zoomRegionKey:ZoomAndPanKey;
}

@:jsRequire('@devexpress/dx-react-chart-material-ui', 'ZoomAndPan.DragBox')
extern class ZoomAndPanDragBox extends ReactComponentOfProps<RectProps> {}

private typedef RectProps = {
	@:optional var x:Int;
	@:optional var y:Int;
	@:optional var width:Int;
	@:optional var height:Int;
}

enum abstract ZoomAndPanInteractions(String) {
	var none;
	var pan;
	var zoom;
	var both;
}

enum abstract ZoomAndPanKey(String) {
	var shift;
	var alt;
	var ctrl;
}
