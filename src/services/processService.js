exports.processParcela = async (data) => {
    try {
        let arr = [];
        let vlBruto = data.vl_venda / data.qt_parcela;
        vlBruto = parseFloat(vlBruto.toFixed(2));
        let vlMdr = (data.vl_venda / 100) * data.mdr / data.qt_parcela;
        vlMdr = vlMdr.toString().substring(0,4);
        let parlMdr = vlMdr * data.qt_parcela;
        vlMdr = parseFloat(vlMdr);

        let totalMdr = data.mdr - parlMdr ;
        totalMdr = parseFloat(totalMdr.toString().substring(0,4));

        // let vlMdrDc = vlMdr % 1 === 0
        // vlMdr = vlMdrDc ? vlMdr : vlMdr - 0.01

        for (i = 1; i <= data.qt_parcela; i++) {
            let vlLiquido = vlBruto - vlMdr;
            let vlRav = ((vlLiquido / 100 ) * data.rav) * i;
            vlRav = parseFloat(vlRav.toFixed(2));
            vlLiquido = vlLiquido - vlRav;
            vlLiquido = parseFloat(vlLiquido.toFixed(2));
            let sanatizeMdr = i === 1 ? vlMdr + totalMdr : vlMdr
            sanatizeMdr = parseFloat(sanatizeMdr.toFixed(3));


            arr.push({
                parcela: i,
                vl_bruto: vlBruto,
                vl_liquido: vlLiquido,
                tx_mdr: sanatizeMdr,
                tx_rav: vlRav,
            })
        }

        return arr;
    } catch (err) {
        console.log(err);
    }
};

