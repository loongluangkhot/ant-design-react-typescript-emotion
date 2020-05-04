const ThemeGlobalCssInJs = require("./antd-global-theme-less");

export interface IThemeGlobal {
	primaryColor?: string, // primary color for all components
	linkColor?: string, // link color
	successColor?: string, // success state color
	warningColor?: string, // warning state color
	errorColor?: string, // error state color
	fontSizeBase?: string, // major text font size
	headingColor?: string, // heading text color
	textColor?: string, // major text color
	textColorSecondary?: string, // secondary text color
	disabledColor?: string, // disable state color
	borderRadiusBase?: string, // major border radius
	borderColorBase?: string, // major border color
	boxShadowBase?: string, // major shadow for layers
}

export const ThemeGlobal: IThemeGlobal = ThemeGlobalCssInJs;