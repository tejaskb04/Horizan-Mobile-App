import React, { Component } from 'react';
import { WebView } from 'react-native';

class Typeform extends Component {
    render() {
        return (
            <WebView 
                style={styles.typeformStyle}
                source={{
                    uri: 'https://horizanapp.typeform.com/to/T61uiD'
                }}
            />
        );
    }
}

const styles = {
    typeformStyle: {
        padding: 100
    }
};


export default Typeform;
