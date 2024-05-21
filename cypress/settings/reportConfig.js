const report    = require('multiple-cucumber-html-reporter');
const fs        = require('fs');
const path      = require('path');

function generateReport(options) {
    return new Promise((resolve, reject) => {
        try {
            report.generate(options);
            resolve('Report generated');
        } catch (error) {
            reject(error);
        }
    });
}

async function main() {
    try {
        const result = await generateReport({
            jsonDir   : './cypress/logs/',
            reportPath: './cypress/reports/',
            useCDN    : true,
            displayDuration:true,
            displayReportTime:true,
            plainDescription:true,
            metadata  : {
                browser : {
                    name   : 'chrome',
                    version: '60',
                },
                device  : 'Local test machine',
                platform: {
                    name   : 'ubuntu',
                    version: '16.04',
                },
            },
            customData: {
                title: 'Run info',
                data: [
                    {label: "Project", value: "process Name"},
                ],
            },
        });
        console.log(result); // Report generated

        if (result === 'Report generated') {
            console.log('Entre')
            await screenshotPage();
        }
    } catch (error) {
         console.error('Error generating report:', error);
    }
}

main();