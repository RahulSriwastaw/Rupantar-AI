## TODO List
- [x] GitHub पर लाइव करने के लिए चरणबद्ध कार्य-योजना: GitHub पर लाइव करने के लिए चरणबद्ध कार्य-योजना

- [ ] [Phase 1 – Repository तैयारी]: [Phase 1 – Repository तैयारी]
- रिपो के root में `.github/workflows/deploy.yml` फ़ाइल बनाएँ जो GitHub Pages पर static build push करे।
- `web-app/vite.config.ts` में `base: '/rupantar-ai/'` सेट करें (repo-name के अनुरूप) ताकि assets सही path से लोड हों।
- `pnpm install && pnpm build` चला कर `web-app/dist` फ़ोल्डर में production build जनरेट करें।
- `dist` को `.gitignore` से हटाएँ ताकि GitHub Pages branch में commit हो सके।


- [ ] [Phase 2 – GitHub Pages Enable]: [Phase 2 – GitHub Pages Enable]
- GitHub repo → Settings → Pages → Source → GitHub Actions चुनें; यहीं deploy workflow trigger होगा।
- Environment protection rule बनाएँ: Require approval before deploy on `github-pages` environment।


- [ ] [Phase 3 – Workflow File Creation]: [Phase 3 – Workflow File Creation]
- Workflow में दो job रखें:  
  1) `build` – lint, test, build (console.* strip करें via esbuild dropDebugger/dropConsole)।  
  2) `deploy` – `peaceiris/actions-gh-pages@v4` से `dist` को `gh-pages` branch पर push करें।
- Secrets में `GITHUB_TOKEN` (auto) व `HUSKY` (0) सेट करें ताकि pre-commit CI में skip हो।


- [ ] [Phase 4 – Post-Deploy Validation]: [Phase 4 – Post-Deploy Validation]
- Actions tab में deploy run ग्रीन होने पर `https://<username>.github.io/rupantar-ai` खोलें।
- Lighthouse CI action जोड़ें और PR check में ≥90 PWA स्कोर अनिवार्य करें।
- 320 px viewport test: browser dev-tools → device toolbar → Galaxy Fold select करें; bottom-tabs व theme-toggle सही दिखने चाहिए।


- [ ] [Phase 5 – Custom Domain (Optional)]: [Phase 5 – Custom Domain (Optional)]
- यदि अलग डोमेन चाहिए तो `dist/CNAME` फ़ाइल बनाएँ जिसमें `ai.rupantar.app` लिखें।
- DNS में CNAME record → `<username>.github.io` point करें; HTTPS enforce tick करें।


- [ ] [Phase 6 – Continuous Sync]: [Phase 6 – Continuous Sync]
- `main` branch पर कोई भी merge होते ही workflow auto-trigger होगा; कोड पुश के 2-3 मिनट में साइट लाइव अपडेट दिखेगी।
