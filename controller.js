'use strict';

var response = require('./res');
var connection = require('./connect');

exports.alatukur = function(req, res) {
    connection.query('SELECT * FROM alatukur', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.ok(rows, res)
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.dataalat = function(req, res){
	var id_alat = req.params.id_alat;
	var tanggal = req.params.tanggal;

	connection.query('SELECT  * FROM data where id = ? AND DATE(waktu) = ?',
	[ id_alat, tanggal ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	});
};

exports.tambahdata = function(req,res){
	var id_alat = req.params.id_alat;
	var kelembapan = req.params.kelembapan;
	var suhu = req.params.suhu;
	var wbgt = req.params.wbgt;
	var lux = req.params.lux;
	var co2 = req.params.co2;
	var anemo = req.params.anemo;

	connection.query('INSERT INTO `data`(`id`, `kelembapan`, `suhu`, `wbgt`, `lux`, `co2`, `anemo`) VALUES (?,?,?,?,?,?,?)',
	[ id_alat, kelembapan, suhu, wbgt, lux, co2, anemo ],
	function (error, rows, fields) {
		if(error){
			console.log(error)
		} else{
			response.ok("Berhasil memasukkan data",res)
		}
	});
};

exports.tambahalat = function(req,res){
	var lokasi = req.params.lokasi;

	connection.query('INSERT INTO `alatukur`(`lokasi`) VALUES (?)',
	[ lokasi ],
	function(error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok("Berhasil menambahkan alat ukur",res)
		}
	});
};
