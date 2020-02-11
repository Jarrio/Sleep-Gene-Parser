package react.recharts;

import react.ReactComponent;

@:jsRequire('recharts', 'Line')
extern class Line extends ReactComponentOfProps<Props> {}

private typedef Props = {
	@:optional var dataKey:String;
	@:optional var type:String;
	@:optional var stroke:String;
}
