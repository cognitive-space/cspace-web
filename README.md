# CognitiveSpace.com

static site generator

## Note: CloudCannon Removal

CloudCannon has been fully removed from this project as part of sunsetting our use of their CMS service.

**What was removed:**
- `cloudcannon.config.yml` — CloudCannon CMS configuration file
- `_notes/` — CloudCannon scratch-pad folder

**GitHub Pages is unaffected.** The site continues to build and deploy via the existing GitHub Actions workflow (`.github/workflows/hugo.yml`), which runs Hugo and publishes to GitHub Pages on every push to `main`. CloudCannon was only used for CMS editing and had no role in the build or deployment pipeline.

No changes were made to content, layouts, themes, or the Hugo configuration.

## Dev

```
hugo server
```

Edit on `draft` branch and make PR to `main`.
