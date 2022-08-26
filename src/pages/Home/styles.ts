import styled from "styled-components";
import {spacing, typography} from '@lokalise/louis'

export const Container = styled.div`
  width: 100%;
`

export const Heading = styled.h1`
  ${typography('heading1')};
  margin-bottom: ${spacing(5)};
`

export const Heading2 = styled.h2`
  ${typography('heading2')}
  margin-bottom: ${spacing(5)};
`
