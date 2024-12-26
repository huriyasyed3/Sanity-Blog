import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const client = createClient({
  projectId:"8ss2f04s",
  dataset:"production",
  apiVersion:"v2021-3-25",
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export default client;