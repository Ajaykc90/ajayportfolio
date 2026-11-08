# Ajay K C — portfolio

Production site: https://www.ajaykc.com

Static HTML, CSS and JavaScript. No npm dependencies.

```sh
node scripts/build.mjs
python3 -m http.server 4174 --bind 127.0.0.1 --directory dist
```

Netlify project `modest-lewin-61e8a8` automatically builds and publishes `main` using
`netlify.toml`. Only the build allowlist is served; documentation, skills, design
review and audit tools stay outside the public output.

See `docs/ACCESSIBILITY.md` for the actual audit scope and remaining manual checks.
See `AGENTS.md` for future editing guidance. The original production version remains
in Git history at `da29b97`; Netlify also retains previous deployments for rollback.
