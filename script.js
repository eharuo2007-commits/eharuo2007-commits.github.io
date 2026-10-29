/**
 * ============================================================================
 * ENZO HARUO DE TORRES SOUZA — AI SOFTWARE ENGINEER PORTFOLIO
 * Interactive Architecture Terminal, JSON Schema Visualizer & Telemetry UI
 * ============================================================================
 */

// 1. TERMINAL PROFILES & DIAGNOSTICS DATA (HERO INTERACTIVE TERMINAL)
const TERMINAL_VIEWS = {
  profile: {
    filename: 'engineer_profile.json',
    statusText: 'SCHEMA_VALIDATED • UTF-8 • 200 OK',
    data: {
      engineer: 'Enzo Haruo de Torres Souza',
      role: 'AI Software Engineer // Systems & Backend Architecture',
      academic_credentials: [
        'Bacharelado em Tecnologia da Informação (UNIVESP)',
        'Técnico em Administração (ETEC)'
      ],
      core_languages: ['Python', 'Java', 'JavaScript / TypeScript (ES6+)', 'Kotlin', 'SQL', 'C / C#'],
      ai_engineering_stack: {
        foundation_models: 'Google Gemini API (gemini-3.8-flash / Interactions API)',
        contracts: 'Strict Structured JSON Outputs (response_format JSON Schema)',
        orchestration: ['Multi-Agent Systems', 'Semantic Routing (Softmax)', 'Hybrid RAG'],
        security_guardrails: ['Zero-Trust AI Gateway', 'LGPD PII Data Masking', 'PCI-DSS Truncation']
      },
      resilience_patterns: [
        'Neuro-Symbolic Hybrid Engines (Deterministic Rules + LLM Inference)',
        'Retry Pattern with Exponential Backoff + Full Jitter',
        'Graceful Degradation & Offline Deterministic Fallbacks',
        'Audit Persistence (IndexedDB + Relational SQL Mirrors)'
      ],
      production_repositories: 3,
      automated_test_pass_rate: '100%'
    }
  },
  architecture: {
    filename: 'neuro_symbolic_pipeline.json',
    statusText: 'PIPELINE_ACTIVE • ZERO_PII_LEAK • P95 < 240ms',
    data: {
      architecture_pattern: 'Neuro-Symbolic AI Microservices',
      stages: [
        {
          stage: '01_INGESTION_AND_ZERO_TRUST',
          latency_budget_ms: '< 0.8ms',
          operations: ['Schema Sanitization', 'LGPD PII Masking (CPF/Email/PAN)', 'FNV-1a Anti-Sybil Hashing']
        },
        {
          stage: '02_DETERMINISTIC_DOMAIN_ENGINE',
          latency_budget_ms: '< 1.2ms',
          operations: ['Haversine Geodesic + 1.34x Road Factor', 'Hard Financial Guards', 'Softmax Semantic Router']
        },
        {
          stage: '03_PREDICTIVE_LLM_INFERENCE',
          model: 'gemini-3.8-flash',
          contract_enforcement: 'Strict JSON Schema (additionalProperties: false)',
          resilience: 'Exponential Backoff + Deterministic Offline Fallback'
        },
        {
          stage: '04_AUDIT_PERSISTENCE',
          tables: ['tb_logistics_quotations', 'tb_finops_audit_logs', 'tb_nexus_orchestrator_logs'],
          engines: ['IndexedDB', 'SQLite / SQL Dump Export']
        }
      ]
    }
  },
  healthcheck: {
    filename: 'telemetry_healthcheck.json',
    statusText: 'ALL_SYSTEMS_OPERATIONAL • 3/3 ONLINE',
    data: {
      timestamp_utc: '2026-10-29T15:00:00Z',
      global_status: 'ONLINE',
      services: [
        {
          service_id: 'logiengine-ai-v2.4',
          domain: 'Logistics & Surge Pricing Engine',
          deterministic_latency_ms: 0.42,
          gemini_schema_compliance: '100%',
          storage_table: 'tb_logistics_quotations',
          status: 'HEALTHY'
        },
        {
          service_id: 'finguard-ai-v2.4',
          domain: 'FinOps, Cybersecurity & Anti-Fraud Gateway',
          pii_exposure_incidents: 0,
          deterministic_rules_active: 4,
          storage_table: 'tb_finops_audit_logs',
          status: 'HEALTHY'
        },
        {
          service_id: 'nexus-orchestrator-v2.4',
          domain: 'Multi-Agent Orchestration & RAG',
          semantic_routes: ['SUPPORT_LOGISTICS', 'FINOPS_DISPUTES', 'API_INTEGRATION'],
          rag_corpus_manuals: 9,
          storage_table: 'tb_nexus_orchestrator_logs',
          status: 'HEALTHY'
        }
      ]
    }
  }
};

// 2. REAL PRODUCTION JSON PAYLOADS & SCHEMAS FOR THE 3 PROJECTS
const PROJECT_CONTRACTS = {
  logiengine: {
    payload: {
      quotation_id: 'LOGI-2026-99412',
      route_context: {
        origin_cep: '04538-132 (Itaim Bibi - SP)',
        destination_cep: '05409-002 (Pinheiros - SP)',
        haversine_km: 4.12,
        effective_road_km: 5.52,
        deterministic_base_brl: 14.44
      },
      gemini_predictive_output: {
        surge_multiplier: 2.45,
        estimated_sla_minutes: 66,
        risk_level: 'CRITICAL',
        bottleneck_factors: [
          'Tempestade severa reduz velocidade média da frota em ~38% e eleva risco de alagamento',
          'Retenção crítica por Acidente na Via no corredor Itaim Bibi -> Pinheiros',
          'Escassez Crítica de entregadores ativos no cluster Itaim Bibi (+10 min no pareamento)'
        ],
        routing_recommendation: 'DESPACHO PRIORITÁRIO NÍVEL 1: Bloquear pedido duplo (No-Batching), expandir raio de busca para 3.5km e ativar bônus dinâmico para Motofrete Score > 4.8.',
        confidence_score: 0.94
      },
      final_tariff_brl: 35.38,
      persisted_to: 'tb_logistics_quotations'
    },
    schema: {
      type: 'object',
      properties: {
        surge_multiplier: {
          type: 'number',
          description: 'Multiplicador de precificação dinâmica (Surge Pricing) entre 1.0 e 2.5.'
        },
        estimated_sla_minutes: {
          type: 'integer',
          description: 'Tempo total estimado de entrega (SLA) em minutos inteiros.'
        },
        risk_level: {
          type: 'string',
          enum: ['LOW', 'MEDIUM', 'HIGH', 'CRITICAL']
        },
        bottleneck_factors: {
          type: 'array',
          items: { type: 'string' }
        },
        routing_recommendation: {
          type: 'string',
          description: 'Decisão técnica recomendada para alocação de modal e despacho.'
        },
        confidence_score: {
          type: 'number',
          description: 'Score de confiança da inferência preditiva entre 0.0 e 1.0.'
        }
      },
      required: [
        'surge_multiplier',
        'estimated_sla_minutes',
        'risk_level',
        'bottleneck_factors',
        'routing_recommendation',
        'confidence_score'
      ],
      additionalProperties: false
    }
  },

  finguard: {
    payload: {
      transaction_id: 'TXN-2026-9003',
      zero_trust_pii_masking: {
        customer_cpf_masked: '***.712.905-**',
        cpf_correlation_hash: 'id_cpf_8f99a2c1',
        customer_email_masked: 'ca***88@gm***.com',
        card_pan_masked: '**** **** **** 7104',
        card_correlation_hash: 'id_pan_44e19b02',
        zero_pii_exposure_verified: true
      },
      deterministic_rules_triggered: [
        'RULE_SAME_MINUTE_DUPLICATE (<= 60s window with TXN-2026-9002)',
        'RULE_HARD_REFUND_LIMIT_EXCEEDED (> R$ 350.00)'
      ],
      gemini_audit_contract: {
        fraud_score: 96.5,
        anomaly_classification: 'SUSPICIOUS_REFUND_DUPLICATION',
        recommended_action: 'AUTOMATIC_BLOCK',
        risk_indicators: [
          'Submissão concorrente de estorno no mesmo minuto para o mesmo order_id',
          'Reincidência detectada via token determinístico cpf_correlation_hash'
        ],
        explainability_report: 'Bloqueio preventivo acionado: tentativa de replay attack em solicitação de reembolso com violação simultânea de janela temporal (<60s).'
      },
      persisted_to: 'tb_finops_audit_logs'
    },
    schema: {
      type: 'object',
      properties: {
        fraud_score: {
          type: 'number',
          description: 'Score contínuo de risco de fraude de 0.0 a 100.0.'
        },
        anomaly_classification: {
          type: 'string',
          enum: [
            'NORMAL',
            'SUSPICIOUS_REFUND_DUPLICATION',
            'COUPON_ABUSE',
            'MERCHANT_DISCREPANCY',
            'CRITICAL_FRAUD'
          ]
        },
        recommended_action: {
          type: 'string',
          enum: ['APPROVE', 'HOLD_FOR_AUDIT', 'AUTOMATIC_BLOCK', 'MANUAL_REVIEW']
        },
        risk_indicators: {
          type: 'array',
          items: { type: 'string' }
        },
        explainability_report: {
          type: 'string',
          description: 'Relatório de auditoria técnica em português.'
        }
      },
      required: [
        'fraud_score',
        'anomaly_classification',
        'recommended_action',
        'risk_indicators',
        'explainability_report'
      ],
      additionalProperties: false
    }
  },

  nexus: {
    payload: {
      route_matched: 'SUPPORT_LOGISTICS',
      confidence_score: 0.96,
      retrieved_documents_used: [
        {
          doc_id: 'DOC-LOG-101',
          title: 'Protocolo Operacional de Extravio, Perda de Sinal GPS e Inatividade de Entregador',
          section: 'Seção 4.2 — Entregador Incomunicável ou Desvio Crítico de Rota',
          relevance_score: 0.98
        }
      ],
      agent_response: {
        specialist_agent: 'Atlas Dispatch & Logistics Specialist',
        summary_title: 'Protocolo P0 de Extravio em Rota (INC-LOST-IN-TRANSIT) & Garantia de Repasse',
        recommended_actions: [
          'Acionar Refazer Pedido com Prioridade P0 ou reembolso automático ao cliente.',
          'Confirmar evento HANDOFF_COMPLETED que blinda 100% do repasse financeiro da loja.'
        ],
        sla_priority: 'P0_CRITICAL',
        protocol_code: 'NX-LOG-2026-491820',
        escalation_required: true
      },
      execution_metrics: {
        model: 'gemini-3.8-flash',
        router_latency_ms: 1.2,
        rag_latency_ms: 1.8,
        llm_latency_ms: 215.4,
        total_tokens: 990
      }
    },
    schema: {
      type: 'object',
      properties: {
        route_matched: {
          type: 'string',
          enum: ['SUPPORT_LOGISTICS', 'FINOPS_DISPUTES', 'API_INTEGRATION']
        },
        confidence_score: { type: 'number' },
        retrieved_documents_used: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              doc_id: { type: 'string' },
              title: { type: 'string' },
              section: { type: 'string' },
              relevance_score: { type: 'number' }
            },
            required: ['doc_id', 'title', 'section', 'relevance_score']
          }
        },
        agent_response: {
          type: 'object',
          properties: {
            specialist_agent: { type: 'string' },
            summary_title: { type: 'string' },
            recommended_actions: { type: 'array', items: { type: 'string' } },
            sla_priority: { type: 'string', enum: ['P0_CRITICAL', 'P1_HIGH', 'P2_NORMAL'] },
            protocol_code: { type: 'string' },
            escalation_required: { type: 'boolean' }
          },
          required: ['specialist_agent', 'summary_title', 'recommended_actions', 'sla_priority', 'protocol_code', 'escalation_required']
        }
      },
      required: ['route_matched', 'confidence_score', 'retrieved_documents_used', 'agent_response'],
      additionalProperties: false
    }
  }
};

// 3. SYNTAX HIGHLIGHTER FOR JSON
function syntaxHighlightJSON(obj) {
  const jsonString = typeof obj === 'string' ? obj : JSON.stringify(obj, null, 2);
  const escaped = jsonString
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  return escaped.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    (match) => {
      let cls = 'json-number';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'json-key';
        } else {
          cls = 'json-string';
        }
      } else if (/true|false|null/.test(match)) {
        cls = 'json-boolean';
      }
      return `<span class="${cls}">${match}</span>`;
    }
  );
}

// 4. TOAST NOTIFICATION HELPER
let toastTimeout = null;
function showToast(message) {
  const toast = document.getElementById('toast-notification');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.add('visible');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
}

// 5. COPY HELPER
async function copyTextToClipboard(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    // Fallback for restricted contexts
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(successMessage);
  }
}

// 6. INITIALIZE HERO TERMINAL & PROJECT VISUALIZERS
document.addEventListener('DOMContentLoaded', () => {
  // --- A) Hero Terminal Rendering ---
  const terminalCodeEl = document.getElementById('hero-terminal-code');
  const terminalStatusEl = document.getElementById('hero-terminal-status');
  const termTabs = document.querySelectorAll('.term-tab');
  let currentTerminalKey = 'profile';

  function renderHeroTerminal(viewKey) {
    const view = TERMINAL_VIEWS[viewKey] || TERMINAL_VIEWS.profile;
    currentTerminalKey = viewKey;
    if (terminalCodeEl) {
      terminalCodeEl.innerHTML = syntaxHighlightJSON(view.data);
    }
    if (terminalStatusEl) {
      terminalStatusEl.textContent = view.statusText;
    }
    termTabs.forEach((btn) => {
      const isMatch = btn.getAttribute('data-term-view') === viewKey;
      btn.classList.toggle('active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });
  }

  termTabs.forEach((btn) => {
    btn.addEventListener('click', () => {
      const viewKey = btn.getAttribute('data-term-view');
      if (viewKey) renderHeroTerminal(viewKey);
    });
  });

  const copyTermBtn = document.getElementById('btn-copy-terminal');
  if (copyTermBtn) {
    copyTermBtn.addEventListener('click', () => {
      const view = TERMINAL_VIEWS[currentTerminalKey] || TERMINAL_VIEWS.profile;
      copyTextToClipboard(
        JSON.stringify(view.data, null, 2),
        `Copiado: ${view.filename} para a área de transferência.`
      );
    });
  }

  // Initial Hero Terminal render
  renderHeroTerminal('profile');

  // --- B) Project Cards JSON Visualizers ---
  const projectState = {
    logiengine: 'payload',
    finguard: 'payload',
    nexus: 'payload'
  };

  function renderProjectContract(projectKey, mode) {
    const contractData = PROJECT_CONTRACTS[projectKey];
    if (!contractData) return;
    projectState[projectKey] = mode;

    const codeTarget = document.getElementById(`code-${projectKey}`);
    if (codeTarget) {
      const targetObj = mode === 'schema' ? contractData.schema : contractData.payload;
      codeTarget.innerHTML = syntaxHighlightJSON(targetObj);
    }

    // Update pills
    const pills = document.querySelectorAll(`[data-project-schema="${projectKey}"]`);
    pills.forEach((pill) => {
      const pillMode = pill.getAttribute('data-mode');
      pill.classList.toggle('active', pillMode === mode);
    });
  }

  // Initialize all 3 project code viewports
  Object.keys(PROJECT_CONTRACTS).forEach((projKey) => {
    renderProjectContract(projKey, 'payload');
  });

  // Main Card Tabs ("Visão Geral" vs "Contrato JSON Schema / Arquitetura")
  const visTabs = document.querySelectorAll('.vis-tab');
  visTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const projectKey = tab.getAttribute('data-project');
      const targetPane = tab.getAttribute('data-pane');
      if (!projectKey || !targetPane) return;

      // Update tab buttons in this project card
      const siblingTabs = document.querySelectorAll(`.vis-tab[data-project="${projectKey}"]`);
      siblingTabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });

      // Update panes in this project card
      const panes = document.querySelectorAll(`.visualizer-pane[data-project-pane="${projectKey}"]`);
      panes.forEach((pane) => {
        const isTarget = pane.getAttribute('data-pane-id') === targetPane;
        pane.classList.toggle('active', isTarget);
      });
    });
  });

  // Sub-mode pills inside JSON tab ("Payload Real" vs "JSON Schema Estrito")
  const schemaPills = document.querySelectorAll('.schema-pill');
  schemaPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const projKey = pill.getAttribute('data-project-schema');
      const mode = pill.getAttribute('data-mode');
      if (projKey && mode) {
        renderProjectContract(projKey, mode);
      }
    });
  });

  // Copy JSON buttons inside each Project Card
  const copyJsonButtons = document.querySelectorAll('.btn-copy-json');
  copyJsonButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projKey = btn.getAttribute('data-copy-project');
      if (!projKey || !PROJECT_CONTRACTS[projKey]) return;
      const mode = projectState[projKey] || 'payload';
      const payloadToCopy = PROJECT_CONTRACTS[projKey][mode];
      copyTextToClipboard(
        JSON.stringify(payloadToCopy, null, 2),
        `Contrato JSON (${projKey.toUpperCase()} - ${mode.toUpperCase()}) copiado!`
      );
    });
  });

  // --- C) Copy Email & Copy Portfolio URL ---
  const copyEmailBtn = document.getElementById('btn-copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      copyTextToClipboard('eharuo2007@gmail.com', 'E-mail copiado: eharuo2007@gmail.com');
    });
  }

  const copyPortfolioBtn = document.getElementById('btn-copy-portfolio');
  if (copyPortfolioBtn) {
    copyPortfolioBtn.addEventListener('click', () => {
      const portfolioUrl = window.location.href.startsWith('http')
        ? window.location.href
        : 'https://eharuo2007-commits.github.io/';
      copyTextToClipboard(portfolioUrl, `Link do portfólio copiado: ${portfolioUrl}`);
    });
  }

  // --- D) Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const topbarNav = document.getElementById('topbar-nav');
  if (mobileToggle && topbarNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = topbarNav.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when clicking a nav link on mobile
    topbarNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        topbarNav.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
