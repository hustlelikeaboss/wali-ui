import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { Masonry } from '../lib';

const Card = styled.div`
	padding: 1rem 1.5rem 1rem 1.5rem;
	border: 1px solid rgba(0, 0, 0, 0.05);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);

	border-radius: 8px;
	transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

	:hover {
		transform: scale(1.035, 1.035);
		box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
	}

	.title {
		padding-bottom: -5px;
		margin-bottom: -10px;
	}

	.author {
		font-style: italic;
	}

	.body {
		margin-bottom: 2.5rem;
	}

	.btn {
		padding: 1rem 0;
		background-color: white;
		border: none;
		text-transform: uppercase;
		text-decoration: none;
		font-weight: 400;
		letter-spacing: 1px;
	}
`;

type Post = { id: number; title: string; userId: number; body: string };

const renderPost = (post: Post) => (
	<Card key={post.id}>
		<h4 className="title">{post.title.toUpperCase()}</h4>
		<p className="author">
			<small>{'2019-9-' + (30 - post.id)}</small>
		</p>
		<p className="body">{post.body}</p>

		<a className="btn" href="/">
			Read More
		</a>
	</Card>
);

const BlogPosts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
			.then(res => res.json())
			.then(json => {
				setPosts(json);
			});
	}, []);

	return (
		<div>
			<h2>Masonry</h2>
			<h3>Top aligned, fixed width, custom rendering</h3>
			<Masonry items={posts} numOfCols={3} render={renderPost} />
		</div>
	);
};

export default BlogPosts;
