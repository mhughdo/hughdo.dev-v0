/* eslint-disable import/no-cycle */
/** @jsx jsx */
import {jsx, Box, Badge} from 'theme-ui'
import {filters} from '../pages'

const filterMap = {
  posts: {
    label: 'Posts',
    icon: '',
  },
  events: {
    label: 'Events',
    icon: '',
  },
}

const Filters = ({pickedFilters, setPickedFilters}) => {
  console.log(pickedFilters)

  return (
    <Box
      sx={{
        mb: 3,
        '> :not(:last-child)': {
          mr: 2,
        },
      }}>
      {filters.map((filterKey, index) => {
        const filter = filterMap[filterKey]
        const isActive = pickedFilters.includes(filterKey)
        const toggleFilter = () =>
          isActive
            ? setPickedFilters(pickedFilters.filter(f => f !== filterKey))
            : setPickedFilters([...pickedFilters, filterKey])

        return (
          <Badge
            key={filterKey}
            sx={{
              cursor: 'pointer',
              userSelect: 'none',
              py: 1,
              px: 3,
              transition: 'all 150ms linear',
              color: 'text',
              fontWeight: 'medium',
              backgroundColor: `${isActive ? 'blue400' : 'blue300'}`,
              '&:hover': {
                backgroundColor: `${isActive ? 'blue400' : 'blue300'}`,
              },
            }}
            onClick={toggleFilter}>
            {filter?.label || filterKey}
          </Badge>
        )
      })}
    </Box>
  )
}

export default Filters
