import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 620,
  fontSize: 48,
  fontWeight: 600,
  color: "#1099A8",
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const doclistStyles = {
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  display: `inline-block`,
  marginBottom: 24,
  marginRight: 12,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLinks = [
  {
    text: "Jedan Link",
    url: "/",
    color: "#8954A8",
  },
  {
    text: "Drugi Link",
    url: "/",
    color: "#8954A8",
  }
]

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative" as "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const links = [
  {
    text: "O meni",
    url: "/",
    description:
      "",
    color: "#E95800",
  },
  {
    text: "Projekti",
    url: "/",
    description:
      "",
    color: "#1099A8",
  },
  {
    text: "Contact",
    url: "/",
    description:
      "Kon tak",
    color: "#BC027F",
  },
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        Stjepanka Pranjkovic
      </h1>
      <p style={paragraphStyles}>
        Pod <code style={codeStyles}>konstrukcijom</code>
      </p>
      {/*<ul style={doclistStyles}>*/}
      {/*  {docLinks.map(doc => (*/}
      {/*    <li key={doc.url} style={docLinkStyle}>*/}
      {/*      <a*/}
      {/*        style={linkStyle}*/}
      {/*        href={doc.url}*/}
      {/*      >*/}
      {/*        {doc.text}*/}
      {/*      </a>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
      {/*<ul style={listStyles}>*/}
      {/*  {links.map(link => (*/}
      {/*    <li key={link.url} style={{ ...listItemStyles, color: link.color }}>*/}
      {/*      <span>*/}
      {/*        <a*/}
      {/*          style={linkStyle}*/}
      {/*          href={link.url}*/}
      {/*        >*/}
      {/*          {link.text}*/}
      {/*        </a>*/}
      {/*        /!*{link.badge && (*!/*/}
      {/*        /!*  <span style={badgeStyle} aria-label="New Badge">*!/*/}
      {/*        /!*    NEW!*!/*/}
      {/*        /!*  </span>*!/*/}
      {/*        /!*)}*!/*/}
      {/*        <p style={descriptionStyle}>{link.description}</p>*/}
      {/*      </span>*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
