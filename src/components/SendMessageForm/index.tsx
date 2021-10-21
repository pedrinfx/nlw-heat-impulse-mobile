import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, TextInput, View } from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';
// import { KeyboardAwareView } from 'react-native-keyboard-aware-view';

import { styles } from './styles';

export function SendMessageForm() {
    const [message, setMessage] = useState('');
    const [sendingMessage, setSendingMessage] = useState(false);

    async function handleMessageSubmit() {
        const messageFormatted = message.trim();

        if (messageFormatted.length > 0) {
            setSendingMessage(true);
            await api.post('/messages', { message: messageFormatted });

            setMessage('');
            Keyboard.dismiss();
            setSendingMessage(false);
        }
    }

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={styles.container}>
                <TextInput
                    keyboardAppearance="dark"
                    placeholder="Qual sua expectativa para o evento?"
                    placeholderTextColor={COLORS.GRAY_PRIMARY}
                    multiline
                    maxLength={140}
                    onChangeText={setMessage}
                    value={message}
                    style={styles.input}
                    editable={!sendingMessage}
                />

                <Button
                    title="Enviar mensagem"
                    style={{
                        backgroundColor: COLORS.PINK,
                        color: COLORS.WHITE,
                    }}
                    disable={sendingMessage}
                    onPress={handleMessageSubmit}
                />
            </View>
        </KeyboardAvoidingView>
    );
}
