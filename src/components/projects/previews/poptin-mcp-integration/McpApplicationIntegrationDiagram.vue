<script setup lang="ts">
// Illustration 2: Beyond API Exposure - Direct Laravel Application Integration
</script>

<template>
  <div class="w-full flex flex-col gap-2.5 font-sans select-none">
    <!-- Header Summary Bar -->
    <div class="flex items-center justify-between pb-2 border-b border-[var(--border)]">
      <div>
        <span
          class="text-xs font-mono font-bold text-[var(--primary)] uppercase tracking-wider block"
        >
          Beyond API Exposure: Direct Application Integration
        </span>
        <span class="text-[11px] text-[var(--text-muted)]">
          One application · Multiple interaction interfaces · Expanded capabilities for AI agents
        </span>
      </div>
      <span
        class="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-mono rounded bg-[var(--secondary)] text-[var(--primary)] border border-[var(--primary)]/30"
      >
        Architecture
      </span>
    </div>

    <!-- SVG Architecture Diagram -->
    <div
      class="relative w-full rounded-lg overflow-hidden border border-[var(--border)] bg-[#141416]"
    >
      <svg
        viewBox="0 0 740 500"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto block select-none"
        role="img"
        aria-label="Beyond API Exposure: Direct Laravel Application Integration Diagram"
      >
        <defs>
          <!-- Gradients -->
          <linearGradient id="mcpGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#361667" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#1f1530" stop-opacity="0.95" />
          </linearGradient>

          <linearGradient id="laravelCoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#241a32" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#171320" stop-opacity="0.98" />
          </linearGradient>

          <linearGradient id="restGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#222228" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#18181d" stop-opacity="0.9" />
          </linearGradient>

          <filter id="mcpGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Background subtle grid -->
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
        <!-- INTERFACE A: EXISTING PUBLIC REST API (TOP LEFT) -->
        <!-- ============================================================== -->
        <g transform="translate(20, 25)">
          <!-- Outer Box -->
          <rect
            x="0"
            y="0"
            width="280"
            height="180"
            rx="8"
            fill="url(#restGradient)"
            stroke="#3a3a46"
            stroke-width="1.2"
          />
          <!-- Header -->
          <rect x="0" y="0" width="280" height="28" rx="8" fill="#25252e" />
          <text x="12" y="18" font-size="10" font-family="monospace" font-weight="700" fill="#999">
            INTERFACE A: EXISTING REST API
          </text>
          <text x="268" y="18" font-size="8" font-family="monospace" text-anchor="end" fill="#666">
            TRADITIONAL
          </text>

          <!-- Consumers -->
          <g transform="translate(12, 38)">
            <text x="0" y="11" font-size="8" font-family="monospace" fill="#777">
              CLIENT CONSUMERS:
            </text>
            <rect
              x="0"
              y="16"
              width="256"
              height="22"
              rx="4"
              fill="#141418"
              stroke="#2d2d38"
              stroke-width="0.8"
            />
            <text x="8" y="30" font-size="8.5" font-family="sans-serif" fill="#aaa">
              Web Dashboards · Third-Party Integrations · Webhooks
            </text>
          </g>

          <!-- API Capabilities -->
          <g transform="translate(12, 85)">
            <rect
              x="0"
              y="0"
              width="256"
              height="58"
              rx="4"
              fill="#141418"
              stroke="#2d2d38"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#bbb"
            >
              • Analytics queries &amp; reporting endpoints
            </text>
            <text
              x="8"
              y="32"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#bbb"
            >
              • Predefined actionable CRUD workflows
            </text>
            <text x="8" y="48" font-size="8" font-family="sans-serif" fill="#666">
              Bounded request/response · No agentic reasoning layer
            </text>
          </g>

          <text x="12" y="165" font-size="7.5" font-family="monospace" fill="#666">
            Status: Maintained in parallel for traditional clients
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- INTERFACE B: POPTIN MCP INTEGRATION (BOTTOM LEFT - HIGHLIGHTED) -->
        <!-- ============================================================== -->
        <g transform="translate(20, 230)">
          <!-- Outer Box -->
          <rect
            x="0"
            y="0"
            width="280"
            height="245"
            rx="8"
            fill="url(#mcpGradient)"
            stroke="#BEAED3"
            stroke-width="1.8"
          />
          <!-- Header -->
          <rect x="0" y="0" width="280" height="32" rx="8" fill="#361667" />
          <text
            x="12"
            y="20"
            font-size="10.5"
            font-family="sans-serif"
            font-weight="700"
            fill="#BEAED3"
          >
            INTERFACE B: MCP INTEGRATION
          </text>
          <text
            x="268"
            y="20"
            font-size="8"
            font-family="monospace"
            text-anchor="end"
            fill="#c4b5fd"
          >
            AI-NATIVE
          </text>

          <!-- Consumers -->
          <g transform="translate(12, 42)">
            <text x="0" y="11" font-size="8" font-family="monospace" fill="#c4b5fd">
              AI AGENT CLIENTS:
            </text>
            <rect
              x="0"
              y="16"
              width="256"
              height="24"
              rx="4"
              fill="#14101e"
              stroke="#483863"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="31"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#BEAED3"
            >
              Claude · Cursor · Autonomous Agent Runtimes
            </text>
          </g>

          <!-- MCP Layer Features -->
          <g transform="translate(12, 94)">
            <!-- MCP Resources -->
            <g transform="translate(0, 0)">
              <rect
                x="0"
                y="0"
                width="256"
                height="38"
                rx="4"
                fill="#14101e"
                stroke="#483863"
                stroke-width="0.8"
              />
              <text
                x="8"
                y="15"
                font-size="8.5"
                font-family="monospace"
                font-weight="700"
                fill="#BEAED3"
              >
                MCP RESOURCES (Context Discovery)
              </text>
              <text x="8" y="29" font-size="8" font-family="sans-serif" fill="#d1d5db">
                poptin://domains (verified sending domains, DNS records)
              </text>
            </g>

            <!-- MCP Tools -->
            <g transform="translate(0, 44)">
              <rect
                x="0"
                y="0"
                width="256"
                height="38"
                rx="4"
                fill="#14101e"
                stroke="#483863"
                stroke-width="0.8"
              />
              <text
                x="8"
                y="15"
                font-size="8.5"
                font-family="monospace"
                font-weight="700"
                fill="#BEAED3"
              >
                MCP TOOLS (Action Orchestration)
              </text>
              <text x="8" y="29" font-size="8" font-family="sans-serif" fill="#d1d5db">
                Structured tool contracts · Deterministic execution
              </text>
            </g>

            <!-- Expanded Access Highlight -->
            <g transform="translate(0, 88)">
              <rect
                x="0"
                y="0"
                width="256"
                height="40"
                rx="4"
                fill="#24143a"
                stroke="#BEAED3"
                stroke-width="0.8"
              />
              <text
                x="8"
                y="16"
                font-size="8.5"
                font-family="sans-serif"
                font-weight="700"
                fill="#c4b5fd"
              >
                Direct Internal Capabilities:
              </text>
              <text x="8" y="30" font-size="8" font-family="sans-serif" fill="#BEAED3">
                Exposes internal services NOT available on public REST APIs
              </text>
            </g>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- CENTRAL ARCHITECTURAL TAKEAWAY BADGE -->
        <!-- ============================================================== -->
        <g transform="translate(320, 25)">
          <rect
            x="0"
            y="0"
            width="120"
            height="450"
            rx="8"
            fill="#16141d"
            stroke="#3a2f4c"
            stroke-width="1"
            stroke-dasharray="3 3"
          />
          <text
            x="60"
            y="28"
            font-size="8.5"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#BEAED3"
          >
            ARCHITECTURAL
          </text>
          <text
            x="60"
            y="42"
            font-size="8.5"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#BEAED3"
          >
            DISTINCTION
          </text>

          <line x1="15" y1="56" x2="105" y2="56" stroke="#3a2f4c" stroke-width="1" />

          <!-- Key Insight Callouts rotated/stacked -->
          <g transform="translate(10, 75)">
            <rect
              x="0"
              y="0"
              width="100"
              height="95"
              rx="4"
              fill="#1b1724"
              stroke="#483a5e"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="7.5"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              NOT A WRAPPER:
            </text>
            <text x="8" y="32" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              MCP does not simply
            </text>
            <text x="8" y="44" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              forward calls to
            </text>
            <text x="8" y="56" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              public REST APIs.
            </text>
            <text
              x="8"
              y="74"
              font-size="7"
              font-family="sans-serif"
              font-weight="600"
              fill="#a5b4fc"
            >
              Direct
            </text>
            <text
              x="8"
              y="86"
              font-size="7"
              font-family="sans-serif"
              font-weight="600"
              fill="#a5b4fc"
            >
              application bridge.
            </text>
          </g>

          <g transform="translate(10, 190)">
            <rect
              x="0"
              y="0"
              width="100"
              height="115"
              rx="4"
              fill="#1b1724"
              stroke="#483a5e"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="7.5"
              font-family="sans-serif"
              font-weight="700"
              fill="#34d399"
            >
              EXPANDED SCOPE:
            </text>
            <text x="8" y="32" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              Unlocks multi-step
            </text>
            <text x="8" y="44" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              orchestration:
            </text>
            <text x="8" y="60" font-size="7" font-family="sans-serif" fill="#9ca3af">
              • Context discovery
            </text>
            <text x="8" y="74" font-size="7" font-family="sans-serif" fill="#9ca3af">
              • Dynamic schemas
            </text>
            <text x="8" y="88" font-size="7" font-family="sans-serif" fill="#9ca3af">
              • Streamed uploads
            </text>
            <text x="8" y="102" font-size="7" font-family="sans-serif" fill="#9ca3af">
              • Queue dispatch
            </text>
          </g>

          <g transform="translate(10, 325)">
            <rect
              x="0"
              y="0"
              width="100"
              height="105"
              rx="4"
              fill="#1b1724"
              stroke="#483a5e"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="7.5"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              COEXISTENCE:
            </text>
            <text x="8" y="32" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              REST &amp; MCP serve
            </text>
            <text x="8" y="44" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              different needs on
            </text>
            <text x="8" y="56" font-size="7" font-family="sans-serif" fill="#b0b0c0">
              the same foundation.
            </text>
            <text
              x="8"
              y="76"
              font-size="7"
              font-family="sans-serif"
              font-weight="600"
              fill="#BEAED3"
            >
              One application,
            </text>
            <text
              x="8"
              y="88"
              font-size="7"
              font-family="sans-serif"
              font-weight="600"
              fill="#BEAED3"
            >
              two interfaces.
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- THE UNDERLYING LARAVEL APPLICATION CORE (RIGHT) -->
        <!-- ============================================================== -->
        <g transform="translate(460, 25)">
          <!-- Core Container -->
          <rect
            x="0"
            y="0"
            width="260"
            height="450"
            rx="10"
            fill="url(#laravelCoreGradient)"
            stroke="#453359"
            stroke-width="1.5"
          />
          <!-- Core Header -->
          <rect x="0" y="0" width="260" height="34" rx="10" fill="#2d1c44" />
          <text
            x="130"
            y="21"
            font-size="11"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#BEAED3"
          >
            Application Infrastructure
          </text>
          <text
            x="130"
            y="31"
            font-size="7.5"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
            opacity="0.8"
          >
            Existing Core Backend Logic &amp; Data Layer
          </text>

          <!-- Module 1: Domain & Account Registry -->
          <g transform="translate(14, 46)">
            <rect
              x="0"
              y="0"
              width="232"
              height="52"
              rx="5"
              fill="#181324"
              stroke="#3b2b4d"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#e5e5e5"
            >
              Domain Verification &amp; Account Context
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              DomainService::getVerifiedSendingDomains()
            </text>
            <text x="10" y="44" font-size="7.5" font-family="sans-serif" fill="#34d399">
              ✓ Exposed via MCP Resources (poptin://domains)
            </text>
          </g>

          <!-- Module 2: Business Logic & Workflow Services -->
          <g transform="translate(14, 108)">
            <rect
              x="0"
              y="0"
              width="232"
              height="52"
              rx="5"
              fill="#181324"
              stroke="#3b2b4d"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#e5e5e5"
            >
              Business Logic &amp; Workflow Services
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              Multi-step orchestration · State coordination
            </text>
            <text x="10" y="44" font-size="7.5" font-family="sans-serif" fill="#BEAED3">
              ✓ Exposed via both MCP Tools and REST API
            </text>
          </g>

          <!-- Module 3: Internal Services (MCP-only) -->
          <g transform="translate(14, 170)">
            <rect
              x="0"
              y="0"
              width="232"
              height="56"
              rx="5"
              fill="#181324"
              stroke="#3b2b4d"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#e5e5e5"
            >
              Internal Application Services
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              Internal handlers · Managed transport bridges
            </text>
            <text x="10" y="44" font-size="7.5" font-family="sans-serif" fill="#c4b5fd">
              ★ Exposed directly to MCP — not via public REST API
            </text>
            <text x="10" y="53" font-size="7" font-family="sans-serif" fill="#888">
              (Capabilities beyond the existing public interface)
            </text>
          </g>

          <!-- Module 4: Queue & Async Execution -->
          <g transform="translate(14, 236)">
            <rect
              x="0"
              y="0"
              width="232"
              height="52"
              rx="5"
              fill="#181324"
              stroke="#3b2b4d"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#e5e5e5"
            >
              Queue &amp; Async Execution Layer
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              Background workers · Decoupled job dispatch
            </text>
            <text x="10" y="44" font-size="7.5" font-family="sans-serif" fill="#34d399">
              ✓ Triggered autonomously via MCP tool execution
            </text>
          </g>

          <!-- Module 5: Analytics & Data Layer -->
          <g transform="translate(14, 298)">
            <rect
              x="0"
              y="0"
              width="232"
              height="48"
              rx="5"
              fill="#181324"
              stroke="#3b2b4d"
              stroke-width="0.8"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              fill="#e5e5e5"
            >
              Analytics &amp; Data Access Layer
            </text>
            <text x="10" y="30" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              Reporting queries · Metrics · Stored records
            </text>
            <text x="10" y="42" font-size="7.5" font-family="sans-serif" fill="#aaa">
              • Consumed primarily via existing REST API
            </text>
          </g>

          <!-- Module 6: Shared Business Logic & Authorization -->
          <g transform="translate(14, 356)">
            <rect
              x="0"
              y="0"
              width="232"
              height="80"
              rx="5"
              fill="#140f1c"
              stroke="#361667"
              stroke-width="1"
            />
            <text
              x="10"
              y="18"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              SHARED APPLICATION FOUNDATION:
            </text>
            <text x="10" y="34" font-size="8" font-family="sans-serif" fill="#b0b0c0">
              Authentication · Tenant Authorization Policies
            </text>
            <text x="10" y="48" font-size="8" font-family="sans-serif" fill="#b0b0c0">
              Database Transactions · Queue Decoupling
            </text>
            <text x="10" y="66" font-size="7.5" font-family="monospace" fill="#34d399">
              Unified platform integrity across all interfaces
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- CONNECTION PATHWAYS & FLOW ARROWS -->
        <!-- ============================================================== -->
        <!-- Path 1: REST API -> Application Core -->
        <!-- <g id="path-rest">
          <line
            x1="300"
            y1="90"
            x2="458"
            y2="90"
            fill="none"
            stroke="#666"
            stroke-width="1.8"
            stroke-dasharray="4 3"
          />
          <polygon points="460,90 452,86 452,94" fill="#666" />
          <circle cx="370" cy="90" r="3.5" fill="#888" />
        </g> -->

        <!-- Path 2: MCP -> Application Core (Direct Bridge - Highlighted) -->
        <g id="path-mcp">
          <line
            x1="300"
            y1="340"
            x2="458"
            y2="340"
            fill="none"
            stroke="#BEAED3"
            stroke-width="2.5"
          />
          <polygon points="460,340 450,335 450,345" fill="#BEAED3" />
          <circle cx="370" cy="340" r="5" fill="#BEAED3" filter="url(#mcpGlow)" />
        </g>
      </svg>
    </div>

    <!-- Bottom Takeaway Comparison Bar -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
      <div class="p-2.5 rounded-lg bg-[var(--bg)]/80 border border-[var(--border)]">
        <span class="text-xs font-bold text-[var(--text-muted)] block mb-1"
          >Traditional REST Interface</span
        >
        <p class="text-[11px] text-[var(--text-muted)] font-sans leading-relaxed">
          Stateless analytics queries and predefined CRUD workflows for existing dashboards.
        </p>
      </div>

      <div
        class="p-2.5 rounded-lg bg-[var(--bg)]/80 border border-[var(--primary)]/40 bg-[var(--primary)]/5"
      >
        <span class="text-xs font-bold text-[var(--primary)] block mb-1"
          >AI-Native MCP Interface</span
        >
        <p class="text-[11px] text-[var(--text)] font-sans leading-relaxed">
          Exposes internal application services alongside structured resources and deterministic
          tools.
        </p>
      </div>

      <div class="p-2.5 rounded-lg bg-[var(--bg)]/80 border border-[var(--border)]">
        <span class="text-xs font-bold text-emerald-400 block mb-1">Architectural Coexistence</span>
        <p class="text-[11px] text-[var(--text-muted)] font-sans leading-relaxed">
          One unified application core supporting multiple interaction paradigms without rewriting
          logic.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  svg * {
    animation: none !important;
    transition: none !important;
  }
}
</style>
