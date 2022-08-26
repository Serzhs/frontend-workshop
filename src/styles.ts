import styled from "styled-components";
import {spacing, color} from "@lokalise/louis";

export const Wrapper = styled.main`
  width: 100%;
  background-color: ${color("surface.yellow50")};
  min-height: 100vh;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${spacing(6)};
`
