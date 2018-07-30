import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native'

class CallToAction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        };
    }

    onLayout = (e) => {
        this.setState({ 
            width: e.nativeEvent.layout.width,
            height: e.nativeEvent.layout.height
        });
    }

    resolveHorizanTextPosition(height) {
        return {
            top: height / 2
        };
    }

    resolveSubHeaderTextPosition(height) {
        return {
            top: 9 * height / 24,
            left: 57
        };
    }

    resolveButtonPosition(width, height) {
        return {
            top: height - 66,
            width: width
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.containerStyle} onLayout={this.onLayout}>
                <Text style={[styles.subheaderTextStyle, 
                    this.resolveSubHeaderTextPosition(this.state.height)]}>Take hold of{'\n'}tomorrow with</Text>
                <Text style={[styles.horizanTextStyle, 
                    this.resolveHorizanTextPosition(this.state.height)]}>Horizan
                </Text>
                <TouchableOpacity 
                style={[styles.buttonStyle, this.resolveButtonPosition(this.state.width, this.state.height)]}
                onPress={() => navigate('Typeform', { screen: 'Typeform' })}
                >
                    <Text style={styles.buttonTextStyle}>Start Questionnaire</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        flex: 1
    },
    horizanTextStyle: {
        fontSize: 75,
        color: '#0400CF',
        fontWeight: 'bold',
        position: 'absolute'
    },
    subheaderTextStyle: {
        fontSize: 20,
        color: '#0400CF',
        position: 'absolute'
    },
    buttonStyle: {
        backgroundColor: '#0400CF',
        height: 66,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 22
    }
};

export default CallToAction;
