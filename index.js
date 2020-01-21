import { createRequire } from "module"

const require = createRequire(import.meta.url)
const prettierConfig = require("./index.cjs")

export default prettierConfig
