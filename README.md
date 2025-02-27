# MATLAB MCP Server
[![smithery badge](https://smithery.ai/badge/@WilliamCloudQi/matlab-mcp-server)](https://smithery.ai/server/@WilliamCloudQi/matlab-mcp-server)
![GitHub Logo](https://github.com/WilliamCloudQi/matlab-mcp-server/blob/main/-------matlab-mcp-----.png)

A powerful MCP server that integrates MATLAB with  AI, allowing you to execute MATLAB code, generate MATLAB scripts from natural language descriptions, and access MATLAB documentation directly through your AI assistant.

## Features

### Resources
- Access MATLAB documentation via `matlab://documentation/getting-started` URI
- Get started guide with examples and usage instructions

### Tools
- `execute_matlab_code` - Execute MATLAB code and get results
  - Run any MATLAB commands or scripts
  - Option to save scripts for future reference
  - View output directly in your conversation
  
- `generate_matlab_code` - Generate MATLAB code from natural language
  - Describe what you want to accomplish in plain language
  - Get executable MATLAB code in response
  - Option to save generated scripts

## Development

Install dependencies:
```bash
npm install
```

Build the server:
```bash
npm run build
```

For development with auto-rebuild:
```bash
npm run watch
```

## Requirements

- MATLAB installed on your system
- Node.js (v14 or higher)

## Installation

### Installing via Smithery

To install MATLAB MCP Server for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@WilliamCloudQi/matlab-mcp-server):

```bash
npx -y @smithery/cli install @WilliamCloudQi/matlab-mcp-server --client claude
```

### 1. Install the package

```bash
npm install -g matlab-mcp-server
```

Or clone the repository and build it yourself:

```bash
git clone https://github.com/username/matlab-mcp-server.git
cd matlab-mcp-server
npm install
npm run build
```

### 2. Configure cline to use the server

To use with cline , add the server config:

On MacOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
On Windows: `%APPDATA%/Claude/claude_desktop_config.json`

```json
{
  "mcpServers": {
    "matlab-server": {
      "command": "node",
      "args": ["/path/to/matlab-server/build/index.js"],
      "env": {
        "MATLAB_PATH": "/path/to/matlab/executable"
      },
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Replace `/path/to/matlab/executable` with the path to your MATLAB executable:
- Windows: Usually `C:\\Program Files\\MATLAB\\R2023b\\bin\\matlab.exe`
- macOS: Usually `/Applications/MATLAB_R2023b.app/bin/matlab`
- Linux: Usually `/usr/local/MATLAB/R2023b/bin/matlab`

### Debugging

Since MCP servers communicate over stdio, debugging can be challenging. We recommend using the [MCP Inspector](https://github.com/modelcontextprotocol/inspector), which is available as a package script:

```bash
npm run inspector
```

The Inspector will provide a URL to access debugging tools in your browser.
