<script setup lang="ts">
import DiagramFrame from '../ui/DiagramFrame.vue'
</script>

<template>
  <DiagramFrame
    kicker="Client interoperability"
    badge="Engineering"
    title="Building for the realities of AI clients, not just protocol compliance."
    :panel="false"
  >
    <!-- SVG Architecture Diagram -->
    <div
      class="relative w-full rounded-lg overflow-hidden border border-[var(--border)] bg-[#141416]"
    >
      <svg
        viewBox="0 0 740 500"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full max-w-full h-auto block select-none"
        role="img"
        aria-label="Engineering for AI Client Interoperability Diagram"
      >
        <defs>
          <linearGradient id="clientGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#22222a" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#181820" stop-opacity="0.95" />
          </linearGradient>

          <linearGradient id="gatewayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2a2038" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#1a1424" stop-opacity="0.98" />
          </linearGradient>

          <linearGradient id="transportDecisionGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1e2238" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#141728" stop-opacity="0.98" />
          </linearGradient>

          <filter id="interopGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Subtle Background Grid -->
        <g opacity="0.06" stroke="#BEAED3" stroke-width="0.5">
          <line x1="0" y1="50" x2="740" y2="50" />
          <line x1="0" y1="100" x2="740" y2="100" />
          <line x1="0" y1="150" x2="740" y2="150" />
          <line x1="0" y1="200" x2="740" y2="200" />
          <line x1="0" y1="250" x2="740" y2="250" />
          <line x1="0" y1="300" x2="740" y2="300" />
          <line x1="0" y1="350" x2="740" y2="350" />
          <line x1="0" y1="400" x2="740" y2="400" />
          <line x1="0" y1="450" x2="740" y2="450" />
          <line x1="100" y1="0" x2="100" y2="500" />
          <line x1="200" y1="0" x2="200" y2="500" />
          <line x1="300" y1="0" x2="300" y2="500" />
          <line x1="400" y1="0" x2="400" y2="500" />
          <line x1="500" y1="0" x2="500" y2="500" />
          <line x1="600" y1="0" x2="600" y2="500" />
          <line x1="700" y1="0" x2="700" y2="500" />
        </g>

        <!-- ============================================================== -->
        <!-- SECTION 1: DIVERSE AI CLIENT ECOSYSTEM (LEFT) -->
        <!-- ============================================================== -->
        <g transform="translate(20, 25)">
          <rect
            x="0"
            y="0"
            width="200"
            height="450"
            rx="8"
            fill="url(#clientGrad)"
            stroke="#3a3a46"
            stroke-width="1.2"
          />
          <rect x="0" y="0" width="200" height="30" rx="8" fill="#25252e" />
          <text
            x="100"
            y="19"
            font-size="10"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#e5e5e5"
          >
            AI Client Ecosystem
          </text>

          <!-- Client Card 1: Desktop Host -->
          <g transform="translate(12, 42)">
            <rect
              x="0"
              y="0"
              width="176"
              height="74"
              rx="5"
              fill="#141418"
              stroke="#33333f"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="18"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              Desktop Agent Hosts
            </text>
            <text x="10" y="32" font-size="8" font-family="monospace" fill="#aaa">
              e.g. Claude Desktop
            </text>
            <text x="10" y="48" font-size="7.5" font-family="sans-serif" fill="#888">
              • Strict local subprocess sandbox
            </text>
            <text x="10" y="62" font-size="7.5" font-family="sans-serif" fill="#888">
              • Direct stdio protocol stream
            </text>
          </g>

          <!-- Client Card 2: IDE Agents -->
          <g transform="translate(12, 126)">
            <rect
              x="0"
              y="0"
              width="176"
              height="74"
              rx="5"
              fill="#141418"
              stroke="#33333f"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="18"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              IDE &amp; Editor Agents
            </text>
            <text x="10" y="32" font-size="8" font-family="monospace" fill="#aaa">
              e.g. Cursor / VS Code
            </text>
            <text x="10" y="48" font-size="7.5" font-family="sans-serif" fill="#888">
              • Multi-turn tool orchestration
            </text>
            <text x="10" y="62" font-size="7.5" font-family="sans-serif" fill="#888">
              • Domain egress boundaries
            </text>
          </g>

          <!-- Client Card 3: Autonomous Runtimes -->
          <g transform="translate(12, 210)">
            <rect
              x="0"
              y="0"
              width="176"
              height="74"
              rx="5"
              fill="#141418"
              stroke="#33333f"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="18"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              Agent Frameworks &amp; CLIs
            </text>
            <text x="10" y="32" font-size="8" font-family="monospace" fill="#aaa">
              Custom MCP Clients
            </text>
            <text x="10" y="48" font-size="7.5" font-family="sans-serif" fill="#888">
              • Remote SSE / HTTP connections
            </text>
            <text x="10" y="62" font-size="7.5" font-family="sans-serif" fill="#888">
              • Autonomous goal execution
            </text>
          </g>

          <!-- Standard Connection Label -->
          <g transform="translate(12, 298)">
            <rect
              x="0"
              y="0"
              width="176"
              height="136"
              rx="5"
              fill="#111115"
              stroke="#2d2d38"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="18"
              font-size="8"
              font-family="monospace"
              font-weight="700"
              fill="#a5b4fc"
            >
              UNIVERSAL CLIENT TARGET:
            </text>
            <text x="10" y="34" font-size="7.5" font-family="sans-serif" fill="#aaa">
              The integration operates
            </text>
            <text x="10" y="48" font-size="7.5" font-family="sans-serif" fill="#aaa">
              consistently across diverse
            </text>
            <text x="10" y="62" font-size="7.5" font-family="sans-serif" fill="#aaa">
              client runtimes without
            </text>
            <text x="10" y="76" font-size="7.5" font-family="sans-serif" fill="#aaa">
              requiring client-specific
            </text>
            <text x="10" y="90" font-size="7.5" font-family="sans-serif" fill="#aaa">
              customizations or hacks.
            </text>
            <text x="10" y="114" font-size="7" font-family="monospace" fill="#34d399">
              ✓ Official Protocol Standard
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- SECTION 2: STANDARDIZED MCP PROTOCOL GATEWAY (CENTER) -->
        <!-- ============================================================== -->
        <g transform="translate(245, 25)">
          <rect
            x="0"
            y="0"
            width="235"
            height="450"
            rx="8"
            fill="url(#gatewayGrad)"
            stroke="#BEAED3"
            stroke-width="1.8"
          />
          <!-- Header -->
          <rect x="0" y="0" width="235" height="34" rx="8" fill="#361667" />
          <text
            x="117"
            y="18"
            font-size="11"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#BEAED3"
          >
            Poptin MCP Server
          </text>
          <text
            x="117"
            y="28"
            font-size="7.5"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
            opacity="0.8"
          >
            JSON-RPC 2.0 Protocol Engine
          </text>

          <!-- Core Capability 1: Resource Discovery -->
          <g transform="translate(12, 46)">
            <rect
              x="0"
              y="0"
              width="211"
              height="76"
              rx="5"
              fill="#161220"
              stroke="#483663"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="8.5"
              font-family="monospace"
              font-weight="700"
              fill="#BEAED3"
            >
              1. Resource Discovery
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#c4b5fd">
              resources/list · resources/read
            </text>
            <text x="10" y="46" font-size="7.5" font-family="sans-serif" fill="#bbb">
              Supplies contextual domain state to the
            </text>
            <text x="10" y="58" font-size="7.5" font-family="sans-serif" fill="#bbb">
              agent before action dispatch.
            </text>
          </g>

          <!-- Core Capability 2: Strict Schema Enforcement -->
          <g transform="translate(12, 134)">
            <rect
              x="0"
              y="0"
              width="211"
              height="76"
              rx="5"
              fill="#161220"
              stroke="#483663"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="8.5"
              font-family="monospace"
              font-weight="700"
              fill="#BEAED3"
            >
              2. Strict Schema Validation
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#c4b5fd">
              tools/list (JSON Schema definitions)
            </text>
            <text x="10" y="46" font-size="7.5" font-family="sans-serif" fill="#bbb">
              Strict payload schemas prevent agent
            </text>
            <text x="10" y="58" font-size="7.5" font-family="sans-serif" fill="#bbb">
              hallucinations and unguided retries.
            </text>
          </g>

          <!-- Core Capability 3: Deterministic Tool Dispatch -->
          <g transform="translate(12, 220)">
            <rect
              x="0"
              y="0"
              width="211"
              height="76"
              rx="5"
              fill="#161220"
              stroke="#483663"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="8.5"
              font-family="monospace"
              font-weight="700"
              fill="#BEAED3"
            >
              3. Deterministic Execution
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#c4b5fd">
              tools/call (Action handler)
            </text>
            <text x="10" y="46" font-size="7.5" font-family="sans-serif" fill="#bbb">
              Translates validated agent intent into
            </text>
            <text x="10" y="58" font-size="7.5" font-family="sans-serif" fill="#bbb">
              internal application service invocations.
            </text>
          </g>

          <!-- Core Capability 4: Structured Feedback -->
          <g transform="translate(12, 306)">
            <rect
              x="0"
              y="0"
              width="211"
              height="76"
              rx="5"
              fill="#161220"
              stroke="#483663"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="8.5"
              font-family="monospace"
              font-weight="700"
              fill="#BEAED3"
            >
              4. Structured Responses
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#c4b5fd">
              JSON-RPC Results &amp; Error Payloads
            </text>
            <text x="10" y="46" font-size="7.5" font-family="sans-serif" fill="#bbb">
              Returns machine-readable results so
            </text>
            <text x="10" y="58" font-size="7.5" font-family="sans-serif" fill="#bbb">
              agents can adjust their next step.
            </text>
          </g>

          <!-- Registry Seal -->
          <g transform="translate(12, 392)">
            <rect
              x="0"
              y="0"
              width="211"
              height="52"
              rx="5"
              fill="#130e1c"
              stroke="#361667"
              stroke-width="1"
            />
            <text
              x="10"
              y="18"
              font-size="8"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              OFFICIAL REGISTRY PUBLICATION:
            </text>
            <text x="10" y="34" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              Published on the MCP Registry and community catalogs.
            </text>
            <text
              x="10"
              y="46"
              font-size="7.5"
              font-family="monospace"
              font-weight="600"
              fill="#34d399"
            >
              ✓ Open Source Repository Published
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- SECTION 3: ENGINEERING DECISION: UPLOAD INTEROPERABILITY (RIGHT) -->
        <!-- ============================================================== -->
        <g transform="translate(505, 25)">
          <rect
            x="0"
            y="0"
            width="215"
            height="450"
            rx="8"
            fill="url(#transportDecisionGrad)"
            stroke="#818cf8"
            stroke-width="1.5"
          />
          <!-- Header -->
          <rect x="0" y="0" width="215" height="34" rx="8" fill="#202644" />
          <text
            x="107"
            y="17"
            font-size="10"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#c7d2fe"
          >
            Upload Interoperability
          </text>
          <text
            x="107"
            y="28"
            font-size="7.5"
            font-family="monospace"
            text-anchor="middle"
            fill="#a5b4fc"
            opacity="0.8"
          >
            Real-World Architectural Decision
          </text>

          <!-- Problem Box: Direct S3 Barrier -->
          <g transform="translate(10, 44)">
            <rect
              x="0"
              y="0"
              width="195"
              height="130"
              rx="5"
              fill="#181318"
              stroke="#4a2525"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8"
              font-family="sans-serif"
              font-weight="700"
              fill="#f87171"
            >
              INITIAL APPROACH: DIRECT S3
            </text>
            <text x="8" y="30" font-size="7.5" font-family="monospace" fill="#fca5a5">
              Client ──▶ Presigned AWS S3
            </text>
            <line x1="8" y1="36" x2="187" y2="36" stroke="#332222" stroke-width="0.8" />

            <text
              x="8"
              y="50"
              font-size="7.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#e5e5e5"
            >
              Client Sandbox Friction:
            </text>
            <text x="8" y="64" font-size="7" font-family="sans-serif" fill="#999">
              • AI clients enforce origin allowlists
            </text>
            <text x="8" y="76" font-size="7" font-family="sans-serif" fill="#999">
              • Direct AWS S3 bucket destinations
            </text>
            <text x="8" y="88" font-size="7" font-family="sans-serif" fill="#999">
              blocked without manual config
            </text>
            <text x="8" y="100" font-size="7" font-family="sans-serif" fill="#999">
              • Broke autonomous execution
            </text>
            <text x="8" y="118" font-size="7" font-family="monospace" fill="#ef4444">
              ✗ Interoperability Failure
            </text>
          </g>

          <!-- Refined Solution: MCP Host Transport -->
          <g transform="translate(10, 184)">
            <rect
              x="0"
              y="0"
              width="195"
              height="152"
              rx="5"
              fill="#131a2b"
              stroke="#34d399"
              stroke-width="1.2"
            />
            <text
              x="8"
              y="16"
              font-size="8"
              font-family="sans-serif"
              font-weight="700"
              fill="#34d399"
            >
              REFINED: MCP HOST TRANSPORT
            </text>
            <text x="8" y="30" font-size="7.5" font-family="monospace" fill="#a7f3d0">
              Client ──▶ MCP Host ──▶ App
            </text>
            <line x1="8" y1="36" x2="187" y2="36" stroke="#223a30" stroke-width="0.8" />

            <text
              x="8"
              y="50"
              font-size="7.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#e5e5e5"
            >
              Architecture Adaptation:
            </text>
            <text x="8" y="64" font-size="7" font-family="sans-serif" fill="#a5b4fc">
              • Moved upload transport directly
            </text>
            <text x="8" y="76" font-size="7" font-family="sans-serif" fill="#a5b4fc">
              onto the trusted MCP host
            </text>
            <text x="8" y="88" font-size="7" font-family="sans-serif" fill="#a5b4fc">
              • Client communicates solely with
            </text>
            <text x="8" y="100" font-size="7" font-family="sans-serif" fill="#a5b4fc">
              single already-trusted domain
            </text>
            <text x="8" y="112" font-size="7" font-family="sans-serif" fill="#a5b4fc">
              • Host handles backend S3 relay
            </text>
            <text
              x="8"
              y="130"
              font-size="7.5"
              font-family="monospace"
              font-weight="700"
              fill="#34d399"
            >
              ✓ 100% Client Compatibility
            </text>
            <text x="8" y="142" font-size="7" font-family="sans-serif" fill="#6ee7b7">
              Zero client reconfiguration needed
            </text>
          </g>

          <!-- Core Takeaway -->
          <g transform="translate(10, 346)">
            <rect
              x="0"
              y="0"
              width="195"
              height="88"
              rx="5"
              fill="#141829"
              stroke="#48568c"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8"
              font-family="sans-serif"
              font-weight="700"
              fill="#c7d2fe"
            >
              ENGINEERING PRINCIPLE:
            </text>
            <text x="8" y="32" font-size="7.5" font-family="sans-serif" fill="#bbb">
              "Building for the realities
            </text>
            <text x="8" y="46" font-size="7.5" font-family="sans-serif" fill="#bbb">
              of AI clients, not just
            </text>
            <text x="8" y="60" font-size="7.5" font-family="sans-serif" fill="#bbb">
              protocol compliance."
            </text>
            <text x="8" y="78" font-size="7" font-family="monospace" fill="#818cf8">
              Adapted to client constraints
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- CONNECTION PATHWAYS & FLOW SIGNALS -->
        <!-- ============================================================== -->
        <!-- Path: Clients -> MCP Server -->
        <g id="path-clients-to-mcp">
          <line
            x1="220"
            y1="80"
            x2="245"
            y2="80"
            stroke="#BEAED3"
            stroke-width="2"
            stroke-dasharray="3 3"
          />
          <line
            x1="220"
            y1="160"
            x2="245"
            y2="160"
            stroke="#BEAED3"
            stroke-width="2"
            stroke-dasharray="3 3"
          />
          <line
            x1="220"
            y1="245"
            x2="245"
            y2="245"
            stroke="#BEAED3"
            stroke-width="2"
            stroke-dasharray="3 3"
          />
          <circle cx="232" cy="160" r="4" fill="#BEAED3" filter="url(#interopGlow)" />
        </g>

        <!-- Path: MCP Server -> Upload Transport Bridge -->
        <g id="path-mcp-to-upload">
          <line x1="480" y1="245" x2="505" y2="245" stroke="#818cf8" stroke-width="2" />
          <circle cx="492" cy="245" r="4" fill="#818cf8" filter="url(#interopGlow)" />
        </g>
      </svg>
    </div>

    <!-- Bottom Takeaway Summary Bar -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
      <div class="p-2.5 rounded-lg bg-[var(--bg)]/80 border border-[var(--border)]">
        <span class="text-xs font-bold text-[var(--primary)] block mb-1"
          >Standard Protocol Layer</span
        >
        <p class="text-[11px] text-[var(--text-muted)] font-sans leading-relaxed">
          Structured resources and deterministic JSON-RPC tool contracts prevent agent
          hallucination.
        </p>
      </div>

      <div class="p-2.5 rounded-lg bg-[var(--bg)]/80 border border-indigo-400/40 bg-indigo-500/5">
        <span class="text-xs font-bold text-indigo-300 block mb-1">Upload Architecture Pivot</span>
        <p class="text-[11px] text-[var(--text)] font-sans leading-relaxed">
          Refactored S3 transport to the MCP host, eliminating sandbox allowlist friction across AI
          clients.
        </p>
      </div>

      <div class="p-2.5 rounded-lg bg-[var(--bg)]/80 border border-[var(--border)]">
        <span class="text-xs font-bold text-emerald-400 block mb-1"
          >Universal Client Readiness</span
        >
        <p class="text-[11px] text-[var(--text-muted)] font-sans leading-relaxed">
          Verified out-of-the-box execution across desktop hosts, developer IDEs, and custom
          runtimes.
        </p>
      </div>
    </div>
  </DiagramFrame>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  svg * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
