export const START_YEAR = 2016

export const calculateYearsOfExperience = (): number => {
  const currentYear = new Date().getFullYear()
  return currentYear - START_YEAR
}
