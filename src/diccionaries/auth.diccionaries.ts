export const AuthAmplifyDictionary = (code) => {
  const codes = {
    LimitExceededException: 'LimitExceededException',
    NotAuthorizedException: 'NotAuthorizedException',
    UserNotFoundException: 'UserNotFoundException',
    UsernameExistsException: 'UsernameExistsException',
    InvalidParameterException: 'InvalidParameterException',
    CodeMismatchException: 'CodeMismatchException',
    UserNotConfirmedException: 'UserNotConfirmedException',
  };

  return !!codes[code];
};

export const AuthMessagesDictionary = (message) => {
  const messages = {
    SUCCESS: 'SUCCESS',
    CONFIRMED: message.includes('CONFIRMED') && 'CONFIRMED',
    confirmed: message.includes('confirmed') && 'confirmed',
  };

  return !!messages[message];
};

export const Messages = {
  codeSent: 'Code already sent.',
  confirmed: 'User is already confirmed.',
  confirmedLogin: 'User confirmed, please login.',
  emailSent: 'Forgot Password Email sent.',
};
