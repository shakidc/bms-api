'use strict';

module.exports = function(app) {
    var bms = require('./controller');

    app.route('/')
        .get(bms.index);

    app.route('/api/data/alatukur')
        .get(bms.alatukur);

    app.route('/api/data/full')
	.get(bms.datafull);

    app.route('/api/data/parameter/:sensor/id/:id_alat')
	.get(bms.datasensor);

    app.route('/api/data/sensor/:id_alat/tanggal/:tanggal')
	.get(bms.dataalat);

    app.route('/api/data/sensor/:id_alat/jumlah/:jumlah')
	.get(bms.dataalatlim);

    app.route('/api/data/tambah/sensor/:id_alat/data/:kelembapan,:suhu,:wbgt,:lux,:co2,:anemo')
	.get(bms.tambahdata);

    app.route('/api/data/tambah/alat/:lokasi')
	.get(bms.tambahalat);
};
