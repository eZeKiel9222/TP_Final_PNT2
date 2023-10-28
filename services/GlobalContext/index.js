import { createContext } from "react";

const defaultShowForm = true
const defaultShowHome = false

export default createContext(defaultShowForm, defaultShowHome)

export { defaultShowForm, defaultShowHome }