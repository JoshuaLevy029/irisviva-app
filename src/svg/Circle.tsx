import Svg, { Circle } from 'react-native-svg';
import type { SvgProps } from '@/types/svg.d.ts';

export default ({ width, height, fill = '#FF8181', strokeWidth = 2.42308 }: SvgProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 209 209" fill="none">
            <Circle cx="104.5" cy="104.5" r="104.5" fill={fill} />
        </Svg>
    );
}