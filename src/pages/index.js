import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

import { Layout, Article, Wrapper, Button, SectionTitle } from '../components'

const Content = styled.div`
    grid-column: 2;
    box-shadow: 0 4px 120px rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    padding: 3rem 6rem;
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 3rem 2rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        padding: 2rem 1.5rem;
    }
    overflow: hidden;
`

const Hero = styled.div`
    grid-column: 2;
    padding: 3rem 2rem 6rem 2rem;
    text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
    color: ${props => props.theme.colors.grey.dark};

    @media (max-width: ${props => props.theme.breakpoints.phone}) {
        padding: 2rem 1rem 4rem 1rem;
    }

    p {
        font-size: 1.68rem;
        margin-top: -1rem;
        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
            font-size: 1.45rem;
        }
        @media (max-width: ${props => props.theme.breakpoints.phone}) {
            font-size: 1.25rem;
        }
    }
`

const IndexPage = ({
    data: {
        allMdx: { nodes: posts },
    },
}) => (
    <Layout>
        <Wrapper>
            <Hero>
                <h1><Link to='/'>lencse.io</Link></h1>
                <p>
                    I'm Levente Löki, a web developer from Budapest.
                </p>
                <Link to="/about">
                    <Button big>
                        About
                    </Button>
                </Link>
                <Link to="/projects">
                    <Button big>
                        Projects
                    </Button>
                </Link>
                <Link to="/contact">
                    <Button big>
                        Contact
                    </Button>
                </Link>
            </Hero>
            <Content>
                <SectionTitle>Latest stories</SectionTitle>
                {posts.map(post => (
                    <Article
                        title={post.frontmatter.title}
                        date={post.frontmatter.date}
                        excerpt={post.excerpt}
                        timeToRead={post.timeToRead}
                        slug={post.fields.slug}
                        categories={post.frontmatter.categories}
                        key={post.fields.slug}
                    />
                ))}
            </Content>
        </Wrapper>
    </Layout>
)

export default IndexPage

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMdx: PropTypes.shape({
            nodes: PropTypes.array.isRequired,
        }),
    }).isRequired,
}

export const IndexQuery = graphql`
    query IndexQuery {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
            nodes {
                fields {
                    slug
                }
                frontmatter {
                    title
                    date(formatString: "MM/DD/YYYY")
                    categories
                }
                excerpt(pruneLength: 200)
                timeToRead
            }
        }
    }
`
