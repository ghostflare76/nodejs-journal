/*
 * GET users listing.
 */

exports.findById = function(req, res) {
	populateDB(req, res);

};

var populateDB = function(req, res) {

	var id = req.params.id;
	console.log('received id : ' + id);

	var wines = [ {
		name : "CHATEAU DE SAINT COSME",
		year : id,
		grapes : "Grenache / Syrah",
		country : "France",
		region : "Southern Rhone",
		description : "The aromas of fruit and spice...",
		picture : "saint_cosme.jpg"
	}, {
		name : "LAN RIOJA CRIANZA",
		year : "2006",
		grapes : "Tempranillo",
		country : "Spain",
		region : "Rioja",
		description : "A resurgence of interest in boutique vineyards...",
		picture : "lan_rioja.jpg"
	} ];

	//res.setHeader('Content-Type','application/json');
	//res.end(JSON.stringify(wines));
	res.json(wines);

};