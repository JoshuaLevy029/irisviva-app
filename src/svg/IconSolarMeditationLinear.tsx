import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><G fill="none" stroke={color} strokeWidth="1.5"><Path d="M14.5 4.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z"/><Path strokeLinecap="round" strokeLinejoin="round" d="m3 17l2.589-1.308A.75.75 0 0 0 6 15.02c0-2.94 2.138-5.454 5.007-5.937a6 6 0 0 1 1.986 0C15.863 9.566 18 12.08 18 15.02c0 .284.16.545.411.672L21 17"/><Path strokeLinecap="round" strokeLinejoin="round" d="m9.5 16l-1.042 1.389l-.063.084a2 2 0 0 1-1.034.686l-.102.026l-1.485.371A2.34 2.34 0 0 0 4 20.83c0 .646.524 1.17 1.171 1.17h1.556c.6 0 .9 0 1.19-.034a5 5 0 0 0 1.929-.643c.253-.147.493-.327.972-.687L11 20.5m0 0l2-1.5m-2 1.5l2.54.952c.61.229.914.343 1.229.417q.245.057.493.09c.321.041.647.041 1.298.041h2.269A1.17 1.17 0 0 0 20 20.829a2.34 2.34 0 0 0-1.774-2.273l-1.485-.37l-.102-.027a2 2 0 0 1-1.034-.686l-.063-.084L14.5 16"/></G></Svg>
);
