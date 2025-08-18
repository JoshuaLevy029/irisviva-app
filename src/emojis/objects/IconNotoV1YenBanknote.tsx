import Svg, { Path, G, Circle, ClipPath, Defs, Rect, Mask, Shape, Ellipse, Polygon, Polyline, Pattern, Text, Symbol, TextPath, TSpan, RadialGradient, Stop, Line, LinearGradient, Image, Use, FeColorMatrix, Filter } from 'react-native-svg';

interface IconProps {
	size?: number;
	color?: string;
}

export default ({ size = 32, color = '#1f1f1f' }: IconProps) => (
	<Svg width={size} height={size} viewBox="0 0 128 128"><Path fill="#78909c" d="M123.84 40.19H4.15c-1.82 0-3.29 1.47-3.29 3.29v58.54c0 1.81 1.47 3.29 3.29 3.29h119.69c1.81 0 3.29-1.47 3.29-3.29V43.48c0-1.81-1.47-3.29-3.29-3.29"/><Path fill="#b1e0cf" d="M123.85 22.69H4.15c-1.82 0-3.29 1.47-3.29 3.29v58.54c0 1.82 1.47 3.29 3.29 3.29h119.69c1.81 0 3.29-1.47 3.29-3.29V25.98a3.29 3.29 0 0 0-3.28-3.29"/><Path fill="#78909c" d="M25.31 52.42h-7.09c-.38 0-.68.31-.68.69v4.7c0 .38.31.69.68.69h10.86v2.98H18.23c-.38 0-.68.31-.68.69v4.7c0 .39.31.69.68.69h10.86v7.98c0 .48.39.86.86.86h8.5c.47 0 .86-.39.86-.86v-7.98h10.78c.39 0 .7-.31.7-.69v-4.7c0-.38-.31-.69-.7-.69H39.31V58.5h10.78c.39 0 .7-.31.7-.69v-4.7c0-.38-.31-.69-.7-.69h-7.01l9.34-14.9c.17-.27.18-.61.03-.89a.86.86 0 0 0-.77-.45H43.7c-.29 0-.57.15-.73.4L34.2 50.04l-8.76-13.46a.88.88 0 0 0-.74-.4h-7.99c-.32 0-.61.18-.77.45c-.15.28-.15.62.03.89z"/><Path fill="#e0e0e0" d="M78.5 20.69h22V87.8h-22z"/><Path fill="#bdbdbd" d="M78.5 87.81h22v19.5h-22z"/></Svg>
);
