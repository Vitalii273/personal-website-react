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
          Hey there! I`m glad to welcome you on my page!
          I am a Full Stack Developer with 3 years experience.
        </p>
        <DownloadButton href="https://github.com/Vitalii273/personal-website-react/raw/master/Profile.pdf"  download title="Resume">Download Resume</DownloadButton>
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
