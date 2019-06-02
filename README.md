# react-native-text-effects
This is a collection of effects for text component in React Native.
It works fine in Android and iOS.

## Setup

```bash
npm install --save react-native-text-effects
```

## Usage
```javascript
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextAnimationFadeIn value={"Text With Fade IN!"} delay={100} duration={1000} style={{color: 'red'}} />
        <TextAnimationZoom value={"Text With Zoom IN!"} delay={100} duration={1000} fontSize={32} style={{color: 'green'}} />
        <TextAnimationRain value={"Text With Rain Effect!"} delay={100} duration={250} fontSize={32} sizeRain={10} style={{color: 'black'}}/>
        <TextAnimationSlideDown value={"Text With SlideDown!"} delay={100} duration={1000} style={{color: 'purple', fontSize: 40}} />
        <TextAnimationSlideUp value={"Text With SlideUp!"} delay={100} duration={1000} style={{color: 'yellow', fontSize: 40}}/>
        <TextAnimationSlideLeft value={"Text With SlideLeft!"} delay={100} duration={1000} style={{color: 'orange', fontSize: 40}}/>
        <TextAnimationSlideRight value={"Text With SlideRight!"} delay={100} duration={1000} style={{color: 'red', fontSize: 40}}/>
        <TextAnimationShake value={"Text With Shake!"} delay={100} duration={1000} style={{color: 'black', fontSize: 40}}/>
        <TextAnimationReverse value={"Text With Reverse!"} delay={100} duration={1000} style={{color: 'yellow', fontSize: 40}}/>
        <TextAnimationDeZoom value={"Text With DeZoom!"} delay={100} duration={1000} style={{color: 'orange', fontSize: 40}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  }
});

```

## Example (Gif is slow and in low quality...)
![React Native Text Effect](https://res.cloudinary.com/dhwilvid4/image/upload/v1559471192/video_text_wyvttn.gif)


## Properties

 name                  | description                                 | type     
:--------------------- |:------------------------------------------- | --------
value | The string to render | String (REQUIRED)
delay | The dealy between each char | Int (REQUIRED)
duration | The duration of the animation per each char | Int (REQUIRED)
fontSize | Required for TextAnimationZoom and TextAnimationRain, specify the size to reach | Int
sizeRain | Required for TextAnimationRain, specify the initial size of text | Int
style | The style of the text | Object (OPTIONAL)
