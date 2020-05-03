import {css} from '@emotion/core'
// import Jost300Light from '../../assets/fonts/Jost/Jost-300-Light.woff2'
// import Jost300LightItalic from '../../assets/fonts/Jost/Jost-300-LightItalic.woff2'
// import Jost400Book from '../../assets/fonts/Jost/Jost-400-Book.woff2'
// import Jost400BookTTF from '../../assets/fonts/Jost/Jost-400-Book.ttf'
// import Jost400BookWOFF from '../../assets/fonts/Jost/Jost-400-Book.woff'
// import Jost400BookItalic from '../../assets/fonts/Jost/Jost-400-BookItalic.woff2'
// import Jost500Medium from '../../assets/fonts/Jost/Jost-500-Medium.woff2'
// import Jost500MediumTTF from '../../assets/fonts/Jost/Jost-500-Medium.ttf'
// import Jost500MediumWOFF from '../../assets/fonts/Jost/Jost-500-Medium.woff'
// import Jost500MediumItalic from '../../assets/fonts/Jost/Jost-500-MediumItalic.woff2'
// import Jost600Semi from '../../assets/fonts/Jost/Jost-600-Semi.woff2'
// import Jost700Bold from '../../assets/fonts/Jost/Jost-700-Bold.woff2'
// import Jost700BoldTTF from '../../assets/fonts/Jost/Jost-700-Bold.ttf'
// import Jost700BoldWOFF from '../../assets/fonts/Jost/Jost-700-Bold.woff'
// import PoppinsLight from '../../assets/fonts/Poppins/Poppins-Light.woff2'
// import PoppinsLightItalic from '../../assets/fonts/Poppins/Poppins-LightItalic.woff2'
// import PoppinsRegular from '../../assets/fonts/Poppins/Poppins-Regular.woff2'
// import PoppinsItalic from '../../assets/fonts/Poppins/Poppins-Italic.woff2'
// import PoppinsMedium from '../../assets/fonts/Poppins/Poppins-Medium.woff2'
// import PoppinsMediumItalic from '../../assets/fonts/Poppins/Poppins-MediumItalic.woff2'
// import PoppinsSemiBold from '../../assets/fonts/Poppins/Poppins-SemiBold.woff2'
// import PoppinsBold from '../../assets/fonts/Poppins/Poppins-Bold.woff2'

export default css`
  @font-face {
    font-family: Jost;
    font-weight: 300;
    font-style: normal;
    src: url('../../assets/fonts/Jost/Jost-300-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: Jost;
    font-weight: 300;
    font-style: italic;
    src: url('../../assets/fonts/Jost/Jost-300-LightItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: Jost;
    font-weight: normal;
    font-style: normal;
    src: url('../../assets/fonts/Jost/Jost-400-Book.woff2') format('woff2'),
      url('../../assets/fonts/Jost/Jost-400-Book.woff') format('woff'),
      url('../../assets/fonts/Jost/Jost-400-Book.ttf') format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: normal;
    font-style: italic;
    src: url('../../assets/fonts/Jost/Jost-400-BookItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: Jost;
    font-weight: 500;
    font-style: normal;
    src: url('../../assets/fonts/Jost/Jost-500-Medium.woff2') format('woff2'),
      url('../../assets/fonts/Jost/Jost-500-Medium.woff') format('woff'),
      url('../../assets/fonts/Jost/Jost-500-Medium.ttf') format('truetype');
  }
  @font-face {
    font-family: Jost;
    font-weight: 500;
    font-style: italic;
    src: url('../../assets/fonts/Jost/Jost-500-MediumItalic.woff2') format('woff2');
  }

  @font-face {
    font-family: Jost;
    font-weight: 600;
    font-style: normal;
    src: url('../../assets/fonts/Jost/Jost-600-Semi.woff2') format('woff2');
  }
  @font-face {
    font-family: Jost;
    font-weight: 700;
    font-style: normal;
    src: url('../../assets/fonts/Jost/Jost-700-Bold.woff2') format('woff2'),
      url('../../assets/fonts/Jost/Jost-700-Bold.woff') format('woff'),
      url('../../assets/fonts/Jost/Jost-700-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: Poppins;
    font-weight: 300;
    font-style: normal;
    src: url('../../assets/fonts/Poppins/Poppins-Light.woff2') format('woff2');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 300;
    font-style: italic;
    src: url('../../assets/fonts/Poppins/Poppins-LightItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: Poppins;
    font-weight: normal;
    font-style: normal;
    src: url('../../assets/fonts/Poppins/Poppins-Regular.woff2') format('woff2');
  }
  @font-face {
    font-family: Poppins;
    font-weight: normal;
    font-style: italic;
    src: url('../../assets/fonts/Poppins/Poppins-Italic.woff2') format('woff2');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 500;
    font-style: normal;
    src: url('../../assets/fonts/Poppins/Poppins-Medium.woff2') format('woff2');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 500;
    font-style: italic;
    src: url('../../assets/fonts/Poppins/Poppins-MediumItalic.woff2') format('woff2');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 600;
    font-style: normal;
    src: url('../../assets/fonts/Poppins/Poppins-SemiBold.woff2') format('woff2');
  }
  @font-face {
    font-family: Poppins;
    font-weight: 700;
    font-style: normal;
    src: url('../../assets/fonts/Poppins/Poppins-Bold.woff2') format('woff2');
  }
`
