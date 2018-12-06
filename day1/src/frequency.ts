import * as fs from 'fs';

export function calculateFrequency(pathToFrequencies: string): number {
     var value = 0
     fs.readFileSync(pathToFrequencies, 'utf-8')
     .split(/\r?\n/)
     .forEach(function(line){
          value+=parseInt(line)
        })
          
     return value;
}