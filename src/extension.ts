// based on https://github.com/microsoft/qsharp-compiler/blob/e1a43f3da021fc94d7214ea197ba3905ff96695c/src/VSCodeExtension/src/languageServer.ts
import * as fs from "fs";
import * as vscode from "vscode";
import { LanguageClient, ServerOptions } from "vscode-languageclient/node";

let client: LanguageClient;

export async function activate(context: vscode.ExtensionContext) {
    console.log("SanScript Extension Activated");

    await startLanguageServer(context);
}

export async function deactivate() {
    console.log("SanScript Extension Deactivated");

    // TODO:
    // await client?.stop();
}

async function startLanguageServer(context: vscode.ExtensionContext) {
    console.log("[SanScript] Language server not yet implemented.");
    // TODO:
    // const config = vscode.workspace.getConfiguration();
    // const exePath = config.get("sanscript.languageServerPath") as string;

    // if (!(await isValidExe(exePath))) {
    //     console.log(`[SanScript] sanscript.languageServerPath = '${exePath}' is not an executable`);
    //     return;
    // }

    // const serverOptions = getServerOptions(exePath);

    // const clientOptions: LanguageClientOptions = {
    //     documentSelector: [{ scheme: "file", language: "sanscript" }],
    //     markdown: {
    //         isTrusted: true,
    //     },
    // };

    // client = new LanguageClient("sanscript", "SanScript", serverOptions, clientOptions);

    // await client.start();

    // console.log("[SanScript] Started Language Client.");
}

function getServerOptions(exePath: string): ServerOptions {
    const serverOptions: ServerOptions = {
        run: {
            command: exePath,
            args: [],
            options: {},
        },
        debug: {
            command: exePath,
            args: ["--launch-debugger"],
            options: {},
        },
    };

    return serverOptions;
}

async function isValidExe(exePath: string): Promise<boolean> {
    if (exePath === undefined || exePath === null) {
        return false;
    }

    try {
        await fs.promises.access(exePath, fs.constants.X_OK);
        return true;
    } catch {
        return false;
    }
}
