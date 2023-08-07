import {ActionProps} from './input'
import * as fs from 'fs'

export type Outputs = {[key: string]: string}
type StackOutputs = {[stack: string]: Outputs}

function buildKeyFilter(keys: string): (key: string) => boolean {
  if (!keys || keys.toLowerCase() === 'all') {
    return () => true
  }
  const keyRx = new RegExp(keys.replace(/,/g, '|'), 'ig')
  return (key: string) => keyRx.test(key)
}

export function parseCDKOutput(options: ActionProps): Outputs {
  if (!fs.existsSync(options.outputPath)) {
    throw new Error(`File does not exist: ${options.outputPath}!`)
  }
  const stackOutput: StackOutputs = JSON.parse(
    fs.readFileSync(options.outputPath, 'utf-8')
  )
  const stackName = Object.keys(stackOutput)[0]
  const filter = buildKeyFilter(options.keys)
  const outputs: Outputs = {}
  for (const outputKey in stackOutput[stackName]) {
    const absoluteKey = options.appendStackName
      ? `${stackName}${outputKey}`
      : outputKey
    const finalKey = options.trimUUID
      ? absoluteKey.replace(/[0-9a-f]+$/i, '')
      : absoluteKey
    if (filter(finalKey)) {
      outputs[finalKey] = stackOutput[stackName][outputKey]
    }
  }
  return outputs
}
