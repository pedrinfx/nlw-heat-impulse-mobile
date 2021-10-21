import React from 'react';
import { View } from 'react-native';
import { COLORS } from '../../theme';
import { useAuth } from '../../hooks/Auth';

import { Button } from '../Button';

import { styles } from './styles';

export function SignInBox() {
    const { signIn, isSigningIn } = useAuth();

    return (
        <View style={styles.container}>
            <Button
                title="Entrar com Github"
                style={{
                    color: COLORS.BLACK_PRIMARY,
                    backgroundColor: COLORS.YELLOW,
                }}
                icon="github"
                onPress={signIn}
                disable={isSigningIn}
            />
        </View>
    );
}
