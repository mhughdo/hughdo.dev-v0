/* eslint-disable import/no-cycle */
/** @jsx jsx */
import {jsx, Box, Badge, Text} from 'theme-ui'
import {GoFile, GoRocket, GoStar} from 'react-icons/go'
import {IoMdCodeWorking} from 'react-icons/io'
import {filters} from '../pages'

const filterMap = {
  posts: {
    label: 'Posts',
    icon: GoFile,
  },
  tips: {
    label: 'Tips',
    icon: IoMdCodeWorking,
  },
  events: {
    label: 'Events',
    icon: GoRocket,
  },
  achievements: {
    label: 'Achievements',
    icon: GoStar,
  },
}

const Filters = ({pickedFilters, setPickedFilters}) => {
  // console.log(pickedFilters)

  return (
    <Box
      sx={{
        mb: 3,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(150px,auto))',
        gap: '0.7rem',
      }}>
      {filters.map(filterKey => {
        const filter = filterMap[filterKey]
        const Icon = filter && filter.icon
        const isActive = pickedFilters.includes(filterKey)
        const toggleFilter = () =>
          isActive
            ? pickedFilters.length > 1 && setPickedFilters(pickedFilters.filter(f => f !== filterKey))
            : setPickedFilters([...pickedFilters, filterKey])

        return (
          <Badge
            key={filterKey}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 2,
              fontWeight: 'body',
              cursor: 'pointer',
              userSelect: 'none',
              py: 2,
              px: 3,
              transition: 'all 150ms linear',
              color: 'text',
              backgroundColor: `${isActive ? 'blue400' : 'blue300'}`,
              '&:hover': {
                backgroundColor: `${isActive ? 'blue400' : 'blue300'}`,
              },
              '& > * + *': {
                ml: 2,
              },
            }}
            onClick={toggleFilter}>
            {Icon && <Icon />}
            <Text>{filter?.label || filterKey}</Text>
          </Badge>
        )
      })}
    </Box>
  )
}

export default Filters
