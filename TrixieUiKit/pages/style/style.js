import {
  StyleSheet
} from 'react-native'
import getPixel from '../../components/style/core/getPixel'


const primaryBlue = '#4990E2'
const titleColor = '#ffffff'
const backgroundPrimary = '#F2F6FE'
const borderColor = '#fff'
const primaryTextColor = '#444444'
const secondoryTextColor = '#D9DAE8'
const primaryRed = '#FF758C'

const {
  headerFontSize,
  extraMarginValue
} = global

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundPrimary,
  },
  marginTopValue: {
    marginTop: getPixel(80),
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: getPixel(15),
  },
  slideTite: {
    color: primaryTextColor,
    fontSize: getPixel(25),
    marginTop: getPixel(20),
  },
  slideDesc: {
    color: primaryTextColor,
    fontSize: getPixel(15),
    marginTop: getPixel(20),
    lineHeight: getPixel(20),
    textAlign: 'center',
    marginRight: getPixel(20),
    marginLeft: getPixel(20),
  },
  listItem: {
    borderColor,
    borderWidth: getPixel(1),
    borderStyle: 'solid',
    backgroundColor: 'white',
    paddingLeft: getPixel(10),
    paddingTop: getPixel(2),
    paddingBottom: getPixel(2),
    marginTop: getPixel(15),
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
  },
  listMenuItem: {
    padding: getPixel(25),
    color: primaryTextColor,
    fontSize: getPixel(15),
    flex: 0.8,
    textAlign: 'left',
  },
  listItemRow: {
    flexDirection: 'row',
  },
  list_icon: {
    height: getPixel(35),
    width: getPixel(35),
    marginTop: getPixel(17),
    marginLeft: getPixel(20),
  },
  title: {
    fontSize: getPixel(headerFontSize),
    marginBottom: getPixel(20),
    color: titleColor,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: getPixel(14),
    color: titleColor,
    textAlign: 'center',
  },
  audioTitle: {
    fontSize: getPixel(23),
    marginTop: getPixel(35),
    marginBottom: getPixel(15),
    color: primaryBlue,
    textAlign: 'center',
  },
  buttonTitle: {
    fontSize: getPixel(23),
    marginTop: getPixel(30),
    marginBottom: getPixel(15),
    color: titleColor,
    textAlign: 'left',
    flex: 0.6,
  },
  text: {
    flex: 1,
    padding: getPixel(10),
    justifyContent: 'center',
  },
  textWhite: {
    color: primaryTextColor,
    fontSize: getPixel(16),
    padding: getPixel(10),
    alignSelf: 'center',
  },
  textSmall: {
    color: secondoryTextColor,
    fontSize: getPixel(13),
    padding: getPixel(10),
    textAlign: 'justify',
  },
  arrow: {
    flex: 0.1,
    alignSelf: 'center',
    marginRight: getPixel(20),
    height: getPixel(20),
  },
  name: {
    color: primaryBlue,
    fontSize: getPixel(17),
    textAlign: 'left',
    justifyContent: 'center',
  },
  nameLeft: {
    color: primaryTextColor,
    fontSize: getPixel(17),
    marginTop: getPixel(19),
    textAlign: 'left',
    paddingLeft: getPixel(20),
  },
  description: {
    color: primaryTextColor,
    fontSize: getPixel(15),
    padding: getPixel(20),
    textAlign: 'justify',
    lineHeight: getPixel(30),
  },
  label: {
    color: primaryTextColor,
    fontSize: getPixel(15),
    textAlign: 'center',
    marginBottom: getPixel(5, )
  },
  row: {
    flexDirection: 'row',
  },
  titleContainer: {
    backgroundColor: 'transparent',
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: getPixel(1),
    borderBottomColor: borderColor,
    height: getPixel(155),
    position: 'absolute',
    left: getPixel(0),
    top: getPixel(0),
    right: getPixel(0),
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countValue: {
    fontSize: getPixel(50),
    textAlign: 'center',
    color: primaryBlue,
    marginTop: getPixel(30),
    marginBottom: getPixel(50),
  },
  buttonHeader: {
    flexDirection: 'row',
    borderBottomWidth: getPixel(1),
    borderBottomColor: borderColor,
    height: getPixel(155),
    backgroundColor: '#4990E2',
    position: 'absolute',
    left: getPixel(0),
    top: getPixel(0),
    right: getPixel(0),
    flex: 1,
    justifyContent: 'center',
  },
  flash: {
    height: getPixel(40),
    backgroundColor: '#00ff00',
    padding: getPixel(10),
    alignSelf: 'center',
  },
  loader: {
    marginTop: getPixel(20),
  },
  thumb: {
    marginTop: getPixel(8),
    marginBottom: getPixel(8),
    width: getPixel(90),
    height: getPixel(80),
    borderRadius: getPixel(10),
  },
  recentlyPlayedThumb: {
    width: getPixel(90),
    height: getPixel(80),
    borderRadius: getPixel(10),
  },
  center: {
    alignSelf: 'center',
  },
  right: {
    alignSelf: 'flex-end',
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
    paddingLeft: getPixel(2),
  },
  profileMetrics: {
    marginLeft: getPixel(1),
    marginTop: getPixel(1),
    borderRadius: getPixel(10),
    backgroundColor: 'white',
    width: getPixel(100),
  },
  recentlyPlayed: {
    margin: getPixel(10),
    borderRadius: getPixel(10),
    shadowColor: '#444',
    shadowOffset: {
      width: getPixel(5),
      height: getPixel(5)
    },
    shadowOpacity: 0.2,
    shadowRadius: getPixel(8),
    elevation: 1,
    paddingLeft: getPixel(10),
    paddingTop: getPixel(10),
    padding: getPixel(5),
    backgroundColor: 'white',
    height: getPixel(150),
  },
  error: {
    color: '#EC644B',
    paddingTop: getPixel(10),
  },
  errorBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: getPixel(20),
    alignItems: 'center',
  },
  largeImage: {
    height: getPixel(150),
    width: getPixel(150),
    alignSelf: 'center',
    marginTop: getPixel(10),
    marginBottom: getPixel(10),
  },
  largeMarginTop: {
    marginTop: getPixel(100),
    borderTopColor: secondoryTextColor,
    borderTopWidth: getPixel(2),
  },
  seperator: {
    borderBottomWidth: getPixel(1),
    borderColor: secondoryTextColor,
    marginTop: getPixel(20),
  },
  tagline: {
    fontSize: getPixel(15),
    marginBottom: getPixel(15),
    color: primaryTextColor,
  },
  taglineHeader: {
    fontSize: getPixel(25),
    marginBottom: getPixel(15),
    color: primaryTextColor,
  },
  extraMargin: {
    marginTop: getPixel(extraMarginValue),
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
  paddingLeftValue: {
    paddingLeft: getPixel(10),
  },
  strong: {},
  primaryBlue: {
    color: primaryBlue,
  },
  alignLeft: {
    textAlign: 'left',
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
  paddingPseudo: {
    paddingBottom: getPixel(80),
  },
  redText: {
    color: primaryRed,
  },
  centreItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})