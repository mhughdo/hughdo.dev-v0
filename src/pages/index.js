/* eslint-disable import/no-cycle */
/** @jsx jsx */
import {jsx, Box} from 'theme-ui'
import {graphql} from 'gatsby'

import {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import pick from 'lodash.pick'
import reduce from 'lodash.reduce'
import sortBy from 'lodash.sortby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Event from '../components/Event'
import Post from '../components/Post'
import Filters from '../components/Filters'

const componentMap = {
  events: Event,
  posts: Post,
}

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 100,
}

export const filters = ['posts', 'tips', 'events', 'achievements']

const Index = ({data}) => {
  const [pickedFilters, setPickedFilters] = useState(filters)
  const all = pick(data, pickedFilters.length === 0 ? filters : filters.filter(f => pickedFilters.includes(f)))
  const mapped = reduce(
    all,
    (accum, entries, type) => {
      return [...accum, ...entries.edges.map(e => ({...e, type}))]
    },
    []
  )

  const sorted = sortBy(mapped, a => new Date(a.node.frontmatter.date)).reverse()

  return (
    <Layout>
      <SEO title='Homepage' />
      {/* <Bio /> */}
      <Filters pickedFilters={pickedFilters} setPickedFilters={setPickedFilters} />
      <motion.div layoutTransition={spring}>
        <AnimatePresence>
          {sorted.map(entry => {
            const Comp = componentMap[entry.type]
            if (Comp) {
              return <Comp key={entry.node.id} {...entry} />
            }
            return null
          })}
        </AnimatePresence>
      </motion.div>
    </Layout>
  )
}

export default Index

export const query = graphql`
  query HOME_PAGE_QUERY {
    events: allMdx(filter: {fields: {collection: {eq: "event"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
          }
          id
        }
      }
    }
    posts: allMdx(filter: {fields: {collection: {eq: "post"}}}, sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            description
            date(formatString: "MMM DD, YYYY")
          }
          id
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
