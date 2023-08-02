import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    // 0. Get inputs
    const outputPath: string = core.getInput('output_path')
    core.debug(`output_path: ${outputPath}`)

    const artifactName: string = core.getInput('artifact_name')
    core.debug(`artifact_name: ${artifactName}`)

    const saveToRepoEnv: boolean = core.getBooleanInput('save_to_repo_env')
    core.debug(`save_to_repo_env: ${saveToRepoEnv}`)

    const saveToRepoSecrets: boolean = core.getBooleanInput(
      'save_to_repo_secrets'
    )
    core.debug(`save_to_repo_secrets: ${saveToRepoSecrets}`)

    const outputJobSummary: boolean = core.getBooleanInput('output_job_summary')
    core.debug(`output_job_summary: ${outputJobSummary}`)

    const saveAsArtifact: boolean = core.getBooleanInput('save_as_artifact')
    core.debug(`save_as_artifact: ${saveAsArtifact}`)

    const keys: string = core.getInput('keys')
    core.debug(`keys: ${keys}`)

    // 1. Load file
    // 2. Parse output

    if (saveToRepoEnv) {
      // 3. Saving to repo environment variables
    }

    if (saveToRepoSecrets) {
      // 4. Saving to repo secrets
    }

    if (saveAsArtifact) {
      // 5. Saving as artifact
    }

    if (outputJobSummary) {
      // 6. Build job summary
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
