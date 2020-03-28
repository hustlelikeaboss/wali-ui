import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
	applicationId: process.env.REACT_APP_UNSPLASH_ACCESS_KEY || '',
	secret: process.env.REACT_APP_UNSPLASH_SECRET_KEY || ''
});

export default unsplash;
