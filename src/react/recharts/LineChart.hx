package react.recharts;

import react.ReactComponent;

@:jsRequire('recharts', 'LineChart')
extern class LineChart<Data> extends ReactComponentOfProps<Props<Data>> {}

private typedef Props<Data> = {
	var data:Array<Data>;
	var children:ReactComponent;
	@:optional var width:Int;
	@:optional var height:Int;
}
