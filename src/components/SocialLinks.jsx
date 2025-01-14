import React from 'react'
import styled from 'styled-components'
import { useGetUsersQuery, useGetSocialsQuery } from '../app/apiSlice'
import { Icon } from '@iconify/react'
import { Blog } from '../config'

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`

const SocialLinks = () => {
  const { data: userData } = useGetUsersQuery()
  const { isSuccess, error, data: socialsData } = useGetSocialsQuery()
  React.useEffect(() => {
    if (error) {
      console.log(
        `${error.status} - check getSocials query in src/app/apiSlice.js`
      )
    }
  }, [error, socialsData])

  return (
    <StyledSocialLinks>
      <a
        href={userData.html_url}
        aria-label='Check out my GitHub profile.'
        className='link-icons'
      >
        <Icon icon='icomoon-free:github' />
      </a>
      {isSuccess &&
        socialsData.map((element, index) => {
          let icon
          if (element.provider === 'linkedin') {
            icon = <Icon icon='fa-brands:linkedin' />
          } else if (element.provider === 'twitter') {
            icon = <Icon icon='fa6-brands:square-x-twitter' />
          } else if (element.provider === 'facebook') {
            icon = <Icon icon='fa-brands:facebook-square' />
          } else if (element.provider === 'instagram') {
            icon = <Icon icon='fa-brands:instagram-square' />
          } else if (element.provider === 'tiktok') {
            icon = <Icon icon='fa-brands:tiktok' />
          } else if (element.provider === 'generic') {
            if (element.url.includes('https://dapt4.github.io/react-cv-resume-2025/')) {
              icon = <Icon icon='pepicons-pencil:cv-circle-filled' />
            } else if (element.url.includes('https://dapt4.github.io/react-portfolio24/')) {
              icon = <Icon icon='icon-park-solid:download-web' />
            }
          } else {
            icon = <Icon icon='ph:link-bold' />
          }
          return (
            <a
              key={index}
              href={element.url}
              aria-label='External link'
              className='link-icons'
            >
              {icon}
            </a>
          )
        })}
      {userData.blog && (
        <a
          href={userData.blog}
          aria-label='External link'
          className='link-icons'
        >
          {Blog || <Icon icon='ph:link-bold' />}
        </a>
      )}
    </StyledSocialLinks>
  )
}

export default SocialLinks
