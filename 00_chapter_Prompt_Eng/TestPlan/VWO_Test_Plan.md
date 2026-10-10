# VWO Platform Test Plan

## 1. Test Plan ID and Title

| Field | Value |
| --- | --- |
| Test Plan ID | VWO-TP-001 (locally assigned) |
| Title | VWO Digital Experience Optimization Platform - High-Level Test Plan |
| Version | 1.0 - Draft for stakeholder review |
| Status | Draft; approval pending |
| Product | VWO (Visual Website Optimizer) |
| Planned test environment | Dedicated QA/test environment; URL not provided |
| Target clients | Desktop Chrome and Firefox; exact versions and operating systems TBD |

## 2. Objective and References

### Objective

Define a risk-based, high-level test approach for validating the VWO platform capabilities described in the supplied PRD. The plan establishes scope, traceability, environments and data needs, proposed entry/exit criteria, responsibilities, defect handling, and approval expectations. It is a test-planning artifact; it does not assert that tests have been designed in detail, executed, passed, or that the product is compliant or production-ready.

### Reference

- Product Requirements Document (PRD) VWO.com, prepared January 7, 2026, supplied by the requester. In particular, Sections 4-7 describe capabilities, user flows, functional requirements, and non-functional requirements.
- `02_RICE_POT_Generic_QA_Template.md`, Profile B - Test plan, used for the required plan structure.

The PRD is a high-level product description. The requester confirmed that no additional detailed acceptance criteria or product specifications are available; supported configurations and verification evidence are also not supplied. Requirement labels in this plan are local traceability labels derived from the PRD, not external requirement IDs.

## 3. In Scope and Out of Scope

### In scope

High-level verification planning for the following PRD capabilities:

- Experiment setup and lifecycle: A/B, split URL, and multivariate tests; multiple variations; hypothesis, audience, goals/metrics, launch, monitoring, and conclusion.
- SmartStats Bayesian analysis and experiment-result reporting.
- Visual and code editors, including the PRD's two-second editing-workflow response target.
- VWO Insights: heatmaps, session recordings, on-page surveys/feedback, and funnel analytics.
- Behavior-based audience targeting and personalization for configured user segments.
- Real-time reporting and dashboards.
- Integration connectors and data synchronization for all connectors named in the PRD: Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, Google Analytics, and Mixpanel.
- Collaboration, planning, and workflow management, including Kanban-style experiment backlogs.
- Applicable cross-cutting non-functional requirements: security controls, privacy, scalability, and reliability.
- Functional testing, integration testing, regression testing, cross-browser checks on the agreed desktop targets, performance testing, reliability testing, privacy/compliance assessment, and authorized formal security testing.

### Out of scope

- Unspecified product behavior or detailed acceptance criteria not established by the PRD or later approved requirements.
- AI-driven test suggestions, native mobile SDK enhancements, predictive analytics, and ROI forecasting listed as future enhancements.
- Pricing, licensing, procurement, and commercial-plan validation.
- Certification or legal attestation of GDPR, CCPA, or other regional compliance.
- Unapproved penetration testing, testing against production without written authorization, and destructive or disruptive traffic generation.
- A full mobile-browser/device matrix; the currently selected client targets are desktop Chrome and Firefox.
- Exhaustive testing of every integration configuration beyond the eight PRD-named connectors and approved test scenarios.

## 4. Requirements and Planned Coverage

The following local IDs are assigned from PRD Sections 6 and 7 for traceability. Coverage is planned only; test cases and results are not yet produced.

| Local ID | PRD requirement | Priority in PRD | Planned coverage |
| --- | --- | --- | --- |
| FR-01 | Execute experiments with multiple variations, including A/B, split URL, and multivariate testing | Must | Functional lifecycle, variation configuration, launch/monitor/conclude flows, and regression |
| FR-02 | Provide Bayesian analysis for test results through SmartStats | Must | Statistical result presentation and consistency checks against approved synthetic scenarios/oracle data; statistical acceptance rules require product-owner definition |
| FR-03 | Support WYSIWYG and developer-level experiment setup | Must | Visual/code editor workflows, saving and publishing configuration, usability and editing response time |
| FR-04 | Capture user interactions for Insights heatmaps and session recordings | Must | Capture, processing, access, and display of approved synthetic interaction data; privacy/consent behavior must be clarified |
| FR-05 | Enable behavior-based audience segmentation | High | Segment creation and audience qualification using agreed synthetic attributes and behavior events |
| FR-06 | Deliver up-to-date experiment analytics through reporting and dashboards | Must | Report freshness, metric consistency, dashboard display, filters and relevant regression |
| FR-07 | Deliver tailored experiences to user segments | High | Personalization eligibility, content delivery, segment boundaries, and fallback behavior once specified |
| FR-08 | Synchronize data with external platforms | High | Contract and end-to-end integration checks for Shopify, Salesforce, Segment, Snowflake, WordPress, Drupal, Google Analytics, and Mixpanel in sandbox/test configurations |
| FR-09 | Provide planning and team-task collaboration/workflow tools | Medium | Core planning, Kanban, collaboration, and role-permission workflows |
| NFR-01 | Editing workflows respond within 2 seconds | PRD target | Measure agreed editing operations in the QA environment. The measurement method, percentile, workload, and sample size are open; proposed criteria are in Section 7. |
| NFR-02 | Security controls: 2FA, role-based access control, and activity logs | PRD statement | Functional control verification plus an authorized formal security assessment in an approved non-production scope |
| NFR-03 | Support high visitor volumes without performance loss | Qualitative | Load, stress, and scalability assessment against an agreed traffic profile and measurable degradation/error thresholds |
| NFR-04 | Comply with GDPR, CCPA, and regional data policies | PRD statement | Privacy/data-handling verification and evidence review against approved requirements by designated privacy/legal owners; no certification claim |
| NFR-05 | 99.9% uptime SLA for enterprise customers | PRD target | Reliability/availability evidence and monitoring review over an agreed measurement window; requester confirmed the measurement window and service boundary are not defined yet |

Cross-cutting coverage should include the primary PRD user groups where access and representative test accounts are available: CRO specialists, product managers, UX designers, digital marketers, analysts, engineering teams, and business executives. Exact role names and permission matrices must be confirmed.

## 5. Test Approach, Levels, and Types

### Approach

Use risk-based testing, prioritizing Must requirements, security and privacy risks, experiment/result correctness, and end-to-end user journeys. Derive detailed test cases and expected results only after acceptance criteria, supported configurations, and data behavior are confirmed. Maintain a traceability matrix from approved requirements to test cases, defects, and execution evidence.

Use a mix of manual exploratory and scripted functional testing with automation where stable workflows and selectors/interfaces permit. Keep automation and performance/security tooling vendor-neutral until the team confirms its standards. No automation framework or tool is selected by this plan.

### Test levels

- Component/system functional testing of the individual platform capabilities.
- Integration testing across VWO components and agreed external connectors.
- End-to-end testing of representative workflows, including setting up an experiment and analyzing behavioral data.
- Regression testing for affected capabilities and critical journeys after relevant changes.
- User acceptance review by designated product/domain stakeholders; ownership is TBD.

### Test types

- Functional, negative, boundary, permissions, and workflow testing where behavior is specified.
- Cross-browser functional checks on desktop Chrome and Firefox.
- Integration and data-consistency checks for configured connectors.
- Performance testing of editing workflows and agreed high-volume scenarios.
- Reliability and availability testing against the agreed service boundary and measurement window.
- Security control testing for 2FA, role-based access, and activity logs, plus formal security testing in a specifically authorized non-production environment.
- Privacy and compliance assessment of data collection, access, retention, deletion, and regional handling against approved policy requirements.
- Exploratory testing focused on complex experiment setup, audience targeting, result interpretation, and recovery/error paths.

Formal security and compliance work is in scope at the planning level, but execution requires a defined assessment scope, written authorization, approved methods, designated owners, and applicable acceptance criteria. Compliance review must be performed or approved by qualified privacy/legal stakeholders.

## 6. Environment, Tools, Access, and Test Data

| Item | Planned value / status |
| --- | --- |
| Environment | Dedicated QA/test environment selected; URL, build identification, configuration, and readiness evidence not provided |
| Client targets | Desktop Chrome and Firefox selected; versions, operating systems, viewport sizes, and test matrix TBD |
| Test tools | Vendor-neutral. Test management, automation, performance, security, and reporting tools TBD |
| Accounts and roles | Not provided; availability is unconfirmed. Provision synthetic accounts for each approved role and permission profile; verify 2FA setup where applicable |
| Project/site data | Not provided. Prepare an approved test project and synthetic website or safe test property instrumented for experimentation and Insights |
| Experiment data | Synthetic experiments, variations, goals, events, and results; expected SmartStats values/oracles require product-owner or data-science agreement |
| Traffic data | Synthetic or approved anonymized traffic; workload shape, visitor counts, concurrency, and event volume TBD. Requester confirmed workload figures are not defined yet |
| Integrations | All eight PRD-named connectors are the intended coverage target. Sandbox/test credentials and endpoint configuration are not confirmed. No real customer credentials or production data |
| Privacy data | Synthetic data only unless separately approved. Define consent, retention, deletion, residency, and regional-policy test cases with the responsible owners |
| Security testing | Written authorization, named scope, test window, contact/escalation route, data-handling rules, and stop conditions required before formal testing |
| Dependencies | Stable QA build, monitoring/log access, test data reset capability, integration sandboxes, product acceptance criteria, and designated technical/domain contacts |

Credentials and secrets must be provided through the organization's approved secret-management mechanism and must not be placed in the test plan or source-controlled test data.

## 7. Entry and Exit Criteria

The following are proposed planning criteria for stakeholder review, not approved release gates. Adjust or approve measurable values before execution.

### Proposed entry criteria

- A build is deployed to the dedicated QA environment, its version is identified, and environment health checks pass.
- In-scope requirements and acceptance criteria are reviewed; ambiguous expected outcomes are resolved or explicitly excluded from execution.
- Desktop Chrome and Firefox versions and supported operating systems are agreed and available.
- Synthetic user accounts, role permissions, test projects, websites, experiment configurations, and data-reset procedures are ready.
- Agreed integration sandboxes are reachable and test credentials/configuration are provisioned.
- Monitoring, logs, and required observability are accessible to the test team.
- Performance workload and measurement protocol, privacy review criteria, and availability measurement window are approved.
- Formal security testing has written authorization, a defined target scope and test window, and agreed escalation/stop conditions.
- Test cases are reviewed, prioritized, and traceable to approved requirements.

### Proposed exit criteria

- 100% of approved in-scope requirements have mapped tests; 100% of P0/P1 tests and at least 95% of all planned tests have execution results. The priority definitions and thresholds require stakeholder approval.
- All executed P0/P1 tests pass; no open Critical or High defects remain. Any exception requires documented risk acceptance by the designated product/release owner.
- Overall pass rate is at least 95% of executed planned tests, with blocked, failed, and not-run cases reported separately and remaining failures dispositioned.
- The approved editing-workflow performance sample meets the PRD's 2-second target for each agreed operation and measurement rule. The requester selected p95 response time <= 2 seconds as the proposed measurement, pending formal stakeholder approval; operation list, sample size, and load must also be approved before execution.
- Scalability results meet agreed visitor/event-volume, error-rate, latency, and resource thresholds. The PRD does not provide numerical thresholds, so these must be agreed before a scalability exit decision.
- Reliability evidence is evaluated over the agreed window against the PRD's 99.9% uptime target and its agreed service boundary, exclusions, and calculation method. The requester confirmed the measurement window and service boundary are not defined yet.
- No unresolved Critical or High security findings remain unless formally risk-accepted by an authorized owner. Formal test scope and severity rubric must be approved before execution.
- Privacy/compliance findings have documented disposition and approval from designated privacy/legal owners. This is not a certification of GDPR, CCPA, or regional compliance.
- Test summary, requirement coverage, defect status, exceptions, risks, and residual limitations are reviewed by the approvers listed in Section 12.

## 8. Roles, Responsibilities, Estimates, and Schedule

| Role | Responsibility | Owner / estimate |
| --- | --- | --- |
| Product owner / product manager | Confirm requirements, business priorities, expected behavior, acceptance thresholds, and risk decisions | Not provided |
| QA lead / test manager | Maintain plan and traceability, coordinate execution, report status and risks, recommend test completion | Not provided |
| QA engineers | Design and execute functional, integration, regression, and exploratory tests; record evidence and defects | Not provided |
| Engineering / DevOps | Provide stable builds, environment, observability, data reset, and defect support | Not provided |
| Security owner / authorized assessor | Approve and conduct formal security assessment; triage security findings | Not provided |
| Privacy/legal owner | Define applicable privacy requirements and review evidence/findings | Not provided |
| Integration owners | Provide connector scope, sandbox access, schemas, and expected synchronization behavior | Not provided |
| Business/domain representatives | Review UAT scenarios and business acceptability | Not provided |

Schedule, effort estimates, staffing, release milestone, and execution cadence are not supplied and remain TBD. Estimate them after the connector subset, acceptance criteria, environment readiness, security assessment scope, and detailed test inventory are agreed.

## 9. Defect Management and Reporting

- Record defects in the organization's approved tracking system (tool TBD), linked to the local requirement ID, test case, build, environment, and evidence.
- Include a concise title, preconditions, reproducible steps, expected and actual results, impact, severity/priority, and relevant logs or screenshots. Redact secrets and personal data.
- Use the organization's severity and priority definitions. Until provided, proposed triage labels are Critical, High, Medium, and Low; final assignment is agreed by QA, engineering, and product owners.
- Triage Critical and High issues promptly and before further dependent execution; agree owner, target resolution, retest, and regression scope.
- Report execution status, requirement coverage, pass/fail/blocked/not-run counts, open defects, risks, and decisions at an agreed cadence. Cadence and recipients are TBD.
- Security and privacy findings must be routed through approved restricted reporting channels and handled under the organization's incident and disclosure procedures.

## 10. Risks, Dependencies, Assumptions, and Open Questions

### Risks

- The PRD is broad and lacks detailed acceptance criteria; detailed coverage or expected results could otherwise be inferred incorrectly.
- SmartStats correctness requires an agreed statistical oracle and representative datasets.
- Undefined visitor volume and performance protocol make the qualitative scalability requirement difficult to verify.
- Missing role/permission definitions and test accounts may block access-control coverage.
- External connector behavior depends on vendor sandboxes, schemas, credentials, and rate limits; access to all eight PRD-named connectors is not confirmed.
- Privacy and formal security assessment requirements may differ by customer, region, and approved test scope.
- The uptime SLA cannot be evaluated without a service boundary, measurement period, exclusions, and reliable telemetry.

### Assumptions

- The supplied PRD is the approved source for this initial high-level plan; local FR/NFR labels are used only for traceability.
- The selected target is a dedicated QA/test environment, with desktop Chrome and Firefox as initial client coverage.
- The initial integration coverage target is all eight connectors named in the PRD; availability and release inclusion require confirmation.
- Test data will be synthetic or explicitly approved and anonymized.
- Formal security and compliance testing is requested, but no written security assessment scope or named authorizer is available yet. Execution will occur only after authorization and scope approval.
- Where the PRD gives no threshold, workload, behavior, or owner, this plan marks it TBD or identifies a proposed criterion for review rather than treating it as a confirmed requirement.

### Open questions

1. The requester selected a dedicated QA environment but did not provide its URL. What are the URL, build/deployment process, supported browser/version matrix, and access process?
2. Test-account availability is unconfirmed. Which product roles and exact permissions are supported, and who will provision synthetic test accounts and 2FA?
3. All eight PRD-named connectors are the intended coverage target. Can they be enabled in the target release and QA environment, and what sandbox/test credentials and expected data contracts are available?
4. The requester confirmed that no detailed criteria beyond the high-level PRD are available. What are the approved acceptance criteria for experiment states, SmartStats results, reporting freshness, targeting, personalization, and failure/fallback behavior?
5. The requester confirmed that visitor/event workload figures are not defined yet and selected p95 <= 2 seconds as the proposed editing-workflow metric, pending formal stakeholder approval. Which editing actions, sample size, baseline workload, and scalability degradation thresholds should be agreed?
6. The requester confirmed that the uptime measurement window and service boundary are not defined yet. What exclusions and evidence source apply to the 99.9% target, and who will approve the measurement definition?
7. No written assessment scope or named security authorizer is available yet; both are prerequisites to formal security testing. Who will approve the scope, written authorization, methodology, severity rubric, schedule, and reporting channel?
8. Which regional privacy policies and data-handling obligations apply, and who approves compliance evidence?
9. Who owns test execution, UAT, defect decisions, release acceptance, schedule, and reporting cadence?

## 11. Suspension and Resumption Criteria

### Suspend affected testing when

- The QA environment is unavailable, unstable, or materially differs from the agreed configuration.
- A defect corrupts shared test data, blocks a critical workflow, or makes results unreliable.
- Required accounts, permissions, integrations, or test data are unavailable.
- A security/privacy test lacks current written authorization or exceeds its approved scope.
- Testing causes unexpected impact to a shared service, external system, or data set.
- A critical defect or safety concern requires investigation before dependent tests continue.

QA lead and the relevant environment, product, or security owner should document the reason, affected scope, risks, and restart conditions. Stop formal security activity immediately if authorization boundaries or stop conditions are reached.

### Resume when

- The blocker is resolved and the environment/build is confirmed stable.
- Impacted test data and accounts are restored or recreated.
- The relevant owner confirms the fix/configuration and security authorization remains valid.
- Required smoke tests pass and the QA lead records the resumption decision and any retest/regression scope.

## 12. Test Deliverables and Approval

### Planned deliverables

- Approved version of this high-level test plan.
- Detailed test inventory and requirement-to-test traceability matrix.
- Test data and environment readiness checklist without secrets or real personal data.
- Functional, integration, regression, performance, reliability, privacy, and authorized security execution evidence as applicable to the approved scope.
- Defect records and triage decisions.
- Test summary report with coverage, execution status, risks, unresolved issues, and recommendation; recommendation is not a claim of compliance or guaranteed product quality.

### Approval

Approval is pending. Confirm names and approval authority before execution.

| Approver role | Name | Decision / date |
| --- | --- | --- |
| Product owner | TBD | Pending |
| QA lead / test manager | TBD | Pending |
| Engineering / release owner | TBD | Pending |
| Security owner (for formal security scope) | TBD | Pending |
| Privacy/legal owner (for compliance evidence) | TBD | Pending |
