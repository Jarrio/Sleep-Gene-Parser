package react.recharts;

import react.ReactComponent;

@:jsRequire('recharts', 'YAxis')
extern class YAxis extends ReactComponentOfProps<Props> {}

private typedef Props = {
	@:optional var dataKey:String;
}
