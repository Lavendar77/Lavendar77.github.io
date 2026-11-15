<script setup lang="ts">
// Technical Sequence Diagram for Poptin MCP Campaign Creation Lifecycle
</script>

<template>
  <div class="w-full flex flex-col gap-2 font-sans select-none">
    <div class="flex items-center justify-between pb-1.5 border-b border-[var(--border)]">
      <span class="text-xs font-mono font-medium text-[var(--primary)] uppercase tracking-wider">
        Protocol Sequence &amp; Execution Lifecycle
      </span>
      <span class="text-[11px] font-mono text-[var(--text-muted)]">
        7-Step Agentic Campaign Flow
      </span>
    </div>

    <div
      class="relative w-full rounded-lg overflow-hidden border border-[var(--border)] bg-[#141416]"
    >
      <svg
        viewBox="0 0 720 540"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-auto block"
        role="img"
        aria-label="Poptin MCP 7-step sequence diagram"
      >
        <!-- Background subtle vertical columns -->
        <rect x="20" y="20" width="200" height="500" fill="#18181d" rx="6" opacity="0.4" />
        <rect x="260" y="20" width="200" height="500" fill="#201a2c" rx="6" opacity="0.4" />
        <rect x="500" y="20" width="200" height="500" fill="#18181d" rx="6" opacity="0.4" />

        <!-- Lifeline Headers -->
        <!-- Lifeline 1: AI Client / Agent -->
        <rect
          x="35"
          y="30"
          width="170"
          height="34"
          rx="6"
          fill="#22222a"
          stroke="#3a3a46"
          stroke-width="1.2"
        />
        <text
          x="120"
          y="52"
          font-size="11"
          font-family="sans-serif"
          font-weight="600"
          text-anchor="middle"
          fill="#e5e5e5"
        >
          AI Client / Agent
        </text>

        <!-- Lifeline 2: Poptin MCP Server -->
        <rect
          x="275"
          y="30"
          width="170"
          height="34"
          rx="6"
          fill="#361667"
          stroke="#BEAED3"
          stroke-width="1.2"
        />
        <text
          x="360"
          y="52"
          font-size="11"
          font-family="sans-serif"
          font-weight="600"
          text-anchor="middle"
          fill="#BEAED3"
        >
          Poptin MCP Server
        </text>

        <!-- Lifeline 3: Laravel Application -->
        <rect
          x="515"
          y="30"
          width="170"
          height="34"
          rx="6"
          fill="#22222a"
          stroke="#3a3a46"
          stroke-width="1.2"
        />
        <text
          x="600"
          y="52"
          font-size="11"
          font-family="sans-serif"
          font-weight="600"
          text-anchor="middle"
          fill="#e5e5e5"
        >
          Core Application
        </text>

        <!-- Vertical Lifelines -->
        <line
          x1="120"
          y1="64"
          x2="120"
          y2="510"
          stroke="#3a3a46"
          stroke-width="1.5"
          stroke-dasharray="4 4"
        />
        <line
          x1="360"
          y1="64"
          x2="360"
          y2="510"
          stroke="#4c326b"
          stroke-width="1.5"
          stroke-dasharray="4 4"
        />
        <line
          x1="600"
          y1="64"
          x2="600"
          y2="510"
          stroke="#3a3a46"
          stroke-width="1.5"
          stroke-dasharray="4 4"
        />

        <!-- ============================================================== -->
        <!-- STEP 1: Discover Account Context (Resource Read) -->
        <!-- ============================================================== -->
        <g transform="translate(0, 85)">
          <line x1="120" y1="0" x2="360" y2="0" stroke="#BEAED3" stroke-width="1.8" />
          <polygon points="360,0 352,-4 352,4" fill="#BEAED3" />
          <text
            x="240"
            y="-8"
            font-size="9"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
          >
            1. resources/read ("poptin://domains")
          </text>

          <line x1="360" y1="18" x2="600" y2="18" stroke="#888" stroke-width="1.2" />
          <polygon points="600,18 592,14 592,22" fill="#888" />
          <text
            x="480"
            y="12"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#aaa"
          >
            DomainService::getVerified()
          </text>

          <line
            x1="600"
            y1="34"
            x2="120"
            y2="34"
            stroke="#BEAED3"
            stroke-width="1.4"
            stroke-dasharray="3 3"
          />
          <polygon points="120,34 128,30 128,38" fill="#BEAED3" />
          <text
            x="360"
            y="47"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
          >
            verified sending domains (context discovered)
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- STEP 2: Initialize Campaign (Tool Call) -->
        <!-- ============================================================== -->
        <g transform="translate(0, 150)">
          <line x1="120" y1="0" x2="360" y2="0" stroke="#BEAED3" stroke-width="1.8" />
          <polygon points="360,0 352,-4 352,4" fill="#BEAED3" />
          <text
            x="240"
            y="-8"
            font-size="9"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
          >
            2. tools/call ("create_campaign", metadata)
          </text>

          <line x1="360" y1="16" x2="600" y2="16" stroke="#888" stroke-width="1.2" />
          <polygon points="600,16 592,12 592,20" fill="#888" />
          <text
            x="480"
            y="10"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#aaa"
          >
            Campaign::createDraft({title, subject, audience})
          </text>

          <line
            x1="600"
            y1="30"
            x2="120"
            y2="30"
            stroke="#aaa"
            stroke-width="1.2"
            stroke-dasharray="3 3"
          />
          <polygon points="120,30 128,26 128,34" fill="#aaa" />
          <text
            x="360"
            y="42"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#aaa"
          >
            campaign_id: "cmp_94821" (status: draft)
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- STEP 3: Autonomous Creative Synthesis (Agent LLM - NO MCP CALL) -->
        <!-- ============================================================== -->
        <g transform="translate(45, 215)">
          <rect
            x="0"
            y="0"
            width="630"
            height="50"
            rx="6"
            fill="#231934"
            stroke="#BEAED3"
            stroke-width="1.5"
            stroke-dasharray="4 4"
          />
          <text
            x="315"
            y="20"
            font-size="10"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#BEAED3"
          >
            3. AUTONOMOUS CREATIVE SYNTHESIS (Zero MCP Invocations)
          </text>
          <text
            x="315"
            y="36"
            font-size="8.5"
            font-family="sans-serif"
            text-anchor="middle"
            fill="#e5e5e5"
          >
            Agent synthesizes copy, layout, responsive HTML email design in internal context. MCP
            remains idle.
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- STEP 4: Obtain Upload Instructions (Tool Call) -->
        <!-- ============================================================== -->
        <g transform="translate(0, 285)">
          <line x1="120" y1="0" x2="360" y2="0" stroke="#BEAED3" stroke-width="1.8" />
          <polygon points="360,0 352,-4 352,4" fill="#BEAED3" />
          <text
            x="240"
            y="-8"
            font-size="9"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
          >
            4. tools/call ("get_upload_instructions")
          </text>

          <line
            x1="360"
            y1="20"
            x2="120"
            y2="20"
            stroke="#BEAED3"
            stroke-width="1.4"
            stroke-dasharray="3 3"
          />
          <polygon points="120,20 128,16 128,24" fill="#BEAED3" />
          <text
            x="240"
            y="32"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
          >
            { upload_url: "https://mcp.poptin.com/upload", rules: strict }
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- STEP 5: MCP Host Upload Transport (Key Decision) -->
        <!-- ============================================================== -->
        <g transform="translate(0, 340)">
          <!-- Highlight Box for Engineering Decision -->
          <rect
            x="80"
            y="-12"
            width="560"
            height="52"
            rx="6"
            fill="#1b1c2e"
            stroke="#818cf8"
            stroke-width="1"
          />
          <text
            x="360"
            y="2"
            font-size="8"
            font-family="monospace"
            font-weight="600"
            text-anchor="middle"
            fill="#a5b4fc"
          >
            [★ ARCHITECTURAL DECISION: MCP-HOSTED UPLOAD TRANSPORT (SOLVED CLIENT TRUST)]
          </text>

          <line x1="120" y1="20" x2="360" y2="20" stroke="#818cf8" stroke-width="2" />
          <polygon points="360,20 352,16 352,24" fill="#818cf8" />
          <text
            x="240"
            y="14"
            font-size="8.5"
            font-family="monospace"
            font-weight="600"
            text-anchor="middle"
            fill="#c7d2fe"
          >
            5. POST /mcp/upload (Multipart design HTML)
          </text>

          <line x1="360" y1="20" x2="600" y2="20" stroke="#818cf8" stroke-width="1.8" />
          <polygon points="600,20 592,16 592,24" fill="#818cf8" />
          <text
            x="480"
            y="14"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#a5b4fc"
          >
            Stream to S3 Bridge
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- STEP 6: Commit Design (Tool Call) -->
        <!-- ============================================================== -->
        <g transform="translate(0, 410)">
          <line x1="120" y1="0" x2="360" y2="0" stroke="#BEAED3" stroke-width="1.8" />
          <polygon points="360,0 352,-4 352,4" fill="#BEAED3" />
          <text
            x="240"
            y="-8"
            font-size="9"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
          >
            6. tools/call ("commit_email_design", {campaign_id, asset_key})
          </text>

          <line x1="360" y1="16" x2="600" y2="16" stroke="#888" stroke-width="1.2" />
          <polygon points="600,16 592,12 592,20" fill="#888" />
          <text
            x="480"
            y="10"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#aaa"
          >
            TemplateService::attachDesign(cmp_94821)
          </text>

          <line
            x1="600"
            y1="30"
            x2="120"
            y2="30"
            stroke="#aaa"
            stroke-width="1.2"
            stroke-dasharray="3 3"
          />
          <polygon points="120,30 128,26 128,34" fill="#aaa" />
          <text
            x="360"
            y="42"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#aaa"
          >
            { status: "design_committed", ready_to_execute: true }
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- STEP 7: Autonomous Campaign Execution (Tool Call) -->
        <!-- ============================================================== -->
        <g transform="translate(0, 475)">
          <line x1="120" y1="0" x2="360" y2="0" stroke="#34d399" stroke-width="2" />
          <polygon points="360,0 352,-4 352,4" fill="#34d399" />
          <text
            x="240"
            y="-8"
            font-size="9"
            font-family="monospace"
            font-weight="600"
            text-anchor="middle"
            fill="#34d399"
          >
            7. tools/call ("schedule_campaign" / "send_campaign")
          </text>

          <line x1="360" y1="16" x2="600" y2="16" stroke="#34d399" stroke-width="1.5" />
          <polygon points="600,16 592,12 592,20" fill="#34d399" />
          <text
            x="480"
            y="10"
            font-size="8"
            font-family="monospace"
            text-anchor="middle"
            fill="#34d399"
          >
            Dispatch SES Batch Worker Queue
          </text>

          <line
            x1="600"
            y1="28"
            x2="120"
            y2="28"
            stroke="#34d399"
            stroke-width="1.5"
            stroke-dasharray="3 3"
          />
          <polygon points="120,28 128,24 128,32" fill="#34d399" />
          <text
            x="360"
            y="38"
            font-size="8"
            font-family="monospace"
            font-weight="600"
            text-anchor="middle"
            fill="#34d399"
          >
            { status: "campaign_scheduled", delivery_pipeline_active: true }
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>
