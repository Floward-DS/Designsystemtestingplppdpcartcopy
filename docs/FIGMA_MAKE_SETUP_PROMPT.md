# 🚀 Figma Make - Template Setup Prompt

## Copy-Paste This Prompt When Starting a New Figma Make File

---

**PROMPT TO USE:**

```
I need to pull the HomeScreen template from my GitHub repository into this Figma Make file. 

Repository: Floward-DS/Designsystemtestingplppdpcartcopy

Please pull down ALL of the following files from the repository to ensure the template works exactly as it does in the repo:

CRITICAL FILES (Must pull all together):
1. src/styles/fonts.css - Custom fonts (Montas & Founders Grotesk)
2. src/styles/theme.css - Design system and typography
3. src/imports/svg-dwjl1898ju.ts - All SVG icon paths
4. src/app/components/icons.tsx - Icon components

COMPONENT FILES (All components):
5. src/app/components/HomeScreen.tsx - Main template
6. src/app/components/HomeHeader.tsx - Animated header
7. src/app/components/HomeHeroCarousel.tsx - Hero carousel
8. src/app/components/HomeDiscoverSection.tsx - Discover section
9. src/app/components/HomeEleganceCards.tsx - Elegance cards
10. src/app/components/HomeMoments.tsx - Moments/occasions
11. src/app/components/HomeFourProd.tsx - Product grid
12. src/app/components/HomeProdCats.tsx - Product categories
13. src/app/components/BottomNav.tsx - Bottom navigation

APP ENTRY:
14. src/app/App.tsx - Should import and render HomeScreen

After pulling all files, please verify:
✅ Fonts load from GitHub repository URLs (check fonts.css)
✅ All 5 bottom nav icons render (check icons.tsx imports from svg-dwjl1898ju.ts)
✅ BottomNav has z-50 class
✅ HomeScreen has scroll detection at 380px
✅ All component imports resolve correctly
✅ No console errors

Success criteria:
- Fonts display correctly (Montas for headings, Founders Grotesk for body)
- All 5 bottom nav icons visible and clickable
- Header logo animates when scrolling
- No missing imports or 404 errors

DO NOT create any debug or verification components - I just need the working template.
```

---

## 📋 Alternative Shorter Prompt

If you want a more concise version:

```
Pull the HomeScreen template from Floward-DS/Designsystemtestingplppdpcartcopy repository.

Get these files:
- src/styles/fonts.css + theme.css
- src/imports/svg-dwjl1898ju.ts
- src/app/components/icons.tsx
- src/app/components/HomeScreen.tsx and ALL its component dependencies (HomeHeader, HomeHeroCarousel, HomeDiscoverSection, HomeEleganceCards, HomeMoments, HomeFourProd, HomeProdCats, BottomNav)
- src/app/App.tsx

Verify fonts load from GitHub, icons render correctly, and no import errors. No debug components needed.
```

---

## 🎯 What This Prompt Ensures

### ✅ Fonts
- Montas and Founders Grotesk load from GitHub raw content URLs
- Theme.css uses correct font-family variables
- Typography system is intact

### ✅ Icons
- SVG paths file (svg-dwjl1898ju.ts) is pulled with all path data
- Icons.tsx imports from the correct file
- All 5 bottom nav icons render (ExploreIcon, SearchIcon, BagIcon, CalendarIcon, ProfileIcon)

### ✅ Components
- All 9 components pulled together
- Import paths are correct
- HomeScreen properly imports all child components

### ✅ Functionality
- Scroll detection works (380px threshold)
- Bottom nav has proper z-index (z-50)
- Click handlers are in place
- No missing dependencies

---

## 📝 Notes

- **Always use the MCP GitHub connector** - The prompt assumes you can connect to the repository
- **Pull all files together** - Don't pull files separately as they depend on each other
- **Verify after pulling** - Quick check: scroll the page (logo should animate), click bottom nav (should log to console), inspect fonts in DevTools

---

## 🔄 For Other Templates

To pull a different template, modify the prompt:

```
Pull the [TEMPLATE_NAME] template from Floward-DS/Designsystemtestingplppdpcartcopy repository.

Get these files:
- src/styles/fonts.css + theme.css
- src/imports/svg-dwjl1898ju.ts (if template uses icons)
- src/app/components/icons.tsx (if template uses icons)
- src/app/components/[TEMPLATE_NAME].tsx and ALL its component dependencies
- src/app/App.tsx

Verify fonts load from GitHub, icons render correctly, and no import errors. No debug components needed.
```

---

## ⚡ Quick Checklist After Running Prompt

After AI pulls the files, verify:

1. ☐ Open browser DevTools → Network tab → Filter "font" → See 200 status codes
2. ☐ Inspect any heading element → Font-family shows "Montas"
3. ☐ Inspect any paragraph → Font-family shows "Founders Grotesk"
4. ☐ Bottom nav shows 5 icons (not empty boxes)
5. ☐ Scroll page → Logo changes/animates
6. ☐ Click bottom nav items → Active state changes
7. ☐ Console → No red errors

---

**Last Updated**: December 2024  
**Repository**: Floward-DS/Designsystemtestingplppdpcartcopy