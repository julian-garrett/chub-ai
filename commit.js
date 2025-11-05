const { execSync } = require('child_process');
const fs = require('fs');

function run(cmd, silent = false) {
  try {
    return execSync(cmd, { stdio: silent ? 'pipe' : 'inherit' }).toString().trim();
  } catch {
    return '';
  }
}

function writeGitignoreIfMissing() {
  const gitignorePath = '.gitignore';
  if (!fs.existsSync(gitignorePath)) {
    console.log('Создаём .gitignore...');
    fs.writeFileSync(gitignorePath, `
# === Node.js ===
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
dist/
.env

# === Unity ===
[Ll]ibrary/
[Tt]emp/
[Oo]bj/
[Bb]uild/
[Bb]uilds/
Assets/AssetStoreTools*
*.csproj
*.unityproj
*.sln
*.user
*.pidb
*.booproj
*.svd
*.suo

# === Cocos Creator ===
local/
temp/
build/
library/
*.manifest
.DS_Store
.settings/

# === System ===
Thumbs.db
.DS_Store
.idea/
.vscode/
*.swp
*.bak
*.tmp
`.trim() + '\n');
  }
}

function getNextTag() {
  const tags = run('git tag', true).split('\n').filter(t => /^v\d+\.\d+\.\d+$/.test(t));
  if (tags.length === 0) return 'v0.0.1';

  tags.sort((a, b) => {
    const [a1, a2, a3] = a.substring(1).split('.').map(Number);
    const [b1, b2, b3] = b.substring(1).split('.').map(Number);
    return (a1 - b1) || (a2 - b2) || (a3 - b3);
  });

  const last = tags[tags.length - 1];
  const [major, minor, patch] = last.substring(1).split('.').map(Number);
  return `v${major}.${minor}.${patch + 1}`;
}

function logCommit(message, tag) {
  const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  //fs.appendFileSync('commit.log', `[${now}] ${message} (${tag})\n`);
}

function main() {
  writeGitignoreIfMissing();

  if (!fs.existsSync('.git')) {
    console.log('Инициализируем git...');
    run('git init');
  }

  run('git add -A', true);

  const hasChanges = run('git diff --cached --quiet || echo "yes"', true).includes('yes');
  if (!hasChanges) {
    console.log('Нет изменений для коммита.');
    return;
  }

  const userMessage = process.argv[2];
  const now = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const message = userMessage ? userMessage : `Auto commit at ${now}`;

  run(`git commit -m "${message}"`);

  const tag = getNextTag();
  run(`git tag ${tag}`);
  console.log(`Поставлен тег: ${tag}`);

  logCommit(message, tag);
  console.log('Коммит завершён.');
}

main();
