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
    res.sendfile('index.html')
};

exports.datafull = function(req, res){
	var id_alat = req.params.id_alat;

	connection.query('SELECT * FROM data WHERE id = ?',
	[ id_alat ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	});
};

exports.datasensor = function(req, res){
	var id_alat = req.params.id_alat;
	var sensor = req.params.sensor;

	if(sensor == 'kelembapan'){
	connection.query('SELECT kelembapan FROM data WHERE id = ? ORDER BY waktu DESC LIMIT 1',
	[ id_alat ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	})}
	if(sensor == 'suhu'){
	connection.query('SELECT suhu FROM data WHERE id = ? ORDER BY waktu DESC LIMIT 1',
	[ id_alat ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	})}
	if(sensor == 'wbgt'){
	connection.query('SELECT wbgt FROM data WHERE id = ? ORDER BY waktu DESC LIMIT 1',
	[ id_alat ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	})}
	if(sensor == 'lux'){
	connection.query('SELECT lux FROM data WHERE id = ? ORDER BY waktu DESC LIMIT 1',
	[ id_alat ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	})}
	if(sensor == 'co2'){
	connection.query('SELECT co2 FROM data WHERE id = ? ORDER BY waktu DESC LIMIT 1',
	[ id_alat ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	})}
	if(sensor == 'anemo'){
	connection.query('SELECT anemo FROM data WHERE id = ? ORDER BY waktu DESC LIMIT 1',
	[ id_alat ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	})};
};

exports.dataalat = function(req, res){
	var id_alat = req.params.id_alat;
	var tanggal = req.params.tanggal;

	connection.query('SELECT  * FROM data WHERE id = ? AND DATE(waktu) = ?',
	[ id_alat, tanggal ],
	function (error, rows, fields){
		if(error){
			console.log(error)
		} else{
			response.ok(rows, res)
		}
	});
};

exports.dataalatlim = function(req, res){
	var id_alat = req.params.id_alat;
	var jumlah = Number(req.params.jumlah);

	connection.query('SELECT * FROM data WHERE id = ? ORDER BY waktu DESC LIMIT ?',
	[ id_alat, jumlah ],
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
