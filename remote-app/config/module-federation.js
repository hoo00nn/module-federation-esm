const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'myapp',
    filename: 'remoteEntry.js',
    exposes: {
      './Banner': './src/components/Banner',
    },
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^18',
        strictVersion: true,
        shareScope: 'default',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^18',
        strictVersion: true,
        shareScope: 'default',
      },
      'isomorphic-style-loader/StyleContext': {
        singleton: true,
        requiredVersion: '^5',
        strictVersion: true,
        shareScope: 'default',
      },
      'isomorphic-style-loader/withStyles': {
        singleton: true,
        requiredVersion: '^5',
        strictVersion: true,
        shareScope: 'default',
      },
    },
  }),
  server: [
    new UniversalFederationPlugin({
      remoteType: 'script',
      name: 'myapp',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      exposes: {
        './Banner': './src/components/Banner',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18',
          strictVersion: true,
          shareScope: 'default',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^18',
          strictVersion: true,
          shareScope: 'default',
        },
        'isomorphic-style-loader/StyleContext': {
          singleton: true,
          requiredVersion: '^5',
          strictVersion: true,
          shareScope: 'default',
        },
        'isomorphic-style-loader/withStyles': {
          singleton: true,
          requiredVersion: '^5',
          strictVersion: true,
          shareScope: 'default',
        },
      },
    }),
  ],
};
