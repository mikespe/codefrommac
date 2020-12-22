const axios = require('axios');
const $ = require('cheerio');

const cnnurl = "https://www.cnn.com";
const cnnjson = "https://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1/views/zones/common/zone-manager.izl"
const foxurl = "https://www.foxnews.com";


function foxget() {
	return axios.get(foxurl).then(function(response) {
	//console.log(response);
	let html = response.data;
	var foxheadline = $('.title a', html)[11].children[0].data
	return foxheadline
}).catch(error => {
	console.log(error);
})}

function cnnget() {
	return axios.get(cnnjson).then(function(response) {
	let html = response.data.html
	var cnnheadline = $('h2.banner-text.screaming-banner-text', html)[0].children[0].data
	return cnnheadline

}).catch(error => {
	console.log(error)
})}

function results() {return Promise.all([foxget(), cnnget()]).then(result => {
	let fox = result[0]
	let cnn = result[1]
	return {cnn, fox}
})}

module.exports = {
	result: results()
}
