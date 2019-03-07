/**
 * Loads and initializes the client and admin
 * libraries for testing
 */
import client from 'firebase'

import * as admin from 'firebase/app'

client.initializeApp({
    projectId : 'not-a-project'
})

export {client, admin}