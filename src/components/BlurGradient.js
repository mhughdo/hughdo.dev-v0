/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

const BlurGradient = ({backgroundColor}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '60px',
        left: 0,
        right: 0,
        zIndex: 2,
        translate: 'translateY(-1px)',
      }}>
      <svg preserveAspectRatio='none' viewBox='0 0 10 30' width='100%' height='125'>
        <defs>
          <linearGradient id='eased-gradient-gradient-abbg' x1='0%' y1='0%' x2='0%' y2='100%'>
            <stop offset='0%' sx={{stopColor: 'white', stopOpacity: 1}} />
            <stop offset='8.1%' sx={{stopColor: 'white', stopOpacity: 0.987}} />
            <stop offset='15.5%' sx={{stopColor: 'white', stopOpacity: 0.951}} />
            <stop offset='22.5%' sx={{stopColor: 'white', stopOpacity: 0.896}} />
            <stop offset='29%' sx={{stopColor: 'white', stopOpacity: 0.825}} />
            <stop offset='35.3%' sx={{stopColor: 'white', stopOpacity: 0.741}} />
            <stop offset='47.1%' sx={{stopColor: 'white', stopOpacity: 0.55}} />
            <stop offset='52.9%' sx={{stopColor: 'white', stopOpacity: 0.45}} />
            <stop offset='58.8%' sx={{stopColor: 'white', stopOpacity: 0.352}} />
            <stop offset='64.7%' sx={{stopColor: 'white', stopOpacity: 0.259}} />
            <stop offset='71%' sx={{stopColor: 'white', stopOpacity: 0.175}} />
            <stop offset='77.5%' sx={{stopColor: 'white', stopOpacity: 0.104}} />
            <stop offset='84.5%' sx={{stopColor: 'white', stopOpacity: 0.05}} />
            <stop offset='91.9%' sx={{stopColor: 'white', stopOpacity: 0.013}} />
            <stop offset='100%' sx={{stopColor: 'white', stopOpacity: 0}} />
          </linearGradient>
        </defs>
        <mask id='eased-gradient-mask-abbg'>
          <rect x='0' y='0' width='100%' height='100%' fill='url(#eased-gradient-gradient-abbg)' />
        </mask>
        <rect
          x='0'
          y='0'
          width='100%'
          height='100%'
          mask='url(#eased-gradient-mask-abbg)'
          sx={{
            transition: 'fill 350ms ease 0s',
            fill: theme => `${theme.colors[backgroundColor] || theme.colors.defaultBackground}}`,
          }}
        />
      </svg>
    </Box>
  )
}

export default BlurGradient
