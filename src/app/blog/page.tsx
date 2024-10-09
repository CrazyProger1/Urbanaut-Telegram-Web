import { MDXRemote } from "next-mdx-remote/rsc";
import DOMPurify from "isomorphic-dompurify";

const content = `
---
title: Functions for Beginners
date: 'August 4, 2021'
description: Learn how to create and use functions
thumbnailUrl: '/javascript-functions-thumbnail.jpeg'
tags: ['functions', 'javascript']
---

<div>
  This is a blog post about <strong>functions</strong>. <br/>
  We'll learn what functions are, how to write functions, and how to use them.
</div>

<br/>

---

### This is a Markdown subheading
We just used a \`###\` subheading in our blog post.

<script>alert(1)</script>

<div class="bg-lime-600">Here I'm using a component inside my MarkDown file: </div>
`;

// const sanitizedContent = DOMPurify.sanitize(content);

const BlogPage = () => {
  return (
    <div className="prose">
      <MDXRemote source={content} />
    </div>
  );
};

export default BlogPage;
