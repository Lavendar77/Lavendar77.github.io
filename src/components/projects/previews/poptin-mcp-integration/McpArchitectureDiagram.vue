<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import DiagramFrame from '../ui/DiagramFrame.vue'

const currentStep = ref(0)
const isAutoPlaying = ref(true)
let timer: ReturnType<typeof setInterval> | null = null

const steps = [
  {
    number: 1,
    title: 'Resource Read',
    label: 'Discover Context',
    description:
      'Agent reads MCP Resource (poptin://domains) to discover verified sender domains and account context.',
    type: 'resource',
  },
  {
    number: 2,
    title: 'Tool Call',
    label: 'Init Campaign',
    description:
      'Agent calls create_campaign tool to persist title, subject, preheader, and subscriber audience filter.',
    type: 'tool',
  },
  {
    number: 3,
    title: 'AI Synthesis',
    label: 'Creative Canvas',
    description:
      'Agent autonomously designs email layout & copy. Pure LLM generation — Zero MCP traffic during synthesis.',
    type: 'creative',
  },
  {
    number: 4,
    title: 'Tool Call',
    label: 'Upload Specs',
    description:
      'Agent calls get_upload_instructions tool; MCP returns schema rules and the secure upload endpoint.',
    type: 'tool',
  },
  {
    number: 5,
    title: 'File Upload',
    label: 'MCP Host Upload',
    description:
      'Agent streams design to MCP Host transport — resolving client sandbox/trust friction with direct AWS S3.',
    type: 'upload',
  },
  {
    number: 6,
    title: 'Tool Call',
    label: 'Commit Design',
    description:
      'Agent calls commit_email_design tool, validating the payload and linking the template to the campaign draft.',
    type: 'tool',
  },
  {
    number: 7,
    title: 'Execution',
    label: 'Dispatch / Schedule',
    description:
      'Agent invokes execution tool (schedule_campaign, send_campaign, or test email) to finalize the workflow.',
    type: 'execution',
  },
]

const nextStep = () => {
  currentStep.value = (currentStep.value + 1) % steps.length
}

const selectStep = (index: number) => {
  currentStep.value = index
  isAutoPlaying.value = false
  stopTimer()
}

const togglePlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value
  if (isAutoPlaying.value) {
    startTimer()
  } else {
    stopTimer()
  }
}

const startTimer = () => {
  stopTimer()
  timer = setInterval(() => {
    nextStep()
  }, 3600)
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

onMounted(() => {
  // Check reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!prefersReduced) {
    startTimer()
  } else {
    isAutoPlaying.value = false
  }
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <DiagramFrame
    kicker="Agentic lifecycle"
    badge="Walkthrough"
    title="Discover context, design the email, then commit and send it."
    :panel="false"
  >
    <template #toolbar>
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 min-w-0"
      >
        <div class="flex items-center gap-1.5 flex-wrap min-w-0">
          <button
            v-for="(step, idx) in steps"
            :key="step.number"
            @click="selectStep(idx)"
            type="button"
            class="px-2 py-0.5 rounded text-[11px] font-mono transition-all duration-200 cursor-pointer border"
            :class="
              currentStep === idx
                ? 'bg-[var(--primary)] text-[var(--color-bg)] border-[var(--primary)] font-semibold shadow-sm'
                : 'bg-[var(--bg)]/70 text-[var(--text-muted)] border-[var(--border)] hover:border-[var(--primary)]/60 hover:text-[var(--text)]'
            "
            :title="step.description"
          >
            {{ step.number }}. {{ step.label }}
          </button>
        </div>

        <div class="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
          <button
            @click="togglePlay"
            type="button"
            class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-[var(--border)] text-[11px] font-mono text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[var(--primary)]/50 transition-colors cursor-pointer"
            :title="isAutoPlaying ? 'Pause animated walkthrough' : 'Resume auto-play'"
          >
            <span
              class="w-1.5 h-1.5 rounded-full"
              :class="isAutoPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'"
            />
            {{ isAutoPlaying ? 'Pause' : 'Auto-Play' }}
          </button>
        </div>
      </div>
    </template>

    <!-- Active Step Explanatory Banner -->
    <div
      class="p-2.5 rounded-lg border bg-[var(--bg)]/90 flex items-start gap-2.5 transition-all duration-300"
      :class="
        currentStep === 2
          ? 'border-[var(--primary)]/60 bg-[var(--primary)]/5'
          : currentStep === 4
            ? 'border-indigo-400/60 bg-indigo-500/5'
            : 'border-[var(--border)]'
      "
    >
      <div
        class="flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center font-mono text-xs font-bold mt-0.5"
        :class="
          currentStep === 2
            ? 'bg-[var(--primary)] text-[var(--color-bg)]'
            : currentStep === 4
              ? 'bg-indigo-400 text-[var(--color-bg)]'
              : 'bg-[var(--secondary)] text-[var(--primary)] border border-[var(--primary)]/30'
        "
      >
        {{ steps[currentStep].number }}
      </div>
      <div class="min-w-0 flex-1">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="text-xs font-semibold text-[var(--text)]">
            {{ steps[currentStep].title }}: {{ steps[currentStep].label }}
          </span>
          <span
            v-if="currentStep === 2"
            class="text-[10px] px-1.5 py-0.2 font-mono rounded bg-[var(--primary)]/20 text-[var(--primary)] border border-[var(--primary)]/40"
          >
            Agent Autonomous Stage · No MCP Traffic
          </span>
          <span
            v-else-if="currentStep === 4"
            class="text-[10px] px-1.5 py-0.2 font-mono rounded bg-indigo-500/20 text-indigo-300 border border-indigo-400/40"
          >
            Engineering Decision · MCP Host Transport
          </span>
        </div>
        <p class="text-[11px] text-[var(--text-muted)] mt-0.5 leading-relaxed">
          {{ steps[currentStep].description }}
        </p>
      </div>
    </div>

    <!-- Technical Architecture & Workflow SVG -->
    <div
      class="relative w-full rounded-lg overflow-hidden border border-[var(--border)] bg-[#141416]"
    >
      <svg
        viewBox="0 0 740 500"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full max-w-full h-auto block select-none"
        role="img"
        aria-label="Poptin MCP Integration Architecture and Agentic Workflow Diagram"
      >
        <defs>
          <!-- Gradients -->
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#BEAED3" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#361667" stop-opacity="0.6" />
          </linearGradient>

          <linearGradient id="mcpLayerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#2a2236" stop-opacity="0.95" />
            <stop offset="100%" stop-color="#1d1727" stop-opacity="0.98" />
          </linearGradient>

          <linearGradient id="laravelLayerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#221b2b" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#18151f" stop-opacity="0.95" />
          </linearGradient>

          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#BEAED3" stop-opacity="0" />
            <stop offset="50%" stop-color="#BEAED3" stop-opacity="1" />
            <stop offset="100%" stop-color="#BEAED3" stop-opacity="0" />
          </linearGradient>

          <!-- Filters -->
          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Background grid texture -->
        <g opacity="0.08" stroke="#BEAED3" stroke-width="0.5">
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
        <!-- SECTION 1: AI CLIENTS / AGENT ENVIRONMENT (TOP LEFT) -->
        <!-- ============================================================== -->
        <g id="ai-clients-group">
          <!-- Container Box -->
          <rect
            x="20"
            y="25"
            width="250"
            height="185"
            rx="8"
            fill="#1c1c20"
            stroke="#3a3a42"
            stroke-width="1.5"
          />
          <!-- Header -->
          <rect x="20" y="25" width="250" height="26" rx="8" fill="#25252c" />
          <circle cx="34" cy="38" r="3.5" fill="#e06c75" />
          <circle cx="45" cy="38" r="3.5" fill="#e5c07b" />
          <circle cx="56" cy="38" r="3.5" fill="#98c379" />
          <text x="72" y="42" font-size="10" font-family="monospace" fill="#b0b0b0">
            AI Client / Agent Host
          </text>

          <!-- Prompt Box -->
          <rect
            x="32"
            y="60"
            width="226"
            height="46"
            rx="6"
            fill="#121215"
            stroke="#2d2d35"
            stroke-width="1"
          />
          <text x="42" y="76" font-size="9" font-family="monospace" fill="#BEAED3">
            &gt; Natural Language Prompt:
          </text>
          <text
            x="42"
            y="93"
            font-size="10"
            font-family="sans-serif"
            font-weight="500"
            fill="#e5e5e5"
          >
            "Launch Summer VIP Email Campaign"
          </text>

          <!-- Supported Clients & Runtime -->
          <g transform="translate(32, 116)">
            <rect
              x="0"
              y="0"
              width="70"
              height="22"
              rx="4"
              fill="#282234"
              stroke="#483a5c"
              stroke-width="1"
            />
            <text
              x="35"
              y="14"
              font-size="9"
              font-family="sans-serif"
              text-anchor="middle"
              fill="#BEAED3"
            >
              Claude Desktop
            </text>

            <rect
              x="76"
              y="0"
              width="64"
              height="22"
              rx="4"
              fill="#282234"
              stroke="#483a5c"
              stroke-width="1"
            />
            <text
              x="108"
              y="14"
              font-size="9"
              font-family="sans-serif"
              text-anchor="middle"
              fill="#BEAED3"
            >
              Cursor IDE
            </text>

            <rect
              x="146"
              y="0"
              width="80"
              height="22"
              rx="4"
              fill="#282234"
              stroke="#483a5c"
              stroke-width="1"
            />
            <text
              x="186"
              y="14"
              font-size="9"
              font-family="sans-serif"
              text-anchor="middle"
              fill="#BEAED3"
            >
              MCP Assistants
            </text>
          </g>

          <!-- Agent State Pill -->
          <g transform="translate(32, 148)">
            <rect
              x="0"
              y="0"
              width="226"
              height="48"
              rx="4"
              fill="#18181c"
              stroke="#333"
              stroke-width="1"
            />
            <text x="10" y="17" font-size="9" font-family="monospace" fill="#888">
              AGENT REASONING STATE:
            </text>
            <text
              x="10"
              y="35"
              font-size="10"
              font-family="monospace"
              font-weight="600"
              :fill="currentStep === 2 ? '#BEAED3' : '#a0a0b0'"
            >
              {{
                currentStep === 0
                  ? 'Reading poptin://domains...'
                  : currentStep === 1
                    ? 'Invoking create_campaign()...'
                    : currentStep === 2
                      ? 'Generating email HTML & copy...'
                      : currentStep === 3
                        ? 'Requesting upload schema...'
                        : currentStep === 4
                          ? 'Streaming payload to MCP host...'
                          : currentStep === 5
                            ? 'Invoking commit_email_design()...'
                            : 'Dispatching execution tool...'
              }}
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- SECTION 2: AI CREATIVE DESIGN CANVAS (BOTTOM LEFT - VISUALLY DISTINCT) -->
        <!-- ============================================================== -->
        <g id="creative-canvas-group" transform="translate(20, 230)">
          <!-- Outer Canvas Frame -->
          <rect
            x="0"
            y="0"
            width="250"
            height="248"
            rx="8"
            :fill="currentStep === 2 ? '#1e1828' : '#17171a'"
            :stroke="currentStep === 2 ? '#BEAED3' : '#33333d'"
            :stroke-width="currentStep === 2 ? 2 : 1"
            class="transition-all duration-300"
          />

          <!-- Canvas Title / Badge (Cleanly separated into two lines to prevent text overlap) -->
          <rect
            x="0"
            y="0"
            width="250"
            height="32"
            rx="8"
            :fill="currentStep === 2 ? '#361667' : '#222228'"
          />
          <!-- Title on Line 1 -->
          <text
            x="10"
            y="14"
            font-size="9"
            font-family="monospace"
            font-weight="700"
            :fill="currentStep === 2 ? '#BEAED3' : '#a0a0b0'"
          >
            🎨 Autonomous Creative Canvas
          </text>

          <!-- Status Indicator on Line 2 (Vertically separated) -->
          <circle
            cx="14"
            cy="24"
            r="2.5"
            :fill="currentStep === 2 ? '#34d399' : '#666'"
            :class="currentStep === 2 ? 'animate-pulse' : ''"
          />
          <text
            x="21"
            y="27"
            font-size="7.5"
            font-family="monospace"
            font-weight="600"
            :fill="currentStep === 2 ? '#c4b5fd' : '#888'"
          >
            {{
              currentStep === 2 ? 'ACTIVE LLM SYNTHESIS · ZERO MCP CALLS' : 'STATUS: IDLE / READY'
            }}
          </text>

          <!-- Email Preview Mock inside Canvas -->
          <g transform="translate(14, 40)">
            <!-- Simulated Browser/Email Card -->
            <rect
              x="0"
              y="0"
              width="222"
              height="150"
              rx="6"
              fill="#0e0e11"
              stroke="#2e2e38"
              stroke-width="1"
            />

            <!-- Header Banner -->
            <rect
              x="12"
              y="12"
              width="198"
              height="36"
              rx="4"
              :fill="currentStep === 2 ? '#361667' : '#1f1a29'"
              stroke="#493563"
              stroke-width="0.8"
            />
            <text
              x="111"
              y="27"
              font-size="9"
              font-family="sans-serif"
              font-weight="700"
              text-anchor="middle"
              fill="#BEAED3"
            >
              POPTIN VIP EXCLUSIVE
            </text>
            <text
              x="111"
              y="39"
              font-size="7"
              font-family="sans-serif"
              text-anchor="middle"
              fill="#BEAED3"
              opacity="0.8"
            >
              Early Summer Product Drop
            </text>

            <!-- Subject & Preheader Mock -->
            <text x="12" y="60" font-size="8" font-family="monospace" fill="#888">Subject:</text>
            <text x="56" y="60" font-size="8" font-family="monospace" fill="#e5e5e5">
              Unlock Your VIP Summer Pass
            </text>

            <!-- Simulated Copy Lines -->
            <line
              x1="12"
              y1="75"
              x2="210"
              y2="75"
              :stroke="currentStep === 2 ? '#BEAED3' : '#3d3d4a'"
              stroke-width="2.5"
              stroke-linecap="round"
              :stroke-dasharray="currentStep === 2 ? '4 2' : 'none'"
            />
            <line
              x1="12"
              y1="87"
              x2="175"
              y2="87"
              :stroke="currentStep === 2 ? '#BEAED3' : '#3d3d4a'"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              x1="12"
              y1="97"
              x2="190"
              y2="97"
              :stroke="currentStep === 2 ? '#BEAED3' : '#3d3d4a'"
              stroke-width="2"
              stroke-linecap="round"
            />

            <!-- CTA Button -->
            <rect
              x="60"
              y="112"
              width="102"
              height="24"
              rx="4"
              :fill="currentStep >= 2 ? '#BEAED3' : '#2b2636'"
              class="transition-colors duration-300"
            />
            <text
              x="111"
              y="127"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="700"
              text-anchor="middle"
              :fill="currentStep >= 2 ? '#1a1a1a' : '#888'"
            >
              Shop VIP Access →
            </text>
          </g>

          <!-- Crucial Architectural Distinction Callout -->
          <g transform="translate(14, 198)">
            <rect
              x="0"
              y="0"
              width="222"
              height="40"
              rx="4"
              fill="#100d17"
              stroke="#361667"
              stroke-width="1"
            />
            <text
              x="8"
              y="14"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#BEAED3"
            >
              Independent Creative Synthesis:
            </text>
            <text x="8" y="28" font-size="8" font-family="sans-serif" fill="#9e9eb0">
              Agent synthesizes HTML & design without calling MCP.
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- SECTION 3: MODEL CONTEXT PROTOCOL (MCP) INTEGRATION LAYER (CENTER) -->
        <!-- ============================================================== -->
        <g id="mcp-layer-group" transform="translate(305, 25)">
          <!-- Core MCP Layer Boundary -->
          <rect
            x="0"
            y="0"
            width="225"
            height="455"
            rx="10"
            fill="url(#mcpLayerGrad)"
            :stroke="currentStep !== 2 ? '#BEAED3' : '#4d3a66'"
            :stroke-width="currentStep !== 2 ? 1.8 : 1"
            class="transition-colors duration-300"
          />

          <!-- Layer Header -->
          <rect x="0" y="0" width="225" height="34" rx="10" fill="#361667" />
          <text
            x="112"
            y="18"
            font-size="11"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#BEAED3"
          >
            Poptin MCP Integration Layer
          </text>
          <text
            x="112"
            y="28"
            font-size="7.5"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
            opacity="0.8"
          >
            JSON-RPC Protocol Gateway
          </text>

          <!-- 3.1: MCP Resources Block -->
          <g transform="translate(12, 46)">
            <rect
              x="0"
              y="0"
              width="201"
              height="74"
              rx="6"
              fill="#181322"
              :stroke="currentStep === 0 ? '#BEAED3' : '#3a2d50'"
              :stroke-width="currentStep === 0 ? 1.8 : 1"
              class="transition-colors duration-200"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="monospace"
              font-weight="600"
              fill="#BEAED3"
            >
              RESOURCES (Context Discovery)
            </text>
            <!-- Resource Item -->
            <rect
              x="8"
              y="24"
              width="185"
              height="40"
              rx="4"
              :fill="currentStep === 0 ? '#361667' : '#14101c'"
              stroke="#4a3766"
              stroke-width="0.8"
            />
            <text
              x="16"
              y="39"
              font-size="9"
              font-family="monospace"
              font-weight="600"
              :fill="currentStep === 0 ? '#fff' : '#BEAED3'"
            >
              poptin://domains
            </text>
            <text x="16" y="54" font-size="8" font-family="sans-serif" fill="#b0b0c0">
              Verified sender domains & DNS status
            </text>
          </g>

          <!-- 3.2: MCP Tools Block -->
          <g transform="translate(12, 130)">
            <rect
              x="0"
              y="0"
              width="201"
              height="188"
              rx="6"
              fill="#181322"
              :stroke="[1, 3, 5, 6].includes(currentStep) ? '#BEAED3' : '#3a2d50'"
              :stroke-width="[1, 3, 5, 6].includes(currentStep) ? 1.8 : 1"
              class="transition-colors duration-200"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="monospace"
              font-weight="600"
              fill="#BEAED3"
            >
              TOOLS (Structured Execution)
            </text>

            <!-- Tool 1: create_campaign -->
            <rect
              x="8"
              y="24"
              width="185"
              height="34"
              rx="4"
              :fill="currentStep === 1 ? '#361667' : '#14101c'"
              :stroke="currentStep === 1 ? '#BEAED3' : '#332746'"
              stroke-width="0.8"
            />
            <text
              x="16"
              y="38"
              font-size="8.5"
              font-family="monospace"
              font-weight="600"
              :fill="currentStep === 1 ? '#fff' : '#BEAED3'"
            >
              create_campaign
            </text>
            <text x="16" y="50" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              Subject, preheader, audience criteria
            </text>

            <!-- Tool 2: get_upload_instructions -->
            <rect
              x="8"
              y="64"
              width="185"
              height="34"
              rx="4"
              :fill="currentStep === 3 ? '#361667' : '#14101c'"
              :stroke="currentStep === 3 ? '#BEAED3' : '#332746'"
              stroke-width="0.8"
            />
            <text
              x="16"
              y="78"
              font-size="8.5"
              font-family="monospace"
              font-weight="600"
              :fill="currentStep === 3 ? '#fff' : '#BEAED3'"
            >
              get_upload_instructions
            </text>
            <text x="16" y="90" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              Payload schema & upload endpoint URL
            </text>

            <!-- Tool 3: commit_email_design -->
            <rect
              x="8"
              y="104"
              width="185"
              height="34"
              rx="4"
              :fill="currentStep === 5 ? '#361667' : '#14101c'"
              :stroke="currentStep === 5 ? '#BEAED3' : '#332746'"
              stroke-width="0.8"
            />
            <text
              x="16"
              y="118"
              font-size="8.5"
              font-family="monospace"
              font-weight="600"
              :fill="currentStep === 5 ? '#fff' : '#BEAED3'"
            >
              commit_email_design
            </text>
            <text x="16" y="130" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              Validates upload & binds design to draft
            </text>

            <!-- Tool 4: schedule / send / test -->
            <rect
              x="8"
              y="144"
              width="185"
              height="34"
              rx="4"
              :fill="currentStep === 6 ? '#361667' : '#14101c'"
              :stroke="currentStep === 6 ? '#BEAED3' : '#332746'"
              stroke-width="0.8"
            />
            <text
              x="16"
              y="158"
              font-size="8.5"
              font-family="monospace"
              font-weight="600"
              :fill="currentStep === 6 ? '#fff' : '#BEAED3'"
            >
              schedule / send / test
            </text>
            <text x="16" y="170" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              Autonomous execution & test dispatch
            </text>
          </g>

          <!-- 3.3: MCP-Hosted Upload Transport (Highlight Feature) -->
          <g transform="translate(12, 328)">
            <rect
              x="0"
              y="0"
              width="201"
              height="114"
              rx="6"
              fill="#181322"
              :stroke="currentStep === 4 ? '#818cf8' : '#3a2d50'"
              :stroke-width="currentStep === 4 ? 2 : 1"
              class="transition-colors duration-200"
            />
            <text
              x="10"
              y="16"
              font-size="9"
              font-family="monospace"
              font-weight="700"
              fill="#a5b4fc"
            >
              UPLOAD TRANSPORT BRIDGE
            </text>

            <rect
              x="8"
              y="24"
              width="185"
              height="44"
              rx="4"
              :fill="currentStep === 4 ? '#2e264f' : '#130f1e'"
              stroke="#49386c"
              stroke-width="0.8"
            />
            <text
              x="16"
              y="38"
              font-size="8.5"
              font-family="monospace"
              font-weight="600"
              fill="#c7d2fe"
            >
              POST /mcp/upload (Host Stream)
            </text>
            <text x="16" y="52" font-size="7.5" font-family="sans-serif" fill="#94a3b8">
              Proxied multipart stream via MCP host
            </text>

            <!-- Architectural Annotation Badge -->
            <g transform="translate(8, 74)">
              <rect
                x="0"
                y="0"
                width="185"
                height="32"
                rx="4"
                fill="#0d0a14"
                stroke="#361667"
                stroke-width="0.8"
              />
              <text
                x="6"
                y="13"
                font-size="7.5"
                font-family="sans-serif"
                font-weight="600"
                fill="#BEAED3"
              >
                ★ Interoperability Decision:
              </text>
              <text x="6" y="24" font-size="7" font-family="sans-serif" fill="#999">
                MCP host proxy avoids AWS S3 client trust failure.
              </text>
            </g>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- SECTION 4: LARAVEL CORE INFRASTRUCTURE (RIGHT) -->
        <!-- ============================================================== -->
        <g id="laravel-layer-group" transform="translate(555, 25)">
          <!-- Laravel Container -->
          <rect
            x="0"
            y="0"
            width="165"
            height="325"
            rx="8"
            fill="url(#laravelLayerGrad)"
            stroke="#453457"
            stroke-width="1.2"
          />
          <!-- Header -->
          <rect x="0" y="0" width="165" height="30" rx="8" fill="#2d1c44" />
          <text
            x="82"
            y="16"
            font-size="10"
            font-family="sans-serif"
            font-weight="700"
            text-anchor="middle"
            fill="#BEAED3"
          >
            Application
          </text>
          <text
            x="82"
            y="26"
            font-size="7.5"
            font-family="monospace"
            text-anchor="middle"
            fill="#BEAED3"
            opacity="0.8"
          >
            Core Business Capabilities
          </text>

          <!-- Service 1: Domain Registry -->
          <g transform="translate(10, 42)">
            <rect
              x="0"
              y="0"
              width="145"
              height="38"
              rx="4"
              :fill="currentStep === 0 ? '#361667' : '#1a1622'"
              stroke="#3a2e48"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#e5e5e5"
            >
              Domain &amp; DNS Registry
            </text>
            <text x="8" y="29" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              DomainService::verified()
            </text>
          </g>

          <!-- Service 2: Campaign Management -->
          <g transform="translate(10, 88)">
            <rect
              x="0"
              y="0"
              width="145"
              height="38"
              rx="4"
              :fill="currentStep === 1 ? '#361667' : '#1a1622'"
              stroke="#3a2e48"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#e5e5e5"
            >
              Campaign Lifecycle
            </text>
            <text x="8" y="29" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              Campaign::createDraft()
            </text>
          </g>

          <!-- Service 3: Template & Upload Handler -->
          <g transform="translate(10, 134)">
            <rect
              x="0"
              y="0"
              width="145"
              height="38"
              rx="4"
              :fill="[3, 4, 5].includes(currentStep) ? '#361667' : '#1a1622'"
              stroke="#3a2e48"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#e5e5e5"
            >
              Template &amp; Asset Bridge
            </text>
            <text x="8" y="29" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              S3Bridge / AssetStore
            </text>
          </g>

          <!-- Service 4: Delivery Pipeline -->
          <g transform="translate(10, 180)">
            <rect
              x="0"
              y="0"
              width="145"
              height="38"
              rx="4"
              :fill="currentStep === 6 ? '#361667' : '#1a1622'"
              stroke="#3a2e48"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8.5"
              font-family="sans-serif"
              font-weight="600"
              fill="#e5e5e5"
            >
              Execution / Dispatch
            </text>
            <text x="8" y="29" font-size="7.5" font-family="monospace" fill="#9e9eb0">
              SES Batch Worker Queue
            </text>
          </g>

          <!-- Direct Capability Indicator -->
          <g transform="translate(10, 230)">
            <rect
              x="0"
              y="0"
              width="145"
              height="84"
              rx="4"
              fill="#120f17"
              stroke="#361667"
              stroke-width="0.8"
            />
            <text
              x="8"
              y="16"
              font-size="8"
              font-family="sans-serif"
              font-weight="700"
              fill="#BEAED3"
            >
              DIRECT INTERNAL ACCESS:
            </text>
            <text x="8" y="30" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              MCP accesses internal
            </text>
            <text x="8" y="42" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              application logic,
            </text>
            <text x="8" y="54" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              bypassing public REST
            </text>
            <text x="8" y="66" font-size="7.5" font-family="sans-serif" fill="#b0b0c0">
              API limitations.
            </text>
          </g>
        </g>

        <!-- ============================================================== -->
        <!-- SECTION 5: PARALLEL INTERFACE (PUBLIC REST API - PARALLEL & RESTRICTED) -->
        <!-- ============================================================== -->
        <g id="parallel-rest-group" transform="translate(555, 365)">
          <rect
            x="0"
            y="0"
            width="165"
            height="115"
            rx="8"
            fill="#17171c"
            stroke="#2d2d38"
            stroke-width="1"
            stroke-dasharray="3 3"
          />
          <text x="12" y="18" font-size="9" font-family="monospace" font-weight="600" fill="#777">
            PARALLEL INTERFACE:
          </text>
          <text x="12" y="32" font-size="10" font-family="sans-serif" font-weight="600" fill="#aaa">
            Existing REST API
          </text>
          <line x1="12" y1="40" x2="153" y2="40" stroke="#2a2a33" stroke-width="1" />
          <text x="12" y="54" font-size="7.5" font-family="sans-serif" fill="#666">
            • Bounded public endpoints
          </text>
          <text x="12" y="68" font-size="7.5" font-family="sans-serif" fill="#666">
            • Analytics &amp; basic CRUD
          </text>
          <text x="12" y="82" font-size="7.5" font-family="sans-serif" fill="#666">
            • No agentic workflow bridge
          </text>
          <text x="12" y="100" font-size="7" font-family="monospace" fill="#555">
            (Parallel, not intermediary)
          </text>
        </g>

        <!-- ============================================================== -->
        <!-- CONNECTION PATHWAYS & ANIMATED FLOW PACKETS -->
        <!-- ============================================================== -->
        <!-- 1. Path: Agent <-> MCP Resources (Step 1) -->
        <g id="path-step-1">
          <path
            d="M 270 115 L 305 90"
            fill="none"
            :stroke="currentStep === 0 ? '#BEAED3' : '#333'"
            :stroke-width="currentStep === 0 ? 2.5 : 1"
            stroke-dasharray="4 3"
          />
          <circle
            v-if="currentStep === 0"
            cx="288"
            cy="102"
            r="4"
            fill="#BEAED3"
            filter="url(#glowFilter)"
          />
        </g>

        <!-- 2. Path: Agent -> MCP Tools: create_campaign (Step 2) -->
        <g id="path-step-2">
          <path
            d="M 270 150 L 305 170"
            fill="none"
            :stroke="currentStep === 1 ? '#BEAED3' : '#333'"
            :stroke-width="currentStep === 1 ? 2.5 : 1"
            stroke-dasharray="4 3"
          />
          <circle
            v-if="currentStep === 1"
            cx="288"
            cy="160"
            r="4"
            fill="#BEAED3"
            filter="url(#glowFilter)"
          />
        </g>

        <!-- 3. Path: Agent -> Canvas Internal (Step 3: Creative Canvas Active) -->
        <g v-if="currentStep === 2" id="path-step-3">
          <line
            x1="145"
            y1="210"
            x2="145"
            y2="230"
            stroke="#BEAED3"
            stroke-width="2.5"
            stroke-dasharray="3 3"
          />
          <circle cx="145" cy="220" r="4" fill="#BEAED3" filter="url(#glowFilter)" />
        </g>

        <!-- 4. Path: Agent -> MCP Tools: get_upload_instructions (Step 4) -->
        <g id="path-step-4">
          <path
            d="M 270 160 L 305 210"
            fill="none"
            :stroke="currentStep === 3 ? '#BEAED3' : '#333'"
            :stroke-width="currentStep === 3 ? 2.5 : 1"
            stroke-dasharray="4 3"
          />
          <circle
            v-if="currentStep === 3"
            cx="288"
            cy="185"
            r="4"
            fill="#BEAED3"
            filter="url(#glowFilter)"
          />
        </g>

        <!-- 5. Path: Canvas -> MCP Host Upload Transport (Step 5) -->
        <g id="path-step-5">
          <path
            d="M 270 380 L 305 380"
            fill="none"
            :stroke="currentStep === 4 ? '#818cf8' : '#333'"
            :stroke-width="currentStep === 4 ? 3 : 1"
            stroke-dasharray="4 3"
          />
          <circle
            v-if="currentStep === 4"
            cx="288"
            cy="380"
            r="5"
            fill="#818cf8"
            filter="url(#glowFilter)"
          />
        </g>

        <!-- 6. Path: Agent -> MCP Tools: commit_email_design (Step 6) -->
        <g id="path-step-6">
          <path
            d="M 270 170 L 305 250"
            fill="none"
            :stroke="currentStep === 5 ? '#BEAED3' : '#333'"
            :stroke-width="currentStep === 5 ? 2.5 : 1"
            stroke-dasharray="4 3"
          />
          <circle
            v-if="currentStep === 5"
            cx="288"
            cy="210"
            r="4"
            fill="#BEAED3"
            filter="url(#glowFilter)"
          />
        </g>

        <!-- 7. Path: Agent -> MCP Tools: schedule / send (Step 7) -->
        <g id="path-step-7">
          <path
            d="M 270 180 L 305 290"
            fill="none"
            :stroke="currentStep === 6 ? '#BEAED3' : '#333'"
            :stroke-width="currentStep === 6 ? 2.5 : 1"
            stroke-dasharray="4 3"
          />
          <circle
            v-if="currentStep === 6"
            cx="288"
            cy="235"
            r="4"
            fill="#BEAED3"
            filter="url(#glowFilter)"
          />
        </g>

        <!-- Inter-Layer Bridges: MCP -> Laravel Application -->
        <!-- MCP Resources -> Domain Registry -->
        <path
          d="M 530 90 L 555 60"
          fill="none"
          :stroke="currentStep === 0 ? '#BEAED3' : '#333'"
          :stroke-width="currentStep === 0 ? 2.5 : 1"
        />
        <!-- MCP Tools -> Campaign Lifecycle -->
        <path
          d="M 530 170 L 555 107"
          fill="none"
          :stroke="currentStep === 1 ? '#BEAED3' : '#333'"
          :stroke-width="currentStep === 1 ? 2.5 : 1"
        />
        <!-- MCP Upload Transport -> Template & Asset Bridge -->
        <path
          d="M 530 380 L 555 153"
          fill="none"
          :stroke="[3, 4, 5].includes(currentStep) ? '#818cf8' : '#333'"
          :stroke-width="[3, 4, 5].includes(currentStep) ? 2.5 : 1"
        />
        <!-- MCP Tools -> Execution Worker Queue -->
        <path
          d="M 530 290 L 555 200"
          fill="none"
          :stroke="currentStep === 6 ? '#BEAED3' : '#333'"
          :stroke-width="currentStep === 6 ? 2.5 : 1"
        />
      </svg>
    </div>

    <!-- Bottom Architecture Legend & Metric Summary -->
    <div
      class="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-[11px] font-mono text-[var(--text-muted)]"
    >
      <div class="p-2 rounded bg-[var(--bg)]/60 border border-[var(--border)]">
        <span class="text-[var(--primary)] font-bold block mb-0.5">Protocol</span>
        <span>Model Context Protocol</span>
      </div>
      <div class="p-2 rounded bg-[var(--bg)]/60 border border-[var(--border)]">
        <span class="text-[var(--primary)] font-bold block mb-0.5">App Bridge</span>
        <span>Direct Application Services</span>
      </div>
      <div class="p-2 rounded bg-[var(--bg)]/60 border border-[var(--border)]">
        <span class="text-indigo-400 font-bold block mb-0.5">Upload Transport</span>
        <span>MCP Host Proxy (S3-safe)</span>
      </div>
      <div class="p-2 rounded bg-[var(--bg)]/60 border border-[var(--border)]">
        <span class="text-emerald-400 font-bold block mb-0.5">Registry Status</span>
        <span>Official MCP Registry</span>
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
