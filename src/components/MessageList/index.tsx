import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { api } from '../../services/api';
import io from 'socket.io-client';

import { Message, MessageProps } from '../Message';
import { styles } from './styles';

const socket = io(String(api.defaults.baseURL));

export function MessageList() {
    const [currentMessages, setCurrentMessages] = useState<MessageProps[]>([]);
    const [messagesQueue, setMessagesQueue] = useState<MessageProps[]>([]);

    useEffect(() => {
        socket.on('new_message', (message: MessageProps) => {
            setMessagesQueue([message, ...messagesQueue]);
        });
    }, []);

    useEffect(() => {
        if (messagesQueue.length > 0) {
            if (currentMessages.length > 2) currentMessages.pop();

            console.log('Refresh messages');
            setCurrentMessages([messagesQueue[0], ...currentMessages]);
        }
    }, [JSON.stringify(messagesQueue[0])]);

    useEffect(() => {
        api.get<MessageProps[]>('messages/lastthree').then((response) => {
            setCurrentMessages(response.data);
        });
    }, []);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="never"
        >
            {currentMessages.map((message, index) => {
                return (
                    <Message
                        key={index}
                        text={message.text}
                        user={message.user}
                        id={message.id}
                    />
                );
            })}
        </ScrollView>
    );
}
