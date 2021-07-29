import { theme } from 'config/theme';
import { nlz, rs } from 'utils/dimensions';

export const googlePlacesStyles = {
  description: {
    fontFamily: theme.fonts.medium.fontFamily,
    fontSize: nlz(13),
    fontWeight: theme.fonts.medium.fontWeight,
  },
  textInputContainer: {
    alignItems: 'center',
    borderColor: '#D8D8D8',
    borderRadius: 4,
    borderWidth: 1,
    height: rs(44),
    paddingLeft: rs(10),
    width: '100%',
  },
  textInput: {
    color: theme.colors.text,
    fontSize: nlz(14),
    height: rs(40),
    right: rs(2),
    top: rs(2),
  },
  predefinedPlacesDescription: {
    color: '#1faadb',
  },
};
