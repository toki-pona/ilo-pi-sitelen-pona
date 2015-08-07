import words from './tp-words.jsx';


export default function tpTokenize(text) {
  const lines = text.split(/[\r\n]/);
  const tokenLines = lines.map(tpTokenizeSingleLine);
  return tokenLines.reduce(joinTokenLines, []);
}

function joinTokenLines(result, tokenLine, index, all) {
  var newResult = result.concat(tokenLine);
  if(index < all.length - 1) {
    newResult.push(['newline']);
  }
  return newResult;
}

function tpTokenizeSingleLine(text) {
  return text.split(/\b/)
    .reduce(normalize, []);
}

function normalize(tokens, current) {
  const currentTrimmed = current.trim();

  if(isTpWord(current)) {
    tokens.push(['word', current]);
  } else if(isSign(currentTrimmed)) {
    tokens.push(['sign', currentTrimmed]);
  } else if(isSpace(currentTrimmed)) {
    tokens.push(['space']);
  } else {
    tokens.push(['mess', currentTrimmed]);
  }

  return tokens;
}

function isTpWord(word) {
  return -1 !== words.indexOf(word);
}

function isSign(word) {
  return word.match(/^\W+$/g);
}

function isSpace(word) {
  return '' === word;
}
