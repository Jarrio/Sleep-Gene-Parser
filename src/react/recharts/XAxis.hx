package react.recharts;

import react.ReactComponent;

@:jsRequire('recharts', 'XAxis')
extern class XAxis extends ReactComponentOfProps<Props> {}

private typedef Props = {
	@:optional var dataKey:String;
}
