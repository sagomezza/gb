/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

<<<<<<< HEAD
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
=======
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
>>>>>>> develop
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
<<<<<<< HEAD
        icon
        image {
          bucket
          region
          key
        }
=======
>>>>>>> develop
        description
        createdAt
        updatedAt
      }
      nextToken
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
        }
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
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
        }
        createdAt
        updatedAt
      }
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
        }
      }
      nextToken
      scannedCount
      count
    }
  }
`;
export const getCategoryByName = /* GraphQL */ `
  query GetCategoryByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getCategoryByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
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
        }
      }
      nextToken
      scannedCount
      count
    }
  }
`;
