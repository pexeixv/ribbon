# Ribbon

## Details

- Aim was to create a small library that can do some sort of DOM manipulation when the CDN script is included.
- Add the CDN script in any HTML file and get a ribbon linking to [gavinpereira.in](https://gavinpereira.in)

## Installation

Add just before body ends.

```html
<script src="//r.gavinpereira.in"></script>
```

## Initialization

Add just after installation script.

```html
<script>
  GPRibbon();
</script>
```

## Customization:

```html
<script>
  GPRibbon({
    theme: "light", // dark
    position: "bottom-right", // bottom-left, top-right, top-left
  });
</script>
```
