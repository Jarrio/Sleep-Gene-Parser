package react.charts;

import react.ReactComponent.ReactComponentOfProps;
import react.types.Noise;

// @:jsRequire('devextreme-react/chart', 'Label')

@:jsRequire('@devexpress/dx-core', 'Label')
extern class Label extends ReactComponentOfProps<Props> {}

private typedef Props = {
	@:optional var labelComponent:Dynamic->ReactComponent;
	@:optional var staggeringSpacing:Int;
	@:optional var rotationAngle:Int;
	@:optional var displayMode:String;
	@:optional var overlappingBehavior:String;
}

private typedef ChartData = Array<Dynamic>;
