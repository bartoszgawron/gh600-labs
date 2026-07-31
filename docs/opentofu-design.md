# OpenTofu Infrastructure Design Document

## Overview

This document describes the design and intended usage of the OpenTofu-based infrastructure in this repository. OpenTofu is an open-source fork of Terraform that is fully compatible with existing Terraform configurations and provider ecosystems.

---

## Goals

- Provision and manage cloud infrastructure declaratively using OpenTofu.
- Maintain infrastructure-as-code (IaC) in the `infra/` directory.
- Enable repeatable, version-controlled deployments across environments.

---

## Directory Structure

```
infra/
└── main.tf        # Root module: provider, variables, and core resources
```

Additional modules may be added under `infra/modules/` as the project grows.

---

## Root Module (`infra/main.tf`)

### Provider

The root module targets **AWS** using the `hashicorp/aws` provider. The region is configurable via the `region` variable (default: `us-east-1`).

### Variables

| Name     | Type   | Default       | Description          |
|----------|--------|---------------|----------------------|
| `region` | string | `us-east-1`   | AWS deployment region |

### Resources

| Resource                  | Type             | Purpose                          |
|---------------------------|------------------|----------------------------------|
| `aws_s3_bucket.example`   | `aws_s3_bucket`  | Example S3 bucket for lab use    |

---

## Runtime Requirements

- **OpenTofu** >= 1.5 (or Terraform >= 1.5 for compatibility)
- AWS credentials available in the execution environment (environment variables, shared credentials file, or IAM role)

---

## Usage

### Initialize

```bash
tofu init
```

### Plan

```bash
tofu plan -var="region=us-east-1"
```

### Apply

```bash
tofu apply -var="region=us-east-1"
```

### Destroy

```bash
tofu destroy -var="region=us-east-1"
```

---

## Agent Interaction Guidelines

The `implementation-only` agent (see `examples/custom-agents/implementation-only.md`) **must not** modify files under `infra/`. Infrastructure changes require review and approval before being applied.

The `implementation-planner` agent (see `examples/custom-agents/implementation-planner.md`) is responsible for producing reviewable plans for any infrastructure changes before implementation proceeds.

---

## Future Work

- Add remote state backend configuration (e.g., S3 + DynamoDB for state locking).
- Introduce environment-specific variable files (`dev.tfvars`, `prod.tfvars`).
- Modularize resources (networking, compute, storage) under `infra/modules/`.
- Integrate OpenTofu with CI/CD pipelines using GitHub Actions.

---

**Last updated**: 2026  
**Owner**: Infrastructure team
