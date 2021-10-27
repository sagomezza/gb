/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UserPushRegisterInput = {
  userId?: string | null;
  platform?: string | null;
  deviceId?: string | null;
};

export type UserPushDeleteInput = {
  endpointArn?: string | null;
  userId?: string | null;
};

export type PublishNotificationInput = {
  message?: string | null;
  endpointArn?: string | null;
  subject?: string | null;
};

export type CreateCategoryInput = {
  id?: string | null;
  name?: string | null;
  icon?: string | null;
  image?: S3ObjectInput | null;
  description?: string | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryConditionInput | null> | null;
  or?: Array<ModelCategoryConditionInput | null> | null;
  not?: ModelCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = 'binary',
  binarySet = 'binarySet',
  bool = 'bool',
  list = 'list',
  map = 'map',
  number = 'number',
  numberSet = 'numberSet',
  string = 'string',
  stringSet = 'stringSet',
  _null = '_null',
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type Category = {
  __typename: 'Category';
  id: string;
  name?: string | null;
  icon?: string | null;
  image?: S3Object | null;
  description?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type S3Object = {
  __typename: 'S3Object';
  bucket: string;
  region: string;
  key: string;
};

export type UpdateCategoryInput = {
  id: string;
  name?: string | null;
  icon?: string | null;
  image?: S3ObjectInput | null;
  description?: string | null;
};

export type DeleteCategoryInput = {
  id: string;
};

export type CreateGymInput = {
  id?: string | null;
  name: string;
  description?: string | null;
  address?: string | null;
  gps?: GPSInput | null;
  pictures?: Array<string | null> | null;
  available?: boolean | null;
  status?: string | null;
  likeCount?: number | null;
  averageRating?: number | null;
  gymOwnerId?: string | null;
};

export type GPSInput = {
  lon: number;
  lat: number;
};

export type ModelGymConditionInput = {
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  pictures?: ModelStringInput | null;
  available?: ModelBooleanInput | null;
  status?: ModelStringInput | null;
  likeCount?: ModelIntInput | null;
  averageRating?: ModelFloatInput | null;
  gymOwnerId?: ModelIDInput | null;
  and?: Array<ModelGymConditionInput | null> | null;
  or?: Array<ModelGymConditionInput | null> | null;
  not?: ModelGymConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelFloatInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Gym = {
  __typename: 'Gym';
  id: string;
  name: string;
  description?: string | null;
  address?: string | null;
  gps?: GPS | null;
  pictures?: Array<string | null> | null;
  available?: boolean | null;
  status?: string | null;
  likeCount?: number | null;
  averageRating?: number | null;
  gymOwnerId?: string | null;
  owner?: User | null;
  createdAt: string;
  updatedAt: string;
};

export type GPS = {
  __typename: 'GPS';
  lon?: number | null;
  lat?: number | null;
};

export type User = {
  __typename: 'User';
  id: string;
  owner?: string | null;
  userGroup?: UserType | null;
  name: string;
  age?: string | null;
  city?: string | null;
  state?: string | null;
  description?: string | null;
  business?: string | null;
  deviceId?: string | null;
  deviceToken?: string | null;
  platform?: string | null;
  stripeCustomerId?: string | null;
  stripeSubscription?: string | null;
  stripeSubscriptionId?: string | null;
  endpointArn?: string | null;
  email: string;
  username?: string | null;
  birthdate?: string | null;
  gender?: string | null;
  address?: string | null;
  phone?: string | null;
  status?: boolean | null;
  premium?: boolean | null;
  trainer?: boolean | null;
  gps?: GPS | null;
  photo?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  userSettingId: string;
  userSuscriptionId?: string | null;
  setting?: Setting | null;
  gyms?: ModelGymConnection | null;
  notification?: ModelNotificationConnection | null;
  bulletin?: ModelBulletinConnection | null;
  activity?: ModelActivityConnection | null;
  chat?: ModelChatConnection | null;
  chatReceiver?: ModelChatConnection | null;
  messages?: ModelMessageConnection | null;
};

export enum UserType {
  User = 'User',
  Business = 'Business',
}

export type Setting = {
  __typename: 'Setting';
  id: string;
  categories?: Array<string | null> | null;
  radius?: number | null;
  icon?: string | null;
  settingOwnerId: string;
  owner?: User | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelGymConnection = {
  __typename: 'ModelGymConnection';
  items?: Array<Gym | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type ModelNotificationConnection = {
  __typename: 'ModelNotificationConnection';
  items?: Array<Notification | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type Notification = {
  __typename: 'Notification';
  id: string;
  message?: string | null;
  endpointArn: string;
  subject?: string | null;
  notificationOwnerId?: string | null;
  owner?: User | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelBulletinConnection = {
  __typename: 'ModelBulletinConnection';
  items?: Array<Bulletin | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type Bulletin = {
  __typename: 'Bulletin';
  id: string;
  title: string;
  description: string;
  category?: string | null;
  photos?: Array<string | null> | null;
  bulletinOwnerId: string;
  eventDate: string;
  owner?: User | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelActivityConnection = {
  __typename: 'ModelActivityConnection';
  items?: Array<Activity | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type Activity = {
  __typename: 'Activity';
  id: string;
  title: string;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  gps?: GPS | null;
  invitePushSent?: boolean | null;
  startAt?: string | null;
  endsAt?: string | null;
  activityDate: string;
  pictures?: Array<string | null> | null;
  available?: boolean | null;
  status?: string | null;
  activityOwnerId?: string | null;
  owner?: User | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelChatConnection = {
  __typename: 'ModelChatConnection';
  items?: Array<Chat | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type Chat = {
  __typename: 'Chat';
  id: string;
  title?: string | null;
  description?: string | null;
  status?: string | null;
  chatOwnerId?: string | null;
  chatReceiverId?: string | null;
  messages?: ModelMessageConnection | null;
  receiver?: User | null;
  owner?: User | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelMessageConnection = {
  __typename: 'ModelMessageConnection';
  items?: Array<Message | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type Message = {
  __typename: 'Message';
  id: string;
  message?: string | null;
  status?: string | null;
  messageOwnerId?: string | null;
  messageChatId?: string | null;
  chat?: Chat | null;
  owner?: User | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateGymInput = {
  id: string;
  name?: string | null;
  description?: string | null;
  address?: string | null;
  gps?: GPSInput | null;
  pictures?: Array<string | null> | null;
  available?: boolean | null;
  status?: string | null;
  likeCount?: number | null;
  averageRating?: number | null;
  gymOwnerId?: string | null;
};

export type DeleteGymInput = {
  id: string;
};

export type CreateActivityInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  gps?: GPSInput | null;
  invitePushSent?: boolean | null;
  startAt?: string | null;
  endsAt?: string | null;
  activityDate: string;
  pictures?: Array<string | null> | null;
  available?: boolean | null;
  status?: string | null;
  activityOwnerId?: string | null;
};

export type ModelActivityConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  address?: ModelStringInput | null;
  invitePushSent?: ModelBooleanInput | null;
  startAt?: ModelStringInput | null;
  endsAt?: ModelStringInput | null;
  activityDate?: ModelStringInput | null;
  pictures?: ModelStringInput | null;
  available?: ModelBooleanInput | null;
  status?: ModelStringInput | null;
  activityOwnerId?: ModelIDInput | null;
  and?: Array<ModelActivityConditionInput | null> | null;
  or?: Array<ModelActivityConditionInput | null> | null;
  not?: ModelActivityConditionInput | null;
};

export type UpdateActivityInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  location?: string | null;
  address?: string | null;
  gps?: GPSInput | null;
  invitePushSent?: boolean | null;
  startAt?: string | null;
  endsAt?: string | null;
  activityDate?: string | null;
  pictures?: Array<string | null> | null;
  available?: boolean | null;
  status?: string | null;
  activityOwnerId?: string | null;
};

export type DeleteActivityInput = {
  id: string;
};

export type CreateChatInput = {
  id?: string | null;
  title?: string | null;
  description?: string | null;
  status?: string | null;
  chatOwnerId?: string | null;
  chatReceiverId?: string | null;
};

export type ModelChatConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  chatOwnerId?: ModelIDInput | null;
  chatReceiverId?: ModelIDInput | null;
  and?: Array<ModelChatConditionInput | null> | null;
  or?: Array<ModelChatConditionInput | null> | null;
  not?: ModelChatConditionInput | null;
};

export type UpdateChatInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  status?: string | null;
  chatOwnerId?: string | null;
  chatReceiverId?: string | null;
};

export type DeleteChatInput = {
  id: string;
};

export type CreateMessageInput = {
  id?: string | null;
  message?: string | null;
  status?: string | null;
  messageOwnerId?: string | null;
  messageChatId?: string | null;
};

export type ModelMessageConditionInput = {
  message?: ModelStringInput | null;
  status?: ModelStringInput | null;
  messageOwnerId?: ModelIDInput | null;
  messageChatId?: ModelIDInput | null;
  and?: Array<ModelMessageConditionInput | null> | null;
  or?: Array<ModelMessageConditionInput | null> | null;
  not?: ModelMessageConditionInput | null;
};

export type UpdateMessageInput = {
  id: string;
  message?: string | null;
  status?: string | null;
  messageOwnerId?: string | null;
  messageChatId?: string | null;
};

export type DeleteMessageInput = {
  id: string;
};

export type CreateNotificationInput = {
  id?: string | null;
  message?: string | null;
  endpointArn: string;
  subject?: string | null;
  notificationOwnerId?: string | null;
};

export type ModelNotificationConditionInput = {
  message?: ModelStringInput | null;
  endpointArn?: ModelStringInput | null;
  subject?: ModelStringInput | null;
  notificationOwnerId?: ModelIDInput | null;
  and?: Array<ModelNotificationConditionInput | null> | null;
  or?: Array<ModelNotificationConditionInput | null> | null;
  not?: ModelNotificationConditionInput | null;
};

export type UpdateNotificationInput = {
  id: string;
  message?: string | null;
  endpointArn?: string | null;
  subject?: string | null;
  notificationOwnerId?: string | null;
};

export type DeleteNotificationInput = {
  id: string;
};

export type CreateBulletinInput = {
  id?: string | null;
  title: string;
  description: string;
  category?: string | null;
  photos?: Array<string | null> | null;
  bulletinOwnerId: string;
  eventDate: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelBulletinConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  category?: ModelStringInput | null;
  photos?: ModelStringInput | null;
  bulletinOwnerId?: ModelIDInput | null;
  eventDate?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelBulletinConditionInput | null> | null;
  or?: Array<ModelBulletinConditionInput | null> | null;
  not?: ModelBulletinConditionInput | null;
};

export type UpdateBulletinInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  category?: string | null;
  photos?: Array<string | null> | null;
  bulletinOwnerId?: string | null;
  eventDate?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteBulletinInput = {
  id: string;
};

export type CreateSettingInput = {
  id?: string | null;
  categories?: Array<string | null> | null;
  radius?: number | null;
  icon?: string | null;
  settingOwnerId: string;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type ModelSettingConditionInput = {
  categories?: ModelStringInput | null;
  radius?: ModelFloatInput | null;
  icon?: ModelStringInput | null;
  settingOwnerId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSettingConditionInput | null> | null;
  or?: Array<ModelSettingConditionInput | null> | null;
  not?: ModelSettingConditionInput | null;
};

export type UpdateSettingInput = {
  id: string;
  categories?: Array<string | null> | null;
  radius?: number | null;
  icon?: string | null;
  settingOwnerId?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
};

export type DeleteSettingInput = {
  id: string;
};

export type CreateUserInput = {
  id?: string | null;
  owner?: string | null;
  userGroup?: UserType | null;
  name: string;
  age?: string | null;
  city?: string | null;
  state?: string | null;
  description?: string | null;
  business?: string | null;
  deviceId?: string | null;
  deviceToken?: string | null;
  platform?: string | null;
  stripeCustomerId?: string | null;
  stripeSubscription?: string | null;
  stripeSubscriptionId?: string | null;
  endpointArn?: string | null;
  email: string;
  username?: string | null;
  birthdate?: string | null;
  gender?: string | null;
  address?: string | null;
  phone?: string | null;
  status?: boolean | null;
  premium?: boolean | null;
  trainer?: boolean | null;
  gps?: GPSInput | null;
  photo?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  userSettingId: string;
  userSuscriptionId?: string | null;
};

export type ModelUserConditionInput = {
  owner?: ModelStringInput | null;
  userGroup?: ModelUserTypeInput | null;
  name?: ModelStringInput | null;
  age?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  description?: ModelStringInput | null;
  business?: ModelStringInput | null;
  deviceId?: ModelStringInput | null;
  deviceToken?: ModelStringInput | null;
  platform?: ModelStringInput | null;
  stripeCustomerId?: ModelStringInput | null;
  stripeSubscription?: ModelStringInput | null;
  stripeSubscriptionId?: ModelStringInput | null;
  endpointArn?: ModelStringInput | null;
  email?: ModelStringInput | null;
  username?: ModelStringInput | null;
  birthdate?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  premium?: ModelBooleanInput | null;
  trainer?: ModelBooleanInput | null;
  photo?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  userSettingId?: ModelIDInput | null;
  userSuscriptionId?: ModelIDInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
};

export type ModelUserTypeInput = {
  eq?: UserType | null;
  ne?: UserType | null;
};

export type UpdateUserInput = {
  id: string;
  owner?: string | null;
  userGroup?: UserType | null;
  name?: string | null;
  age?: string | null;
  city?: string | null;
  state?: string | null;
  description?: string | null;
  business?: string | null;
  deviceId?: string | null;
  deviceToken?: string | null;
  platform?: string | null;
  stripeCustomerId?: string | null;
  stripeSubscription?: string | null;
  stripeSubscriptionId?: string | null;
  endpointArn?: string | null;
  email?: string | null;
  username?: string | null;
  birthdate?: string | null;
  gender?: string | null;
  address?: string | null;
  phone?: string | null;
  status?: boolean | null;
  premium?: boolean | null;
  trainer?: boolean | null;
  gps?: GPSInput | null;
  photo?: string | null;
  createdAt?: string | null;
  updatedAt?: string | null;
  userSettingId?: string | null;
  userSuscriptionId?: string | null;
};

export type DeleteUserInput = {
  id: string;
};

export type FindGymsInput = {
  byGPS?: GPSQueryInput | null;
  query?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type GPSQueryInput = {
  gps: GPSInput;
  radius: number;
};

export type SearchableGymConnection = {
  __typename: 'SearchableGymConnection';
  items?: Array<Gym | null> | null;
  nextToken?: string | null;
  total?: number | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type FindUsersInput = {
  byGPS?: GPSQueryInput | null;
  query?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type SearchableUserConnection = {
  __typename: 'SearchableUserConnection';
  items?: Array<User | null> | null;
  nextToken?: string | null;
  total?: number | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  icon?: ModelStringInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelCategoryFilterInput | null> | null;
  or?: Array<ModelCategoryFilterInput | null> | null;
  not?: ModelCategoryFilterInput | null;
};

export type ModelCategoryConnection = {
  __typename: 'ModelCategoryConnection';
  items?: Array<Category | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type ModelGymFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  description?: ModelStringInput | null;
  address?: ModelStringInput | null;
  pictures?: ModelStringInput | null;
  available?: ModelBooleanInput | null;
  status?: ModelStringInput | null;
  likeCount?: ModelIntInput | null;
  averageRating?: ModelFloatInput | null;
  gymOwnerId?: ModelIDInput | null;
  and?: Array<ModelGymFilterInput | null> | null;
  or?: Array<ModelGymFilterInput | null> | null;
  not?: ModelGymFilterInput | null;
};

export enum ModelSortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  location?: ModelStringInput | null;
  address?: ModelStringInput | null;
  invitePushSent?: ModelBooleanInput | null;
  startAt?: ModelStringInput | null;
  endsAt?: ModelStringInput | null;
  activityDate?: ModelStringInput | null;
  pictures?: ModelStringInput | null;
  available?: ModelBooleanInput | null;
  status?: ModelStringInput | null;
  activityOwnerId?: ModelIDInput | null;
  and?: Array<ModelActivityFilterInput | null> | null;
  or?: Array<ModelActivityFilterInput | null> | null;
  not?: ModelActivityFilterInput | null;
};

export type ModelChatFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  chatOwnerId?: ModelIDInput | null;
  chatReceiverId?: ModelIDInput | null;
  and?: Array<ModelChatFilterInput | null> | null;
  or?: Array<ModelChatFilterInput | null> | null;
  not?: ModelChatFilterInput | null;
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null;
  message?: ModelStringInput | null;
  status?: ModelStringInput | null;
  messageOwnerId?: ModelIDInput | null;
  messageChatId?: ModelIDInput | null;
  and?: Array<ModelMessageFilterInput | null> | null;
  or?: Array<ModelMessageFilterInput | null> | null;
  not?: ModelMessageFilterInput | null;
};

export type ModelNotificationFilterInput = {
  id?: ModelIDInput | null;
  message?: ModelStringInput | null;
  endpointArn?: ModelStringInput | null;
  subject?: ModelStringInput | null;
  notificationOwnerId?: ModelIDInput | null;
  and?: Array<ModelNotificationFilterInput | null> | null;
  or?: Array<ModelNotificationFilterInput | null> | null;
  not?: ModelNotificationFilterInput | null;
};

export type ModelBulletinFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  category?: ModelStringInput | null;
  photos?: ModelStringInput | null;
  bulletinOwnerId?: ModelIDInput | null;
  eventDate?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelBulletinFilterInput | null> | null;
  or?: Array<ModelBulletinFilterInput | null> | null;
  not?: ModelBulletinFilterInput | null;
};

export type ModelSettingFilterInput = {
  id?: ModelIDInput | null;
  categories?: ModelStringInput | null;
  radius?: ModelFloatInput | null;
  icon?: ModelStringInput | null;
  settingOwnerId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelSettingFilterInput | null> | null;
  or?: Array<ModelSettingFilterInput | null> | null;
  not?: ModelSettingFilterInput | null;
};

export type ModelSettingConnection = {
  __typename: 'ModelSettingConnection';
  items?: Array<Setting | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  userGroup?: ModelUserTypeInput | null;
  name?: ModelStringInput | null;
  age?: ModelStringInput | null;
  city?: ModelStringInput | null;
  state?: ModelStringInput | null;
  description?: ModelStringInput | null;
  business?: ModelStringInput | null;
  deviceId?: ModelStringInput | null;
  deviceToken?: ModelStringInput | null;
  platform?: ModelStringInput | null;
  stripeCustomerId?: ModelStringInput | null;
  stripeSubscription?: ModelStringInput | null;
  stripeSubscriptionId?: ModelStringInput | null;
  endpointArn?: ModelStringInput | null;
  email?: ModelStringInput | null;
  username?: ModelStringInput | null;
  birthdate?: ModelStringInput | null;
  gender?: ModelStringInput | null;
  address?: ModelStringInput | null;
  phone?: ModelStringInput | null;
  status?: ModelBooleanInput | null;
  premium?: ModelBooleanInput | null;
  trainer?: ModelBooleanInput | null;
  photo?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  userSettingId?: ModelIDInput | null;
  userSuscriptionId?: ModelIDInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelUserConnection = {
  __typename: 'ModelUserConnection';
  items?: Array<User | null> | null;
  nextToken?: string | null;
  scannedCount?: number | null;
  count?: number | null;
};

export type SearchableGymFilterInput = {
  id?: SearchableIDFilterInput | null;
  name?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  address?: SearchableStringFilterInput | null;
  pictures?: SearchableStringFilterInput | null;
  available?: SearchableBooleanFilterInput | null;
  status?: SearchableStringFilterInput | null;
  likeCount?: SearchableIntFilterInput | null;
  averageRating?: SearchableFloatFilterInput | null;
  gymOwnerId?: SearchableIDFilterInput | null;
  and?: Array<SearchableGymFilterInput | null> | null;
  or?: Array<SearchableGymFilterInput | null> | null;
  not?: SearchableGymFilterInput | null;
};

export type SearchableIDFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableStringFilterInput = {
  ne?: string | null;
  gt?: string | null;
  lt?: string | null;
  gte?: string | null;
  lte?: string | null;
  eq?: string | null;
  match?: string | null;
  matchPhrase?: string | null;
  matchPhrasePrefix?: string | null;
  multiMatch?: string | null;
  exists?: boolean | null;
  wildcard?: string | null;
  regexp?: string | null;
  range?: Array<string | null> | null;
};

export type SearchableBooleanFilterInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type SearchableIntFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableFloatFilterInput = {
  ne?: number | null;
  gt?: number | null;
  lt?: number | null;
  gte?: number | null;
  lte?: number | null;
  eq?: number | null;
  range?: Array<number | null> | null;
};

export type SearchableGymSortInput = {
  field?: SearchableGymSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableGymSortableFields {
  id = 'id',
  name = 'name',
  description = 'description',
  address = 'address',
  pictures = 'pictures',
  available = 'available',
  status = 'status',
  likeCount = 'likeCount',
  averageRating = 'averageRating',
  gymOwnerId = 'gymOwnerId',
}

export enum SearchableSortDirection {
  asc = 'asc',
  desc = 'desc',
}

export type SearchableUserFilterInput = {
  id?: SearchableIDFilterInput | null;
  owner?: SearchableStringFilterInput | null;
  name?: SearchableStringFilterInput | null;
  age?: SearchableStringFilterInput | null;
  city?: SearchableStringFilterInput | null;
  state?: SearchableStringFilterInput | null;
  description?: SearchableStringFilterInput | null;
  business?: SearchableStringFilterInput | null;
  deviceId?: SearchableStringFilterInput | null;
  deviceToken?: SearchableStringFilterInput | null;
  platform?: SearchableStringFilterInput | null;
  stripeCustomerId?: SearchableStringFilterInput | null;
  stripeSubscription?: SearchableStringFilterInput | null;
  stripeSubscriptionId?: SearchableStringFilterInput | null;
  endpointArn?: SearchableStringFilterInput | null;
  email?: SearchableStringFilterInput | null;
  username?: SearchableStringFilterInput | null;
  birthdate?: SearchableStringFilterInput | null;
  gender?: SearchableStringFilterInput | null;
  address?: SearchableStringFilterInput | null;
  phone?: SearchableStringFilterInput | null;
  status?: SearchableBooleanFilterInput | null;
  premium?: SearchableBooleanFilterInput | null;
  trainer?: SearchableBooleanFilterInput | null;
  photo?: SearchableStringFilterInput | null;
  createdAt?: SearchableStringFilterInput | null;
  updatedAt?: SearchableStringFilterInput | null;
  userSettingId?: SearchableIDFilterInput | null;
  userSuscriptionId?: SearchableIDFilterInput | null;
  and?: Array<SearchableUserFilterInput | null> | null;
  or?: Array<SearchableUserFilterInput | null> | null;
  not?: SearchableUserFilterInput | null;
};

export type SearchableUserSortInput = {
  field?: SearchableUserSortableFields | null;
  direction?: SearchableSortDirection | null;
};

export enum SearchableUserSortableFields {
  id = 'id',
  owner = 'owner',
  name = 'name',
  age = 'age',
  city = 'city',
  state = 'state',
  description = 'description',
  business = 'business',
  deviceId = 'deviceId',
  deviceToken = 'deviceToken',
  platform = 'platform',
  stripeCustomerId = 'stripeCustomerId',
  stripeSubscription = 'stripeSubscription',
  stripeSubscriptionId = 'stripeSubscriptionId',
  endpointArn = 'endpointArn',
  email = 'email',
  username = 'username',
  birthdate = 'birthdate',
  gender = 'gender',
  address = 'address',
  phone = 'phone',
  status = 'status',
  premium = 'premium',
  trainer = 'trainer',
  photo = 'photo',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  userSettingId = 'userSettingId',
  userSuscriptionId = 'userSuscriptionId',
}

export type EnableDisableUsersMutationVariables = {
  user?: string | null;
};

export type EnableDisableUsersMutation = {
  enableDisableUsers?: string | null;
};

export type RegisterEndpointArnNotificationMutationVariables = {
  body?: UserPushRegisterInput | null;
};

export type RegisterEndpointArnNotificationMutation = {
  registerEndpointArnNotification?: string | null;
};

export type DeleteEndpointArnNotificationMutationVariables = {
  body?: UserPushDeleteInput | null;
};

export type DeleteEndpointArnNotificationMutation = {
  deleteEndpointArnNotification?: string | null;
};

export type PublishNotificationMutationVariables = {
  body?: PublishNotificationInput | null;
};

export type PublishNotificationMutation = {
  publishNotification?: string | null;
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type CreateCategoryMutation = {
  createCategory?: {
    __typename: 'Category';
    id: string;
    name?: string | null;
    icon?: string | null;
    image?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type UpdateCategoryMutation = {
  updateCategory?: {
    __typename: 'Category';
    id: string;
    name?: string | null;
    icon?: string | null;
    image?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput;
  condition?: ModelCategoryConditionInput | null;
};

export type DeleteCategoryMutation = {
  deleteCategory?: {
    __typename: 'Category';
    id: string;
    name?: string | null;
    icon?: string | null;
    image?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateGymMutationVariables = {
  input: CreateGymInput;
  condition?: ModelGymConditionInput | null;
};

export type CreateGymMutation = {
  createGym?: {
    __typename: 'Gym';
    id: string;
    name: string;
    description?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    likeCount?: number | null;
    averageRating?: number | null;
    gymOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateGymMutationVariables = {
  input: UpdateGymInput;
  condition?: ModelGymConditionInput | null;
};

export type UpdateGymMutation = {
  updateGym?: {
    __typename: 'Gym';
    id: string;
    name: string;
    description?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    likeCount?: number | null;
    averageRating?: number | null;
    gymOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteGymMutationVariables = {
  input: DeleteGymInput;
  condition?: ModelGymConditionInput | null;
};

export type DeleteGymMutation = {
  deleteGym?: {
    __typename: 'Gym';
    id: string;
    name: string;
    description?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    likeCount?: number | null;
    averageRating?: number | null;
    gymOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput;
  condition?: ModelActivityConditionInput | null;
};

export type CreateActivityMutation = {
  createActivity?: {
    __typename: 'Activity';
    id: string;
    title: string;
    description?: string | null;
    location?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    invitePushSent?: boolean | null;
    startAt?: string | null;
    endsAt?: string | null;
    activityDate: string;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    activityOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput;
  condition?: ModelActivityConditionInput | null;
};

export type UpdateActivityMutation = {
  updateActivity?: {
    __typename: 'Activity';
    id: string;
    title: string;
    description?: string | null;
    location?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    invitePushSent?: boolean | null;
    startAt?: string | null;
    endsAt?: string | null;
    activityDate: string;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    activityOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput;
  condition?: ModelActivityConditionInput | null;
};

export type DeleteActivityMutation = {
  deleteActivity?: {
    __typename: 'Activity';
    id: string;
    title: string;
    description?: string | null;
    location?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    invitePushSent?: boolean | null;
    startAt?: string | null;
    endsAt?: string | null;
    activityDate: string;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    activityOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateChatMutationVariables = {
  input: CreateChatInput;
  condition?: ModelChatConditionInput | null;
};

export type CreateChatMutation = {
  createChat?: {
    __typename: 'Chat';
    id: string;
    title?: string | null;
    description?: string | null;
    status?: string | null;
    chatOwnerId?: string | null;
    chatReceiverId?: string | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    receiver?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateChatMutationVariables = {
  input: UpdateChatInput;
  condition?: ModelChatConditionInput | null;
};

export type UpdateChatMutation = {
  updateChat?: {
    __typename: 'Chat';
    id: string;
    title?: string | null;
    description?: string | null;
    status?: string | null;
    chatOwnerId?: string | null;
    chatReceiverId?: string | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    receiver?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteChatMutationVariables = {
  input: DeleteChatInput;
  condition?: ModelChatConditionInput | null;
};

export type DeleteChatMutation = {
  deleteChat?: {
    __typename: 'Chat';
    id: string;
    title?: string | null;
    description?: string | null;
    status?: string | null;
    chatOwnerId?: string | null;
    chatReceiverId?: string | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    receiver?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type CreateMessageMutation = {
  createMessage?: {
    __typename: 'Message';
    id: string;
    message?: string | null;
    status?: string | null;
    messageOwnerId?: string | null;
    messageChatId?: string | null;
    chat?: {
      __typename: 'Chat';
      id: string;
      title?: string | null;
      description?: string | null;
      status?: string | null;
      chatOwnerId?: string | null;
      chatReceiverId?: string | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      receiver?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type UpdateMessageMutation = {
  updateMessage?: {
    __typename: 'Message';
    id: string;
    message?: string | null;
    status?: string | null;
    messageOwnerId?: string | null;
    messageChatId?: string | null;
    chat?: {
      __typename: 'Chat';
      id: string;
      title?: string | null;
      description?: string | null;
      status?: string | null;
      chatOwnerId?: string | null;
      chatReceiverId?: string | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      receiver?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput;
  condition?: ModelMessageConditionInput | null;
};

export type DeleteMessageMutation = {
  deleteMessage?: {
    __typename: 'Message';
    id: string;
    message?: string | null;
    status?: string | null;
    messageOwnerId?: string | null;
    messageChatId?: string | null;
    chat?: {
      __typename: 'Chat';
      id: string;
      title?: string | null;
      description?: string | null;
      status?: string | null;
      chatOwnerId?: string | null;
      chatReceiverId?: string | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      receiver?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateNotificationMutationVariables = {
  input: CreateNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type CreateNotificationMutation = {
  createNotification?: {
    __typename: 'Notification';
    id: string;
    message?: string | null;
    endpointArn: string;
    subject?: string | null;
    notificationOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type UpdateNotificationMutationVariables = {
  input: UpdateNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type UpdateNotificationMutation = {
  updateNotification?: {
    __typename: 'Notification';
    id: string;
    message?: string | null;
    endpointArn: string;
    subject?: string | null;
    notificationOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type DeleteNotificationMutationVariables = {
  input: DeleteNotificationInput;
  condition?: ModelNotificationConditionInput | null;
};

export type DeleteNotificationMutation = {
  deleteNotification?: {
    __typename: 'Notification';
    id: string;
    message?: string | null;
    endpointArn: string;
    subject?: string | null;
    notificationOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type CreateBulletinMutationVariables = {
  input: CreateBulletinInput;
  condition?: ModelBulletinConditionInput | null;
};

export type CreateBulletinMutation = {
  createBulletin?: {
    __typename: 'Bulletin';
    id: string;
    title: string;
    description: string;
    category?: string | null;
    photos?: Array<string | null> | null;
    bulletinOwnerId: string;
    eventDate: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type UpdateBulletinMutationVariables = {
  input: UpdateBulletinInput;
  condition?: ModelBulletinConditionInput | null;
};

export type UpdateBulletinMutation = {
  updateBulletin?: {
    __typename: 'Bulletin';
    id: string;
    title: string;
    description: string;
    category?: string | null;
    photos?: Array<string | null> | null;
    bulletinOwnerId: string;
    eventDate: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type DeleteBulletinMutationVariables = {
  input: DeleteBulletinInput;
  condition?: ModelBulletinConditionInput | null;
};

export type DeleteBulletinMutation = {
  deleteBulletin?: {
    __typename: 'Bulletin';
    id: string;
    title: string;
    description: string;
    category?: string | null;
    photos?: Array<string | null> | null;
    bulletinOwnerId: string;
    eventDate: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type CreateSettingMutationVariables = {
  input: CreateSettingInput;
  condition?: ModelSettingConditionInput | null;
};

export type CreateSettingMutation = {
  createSetting?: {
    __typename: 'Setting';
    id: string;
    categories?: Array<string | null> | null;
    radius?: number | null;
    icon?: string | null;
    settingOwnerId: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type UpdateSettingMutationVariables = {
  input: UpdateSettingInput;
  condition?: ModelSettingConditionInput | null;
};

export type UpdateSettingMutation = {
  updateSetting?: {
    __typename: 'Setting';
    id: string;
    categories?: Array<string | null> | null;
    radius?: number | null;
    icon?: string | null;
    settingOwnerId: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type DeleteSettingMutationVariables = {
  input: DeleteSettingInput;
  condition?: ModelSettingConditionInput | null;
};

export type DeleteSettingMutation = {
  deleteSetting?: {
    __typename: 'Setting';
    id: string;
    categories?: Array<string | null> | null;
    radius?: number | null;
    icon?: string | null;
    settingOwnerId: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type CreateUserMutationVariables = {
  input: CreateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type CreateUserMutation = {
  createUser?: {
    __typename: 'User';
    id: string;
    owner?: string | null;
    userGroup?: UserType | null;
    name: string;
    age?: string | null;
    city?: string | null;
    state?: string | null;
    description?: string | null;
    business?: string | null;
    deviceId?: string | null;
    deviceToken?: string | null;
    platform?: string | null;
    stripeCustomerId?: string | null;
    stripeSubscription?: string | null;
    stripeSubscriptionId?: string | null;
    endpointArn?: string | null;
    email: string;
    username?: string | null;
    birthdate?: string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    status?: boolean | null;
    premium?: boolean | null;
    trainer?: boolean | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    photo?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    userSettingId: string;
    userSuscriptionId?: string | null;
    setting?: {
      __typename: 'Setting';
      id: string;
      categories?: Array<string | null> | null;
      radius?: number | null;
      icon?: string | null;
      settingOwnerId: string;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    gyms?: {
      __typename: 'ModelGymConnection';
      items?: Array<{
        __typename: 'Gym';
        id: string;
        name: string;
        description?: string | null;
        address?: string | null;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        likeCount?: number | null;
        averageRating?: number | null;
        gymOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    notification?: {
      __typename: 'ModelNotificationConnection';
      items?: Array<{
        __typename: 'Notification';
        id: string;
        message?: string | null;
        endpointArn: string;
        subject?: string | null;
        notificationOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    bulletin?: {
      __typename: 'ModelBulletinConnection';
      items?: Array<{
        __typename: 'Bulletin';
        id: string;
        title: string;
        description: string;
        category?: string | null;
        photos?: Array<string | null> | null;
        bulletinOwnerId: string;
        eventDate: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    activity?: {
      __typename: 'ModelActivityConnection';
      items?: Array<{
        __typename: 'Activity';
        id: string;
        title: string;
        description?: string | null;
        location?: string | null;
        address?: string | null;
        invitePushSent?: boolean | null;
        startAt?: string | null;
        endsAt?: string | null;
        activityDate: string;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        activityOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chat?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chatReceiver?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
  } | null;
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput;
  condition?: ModelUserConditionInput | null;
};

export type UpdateUserMutation = {
  updateUser?: {
    __typename: 'User';
    id: string;
    owner?: string | null;
    userGroup?: UserType | null;
    name: string;
    age?: string | null;
    city?: string | null;
    state?: string | null;
    description?: string | null;
    business?: string | null;
    deviceId?: string | null;
    deviceToken?: string | null;
    platform?: string | null;
    stripeCustomerId?: string | null;
    stripeSubscription?: string | null;
    stripeSubscriptionId?: string | null;
    endpointArn?: string | null;
    email: string;
    username?: string | null;
    birthdate?: string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    status?: boolean | null;
    premium?: boolean | null;
    trainer?: boolean | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    photo?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    userSettingId: string;
    userSuscriptionId?: string | null;
    setting?: {
      __typename: 'Setting';
      id: string;
      categories?: Array<string | null> | null;
      radius?: number | null;
      icon?: string | null;
      settingOwnerId: string;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    gyms?: {
      __typename: 'ModelGymConnection';
      items?: Array<{
        __typename: 'Gym';
        id: string;
        name: string;
        description?: string | null;
        address?: string | null;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        likeCount?: number | null;
        averageRating?: number | null;
        gymOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    notification?: {
      __typename: 'ModelNotificationConnection';
      items?: Array<{
        __typename: 'Notification';
        id: string;
        message?: string | null;
        endpointArn: string;
        subject?: string | null;
        notificationOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    bulletin?: {
      __typename: 'ModelBulletinConnection';
      items?: Array<{
        __typename: 'Bulletin';
        id: string;
        title: string;
        description: string;
        category?: string | null;
        photos?: Array<string | null> | null;
        bulletinOwnerId: string;
        eventDate: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    activity?: {
      __typename: 'ModelActivityConnection';
      items?: Array<{
        __typename: 'Activity';
        id: string;
        title: string;
        description?: string | null;
        location?: string | null;
        address?: string | null;
        invitePushSent?: boolean | null;
        startAt?: string | null;
        endsAt?: string | null;
        activityDate: string;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        activityOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chat?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chatReceiver?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
  } | null;
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput;
  condition?: ModelUserConditionInput | null;
};

export type DeleteUserMutation = {
  deleteUser?: {
    __typename: 'User';
    id: string;
    owner?: string | null;
    userGroup?: UserType | null;
    name: string;
    age?: string | null;
    city?: string | null;
    state?: string | null;
    description?: string | null;
    business?: string | null;
    deviceId?: string | null;
    deviceToken?: string | null;
    platform?: string | null;
    stripeCustomerId?: string | null;
    stripeSubscription?: string | null;
    stripeSubscriptionId?: string | null;
    endpointArn?: string | null;
    email: string;
    username?: string | null;
    birthdate?: string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    status?: boolean | null;
    premium?: boolean | null;
    trainer?: boolean | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    photo?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    userSettingId: string;
    userSuscriptionId?: string | null;
    setting?: {
      __typename: 'Setting';
      id: string;
      categories?: Array<string | null> | null;
      radius?: number | null;
      icon?: string | null;
      settingOwnerId: string;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    gyms?: {
      __typename: 'ModelGymConnection';
      items?: Array<{
        __typename: 'Gym';
        id: string;
        name: string;
        description?: string | null;
        address?: string | null;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        likeCount?: number | null;
        averageRating?: number | null;
        gymOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    notification?: {
      __typename: 'ModelNotificationConnection';
      items?: Array<{
        __typename: 'Notification';
        id: string;
        message?: string | null;
        endpointArn: string;
        subject?: string | null;
        notificationOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    bulletin?: {
      __typename: 'ModelBulletinConnection';
      items?: Array<{
        __typename: 'Bulletin';
        id: string;
        title: string;
        description: string;
        category?: string | null;
        photos?: Array<string | null> | null;
        bulletinOwnerId: string;
        eventDate: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    activity?: {
      __typename: 'ModelActivityConnection';
      items?: Array<{
        __typename: 'Activity';
        id: string;
        title: string;
        description?: string | null;
        location?: string | null;
        address?: string | null;
        invitePushSent?: boolean | null;
        startAt?: string | null;
        endsAt?: string | null;
        activityDate: string;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        activityOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chat?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chatReceiver?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
  } | null;
};

export type FindGymsQueryVariables = {
  input: FindGymsInput;
};

export type FindGymsQuery = {
  findGyms?: {
    __typename: 'SearchableGymConnection';
    items?: Array<{
      __typename: 'Gym';
      id: string;
      name: string;
      description?: string | null;
      address?: string | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      pictures?: Array<string | null> | null;
      available?: boolean | null;
      status?: string | null;
      likeCount?: number | null;
      averageRating?: number | null;
      gymOwnerId?: string | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type FindUsersQueryVariables = {
  input: FindUsersInput;
};

export type FindUsersQuery = {
  findUsers?: {
    __typename: 'SearchableUserConnection';
    items?: Array<{
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetCategoryQueryVariables = {
  id: string;
};

export type GetCategoryQuery = {
  getCategory?: {
    __typename: 'Category';
    id: string;
    name?: string | null;
    icon?: string | null;
    image?: {
      __typename: 'S3Object';
      bucket: string;
      region: string;
      key: string;
    } | null;
    description?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCategorysQuery = {
  listCategorys?: {
    __typename: 'ModelCategoryConnection';
    items?: Array<{
      __typename: 'Category';
      id: string;
      name?: string | null;
      icon?: string | null;
      image?: {
        __typename: 'S3Object';
        bucket: string;
        region: string;
        key: string;
      } | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetGymQueryVariables = {
  id: string;
};

export type GetGymQuery = {
  getGym?: {
    __typename: 'Gym';
    id: string;
    name: string;
    description?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    likeCount?: number | null;
    averageRating?: number | null;
    gymOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListGymsQueryVariables = {
  id?: string | null;
  filter?: ModelGymFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListGymsQuery = {
  listGyms?: {
    __typename: 'ModelGymConnection';
    items?: Array<{
      __typename: 'Gym';
      id: string;
      name: string;
      description?: string | null;
      address?: string | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      pictures?: Array<string | null> | null;
      available?: boolean | null;
      status?: string | null;
      likeCount?: number | null;
      averageRating?: number | null;
      gymOwnerId?: string | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetChatQueryVariables = {
  id: string;
};

export type GetChatQuery = {
  getChat?: {
    __typename: 'Chat';
    id: string;
    title?: string | null;
    description?: string | null;
    status?: string | null;
    chatOwnerId?: string | null;
    chatReceiverId?: string | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    receiver?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListChatsQueryVariables = {
  id?: string | null;
  filter?: ModelChatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListChatsQuery = {
  listChats?: {
    __typename: 'ModelChatConnection';
    items?: Array<{
      __typename: 'Chat';
      id: string;
      title?: string | null;
      description?: string | null;
      status?: string | null;
      chatOwnerId?: string | null;
      chatReceiverId?: string | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      receiver?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetMessageQueryVariables = {
  id: string;
};

export type GetMessageQuery = {
  getMessage?: {
    __typename: 'Message';
    id: string;
    message?: string | null;
    status?: string | null;
    messageOwnerId?: string | null;
    messageChatId?: string | null;
    chat?: {
      __typename: 'Chat';
      id: string;
      title?: string | null;
      description?: string | null;
      status?: string | null;
      chatOwnerId?: string | null;
      chatReceiverId?: string | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      receiver?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListMessagesQueryVariables = {
  id?: string | null;
  filter?: ModelMessageFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListMessagesQuery = {
  listMessages?: {
    __typename: 'ModelMessageConnection';
    items?: Array<{
      __typename: 'Message';
      id: string;
      message?: string | null;
      status?: string | null;
      messageOwnerId?: string | null;
      messageChatId?: string | null;
      chat?: {
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetActivityQueryVariables = {
  id: string;
};

export type GetActivityQuery = {
  getActivity?: {
    __typename: 'Activity';
    id: string;
    title: string;
    description?: string | null;
    location?: string | null;
    address?: string | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    invitePushSent?: boolean | null;
    startAt?: string | null;
    endsAt?: string | null;
    activityDate: string;
    pictures?: Array<string | null> | null;
    available?: boolean | null;
    status?: string | null;
    activityOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListActivitysQueryVariables = {
  id?: string | null;
  filter?: ModelActivityFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListActivitysQuery = {
  listActivitys?: {
    __typename: 'ModelActivityConnection';
    items?: Array<{
      __typename: 'Activity';
      id: string;
      title: string;
      description?: string | null;
      location?: string | null;
      address?: string | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      invitePushSent?: boolean | null;
      startAt?: string | null;
      endsAt?: string | null;
      activityDate: string;
      pictures?: Array<string | null> | null;
      available?: boolean | null;
      status?: string | null;
      activityOwnerId?: string | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
  } | null;
};

export type GetNotificationQueryVariables = {
  id: string;
};

export type GetNotificationQuery = {
  getNotification?: {
    __typename: 'Notification';
    id: string;
    message?: string | null;
    endpointArn: string;
    subject?: string | null;
    notificationOwnerId?: string | null;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
};

export type ListNotificationsQueryVariables = {
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListNotificationsQuery = {
  listNotifications?: {
    __typename: 'ModelNotificationConnection';
    items?: Array<{
      __typename: 'Notification';
      id: string;
      message?: string | null;
      endpointArn: string;
      subject?: string | null;
      notificationOwnerId?: string | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetBulletinQueryVariables = {
  id: string;
};

export type GetBulletinQuery = {
  getBulletin?: {
    __typename: 'Bulletin';
    id: string;
    title: string;
    description: string;
    category?: string | null;
    photos?: Array<string | null> | null;
    bulletinOwnerId: string;
    eventDate: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type ListBulletinsQueryVariables = {
  filter?: ModelBulletinFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListBulletinsQuery = {
  listBulletins?: {
    __typename: 'ModelBulletinConnection';
    items?: Array<{
      __typename: 'Bulletin';
      id: string;
      title: string;
      description: string;
      category?: string | null;
      photos?: Array<string | null> | null;
      bulletinOwnerId: string;
      eventDate: string;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetSettingQueryVariables = {
  id: string;
};

export type GetSettingQuery = {
  getSetting?: {
    __typename: 'Setting';
    id: string;
    categories?: Array<string | null> | null;
    radius?: number | null;
    icon?: string | null;
    settingOwnerId: string;
    owner?: {
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null;
    createdAt?: string | null;
    updatedAt?: string | null;
  } | null;
};

export type ListSettingsQueryVariables = {
  filter?: ModelSettingFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListSettingsQuery = {
  listSettings?: {
    __typename: 'ModelSettingConnection';
    items?: Array<{
      __typename: 'Setting';
      id: string;
      categories?: Array<string | null> | null;
      radius?: number | null;
      icon?: string | null;
      settingOwnerId: string;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetUserQueryVariables = {
  id: string;
};

export type GetUserQuery = {
  getUser?: {
    __typename: 'User';
    id: string;
    owner?: string | null;
    userGroup?: UserType | null;
    name: string;
    age?: string | null;
    city?: string | null;
    state?: string | null;
    description?: string | null;
    business?: string | null;
    deviceId?: string | null;
    deviceToken?: string | null;
    platform?: string | null;
    stripeCustomerId?: string | null;
    stripeSubscription?: string | null;
    stripeSubscriptionId?: string | null;
    endpointArn?: string | null;
    email: string;
    username?: string | null;
    birthdate?: string | null;
    gender?: string | null;
    address?: string | null;
    phone?: string | null;
    status?: boolean | null;
    premium?: boolean | null;
    trainer?: boolean | null;
    gps?: {
      __typename: 'GPS';
      lon?: number | null;
      lat?: number | null;
    } | null;
    photo?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    userSettingId: string;
    userSuscriptionId?: string | null;
    setting?: {
      __typename: 'Setting';
      id: string;
      categories?: Array<string | null> | null;
      radius?: number | null;
      icon?: string | null;
      settingOwnerId: string;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt?: string | null;
      updatedAt?: string | null;
    } | null;
    gyms?: {
      __typename: 'ModelGymConnection';
      items?: Array<{
        __typename: 'Gym';
        id: string;
        name: string;
        description?: string | null;
        address?: string | null;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        likeCount?: number | null;
        averageRating?: number | null;
        gymOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    notification?: {
      __typename: 'ModelNotificationConnection';
      items?: Array<{
        __typename: 'Notification';
        id: string;
        message?: string | null;
        endpointArn: string;
        subject?: string | null;
        notificationOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    bulletin?: {
      __typename: 'ModelBulletinConnection';
      items?: Array<{
        __typename: 'Bulletin';
        id: string;
        title: string;
        description: string;
        category?: string | null;
        photos?: Array<string | null> | null;
        bulletinOwnerId: string;
        eventDate: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    activity?: {
      __typename: 'ModelActivityConnection';
      items?: Array<{
        __typename: 'Activity';
        id: string;
        title: string;
        description?: string | null;
        location?: string | null;
        address?: string | null;
        invitePushSent?: boolean | null;
        startAt?: string | null;
        endsAt?: string | null;
        activityDate: string;
        pictures?: Array<string | null> | null;
        available?: boolean | null;
        status?: string | null;
        activityOwnerId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chat?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    chatReceiver?: {
      __typename: 'ModelChatConnection';
      items?: Array<{
        __typename: 'Chat';
        id: string;
        title?: string | null;
        description?: string | null;
        status?: string | null;
        chatOwnerId?: string | null;
        chatReceiverId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
    messages?: {
      __typename: 'ModelMessageConnection';
      items?: Array<{
        __typename: 'Message';
        id: string;
        message?: string | null;
        status?: string | null;
        messageOwnerId?: string | null;
        messageChatId?: string | null;
        createdAt: string;
        updatedAt: string;
      } | null> | null;
      nextToken?: string | null;
      scannedCount?: number | null;
      count?: number | null;
    } | null;
  } | null;
};

export type ListUsersQueryVariables = {
  id?: string | null;
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListUsersQuery = {
  listUsers?: {
    __typename: 'ModelUserConnection';
    items?: Array<{
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetCategoryByNameQueryVariables = {
  name?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelCategoryFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GetCategoryByNameQuery = {
  getCategoryByName?: {
    __typename: 'ModelCategoryConnection';
    items?: Array<{
      __typename: 'Category';
      id: string;
      name?: string | null;
      icon?: string | null;
      image?: {
        __typename: 'S3Object';
        bucket: string;
        region: string;
        key: string;
      } | null;
      description?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetNotificationsByEndpointQueryVariables = {
  endpointArn?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelNotificationFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GetNotificationsByEndpointQuery = {
  getNotificationsByEndpoint?: {
    __typename: 'ModelNotificationConnection';
    items?: Array<{
      __typename: 'Notification';
      id: string;
      message?: string | null;
      endpointArn: string;
      subject?: string | null;
      notificationOwnerId?: string | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type GetUserByEmailQueryVariables = {
  email?: string | null;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelUserFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type GetUserByEmailQuery = {
  getUserByEmail?: {
    __typename: 'ModelUserConnection';
    items?: Array<{
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type SearchGymsQueryVariables = {
  filter?: SearchableGymFilterInput | null;
  sort?: SearchableGymSortInput | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type SearchGymsQuery = {
  searchGyms?: {
    __typename: 'SearchableGymConnection';
    items?: Array<{
      __typename: 'Gym';
      id: string;
      name: string;
      description?: string | null;
      address?: string | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      pictures?: Array<string | null> | null;
      available?: boolean | null;
      status?: string | null;
      likeCount?: number | null;
      averageRating?: number | null;
      gymOwnerId?: string | null;
      owner?: {
        __typename: 'User';
        id: string;
        owner?: string | null;
        userGroup?: UserType | null;
        name: string;
        age?: string | null;
        city?: string | null;
        state?: string | null;
        description?: string | null;
        business?: string | null;
        deviceId?: string | null;
        deviceToken?: string | null;
        platform?: string | null;
        stripeCustomerId?: string | null;
        stripeSubscription?: string | null;
        stripeSubscriptionId?: string | null;
        endpointArn?: string | null;
        email: string;
        username?: string | null;
        birthdate?: string | null;
        gender?: string | null;
        address?: string | null;
        phone?: string | null;
        status?: boolean | null;
        premium?: boolean | null;
        trainer?: boolean | null;
        photo?: string | null;
        createdAt?: string | null;
        updatedAt?: string | null;
        userSettingId: string;
        userSuscriptionId?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};

export type SearchUsersQueryVariables = {
  filter?: SearchableUserFilterInput | null;
  sort?: SearchableUserSortInput | null;
  limit?: number | null;
  nextToken?: string | null;
  from?: number | null;
};

export type SearchUsersQuery = {
  searchUsers?: {
    __typename: 'SearchableUserConnection';
    items?: Array<{
      __typename: 'User';
      id: string;
      owner?: string | null;
      userGroup?: UserType | null;
      name: string;
      age?: string | null;
      city?: string | null;
      state?: string | null;
      description?: string | null;
      business?: string | null;
      deviceId?: string | null;
      deviceToken?: string | null;
      platform?: string | null;
      stripeCustomerId?: string | null;
      stripeSubscription?: string | null;
      stripeSubscriptionId?: string | null;
      endpointArn?: string | null;
      email: string;
      username?: string | null;
      birthdate?: string | null;
      gender?: string | null;
      address?: string | null;
      phone?: string | null;
      status?: boolean | null;
      premium?: boolean | null;
      trainer?: boolean | null;
      gps?: {
        __typename: 'GPS';
        lon?: number | null;
        lat?: number | null;
      } | null;
      photo?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      userSettingId: string;
      userSuscriptionId?: string | null;
      setting?: {
        __typename: 'Setting';
        id: string;
        categories?: Array<string | null> | null;
        radius?: number | null;
        icon?: string | null;
        settingOwnerId: string;
        createdAt?: string | null;
        updatedAt?: string | null;
      } | null;
      gyms?: {
        __typename: 'ModelGymConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      notification?: {
        __typename: 'ModelNotificationConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      bulletin?: {
        __typename: 'ModelBulletinConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      activity?: {
        __typename: 'ModelActivityConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chat?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      chatReceiver?: {
        __typename: 'ModelChatConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
      messages?: {
        __typename: 'ModelMessageConnection';
        nextToken?: string | null;
        scannedCount?: number | null;
        count?: number | null;
      } | null;
    } | null> | null;
    nextToken?: string | null;
    total?: number | null;
    scannedCount?: number | null;
    count?: number | null;
  } | null;
};
