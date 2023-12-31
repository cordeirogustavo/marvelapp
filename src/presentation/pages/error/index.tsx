import NextImage from 'next/image'
import NextLink from 'next/link'

import NextHead from 'next/head'

import { Wrapper } from '../../components/wrapper'
import { AppLayout } from '../../layouts/app-layouts'
import { Container } from './styles'

export function ErrorPage (): React.ReactElement {
  return (
    <>
      <NextHead>
        <title>MarvelApp - Error 404</title>
      </NextHead>

      <AppLayout>
        <Container>
          <Wrapper>
            <div className="image-container">
              <NextImage src="/error.svg" width={326} height={326} />
            </div>
            <div className="info-container">
              <h1>404...</h1>

              <span>STATION ANSWERS:</span>
              <p>I think you've reached the edge of the universe. The page you requested was not found.</p>

              <NextLink href="/" passHref>
                <a className="btn btn-outline btn-lg">Back to the front page</a>
              </NextLink>
            </div>
          </Wrapper>
        </Container>
      </AppLayout>
    </>
  )
}
