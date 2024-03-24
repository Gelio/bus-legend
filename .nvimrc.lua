local utils = require("lsp.utils")
local default_server_config = utils.base_config

require("lspconfig").tailwindcss.setup(default_server_config)
