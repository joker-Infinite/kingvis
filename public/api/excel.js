function outExe(tableDatas) {
    require["ensure"]([], () => {
        const {export_json_to_excel} = require("../../src/vendor/Export2Excel");
        let tHeader = [tableDatas.name];
        let filterVal = ["es", "ee", "eee", "eeeh", "eeehjh", "we", "tr", "tt"];
        let table = [];
        tableDatas.series[0][0].forEach((val, index) => {
            let wen = {};
            wen["es"] = tableDatas.xAxis[index];
            wen["ee"] = tableDatas.series[0][0][index];
            switch (tableDatas.series.length) {
                case 8:
                    wen["tt"] = tableDatas.series[3][0][index];
                case 7:
                    wen["tr"] = tableDatas.series[3][0][index];
                case 6:
                    wen["we"] = tableDatas.series[3][0][index];
                case 5:
                    wen["eeehjh"] = tableDatas.series[3][0][index];
                case 4:
                    wen["eeeh"] = tableDatas.series[2][0][index];
                case 3:
                    wen["eee"] = tableDatas.series[1][0][index];
                default:
                    break;
            }
            table.push(wen);
        });
        let data = formatJson(filterVal, table);
        export_json_to_excel(tHeader, data, tableDatas.name);
    });
}

function formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]));
}

/**
 * @param v 需要导出Excel的数据
 * @param v.keyColumns 多列数据对应的列名称
 * @param v.valueColumns 所有数据列的数据
 * @param v.name 打印出的Excel文件名
 * */
function printExcel(v) {
    const {export_json_to_excel} = require("../../src/vendor/Export2Excel");
    let excel_title = [v.name];
    let excel_content = [];
    v.keyColumns.forEach(i => {
        excel_content.push([i]);
    });
    v.valueColumns.forEach(i => {
        if (i.length > 0) {
            i.forEach((ci, cx) => {
                if (!ci) {
                    ci = "";
                }
                excel_content[cx].push(ci);
            })
        }
    });
    export_json_to_excel(excel_title, excel_content, v.name);
}

export {printExcel, outExe};
