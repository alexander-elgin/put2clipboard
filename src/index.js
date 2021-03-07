module.exports = function copy(text) {
  const textNode = document.createTextNode(text);
  document.body.appendChild(textNode);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(textNode);
    range.select();
    document.execCommand('copy');
  } else {
    const range = document.createRange();
    range.selectNodeContents(textNode);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  }

  textNode.remove();
}
