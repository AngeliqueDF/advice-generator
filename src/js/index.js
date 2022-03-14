const findNewAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice')
  const advice = await response.json()

  return advice
}

window.addEventListener('DOMContentLoaded', async () => {
  const newAdviceBtn = document.getElementById('new-advice')

  newAdviceBtn.addEventListener('click', async () => {
    const adviceID = document.getElementById('advice-id')
    const adviceText = document.getElementById('advice-text')

    const { slip: { id, advice } } = await findNewAdvice()

    adviceID.textContent = id
    adviceText.textContent = advice
  })
})