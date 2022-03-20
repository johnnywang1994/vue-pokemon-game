const ProductionCDN = '';

const templateData = {
  title: 'Vite App',
};

process.env.CDN = process.env.CDN || ProductionCDN;

const envNames = ['NODE_ENV', 'CDN'];

const defineVariables = envNames.reduce(
  (acc, key) => ({ ...acc, [key]: typeof process.env[key] !== 'string' ? JSON.stringify(process.env[key]) : process.env[key] }),
  {},
);

const scssInjectVariables = envNames
  .map((key) => `$${key.toLowerCase()}: ${JSON.stringify(process.env[key])};`)
  .join('');

export default {
  defineVariables,
  scssPrefix: `
    ${scssInjectVariables}
    @import "./src/styles/variables.scss";
    @import "./src/styles/mixins.scss";
  `,
  assetsDir: 'static',
  templateData,
}