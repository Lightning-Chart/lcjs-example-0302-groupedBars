# JavaScript Grouped Bars Chart

![JavaScript Grouped Bars Chart](groupedBars-darkGold.png)

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

-   Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
-   Open the project folder in a terminal:

          npm install              # fetches dependencies
          npm start                # builds an application and starts the development server

-   The application is available at _http://localhost:8080_ in your browser, webpack-dev-server provides hot reload functionality.


## Description

_Also known as Multi-set / Clustered Bar Chart_

This example shows creation of a Grouped Bar Chart made on user side with BarChart.
This is a variation of normal Bar Chart where groups of bars are spaced apart from each other for further categorizing.

Here's the creation of a Grouped Bar Chart using a pre-defined interface.

```javascript
// Create Chart.
const barChart = lightningChart().BarChart()

// Add categories('Finland', 'Germany', 'UK) and subCategory & values.
barChart.setDataGrouped(
    ['Finland', 'Germany', 'UK'],
    [
        { subCategory: 'Engineers', values: [48, 27, 24] },
        { subCategory: 'Sales', values: [19, 40, 14] },
        { subCategory: 'Marketing', values: [33, 33, 62] },
    ],
)
```


## API Links

* [Bar chart]
* [Bar chart Value Axis]
* [Bar chart Category Axis]


## Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [LightningChart][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact sales@lightningchart.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@lightningchart.com.

[0]: https://github.com/Arction/
[1]: https://lightningchart.com/lightningchart-js-api-documentation/
[2]: https://lightningchart.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://lightningchart.com/support-services/

© LightningChart Ltd 2009-2022. All rights reserved.


[Bar chart]: https://lightningchart.com/js-charts/api-documentation/v6.1.0/classes/BarChart.html
[Bar chart Value Axis]: https://lightningchart.com/js-charts/api-documentation/v6.1.0/classes/BarChartValueAxis.html
[Bar chart Category Axis]: https://lightningchart.com/js-charts/api-documentation/v6.1.0/classes/BarChartCategoryAxis.html

