# ChartIQ Vue Application

## Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Building the project](#building-the-project)
- [Customization](#customization)
- [Enabling plug-ins](#enabling-plug\-ins)
- [Important Note](#important-note)
- [Questions and support](#questions-and-support)
- [Contributing to this project](#contributing-to-this-project)

## Overview

The ChartIQ Vue application is a toolkit of components that enable you to build charting applications in the Vue 2 framework. The components include everything from a basic chart to a complex, active trader desktop.

The application opens with a `routes` file that creates a links for pages with components, including:

- `Advanced` &mdash; Creates a chart with a full-featured user interface
- `Multi` &mdash; Displays two advanced charts on screen simultaneously
- `ActiveTraderWorkstation` &mdash; Creates an information-rich desktop for cryptocurrency traders and other active traders
- `Custom` &mdash; Integrates native Vue components with ChartIQ W3C-standard web components
- `HelloWorld` &mdash; Creates a basic chart with no user interface

**Note:**

- This application has been designed to simplify the transfer of modules such as `src/containers/ActiveTraderWorkstation` to existing applications. It is not expected that developers will use the application as is with all modules included. To minimize the transfer effort, resource files are more or less duplicated in each module.

## Requirements

- A copy of the ChartIQ library, version 8.1.0 or later.

  If you do not have a copy of the library, please contact your account manager or send an email to <info@cosaic.io>.

## Getting started

To implement this project:

1. Clone the repository
2. Extract the contents of your zipped ChartIQ library package
3. Copy the tarball (.tgz file) from the extracted library package into the root of this project
4. Run the following commands from the root of the project:
    - `npm install ./chartiq-x.x.x.tgz` or `yarn add ./chartiq-x.x.x.tgz` to install the charting library
    - `npm install` or `yarn install` to install the rest of the dependencies
    - `npm run start` or `yarn run start` to start up the development server
Open your browser to http://localhost:8080/  to load the application

## Building the project

If you want to use the ChartIQ advanced chart sample in its default state in your own Vue project, simply run the following command to generate the production bundle file:

```sh
npm run build
# or
yarn run build
```

The bundle will be created in the *dist/* folder.

## Customization

### Web component templates

The templates in `AdvancedChartComponent`, `CustomChartComponent`, and `ActiveTraderComponent` components render methods are collections of ChartIQ's user interface web components. You can customize the chart user interface by adding, removing, or modifying UI components. You can also add your own custom Vue components.

### Configuration

You can configure a variety of chart features by modifying the configuration object provided to the component definition files of `AdvancedChartComponent`, `CustomChartComponent`, and `ActiveTraderComponent`. Look for the call to `getConfig` in the resources files.

The default configuration is part of the ChartIQ library. See *./node_modules/chartiq/js/defaultConfiguration.js* for all the configuration details.

You can also modify the CSS in the style sheet files associated with `AdvancedChartComponent`, `CustomChartComponent`, and `ActiveTraderComponent`. See the [CSS Overview](https://documentation.chartiq.com/tutorial-CSS%20Overview.html) tutorial for information on customizing the chart look and feel.

### Component customization

ChartIQ web components can be customized by extending the web component classes. Customization code should run prior to creating the first chart in the document. We recommend keeping all customization code in a single file or folder to simplify library version upgrades.

Here's an example of customizing the `cq-chart-title` component:

```ts
// Access the web component classes.
import { CIQ } from 'chartiq/js/componentUI';

// Access the class definition of the web component.
const ChartTitle = CIQ.UI.components('cq-chart-title')[0].classDefinition;

// Extend the web component class.
class CustomChartTitle extends ChartTitle {
    update() {
        // Execute the original method.
        super.update();
        // Update the chart title.
        const { symbol, symbolDisplay } = this.context.stx.chart;
        // If symbolDisplay is available, use it in the document title.
        if (symbolDisplay) {
            document.title = document.title.replace(symbol, symbolDisplay);
        }
    }
}

// Update the web component definition.
CIQ.UI.addComponentDefinition('cq-chart-title', CustomChartTitle);
```

### Component integration

`CustomChart` integrates native Vue components with ChartIQ's W3C-standard web components.

The `RecentSymbols` component provides an example of wrapping and enhancing a web component with a Vue component. `RecentSymbols` adds a RECENT tab to the lookup controls created by ChartIQ's `cq-lookup` and `cq-comparison-lookup` web components. The RECENT tab displays a list of recently used financial instrument symbols maintained by the `RecentSymbols` component.

The `ShortcutDialog` component is an example of a Vue component accessed by a web component. User interaction with a drop-down menu created by a ChartIQ `cq-menu` web component opens the dialog box created by the `ShortcutDialog` component. The dialog box enables users to set shortcut keys on the chart's drawing tools.

## Enabling plug-ins

The ChartIQ library comes with a variety of plug-ins that add enhanced functionality to charts. The ChartIQ Vue application comes with the plug-ins built in but not enabled.

**Note:** Plug-ins are optional extras that must be purchased. To determine the plug-ins included in your library, see the *./node_modules/chartiq/plugins* folder.

The application includes the ChartIQ plug-ins as component resources that are enabled by uncommenting the relevant imports in the component resources file.

For example, to enable the Trade from Chart (TFC) plug-in for `AdvancedChart`, uncomment the following lines in the [resources.ts](./src/containres/AdvancedChart/resources.ts) file:

```ts
// import 'chartiq/plugins/tfc/tfc-loader'
// import 'chartiq/plugins/tfc/tfc-demo'
```

To enable the Market Depth chart and L2 Heat Map for `AdvancedChart`, uncomment the following lines in [resources.ts](./src/containres/AdvancedChart/resources.ts):

```ts
// import 'chartiq/plugins/activetrader/cryptoiq';
// import 'chartiq/examples/feeds/L2_simulator' /* for use with cryptoiq */
```

and the following line in [AdvancedChart](./src/containers/AdvancedChart.vue):

```ts
// CIQ.simulateL2({ stx: this.state.stx, onInterval: 1000, onTrade: true })
```

## Important Note

Due to `<template>` is internal Vue tag a replacement component `<template-placeholder>` is defined in main.js file and used in templates in place of HTML template element markup. About the bug you may read in [Github issues](https://github.com/vuejs/vue/issues/10717).

## Questions and support

- Contact our development support team at [support@chartiq.com](mailto:support@chartiq.com).
- See our SDK documentation at https://documentation.chartiq.com.

## Contributing to this project

Contribute to this project. Fork it and send us a pull request. We'd love to see what you can do with our charting tools!
