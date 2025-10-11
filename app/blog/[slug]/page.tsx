'use client'

import React from 'react';
import { useParams } from 'next/navigation';

const BlogPost: React.FC = () => {
    const { slug } = useParams();

    return (
        <div className="blog-post-container mt-24 mx-4">
            <h1 className="text-3xl font-bold mb-4">Blog Post: {slug}</h1>
            <p className="text-lg">This is the content for the blog post with the slug: {slug}.</p>
        </div>
    );
};

export default BlogPost;
