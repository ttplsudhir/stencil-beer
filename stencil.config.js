exports.config = {
  bundles: [
    { components: ['stencil-beer', 'auth-page'] },
    { components: ['main-page', 'profile-header'] },
    { components: ['profile-page'] },
    { components: ['bar-page', 'bar-list'] },
    { components: ['beer-page', 'beer-list', 'beer-item'] },
    { components: ['beer-detail'] },
    { components: ['favorites-page'] },
    { components: ['bar-directions'] }
  ],
  collections: [
    { name: '@stencil/router' },
    { name: '@ionic/core' },
    { name: 'st-img' }
  ],
  copy: [
    { src: 'workers/' }
  ],
  serviceWorker: {
    globPatterns: [
      '**/*.{js,css,json,html,ico,png,jpeg}'
    ],
    globIgnores: [
      'build/app/svg/*.js'
    ]
  },
  globalStyle: 'src/global/variables.css'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
