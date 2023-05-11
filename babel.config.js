module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        modules: false,
        loose: true
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-transform-member-expression-literals',
    '@babel/plugin-transform-property-literals',
    '@babel/plugin-transform-property-mutators',
    '@babel/plugin-transform-reserved-words'
  ]
}