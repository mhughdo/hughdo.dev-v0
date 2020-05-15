/* eslint-disable import/no-cycle */
/** @jsx jsx */
import {jsx, Styled, Box} from 'theme-ui'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About = () => {
  return (
    <Layout>
      <main
        sx={{
          maxWidth: 'article',
          pt: 6,
          mx: 'auto',
        }}>
        <SEO title='Homepage' description='Homepage' />
        <Styled.h2>About me</Styled.h2>
        <Styled.p>
          I'm a third year student at University of Engineering & Technology (VNU-UET) and just an average guy who have
          passion for Technology.
        </Styled.p>
        <Styled.p>
          I'm considering myself as a JavaScript Developer. I have experience working in a wide range of technologies
          including Node & Express, TypeScript, React.js, Next.js, Gatsby, GrahlQL, React Native, Github Actions, Docker
          and Kubernetes, AWS and many more. But right now, i'm focusing on React.js, Node, Express, Gatsby and Next.js.
        </Styled.p>
        <Styled.h2>About the website</Styled.h2>
        <Styled.p>
          I created this website beacause "Sometimes the gaps in your knowledge only become clear when you try
          explaining things to others". I think i can get better understanding of topics i'm learning by writing blog
          post or making tips.
        </Styled.p>
        <Styled.p>This blog is heavily inspried by @JoshWComeau, @wesbos, @Kitze. Thanks you guys so much.</Styled.p>
        <Styled.h2>Other things I'm interested in</Styled.h2>
        <ul>
          <li
            sx={{
              fontSize: 3,
            }}>
            I'm a big fan of SciFi series. MCU Movies, DCU Movies, The Flash, The 100, The Strain, Stranger Things,
            Daredevil, Logan, The Punisher are some of my favorites
          </li>
        </ul>
      </main>
    </Layout>
  )
}

export default About
