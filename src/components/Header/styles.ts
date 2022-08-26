import styled from "styled-components";
import {spacing, color} from '@lokalise/louis'

export const HeaderWrapper = styled.header`
  padding: ${spacing(4, 0)};
  text-align: center;
  border-bottom: 1px solid ${color("border.primary")};
  margin-bottom: ${spacing(7)};
`

export const Logo = styled.img`
  width: 100%;
  max-width: 250px;
`
