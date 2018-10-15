import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header/header'
import Footer from '../components/Footer/footer'
import styled from 'styled-components'
import './index.css'
import favicon from '../assets/images/rash-favicon.png'
import blueBg from '../assets/images/blue-bg.png'

const Wrapper = styled.div`
  background-image: url(${blueBg});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  background-position: bottom;
  padding: 5% 8%;
  position: relative;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
  }
`;
export default class Layout extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        />
        <Wrapper className={this.props.location.pathname == "/" ? 'cutBackground' :''}>
          <Header />
            {this.props.children()}
          <Footer footerClass={this.props.location.pathname == "/" ? 'footerInitial' :'footerAbsolute'} />
        </Wrapper>
      </div>
    )
  }
}
// const Layout = ({ children, data }) => (
//   <div>
//     <Helmet
//       title={data.site.siteMetadata.title}
//       meta={[
//         { name: 'description', content: 'Sample' },
//         { name: 'keywords', content: 'sample, something' },
//       ]}
//       link={[
//         { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
//       ]}
//     />
//     <Wrapper>
//       <Header />
//       {children()}
//       <Footer />
//     </Wrapper>
//   </div>
// )

Layout.propTypes = {
  children: PropTypes.func,
}

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
