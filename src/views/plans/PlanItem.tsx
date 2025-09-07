import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";
import { Plan } from '@/entities/plan.entity';
import themeConfig from '@/config/theme.config';
import Icon from '@/components/Icon';
import Typography from '@/components/Typography';
import { IconButton } from '@/components/Button';
import formatUtil from '@/utils/format.util';

interface PlanItemProps {
    plan: Plan
    onEdit: (plan?: Plan) => () => void
    onStatus: (plan: Plan) => () => void
    onDelete: (plan: Plan) => () => void
}

export default ({ plan, onEdit, onStatus, onDelete }: PlanItemProps) => {
    const dimensions = useWindowDimensions();

    return (
        <View 
            style={{
                backgroundColor: 'white',
                borderRadius: 20,
                minHeight: 50,
                padding: 16,
                boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)',
                width: dimensions.width - 32,
                marginBottom: 10,
                position: 'relative',
            }}
        >
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 10 }}>
                <View style={{ width: 30, height: 30, borderRadius: 20, backgroundColor: themeConfig.colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                    <Typography fontWeight='semibold' color='white'>
                        {plan.id}
                    </Typography>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Typography fontWeight='semibold' color='black'>
                            {plan.name}
                        </Typography>
                        <Typography fontWeight='medium' color='gray'>
                            {formatUtil.money(plan.price_month)}/mês
                        </Typography>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', gap: 5 }}>
                        <IconButton icon='IconSolarPenNewSquareLinear' onPress={onEdit(plan)} size={20} />
                        <IconButton icon={plan.status ? 'IconSolarLockKeyholeMinimalisticLinear' : 'IconSolarLockKeyholeMinimalisticUnlockedLinear'} onPress={onStatus(plan)} size={20} />
                        <IconButton icon='IconSolarTrashBinMinimalisticLinear' onPress={onDelete(plan)} size={20} />
                    </View>
                </View>
            </View>
        </View>
    );
}