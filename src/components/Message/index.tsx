import React from 'react';
import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto';
import { MotiView } from 'moti';

import { styles } from './styles';

export type MessageProps = {
    id: string;
    text: string;
    user: {
        name: string;
        // eslint-disable-next-line camelcase
        avatar_url: string;
    };
};

export function Message({ user, text }: MessageProps) {
    return (
        <MotiView
            from={{ opacity: 0, translateY: -50 }}
            animate={{
                opacity: 1,
                translateY: 0,
            }}
            transition={{ type: 'timing', duration: 700 }}
            style={styles.container}
        >
            <Text style={styles.message}>{text}</Text>

            <View style={styles.footer}>
                <UserPhoto imageUri={user.avatar_url} sizes="SMALL" />

                <Text style={styles.userName}>{user.name}</Text>
            </View>
        </MotiView>
    );
}
