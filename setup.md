# 0. start fresh
mkdir my-new-project && cd my-new-project

# 1. scaffold Next.js
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir

# 2. git (first time only)
git init
git add .
git commit -m "Initial Next.js scaffold"

# 3. create EMPTY repo on GitHub, then:
git remote add origin https://github.com/devdanishai/REPO-NAME.git
git branch -M main
git push -u origin main

# 4. optional — run locally
npm run dev

# 5. optional — deploy on Vercel (import repo in dashboard)