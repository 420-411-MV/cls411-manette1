import React from 'react';
import { Button, View } from "react-native";

export const Manette = ({isStarted, handleLeft, handleRight, handleUp, handleDown}) => {
    
    // https://docs.expo.dev/guides/icons/
    // https://ant.design/components/icon

    return (
        <>
           <View style={{ display: isStarted ? 'flex' : 'none' }}>
                <View style={{ display: isStarted ? 'flex' : 'none' }}>
                    <Button onPress={handleLeft} title="Left" >
                        
                    </Button>
                </View>

                <View style={{ display: isStarted ? 'flex' : 'none' }}>
                    <Button onPress={handleRight} title="Right" >
                        
                    </Button>
                </View>

                <View style={{ display: isStarted ? 'flex' : 'none' }}>
                    <Button onPress={handleUp} title="Up" >
                        
                    </Button>
                </View>

                <View style={{ display: isStarted ? 'flex' : 'none' }}>
                    <Button onPress={handleDown} title="Down" >
                        
                    </Button>
                </View>

            </View>
        </>                    
    );
};