import React from "react"

const Article =({blogDate="January 1, 1970", blogTitle, blogPreview}) => {
    return (
        <article>
            <h3 key={blogTitle}> {blogTitle}</h3>
            <small key={blogDate}>{blogDate}</small>
             <p key={blogPreview}>{blogPreview}</p>
        </article>
            
            
    )
}







export default Article
