import NextHead from 'next/head'

import { Banner } from '../../components/banner'
import { CharacterList } from '../../components/character-list'
import { ComicList } from '../../components/comic-list'
import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { ComicModel } from '../../../domain/models/comic'
import { CharacterModel } from '../../../domain/models/character'

interface MainPageProps {
  characters: CharacterModel[]
  comics: ComicModel[]
  spiderManComics: ComicModel[]
  ironManComics: ComicModel[]
  featuredComics: ComicModel[]
}

export function MainPage ({ characters, comics, spiderManComics, ironManComics, featuredComics }: MainPageProps): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>Marvel App</title>
      </NextHead>

      <AppLayout>
        <Wrapper>
          <Banner
            href="/comics/6830"
            src="/spiderman.jpg"
            title="The Amazing Spider-Man"
            createdAt="1996-06-01"
          />
          <CharacterList title="BEST CHARACTERS" data={characters} />

          <ComicList title="Featured" data={comics} />
          <ComicList title="Best Of 2021" data={featuredComics} />
          <ComicList title="Comics of Spider Man" data={spiderManComics} />
          <ComicList title="Comics of Iron Man" data={ironManComics} />
        </Wrapper>
      </AppLayout>
    </>
  )
}
