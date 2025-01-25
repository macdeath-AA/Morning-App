const { getDefaultConfig } = require('expo/metro-config');

const defaultCongig = getDefaultConfig(__dirname);
defaultCongig.resolver.assetExts.push('cjs');

module.exports = config;
