const findNewAdvice = async ()=>{
    const response = await fetch('https://api.adviceslip.com/advice');
    const advice = await response.json();
    return advice;
};
window.addEventListener('DOMContentLoaded', async ()=>{
    const newIdButton = document.getElementById('new-advice');
    newIdButton.addEventListener('click', async ()=>{
        const adviceID = document.getElementById('advice-id');
        const adviceText = document.getElementById('advice-text');
        const { slip: { id , advice  }  } = await findNewAdvice();
        adviceID.textContent = id;
        adviceText.textContent = advice;
    });
});

//# sourceMappingURL=index.20aa7517.js.map
