# PassLeaf

PassLeaf is a minimalistic password generator that helps you create strong, random passwords through a clean and intuitive interface. The page now sports a modern look with a gradient background and the arcade-inspired **Press Start 2P** font. A **Copy** button lets you quickly place the generated password on your clipboard.


## Getting Started

Open `index.html` in your browser to use the generator. If you prefer a local server, run:

```bash
python3 -m http.server
```

and open <http://localhost:8000>.

Use the **Length** field to set how many characters the password should have (between 4 and 32), then click **Generate Password**. Press **Copy** to place the result on your clipboard.

## Deploying to Netlify

Netlify offers free hosting for static sites, making it a good match for this project.

1. Fork or clone this repository to your own GitHub account.
2. Sign in to [Netlify](https://netlify.com/) and choose **Add new site -> Import an existing project**.
3. Authorize Netlify to access your GitHub repositories and select your fork.
4. The included `netlify.toml` already specifies that no build step is needed and that the root directory should be published.
5. Click **Deploy site** and Netlify will build and provide you with a public URL.

