package;

import js.Browser;
import js.html.FileReader;
import mui.core.*;
import mui.core.styles.Classes;
import mui.core.styles.MuiTheme;
import mui.core.styles.Styles;
import react.ReactComponent;
import react.ReactDOM;
import react.ReactMacro.jsx;

class Main {
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
	var classes:TClasses;
}

private typedef State = {
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
			data: [],
			content: ""
		}
	}

	private function handleUpload(data:Dynamic) {
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

		var data = [for (item in index) item];
		this.setState({data: data});
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

	function tableContent() {
		var content = [];
		var i = 0;
		for (item in this.state.data) {
			content.push(jsx('<TableRow>
					<TableCell>${item.gene}</TableCell>
					<TableCell>${item.snp}</TableCell>
					<TableCell>${item.summary}</TableCell>
					<TableCell><Link rel={NoOpener} target={Blank} href="${item.source}">${item.source}</Link></TableCell>
				</TableRow>'));
		}
		return content;
	}

	override function render() {
		var content = null;
		if (this.state.data.length == 0) {
			content = jsx('
			<Grid item xs={12}>
				<Input 
					id="raised-button-file" 
					type={File}
					onChange=${this.handleUpload}
				/> 
			</Grid>
			');
		} else {
			content = jsx('
			<Grid item xs={12}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Gene</TableCell>
						<TableCell>SNP</TableCell>
						<TableCell>Summary</TableCell>
						<TableCell>Source</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					${this.tableContent()}
				</TableBody>
				</Table>
			</Grid>
			');
		}

		return jsx('
		<div className={props.classes.root}>
			<main className={props.classes.content}>
			<Grid container>
				$content
			</Grid>
			</main>
		</div>
	 ');
	}
}
