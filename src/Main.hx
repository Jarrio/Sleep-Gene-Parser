package;

import haxe.crypto.Base64;
import history.History;
import history.Location;
import js.Browser;
import js.html.FileReader;
import mui.core.*;
import mui.core.common.CSSPosition;
import mui.core.drawer.DrawerAnchor;
import mui.core.drawer.DrawerVariant;
import mui.core.styles.Classes;
import mui.core.styles.MuiTheme;
import mui.core.styles.Styles;
import mui.core.typography.TypographyVariant;
import mui.icon.Computer;
import mui.icon.Inbox;
import pages.*;
import pages.Overview;
import react.ReactComponent;
import react.ReactDOM;
import react.ReactMacro.jsx;
import react.charts.ArgumentAxis;
import react.charts.BarSeries;
import react.charts.Chart;
import react.charts.LineSeries;
import react.charts.Title;
import react.charts.ValueAxis;
import react.charts.ZoomAndPan;
import react.native.firebase.Firebase;
import react.native.firebase.FirebaseApp;
import react.native.firebase.auth.UserCredential.User;
import react.native.firebase.auth.UserCredential;
import react.recharts.*;
import react.router.BrowserRouter;
import react.router.Link;
import react.router.ReactRouter;
import react.router.Route;
import react.router.Router;
import react.router.Switch;

class Main {
	public static var app:FirebaseApp;

	static function main() {
		ReactDOM.render(jsx('<$App/>'), Browser.document.getElementById('root'));
	}
}

typedef GeneFormat = {
	var gene:String;
	var snp:String;
	var summary:String;
	var source:String;
}

private typedef Props = {
	> RouteRenderProps,
	var classes:TClasses;
}

private typedef State = {
	@:optional var chart_data:Array<{x:String, y:Int}>;
	@:optional var data:Array<GeneFormat>;
	@:optional var content:String;
}

private typedef TClasses = Classes<[root, appBar, drawer, drawerPaper, toolbar, content]>;

@:wrap(Styles.withStyles(styles))
@:expose('App')
class App extends ReactComponentOf<Props, State> {
	public static function styles(theme:DefaultTheme):ClassesDef<TClasses> {
		var drawerWidth = 240;
		return Styles.jss({
			root: {
				display: 'flex',
			},
			appBar: {
				width: 'calc(100% - ${drawerWidth}px)',
				marginRight: drawerWidth,
			},
			drawer: {
				width: drawerWidth,
				flexShrink: 0,
			},
			drawerPaper: {
				width: drawerWidth,
			},
			toolbar: cast theme.mixins.toolbar,
			content: {
				flexGrow: 1,
				backgroundColor: theme.palette.background._default,
				padding: theme.spacing(3),
			},
		});
	}

	public function new(props) {
		super(props);
		state = {
			chart_data: [],
			content: ""
		}
	}

	override function componentDidMount() {}

	function handleUpload(data:Dynamic) {
		var reader = new FileReader();
		reader.readAsText(data.target.files[0]);
		reader.onload = (response) -> {
			this.parseGeneData(response.target.result);
			this.setState({content: response.target.result});
		}
	}

	private function parseGeneData(data:String) {
		var index = this.parseIndex();
		var tags = this.parseTags(index);
		var info = new Map<String, Int>();
		for (key => value in tags) {
			info.set(key, 0);
		}

		for (item in index) {
			if (data.toUpperCase().contains(item.snp)) {
				for (key => value in tags) {
					for (x in value) {
						if (x == item.snp) {
							info.set(key, info.get(key) + 1);
						}
					}
				}
			}
		}

		var map_to_array = [];
		for (key => value in info) {
			map_to_array.push({
				x: key,
				y: value
			});
		}

		map_to_array.sort((a, b) -> {
			if (a.y < b.y) {
				return 1;
			}

			if (a.y > b.y) {
				return -1;
			}

			return 0;
		});
		this.setState({chart_data: map_to_array}, () -> trace("Complete", this.state.chart_data));
	}

	private function parseTags(data:Map<String, GeneFormat>) {
		var tags = new Map<String, Array<String>>();
		for (item in data) {
			var keys = item.summary.split(",");
			for (key in keys) {
				if (tags.exists(key)) {
					continue;
				}
				tags.set(key, []);
			}
		}

		for (item in data) {
			for (key => value in tags) {
				if (item.summary.contains(key)) {
					value.push(item.snp);
				}
			}
		}

		return tags;
	}

	private function parseIndex() {
		var split_lines = Genes.data.split('\n');
		var data = new Map<String, GeneFormat>();
		var i = 0;
		for (line in split_lines) {
			if (i++ == 0) {
				continue;
			}
			var column = line.split('\t');
			data.set(column[2], {
				gene: column[1],
				snp: column[2].toUpperCase(),
				summary: column[5],
				source: column[6]
			});
		}
		return data;
	}

	var offset = 0;

	function testComponent(data:Dynamic) {
		var y = (offset++ % 2 == 0) ? "1em" : "2em";
		Browser.console.dir(data);
		Browser.console.dir(ArgumentAxisLabel);
		return jsx('
		<ArgumentAxisLabel {...data} dy={y}/>
		');
	}

	override function render() {
		this.offset = 0;
		return jsx('
		<div className={props.classes.root}>
			<main className={props.classes.content}>
			<Grid container>
				<Grid item xs={12}>
				<Chart height={250} data={this.state.chart_data}>
					<ArgumentAxis 
						labelComponent={this.testComponent}
					/>	
					<ValueAxis />

					<BarSeries valueField="y" argumentField="x" barWidth={2} />
					<Title text="Gene Relationships" />
					<ZoomAndPan />
				</Chart>
				</Grid>
				<Grid item xs={12}>
					<Input 
						id="raised-button-file" 
						type={File}
						onChange=${this.handleUpload}
					/> 
				</Grid>
			</Grid>
			</main>
		</div>
	 ');

	}
}
