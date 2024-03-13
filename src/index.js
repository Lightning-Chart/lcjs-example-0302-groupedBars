/*
 * LightningChartJS example that showcases creation of a grouped bars chart.
 */
// Import LightningChartJS
const lcjs = require('@arction/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AxisTickStrategies, LegendBoxBuilders, AxisScrollStrategies, BarChartSorting, Themes } = lcjs

const barChart = lightningChart()
    .BarChart({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Grouped Bars (Employee Count)')
    .setValueLabels(undefined)
    .setCursorResultTableFormatter((builder, category, value, bar) => {
        builder.addRow('Department:', bar.subCategory).addRow('# of employees:', String(value))
        return builder
    })

barChart
    .setDataGrouped(
        ['Finland', 'Germany', 'UK'],
        [
            { subCategory: 'Engineers', values: [48, 27, 24] },
            { subCategory: 'Sales', values: [19, 40, 14] },
            { subCategory: 'Marketing', values: [33, 33, 62] },
        ],
    )
    .setSorting(BarChartSorting.None).set

barChart.valueAxis.setTitle('Number of Employees')

// Add LegendBox.
const legend = barChart
    .addLegendBox(LegendBoxBuilders.VerticalLegendBox)
    // Dispose example UI elements automatically if they take too much space. This is to avoid bad UI on mobile / etc. devices.
    .setAutoDispose({
        type: 'max-width',
        maxWidth: 0.2,
    })
    .setTitle('Department')

legend.add(barChart)
