"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Montserrat"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Montserrat", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Montserrat", { abbr: true, expect: "America/Santo_Domingo" }),

	"1899" : helpers.makeTestYear("America/Montserrat", [
		["1899-03-28T16:24:24+00:00", "11:59:59", "LMT", 15865 / 60],
		["1899-03-28T16:24:25+00:00", "12:24:25", "AST", 240]
	]),

	"1942" : helpers.makeTestYear("America/Montserrat", [
		["1942-05-03T03:59:59+00:00", "23:59:59", "AST", 240],
		["1942-05-03T04:00:00+00:00", "01:00:00", "AWT", 180]
	]),

	"1945" : helpers.makeTestYear("America/Montserrat", [
		["1945-08-14T22:59:59+00:00", "19:59:59", "AWT", 180],
		["1945-08-14T23:00:00+00:00", "20:00:00", "APT", 180],
		["1945-09-30T04:59:59+00:00", "01:59:59", "APT", 180],
		["1945-09-30T05:00:00+00:00", "01:00:00", "AST", 240]
	])
};