export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // currency: 'BRL'
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = () => {}
