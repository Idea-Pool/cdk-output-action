import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

interface ActionProps {
  outputPath?: string
  saveToRepoEnv?: boolean
  saveToRepoSecrets?: boolean
  outputJobSummary?: boolean
  saveAsArtifact?: boolean
  artifactName?: string
  keys?: string
}

function runAction(props?: ActionProps) {
  process.env.INPUT_OUTPUT_PATH = props?.outputPath || './cdk-outputs.json'
  process.env.INPUT_SAVE_TO_REPO_ENV =
    props?.saveToRepoEnv?.toString() || 'true'
  process.env.INPUT_SAVE_TO_REPO_SECRETS =
    props?.saveToRepoSecrets?.toString() || 'false'
  process.env.INPUT_OUTPUT_JOB_SUMMARY =
    props?.outputJobSummary?.toString() || 'true'
  process.env.INPUT_SAVE_AS_ARTIFACT =
    props?.saveAsArtifact?.toString() || 'false'
  process.env.INPUT_ARTIFACT_NAME = props?.artifactName || 'cdk-outputs'
  process.env.INPUT_KEYS = props?.keys || 'all'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  return cp.execFileSync(np, [ip], options)
}

test('test runs', () => {
  runAction()
})
