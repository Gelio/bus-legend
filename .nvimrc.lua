local utils = require("lsp.utils")
local default_server_config = utils.base_config

require("lspconfig").tailwindcss.setup(default_server_config)

require("cmp").setup.filetype("svelte", {
	sources = require("lsp.cmp").prepare_sources({
		-- NOTE: keeps the autocomplete for tailwindcss classes that include dash
		-- https://github.com/xna00/unocss-language-server?tab=readme-ov-file#usage
		lsp_trigger_characters = { "-" },
	}),
})
