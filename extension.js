// extension.js
const vscode = require('vscode');

function activate(context) {
  // Register completion provider for Migel files
  const provider = vscode.languages.registerCompletionItemProvider(
    'migel',
    {
      provideCompletionItems(document, position) {
        const completions = [];

        // Migel keywords
        ['loop', 'fn', 'ret', 'if', 'else', 'elif', 'import', 'from', 'as', 'while'].forEach(word => {
          const item = new vscode.CompletionItem(word, vscode.CompletionItemKind.Keyword);
          item.documentation = `keyword: ${word}`;
          completions.push(item);
        });

        // Built-in functions
        ['read', 'write', 'sleep', 'exception'].forEach(word => {
          const item = new vscode.CompletionItem(word, vscode.CompletionItemKind.Function);
          item.documentation = `built-in: ${word}`;
          completions.push(item);
        });

		// Built-in variables
        ['index', 'true', 'false'].forEach(word => {
          const item = new vscode.CompletionItem(word, vscode.CompletionItemKind.Function);
          item.documentation = `built-in variable: ${word}`;
          completions.push(item);
        });

		// charcoal functions (stdlib)
        ['magicf', 'flip', 'double', 'date', 'json', 'parsejson', 'join', 'range', "magic"].forEach(word => {
          const item = new vscode.CompletionItem(word, vscode.CompletionItemKind.Function);
          item.documentation = `stdlib: ${word}`;
          completions.push(item);
        });

        return completions;
      }
    },
    '.', '=', '(' // trigger characters: after . = or (
  );

  context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};