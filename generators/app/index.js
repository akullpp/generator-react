const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options)
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        type: 'input',
        name: 'projectName',
        message: 'Project name:',
        validate: input => Boolean(input.length),
      },
    ])

    this.destinationRoot(this.answers.projectName)
  }

  writing() {
    this.log('Copying templates...')

    this.fs.copy(this.templatePath('static/**/*'), this.destinationPath(), {
      globOptions: { dot: true },
    })

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.answers,
    )

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      this.answers,
    )

    this.fs.copyTpl(
      this.templatePath('LICENSE'),
      this.destinationPath('LICENSE'),
      { year: new Date().getFullYear() },
    )

    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath('public/index.html'),
      this.answers,
    )
  }

  end() {
    this.log('Updating dependencies...')
    this.spawnCommandSync('npx', ['ncu', '-u'])

    this.log('Installing dependencies...')
    process.chdir
    this.spawnCommandSync('npm', ['i'])

    this.log('Setting up git...')
    this.spawnCommandSync('git', ['init'])
    this.spawnCommandSync('git', ['checkout', '-b', 'develop'])
    this.spawnCommandSync('git', ['add', '.'])
    this.spawnCommandSync('git', ['commit', '-am', '"Initialize"'])
  }
}
