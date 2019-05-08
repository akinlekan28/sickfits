import React, { Component } from 'react'
import Header from '../components/Header';
import Meta from './Meta';
import styled, {ThemeProvider, injectGlobal} from 'styled-components'


const theme = {
   red: '#FF0000',
   black: '#393939',
   grey: '#3A3A3A',
   lightgrey: '#E1E1E1',
   offwhite: '#EDEDED',
   maxWidth: '1000px',
   bs: '0 12px 24px 0 rgba(0, 0, 0, 0.9)'
};

const StylePage = styled.div`
background: white;
color: ${props => props.theme.black};
`;

const inner = styled.div`
max-width: ${props => props.theme.maxWidth};
margin: 0 auto;
padding: 2rem;
`;


class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
          <StylePage>
        <Meta /> 
        <Header />
        <inner>{this.props.children}</inner>
      </StylePage>
      </ThemeProvider>
    )
  }
}

export default Page;
