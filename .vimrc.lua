local lsp = require("lspconfig")

lsp.nixd.setup {}
lsp.bashls.setup{}
lsp.ts_ls.setup {
  cmd = {"npm", "exec", "--", "typescript-language-server", "--stdio" }
}


vim.cmd [[autocmd BufWritePre *.nix,*.sh,*.ts lua vim.lsp.buf.format({ async = false })]]
