// Print all environment variables
Object.entries(process.env)
  .sort(([a], [b]) => a.localeCompare(b)) // Sort alphabetically
  .forEach(([key, value]) => {
    console.log(`${key}=${value}`)
  })

// Print Node version with a separator
console.log('\n=== Node Information ===')
console.log('Node version:', process.version)
