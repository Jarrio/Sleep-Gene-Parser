package react.recharts;

import react.ReactComponent;

@:jsRequire('recharts', 'Bar')
extern class Bar extends ReactComponentOfProps<Props> {}

private typedef Props = {
	@:optional var dataKey:String;
	@:optional var fill:String;
}
