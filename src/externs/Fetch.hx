package externs;

import js.lib.Promise;

class Fetch {
	public static function fetch(url:String, ?options:{}):Promise<Dynamic> {
		return untyped __js__('fetch')(url);
	}
}
