import React, { Component } from 'react';
import { Animated, StyleSheet, View, Text, Dimensions } from 'react-native';


export class TextAnimationFadeIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(0);
            view[x] = (
                <Animated.Text style={[styles.text, { opacity: this.animation }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: 1,
                delay: delay * x,
                duration: duration,
                useNativeDriver: true,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationZoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let fontSize = this.props.fontSize;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(-10);
            view[x] = (
                <Animated.Text style={[styles.text, { fontSize: this.animation }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: fontSize,
                delay: delay * x,
                duration: duration,
            }).start();
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationRain extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let fontSize = this.props.fontSize;
        let duration = this.props.duration;
        let sizeRain = this.props.sizeRain;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(sizeRain);
            view[x] = (
                <Animated.Text style={[styles.text, { fontSize: this.animation }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: fontSize,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationSlideDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(-Dimensions.get('window').height);
            view[x] = (
                <Animated.Text style={[styles.text, {
                    transform: [
                        { translateY: this.animation },
                    ]
                }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: 0,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationSlideUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(Dimensions.get('window').height);
            view[x] = (
                <Animated.Text style={[styles.text, {
                    transform: [
                        { translateY: this.animation },
                    ]
                }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text >
            )
            Animated.timing(this.animation, {
                toValue: 0,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationSlideLeft extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(-Dimensions.get('window').width);
            view[x] = (
                <Animated.Text style={[styles.text, {
                    transform: [
                        { translateX: this.animation },
                    ]
                }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: 0,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}


export class TextAnimationSlideRight extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(Dimensions.get('window').width);
            view[x] = (
                <Animated.Text style={[styles.text, {
                    transform: [
                        { translateX: this.animation },
                    ]
                }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: 0,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationShake extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(0);
            view[x] = (
                <Animated.Text style={[styles.text, {
                    transform: [
                        { scale: this.animation },
                    ]
                }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: 1,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationReverse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(-2);
            view[x] = (
                <Animated.Text style={[styles.text, {
                    transform: [
                        { scale: this.animation },
                    ]
                }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: 1,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}

export class TextAnimationDeZoom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: []
        }
    }

    componentDidMount() {
        let string = this.props.value;
        let delay = this.props.delay;
        let duration = this.props.duration;
        let view = [];
        for (let x in string) {
            this.animation = new Animated.Value(4);
            view[x] = (
                <Animated.Text style={[styles.text, {
                    transform: [
                        { scaleY: this.animation },
                    ]
                }, this.props.style]} key={"Letter_" + x}>
                    {string[x]}
                </Animated.Text>
            )
            Animated.timing(this.animation, {
                toValue: 1,
                delay: delay * x,
                duration: duration,
            }).start()
        }
        this.setState({ view })

    }

    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {this.state.view}
            </View>
        );
    }
}





const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 32,
        flexWrap: 'wrap',
        textAlign: 'center'
    }
});