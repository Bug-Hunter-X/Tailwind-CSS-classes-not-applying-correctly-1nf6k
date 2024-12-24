```javascript
// correct the tailwind config file, purge and mode are important
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// then in your html or jsx
<div class="bg-red-500 hover:bg-blue-700">
</div>
```