import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 24 24"><Path fill="none" stroke={color} strokeLinecap="round" strokeWidth="1.5" d="m6.8 11.783l1.275.143a2.205 2.205 0 0 1 1.944 1.952a2.21 2.21 0 0 0 1.32 1.787l1.661.69m0 0l7.239-7.271l-5.376-5.399l-10.75 10.798a3.83 3.83 0 0 0 0 5.399a3.79 3.79 0 0 0 5.375 0zm8-6.506L14.182 3"/></Svg>
);
