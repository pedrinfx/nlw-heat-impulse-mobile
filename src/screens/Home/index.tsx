import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';
import { useAuth } from '../../hooks/Auth';
import { MotiView } from 'moti';

import { styles } from './styles';

export function Home() {
    const { user } = useAuth();

    return (
        <View style={styles.container}>
            <Header />
            <MessageList />

            <MotiView
                from={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                }}
                transition={{ type: 'timing', duration: 700, delay: 1000 }}
            >
                {user ? <SendMessageForm /> : <SignInBox />}
            </MotiView>
        </View>
    );
}
