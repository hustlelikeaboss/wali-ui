# Wali

the personal finance manager you've been waiting for

## Development

1. create an `.env` file in project root and add creds:
    ```
    REACT_APP_SECRET_KEY=SECRET_VALUE
    ```
2. `npm ci`
3. `npm start`

## Zeit deployment

### initial setup

1. `now login`
2. `now secrets ls`
3. `now secrets add REACT_APP_SECRET_KEY <SECRET_VALUE>`

### deployment

1. to trigger a production build, run `now --prod`; or, while on the `master` branch, run `git push`
2. to trigger a staging build, run `now` or `git push` to a branch

## Publish

1. `npm login`
2. `npm publish --access public`
