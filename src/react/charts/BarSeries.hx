package react.charts;

import react.ReactComponent;

@:jsRequire('@devexpress/dx-react-chart-material-ui', 'BarSeries')
extern class BarSeries extends ReactComponentOfProps<{valueField:String, argumentField:String, barWidth:Int}> {}
