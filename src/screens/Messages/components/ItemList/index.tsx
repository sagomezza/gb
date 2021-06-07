import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { theme } from "config/theme";
import { colors } from "../../utils/colors";
import {
  ContactName,
  ContactPhoto,
  DateContainer,
  DetailsContainer,
  IconContainer,
  LastMessage,
  MessageContainer,
  MessageDate,
  MessageTitleContainer,
  PhotoBackground,
  PhotoTitle,
} from "./styles";
import SwipeableAction from "../SwipeableAction";

const intervalToDuration = require("date-fns/intervalToDuration");

interface IItemListProps {
  item: {
    avatar: string;
    id: number;
    messages: {
      createdAt: Date;
      id: number;
      text: string;
    }[];
    user: string;
  };
  photoPosition: "rigth" | "left";
}

const ItemList: React.FC<IItemListProps> = ({
  item,
  photoPosition = "left",
}: IItemListProps) => {
  const splitName = item.user.split(" ");
  const userName = splitName[0].charAt(0) + splitName[1].charAt(0);
  const message = item.messages[item.messages.length - 1];
  const interval = intervalToDuration({
    start: message.createdAt,
    end: new Date(),
  });

  const contactPhotoLeft = () => {
    if (photoPosition === "left") {
      if (item.avatar !== "") {
        return <ContactPhoto source={{ uri: item.avatar }} />;
      }
      return (
        <PhotoBackground
          background={colors[Math.floor(Math.random() * colors.length)]}
        >
          <PhotoTitle>{userName}</PhotoTitle>
        </PhotoBackground>
      );
    }
    return <View />;
  };

  const contactPhotoRigth = () => {
    if (photoPosition === "rigth") {
      if (item.avatar !== "") {
        return <ContactPhoto source={{ uri: item.avatar }} />;
      }
      return (
        <PhotoBackground
          background={colors[Math.floor(Math.random() * colors.length)]}
        >
          <PhotoTitle>{userName}</PhotoTitle>
        </PhotoBackground>
      );
    }
    return <View />;
  };

  return (
    <Swipeable
      renderLeftActions={() => (
        <SwipeableAction
          backgroundColor={theme.colors.darkBlue}
          text="Move"
          onPress={() => {}}
        />
      )}
      renderRightActions={() => (
        <SwipeableAction
          backgroundColor={theme.colors.error}
          text="Delete"
          onPress={() => {}}
        />
      )}
    >
      <TouchableOpacity onPress={() => {}}>
        <MessageContainer>
          {contactPhotoLeft()}
          <DetailsContainer>
            <MessageTitleContainer>
              <View>
                <ContactName>{item.user}</ContactName>
              </View>
              <DateContainer>
                <MessageDate>
                  {interval.days > 1
                    ? `${interval.days} days ago`
                    : "Yesterday"}
                </MessageDate>
                <IconContainer>
                  <Icon
                    color={theme.colors.lightGrey}
                    name="arrow-forward-ios"
                    size={20}
                  />
                </IconContainer>
              </DateContainer>
            </MessageTitleContainer>
            <LastMessage numberOfLines={1}>{message.text}</LastMessage>
          </DetailsContainer>
          {contactPhotoRigth()}
        </MessageContainer>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default ItemList;
