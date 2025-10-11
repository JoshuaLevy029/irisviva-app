import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import themeConfig from '@/config/theme.config';
import Typography from '@/components/Typography';
import Icon from '@/components/Icon';
import formatUtil from '@/utils/format.util';

interface LoadingItemProps {}

export default () => {
    const dimensions = useWindowDimensions();

    return (
        <View 
            style={{
                backgroundColor: formatUtil.alpha(themeConfig.colors.error['A500'], 0.3),
                opacity: 0.7,
                borderRadius: 16,
                padding: 16,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                width: dimensions.width - 32,
                marginBottom: 10,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
            }}
        >
            <Icon name='IconSolarDangerTriangleLinear' size={30} color={themeConfig.colors.error['A500']} />
            <Typography fontWeight='semibold' sx={{ color: themeConfig.colors.error['A600'], fontSize: 14 }}>
                Ocorreu um erro ao carregar os terapeutas recomendados
            </Typography>
        </View>
    );
}