import React from 'react';
import {
    TouchableOpacity,
    TouchableOpacityProps,
    Text,
    ColorValue,
    ActivityIndicator,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
    title: string;
    style: {
        color: ColorValue;
        backgroundColor: ColorValue;
    };
    icon?: React.ComponentProps<typeof AntDesign>['name'];
    disable?: boolean;
};

export function Button({
    title,
    style,
    icon,
    disable = false,
    ...rest
}: ButtonProps) {
    const { backgroundColor, color } = style;

    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor }]}
            activeOpacity={0.7}
            disabled={disable}
            {...rest}
        >
            {disable ? (
                <ActivityIndicator color={color} />
            ) : (
                <>
                    <AntDesign name={icon} size={24} style={styles.icon} />
                    <Text style={[styles.title, { color }]}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
}
