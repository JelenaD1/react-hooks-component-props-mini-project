import React from "react"
import Article from "./Article"


const ArticleList = ({blogPosts}) => {
    
    const createPost = blogPosts.map((element) => 
       
            <Article blogTitle={element.title}
                    blogDate={element.date}
                     blogPreview={element.preview}/>
        
      )

    return (
        <main>{createPost}</main>
            
    )
}












export default ArticleList 