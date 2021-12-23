Main idea - design your styles in the HTML

# How Tailwind works
TLDR: your src styles and files are being processed by Tailwind CLI to make plain css output

When you import styles.css from public folder, and it contains default Tailwind styles,
then it removes all Browser default styles

1. it scans all of your files in "src" input folder for class names:
- HTML files
- JavaScript components
- and any other templates 
2. generates the corresponding styles
3. writes them to a static CSS file in "public" dist folder

## Tailwind vs inline styles:
- No magic numbers: with utilities, you’re choosing styles from a predefined design system
- Responsive design: ou can’t use media queries in inline styles, but you can use Tailwind’s responsive utilities t
- Hover, focus, and other states: inline styles can’t target states like hover or focus, but Tailwind’s state variants - do 


For usage IDE Tailwind plugins - a tailwind.condig file has to be defined

## @apply
extract classes into a separate directive, it works similar to @mixin in scss
What you need - is to add it in .css file. 
It differs from the whole implementation - is that you don't write css props inside .css, but use Tailwind classes inside .css file


Tailwind doesn't have its own set of icons

## transitions
When we add to element "transform" or "transition" classes, it means that we further may apply transition or transform effects on it

## Styling based on parent state: group
When you need to style an element based on the state of some parent element,
mark the parent with the`group` class, and use `group-*` modifiers like `group-hover` to style the target element:

```html
<a href="#" class="group block">
    <p class="text-gray-500 group-hover:text-white">Text will be white on parent link hovered</p>
</a>
```

## Styling based on sibling state: peer

## To Run:
1. serve public/index.html

2. If you want to change css: change it in src/styles.css
3. Then run `build-css`
