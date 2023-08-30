import styled from 'styled-components'

export const Container = styled.article`
  background: var(--color-gray-600);
  border: 1px solid var(--color-gray-500);
  border-radius: var(--radius-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  
  @media (max-width: 800px) {
    min-width: 22rem;
  }

  @media (min-width: 800px) {
    :hover {
      border-color: var(--color-gray-400);
      box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
      transform: scale(1.03);
    }
  }

  img {
    width: 100%;
  }

  .info {
    border-top: 1px solid #3a3c48;
    padding: 1rem;
    margin-top: -6px;

    h1, h2 {
      font-size: var(--font-size-md);
      line-height: 120%;
    }

    h1 {
      margin-bottom: var(--space-xs);
    }

    h2 {
      opacity: 0.6;

      font-weight: 400;
      font-size: var(--font-size-sm);
    }
  }
`
