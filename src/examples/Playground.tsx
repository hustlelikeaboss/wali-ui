import React from 'react';
import styled from '@emotion/styled';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import unsplash from './unsplash';
import * as ReGal from '../lib';

const scope = { React, ReGal, unsplash };
const code = `
class Example extends React.Component{
	constructor(props) {
		super(props);
		this.state = { photos: [], numOfCols: 3 };
	}

	componentDidMount() {
		const collections = [239835, 1248080, 8052237];
		const page = 1;
		const photosPerPage = 15; 
		unsplash.collections
			.getCollectionPhotos(collections[0], page, photosPerPage)
			.then(res => res.json())
			.then(json => {
				const photos = json.map((photo) => ({
					id: photo.id,
					description: photo.description,
					url: photo.urls.regular,
					width: photo.width,
					height: photo.height
				}));
				this.setState({ photos });
			});
	}

	render() {
		const { photos, numOfCols } = this.state;
		return (
			<div>
				<h2>Preview</h2>
				<h3>Square, Masonry, MasonryAlt</h3>
				<ReGal.Masonry items={photos} numOfCols={numOfCols} />
			</div>
		);
	}
}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: stretch;
	align-items: stretch;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const Col = styled.div`
	flex-basis: 50%;
	width: 50%;
	max-width: 50%;
	@media (max-width: 600px) {
		flex-basis: auto;
		width: 100%;
		max-width: 100%;
	}
	padding: 1rem;
`;

const StyledEditor = styled(LiveEditor)`
	margin-top: 2rem;
	background: #333333;
	font-size: 1.25rem;
	caret-color: white;
`;

const StyledError = styled(LiveError)`
	margin-top: 2rem;
	padding: 1rem;
	background: #f1f1f1;
	font-size: 1.25rem;
	color: #ff5555;
`;

const Playground = () => (
	<main>
		<LiveProvider code={code} scope={scope}>
			<Wrapper>
				<Col>
					<LivePreview />
				</Col>
				<Col>
					<h2>Live Edit</h2>
					<h3>Try changing gallery type and collection in the editor below</h3>
					<StyledEditor />
					<StyledError />
				</Col>
			</Wrapper>
		</LiveProvider>
	</main>
);

export default Playground;
