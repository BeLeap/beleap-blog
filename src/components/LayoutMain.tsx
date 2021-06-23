import styled from '@emotion/styled'
import * as React from 'react'
import { heights } from '../styles/variables'

const StyledLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: ${heights.header}rem;
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
)

export default LayoutMain
