import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import CloseIconAsPng from "../../assets/icons/modal-close.png";
import ErrorIconAsPng from "../../assets/icons/modal-error.png";
import SuccessIconAsPng from "../../assets/icons/modal-success.png";
import {
  ActionLabel,
  CardContainer,
  CardFooter,
  CloseButtonContainer,
  CloseIcon,
  EmphasisIcon,
  EmphasisIconContainer,
  ModalCardContainer,
  Subtitle,
  TextContainer,
  Title,
} from "./styles";


interface IEmphasisIcons {
  SUCCESS: Component;
  ERROR: Component;
}

const EMPHASIS_ICONS: IEmphasisIcons = {
  SUCCESS: SuccessIconAsPng,
  ERROR: ErrorIconAsPng,
};

interface IBaseModalContentProps {
  actionOnPress?: () => void;
  actionText?: string;
  emphasis: "SUCCESS" | "ERROR";
  onClose: () => void;
  subtitle: string;
  title: string;
}

const BaseModalContent = (props: IBaseModalContentProps) => {
  const {
    actionOnPress,
    actionText,
    emphasis,
    onClose,
    subtitle,
    title,
  } = props;

  return (
    <ModalCardContainer>
      <EmphasisIconContainer>
        <EmphasisIcon source={EMPHASIS_ICONS[emphasis]} />
      </EmphasisIconContainer>

      <CardContainer>
        <TextContainer>
          <View>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </View>
          <TouchableOpacity onPress={actionOnPress}>
            <ActionLabel emphasis={emphasis}>{actionText}</ActionLabel>
          </TouchableOpacity>
        </TextContainer>

        <CardFooter emphasis={emphasis} />
      </CardContainer>

      <TouchableOpacity onPress={onClose}>
        <CloseButtonContainer>
          <CloseIcon source={CloseIconAsPng} />
        </CloseButtonContainer>
      </TouchableOpacity>
    </ModalCardContainer>
  );
};

export default BaseModalContent;
