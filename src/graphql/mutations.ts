/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
