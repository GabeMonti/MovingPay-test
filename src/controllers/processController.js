const service = require('../services/processService')

exports.post = async (req, res, next) => {
    let body = req.body
    if (
        (isNaN(body.vl_venda) || body.vl_venda.length === 0) ||
        (isNaN(body.qt_parcela) || body.qt_parcela.length === 0 || body.qt_parcela === 0 || body.qt_parcela >= 25) ||
        (isNaN(body.mdr) || body.mdr.length === 0 || body.mdr >= 99.01) ||
        (isNaN(body.rav) || body.rav.length === 0 || body.rav >= 99.01)
    ) {
        res.status(500).send({message: 'error! - Invalid Parameters', data: []});
    } else {
        let response = service.processParcela(body);
        res.status(201).send({message: 'success!', data: await response});
    }
};