import js from "@eslint/js"
import pluginVue from 'eslint-plugin-vue'

export default [
    {
        ignores: [
            "dist/**/*",
            "node_modules/**/*",
            "public/service-worker.js",
        ],
    },
    ...pluginVue.configs['flat/recommended'],
    js.configs.recommended,
    {
        rules: {
            semi: ["error", "never"],
        },
        languageOptions: {
            ecmaVersion: "latest",
            globals: {
                // Browser globals
                window: "readonly",
                document: "readonly",
                navigator: "readonly",
                console: "readonly",
                alert: "readonly",
                // Service worker globals
                self: "readonly",
                caches: "readonly",
                fetch: "readonly",
                addEventListener: "readonly",
                removeEventListener: "readonly",
                dispatchEvent: "readonly",
                postMessage: "readonly",
                importScripts: "readonly",
                skipWaiting: "readonly",
                clients: "readonly",
                claim: "readonly",
                registration: "readonly",
                updateViaCache: "readonly",
                cache: "readonly",
                match: "readonly",
                add: "readonly",
                put: "readonly",
                delete: "readonly",
                keys: "readonly",
                open: "readonly",
                addAll: "readonly",
                deleteAll: "readonly",
                matchAll: "readonly",
                putAll: "readonly",
            },
        },
        files: [
            "**/*.js",
            "**/*.jsx",
            "**/*.vue",
            "**/*.cjs",
            "**/*.mjs",
        ],
    }
]
