import * as yup from 'yup'

import FirestorePlus from './FirestorePlus'
import * as plugins from './plugins'

export * from './Schema'
export * from './Plugin'
export { 
    plugins, 
    // Alias yup
    yup as FieldTypes, 
}

export default FirestorePlus