import React from 'react'
import {Link} from 'react-router'

const PageNotFound = () => {
  return (
    <div style={{textAlign:"center"}}>
        <h1>The Page Is Not Found</h1>
        <div>
            <Link to="/"><button>Go To Home Page</button></Link>
        </div>
        <img style={{width:"60%"}} src="https://images01.nicepagecdn.com/page/44/62/web-page-design-preview-446267.webp" alt="" />
     </div>
  )
}

export default PageNotFound