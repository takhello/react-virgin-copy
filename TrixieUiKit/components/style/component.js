import {
  StyleSheet
} from 'react-native'
import getPixel from './core/getPixel'



const backgroundPrimary = '#F2F6FE'
const primaryBlue = '#4990E2'
const borderColor = '#fff'
const primaryTextColor = '#444444'
const smallTextColor = '#B2C3DB'
const primaryRed = '#FF758C'
const {
  headerFontSize,
  buttonPrimaryTextPadding,
  buttonBorderedTextPadding
} = global

export default StyleSheet.create({
  buttonPrimary: {
    width: getPixel(270),
    height: getPixel(50),
    backgroundColor: primaryRed,
    borderRadius: getPixel(10),
    marginTop: getPixel(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundPrimary,
  },
  smallerButton: {
    width: getPixel(220),
  },
  buttonSecondary: {
    width: getPixel(270),
    height: getPixel(45),
    padding: getPixel(10),
    backgroundColor: borderColor,
    borderRadius: getPixel(10),
    marginTop: getPixel(10),
  },
  title: {
    fontSize: getPixel(headerFontSize),
    marginBottom: getPixel(20),
    color: primaryBlue,
    textAlign: 'center',
  },
  buttonBordered: {
    width: getPixel(270),
    height: getPixel(45),
    padding: getPixel(10),
    backgroundColor: 'white',
    borderRadius: getPixel(10),
    marginTop: getPixel(10),
    borderColor: primaryRed,
    borderWidth: getPixel(1),
    alignSelf: 'center',
  },
  buttonPrimaryText: {
    color: '#fafafa',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: getPixel(15),
    paddingTop: getPixel(buttonPrimaryTextPadding),
  },
  buttonSecondaryText: {
    color: primaryBlue,
    textAlign: 'center',
    fontSize: getPixel(15),
  },
  buttonBorderedText: {
    color: primaryRed,
    textAlign: 'center',
    fontSize: getPixel(15),
    paddingTop: getPixel(buttonBorderedTextPadding),
  },
  buttonText: {
    fontSize: getPixel(22),
    color: '#FFF',
    alignSelf: 'center',
  },
  footerIcons: {
    height: getPixel(30),
    width: getPixel(30),
    marginLeft: getPixel(5),
    alignSelf: 'center',
  },
  footerText: {
    alignSelf: 'center',
    paddingBottom: getPixel(5),
    color: smallTextColor,
    fontSize: getPixel(10),
    marginLeft: getPixel(5),
  },
  footer: {
    flex: 0.3,
    paddingTop: getPixel(5),
    backgroundColor: 'white',
    borderTopWidth: getPixel(1),
    borderTopColor: borderColor,
  },
  footerWrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: getPixel(0),
      height: getPixel(3)
    },
    shadowOpacity: 0.2,
    shadowRadius: getPixel(4),
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: '#f1f1f1',
    borderTopWidth: getPixel(1),
  },
  selected: {
    color: primaryBlue,
    alignSelf: 'center',
    fontSize: getPixel(10),
    marginLeft: getPixel(5),
  },

  profileCard: {
    borderRadius: getPixel(10),
    shadowColor: '#444',
    shadowOffset: {
      width: getPixel(5),
      height: getPixel(5)
    },
    shadowOpacity: 0.2,
    shadowRadius: getPixel(8),
    elevation: 1,
    marginLeft: getPixel(15),
    marginRight: getPixel(15),
    backgroundColor: 'white',
    marginTop: getPixel(20),
    paddingBottom: getPixel(20),
    paddingTop: getPixel(20),
  },
  profileCardInner: {
    flexDirection: 'row',
  },
  profileMetricsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: getPixel(2)
  },
  profileMetrics: {
    marginLeft: getPixel(1),
    marginTop: getPixel(1),
    borderRadius: getPixel(10),
    backgroundColor: 'white',
    width: getPixel(100),
  },
  profileIcon: {
    height: getPixel(32),
    width: getPixel(32),
    alignSelf: 'center',
  },
  profilePicContainer: {
    flex: 0.7,
    paddingLeft: getPixel(15),
  },
  profileDetailContainer: {
    paddingLeft: getPixel(10),
    alignSelf: 'center',
  },
  profilePic: {
    height: getPixel(64),
    width: getPixel(64),
    alignSelf: 'center',
    borderRadius: getPixel(32),
    marginTop: getPixel(5),
  },
  profileValues: {
    fontSize: getPixel(32),
    textAlign: 'center',
    marginTop: getPixel(10),
    color: primaryBlue,
  },
  profieText: {
    fontSize: getPixel(12),
    color: primaryBlue,
    textAlign: 'center',
    marginTop: getPixel(10),
    marginBottom: getPixel(10),
  },
  textCenter: {
    textAlign: 'center',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  padding20: {
    padding: getPixel(20),
  },
  padding10: {
    padding: getPixel(10),
  },
  mt20: {
    marginTop: getPixel(20),
  },
  mt10: {
    marginTop: getPixel(10),
  },
  mt100: {
    marginTop: getPixel(100),
  },
  mb20: {
    marginBottom: getPixel(20),
  },
  mb10: {
    marginBottom: getPixel(10),
  },
  smallText: {
    color: primaryTextColor,
    fontSize: getPixel(12),
    alignSelf: 'center',
    marginTop: getPixel(5),
  },
  small: {
    fontSize: getPixel(12),
    color: primaryTextColor,
  },
  lh2: {
    lineHeight: getPixel(20),
  },
  pills: {
    padding: getPixel(5),
    borderRadius: getPixel(5),
    backgroundColor: 'white',
    borderColor: primaryRed,
    borderWidth: getPixel(1),
    marginTop: getPixel(5),
    marginRight: getPixel(5),
    width: getPixel(100),
  },
  pillText: {
    color: primaryRed,
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: '#444',
    shadowOffset: {
      width: getPixel(5),
      height: getPixel(5)
    },
    shadowOpacity: 0.2,
    shadowRadius: getPixel(8),
    elevation: 1,
  },
  conversationContainer: {
    maxWidth: getPixel(310),
    backgroundColor: 'white',
    borderBottomRightRadius: getPixel(10),
    borderTopRightRadius: getPixel(10),
    borderBottomLeftRadius: getPixel(0),
    borderTopLeftRadius: getPixel(10),
    padding: getPixel(10),
    marginTop: getPixel(10),
  },
  convRight: {
    alignSelf: 'flex-end',
    backgroundColor: primaryRed,
    height: getPixel(35),
    paddingTop: getPixel(5),
    borderBottomRightRadius: getPixel(0),
    borderTopRightRadius: getPixel(10),
    borderBottomLeftRadius: getPixel(10),
    borderTopLeftRadius: getPixel(10),
  },
  convRightText: {
    color: 'white',
    alignSelf: 'center',
  },
  conversationText: {
    lineHeight: getPixel(20),
    alignSelf: 'flex-start',
  },
  actionButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: getPixel(10),
    flexWrap: 'wrap',
  },
  actionButton: {
    backgroundColor: primaryRed,
    borderRadius: getPixel(30),
    padding: getPixel(10),
    marginRight: getPixel(10),
    marginBottom: getPixel(10),
    width: getPixel(100),
  },
  actionButtonText: {
    color: 'white',
    fontSize: getPixel(12),
    alignSelf: 'center',
  },
  inputField: {
    backgroundColor: 'white',
    color: primaryBlue,
    height: getPixel(50),
    width: getPixel(270),
    marginTop: getPixel(10),
    padding: getPixel(4),
    paddingLeft: getPixel(10),
    fontSize: getPixel(18),
    borderRadius: getPixel(10),
    alignSelf: 'center',
  },
  loading: {
    height: getPixel(75),
    width: getPixel(75),
    alignSelf: 'center',
  },
  centreItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})