const path = require('path');
const { override, addBabelPreset,fixBabelImports, addLessLoader } = require('customize-cra');
const { ThemeGlobalLess } = require(path.join(__dirname, "/src/antd-global-theme-less"));

// module.exports = override(
// 	fixBabelImports('import', {
// 		libraryName: 'antd',
// 		libraryDirectory: 'es',
// 		style: true,
// 	}),
// 	addLessLoader({
// 		javascriptEnabled: true,
// 		modifyVars: ThemeGlobalLess,
// 	}),
// );

// Bug on customize-cra involving less-loader. Use default ant design theme til fixes issued.
// https://github.com/arackaf/customize-cra/issues/241
// https://github.com/arackaf/customize-cra/issues/201
module.exports = override(
	addBabelPreset('@emotion/babel-preset-css-prop'),
	fixBabelImports('import', {
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: "css",
	}),
);