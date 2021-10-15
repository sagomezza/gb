/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      icon
      image {
        bucket
        region
        key
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      icon
      image {
        bucket
        region
        key
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      icon
      image {
        bucket
        region
        key
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const createSetting = /* GraphQL */ `
  mutation CreateSetting(
    $input: CreateSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    createSetting(input: $input, condition: $condition) {
      id
      categories
      radius
      icon
      settingOwnerId
      owner {
        id
        owner
        userGroup
        name
        business
        deviceId
        deviceToken
        platform
        stripeCustomerId
        stripeSubscription
        stripeSubscriptionId
        endpointArn
        email
        username
        birthdate
        gender
        address
        phone
        status
        premium
        gps {
          lon
          lat
        }
        photo
        createdAt
        updatedAt
        userSettingId
        userSuscriptionId
        setting {
          id
          categories
          radius
          icon
          settingOwnerId
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSetting = /* GraphQL */ `
  mutation UpdateSetting(
    $input: UpdateSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    updateSetting(input: $input, condition: $condition) {
      id
      categories
      radius
      icon
      settingOwnerId
      owner {
        id
        owner
        userGroup
        name
        business
        deviceId
        deviceToken
        platform
        stripeCustomerId
        stripeSubscription
        stripeSubscriptionId
        endpointArn
        email
        username
        birthdate
        gender
        address
        phone
        status
        premium
        gps {
          lon
          lat
        }
        photo
        createdAt
        updatedAt
        userSettingId
        userSuscriptionId
        setting {
          id
          categories
          radius
          icon
          settingOwnerId
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSetting = /* GraphQL */ `
  mutation DeleteSetting(
    $input: DeleteSettingInput!
    $condition: ModelSettingConditionInput
  ) {
    deleteSetting(input: $input, condition: $condition) {
      id
      categories
      radius
      icon
      settingOwnerId
      owner {
        id
        owner
        userGroup
        name
        business
        deviceId
        deviceToken
        platform
        stripeCustomerId
        stripeSubscription
        stripeSubscriptionId
        endpointArn
        email
        username
        birthdate
        gender
        address
        phone
        status
        premium
        gps {
          lon
          lat
        }
        photo
        createdAt
        updatedAt
        userSettingId
        userSuscriptionId
        setting {
          id
          categories
          radius
          icon
          settingOwnerId
          createdAt
          updatedAt
        }
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      owner
      userGroup
      name
      business
      deviceId
      deviceToken
      platform
      stripeCustomerId
      stripeSubscription
      stripeSubscriptionId
      endpointArn
      email
      username
      birthdate
      gender
      address
      phone
      status
      premium
      gps {
        lon
        lat
      }
      photo
      createdAt
      updatedAt
      userSettingId
      userSuscriptionId
      setting {
        id
        categories
        radius
        icon
        settingOwnerId
        owner {
          id
          owner
          userGroup
          name
          business
          deviceId
          deviceToken
          platform
          stripeCustomerId
          stripeSubscription
          stripeSubscriptionId
          endpointArn
          email
          username
          birthdate
          gender
          address
          phone
          status
          premium
          photo
          createdAt
          updatedAt
          userSettingId
          userSuscriptionId
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      owner
      userGroup
      name
      business
      deviceId
      deviceToken
      platform
      stripeCustomerId
      stripeSubscription
      stripeSubscriptionId
      endpointArn
      email
      username
      birthdate
      gender
      address
      phone
      status
      premium
      gps {
        lon
        lat
      }
      photo
      createdAt
      updatedAt
      userSettingId
      userSuscriptionId
      setting {
        id
        categories
        radius
        icon
        settingOwnerId
        owner {
          id
          owner
          userGroup
          name
          business
          deviceId
          deviceToken
          platform
          stripeCustomerId
          stripeSubscription
          stripeSubscriptionId
          endpointArn
          email
          username
          birthdate
          gender
          address
          phone
          status
          premium
          photo
          createdAt
          updatedAt
          userSettingId
          userSuscriptionId
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      owner
      userGroup
      name
      business
      deviceId
      deviceToken
      platform
      stripeCustomerId
      stripeSubscription
      stripeSubscriptionId
      endpointArn
      email
      username
      birthdate
      gender
      address
      phone
      status
      premium
      gps {
        lon
        lat
      }
      photo
      createdAt
      updatedAt
      userSettingId
      userSuscriptionId
      setting {
        id
        categories
        radius
        icon
        settingOwnerId
        owner {
          id
          owner
          userGroup
          name
          business
          deviceId
          deviceToken
          platform
          stripeCustomerId
          stripeSubscription
          stripeSubscriptionId
          endpointArn
          email
          username
          birthdate
          gender
          address
          phone
          status
          premium
          photo
          createdAt
          updatedAt
          userSettingId
          userSuscriptionId
        }
        createdAt
        updatedAt
      }
    }
  }
`;
