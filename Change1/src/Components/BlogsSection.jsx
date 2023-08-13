import React from 'react'
import "../css/BlogsSection.css"
import blogCard1 from "../Images/democds1.png"
import blogCard2 from "../Images/democds1.png"
import blogCard3 from "../Images/democds1.png"
import blogCard4 from "../Images/democds1.png"
import blogCard5 from "../Images/democds1.png"
import blogsImage from "../Images/blogsImage.png"
export default function BlogsSection() {
  return (
    <div className='blogs-section'>
        <h6>Blogs</h6>
        <h3><span>Insights</span> for Defence Prepration</h3>
        <div className="blogs-section-scroll">
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
            <a href="#"><img src={blogsImage} alt="" className='blog-card'/></a>
        </div>
    </div>
  )
}
