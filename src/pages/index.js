import React from 'react'
// import RashSelfIcon from '../assets/images/rashmi.svg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Vitalii Adler`s<span> Portfolio</span></UserTitle>
    <UserDescription>
      <div>
        <p>
          Hi there!
          I am a software developer with experience (FrontEnd – JavaScript, React.js / BackEnd Java, Node.js).
        </p>
        <DownloadButton href="https://github.com/rashmiap/personal-website-react/raw/master/RashmiAp-Resume.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      {/*<img src={RashSelfIcon} alt="SelfImage"/>*/}
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
