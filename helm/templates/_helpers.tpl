{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "chart.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "chart.fullname" -}}
{{- if .Values.fullnameOverride -}}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- $name := default .Chart.Name .Values.nameOverride -}}
{{- if contains $name .Release.Name -}}
{{- .Release.Name | trunc 63 | trimSuffix "-" -}}
{{- else -}}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
{{- end -}}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "chart.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Common labels
*/}}
{{- define "chart.labels" -}}
helm.sh/chart: {{ include "chart.chart" . }}
{{ include "chart.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end -}}

{{/*
Selector labels
*/}}
{{- define "chart.selectorLabels" -}}
app.kubernetes.io/name: {{ include "chart.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{/*
Render the appropriate ECR prefix
*/}}
{{- define "chart.registryForNamespace" -}}
{{- if eq .Release.Namespace "prod" -}}
    066715422474.dkr.ecr.eu-central-1.amazonaws.com
{{- else if eq .Release.Namespace "devprod" -}}
    066715422474.dkr.ecr.eu-central-1.amazonaws.com
{{- else if eq .Release.Namespace "ort" -}}
    066715422474.dkr.ecr.eu-central-1.amazonaws.com
{{- else if eq .Release.Namespace "e2e" -}}
    160260724909.dkr.ecr.eu-central-1.amazonaws.com
{{- else -}}
    160260724909.dkr.ecr.eu-central-1.amazonaws.com
{{- end -}}
{{- end -}}

{{/*
Service Account/Role depending on the namespace
*/}}
{{- define "chart.serviceAccountForEnvironment" -}}
{{- if eq .Release.Namespace "prod" -}}
arn:aws:iam::066715422474:role/custom-marquez-prod-eks-cluster-prod-eichershop
{{- else if eq .Release.Namespace "devprod" -}}
arn:aws:iam::066715422474:role/custom-marquez-prod-eks-cluster-devprod-eichershop
{{- else if eq .Release.Namespace "ort" -}}
arn:aws:iam::066715422474:role/custom-marquez-prod-eks-cluster-ort-eichershop
{{- else if eq .Release.Namespace "e2e" -}}
arn:aws:iam::160260724909:role/custom-marquez-dev-eks-cluster-e2e-eichershop
{{- else -}}
arn:aws:iam::160260724909:role/custom-marquez-dev-eks-cluster-dev-eichershop
{{- end -}}
{{- end -}}

{{/*
Render the appropriate SSO Public Key Path depending on the namespace.
*/}}
{{- define "chart.ssoPublicKeyPathForNamespace" -}}
{{- if eq .Release.Namespace "prod" -}}
    "websso-prod.pem"
{{- else if eq .Release.Namespace "devprod" -}}
    "websso-test.pem"
{{- else if eq .Release.Namespace "ort" -}}
    "websso-prod.pem"
{{- else if eq .Release.Namespace "e2e" -}}
    "websso-test.pem"
{{- else -}}
    "websso-test.pem"
{{- end -}}
{{- end -}}

{{/*
Render the appropriate Splunk token per namespace
  agentcockpit, agentcockpit_test, agentcockpit_dev
*/}}
{{- define "chart.splunkTokenForNamespace" -}}
{{- if eq .Release.Namespace "prod" -}}
    A1111111-222E-EC43-AAED-3453ACE33E65
{{- else if eq .Release.Namespace "devprod" -}}
    C3333333-222E-EC43-AAED-3453ACE33E65
{{- else if eq .Release.Namespace "ort" -}}
    C3333333-222E-EC43-AAED-3453ACE33E65
{{- else if eq .Release.Namespace "e2e" -}}
    C3333333-222E-EC43-AAED-3453ACE33E65
{{- else -}}
    B2222222-222E-EC43-AAED-3453ACE33E65
{{- end -}}
{{- end -}}


{{/*
Kafka bootstrap address depending on the namespace.
*/}}
{{- define "chart.kafkaBootstrapAddress" -}}
{{- if eq .Release.Namespace "prod" -}}
    "kafka-psv.cesp.aws.de.pri.o2.com:9092"
{{- else if eq .Release.Namespace "devprod" -}}
    "kafka-psv.cesp.aws.de.pri.o2.com:9092"
{{- else if eq .Release.Namespace "ort" -}}
    "kafka-psv.cesp.aws.de.pri.o2.com:9092"
{{- else if eq .Release.Namespace "e2e" -}}
    "kafka-psv.dev.cesp-dev.aws.de.pri.o2.com:9092"
{{- else -}}
    "kafka-psv.dev.cesp-dev.aws.de.pri.o2.com:9092"
{{- end -}}
{{- end -}}

{{/*
Schema registry address depending on the namespace.
*/}}
{{- define "chart.schemaRegistryUrl" -}}
{{- if eq .Release.Namespace "prod" -}}
    "https://schema-registry.cesp.aws.de.pri.o2.com"
{{- else if eq .Release.Namespace "devprod" -}}
    "https://schema-registry.cesp.aws.de.pri.o2.com"
{{- else if eq .Release.Namespace "ort" -}}
    "https://schema-registry.cesp.aws.de.pri.o2.com"
{{- else if eq .Release.Namespace "e2e" -}}
    "https://schema-registry.dev.cesp-dev.aws.de.pri.o2.com"
{{- else -}}
    "https://schema-registry.dev.cesp-dev.aws.de.pri.o2.com"
{{- end -}}
{{- end -}}
