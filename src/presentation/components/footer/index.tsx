import { FiGithub } from 'react-icons/fi'
import { Wrapper } from '../wrapper'
import { Container } from './styles'

export function Footer (): React.ReactElement {
  return (
    <Container>
      <Wrapper>
        <span>By <b>@cordeirogustavo</b></span>

        <a className="btn btn-outline" href="https://github.com/cordeirogustavo/marvelapp" target="_blank">
          <FiGithub />
          Open on Github
        </a>
      </Wrapper>
    </Container>
  )
}
