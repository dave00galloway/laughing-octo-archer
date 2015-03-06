throw new Error("well this is dangerous, exceptions that are uncaught dont cause failures");
//I don't think this really works...
if (!String.prototype.trim) {
	console.log("adding");
	throw new Error("adding");
	String.prototype.trim = function trim() {
		return this.replace(/^\s+|\s+$/g, "");
	};
} else {
	console.log("exists");
	throw new Error("exists");
        String.prototype.trim = function trim() {
		return "WTF";};
}