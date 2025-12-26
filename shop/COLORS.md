# Colors

## Custom Palettes

**Primary** `#eb3e7d` - Pink brand color  
**Secondary** `#dfa44c` - Amber accent  
**Gray** - Custom gray shades

## Usage

```vue
<!-- Brand colors -->
<UButton color="primary">Button</UButton>
<div class="bg-primary text-white">

<!-- Gray shades -->
<div class="bg-gray-50">       <!-- Light background (#f7f7f7) -->
<div class="border-gray-100">  <!-- Separator (#F0F0F0) -->
<p class="text-gray-900">      <!-- Dark text (#1e1e1e) -->
<p class="text-gray-500">      <!-- Icons/secondary (#787878) -->
<p class="text-gray-400">      <!-- Muted text (#aaa) -->
```

## Gray Mapping

| Shade | Hex | Use Case |
|-------|-----|----------|
| 50 | `#f7f7f7` | Backgrounds |
| 100 | `#F0F0F0` | Borders/separators |
| 400 | `#aaaaaa` | Muted text |
| 500 | `#787878` | Icons/secondary text |
| 900 | `#1e1e1e` | Primary text |

## Config

**Palettes:** `app/assets/css/main.css`  
**Colors:** `app/app.config.ts`  
**Change base:** Edit `-500` shade in main.css
