function buildConfig(env) {
    console.log(env);
  return require('./config/' + env + '.js')(env)
}

module.exports = buildConfig;