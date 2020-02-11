package react.charts;

import react.ReactComponent.ReactComponentOfProps;
import react.types.Noise;

@:jsRequire('@devexpress/dx-react-chart-material-ui', 'Title')
extern class Title extends ReactComponentOfProps<Props> {}

private typedef Props = {
	@:optional var text:String;
	@:optional var position:TitlePosition;
}

enum abstract TitlePosition(String) {
	var top;
	var bottom;
}
