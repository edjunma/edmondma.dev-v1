import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/projects/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/projects/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/projects/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/projects/menkiki_eyecatch.png'
import thumbPichu2 from '../public/images/projects/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/projects/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/projects/amembo_eyecatch.png'

const Projects = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4} mt={6}>
        My Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="tinkdrop" title="CRWN-Clothing" thumbnail={thumbInkdrop}>
            E-commerce web application made with React, Firebase, and Stripe for checkout.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Face Recognition App"
            thumbnail={thumbWalknote}
          >
            Full-stack web application built using React and Clarifai API to detect human faces from user's image URL inputs.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="threepainters"
            title="NFT Minter"
            thumbnail={thumbFourPainters}
          >
            NFT mint website application with usable MetaMask wallet connection.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem id="Ramenkikimenkiki" title="Ramenkiki" thumbnail={thumbMenkiki}>
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </WorkGridItem>
        </Section>
        </SimpleGrid>

{/* Old Projects */}
        <Section delay={0.4}>
        <Divider my={6} />

          <Heading as="h3" fontSize={20} mb={4}>
            Old Projects
          </Heading>
        </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="meechu" title="Old Portfolio" thumbnail={thumbPichu2}>
            Old version of my personal portfolio made in GatsbyJS using styled-css.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="databaseTagger"
            thumbnail={thumbFreeDBTagger}
            title="Old Database Project"
          >
            Database organization project for antibodies database
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="camembo" title="Old Share File Project" thumbnail={thumbAmembo}>
            P2P private file sharing tool
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="camembo" title="Old Project" thumbnail={thumbAmembo}>
            Old project demo
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects