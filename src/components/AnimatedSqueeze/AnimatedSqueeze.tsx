import React, { Component } from "react";
import { Animated, Easing, TouchableOpacity } from "react-native";
import { isIos } from "utils/responsive";

interface Props {
  children: React.ReactNode;
  disabled: boolean;
  onPress: Function;
  testID?: string;
  touchableStyle: object;
  viewStyle: object;
}

class AnimatedSqueeze extends Component<Props> {
  SqueezeValue = new Animated.Value(0);

  animateIn = () => {
    this.SqueezeValue.setValue(0);
    Animated.timing(this.SqueezeValue, {
      duration: isIos ? 450 : 900,
      easing: Easing.linear,
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  animateOut = () => {
    this.SqueezeValue.setValue(0);
    Animated.timing(this.SqueezeValue, {
      duration: isIos ? 450 : 900,
      easing: Easing.linear,
      toValue: 0,
      useNativeDriver: true,
    }).start();
  };

  scaleAndGoTo = () => {
    const { onPress } = this.props;
    this.animateOut();
    onPress();
  };

  render() {
    const { children, disabled, testID, touchableStyle, viewStyle } =
      this.props;
    const squeezee = this.SqueezeValue.interpolate({
      inputRange: [0, 0.3, 0.6, 1],
      outputRange: [1, 0.99, 0.98, 0.96],
    });

    return (
      <Animated.View
        style={[{ transform: [{ scale: squeezee }] }, viewStyle]}
        testID={testID}
      >
        <TouchableOpacity
          activeOpacity={1}
          disabled={disabled}
          style={touchableStyle}
          onPress={this.scaleAndGoTo}
          onPressIn={this.animateIn}
          onPressOut={this.animateOut}
        >
          {children}
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default AnimatedSqueeze;
