# Dummy Terraform configuration for Lab 02 scope testing.
# The implementation-only agent MUST NOT modify files in this directory.

terraform {
  required_version = ">= 1.5"
}

provider "aws" {
  region = var.region
}

variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

resource "aws_s3_bucket" "example" {
  bucket = "gh600-lab02-example-bucket"
}
