'use strict';

module.exports = function(app) {
    var bms = require('./controller');

    app.route('/')
        .get(bms.index);

    app.route('/alatukur')
        .get(bms.alatukur);

    app.route('/dataalat/:id_alat,:tanggal')
	.get(bms.dataalat);

    app.route('/tambahdata/:id_alat,:kelembapan,:suhu,:wbgt,:lux,:co2,:anemo')
	.get(bms.tambahdata);

    app.route('/tambahalat/:lokasi')
	.get(bms.tambahalat);
};
