import React from 'react'
import { Layout } from '../components'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { Wrapper, Header } from '../components'
import config from '../../config'

const Content = styled.article`
    grid-column: 2;
    box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
    max-width: 1000px;
    border-radius: 1rem;
    padding: 2rem 4.5rem;
    background-color: ${props => props.theme.colors.bg};
    z-index: 9000;
    margin-top: -3rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 3rem 3rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        padding: 2rem 1.5rem;
    }
    p {
        font-size: 1.1rem;
        letter-spacing: -0.003em;
        line-height: 1.58;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            font-size: 1rem;
        }
    }

    .prism-code {
        padding: 0.75rem;
        border-radius: 5px;
        margin-bottom: 1rem;
        font-size: 16px;
    }
`

const Title = styled.h1`
    margin-bottom: 1rem;
`

const PostContent = styled.div`
    margin-top: 4rem;
`

const ProjectsPage = () => (
    <Layout>
        <Wrapper>
            <Header>
                <Link to="/">{ config.siteTitle }</Link>
            </Header>
            <Content>
                <Title>Lencse</Title>
                <PostContent>
                    <h3>Kéktúra</h3>
                    <p>
                        dksjdskjdks
                    </p>
                    {/*
                    linkedin, twitter, github
                     */}
                </PostContent>
            </Content>
        </Wrapper>
    </Layout>
)

export default ProjectsPage
