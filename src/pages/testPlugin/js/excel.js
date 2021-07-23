/**
 * @param v 需要导出Excel的数据
 * @param v.keyColumns 多列数据对应的列名称
 * @param v.valueColumns 所有数据列的数据
 * @param v.name 打印出的Excel文件名
 * */
function printExcel(v) {
    const {export_json_to_excel} = require("../../../vendor/Export2Excel");
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

export {printExcel};
