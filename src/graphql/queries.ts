/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncTodos = /* GraphQL */ `
  query SyncTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTodos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSettings = /* GraphQL */ `
  query SyncSettings(
    $filter: ModelSettingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSettings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      scannedCount
      count
    }
  }
`;
export const getSetting = /* GraphQL */ `
  query GetSetting($id: ID!) {
    getSetting(id: $id) {
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
export const listSettings = /* GraphQL */ `
  query ListSettings(
    $filter: ModelSettingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      scannedCount
      count
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      scannedCount
      count
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      scannedCount
      count
    }
  }
`;
export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      scannedCount
      count
    }
  }
`;
