<script setup lang="ts">
// Architectural Decision: MCP Host Upload Transport vs Direct AWS S3
</script>

<template>
  <div class="w-full flex flex-col gap-2 font-sans select-none">
    <div class="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
      <span class="text-xs font-mono font-medium text-[var(--primary)] uppercase tracking-wider">
        Architecture Decision: AI Client Interoperability
      </span>
      <span class="text-[11px] font-mono text-indigo-400">
        Direct AWS S3 vs MCP Host Transport
      </span>
    </div>

    <div
      class="relative w-full rounded-lg overflow-hidden border border-[var(--border)] bg-[#141416]"
    >
      <svg
        viewBox="0 0 720 440"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto block"
        role="img"
        aria-label="Upload transport architecture comparison: direct AWS S3 vs MCP Host proxy"
      >
        <!-- LEFT: INITIAL IMPLEMENTATION (DIRECT AWS S3) -->
        <g transform="translate(15, 20)">
          <!-- Container -->
          <rect
            x="0"
            y="0"
            width="335"
            height="390"
            rx="8"
            fill="#171419"
            stroke="#4a2a2a"
            stroke-width="1.5"
          />
          <!-- Header -->
          <rect x="0" y="0" width="335" height="34" rx="8" fill="#331818" />
          <text
            x="167"
            y="18"
            font-size="11"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#f87171"
          >
            INITIAL DESIGN: Direct AWS S3 Upload
          </text>
          <text
            x="167"
            y="28"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#fca5a5"
            opacity="0.8"
          >
            Presigned POST Fields to External Bucket
          </text>

          <!-- Step 1: Agent calls MCP -->
          <g transform="translate(15, 48)">
            <rect
              x="0"
              y="0"
              width="305"
              height="42"
              rx="4"
              fill="#221515"
              stroke="#442222"
              stroke-width="0.8"
            />
            <text x="10" y="16" font-size="9" font-family="monospace" fill="#e5e5e5">
              1. Agent requests upload URL
            </text>
            <text x="10" y="30" font-size="8" font-family="monospace" fill="#aaa">
              MCP returns S3 bucket presigned POST fields
            </text>
          </g>

          <!-- Step 2: Direct Upload attempt -->
          <g transform="translate(15, 102)">
            <rect
              x="0"
              y="0"
              width="305"
              height="52"
              rx="4"
              fill="#2a1616"
              stroke="#552222"
              stroke-width="0.8"
            />
            <text x="10" y="16" font-size="9" font-family="monospace" fill="#fca5a5">
              2. POST https://poptin-assets.s3.aws...
            </text>
            <text x="10" y="30" font-size="8" font-family="sans-serif" fill="#e5e5e5">
              Agent attempts direct multipart POST to AWS S3
            </text>
            <text x="10" y="44" font-size="7.5" font-family="sans-serif" fill="#888">
              Bypasses MCP host connection
            </text>
          </g>

          <!-- Step 3: Client Failure / Block -->
          <g transform="translate(15, 166)">
            <rect
              x="0"
              y="0"
              width="305"
              height="110"
              rx="6"
              fill="#301313"
              stroke="#e06c75"
              stroke-width="1.2"
            />
            <text
              x="12"
              y="22"
              font-size="10"
              font-family="sans-serif"
              font-weight="700"
              fill="#f87171"
            >
              ❌ INTEROPERABILITY FAILURE
            </text>
            <text x="12" y="42" font-size="8.5" font-family="sans-serif" fill="#e5e5e5">
              • AI Client Sandboxes restrict external domain egress
            </text>
            <text x="12" y="60" font-size="8.5" font-family="sans-serif" fill="#e5e5e5">
              • Direct AWS S3 origins blocked by client allowlists
            </text>
            <text x="12" y="78" font-size="8.5" font-family="sans-serif" fill="#e5e5e5">
              • Required out-of-band user proxy reconfiguration
            </text>
            <text x="12" y="96" font-size="8" font-family="monospace" fill="#fca5a5">
              Result: Failed autonomous execution on Claude/Cursor
            </text>
          </g>

          <!-- Summary Metric -->
          <g transform="translate(15, 290)">
            <rect
              x="0"
              y="0"
              width="305"
              height="85"
              rx="4"
              fill="#1b1212"
              stroke="#3d2020"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="20"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#f87171"
            >
              Limitation:
            </text>
            <text x="10" y="36" font-size="8" font-family="sans-serif" fill="#999">
              Assumed client environment has unconstrained HTTP
            </text>
            <text x="10" y="48" font-size="8" font-family="sans-serif" fill="#999">
              connectivity to arbitrary AWS infrastructure.
            </text>
            <text x="10" y="68" font-size="8" font-family="monospace" fill="#e06c75">
              Status: Deprecated for compatibility
            </text>
          </g>
        </g>

        <!-- RIGHT: REFACTORED ARCHITECTURE (MCP-HOSTED TRANSPORT) -->
        <g transform="translate(370, 20)">
          <!-- Container -->
          <rect
            x="0"
            y="0"
            width="335"
            height="390"
            rx="8"
            fill="#141724"
            stroke="#818cf8"
            stroke-width="1.8"
          />
          <!-- Header -->
          <rect x="0" y="0" width="335" height="34" rx="8" fill="#292e59" />
          <text
            x="167"
            y="18"
            font-size="11"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#c7d2fe"
          >
            ENGINEERED SOLUTION: MCP Host Transport
          </text>
          <text
            x="167"
            y="28"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#a5b4fc"
            opacity="0.8"
          >
            Proxied Upload Bridge via Trusted Host
          </text>

          <!-- Step 1: Agent calls MCP -->
          <g transform="translate(15, 48)">
            <rect
              x="0"
              y="0"
              width="305"
              height="42"
              rx="4"
              fill="#1b2138"
              stroke="#37436b"
              stroke-width="0.8"
            />
            <text x="10" y="16" font-size="9" font-family="monospace" fill="#e5e5e5">
              1. Agent requests upload URL
            </text>
            <text x="10" y="30" font-size="8" font-family="monospace" fill="#a5b4fc">
              MCP returns host endpoint: /mcp/upload
            </text>
          </g>

          <!-- Step 2: Stream through Host -->
          <g transform="translate(15, 102)">
            <rect
              x="0"
              y="0"
              width="305"
              height="52"
              rx="4"
              fill="#1b2138"
              stroke="#37436b"
              stroke-width="0.8"
            />
            <text x="10" y="16" font-size="9" font-family="monospace" fill="#c7d2fe">
              2. POST https://mcp.poptin.com/upload
            </text>
            <text x="10" y="30" font-size="8" font-family="sans-serif" fill="#e5e5e5">
              Agent streams design payload to already-trusted host
            </text>
            <text x="10" y="44" font-size="7.5" font-family="sans-serif" fill="#94a3b8">
              MCP server relays payload securely to AWS S3 backend
            </text>
          </g>

          <!-- Step 3: Universal Success -->
          <g transform="translate(15, 166)">
            <rect
              x="0"
              y="0"
              width="305"
              height="110"
              rx="6"
              fill="#192338"
              stroke="#34d399"
              stroke-width="1.2"
            />
            <text
              x="12"
              y="22"
              font-size="10"
              font-family="sans-serif"
              font-weight="700"
              fill="#34d399"
            >
              ✓ 100% CLIENT COMPATIBILITY
            </text>
            <text x="12" y="42" font-size="8.5" font-family="sans-serif" fill="#e5e5e5">
              • AI Clients maintain single trusted origin (MCP Host)
            </text>
            <text x="12" y="60" font-size="8.5" font-family="sans-serif" fill="#e5e5e5">
              • Zero client-side configuration or whitelisting needed
            </text>
            <text x="12" y="78" font-size="8.5" font-family="sans-serif" fill="#e5e5e5">
              • Strict payload validation enforced at the MCP proxy
            </text>
            <text x="12" y="96" font-size="8" font-family="monospace" fill="#a7f3d0">
              Result: Flawless out-of-the-box autonomous execution
            </text>
          </g>

          <!-- Summary Metric -->
          <g transform="translate(15, 290)">
            <rect
              x="0"
              y="0"
              width="305"
              height="85"
              rx="4"
              fill="#171c2f"
              stroke="#2d3758"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="20"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#818cf8"
            >
              Engineering Takeaway:
            </text>
            <text x="10" y="36" font-size="8" font-family="sans-serif" fill="#b0b0c0">
              Agentic architectures must respect client security
            </text>
            <text x="10" y="48" font-size="8" font-family="sans-serif" fill="#b0b0c0">
              sandboxes; never assume external direct network trust.
            </text>
            <text x="10" y="68" font-size="8" font-family="monospace" fill="#34d399">
              Status: Production Architecture in Registry
            </text>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
