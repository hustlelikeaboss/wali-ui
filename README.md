# React Gallery
A simple flexbox-based React library for creating photo galleries, or pretty much anything you want to display in a grid layout

## Demo
```
https://react-gallery.now.sh/
```

The demo site also includes a [playground](https://react-gallery.now.sh/playground) where you can intereact with the library live.

## Usage
1. `npm i -D @hustlelikeaboss/react-gallery`
2. Example:
   ```javascript
   import React from 'react';
   import PropTypes from 'prop-types';
   import * as ReGal from '@hustlelikeaboss/react-gallery';

   const Masonry = ({photos, numOfCols}) => (
        <ReGal.Masonry 
            items={photos} 
            numOfCols={numOfCols} 
        />
    );
    Masonry.propTypes = {
        photos: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            description: PropTypes.string
        })),
        numOfCols: PropTypes.number
    };
    export default Masonry;
   ```

## Development
1. `git clone` this project
2. obtain a pair of unsplash access key and secret here: https://unsplash.com/developers
3. create an `.env` file in project root and add unsplash creds:
   ```
   REACT_APP_UNSPLASH_ACCESS_KEY=your_key_here
   REACT_APP_UNSPLASH_SECRET_KEY=your_secret_here
   ```
4. `npm ci`
5. `npm start`

## Zeit deployment
### initial setup
1. `now login`
2. `now secrets ls`
3. `now secrets add REACT_APP_UNSPLASH_ACCESS_KEY <secret-value>`
4. `now secrets add REACT_APP_UNSPLASH_SECRET_KEY <secret-value>`
   
### deployment
1. to trigger a production build, run `now --prod`; or, while on the `master` branch, run `git push` 
2. to trigger a staging build, run `now` or `git push` to a branch

## Publish
1. `npm login`
2. `npm publish --access public`
