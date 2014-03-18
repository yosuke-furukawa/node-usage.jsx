native class usage {
  static function lookup(pid:int, callback:(Error, Map.<variant>)->void):void;
  static function lookup(pid:int, opts:Map.<variant>, callback:(Error, Map.<variant>)->void):void;
  static function clearHistory(pid:int) : void;
  static function clearHistory():void;
  __readonly__ static var sysinfo : Map.<variant>;
} = "require('usage')";
