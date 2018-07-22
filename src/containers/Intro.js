import React, { Component } from 'react';

import introGif from '../res/intro.gif';

class Intro extends Component {
    render() {
        return (
            <div style={styles.introContainer}>
                <h1 style={styles.introTitle}>Emoji Cutter Alpha</h1>
                <div style={styles.introBodyContainer}>
                    <div style={styles.introDescriptionContainer}>
                        <h2>Post HUGE Emojis on Slack</h2>
                        <h2>Post HUGE Emojis on Slack</h2>
                        <h2>Post HUGE Emojis on Slack</h2>
                    </div>
                    <div style={styles.introGifContainer}>
                        <img src={introGif} alt="GIF" />
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    introContainer: {
        textAlign: 'center',
        height: '100%',
    },
    introTitle: {
        margin: 0,
        paddingTop: '20px',
    },
    introBodyContainer: {
        height: '80%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
    },
    introDescriptionContainer: {
        
    },
    introGifContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        backgroundColor: '#aaaaaa',
        border: '1px solid black'
    }
}

export default Intro;