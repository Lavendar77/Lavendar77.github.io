export const START_YEAR = 2018

export const calculateYearsOfExperience = (): number => {
  const currentYear = new Date().getFullYear()
  return currentYear - START_YEAR
}
