package react.csv_reader;

import react.ReactComponent.ReactComponentOfProps;

typedef CSVReaderProps = {
	@:optional var accept:String;
	@:optional var cssClass:String;
	@:optional var label:String;
	@:optional var onError:Void->Void;
	@:optional var parserOptions:{};
	@:optional var onFileLoaded:Void->Void;
}

@:jsRequire('react-csv-reader')
extern class CSVReader extends ReactComponentOfProps<CSVReaderProps> {}
