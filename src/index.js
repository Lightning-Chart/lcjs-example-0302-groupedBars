/*
 * LightningChartJS example that showcases creation of a grouped bars chart.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, AxisScrollStrategies, BarChartSorting, Themes } = lcjs

const barChart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .BarChart({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Grouped Bars (Employee Count)')
    .setValueLabels(undefined)

barChart
    .setDataGrouped(
        ['Finland', 'Germany', 'UK'],
        [
            { subCategory: 'Engineers', values: [48, 27, 24] },
            { subCategory: 'Sales', values: [19, 40, 14] },
            { subCategory: 'Marketing', values: [33, 33, 62] },
        ],
    )
    .setSorting(BarChartSorting.None)

barChart.valueAxis.setTitle('Number of Employees')
