import fs from 'fs';
import path from 'path';

import typescript, { ScriptTarget } from 'typescript';
import find from 'find';

const Parser = require('i18next-scanner').Parser;

const SOURCE = path.join(__dirname, '../src');
const LOCALES_DIR = path.join(__dirname, '../assets/locales');
const RU_PATH = path.join(LOCALES_DIR, 'ru/translation.json');
const EN_PATH = path.join(LOCALES_DIR, 'en/translation.json');
const FILE_REGEX = /\.tsx?$/;

const ru = require(RU_PATH);
const en = require(EN_PATH);
const files = find.fileSync(FILE_REGEX, SOURCE);

const parser = new Parser({
  lngs: ['en', 'ru'],
  keySeparator: false,
  nsSeparator: false,
});

const customHandler = (key: string) => parser.set(key, key);

files.forEach((filepath: string) => {
  let content;
  try {
    content = typescript.transpileModule(fs.readFileSync(filepath, 'utf-8'), {
      compilerOptions: {
        target: ScriptTarget.ES2019,
      },
      fileName: filepath,
    }).outputText;
  } catch {}

  if (!content) return;

  parser.parseFuncFromString(
    content,
    { list: ['i18next.t', 't'] },
    customHandler
  );
  parser.parseTransFromString(content, customHandler);
});

const parserResults = parser.get();

// Write RU version.
fs.writeFileSync(
  RU_PATH,
  JSON.stringify({ ...parserResults.ru.translation, ...ru }, null, 2)
);
// Write EN version.
fs.writeFileSync(
  EN_PATH,
  JSON.stringify({ ...parserResults.en.translation, ...en }, null, 2)
);
