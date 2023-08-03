import * as core from '@actions/core'

export interface ActionProps {
  outputPath: string
  saveToRepoEnv?: boolean
  saveToRepoSecrets?: boolean
  outputJobSummary?: boolean
  saveAsArtifact?: boolean
  artifactName: string
  appendStackName?: boolean
  trimUUID?: boolean
  keys: string
}

export function getConfig(): ActionProps {
  return {
    outputPath: core.getInput('output_path'),
    artifactName: core.getInput('artifact_name'),
    keys: core.getInput('keys'),
    saveToRepoEnv: core.getBooleanInput('save_to_repo_env'),
    saveToRepoSecrets: core.getBooleanInput('save_to_repo_secrets'),
    outputJobSummary: core.getBooleanInput('output_job_summary'),
    appendStackName: core.getBooleanInput('append_stack_name'),
    trimUUID: core.getBooleanInput('trim_uuid')
  }
}
