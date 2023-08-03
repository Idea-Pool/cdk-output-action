import * as core from '@actions/core'
import {getConfig} from './input'
import {parseCDKOutput} from './parse'

async function run(): Promise<void> {
  try {
    // 0. Get inputs
    const config = getConfig()
    // 1. Load and parse output
    const outputs = parseCDKOutput(config)

    if (config.saveToRepoEnv) {
      // 3. Saving to repo environment variables
    }

    if (config.saveToRepoSecrets) {
      // 4. Saving to repo secrets
    }

    if (config.saveAsArtifact) {
      // 5. Saving as artifact
    }

    if (config.outputJobSummary) {
      // 6. Build job summary
      core.summary
        .addHeading('CDK Ouput')
        .addTable([
          [
            {data: 'Key', header: true},
            {data: 'Value', header: true}
          ],
          ...Object.keys(outputs).map(key => [key, outputs[key]])
        ])
        .write()
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
