import React, { useState } from 'react';
import GoogleCast, { useRemoteMediaClient } from 'react-native-google-cast';

export const initCast = () => {
    const client = useRemoteMediaClient(); 
    const [isStarted, setIsStarted] = useState(false);
    const [currentSession, setCurrentSession] = useState();
    const [status, setStatus] = useState('Initial');
    let channelToReceiverApp;
    const sessionManager = GoogleCast.getSessionManager();
    const CUSTOM_CHANNEL = 'urn:x-cast:testChannel';

    React.useEffect(() => {
        const listener = sessionManager.onSessionStarted((session) => {
            setCurrentSession(session);
            setIsStarted(true);
        });

        if (isStarted) {
            listener.remove();
        }

        return () => {}
    
    }, [client]);

    const handleLeft = () => {
        const positionObj = '744,134';
        const message = JSON.stringify({ msg: positionObj });
        sendMessageToCustomChannel(message); 
    };

    const handleRight = () => {
        const positionObj = '200,400';
        const message = JSON.stringify({ msg: positionObj });
        sendMessageToCustomChannel(message); 
    };

    const handleUp = () => {
        const positionObj = '200,600';
        const message = JSON.stringify({ msg: positionObj });
        sendMessageToCustomChannel(message); 
    };

    const handleDown = () => {
        const positionObj = '500,200';
        const message = JSON.stringify({ msg: positionObj });
        sendMessageToCustomChannel(message);   
    };

    const sendMessageToCustomChannel = (msgToSend) => {
        if (channelToReceiverApp) {
            try {
              channelToReceiverApp.sendMessage(msgToSend);
              console.log('Message envoyé! ' + msgToSend);
            } catch (e) {
              console.warn('Erreur en envoyant un message:', e);
            }
        } else if (currentSession) {
            openCustomChannel(currentSession);
        } else {
            setStatus("Session not started yet!");
          }
    };

    const openCustomChannel = (session) => {
      if (session) {
          session.addChannel(CUSTOM_CHANNEL).then((newChannel) => {
          console.log('Custom channel ouvert avec le receiver app!');
          setStatus("Custom channel ouvert!");
          channelToReceiverApp = newChannel;
        });
      } else {
        console.log('Session non trouvée');
      }
    };

    return {
        isStarted,
        handleLeft,
        handleRight,
        handleUp,
        handleDown,
        status,
      };

};