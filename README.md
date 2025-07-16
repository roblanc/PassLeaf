# PassLeaf

PassLeaf is a minimalistic password generator that helps you create strong, random passwords through a clean and intuitive interface. The page now sports a modern gradient background with subtle dots. Headings use the arcade-inspired **Press Start 2P** font, while the rest of the interface is set in **Poppins** for readability. A **Copy** button lets you quickly place the generated password on your clipboard.


## Getting Started

Open `index.html` in your browser to use the generator. If you prefer a local server, run:

```bash
python3 -m http.server
```

and open <http://localhost:8000>.

Use the **Length** field to set how many characters the password should have (between 4 and 32), then click **Generate Password**. Press **Copy** to place the result on your clipboard.

## Deploying to Netlify

Netlify offers free hosting for static sites and requires no build step, so it's our recommended option for publishing this project quickly.

1. Fork or clone this repository to your own GitHub account.
2. Sign in to [Netlify](https://netlify.com/) and choose **Add new site -> Import an existing project**.
3. Authorize Netlify to access your GitHub repositories and select your fork.
4. The included `netlify.toml` already specifies that no build step is needed and that the root directory should be published.
5. Click **Deploy site** and Netlify will build and provide you with a public URL.

## Deploying to Vercel

Vercel can also host this static project. After creating a free account, run:

```bash
npx vercel --prod
```

and follow the prompts. Vercel will upload the files and give you a live URL.

