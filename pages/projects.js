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
          <WorkGridItem id="tinkdrop" title="Tinkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Sushibae"
            thumbnail={thumbWalknote}
          >
            Responsive website for Sushi restaurant, Sushibae
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="threepainters"
            title="The three painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
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
          <WorkGridItem id="meechu" title="Meechu Meechu" thumbnail={thumbPichu2}>
            Twitter client app for iPhone Safari
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
            id="databaseTagger"
            thumbnail={thumbFreeDBTagger}
            title="Database Tagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem id="camembo" title="Camembo" thumbnail={thumbAmembo}>
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Projects