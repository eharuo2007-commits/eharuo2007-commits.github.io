# Enzo Haruo de Torres Souza — AI Software Engineer Portfolio (`eharuo.dev`)

> **Portfólio Técnico e Arquitetural em Dark Mode (`#0D1117`)** focado em **Sistemas de Software Resilientes Integrados à Inteligência Artificial**: Motores Híbridos Neuro-Simbólicos (Regras Determinísticas + LLMs), Microsserviços com **Structured JSON Outputs**, Gateways **Zero-Trust (LGPD PII Masking)** e **Orquestração Multi-Agente com RAG**.

- **Live Portfolio (GitHub Pages):** [https://eharuo2007-commits.github.io/](https://eharuo2007-commits.github.io/)
- **GitHub Oficial:** [https://github.com/eharuo2007-commits](https://github.com/eharuo2007-commits)
- **LinkedIn:** [https://linkedin.com/in/enzoharuo](https://linkedin.com/in/enzoharuo)
- **Contato:** [eharuo2007@gmail.com](mailto:eharuo2007@gmail.com)
- **Formação:** Bacharelado em Tecnologia da Informação (**UNIVESP**) • Técnico em Administração (**ETEC**)

---

## 1. Arquiteturas em Produção (3 Core Projects)

| # | Sistema | Domínio Técnico | Destaques de Engenharia | Links Oficiais |
| :-: | :--- | :--- | :--- | :--- |
| **01** | **LogiEngine AI** | `LOGISTICS & SURGE PRICING ENGINE` | Cálculo geodésico Haversine por CEP + fator viário `1.34x`, tarifação determinística (`R$ 1,80/km`), inferência `gemini-3.8-flash` com **Strict JSON Schema** para Surge Pricing (`1.0x`–`2.5x`) e SLA dinâmico, fallback offline e persistência em `tb_logistics_quotations`. | [Repositório](https://github.com/eharuo2007-commits/delivery-logistics-ai-engine) · [Live Demo](https://eharuo2007-commits.github.io/delivery-logistics-ai-engine/) |
| **02** | **FinGuard AI** | `FINOPS, CYBERSECURITY & ANTI-FRAUD` | Gateway Zero-Trust com sanitização **LGPD / PCI-DSS** em tempo real (CPF, e-mail, PAN truncado e hashes `FNV-1a` anti-Sybil), 4 regras determinísticas (`<1ms`), **Retry Pattern com Exponential Backoff + Full Jitter** e persistência SQL em `tb_finops_audit_logs`. | [Repositório](https://github.com/eharuo2007-commits/finops-fraud-guardian-ai) · [Live Demo](https://eharuo2007-commits.github.io/finops-fraud-guardian-ai/) |
| **03** | **Nexus Orchestrator** | `MULTI-AGENT ORCHESTRATION & RAG` | **Semantic Router** com distribuição Softmax calibrada ($T=2.8$) para 3 sub-agentes (*Atlas*, *Ledger*, *Pulse*), motor **RAG Híbrido** sobre 9 manuais operacionais com citação de fontes, painel Raio-X Split-View e persistência em `tb_nexus_orchestrator_logs`. | [Repositório](https://github.com/eharuo2007-commits/omnichannel-rag-orchestrator) |

---

## 2. Matriz de Competências de Engenharia (Tech Stack)

1. **Engenharia de IA & LLMs:** Google AI Studio, Google Gemini API (`@google/genai` / Interactions API), Structured Outputs (`response_format` JSON Schema), Prompt Engineering Avançado, RAG Híbrido e Orquestração de Agentes.
2. **Desenvolvimento & Backend:** Python, Java, JavaScript / TypeScript (Node.js / ES Modules), Kotlin (Android / Jetpack Compose), C / C#, APIs REST.
3. **Dados, Persistência & DevOps:** SQL (SQLite, Modelagem Relacional), IndexedDB, Git / GitHub, Linux, Testes Automatizados (Node.js Test Runner & Vitest).
4. **Arquitetura & Segurança:** Clean Architecture, Padrões de Resiliência (Retry Exponential Backoff + Jitter, Graceful Degradation / Fallback), Cybersecurity Blue Team & LGPD PII Data Masking.

---

## 3. Identidade Visual & Design System

Construído segundo os princípios de **Brutalismo Técnico Limpo** (inspirado em GitHub Dark, Linear e Vercel):

- **Background Principal:** `#0D1117`
- **Cards & Superfícies:** `#161B22` (bordas `#30363D` e hover `#58A6FF`)
- **Destaque Primário (Brand / Action):** `#EA1D2C`
- **Destaque Secundário (Telemetry / IA):** `#3FB950` (Verde Operacional) e `#58A6FF` (Azul IA)
- **Tipografia:** `Inter` (Títulos e Corpo) + `JetBrains Mono` (Badges técnicos, telemetria e visualizadores JSON Schema)

---

## 4. Estrutura de Arquivos e Execução Local

```text
.
├── index.html   # Estrutura semântica, Hero com Terminal Interativo e 3 Cards de Arquitetura
├── styles.css   # Design System Dark Mode (#0D1117), Grid Técnico, Glassmorphism e Responsividade
├── script.js    # Visualizador interativo de JSON Schema/Payloads, Terminal e Clipboard
└── README.md    # Documentação executiva do portfólio
```

Para executar localmente, basta abrir o arquivo `index.html` diretamente em qualquer navegador moderno ou servir via HTTP estático:

```bash
npx serve .
```
