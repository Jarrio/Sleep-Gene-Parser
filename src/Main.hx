package;

import externs.Fetch;
import haxe.crypto.Base64;
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
	var all_alleles:String;
	var a_allele:String;
	var aa_allele:String;
	var ag_allele:String;
	var g_allele:String;
	var t_allele:String;
	var gg_allele:String;
	var tt_allele:String;
	var cc_allele:String;
	var ct_allele:String;
	var c_allele:String;
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
		this.parseIndex(function(index) {
			var tags = this.parseTags(index);
			var info = new Map<String, Int>();

			var data = [for (item in index) item];
			this.setState({data: data});
		});
		// var index = this.parseIndex();
		// var tags = this.parseTags(index);
		// var info = new Map<String, Int>();

		// var data = [for (item in index) item];
		// this.setState({data: data});
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

	private function parseIndex(cb:Map<String, GeneFormat>->Void) {
		Fetch.fetch('./genes.tsv').then((data) -> {
			data.text().then((response : String) -> {
				var split_lines = response.split('\n');
				var data = new Map<String, GeneFormat>();
				var i = 0;
				for (line in split_lines) {
					if (i++ == 0) {
						continue;
					}
					var column = line.split('\t');
					data.set(column[13], {
						all_alleles: column[0],
						a_allele: column[1],
						aa_allele: column[2],
						ag_allele: column[3],
						g_allele: column[4],
						t_allele: column[5],
						gg_allele: column[6],
						tt_allele: column[7],
						cc_allele: column[8],
						ct_allele: column[9],
						c_allele: column[10],
						gene: column[12],
						snp: column[13].toUpperCase(),
						summary: column[11],
						source: ""
					});
				}
				cb(data);
			}, null);
		}, null);
	}

	function tableContent() {
		var content = [];
		var i = 0;

		for (item in this.state.data) {
			var snpedia = "https://www.snpedia.com/index.php/" + item.snp.toLowerCase();
			content.push(jsx('<TableRow>
					<TableCell>${item.all_alleles}</TableCell>
					<TableCell>${item.a_allele}</TableCell>
					<TableCell>${item.aa_allele}</TableCell>
					<TableCell>${item.g_allele}</TableCell>
					<TableCell>${item.gg_allele}</TableCell>
					<TableCell>${item.t_allele}</TableCell>
					<TableCell>${item.tt_allele}</TableCell>
					<TableCell>${item.cc_allele}</TableCell>
					<TableCell>${item.ct_allele}</TableCell>
					<TableCell>${item.c_allele}</TableCell>
					<TableCell>${item.gene}</TableCell>
					<TableCell><Link rel={NoOpener} target={Blank} href={snpedia}>${item.snp}</Link></TableCell>
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
						<TableCell>All Alleles</TableCell>
						<TableCell>A Allele</TableCell>
						<TableCell>A;A Allele</TableCell>
						<TableCell>G Allele</TableCell>
						<TableCell>G;G Allele</TableCell>
						<TableCell>T Allele</TableCell>
						<TableCell>TT Allele</TableCell>
						<TableCell>CC Allele</TableCell>
						<TableCell>CT Allele</TableCell>
						<TableCell>C Allele</TableCell>
						<TableCell>Gene</TableCell>
						<TableCell>SNP</TableCell>
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
