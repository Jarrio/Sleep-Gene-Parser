package react.charts;

import react.types.Noise;
import react.ReactComponent.ReactComponentOfProps;

@:jsRequire('@devexpress/dx-react-chart-material-ui', 'Chart')
extern class Chart extends ReactComponentOfProps<Props> {}

private typedef Props = {
	var data:ChartData;
	@:optional var children:Noise;
	@:optional var width:Int;
	@:optional var height:Int;
}

private typedef ChartData = Array<Dynamic>;
