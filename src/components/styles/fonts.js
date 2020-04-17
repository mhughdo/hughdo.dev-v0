import {css} from '@emotion/core'
import Jost300Light from '../../assets/fonts/Jost/Jost-300-Light.ttf'
import Jost300LightItalic from '../../assets/fonts/Jost/Jost-300-LightItalic.ttf'
import Jost400Book from '../../assets/fonts/Jost/Jost-400-Book.ttf'
import Jost400BookItalic from '../../assets/fonts/Jost/Jost-400-BookItalic.ttf'
import Jost500Medium from '../../assets/fonts/Jost/Jost-500-Medium.ttf'
import Jost600Semi from '../../assets/fonts/Jost/Jost-600-Semi.ttf'
import Jost700Bold from '../../assets/fonts/Jost/Jost-700-Bold.ttf'
import PoppinsLight from '../../assets/fonts/Poppins/Poppins-Light.ttf'
import PoppinsLightItalic from '../../assets/fonts/Poppins/Poppins-LightItalic.ttf'
import PoppinsRegular from '../../assets/fonts/Poppins/Poppins-Regular.ttf'
import PoppinsItalic from '../../assets/fonts/Poppins/Poppins-Italic.ttf'
import PoppinsMedium from '../../assets/fonts/Poppins/Poppins-Medium.ttf'
import PoppinsSemiBold from '../../assets/fonts/Poppins/Poppins-SemiBold.ttf'
import PoppinsBold from '../../assets/fonts/Poppins/Poppins-Bold.ttf'

export default css`
  @font-face {
    font-family: Jost;
    font-weight: 300;
    font-style: normal;
    src: url(${Jost300Light}) format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: 300;
    font-style: italic;
    src: url(${Jost300LightItalic}) format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: normal;
    font-style: normal;
    src: url(${Jost400Book}) format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: normal;
    font-style: italic;
    src: url(${Jost400BookItalic}) format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: 500;
    font-style: normal;
    src: url(${Jost500Medium}) format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: 600;
    font-style: normal;
    src: url(${Jost600Semi}) format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: 700;
    font-style: normal;
    src: url(${Jost700Bold}) format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-weight: normal;
    font-style: normal;
    src: url(${PoppinsRegular}) format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 300;
    font-style: normal;
    src: url(${PoppinsLight}) format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 300;
    font-style: italic;
    src: url(${PoppinsLightItalic}) format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-weight: normal;
    font-style: italic;
    src: url(${PoppinsItalic}) format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 500;
    font-style: italic;
    src: url(${PoppinsMedium}) format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 600;
    font-style: normal;
    src: url(${PoppinsSemiBold}) format('truetype');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 700;
    font-style: normal;
    src: url(${PoppinsBold}) format('truetype');
  }
`
